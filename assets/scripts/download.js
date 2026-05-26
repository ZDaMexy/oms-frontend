/* =============================================================
   OMS · DOWNLOAD — fetch latest GitHub release and render it.
   Falls back to a "no release / view on GitHub" panel on any
   failure (404 = no releases yet; network error; rate limit).
   ============================================================= */
(() => {
  const REPO          = "ZDaMexy/oms";
  const API_LATEST    = `https://api.github.com/repos/${REPO}/releases/latest`;
  const RELEASES_PAGE = `https://github.com/${REPO}/releases`;

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- formatting helpers ---------- */
  const fmtBytes = (b) => {
    if (b == null) return "—";
    if (b < 1024)             return b + " B";
    if (b < 1024 * 1024)      return (b / 1024).toFixed(1) + " KB";
    if (b < 1024 * 1024 * 1024) return (b / 1024 / 1024).toFixed(2) + " MB";
    return (b / 1024 / 1024 / 1024).toFixed(2) + " GB";
  };
  const fmtDate = (iso) => {
    if (!iso) return "—";
    const d = new Date(iso);
    if (isNaN(d)) return "—";
    const pad = (x) => String(x).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  /* ---------- which asset is the primary download? ---------- */
  const scoreAsset = (a) => {
    const n = (a.name || "").toLowerCase();
    let s = 0;
    if (n.endsWith(".zip"))      s += 5;
    if (n.endsWith(".dll"))      s += 4;
    if (n.endsWith(".7z"))       s += 3;
    if (n.endsWith(".tar.gz"))   s += 2;
    if (n.includes("bms"))       s += 2;
    if (n.includes("ruleset"))   s += 2;
    if (n.includes("oms"))       s += 1;
    if (n.endsWith(".sha256") || n.endsWith(".asc") || n.includes("source"))
      s -= 4;
    return s;
  };
  const pickPrimary = (assets) => {
    if (!assets || !assets.length) return null;
    return [...assets].sort((a, b) => scoreAsset(b) - scoreAsset(a))[0];
  };

  /* ---------- render: has-release branch ---------- */
  const renderHas = (r) => {
    $("[data-rel-loading]").hidden = true;
    $("[data-rel-has]").hidden = false;

    // tag + title
    $("[data-rel-tag]").textContent   = r.tag_name || r.name || "—";
    const subtitle = r.name && r.name !== r.tag_name ? r.name : "";
    $("[data-rel-title]").textContent = subtitle;

    // meta
    $("[data-rel-date]").textContent       = fmtDate(r.published_at || r.created_at);
    $("[data-rel-author]").textContent     = (r.author && r.author.login) || "—";
    $("[data-rel-asset-count]").textContent = String((r.assets || []).length);

    // primary CTA
    const primary = pickPrimary(r.assets);
    const primaryBtn = $("[data-rel-primary]");
    if (primary) {
      primaryBtn.href = primary.browser_download_url;
      primaryBtn.setAttribute("rel", "noopener");
      const file = primaryBtn.querySelector("[data-rel-primary-file]");
      if (file) file.textContent = primary.name;
      primaryBtn.hidden = false;
    } else {
      primaryBtn.hidden = true;
    }

    // github link
    const gh = $("[data-rel-github]");
    gh.href = r.html_url || RELEASES_PAGE;
    gh.target = "_blank";
    gh.rel = "noopener";

    // assets list
    const list = $("[data-rel-assets]");
    const assetsSec = $("[data-rel-assets-section]");
    if (r.assets && r.assets.length) {
      list.innerHTML = "";
      r.assets.forEach((a, i) => {
        const row = document.createElement("a");
        row.className = "rel-asset" + (a === primary ? " is-primary" : "");
        row.href = a.browser_download_url;
        row.target = "_blank";
        row.rel = "noopener";
        row.innerHTML = `
          <span class="rel-asset__no">${String(i + 1).padStart(2, "0")}</span>
          <span class="rel-asset__name">${esc(a.name)}</span>
          <span class="rel-asset__size">${fmtBytes(a.size)}</span>
          <span class="rel-asset__dl"><i></i> ${a.download_count != null ? a.download_count : "—"} DL</span>
          <span class="rel-asset__arr">↓</span>
        `;
        list.appendChild(row);
      });
    } else {
      assetsSec.hidden = true;
    }

    // notes
    const notesEl   = $("[data-rel-notes]");
    const notesEmp  = $("[data-rel-notes-empty]");
    const body      = (r.body || "").trim();
    if (body) {
      notesEl.textContent = body;
      notesEl.hidden = false;
      if (notesEmp) notesEmp.hidden = true;
    } else {
      notesEl.hidden = true;
      if (notesEmp) notesEmp.hidden = false;
    }

    // cab-bar led: amber → on (green)
    const led = $("[data-rel-led]");
    if (led) { led.classList.remove("led--amber"); led.classList.add("led--on"); }
  };

  /* ---------- render: no-release branch ---------- */
  const renderNone = (reason) => {
    $("[data-rel-loading]").hidden = true;
    $("[data-rel-none]").hidden = false;

    // surface the failure reason (network / 4xx / 5xx) in mono
    const reasonEl = $("[data-rel-reason]");
    if (reasonEl && reason && reason !== "no_release") {
      reasonEl.hidden = false;
      reasonEl.textContent = "ERR · " + reason;
    }

    // wire up the GitHub button (it's a link with href set in HTML, but be safe)
    $$("[data-rel-github-fallback]").forEach((a) => {
      a.href = RELEASES_PAGE;
      a.target = "_blank";
      a.rel = "noopener";
    });
  };

  /* ---------- run ---------- */
  fetch(API_LATEST, { headers: { Accept: "application/vnd.github+json" } })
    .then((r) => {
      if (r.status === 404) { renderNone("no_release"); return null; }
      if (!r.ok)            { renderNone("http_" + r.status); return null; }
      return r.json();
    })
    .then((data) => { if (data) renderHas(data); })
    .catch((e) => renderNone("network"));
})();
