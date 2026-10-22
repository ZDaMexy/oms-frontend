/* =============================================================
   OMS · CABINET — interactivity
   - Playfield: rAF renderer driven by window.OMS_CHART (chart-lost.js)
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
    const dict = window.OMS_I18N;
    const SUPPORTED = ["zh", "en", "ja"];
    const LANG_TAGS = { zh: "zh-CN", en: "en", ja: "ja-JP" };
    // Storage is a browser boundary: blocked storage only disables persistence.
    const stored = (() => { try { return localStorage.getItem("oms.lang"); } catch (_) { return null; } })();
    const initial = SUPPORTED.includes(stored) ? stored : "zh";

    const apply = (lang) => {
      document.documentElement.lang = LANG_TAGS[lang];
      document.documentElement.dataset.lang = lang;

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const text = dict[key][lang];
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

    apply(initial);
  }

  /* ---------- chart metadata used by the current page ---------- */
  const chart = window.OMS_CHART;
  const totalSeconds = (chart.totalBeats / chart.bpm) * 60;
  document.querySelector("[data-stat='bpm']").textContent = String(chart.bpm);
  document.querySelector("[data-stat='length']").textContent =
    `${Math.floor(totalSeconds / 60)}:${String(Math.floor(totalSeconds % 60)).padStart(2, "0")}`;

  /* ---------- playfield renderer ---------- */
  const playfield = initPlayfield();

  function initPlayfield() {
    const field = document.querySelector("[data-field]");
    const c = window.OMS_CHART;

    const lanes = Array.from(field.querySelectorAll(".lane"));

    const window_ = field.closest(".field-window");
    const scoreEl = window_.querySelector("[data-hud='score']");
    const comboEl = window_.querySelector("[data-hud='combo']");
    const progressEl = window_.querySelector("[data-progress]");
    const gaugeFill = window_.querySelector("[data-gauge-fill]");
    const gaugeVal = window_.querySelector("[data-gauge-val]");
    const deckCells = Array.from(window_.querySelectorAll("[data-deck] > *"));

    const HS_BASE = 1.114; // beats visible at ×1.0
    let VISIBLE_BEATS = HS_BASE;
    const BPS = c.bpm / 60;
    const LEAD = VISIBLE_BEATS;
    const TAIL = 2;

    const notes = c.notes;
    const loopStart = notes[0][0] - LEAD;
    const loopEnd = c.totalBeats + TAIL;

    let laneH = lanes[0].clientHeight;
    const refreshH = () => { laneH = lanes[0].clientHeight; };
    window.addEventListener("resize", refreshH, { passive: true });

    let head = 0;
    const active = [];
    let combo = 0;
    let score = 0;
    let curBeat = loopStart;
    let last = 0;
    let rafId = 0;
    let running = false;
    let visible = false;
    let playing = !reduceMotion;

    const fmtTime = (s) => {
      const m = Math.floor(s / 60);
      const ss = Math.floor(s % 60);
      return `${m}:${String(ss).padStart(2, "0")}`;
    };

    const setHud = () => {
      scoreEl.textContent = String(score).padStart(6, "0");
      comboEl.textContent = String(combo);
      const elapsed = Math.max(0, Math.min(totalSeconds, curBeat / BPS));
      progressEl.textContent = fmtTime(elapsed);
      // GROOVE GAUGE: starts at 20%, climbs with combo, clears/caps at 100%
      const gauge = Math.min(100, Math.round(20 + combo * 0.5));
      gaugeFill.style.width = gauge + "%";
      gaugeVal.textContent = String(gauge);
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

      const flash = (lane) => {
        const cell = deckCells[lane];
        cell.classList.add("is-hit");
        setTimeout(() => cell.classList.remove("is-hit"), 90);
      };
      for (let i = active.length - 1; i >= 0; i--) {
        const a = active[i];
        const headProg = (a.beat - curBeat) / VISIBLE_BEATS;
        if (a.ln > 0) {
          // long note: draw a held bar from head to tail. While the note is
          // being "held", the head pins to the judgment line and the bar
          // shrinks from the bottom; it clears once the tail crosses.
          const tailProg = (a.beat + a.ln - curBeat) / VISIBLE_BEATS;
          if (tailProg < -0.06) {
            a.el.remove();
            active.splice(i, 1);
            combo += 1;
            score += 2;
            flash(a.lane);
            continue;
          }
          const headY = Math.min(laneH, (1 - headProg) * laneH);
          const tailY = (1 - tailProg) * laneH;
          a.el.style.top = tailY + "px";
          a.el.style.height = Math.max(8, headY - tailY) + "px";
          // keep the deck key lit for the duration of the hold
          if (headProg <= 0) deckCells[a.lane].classList.add("is-hit");
          continue;
        }
        if (headProg < -0.06) {
          a.el.remove();
          active.splice(i, 1);
          combo += 1;
          score += 2;
          flash(a.lane);
          continue;
        }
        a.el.style.top = ((1 - headProg) * laneH - 8) + "px";
      }
      setHud();

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

    // User pause, viewport visibility and tab visibility share one playback state.
    const syncPlayback = () => {
      if (playing && visible && !document.hidden) start();
      else stop();
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.1 });
    io.observe(window_);
    document.addEventListener("visibilitychange", syncPlayback);

    if (reduceMotion) {
      document.querySelectorAll('[data-set^="hi-speed:"], [data-set^="playfield:"]').forEach((button) => {
        button.disabled = true;
        if (button.dataset.set.startsWith("playfield:")) {
          button.classList.toggle("is-active", button.dataset.set === "playfield:off");
        }
      });
    }

    return {
      setHiSpeed: (multiplier) => { VISIBLE_BEATS = HS_BASE / Number(multiplier); },
      setPlaying: (on) => { playing = on; syncPlayback(); },
    };
  }

  /* ---------- tweaks panel ---------- */
  initTweaks();

  function initTweaks() {
    const fab = document.querySelector("[data-tweaks-fab]");
    const panel = document.querySelector("[data-tweaks]");

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
    // bind ALL [data-set] controls (tweaks panel + in-field Hi-Speed/Playfield)
    document.querySelectorAll("[data-set]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [key, value] = btn.dataset.set.split(":");
        // dispatch to the right place
        if (key === "hi-speed") {
          playfield.setHiSpeed(value);
        } else if (key === "playfield") {
          playfield.setPlaying(value === "on");
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

  /* ---------- judgement window table (type + difficulty) ---------- */
  initTiming();

  function initTiming() {
    const root = document.querySelector("[data-judge]");
    const typeSel = root.querySelector("[data-judge-type]");
    const diffSel = root.querySelector("[data-judge-diff]");
    const rowLabel = root.querySelector("[data-judge-rowlabel]");
    const cells = [0, 1, 2, 3, 4].map((i) => root.querySelector(`[data-jc="${i}"]`));
    const viz = root.querySelector("[data-judge-viz]");

    // parse a window cell ("±20", "+220 / −280", "+1000", "±16.67", "?") into early/late ms
    const parseWin = (s) => {
      if (s === "?") return null;
      const str = s.replace(/\s/g, "").replace(/−/g, "-");
      if (str[0] === "±") { const v = parseFloat(str.slice(1)); return { early: v, late: v }; }
      const parts = str.split("/");
      let early = 0, late = 0;
      parts.forEach((p) => { const n = Math.abs(parseFloat(p)); if (p.indexOf("-") >= 0) early = n; else late = n; });
      if (parts.length === 1) { const n = Math.abs(parseFloat(parts[0])); early = n; late = n; }
      return { early, late };
    };
    // PG/GR/GD/BD bars (空PR excluded — its window dwarfs the rest and breaks the scale)
    const VIZ_COLS = [
      { i: 0, name: "PG", color: "var(--cyan)" },
      { i: 1, name: "GR", color: "var(--lime)" },
      { i: 2, name: "GD", color: "var(--amber)" },
      { i: 3, name: "BD", color: "var(--hot)" },
    ];
    const renderViz = (cellStrs) => {
      const wins = VIZ_COLS.map((c) => ({ ...c, w: parseWin(cellStrs[c.i]) }));
      const max = Math.max(1, ...wins.map((x) => (x.w ? Math.max(x.w.early, x.w.late) : 0)));
      const rows = wins.map((x) => {
        if (!x.w) return `<div class="timing-viz__row"><span class="timing-viz__name" style="color:${x.color}">${x.name}</span><div class="timing-viz__bar"><span class="timing-viz__center"></span></div><span class="timing-viz__val">—</span></div>`;
        const left = 50 - (x.w.early / max) * 50;
        const right = 50 - (x.w.late / max) * 50;
        const val = (x.w.early === x.w.late) ? `±${x.w.late}` : `+${x.w.late} / −${x.w.early}`;
        return `<div class="timing-viz__row"><span class="timing-viz__name" style="color:${x.color}">${x.name}</span><div class="timing-viz__bar"><i style="left:${left}%;right:${right}%;background:${x.color}"></i><span class="timing-viz__center"></span></div><span class="timing-viz__val">${val}</span></div>`;
      }).join("");
      const m = Math.round(max);
      const scale = `<div class="timing-viz__scale"><span></span><div class="ticks"><span>−${m}</span><span>0</span><span>+${m}</span></div><span class="u">ms</span></div>`;
      viz.innerHTML = rows + scale;
    };

    // OD = osu!mania hit windows: MAX 16 (eff ±16.5), then 64/97/127/151 − 3×OD.
    // 5 osu windows (MAX/300/200/100/50) map to PG/GR/GD/BD/空PR; beyond = miss.
    const od = (v) => "±" + Math.round(v);
    const odDiff = (n) => ({
      name: "OD " + n,
      cells: ["±16", od(64 - 3 * n), od(97 - 3 * n), od(127 - 3 * n), od(151 - 3 * n)],
    });

    const DATA = {
      IIDX: {
        label: "IIDX",
        diffs: [{ name: "most charts", cells: ["±16.67", "±33.33", "±116.67", "±250", "?"] }],
      },
      LR2: {
        label: "LR2",
        diffs: [
          { name: "easy",      cells: ["±21", "±60", "±120", "±200", "+1000"] },
          { name: "normal",    cells: ["±18", "±40", "±100", "±200", "+1000"] },
          { name: "hard",      cells: ["±15", "±30", "±60",  "±200", "+1000"] },
          { name: "very hard", cells: ["±8",  "±24", "±40",  "±200", "+1000"] },
        ],
      },
      RAJA: {
        label: "RAJA",
        diffs: [
          { name: "very easy (125%)", cells: ["±25", "±75", "±187", "+275 / −350", "+500 / −150"] },
          { name: "easy (100%)",      cells: ["±20", "±60", "±150", "+220 / −280", "+500 / −150"] },
          { name: "normal (75%)",     cells: ["±15", "±45", "±112", "+165 / −210", "+500 / −150"] },
          { name: "hard (50%)",       cells: ["±10", "±30", "±75",  "+110 / −140", "+500 / −150"] },
          { name: "very hard (25%)",  cells: ["±5",  "±15", "±37",  "+55 / −70",   "+500 / −150"] },
        ],
      },
      OD: {
        label: "OD (osu!mania)",
        diffs: [10, 9, 8, 7, 6, 5].map(odDiff),
      },
    };

    const types = Object.keys(DATA);
    typeSel.innerHTML = types.map((t) => `<option value="${t}">${DATA[t].label}</option>`).join("");
    const fillDiffs = (t) => {
      diffSel.innerHTML = DATA[t].diffs.map((d, i) => `<option value="${i}">${d.name}</option>`).join("");
    };
    const render = () => {
      const t = typeSel.value;
      const d = DATA[t].diffs[Number(diffSel.value)];
      rowLabel.textContent = `${DATA[t].label} · ${d.name}`;
      d.cells.forEach((c, i) => { cells[i].textContent = c; });
      renderViz(d.cells);
    };

    typeSel.addEventListener("change", () => { fillDiffs(typeSel.value); diffSel.value = "0"; render(); });
    diffSel.addEventListener("change", render);

    // default: RAJA · easy (100%)  (index 1 within RAJA)
    typeSel.value = "RAJA";
    fillDiffs("RAJA");
    diffSel.value = "1";
    render();
  }
})();
