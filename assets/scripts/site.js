// OMS static site — progressive enhancement only (no dependencies)
(() => {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const currentPage = body.dataset.page;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // mobile nav toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        body.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // mark active nav link
  document.querySelectorAll("[data-link]").forEach((link) => {
    if (link instanceof HTMLAnchorElement && link.dataset.link === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  // year stamp
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = `更新于 ${new Date().getFullYear()}`;
  });

  // scroll-aware header (rAF-throttled)
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // reveal-on-scroll
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  // ----- playfield: scroll a parsed BMS chart through the IIDX field -----
  // Falls back to the static CSS note loop if the chart is missing or the
  // user prefers reduced motion. Note data is positions only (window.OMS_CHART).
  initPlayfield();

  function initPlayfield() {
    const field = document.querySelector(".playfield--iidx .playfield__field");
    const chart = window.OMS_CHART;
    if (!field || reduceMotion || !chart || !Array.isArray(chart.notes) || !chart.notes.length) {
      return; // keep the CSS fallback loop
    }

    const lanes = Array.from(field.querySelectorAll(".lane"));
    if (lanes.length < 8) return;

    // take over from the static fallback notes
    field.querySelectorAll(".note").forEach((n) => n.remove());

    const playfield = field.closest(".playfield");
    const scoreEl = playfield.querySelector(".hud-block:not(.hud-block--combo) b");
    const comboEl = playfield.querySelector(".hud-block--combo b");
    const deckCells = Array.from(playfield.querySelectorAll(".playfield__deck > *")); // [turntable, key1..key7]

    // visual tuning (decoupled from the chart's real 182 BPM, per "hero 微调")
    const VISIBLE_BEATS = 0.72;           // hi-speed: beats shown from top to judgment line (~0.5s fall at 87 BPM)
    const RATE = 1;                       // playback rate relative to the song's real tempo (1 = real time)
    const BPS = ((chart.bpm || 130) / 60) * RATE; // advance through the chart at its real BPM
    const LEAD = VISIBLE_BEATS;
    const TAIL = 2;

    const notes = chart.notes;       // [beat, lane, lnBeats] sorted by beat
    const loopStart = notes[0][0] - LEAD;
    const loopEnd = chart.totalBeats + TAIL;

    let laneH = lanes[0].clientHeight || 380;
    const refreshH = () => { laneH = lanes[0].clientHeight || laneH; };
    window.addEventListener("resize", refreshH, { passive: true });

    let head = 0;                    // next note index to spawn
    const active = [];               // { beat, lane, ln, el }
    let combo = 0;
    let score = 0;
    let curBeat = loopStart;
    let last = 0;
    let rafId = 0;
    let running = false;

    const setHud = () => {
      if (scoreEl) scoreEl.textContent = String(score).padStart(6, "0");
      if (comboEl) comboEl.textContent = String(combo);
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
      el.className = note[2] > 0 ? "note note--long" : "note";
      el.style.animation = "none"; // renderer controls position; disable the CSS fallback loop
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
        const progress = (a.beat - curBeat) / VISIBLE_BEATS; // 1 = top, 0 = line
        if (progress < -0.06) {
          a.el.remove();
          active.splice(i, 1);
          combo += 1;
          score += 2;
          const cell = deckCells[a.lane];
          if (cell) {
            cell.classList.add("is-hit");
            setTimeout(() => cell.classList.remove("is-hit"), 110);
          }
          continue;
        }
        const h = a.ln > 0 ? Math.max(13, a.ln * pxPerBeat) : 13;
        if (a.ln > 0) a.el.style.height = h + "px";
        // note's BOTTOM edge meets the judgment line (laneH) at progress 0
        a.el.style.top = ((1 - progress) * laneH - h) + "px";
      }
      if (combo) setHud();

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

    // only run while the playfield is on-screen and the tab is visible
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          const vis = entries[0].isIntersecting;
          if (vis && !document.hidden) start();
          else stop();
        },
        { threshold: 0.1 },
      );
      io.observe(playfield);
    } else {
      start();
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });
  }
})();
