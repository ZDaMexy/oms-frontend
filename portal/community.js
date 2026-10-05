"use strict";

(() => {
  const site = window.OmsSite;
  const categories = { discussion: "讨论", help: "求助", showcase: "分享", development: "开发记录" };
  const page = document.body.dataset.page;
  const el = site.element;
  const notice = site.message;
  const get = (id) => document.getElementById(id);
  const api = (path, options = {}) => site.request("/community" + path, options);
  const topicUrl = (id) => "/community/posts/" + id + "/";
  const authorUrl = (id) => "/community/?author_id=" + id;
  let dirty = false;
  window.addEventListener("beforeunload", (event) => {
    if (!dirty) return;
    event.preventDefault();
    event.returnValue = "";
  });

  function tag(category) {
    return el("span", "tag tag-" + category, categories[category]);
  }

  function avatar(author) {
    const node = el("span", "avatar", author.username.slice(0, 1).toUpperCase());
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function author(author) {
    const node = el("a", "", author.username);
    node.href = authorUrl(author.id);
    return node;
  }

  function pagination(prefix, data) {
    const pages = Math.max(1, Math.ceil(data.total / data.limit));
    get(prefix + "-page").textContent = data.page + " / " + pages;
    get(prefix + "-prev").disabled = data.page <= 1;
    get(prefix + "-next").disabled = data.page >= pages;
  }

  function setBusy(form, value) {
    for (const control of form.elements) control.disabled = value;
  }

  function textWithLinks(node, text) {
    node.replaceChildren();
    let offset = 0;
    for (const match of text.matchAll(/https?:\/\/[^\s<>"']+/g)) {
      node.append(document.createTextNode(text.slice(offset, match.index)));
      const value = match[0].replace(/[.,;!?。，；！？]+$/, "");
      let url;
      try { url = new URL(value); }
      catch (error) {
        if (!(error instanceof TypeError)) throw error;
        node.append(document.createTextNode(match[0]));
        offset = match.index + match[0].length;
        continue;
      }
      const link = el("a", "", value);
      link.href = url.href;
      link.target = "_blank";
      link.rel = "nofollow noopener noreferrer";
      node.append(link, document.createTextNode(match[0].slice(value.length)));
      offset = match.index + match[0].length;
    }
    node.append(document.createTextNode(text.slice(offset)));
  }

  function submission(previous, fields) {
    const signature = JSON.stringify(fields);
    if (previous && previous.signature === signature) return previous;
    return { signature, actorId: site.user.id, body: { submission_id: crypto.randomUUID(), ...fields } };
  }

  function accountConfirmation(form, reset) {
    const panel = el("div", "notice");
    panel.hidden = true;
    panel.setAttribute("role", "status");
    panel.append(el("p", "", "上一次发布绑定到另一账号。请切回原账号重试，或确认用当前账号重新发布。上一账号的发布结果仍需核对。"));
    const confirm = el("button", "button", "用当前账号发布");
    confirm.type = "button";
    panel.append(confirm);
    form.append(panel);
    confirm.addEventListener("click", () => { reset(); form.requestSubmit(); });
    return (pending, busy) => {
      const changed = pending !== null && site.user !== null && pending.actorId !== site.user.id;
      panel.hidden = !changed;
      confirm.disabled = busy || !changed;
      return changed;
    };
  }

  if (page === "home" || page === "community") {
    const params = new URLSearchParams(location.search);
    let category = params.get("category") || "";
    let query = params.get("q") || "";
    let authorId = params.get("author_id") || "";
    let currentPage = Number(params.get("page") || 1);
    let loadRevision = 0;
    get("post-search").value = query;

    function updateUrl() {
      const next = new URLSearchParams();
      if (category) next.set("category", category);
      if (query) next.set("q", query);
      if (authorId) next.set("author_id", authorId);
      if (currentPage > 1) next.set("page", currentPage);
      history.replaceState(null, "", location.pathname + (next.size ? "?" + next : ""));
    }

    function updateMine() {
      const mine = get("my-posts");
      if (mine) mine.href = site.user ? authorUrl(site.user.id) : "/account/?next=/community/";
      get("feed-title").textContent = authorId ? (site.user && String(site.user.id) === authorId ? "我的帖子" : "这位玩家的帖子") : "近期帖子";
    }

    async function load() {
      const atStart = ++loadRevision;
      const parameters = new URLSearchParams({ page: String(currentPage), limit: "20" });
      if (category) parameters.set("category", category);
      if (query) parameters.set("q", query);
      if (authorId) parameters.set("author_id", authorId);
      for (const button of document.querySelectorAll("[data-category]")) button.setAttribute("aria-pressed", String(button.dataset.category === category));
      get("feed-list").replaceChildren();
      get("feed-empty").hidden = true;
      get("feed-retry-wrap").hidden = true;
      get("feed-prev").disabled = true;
      get("feed-next").disabled = true;
      get("feed-count").textContent = "正在读取";
      notice(get("feed-message"), "正在读取帖子…");
      updateMine();
      try {
        const data = await api("/posts?" + parameters, { refresh: false });
        if (atStart !== loadRevision) return;
        for (const post of data.items) {
          const row = el("li", "topic-row");
          const content = el("div", "");
          const meta = el("div", "topic-meta");
          meta.append(tag(post.category), author(post.author), site.dateNode(post.updated_at));
          const title = el("a", "topic-title", post.title);
          title.href = topicUrl(post.id);
          const excerpt = el("p", "topic-excerpt", post.excerpt);
          content.append(meta, title, excerpt);
          const replies = el("div", "reply-count", String(post.reply_count));
          replies.append(el("small", "", "回复"));
          row.append(avatar(post.author), content, replies);
          get("feed-list").append(row);
        }
        get("feed-count").textContent = data.total + " 个帖子";
        get("feed-empty").hidden = data.items.length !== 0;
        if (data.items.length === 0 && (query || category || authorId)) {
          get("feed-empty").querySelector("h3").textContent = "没有符合筛选条件的帖子";
          get("feed-empty").querySelector("p").textContent = "试试其他分类或关键词，或返回社区查看全部帖子。";
          get("feed-empty").querySelector("a").textContent = "发布帖子";
        } else {
          get("feed-empty").querySelector("h3").textContent = "社区暂无帖子";
          get("feed-empty").querySelector("p").textContent = "发布的讨论、求助、分享和开发记录会显示在这里。";
          get("feed-empty").querySelector("a").textContent = "发布帖子";
        }
        notice(get("feed-message"), "");
        pagination("feed", data);
        updateUrl();
      } catch (error) {
        if (atStart !== loadRevision) return;
        get("feed-count").textContent = "暂未读取";
        notice(get("feed-message"), site.errorText(error), true);
        get("feed-retry-wrap").hidden = false;
        get("feed-page").textContent = "待读取";
      }
    }

    for (const button of document.querySelectorAll("[data-category]")) button.addEventListener("click", () => {
      category = button.dataset.category;
      currentPage = 1;
      void load();
    });
    get("search-form").addEventListener("submit", (event) => {
      event.preventDefault();
      query = get("post-search").value.trim();
      currentPage = 1;
      void load();
    });
    get("feed-prev").addEventListener("click", () => { currentPage -= 1; void load(); });
    get("feed-next").addEventListener("click", () => { currentPage += 1; void load(); });
    get("feed-retry").addEventListener("click", () => { void load(); });
    window.addEventListener("oms:account", updateMine);
    void site.ready.then(updateMine);
    void load();
    return;
  }

  if (page === "new") {
    const form = get("post-form");
    let pending = null;
    let writing = false;
    const confirmAccount = accountConfirmation(form, () => { pending = null; accountChanged(); });
    const requestedCategory = new URLSearchParams(location.search).get("category");
    if (requestedCategory && Object.hasOwn(categories, requestedCategory)) get("post-category").value = requestedCategory;
    get("editor-login-link").href = "/account/?next=" + encodeURIComponent(location.pathname + location.search);

    function accountChanged() {
      get("editor-login").hidden = site.user !== null;
      get("post-submit").disabled = confirmAccount(pending, writing) || writing || site.user === null;
      if (site.sessionError) notice(get("editor-message"), site.sessionError, true);
    }
    form.addEventListener("input", () => { dirty = get("post-title").value.length > 0 || get("post-body").value.length > 0; });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!site.user) { accountChanged(); return; }
      const fields = { title: get("post-title").value.trim(), body: get("post-body").value.trim(), category: get("post-category").value };
      if (!fields.title || !fields.body) { notice(get("editor-message"), "标题和正文不能只包含空白。", true); return; }
      pending = submission(pending, fields);
      writing = true;
      setBusy(form, true);
      notice(get("editor-message"), "正在发布…");
      try {
        const data = await api("/posts", { method: "POST", body: pending.body, actorId: pending.actorId });
        dirty = false;
        location.assign(topicUrl(data.post.id));
      } catch (error) {
        notice(get("editor-message"), site.errorText(error), true);
      } finally {
        writing = false;
        setBusy(form, false);
        accountChanged();
      }
    });
    window.addEventListener("oms:account", accountChanged);
    void site.ready.then(accountChanged);
    return;
  }

  if (page !== "post") throw new Error("Unknown community page: " + page);
  const match = location.pathname.match(/^\/community\/posts\/([1-9]\d*)\/?$/);
  if (!match) { notice(get("thread-message"), "帖子地址有误，请从社区列表重新打开。", true); return; }
  const id = match[1];
  let post = null;
  let replyPage = Number(new URLSearchParams(location.search).get("reply_page") || 1);
  let replyRevision = 0;
  let pendingReply = null;
  let replyBusy = false;
  let editingReply = null;
  let deleteOperation = null;
  let editingPost = false;
  const confirmReplyAccount = accountConfirmation(get("reply-form"), () => { pendingReply = null; accountChanged(); });

  function accountChanged() {
    const loggedIn = site.user !== null;
    const own = post && loggedIn && site.user.id === post.author.id;
    get("thread-actions").hidden = !own || post.deleted;
    get("reply-form").hidden = !post || post.deleted || !loggedIn;
    get("reply-login").hidden = !post || post.deleted || loggedIn;
    get("reply-submit").disabled = confirmReplyAccount(pendingReply, replyBusy) || replyBusy || !loggedIn;
    for (const actions of document.querySelectorAll("[data-owner-id]")) actions.hidden = !post || !loggedIn || Number(actions.dataset.ownerId) !== site.user.id || post.deleted;
    if (editingPost && !own) { get("thread-edit-form").hidden = true; editingPost = false; }
    if (editingReply && (!loggedIn || editingReply.author.id !== site.user.id)) {
      editingReply.form.hidden = true;
      editingReply = null;
    }
  }

  function postMetadata() {
    const meta = get("thread-meta");
    meta.replaceChildren(author(post.author), site.dateNode(post.created_at));
    if (post.edited_at) meta.append(el("span", "", "已编辑 " + site.date(post.edited_at)));
  }

  function renderPost() {
    get("thread").hidden = false;
    get("thread-title").textContent = post.title;
    const category = get("thread-category");
    category.textContent = categories[post.category];
    category.className = "tag tag-" + post.category;
    postMetadata();
    textWithLinks(get("thread-body"), post.deleted ? "作者已删除正文。" : post.body);
    get("thread-closed").hidden = !post.deleted;
    document.title = post.title + " · OMS 社区";
    accountChanged();
  }

  function replyEditForm(reply, row) {
    const form = el("form", "edit-panel");
    form.hidden = true;
    const field = el("div", "field");
    const label = el("label", "", "编辑回复");
    const textarea = el("textarea", "");
    textarea.id = "edit-reply-" + reply.id;
    textarea.rows = 5;
    textarea.maxLength = 6000;
    textarea.required = true;
    label.htmlFor = textarea.id;
    field.append(label, textarea);
    const buttons = el("div", "form-actions");
    const save = el("button", "button button-primary", "保存修改");
    save.type = "submit";
    const cancel = el("button", "button", "取消");
    cancel.type = "button";
    const status = el("p", "draft-note");
    status.setAttribute("role", "status");
    status.hidden = true;
    buttons.append(save, cancel);
    form.append(field, buttons, status);
    row.append(form);
    cancel.addEventListener("click", () => { form.hidden = true; editingReply = null; dirty = get("reply-body").value.length > 0; });
    form.addEventListener("input", () => { dirty = true; });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const body = textarea.value.trim();
      if (!body) { notice(status, "回复不能为空白。", true); return; }
      setBusy(form, true);
      try {
        await api("/replies/" + reply.id + "/edit", { method: "POST", body: { body }, actorId: reply.author.id });
        editingReply = null;
        dirty = get("reply-body").value.length > 0;
        await loadReplies();
      } catch (error) { notice(status, site.errorText(error), true); }
      finally { setBusy(form, false); }
    });
    return { form, textarea };
  }

  function confirmDelete(path, actorId, description) {
    deleteOperation = { path, actorId };
    get("delete-description").textContent = description;
    get("delete-dialog").showModal();
  }

  function renderReply(reply) {
    const row = el("article", "reply");
    const header = el("header", "reply-header");
    const name = author(reply.author);
    name.className = "reply-author";
    const meta = el("div", "topic-meta");
    meta.append(site.dateNode(reply.created_at));
    if (reply.edited_at) meta.append(el("span", "", "已编辑"));
    header.append(avatar(reply.author), name, meta);
    const body = el("div", "thread-body");
    textWithLinks(body, reply.deleted ? "这条回复已被作者删除。" : reply.body);
    row.append(header, body);
    if (!reply.deleted) {
      const actions = el("div", "content-actions");
      actions.dataset.ownerId = reply.author.id;
      const edit = el("button", "link-button", "编辑回复");
      const remove = el("button", "link-button danger", "删除回复");
      edit.type = remove.type = "button";
      actions.append(edit, remove);
      row.append(actions);
      const editor = replyEditForm(reply, row);
      edit.addEventListener("click", () => {
        if (editingReply) editingReply.form.hidden = true;
        editor.textarea.value = reply.body;
        editor.form.hidden = false;
        editingReply = { form: editor.form, author: reply.author };
        editor.textarea.focus();
      });
      remove.addEventListener("click", () => confirmDelete("/replies/" + reply.id + "/delete", reply.author.id, "删除后正文不再公开显示，保留一条删除占位。"));
    }
    return row;
  }

  async function loadReplies() {
    const atStart = ++replyRevision;
    get("replies").hidden = false;
    get("replies-title").hidden = false;
    notice(get("replies-message"), "正在读取回复…");
    get("replies-prev").disabled = true;
    get("replies-next").disabled = true;
    try {
      const data = await api("/posts/" + id + "/replies?page=" + replyPage + "&limit=20", { refresh: false });
      if (atStart !== replyRevision) return;
      get("replies-list").replaceChildren(...data.items.map(renderReply));
      get("replies-title").textContent = "回复 · " + data.total;
      notice(get("replies-message"), data.total === 0 ? "暂无回复。" : "");
      pagination("replies", data);
      const parameters = new URLSearchParams();
      if (replyPage > 1) parameters.set("reply_page", replyPage);
      history.replaceState(null, "", topicUrl(id) + (parameters.size ? "?" + parameters : ""));
      accountChanged();
    } catch (error) {
      if (atStart !== replyRevision) return;
      notice(get("replies-message"), site.errorText(error), true);
    }
  }

  async function loadPost() {
    try {
      const data = await api("/posts/" + id, { refresh: false });
      post = data.post;
      renderPost();
      notice(get("thread-message"), "");
      await loadReplies();
    } catch (error) {
      notice(get("thread-message"), site.errorText(error), true);
      if (error.status === 404) {
        post = null;
        get("thread").hidden = true;
        get("replies").hidden = true;
        get("replies-title").hidden = true;
        get("thread-closed").hidden = true;
        accountChanged();
      }
    }
  }

  get("reply-login-link").href = "/account/?next=" + encodeURIComponent(topicUrl(id));
  get("thread-edit").addEventListener("click", () => {
    get("edit-title").value = post.title;
    get("edit-body").value = post.body;
    get("edit-category").value = post.category;
    get("thread-edit-form").hidden = false;
    editingPost = true;
    get("edit-title").focus();
  });
  get("thread-edit-cancel").addEventListener("click", () => {
    get("thread-edit-form").hidden = true;
    editingPost = false;
    dirty = get("reply-body").value.length > 0;
  });
  get("thread-edit-form").addEventListener("input", () => { dirty = true; });
  get("thread-edit-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = { title: get("edit-title").value.trim(), body: get("edit-body").value.trim(), category: get("edit-category").value };
    if (!fields.title || !fields.body) { notice(get("thread-edit-message"), "标题与正文不能为空白。", true); return; }
    setBusy(form, true);
    try {
      const data = await api("/posts/" + id + "/edit", { method: "POST", body: fields, actorId: post.author.id });
      post = data.post;
      get("thread-edit-form").hidden = true;
      editingPost = false;
      dirty = get("reply-body").value.length > 0;
      renderPost();
      notice(get("thread-message"), "修改已保存。");
    } catch (error) { notice(get("thread-edit-message"), site.errorText(error), true); }
    finally { setBusy(form, false); }
  });
  get("thread-delete").addEventListener("click", () => confirmDelete("/posts/" + id + "/delete", post.author.id, "删除帖子后正文不再公开显示，他人的回复会保留，讨论将关闭。"));
  get("delete-cancel").addEventListener("click", () => { get("delete-dialog").close(); deleteOperation = null; });
  get("delete-confirm").addEventListener("click", async () => {
    const operation = deleteOperation;
    get("delete-confirm").disabled = true;
    try {
      await api(operation.path, { method: "POST", body: {}, actorId: operation.actorId });
      get("delete-dialog").close();
      deleteOperation = null;
      await loadPost();
      notice(get("thread-message"), "已删除自己的内容，公开正文已移除。");
    } catch (error) {
      get("delete-dialog").close();
      notice(get("thread-message"), site.errorText(error), true);
    } finally { get("delete-confirm").disabled = false; }
  });
  get("reply-form").addEventListener("input", () => { dirty = get("reply-body").value.length > 0 || editingPost || editingReply !== null; });
  get("reply-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!site.user) { accountChanged(); return; }
    const body = get("reply-body").value.trim();
    if (!body) { notice(get("reply-message"), "回复不能只包含空白。", true); return; }
    pendingReply = submission(pendingReply, { body });
    replyBusy = true;
    setBusy(get("reply-form"), true);
    notice(get("reply-message"), "正在发布…");
    try {
      await api("/posts/" + id + "/replies", { method: "POST", body: pendingReply.body, actorId: pendingReply.actorId });
      get("reply-body").value = "";
      pendingReply = null;
      dirty = editingPost || editingReply !== null;
      notice(get("reply-message"), "回复已发布。");
      try {
        const current = await api("/posts/" + id, { refresh: false });
        post = current.post;
        replyPage = Math.max(1, Math.ceil(post.reply_count / 20));
        renderPost();
        await loadReplies();
      } catch (error) { notice(get("reply-message"), "回复已发布；暂时未能更新列表。" + site.errorText(error), true); }
    } catch (error) { notice(get("reply-message"), site.errorText(error), true); }
    finally {
      replyBusy = false;
      setBusy(get("reply-form"), false);
      accountChanged();
    }
  });
  get("replies-prev").addEventListener("click", () => { replyPage -= 1; void loadReplies(); });
  get("replies-next").addEventListener("click", () => { replyPage += 1; void loadReplies(); });
  window.addEventListener("oms:account", accountChanged);
  void site.ready.then(accountChanged);
  void loadPost();
})();
