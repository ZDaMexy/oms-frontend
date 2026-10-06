"use strict";

(() => {
  const apiRoot = "/api/ir/v1";
  const pageSize = 20;
  const number = new Intl.NumberFormat("zh-CN");
  const dateTime = new Intl.DateTimeFormat("zh-CN", { dateStyle: "short", timeStyle: "short" });
  const lamps = [
    { label: "NO PLAY", className: "" },
    { label: "FAILED", className: "lamp--failed" },
    { label: "ASSIST EASY", className: "lamp--assist" },
    { label: "EASY CLEAR", className: "lamp--easy" },
    { label: "CLEAR", className: "lamp--clear" },
    { label: "HARD CLEAR", className: "lamp--hard" },
    { label: "EX HARD", className: "lamp--exhard" },
    { label: "HAZARD CLEAR", className: "lamp--hazard" },
    { label: "FULL COMBO", className: "lamp--full" },
    { label: "PERFECT", className: "lamp--perfect" },
  ];
  const statLabels = {
    perfect: "PERFECT",
    great: "GREAT",
    good: "GOOD",
    ok: "OK",
    meh: "MEH",
    miss: "MISS",
    combo_break: "COMBO BREAK",
    ignore_hit: "IGNORE HIT",
    ignore_miss: "IGNORE MISS",
    large_tick_hit: "LARGE TICK HIT",
    large_tick_miss: "LARGE TICK MISS",
    small_tick_hit: "SMALL TICK HIT",
    small_tick_miss: "SMALL TICK MISS",
    small_bonus: "SMALL BONUS",
    large_bonus: "LARGE BONUS",
    slider_tail_hit: "SLIDER TAIL HIT",
    legacy_combo_increase: "LEGACY COMBO",
  };
  const bmsStatLabels = { perfect: "PGREAT", great: "GREAT", good: "GOOD", ok: "EMPTY POOR", meh: "BAD", miss: "POOR" };
  const ids = [
    "page-message", "reload-charts", "catalog-message", "catalog-list", "charts-prev", "charts-page", "charts-next",
    "account-state", "account-logged-out", "account-logged-in", "account-username", "login-tab", "register-tab",
    "auth-form", "username", "password", "register-hint", "auth-submit", "mine-button", "logout-button", "auth-message",
    "ranking", "board-tab", "history-tab", "board-view", "history-view", "board-mode", "board-title", "board-subtitle",
    "group-select", "reload-board", "board-total", "board-message", "board-table-wrap", "board-body", "board-score-heading",
    "board-prev", "board-page", "board-next", "reload-history", "history-total", "history-message", "history-table-wrap",
    "history-body", "history-prev", "history-page", "history-next", "score-dialog", "detail-title", "detail-subtitle",
    "detail-summary", "detail-statistics", "detail-lamp-note",
    "chart-search", "chart-query", "source-control", "source-choices", "sources-all", "sources-none", "ranking-mode",
    "board-me", "board-condition-heading", "board-lamp-heading", "board-lamp-note", "ranking-mode-control", "detail-fields-heading", "key-form", "key-source", "key-label", "key-message", "key-secret", "key-secret-label", "key-list", "ir-profile", "keys",
  ];
  const dom = Object.fromEntries(ids.map((id) => {
    const node = document.getElementById(id);
    if (!node) throw new Error(`Missing page element: ${id}`);
    return [id, node];
  }));

  let user = null;
  let authMode = "login";
  let catalogPage = 1;
  let catalog = [];
  let selectedChart = null;
  let selectedGroup = null;
  let sourceRegistry = [];
  let selectedSources = null;
  let rankingMode = "reference";
  let selectedCondition = "";
  let boardConditions = [];
  let catalogQuery = "";
  let keyRevision = 0;
  let boardPage = 1;
  let historyPage = 1;
  let catalogRevision = 0;
  let boardRevision = 0;
  let chartRevision = 0;
  let historyRevision = 0;
  let accountRevision = 0;
  let refreshPromise = null;
  let authMutationPending = false;
  let sessionCheckPending = false;
  const authLockName = "oms-ir-session-v1";
  const sessionChannel = new BroadcastChannel(authLockName);

  class ApiError extends Error {
    constructor(status, code, message, retryAfter) {
      super(message);
      this.status = status;
      this.code = code;
      this.retryAfter = retryAfter;
    }
  }

  class ConnectionError extends Error {
    constructor() {
      super("暂时无法连接到 IR，请检查网络后重试。");
    }
  }

  async function send(path, options = {}) {
    const method = options.method || "GET";
    const headers = { Accept: "application/json" };
    if (method === "POST") {
      headers["Content-Type"] = "application/json";
      headers["X-OMS-IR"] = "1";
    }
    let response;
    try {
      response = await fetch((options.apiRoot || apiRoot) + path, {
        method,
        headers,
        credentials: "same-origin",
        cache: "no-store",
        body: method === "POST" ? JSON.stringify(options.body) : undefined,
      });
    } catch (error) {
      if (error instanceof TypeError) throw new ConnectionError();
      throw error;
    }
    let data = null;
    if (response.status !== 204) {
      try {
        data = await response.json();
      } catch (error) {
        if (error instanceof SyntaxError) throw new ApiError(response.status, "invalid_response", "服务返回了无法读取的内容，请重试或联系维护者。");
        throw error;
      }
    }
    return { response, data };
  }

  function failure(result) {
    return new ApiError(result.response.status, result.data.error.code, result.data.error.message, result.response.headers.get("Retry-After"));
  }

  async function refreshSession(accountAtStart) {
    if (!refreshPromise) {
      refreshPromise = navigator.locks.request(authLockName, async () => {
        if (accountAtStart !== accountRevision) return false;
        const current = await send("/user/me");
        if (current.response.ok) return true;
        if (current.response.status !== 401) throw failure(current);
        const result = await send("/auth/refresh", { method: "POST", body: {} });
        if (result.response.status === 401) return false;
        if (!result.response.ok) throw failure(result);
        return true;
      }).finally(() => { refreshPromise = null; });
    }
    return refreshPromise;
  }

  async function request(path, options = {}) {
    const accountAtStart = accountRevision;
    let result = await send(path, options);
    const authEntry = ["/auth/login", "/auth/register", "/auth/refresh"].includes(path);
    if (result.response.status === 401 && !authEntry && options.refresh !== false && accountAtStart === accountRevision && await refreshSession(accountAtStart)) {
      result = await send(path, options);
    }
    if (!result.response.ok) throw failure(result);
    return result.data;
  }

  function errorText(error) {
    if (error instanceof ConnectionError) return error.message;
    if (!(error instanceof ApiError)) throw error;
    if (error.code === "invalid_credentials") return error.message;
    if (error.status === 401) return "登录已失效，请重新登录。";
    if (error.status === 429) return error.retryAfter ? `请求过于频繁，请在 ${error.retryAfter} 秒后重试。` : "请求过于频繁，请稍后重试。";
    return error.message;
  }

  function message(node, text, isError = false) {
    node.textContent = text;
    node.hidden = text.length === 0;
    node.classList.toggle("is-error", isError);
  }

  function pageMessage(text, success = false) {
    message(dom["page-message"], text);
    dom["page-message"].classList.toggle("is-success", success);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function percentage(value) {
    return `${(value * 100).toFixed(2)}%`;
  }

  function date(value) {
    return dateTime.format(new Date(value));
  }

  function title(chart) {
    return chart.title || chart.md5;
  }

  function chartSubtitle(chart) {
    return [chart.artist, chart.difficulty].filter((value) => value).join(" · ");
  }

  function pagination(prefix, data) {
    const pages = Math.max(1, Math.ceil(data.total / data.limit));
    dom[`${prefix}-page`].textContent = `${data.page} / ${pages}`;
    dom[`${prefix}-prev`].disabled = data.page <= 1;
    dom[`${prefix}-next`].disabled = data.page >= pages;
  }

  function resetPagination(prefix) {
    dom[`${prefix}-page`].textContent = "待读取";
    dom[`${prefix}-prev`].disabled = true;
    dom[`${prefix}-next`].disabled = true;
  }

  function setAuthBusy(busy) {
    for (const control of dom["auth-form"].elements) control.disabled = busy;
    dom["login-tab"].disabled = busy;
    dom["register-tab"].disabled = busy;
    dom["auth-submit"].textContent = busy ? (authMode === "register" ? "正在注册…" : "正在登录…") : (authMode === "register" ? "注册并登录" : "登录");
  }

  function setAuthMode(mode) {
    authMode = mode;
    dom["login-tab"].classList.toggle("is-active", mode === "login");
    dom["register-tab"].classList.toggle("is-active", mode === "register");
    dom["login-tab"].setAttribute("aria-pressed", String(mode === "login"));
    dom["register-tab"].setAttribute("aria-pressed", String(mode === "register"));
    dom["password"].autocomplete = mode === "register" ? "new-password" : "current-password";
    dom["register-hint"].hidden = mode !== "register";
    dom["auth-submit"].textContent = mode === "register" ? "注册并登录" : "登录";
    message(dom["auth-message"], "");
  }

  function setView(view) {
    const isHistory = view === "history";
    dom["board-view"].hidden = isHistory;
    dom["history-view"].hidden = !isHistory;
    dom["board-tab"].classList.toggle("is-active", !isHistory);
    dom["history-tab"].classList.toggle("is-active", isHistory);
    dom["board-tab"].setAttribute("aria-pressed", String(!isHistory));
    dom["history-tab"].setAttribute("aria-pressed", String(isHistory));
  }

  function setUser(nextUser) {
    user = nextUser;
    accountRevision += 1;
    historyRevision += 1;
    boardRevision += 1;
    keyRevision += 1;
    dom["board-me"].textContent = "";
    dom["board-me"].hidden = true;
    dom["key-secret"].value = "";
    dom["key-secret"].hidden = true;
    dom["key-secret-label"].hidden = true;
    dom["key-list"].replaceChildren();
    message(dom["key-message"], "");
    dom["account-logged-out"].hidden = user !== null;
    dom["account-logged-in"].hidden = user === null;
    dom["account-state"].textContent = user ? "已登录" : "未登录";
    dom["account-username"].textContent = user ? user.username : "";
    dom["ir-profile"].href = user ? "/users/?id=" + user.id : "/users/";
    dom["history-tab"].disabled = user === null;
    dom["history-body"].replaceChildren();
    dom["history-table-wrap"].hidden = true;
    message(dom["history-message"], "正在读取本人记录…");
    dom["history-total"].textContent = "尚未读取";
    resetPagination("history");
    dom["score-dialog"].close();
    dom["detail-summary"].replaceChildren();
    dom["detail-statistics"].replaceChildren();
    if (!user) setView("board");
    if (selectedChart) void loadBoard();
    if (user) void loadKeys();
  }

  function markSelectedChart() {
    for (const button of dom["catalog-list"].querySelectorAll("button")) {
      const selected = selectedChart !== null && button.dataset.md5 === selectedChart.chart.md5;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    }
  }

  async function loadCatalog() {
    const revision = ++catalogRevision;
    dom["reload-charts"].disabled = true;
    dom["catalog-list"].replaceChildren();
    message(dom["catalog-message"], "正在读取谱面…");
    resetPagination("charts");
    try {
      const data = await request(`/charts?q=${encodeURIComponent(catalogQuery)}&page=${catalogPage}&limit=${pageSize}`, { refresh: false, apiRoot: "/api/ir/v2" });
      if (revision !== catalogRevision) return;
      catalog = data.items;
      for (const item of catalog) {
        const row = element("li");
        const button = element("button", "chart-button");
        button.type = "button";
        button.dataset.md5 = item.chart.md5;
        button.append(element("span", "chart-title", title(item.chart)), element("span", "chart-artist", chartSubtitle(item.chart)));
        const meta = element("span", "chart-meta");
        meta.append(element("span", "", item.ruleset.toUpperCase()), element("span", "", `${number.format(item.available_sources.length)} 个来源`));
        button.append(meta);
        button.addEventListener("click", () => chooseChart(item));
        row.append(button);
        dom["catalog-list"].append(row);
      }
      markSelectedChart();
      message(dom["catalog-message"], catalog.length === 0 ? "没有找到符合查询的谱面。" : "");
      pagination("charts", data);
    } catch (error) {
      if (revision !== catalogRevision) return;
      message(dom["catalog-message"], errorText(error), true);
    } finally {
      if (revision === catalogRevision) dom["reload-charts"].disabled = false;
    }
  }

  function chooseChart(item, groupId, restore = null) {
    chartRevision += 1;
    selectedChart = item;
    selectedGroup = groupId === undefined ? item.groups[0] : item.groups.find((group) => group.id === groupId);
    rankingMode = restore?.mode === "comparable" ? "comparable" : "reference";
    selectedCondition = restore?.condition || "";
    boardPage = restore?.page || 1;
    boardConditions = [];
    setView("board");
    dom["board-mode"].textContent = `${item.ruleset.toUpperCase()} / 谱面成绩`;
    dom["board-title"].textContent = title(item.chart);
    dom["board-subtitle"].textContent = chartSubtitle(item.chart);
    dom["source-control"].hidden = item.ruleset !== "bms";
    dom["ranking-mode-control"].hidden = item.ruleset !== "bms";
    dom["board-lamp-note"].hidden = item.ruleset !== "bms";
    dom["board-lamp-heading"].textContent = item.ruleset === "bms" ? "独立最佳灯" : "通过";
    dom["ranking-mode"].disabled = item.ruleset !== "bms";
    dom["ranking-mode"].value = rankingMode;
    if (item.ruleset === "bms") updateConditions([]);
    else {
      dom["group-select"].replaceChildren();
      for (const group of item.groups) {
        const option = element("option", "", group.label);
        option.value = group.id;
        dom["group-select"].append(option);
      }
      dom["group-select"].value = selectedGroup?.id || "";
      dom["group-select"].disabled = !selectedGroup;
    }
    markSelectedChart();
    void loadBoard();
  }

  function sourceLabel(code) {
    return sourceRegistry.find((source) => source.code === code)?.label || code;
  }

  function updateConditions(conditions) {
    boardConditions = conditions;
    const placeholder = element("option", "", rankingMode === "reference" ? "参考混榜包含不同游玩条件" : "请选择已确认条件");
    placeholder.value = "";
    dom["group-select"].replaceChildren(placeholder);
    for (const condition of conditions) {
      const option = element("option", "", condition.label);
      option.value = condition.id;
      dom["group-select"].append(option);
    }
    if (selectedCondition && !conditions.some((item) => item.id === selectedCondition)) {
      const option = element("option", "", "请重新选择当前来源的条件");
      option.value = selectedCondition;
      dom["group-select"].append(option);
    }
    dom["group-select"].value = rankingMode === "comparable" ? selectedCondition : "";
    dom["group-select"].disabled = rankingMode === "reference" || conditions.length === 0;
  }

  function saveSelection() {
    const url = new URL(location.href);
    if (selectedChart) {
      url.searchParams.set("md5", selectedChart.chart.md5);
      url.searchParams.set("page", String(boardPage));
      if (selectedChart.ruleset === "bms") {
        url.searchParams.set("sources", (selectedSources || []).join(","));
        url.searchParams.set("mode", rankingMode);
        if (rankingMode === "comparable" && selectedCondition) url.searchParams.set("condition", selectedCondition);
        else url.searchParams.delete("condition");
        url.searchParams.delete("group");
      } else if (selectedGroup) url.searchParams.set("group", selectedGroup.id);
    }
    if (catalogQuery) url.searchParams.set("q", catalogQuery);
    else url.searchParams.delete("q");
    history.replaceState(null, "", url);
  }

  const recordLabels = { play: "OMS 新局", best_state: "播放器最佳状态", archive_best: "历史最佳摘要" };
  const conditionLabels = { keymode: "键数", judge_rank: "判定档", judge_algorithm: "判定规则", gauge: "原血条", gauge_type: "血条", long_note_mode: "长键", total: "TOTAL", option_1: "原选项 1", option_2: "原选项 2", option_3: "原选项 3", option_4: "原选项 4", input: "输入方式", sha256: "内容 SHA256", max_ex_score: "最大 EX", mods: "玩法", assist: "辅助标记", frequency: "频率", cross_player_parity: "跨播放器规则一致性", played_at: "逐局时间", gauge_rules: "血条规则", branch_policy: "分支规则" };

  function lampFamilyLabel(family) {
    if (family.startsWith("oms:")) return selectedChart.groups.find((group) => group.id === family.slice(4))?.label || "OMS 原条件";
    return family.startsWith("unknown:") ? "原规则未知" : family;
  }

  function referenceRow(item) {
    const row = element("tr");
    const identity = item.identity;
    const score = item.score;
    const player = element("td", "player-name");
    if (identity.namespace === "oms") {
      const profileLink = element("a", "", identity.username || "原名称为空");
      profileLink.href = "/users/?id=" + identity.id;
      player.append(profileLink);
    } else {
      player.append(document.createTextNode(identity.username || "原名称为空"));
    }
    player.append(element("span", "identity-note", `${identity.namespace === "lr2ir" ? "LR2IR 旧 ID" : "OMS ID"} #${identity.id}`));
    const scoreValue = element("td");
    scoreValue.append(element("span", "score-value", number.format(score.ex_score)), element("span", "score-sub", score.max_ex_score === null ? "最大 EX 未收录" : `/ ${number.format(score.max_ex_score)} EX`));
    const condition = element("td");
    condition.append(element("span", "cell-primary", sourceLabel(score.source)), element("span", "cell-note", rankingMode === "comparable" ? "已选择同条件" : `条件含 ${score.unknown_fields.length} 项未知`));
    const lamp = element("td");
    for (const best of item.best_lamps) lamp.append(element("span", "reference-lamp", `${best.label} · ${sourceLabel(best.source)} · ${best.rule_label || lampFamilyLabel(best.family)}`));
    if (item.best_lamps.length === 0) lamp.append(element("span", "reference-lamp", score.lamp ? `${score.lamp.label} · 原摘要灯，规则未知` : "灯未收录"));
    const time = element("td", "small-label", recordLabels[score.record_kind]);
    time.append(element("span", "cell-note", score.played_at ? date(score.played_at) : "游玩时间未提供"));
    const action = element("td");
    const button = element("button", "text-button", "详情 ↗");
    button.type = "button";
    button.addEventListener("click", () => showReferenceDetail(item));
    action.append(button);
    row.append(element("td", item.rank <= 3 ? "rank rank--top" : "rank", String(item.rank)), player, scoreValue, condition, lamp, time, action);
    return row;
  }

  function scoreCell(score) {
    const cell = element("td");
    if (score.ruleset === "bms") {
      cell.append(element("span", "score-value", number.format(score.ex_score)), element("span", "score-sub", `/ ${number.format(score.max_ex_score)} EX`));
    } else {
      cell.append(element("span", "score-value", number.format(score.total_score)), element("span", "score-sub", "TOTAL SCORE"));
    }
    return cell;
  }

  function accuracyCell(score) {
    const cell = element("td");
    cell.append(element("span", "cell-primary", percentage(score.accuracy)), element("span", "cell-note", `${number.format(score.max_combo)} COMBO`));
    return cell;
  }

  function lampNode(value) {
    const lamp = lamps[value];
    return element("span", `lamp ${lamp.className}`, lamp.label);
  }

  function boardLampCell(item) {
    const cell = element("td");
    if (item.score.ruleset === "mania") {
      cell.append(element("span", "cell-primary", item.score.passed ? "通过" : "未通过"));
      return cell;
    }
    cell.append(lampNode(item.best_lamp));
    cell.append(element("span", "cell-note", item.best_lamp_score_id === item.score.id ? "与最佳分同局" : "另一局取得"));
    if (item.best_lamp_score_id !== item.score.id) cell.append(element("span", "cell-note", `最佳分本局：${lamps[item.score.ruleset_data.clear_lamp].label}`));
    return cell;
  }

  async function loadBoard() {
    if (!selectedChart) return;
    const revision = ++boardRevision;
    const chart = selectedChart;
    const group = selectedGroup;
    dom["board-body"].replaceChildren();
    dom["board-table-wrap"].hidden = true;
    dom["reload-board"].disabled = true;
    dom["board-total"].textContent = "正在读取";
    message(dom["board-message"], "正在读取榜单…");
    resetPagination("board");
    message(dom["board-me"], "");
    saveSelection();
    try {
      if (chart.ruleset === "bms") {
        const awaitingCondition = rankingMode === "comparable" && !selectedCondition;
        const params = new URLSearchParams({ sources: (selectedSources || []).join(","), mode: awaitingCondition ? "reference" : rankingMode, page: String(boardPage), limit: String(pageSize) });
        if (rankingMode === "comparable" && selectedCondition) params.set("condition", selectedCondition);
        const data = await request(`/multisource/scores/chart/${encodeURIComponent(chart.chart.md5)}?${params}`);
        if (revision !== boardRevision) return;
        selectedChart = { ...chart, groups: data.groups };
        updateConditions(data.conditions);
        dom["board-score-heading"].textContent = "最佳 EX";
        dom["board-condition-heading"].textContent = "来源 / 条件";
        if (awaitingCondition) {
          dom["board-total"].textContent = "等待选择条件";
          message(dom["board-message"], data.conditions.length ? "请选择上方已确认的同条件。其他来源的未知条件不会被当作一致。" : "当前来源没有已证明的同条件，可切回参考混榜。");
          return;
        }
        for (const item of data.items) dom["board-body"].append(referenceRow(item));
        dom["board-total"].textContent = `${number.format(data.total)} 个参榜账号 · ${rankingMode === "reference" ? "EX 参考混榜" : "同条件榜"}`;
        dom["board-table-wrap"].hidden = data.items.length === 0;
        message(dom["board-message"], data.notice);
        if (user) message(dom["board-me"], data.me ? `本人全榜名次：${data.me.rank} / ${number.format(data.total)} · ${number.format(data.me.score.ex_score)} EX · ${sourceLabel(data.me.score.source)}` : "当前所选来源和条件没有本人的公开成绩。");
        pagination("board", data);
        return;
      }
      if (!group) { message(dom["board-message"], "此谱面没有公开条件组。"); dom["board-total"].textContent = "0 位玩家"; return; }
      const data = await request(`/scores/chart/${encodeURIComponent(chart.chart.md5)}?group=${encodeURIComponent(group.id)}&page=${boardPage}&limit=${pageSize}`, { refresh: false });
      if (revision !== boardRevision) return;
      dom["board-score-heading"].textContent = data.ruleset === "bms" ? "最佳 EX" : "最佳分数";
      dom["board-condition-heading"].textContent = "准确率 / 连击";
      for (const item of data.items) {
        const row = element("tr");
        const player = element("td", "player-name");
        const profileLink = element("a", "", item.user.username);
        profileLink.href = "/users/?id=" + item.user.id;
        player.append(profileLink);
        row.append(element("td", item.rank <= 3 ? "rank rank--top" : "rank", String(item.rank)), player, scoreCell(item.score), accuracyCell(item.score), boardLampCell(item), element("td", "small-label", date(item.score.played_at)));
        const action = element("td");
        const button = element("button", "text-button", "详情 ↗");
        button.type = "button";
        button.setAttribute("aria-label", `查看 ${item.user.username} 的最佳成绩详情`);
        button.addEventListener("click", () => showDetail(item.score, item));
        action.append(button);
        row.append(action);
        dom["board-body"].append(row);
      }
      dom["board-total"].textContent = `${number.format(data.total)} 位玩家 · ${data.ruleset.toUpperCase()}`;
      dom["board-table-wrap"].hidden = data.items.length === 0;
      message(dom["board-message"], data.items.length === 0 ? "这个条件组还没有成绩。" : "");
      pagination("board", data);
    } catch (error) {
      if (revision !== boardRevision) return;
      dom["board-total"].textContent = "读取失败";
      message(dom["board-message"], errorText(error), true);
    } finally {
      if (revision === boardRevision) dom["reload-board"].disabled = false;
    }
  }

  function historyLampCell(score) {
    const cell = element("td");
    if (score.ruleset === "bms") cell.append(lampNode(score.ruleset_data.clear_lamp));
    else cell.append(element("span", "cell-primary", score.passed ? "通过" : "未通过"));
    return cell;
  }

  function showScoreBoard(score) {
    const item = catalog.find((entry) => entry.chart.md5 === score.chart.md5);
    const recordGroup = { id: score.group_id, label: score.group_label };
    const groups = item ? [...item.groups.filter((group) => group.id !== score.group_id), recordGroup] : [recordGroup];
    chooseChart({ chart: score.chart, ruleset: score.ruleset, groups }, score.group_id, score.ruleset === "bms" ? { mode: "comparable", condition: `${score.group_id}:${score.max_ex_score}` } : null);
  }

  async function loadHistory() {
    const owner = user;
    const revision = ++historyRevision;
    const accountAtStart = accountRevision;
    dom["history-body"].replaceChildren();
    dom["history-table-wrap"].hidden = true;
    dom["reload-history"].disabled = true;
    dom["history-total"].textContent = "正在读取";
    message(dom["history-message"], "正在读取本人记录…");
    resetPagination("history");
    try {
      const data = await request(`/scores/user/${owner.id}?page=${historyPage}&limit=${pageSize}`);
      if (revision !== historyRevision || accountAtStart !== accountRevision) return;
      for (const score of data.items) {
        const row = element("tr");
        const chartCell = element("td");
        chartCell.append(element("span", "history-title", title(score.chart)), element("span", "history-group", score.group_label));
        if (!score.public_board) chartCell.append(element("span", "history-auto", "自动游玩 · 仅本人记录"));
        row.append(chartCell, scoreCell(score), accuracyCell(score), historyLampCell(score), element("td", "small-label", date(score.played_at)));
        const action = element("td");
        const actions = element("div", "row-actions");
        const detail = element("button", "text-button", "本局详情 ↗");
        detail.type = "button";
        detail.addEventListener("click", () => showDetail(score));
        actions.append(detail);
        if (score.public_board) {
          const board = element("button", "text-button", "本组榜单 →");
          board.type = "button";
          board.addEventListener("click", () => showScoreBoard(score));
          actions.append(board);
        }
        action.append(actions);
        row.append(action);
        dom["history-body"].append(row);
      }
      dom["history-total"].textContent = `${number.format(data.total)} 局记录`;
      dom["history-table-wrap"].hidden = data.items.length === 0;
      message(dom["history-message"], data.items.length === 0 ? "还没有收到此账号的 OMS 新局。使用支持 IR 的开发版启用交分后，已上报记录会显示在这里。" : "");
      pagination("history", data);
    } catch (error) {
      if (revision !== historyRevision || accountAtStart !== accountRevision) return;
      if (error instanceof ApiError && error.status === 401) {
        setUser(null);
        message(dom["auth-message"], "登录已失效，请重新登录后查看本人记录。", true);
      } else {
        dom["history-total"].textContent = "读取失败";
        message(dom["history-message"], errorText(error), true);
      }
    } finally {
      if (revision === historyRevision) dom["reload-history"].disabled = false;
    }
  }

  function openHistory() {
    historyPage = 1;
    setView("history");
    void loadHistory();
  }

  function detailField(parent, label, value) {
    const field = element("div");
    field.append(element("dt", "", label), element("dd", "", value));
    parent.append(field);
  }

  function showDetail(score, boardItem) {
    dom["detail-fields-heading"].textContent = "判定记录";
    dom["detail-title"].textContent = title(score.chart);
    dom["detail-subtitle"].textContent = score.group_label;
    dom["detail-summary"].replaceChildren();
    dom["detail-statistics"].replaceChildren();
    const summary = dom["detail-summary"];
    detailField(summary, "本局分数", score.ruleset === "bms" ? `${number.format(score.ex_score)} / ${number.format(score.max_ex_score)} EX` : number.format(score.total_score));
    detailField(summary, "准确率", percentage(score.accuracy));
    detailField(summary, "最大连击", number.format(score.max_combo));
    detailField(summary, "游玩时间", date(score.played_at));
    detailField(summary, "收到成绩", date(score.received_at));
    detailField(summary, "玩法", score.mods.length === 0 ? "普通游玩" : score.mods.map((mod) => mod.acronym).join(" + "));
    if (score.ruleset === "bms") {
      detailField(summary, "本局通关灯", lamps[score.ruleset_data.clear_lamp].label);
      detailField(summary, "结束血条", `${score.ruleset_data.gauge_type} · ${percentage(score.ruleset_data.final_gauge)}`);
    } else detailField(summary, "本局结果", score.passed ? "通过" : "未通过");
    detailField(summary, "谱面 MD5", score.chart.md5);
    let entries = 0;
    for (const [key, count] of Object.entries(score.statistics)) {
      if (count === 0) continue;
      const label = score.ruleset === "bms" && Object.hasOwn(bmsStatLabels, key) ? bmsStatLabels[key] : statLabels[key];
      detailField(dom["detail-statistics"], label, number.format(count));
      entries += 1;
    }
    if (entries === 0) detailField(dom["detail-statistics"], "本局判定", "没有非零判定记录");
    const separateLamp = boardItem !== undefined && score.ruleset === "bms" && boardItem.best_lamp_score_id !== score.id;
    message(dom["detail-lamp-note"], separateLamp ? `该玩家的最佳灯 ${lamps[boardItem.best_lamp].label} 来自另一局；这里展示的是最佳分本局的结果。` : "");
    dom["score-dialog"].showModal();
  }

  function showReferenceDetail(item) {
    const score = item.score;
    dom["detail-title"].textContent = title(selectedChart.chart);
    dom["detail-subtitle"].textContent = `${recordLabels[score.record_kind]} · ${sourceLabel(score.source)}`;
    dom["detail-fields-heading"].textContent = "保留的原条件";
    dom["detail-summary"].replaceChildren();
    dom["detail-statistics"].replaceChildren();
    detailField(dom["detail-summary"], "原身份", `${item.identity.namespace} #${item.identity.id} · ${item.identity.username || "原名称为空"}`);
    detailField(dom["detail-summary"], "最佳 EX", `${number.format(score.ex_score)} / ${score.max_ex_score === null ? "未知" : number.format(score.max_ex_score)}`);
    detailField(dom["detail-summary"], "此分对应原灯", score.lamp?.label || "未收录");
    detailField(dom["detail-summary"], "逐局时间", score.played_at ? date(score.played_at) : "未收录；不由归档时间或收到时间代填");
    detailField(dom["detail-summary"], "谱面 MD5", selectedChart.chart.md5);
    for (const [key, value] of Object.entries(score.conditions)) detailField(dom["detail-statistics"], conditionLabels[key] || key, value === null || value === "" ? "未收录" : typeof value === "object" ? JSON.stringify(value) : String(value));
    detailField(dom["detail-statistics"], "仍未知", score.unknown_fields.map((key) => conditionLabels[key] || key).join("、") || "没有声明的未知字段");
    message(dom["detail-lamp-note"], "最佳分和独立灯可能属于不同状态或新局。保留原标签，不跨未知规则换算；历史摘要与播放器状态不作为逐局记录。");
    dom["score-dialog"].showModal();
  }

  async function loadKeys() {
    const revision = ++keyRevision;
    const accountAtStart = accountRevision;
    if (!user) return;
    try {
      const data = await request("/integration-keys");
      if (revision !== keyRevision || accountAtStart !== accountRevision) return;
      dom["key-list"].replaceChildren();
      for (const key of data.items) {
        const row = element("li", "", `${sourceLabel(key.source)} · ${key.label} · ${key.revoked ? "已撤销" : "可用"}`);
        if (!key.revoked) {
          const revoke = element("button", "text-button", "撤销此密钥");
          revoke.type = "button";
          revoke.addEventListener("click", () => { void mutateKey(`/integration-keys/${key.id}/revoke`, {}, revoke); });
          row.append(element("br"), revoke);
        }
        dom["key-list"].append(row);
      }
    } catch (error) {
      if (revision === keyRevision && accountAtStart === accountRevision) message(dom["key-message"], errorText(error), true);
    }
  }

  async function mutateKey(path, body, button) {
    const owner = user;
    const accountAtStart = accountRevision;
    if (!owner) return;
    button.disabled = true;
    dom["key-secret"].value = "";
    dom["key-secret"].hidden = true;
    dom["key-secret-label"].hidden = true;
    try {
      await request("/user/me");
      const data = await navigator.locks.request(authLockName, async () => {
        if (accountAtStart !== accountRevision) return null;
        const current = await send("/user/me");
        if (!current.response.ok) throw failure(current);
        if (current.data.user.id !== owner.id) { setUser(null); throw new ApiError(409, "account_changed", "账号已改变，请重新确认后再创建或撤销密钥。"); }
        const result = await send(path, { method: "POST", body });
        if (!result.response.ok) throw failure(result);
        return result.data;
      });
      if (!data || accountAtStart !== accountRevision) return;
      if (data.secret) {
        dom["key-secret"].value = data.secret;
        dom["key-secret"].hidden = false;
        dom["key-secret-label"].hidden = false;
        message(dom["key-message"], "密钥已创建，仅此一次显示。请复制到对应播放器插件。");
      } else message(dom["key-message"], "密钥已撤销，该密钥不能再交分或读取本人信息。");
      await loadKeys();
    } catch (error) {
      if (accountAtStart === accountRevision) message(dom["key-message"], errorText(error), true);
    } finally { button.disabled = false; }
  }

  dom["login-tab"].addEventListener("click", () => setAuthMode("login"));
  dom["register-tab"].addEventListener("click", () => setAuthMode("register"));
  dom["auth-form"].addEventListener("submit", async (event) => {
    event.preventDefault();
    const revision = ++accountRevision;
    const mode = authMode;
    const body = { username: dom["username"].value, password: dom["password"].value, transport: "browser" };
    authMutationPending = true;
    setAuthBusy(true);
    message(dom["auth-message"], "");
    try {
      const data = await navigator.locks.request(authLockName, () => request(`/auth/${mode}`, { method: "POST", body }));
      sessionChannel.postMessage("changed");
      if (revision !== accountRevision) return;
      setUser(data.user);
      dom["password"].value = "";
      pageMessage(mode === "register" ? "账号已创建，已登录。现在可以查看本人记录。" : "已登录，可以查看本人记录。", true);
    } catch (error) {
      if (revision !== accountRevision) return;
      message(dom["auth-message"], errorText(error), true);
    } finally {
      authMutationPending = false;
      setAuthBusy(false);
      if (sessionCheckPending) {
        sessionCheckPending = false;
        void restoreSession();
      }
    }
  });

  dom["logout-button"].addEventListener("click", async () => {
    const revision = ++accountRevision;
    authMutationPending = true;
    dom["logout-button"].disabled = true;
    message(dom["auth-message"], "");
    try {
      await navigator.locks.request(authLockName, () => request("/auth/logout", { method: "POST", body: {}, refresh: false }));
      sessionChannel.postMessage("changed");
      if (revision !== accountRevision) return;
      setUser(null);
      pageMessage("已退出登录。公开谱面榜仍可查看。", true);
    } catch (error) {
      if (revision !== accountRevision) return;
      if (error instanceof ApiError && error.status === 401) {
        setUser(null);
        pageMessage("登录已失效，已清除本页的本人记录。", true);
      } else message(dom["auth-message"], errorText(error), true);
    } finally {
      authMutationPending = false;
      dom["logout-button"].disabled = false;
      if (sessionCheckPending) {
        sessionCheckPending = false;
        void restoreSession();
      }
    }
  });

  dom["reload-charts"].addEventListener("click", () => { void loadCatalog(); });
  dom["chart-search"].addEventListener("submit", (event) => {
    event.preventDefault();
    catalogQuery = dom["chart-query"].value.trim();
    catalogPage = 1;
    saveSelection();
    void loadCatalog();
    if (/^[0-9a-f]{32}$/i.test(catalogQuery)) void openChart(catalogQuery.toLowerCase());
  });
  dom["charts-prev"].addEventListener("click", () => { catalogPage -= 1; void loadCatalog(); });
  dom["charts-next"].addEventListener("click", () => { catalogPage += 1; void loadCatalog(); });
  dom["group-select"].addEventListener("change", () => {
    if (selectedChart.ruleset === "bms") selectedCondition = dom["group-select"].value;
    else selectedGroup = selectedChart.groups.find((group) => group.id === dom["group-select"].value);
    boardPage = 1;
    void loadBoard();
  });
  dom["ranking-mode"].addEventListener("change", () => {
    rankingMode = dom["ranking-mode"].value;
    boardPage = 1;
    updateConditions(boardConditions);
    void loadBoard();
  });
  function changeSources(sources) {
    selectedSources = sources;
    for (const input of dom["source-choices"].querySelectorAll("input")) input.checked = sources.includes(input.value);
    boardPage = 1;
    if (selectedChart) void loadBoard();
  }
  dom["sources-all"].addEventListener("click", () => changeSources(sourceRegistry.filter((source) => source.available).map((source) => source.code)));
  dom["sources-none"].addEventListener("click", () => changeSources([]));
  dom["key-form"].addEventListener("submit", (event) => {
    event.preventDefault();
    void mutateKey("/integration-keys", { source: dom["key-source"].value, label: dom["key-label"].value.trim() || "播放器接入" }, dom["key-form"].querySelector("button[type=submit]"));
  });
  dom["board-prev"].addEventListener("click", () => { boardPage -= 1; void loadBoard(); });
  dom["board-next"].addEventListener("click", () => { boardPage += 1; void loadBoard(); });
  dom["reload-board"].addEventListener("click", () => { void loadBoard(); });
  dom["board-tab"].addEventListener("click", () => setView("board"));
  dom["mine-button"].addEventListener("click", () => {
    openHistory();
    dom["ranking"].focus({ preventScroll: true });
    dom["ranking"].scrollIntoView({ block: "start" });
  });
  dom["history-tab"].addEventListener("click", openHistory);
  dom["reload-history"].addEventListener("click", () => { void loadHistory(); });
  dom["history-prev"].addEventListener("click", () => { historyPage -= 1; void loadHistory(); });
  dom["history-next"].addEventListener("click", () => { historyPage += 1; void loadHistory(); });

  async function restoreSession() {
    const revision = accountRevision;
    try {
      const data = await request("/user/me");
      if (revision === accountRevision) {
        setUser(data.user);
        if (location.hash === "#history") openHistory();
        if (location.hash === "#keys") {
          dom["keys"].open = true;
          dom["keys"].scrollIntoView({ block: "start" });
        }
      }
    } catch (error) {
      if (revision !== accountRevision) return;
      if (error instanceof ApiError && error.status === 401) setUser(null);
      else {
        setUser(null);
        message(dom["auth-message"], errorText(error), true);
      }
    } finally {
      setAuthBusy(false);
    }
  }

  sessionChannel.addEventListener("message", () => {
    if (authMutationPending) {
      sessionCheckPending = true;
      return;
    }
    setUser(null);
    void restoreSession();
  });

  async function openChart(md5, restore = null) {
    const revision = ++chartRevision;
    try {
      const item = await request(`/charts/${encodeURIComponent(md5)}`, { refresh: false, apiRoot: "/api/ir/v2" });
      if (revision !== chartRevision) return;
      chooseChart(item, restore?.group, restore);
    } catch (error) {
      if (revision === chartRevision) message(dom["board-message"], errorText(error), true);
    }
  }

  async function initializeBoards() {
    const params = new URLSearchParams(location.search);
    catalogQuery = params.get("q") || "";
    dom["chart-query"].value = catalogQuery;
    try {
      const data = await request("/sources", { refresh: false, apiRoot: "/api/ir/v2" });
      sourceRegistry = data.items;
      selectedSources = params.has("sources") ? params.get("sources").split(",").filter(Boolean) : data.items.filter((source) => source.available).map((source) => source.code);
      for (const source of sourceRegistry) {
        const label = element("label", "source-choice");
        const input = element("input");
        input.type = "checkbox";
        input.value = source.code;
        input.title = source.verification;
        input.checked = selectedSources.includes(source.code);
        input.disabled = !source.available;
        input.addEventListener("change", () => changeSources([...dom["source-choices"].querySelectorAll("input:checked")].map((node) => node.value)));
        const status = source.record_kind === "best_state" ? " · 试运行" : "";
        label.append(input, element("span", "", source.label + (source.available ? status : " · 未开放")));
        dom["source-choices"].append(label);
      }
      void loadCatalog();
      if (params.has("md5")) {
        const page = Number(params.get("page"));
        void openChart(params.get("md5"), { mode: params.get("mode"), condition: params.get("condition"), group: params.get("group") || undefined, page: Number.isInteger(page) && page >= 1 && page <= 1000000 ? page : 1 });
      }
    } catch (error) { message(dom["catalog-message"], errorText(error), true); }
  }

  void initializeBoards();
  void restoreSession();
})();
