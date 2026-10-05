# OMS Website 验证

## 本轮对象与可复跑检查

2026-10-04 社区改版验收首页、独立下载 / 帮助、社区列表 / 新帖 / 固定详情、账号与 IR 统一入口。旧 `assets/` 演奏和三语数据只保留归档，本轮不重新签收旧演奏 / 判定交互。实际结果只写入 [dev-progress](dev-progress.md)，本说明是方法而非完成证据。

在本仓库执行：

```powershell
. F:\oms\UseDevelopmentStorage.ps1
node scripts/verify.mjs
```

使用 Node.js 内置模块，无需安装前端依赖或构建。检查新多页本地引用、导航、资源和 JavaScript 语法；检查器本身变化时补相应 focused 验证。静态检查不能证明真实 API、浏览器布局、权限、持久保存、客户端事实或生产发布。

跨仓导航、统一阶段与 [Client Bridge 事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记) 由 [Dev Bridge 工作区验证](../../../../oms-server/dev_bridge_md/doc_md/mainline/verification.md) 负责；退出当前页面的旧能力消费者应移除，原事实 / 来源 / 待复核状态不因重构而改变。

## 同源服务与真实闭环

新增 `/users/?id=<OMS ID>` 要验证公开作者 / 榜单身份、空账号仅本人、匿名 / 他人相同 404、错误会话不退匿名、登录后的同源返回及退出 / 换账号清除本人入口；迟到 profile 回应不能复活旧私有显示。LR2 旧身份不链接新 OMS 用户页，外部最佳状态 / 历史摘要不进入逐局历史。静态许可、19 项 upstream 来源及当前源码下载由本次严格 release manifest 核对，不能以 GitHub 分支或旧 source 包代替当前适配源码；当前证据见 [实际复用核验](../other/osu-web-lazer-account-verification-20261005.md)。

生产由 Nginx 提供指定 release 的门户静态页、固定帖子阅读器和资源，并同源反代 `/api/ir/v1` 到 Backend。Backend 单独 `serve` 只直挂 `ir/`，不会自动挂全部门户；不能据独立服务启动声称官网完整可运行。普通 `python -m http.server` 也只检查独立静态入口 / 布局，不提供账号、帖子或动态详情。

本轮本地完整浏览器门使用只允许 F 盘合成库的 loopback ASGI 预览探针 `F:\oms\artifacts\oms-community-20261004\preview-server.py`，将当前门户路由和真实 Backend 同源挂到 `http://127.0.0.1:18085`，没有读取或复制生产库。已保留脚本可按本机路径复跑：

```powershell
. F:\oms\UseDevelopmentStorage.ps1
& F:\zdamexy-workspace\oms-server\oms-backend\.venv\Scripts\python.exe F:\oms\artifacts\oms-community-20261004\preview-server.py --backend F:\zdamexy-workspace\oms-server\oms-backend --website F:\zdamexy-workspace\websites\oms-website --database F:\oms\.dev-cache\temp\community-preview-acceptance.db
```

该探针是本轮保留的本机验收工具，不是 Backend 的公开运行能力或生产入口；Nginx 配置与实际服务器旧 / 新 runtime 验收另看 [Backend 社区报告](../../../../oms-server/oms-backend/doc_md/other/community-verification-20261004.md)。不用静态假内容代替服务。

本地浏览器至少验证：

1. 空库首页和社区显示真实空状态；下载与帮助是独立地址，统一导航均有实际去处，原 `/#download` 进入独立下载页。
2. 新账号注册 / 登录 → 发帖 → 首页及分类列表出现 → 固定地址重开与分享 → 另一个账号回复 → 作者编辑 / 删除；页面重载后内容和身份一致。
3. 分类、标题 / 正文字面搜索、作者筛选及分页使用真实 API。删除帖子不列于首页 / 搜索，详情占位保留他人回复且不能新增内容；删回复保留楼层。
4. 他人不能编辑 / 删除作者内容，直接写请求也被拒绝；CLI 运营隐藏后父帖及回复不公开。隐藏恢复和数据重启 / 一致备份恢复由 Backend 验证，不能以页面隐藏按钮替代权限证据。
5. 帖子 / 回复中的 HTML 和脚本字样以纯文本显示、不执行；全空白、超长、错误类别与非法查询明确失败，未保存内容不会被显示成成功。同 UUID 重交不重复创建。
6. 与 IR 共用会话、跨页返回、刷新、多标签退出 / 到期恢复不泄漏上一账号私有内容；发布失败后切换账号保留原 UUID / 归属，只有点击“用当前账号发布”才重建为当前账号，并提示核对原发布结果。IR 原本人历史与公开条件榜语义不变，浏览器不在 localStorage 保存凭据。
7. 服务中断、失效会话、关闭帖、无权修改和限流有明确反馈，等待时间以 `Retry-After` 为准；不伪成功、不自动高速重试。

