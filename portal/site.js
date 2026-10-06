"use strict";

(() => {
  const root = "/api/ir/v1";
  const lock = "oms-ir-session-v1";
  const channel = new BroadcastChannel(lock);
  const header = document.getElementById("site-account");
  let user = null;
  let revision = 0;
  let mutation = false;
  let queuedCheck = false;
  let sessionError = null;

  class ApiError extends Error {
    constructor(status, code, message, retryAfter) {
      super(message);
      this.status = status;
      this.code = code;
      this.retryAfter = retryAfter;
    }
  }

  class ConnectionError extends Error {
    constructor() { super("暂时无法连接服务，请确认连接后手动重试。"); }
  }

  async function send(path, options) {
    const method = options.method || "GET";
    const headers = { Accept: "application/json" };
    if (method === "POST") {
      headers["Content-Type"] = "application/json";
      headers["X-OMS-IR"] = "1";
    }
    let response;
    try {
      response = await fetch((options.apiRoot || root) + path, {
        method, headers, credentials: "same-origin", cache: "no-store", signal: options.signal,
        body: method === "POST" ? JSON.stringify(options.body) : undefined,
      });
    } catch (error) {
      if (error instanceof TypeError) throw new ConnectionError();
      throw error;
    }
    let data = null;
    if (response.status !== 204) {
      try { data = await response.json(); }
      catch (error) {
        if (error instanceof SyntaxError) throw new ApiError(response.status, "invalid_response", "服务返回的内容无法读取，请重试或联系维护者。");
        throw error;
      }
    }
    return { response, data };
  }

  function failure(result) {
    return new ApiError(result.response.status, result.data.error.code, result.data.error.message, result.response.headers.get("Retry-After"));
  }

  async function renewUnlocked() {
    const current = await send("/user/me", {});
    if (current.response.ok) return true;
    if (current.response.status !== 401) throw failure(current);
    const refreshed = await send("/auth/refresh", { method: "POST", body: {} });
    if (refreshed.response.status === 401) return false;
    if (!refreshed.response.ok) throw failure(refreshed);
    return true;
  }

  async function requestUnlocked(path, options) {
    const atStart = revision;
    let result = await send(path, options);
    const authEntry = ["/auth/login", "/auth/register", "/auth/refresh"].includes(path);
    if (result.response.status === 401 && !authEntry && options.refresh !== false && atStart === revision && await renewUnlocked()) {
      result = await send(path, options);
    }
    if (!result.response.ok) throw failure(result);
    return result.data;
  }

  async function request(path, options = {}) {
    if (options.method === "POST") {
      return navigator.locks.request(lock, async () => {
        if (options.actorId !== undefined) {
          const current = await requestUnlocked("/user/me", {});
          if (current.user.id !== options.actorId) {
            setUser(current.user);
            throw new ApiError(409, "account_changed", "账号已变化。请切回原账号重试，或确认用当前账号重新发布。文字仍保留在本页。");
          }
        }
        return requestUnlocked(path, options);
      });
    }
    const atStart = revision;
    let result = await send(path, options);
    if (result.response.status === 401 && options.refresh !== false) {
      const renewed = await navigator.locks.request(lock, () => atStart === revision ? renewUnlocked() : false);
      if (renewed && atStart === revision) result = await send(path, options);
    }
    if (!result.response.ok) throw failure(result);
    return result.data;
  }

  function errorText(error) {
    if (error instanceof ConnectionError) return error.message;
    if (!(error instanceof ApiError)) throw error;
    if (error.status === 401) return "登录已失效，请重新登录。未发布的文字仍保留在本页。";
    if (error.status === 429) return "操作有些频繁，请" + (error.retryAfter ? "在 " + error.retryAfter + " 秒后" : "稍后") + "重试。";
    if (error.status === 404) return "找不到这篇内容，它可能已被隐藏或地址有误。";
    if (error.code === "invalid_payload") return "请检查标题和正文，内容不能为空或超过长度限制。";
    return error.message;
  }

  function message(node, text, error = false) {
    node.textContent = text;
    node.hidden = text.length === 0;
    node.classList.toggle("is-error", error);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  const time = new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short" });
  function date(value) { return time.format(new Date(value)); }
  function dateNode(value) {
    const node = element("time", "", date(value));
    node.dateTime = value;
    return node;
  }

  function setUser(next) {
    user = next;
    sessionError = null;
    revision += 1;
    if (header) {
      header.removeAttribute("aria-label");
      header.textContent = next ? next.username : "登录 / 注册";
      header.href = next ? "/users/?id=" + next.id : "/account/";
    }
    window.dispatchEvent(new CustomEvent("oms:account", { detail: next }));
  }

  async function restore() {
    if (mutation) { queuedCheck = true; return; }
    const atStart = revision;
    try {
      const data = await request("/user/me");
      if (atStart === revision) setUser(data.user);
    } catch (error) {
      if (atStart !== revision) return;
      if (error instanceof ApiError && error.status === 401) setUser(null);
      else {
        sessionError = errorText(error);
        if (header) header.setAttribute("aria-label", "账号服务暂时无法确认，打开账号页重试");
        window.dispatchEvent(new CustomEvent("oms:account", { detail: user }));
      }
    }
  }

  const api = {
    request, errorText, message, element, date, dateNode, restore,
    get user() { return user; },
    get sessionError() { return sessionError; },
    get revision() { return revision; },
  };
  window.OmsSite = api;
  api.ready = restore();
  channel.addEventListener("message", () => { void restore(); });
  window.addEventListener("pageshow", (event) => { if (event.persisted) void restore(); });

  function openLegacySection() {
    if (location.pathname !== "/") return;
    if (location.hash === "#download") location.replace("/download/");
    if (["#capabilities", "#timing", "#phases"].includes(location.hash)) location.replace("/help/");
  }
  window.addEventListener("hashchange", openLegacySection);
  openLegacySection();

  if (document.body.dataset.page !== "account") return;
  const form = document.getElementById("account-form");
  const guest = document.getElementById("account-guest");
  const member = document.getElementById("account-member");
  const notice = document.getElementById("account-message");
  const submit = document.getElementById("account-submit");
  const password = document.getElementById("password");
  let mode = "login";

  function busy(value) {
    for (const input of form.elements) input.disabled = value;
    document.getElementById("login-tab").disabled = value;
    document.getElementById("register-tab").disabled = value;
    submit.textContent = value ? "请稍候…" : (mode === "register" ? "注册并登录" : "登录");
  }

  function renderAccount() {
    guest.hidden = user !== null;
    member.hidden = user === null;
    if (user) {
      document.getElementById("account-name").textContent = user.username;
      document.getElementById("account-posts").href = "/community/?author_id=" + user.id;
      document.getElementById("account-profile").href = "/users/?id=" + user.id;
    }
    message(notice, sessionError || "", Boolean(sessionError));
  }

  function setMode(next) {
    mode = next;
    document.getElementById("login-tab").setAttribute("aria-pressed", String(next === "login"));
    document.getElementById("register-tab").setAttribute("aria-pressed", String(next === "register"));
    document.getElementById("register-notice").hidden = next !== "register";
    password.autocomplete = next === "register" ? "new-password" : "current-password";
    submit.textContent = next === "register" ? "注册并登录" : "登录";
    message(notice, "");
  }

  function destination() {
    const value = new URLSearchParams(location.search).get("next");
    if (!value) return null;
    let url;
    try { url = new URL(value, location.origin); }
    catch (error) {
      if (error instanceof TypeError) return null;
      throw error;
    }
    return url.origin === location.origin && /^\/(?:community(?:\/|$)|ir\/|users\/)/.test(url.pathname) ? url.pathname + url.search + url.hash : null;
  }

  document.getElementById("login-tab").addEventListener("click", () => setMode("login"));
  document.getElementById("register-tab").addEventListener("click", () => setMode("register"));
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    mutation = true;
    const atStart = ++revision;
    busy(true);
    message(notice, "");
    try {
      const data = await request("/auth/" + mode, {
        method: "POST",
        body: { username: document.getElementById("username").value, password: password.value, transport: "browser" },
        refresh: false,
      });
      channel.postMessage("changed");
      if (atStart !== revision) return;
      password.value = "";
      setUser(data.user);
      message(notice, mode === "register" ? "账号已创建并登录。" : "已登录。");
      const next = destination();
      if (next) location.assign(next);
    } catch (error) {
      if (atStart === revision) message(notice, errorText(error), true);
    } finally {
      mutation = false;
      busy(false);
      if (queuedCheck) { queuedCheck = false; void restore(); }
    }
  });

  document.getElementById("account-logout").addEventListener("click", async (event) => {
    mutation = true;
    const atStart = ++revision;
    event.currentTarget.disabled = true;
    message(notice, "");
    try {
      await request("/auth/logout", { method: "POST", body: {}, refresh: false });
      channel.postMessage("changed");
      if (atStart === revision) { setUser(null); message(notice, "已退出。公开帖子与榜单仍可浏览。"); }
    } catch (error) {
      if (atStart !== revision) return;
      if (error instanceof ApiError && error.status === 401) { setUser(null); message(notice, "登录已失效，请重新登录。"); }
      else message(notice, errorText(error), true);
    } finally {
      mutation = false;
      document.getElementById("account-logout").disabled = false;
      if (queuedCheck) { queuedCheck = false; void restore(); }
    }
  });
  window.addEventListener("oms:account", renderAccount);
  void api.ready.then(() => { renderAccount(); busy(false); });
})();
