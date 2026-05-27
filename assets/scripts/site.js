/* =============================================================
   OMS · CABINET — interactivity
   - Playfield: rAF renderer driven by window.OMS_CHART (chart-stargazer.js)
   - Score / combo HUD ticks as notes pass the judgment line
   - i18n: zh / en / ja, persisted to localStorage
   - Tweaks panel: signal accent · hi-speed · playfield live/pause
   ============================================================= */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- year stamp + build timestamp ---------- */
  const now = new Date();
  document.querySelectorAll("[data-now]").forEach((n) => {
    const fmt = n.dataset.now;
    if (fmt === "year") n.textContent = String(now.getFullYear());
    else if (fmt === "iso") n.textContent = now.toISOString().slice(0, 10);
    else if (fmt === "stamp") {
      const pad = (x) => String(x).padStart(2, "0");
      n.textContent = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
  });

  /* ---------- i18n: zh / en / ja ---------- */
  initI18n();

  function initI18n() {
    const dict = window.OMS_I18N || {};
    const SUPPORTED = ["zh", "en", "ja"];
    const LANG_TAGS = { zh: "zh-CN", en: "en", ja: "ja-JP" };
    const stored = (() => { try { return localStorage.getItem("oms.lang"); } catch (_) { return null; } })();
    let current = stored && SUPPORTED.includes(stored) ? stored : "zh";

    const apply = (lang) => {
      if (!SUPPORTED.includes(lang)) lang = "zh";
      current = lang;
      document.documentElement.lang = LANG_TAGS[lang];
      document.documentElement.dataset.lang = lang;

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const entry = dict[key];
        if (!entry) return;
        const text = entry[lang] || entry.zh || "";
        if (el.dataset.i18nHtml === "1") el.innerHTML = text;
        else el.textContent = text;
      });

      // language switcher button states
      document.querySelectorAll("[data-lang-set]").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.langSet === lang);
      });

      try { localStorage.setItem("oms.lang", lang); } catch (_) {}
    };

    document.querySelectorAll("[data-lang-set]").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.dataset.langSet));
    });

    apply(current);
  }

  /* ---------- compute static chart stats ---------- */
  const chart = window.OMS_CHART;
  if (chart && chart.notes) {
    const total = chart.notes.length;
    const lanes = [0, 0, 0, 0, 0, 0, 0, 0]; // index 0 = scratch, 1..7 = keys
    chart.notes.forEach((n) => { lanes[n[1]] += 1; });

    // numeric outputs
    const set = (sel, val) => document.querySelectorAll(sel).forEach((el) => (el.textContent = val));
    set("[data-stat='notes']", String(total));
    set("[data-stat='bpm']", String(chart.bpm));
    set("[data-stat='measures']", String(chart.measures));
    set("[data-stat='level']", String(chart.level));
    const seconds = (chart.totalBeats / chart.bpm) * 60;
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    set("[data-stat='length']", `${m}:${String(s).padStart(2, "0")}`);
    const nps = total / seconds;
    set("[data-stat='nps']", nps.toFixed(2));

    // lane-usage breakdown bars
    const laneNames = ["SCR", "1", "2", "3", "4", "5", "6", "7"];
    const max = Math.max(...lanes);
    const laneList = document.querySelector("[data-lanes-list]");
    if (laneList) {
      laneList.innerHTML = "";
      lanes.forEach((count, i) => {
        const row = document.createElement("div");
        row.className = "lanes__row";
        const pct = (count / total * 100);
        const blueLane = i === 2 || i === 4 || i === 6;
        const cls = i === 0 ? "is-scratch" : (blueLane ? "is-blue" : "");
        row.innerHTML = `
          <span class="lanes__name">${laneNames[i]}</span>
          <span class="lanes__bar ${cls}"><i style="width:${(count / max * 100).toFixed(1)}%"></i></span>
          <span class="lanes__pct">${pct.toFixed(1)}%</span>
        `;
        laneList.appendChild(row);
      });
    }

    // density histogram (notes per beat-window bucket)
    const dchart = document.querySelector("[data-density-chart]");
    if (dchart) {
      const BUCKETS = 72;
      const span = chart.totalBeats;
      const counts = new Array(BUCKETS).fill(0);
      chart.notes.forEach((n) => {
        const idx = Math.min(BUCKETS - 1, Math.floor((n[0] / span) * BUCKETS));
        counts[idx] += 1;
      });
      const peak = Math.max(...counts);
      const beatsPerBucket = span / BUCKETS;
      const peakNps = peak / ((beatsPerBucket / chart.bpm) * 60);

      // peak value text
      const peakEl = document.querySelector("[data-density-peak]");
      if (peakEl) peakEl.textContent = peakNps.toFixed(1);

      dchart.innerHTML = "";
      counts.forEach((c) => {
        const bar = document.createElement("i");
        bar.style.height = peak ? `${Math.max(2, (c / peak * 100))}%` : "2%";
        dchart.appendChild(bar);
      });
      // expose for the renderer to highlight current bucket
      dchart.__bars = Array.from(dchart.children);
      dchart.__bucketBeats = beatsPerBucket;
      dchart.__startBeat = chart.notes[0][0];
    }
  }

  /* ---------- playfield renderer ---------- */
  initPlayfield();

  function initPlayfield() {
    const field = document.querySelector("[data-field]");
    const c = window.OMS_CHART;
    if (!field || !c || !c.notes || !c.notes.length) return;
    if (reduceMotion) return;

    const lanes = Array.from(field.querySelectorAll(".lane"));
    if (lanes.length < 8) return;

    const window_ = field.closest(".field-window");
    const scoreEl = window_.querySelector("[data-hud='score']");
    const comboEl = window_.querySelector("[data-hud='combo']");
    const progressEl = window_.querySelector("[data-progress]");
    const gaugeFill = window_.querySelector("[data-gauge-fill]");
    const gaugeVal = window_.querySelector("[data-gauge-val]");
    const deckCells = Array.from(window_.querySelectorAll("[data-deck] > *"));
    const densityBars = document.querySelector("[data-density-chart]");

    let VISIBLE_BEATS = 0.78;
    let RATE = 1;
    let BPS = ((c.bpm || 130) / 60) * RATE;

    // hi-speed tweak — adjusts visible beats only (speed of fall, not playback)
    window.__omsSetHiSpeed = (mode) => {
      if (mode === "slow")   VISIBLE_BEATS = 1.25;
      else if (mode === "fast") VISIBLE_BEATS = 0.5;
      else                   VISIBLE_BEATS = 0.78;
    };
    window.__omsTogglePlay = (on) => { if (on) start(); else stop(); };
    const LEAD = VISIBLE_BEATS;
    const TAIL = 2;

    const notes = c.notes;
    const loopStart = notes[0][0] - LEAD;
    const loopEnd = c.totalBeats + TAIL;

    let laneH = lanes[0].clientHeight || 380;
    const refreshH = () => { laneH = lanes[0].clientHeight || laneH; };
    window.addEventListener("resize", refreshH, { passive: true });

    let head = 0;
    const active = [];
    let combo = 0;
    let score = 0;
    let curBeat = loopStart;
    let last = 0;
    let rafId = 0;
    let running = false;
    let lastBucket = -1;

    const totalSeconds = (c.totalBeats / c.bpm) * 60;
    const fmtTime = (s) => {
      const m = Math.floor(s / 60);
      const ss = Math.floor(s % 60);
      return `${m}:${String(ss).padStart(2, "0")}`;
    };

    const setHud = () => {
      if (scoreEl) scoreEl.textContent = String(score).padStart(6, "0");
      if (comboEl) comboEl.textContent = String(combo);
      if (progressEl) {
        const elapsed = Math.max(0, Math.min(totalSeconds, curBeat / BPS));
        progressEl.textContent = fmtTime(elapsed);
      }
      // GROOVE GAUGE: starts at 20%, climbs with combo, clears/caps at 100%
      const gauge = Math.min(100, Math.round(20 + combo * 0.5));
      if (gaugeFill) gaugeFill.style.width = gauge + "%";
      if (gaugeVal) gaugeVal.textContent = String(gauge);
    };

    const reset = () => {
      active.forEach((a) => a.el.remove());
      active.length = 0;
      head = 0;
      combo = 0;
      score = 0;
      curBeat = loopStart;
      setHud();
    };

    const spawn = (note) => {
      const el = document.createElement("i");
      el.className = note[2] > 0 ? "note note--ln" : "note";
      lanes[note[1]].appendChild(el);
      active.push({ beat: note[0], lane: note[1], ln: note[2], el });
    };

    const frame = (t) => {
      if (!running) return;
      if (!last) last = t;
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      curBeat += dt * BPS;

      if (curBeat > loopEnd) reset();

      while (head < notes.length && notes[head][0] <= curBeat + VISIBLE_BEATS) {
        spawn(notes[head]);
        head++;
      }

      const pxPerBeat = laneH / VISIBLE_BEATS;
      for (let i = active.length - 1; i >= 0; i--) {
        const a = active[i];
        const progress = (a.beat - curBeat) / VISIBLE_BEATS;
        if (progress < -0.06) {
          a.el.remove();
          active.splice(i, 1);
          combo += 1;
          score += 2;
          const cell = deckCells[a.lane];
          if (cell) {
            cell.classList.add("is-hit");
            setTimeout(() => cell.classList.remove("is-hit"), 90);
          }
          continue;
        }
        const h = a.ln > 0 ? Math.max(8, a.ln * pxPerBeat) : 8;
        if (a.ln > 0) a.el.style.height = h + "px";
        a.el.style.top = ((1 - progress) * laneH - h) + "px";
      }
      setHud();

      // highlight density bucket
      if (densityBars && densityBars.__bars) {
        const span = c.totalBeats;
        const idx = Math.min(densityBars.__bars.length - 1, Math.max(0, Math.floor((curBeat / span) * densityBars.__bars.length)));
        if (idx !== lastBucket) {
          if (lastBucket >= 0 && densityBars.__bars[lastBucket]) densityBars.__bars[lastBucket].classList.remove("is-here");
          if (densityBars.__bars[idx]) densityBars.__bars[idx].classList.add("is-here");
          lastBucket = idx;
        }
      }

      rafId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      refreshH();
      rafId = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };

    setHud();

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        const vis = entries[0].isIntersecting;
        if (vis) start();
        else stop();
      }, { threshold: 0.1 });
      io.observe(window_);
    } else {
      start();
    }

    document.addEventListener("visibilitychange", () => {
      // Only stop on real tab-hide; many embedded previews report hidden=true at load.
      if (document.visibilityState === "hidden") stop();
      else start();
    });
  }

  /* ---------- tweaks panel ---------- */
  initTweaks();

  function initTweaks() {
    const fab = document.querySelector("[data-tweaks-fab]");
    const panel = document.querySelector("[data-tweaks]");
    if (!fab || !panel) return;

    fab.classList.add("is-visible");
    fab.addEventListener("click", () => {
      panel.classList.add("is-open");
      fab.classList.remove("is-visible");
    });
    panel.querySelector("[data-tweaks-close]").addEventListener("click", () => {
      panel.classList.remove("is-open");
      fab.classList.add("is-visible");
    });

    const html = document.documentElement;
    panel.querySelectorAll("[data-set]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [key, value] = btn.dataset.set.split(":");
        // dispatch to the right place
        if (key === "hi-speed" && typeof window.__omsSetHiSpeed === "function") {
          window.__omsSetHiSpeed(value);
        } else if (key === "playfield" && typeof window.__omsTogglePlay === "function") {
          window.__omsTogglePlay(value === "on");
        } else {
          html.dataset[key] = value;
        }
        // toggle active sibling state
        const siblings = btn.parentElement.querySelectorAll("button");
        siblings.forEach((s) => s.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  }
})();