合成行为探针只证明所列输入。生产探针不能伪造长期公开社区动态；测试内容须明确识别并在验收后隐藏 / 删除，真实玩家帖子与真人成绩由用户确认。

## 布局与公开部署

实际浏览器视口分别为桌面 1280×800 与窄屏 390×844，先核 `innerWidth`；导航、帖子正文、长连续字符串、发帖 / 回复 / 管理控件和表单反馈可见，整页无横向溢出。表格可内部滚动。记录实际视口、控制台页面脚本错误、本地资源状态和受影响页面，不能用 HTTP 200 代签布局。

2026-10-04 本轮本地实际 Edge 使用 1360×1000 / 390×844；最终公网只读 Edge 使用 1280×800 / 390×844，两份实际范围分别记录。公开浏览器没有创建账号或帖子，写路径由本地 / 主机隔离合成门证明，真人生产使用由用户验收。初次 `thread-mobile.png` fullpage 存在粘性页眉捕获滚动状态，保留为初次证据，随后页首截图及 IR 自身加载补核记录于 `final-screenshots-report.json`；保留原截图限制，不改写首轮采样事实。

最终公网资源与 release manifest 逐字节核对，固定阅读器不存在帖的页面壳可正常返回，API 为 404 并明确显示内容不可用；其他未知静态路径 404，不混同两种情况。旧 `#download` 必须覆盖初始打开和同文档 `hashchange`，不只检查带锚点直接导航；首轮失败、修复源码与独立回归记录分别保留。

生产另核 HTTPS / 路径、下载旧锚点、社区固定地址、静态资源、API / 会话、原 IR 与个人主页，核对发布来源及 schema 2 / 一致备份边界。共享基础设施与双站验证归 [other](../other/README.md)。官网部署不制作 Windows 发行包；客户端实机验收由用户通过 VS Code 非调试启动当前工作区完成。

## 既有 IR 与历史证据

原 `ir/` 首轮本地账号 / 条件榜 / 本人历史、两标签恢复与退出、服务中断后重试和 1280×800 / 390×844 结果保留 2026-10-03 日期，见 [IR1](../../../../oms-server/oms-backend/doc_md/other/ir1-local-verification-20261003.md)。2026-10-03 公网 HTTP / TLS 与 cookie 结果见 [生产记录](../other/ir-infrastructure-20261003.md)；当轮公网浏览器控制连接超时，最终交互未签收。

旧首页 2026-09-09 的三语、演奏与判定交互归 [changelog](changelog.md)，不是新版社区布局证据。通过且没有新变化 / 失败 / 未解疑点后停止扩测，只记录本轮实际范围。

## 发布后的缓存复核

2026-10-05 玩家报告首页仍像旧版，Ctrl+F5 后恢复。以后发布门户时，除首次打开外，必须验证普通刷新以及首页到独立下载页再返回；保存可见内容与实际结果。已有旧缓存的原响应在强刷后未必还能取证，不能把推断写成已证明的具体缓存时长或中间层故障。

在已发布且本地门户源码对应该制品时执行：

```powershell
. F:\oms\UseDevelopmentStorage.ps1
node scripts/verify-public-cache.mjs
```

这是独立、按需运行的公网只读维护检查，不由客户端或页面自动发起。固定请求 `https://oms.zdamexy.work` 的六个门户页及这些页面实际引用的 `/portal/` 资源，不登录、不写内容、不清除玩家浏览器缓存；使用默认 TLS 校验。它检查正文与本地源码字节、200 / 304 的 `no-cache`、当前 ETag 复用、旧单页日期及明确合成的不匹配 ETag 返回新版。JSON 输出应留在非系统盘验收目录，失败退出码非零；本地候选尚未发布时字节不符是预期阻断，不能改成跳过比较。

HTTP 校验不能代签浏览器普通刷新，也不能追溯清除从未向服务器重新请求的旧缓存。2026-10-05 实际范围与原始证据只维护于 [共享设施缓存记录](../other/community-infrastructure-20261004.md#2026-10-05缓存反馈复核)。

## 2026-10-05 设计移植复核

八页来源、实际 API / 浏览器、首次手机失败和修复、真实验收待项集中在 [重设计报告](../other/website-redesign-verification-20261005.md)。共享表面变化须实际查看空态 / 长标题 / 账号与榜单；手机 IR 同时检查 documentElement 与 body 的 scrollWidth，不能只看 body。屏幕阅读文本的绝对定位也应被 table-wrap 的滚动边界约束；数位名次需保留完整一行，不由视觉裁切代替真实值。

缓存检查按各页实际地址解析相对与绝对 /portal/ 引用，保留资源版本查询；新稿不能让静态检查只测 HTML 而遗漏 CSS / JS。发布后的实际字节与普通刷新另留证，不提升此前静态 OpenDesign 图或历史浏览器门。
