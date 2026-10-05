"use strict";

(() => {
  const site = window.OmsSite;
  const get = (id) => document.getElementById(id);
  const element = site.element;
  const message = site.message;
  const requestedId = new URLSearchParams(location.search).get("id");
  let profile = null;
  let page = 1;
  let revision = 0;
  let ready = false;

  function clearProfile() {
    profile = null;
    document.title = "个人页 · OMS";
    get("profile-header").hidden = true;
    get("profile-content").hidden = true;
    get("profile-own").hidden = true;
    get("profile-name").textContent = "";
    get("profile-identity").textContent = "";
    get("profile-avatar").textContent = "";
    get("profile-posts-list").replaceChildren();
    get("profile-posts-empty").hidden = true;
    get("profile-posts-prev").disabled = true;
    get("profile-posts-next").disabled = true;
    get("profile-posts-count").textContent = "尚未读取";
    get("profile-posts-page").textContent = "待读取";
    get("profile-load-retry-wrap").hidden = true;
  }

  async function loadPosts(atStart) {
    get("profile-posts-list").replaceChildren();
    get("profile-posts-empty").hidden = true;
    get("profile-posts-prev").disabled = true;
    get("profile-posts-next").disabled = true;
    get("profile-retry").hidden = true;
    message(get("profile-posts-message"), "正在读取帖子…");
    try {
      const params = new URLSearchParams({ author_id: String(profile.id), page: String(page), limit: "20" });
      const data = await site.request("/community/posts?" + params, { refresh: false });
      if (atStart !== revision) return;
      for (const post of data.items) {
        const row = element("li", "forum-topic-entry");
        const main = element("div", "forum-topic-entry__col forum-topic-entry__col--main");
        const content = element("div", "forum-topic-entry__content forum-topic-entry__content--left");
        const title = element("a", "forum-topic-entry__title", post.title);
        title.href = "/community/posts/" + post.id + "/";
        const meta = element("div", "topic-meta");
        meta.append(site.dateNode(post.updated_at));
        content.append(title, meta, element("p", "topic-excerpt", post.excerpt));
        const count = element("div", "forum-topic-entry__content forum-topic-entry__content--counts reply-count", String(post.reply_count));
        count.append(element("small", "", "回复"));
        main.append(content, count);
        row.append(main);
        get("profile-posts-list").append(row);
      }
      const pages = Math.max(1, Math.ceil(data.total / data.limit));
      get("profile-posts-count").textContent = data.total + " 个帖子";
      get("profile-posts-page").textContent = data.page + " / " + pages;
      get("profile-posts-prev").disabled = data.page <= 1;
      get("profile-posts-next").disabled = data.page >= pages;
      get("profile-posts-empty").hidden = data.items.length !== 0;
      message(get("profile-posts-message"), "");
    } catch (error) {
      if (atStart !== revision) return;
      get("profile-posts-count").textContent = "暂未读取";
      get("profile-posts-page").textContent = "待读取";
      message(get("profile-posts-message"), site.errorText(error), true);
      get("profile-retry").hidden = false;
    }
  }

  async function loadProfile() {
    const atStart = ++revision;
    clearProfile();
    const id = requestedId || (site.user ? String(site.user.id) : "");
    if (!id) {
      message(get("profile-message"), "登录后可以打开自己的个人页，也可以从社区作者或 OMS 榜单玩家名进入公开个人页。");
      const login = element("a", "text-link", "登录 / 注册 ›");
      login.href = "/account/?next=" + encodeURIComponent("/users/");
      get("profile-message").append(" ", login);
      return;
    }
    if (!/^[1-9][0-9]*$/.test(id)) {
      message(get("profile-message"), "个人页地址中的账号 ID 无效。", true);
      return;
    }
    message(get("profile-message"), "正在读取个人页…");
    try {
      const data = await site.request("/users/" + id + "/profile");
      if (atStart !== revision) return;
      profile = data.user;
      get("profile-name").textContent = profile.username;
      get("profile-identity").textContent = "OMS 账号 #" + profile.id;
      get("profile-page-link").href = "/users/?id=" + profile.id;
      get("profile-avatar").textContent = profile.username.slice(0, 1).toUpperCase();
      get("profile-header").hidden = false;
      get("profile-content").hidden = false;
      get("profile-own").hidden = !site.user || profile.id !== site.user.id;
      document.title = profile.username + " · OMS";
      message(get("profile-message"), "");
      await loadPosts(atStart);
    } catch (error) {
      if (atStart !== revision) return;
      clearProfile();
      document.title = "个人页 · OMS";
      const text = error.status === 404
        ? "找不到可公开查看的 OMS 账号。若这是你的账号，请先登录。"
        : site.errorText(error);
      message(get("profile-message"), text, true);
      get("profile-load-retry-wrap").hidden = error.status !== undefined && error.status < 500;
      if (error.status === 404 && !site.user) {
        const login = element("a", "text-link", "登录 ›");
        login.href = "/account/?next=" + encodeURIComponent(location.pathname + location.search);
        get("profile-message").append(" ", login);
      }
    }
  }

  get("profile-posts-prev").addEventListener("click", () => { page -= 1; void loadPosts(++revision); });
  get("profile-posts-next").addEventListener("click", () => { page += 1; void loadPosts(++revision); });
  get("profile-retry").addEventListener("click", () => { void loadPosts(++revision); });
  get("profile-load-retry").addEventListener("click", () => { void loadProfile(); });
  window.addEventListener("oms:account", () => {
    if (!ready) return;
    page = 1;
    void loadProfile();
  });
  void site.ready.then(() => { ready = true; void loadProfile(); });
})();
