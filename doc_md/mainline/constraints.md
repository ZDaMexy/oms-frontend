# Frontend Mainline Constraints

## 产品与公开口径

- 统一阶段及状态只由 [Dev Bridge dev-plan](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义。2026-10-04 用户授权社区帖首页与独立下载 / 帮助页面，Phase 2 / Phase 4 进入开发；阶段变化不替代实现、浏览器或生产证据。
- Website 保持原生 HTML / CSS / JavaScript，以请求型 API 读取真实帖子 / 回复，账号复用原 IR；采用 [社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)。没有官方新闻栏目、假帖子、合成玩家动态或假活跃数，不扩张实时在线服务。
- 平台口径准确表达 Windows-only；客户端能力来自 [Client Bridge](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/README.md) 的有日期 / 提交来源，旧事实不能靠网页重构刷新为当前客户端已验证。
- 默认发行边界引用 [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记)：`client-default-offline`（默认离线优先）、`client-in-app-update-disabled`（历史默认更新开关）与 `client-online-entrypoints`（代码接点不证明已连服务）。公开新页面只采用本轮需要且有适用依据的口径，不把后两项旧快照包装为新版本承诺。
- 公开下载静态跳转至 GitHub Releases，不调用 GitHub API、不经过 OMS Backend；QQ 群 650530995 为手动搜索联络说明，不虚构邀请 URL。最新公开发行与开发源码能力分开；官网发布不制作 Windows 发行包。用户自行发行，设备验收通过 VS Code 非调试启动当前工作区。
- 旧首页演奏、判定数值及第三方谱面数据源码保留归档，不由新门户加载，也不进入本轮公开发布。未确认的便携更新、存储细项和判定数值不进入新页面。
- 共享服务器及部署边界由 [other/constraints](../other/constraints.md) 维护；本轮沿不可变服务发布目录，只更新 OMS 扩展，保全原个人主页和旧静态发布目录，不执行旧整站检出钩子。
- 门户静态页 / 固定阅读器由 Nginx 与 Backend API 同源提供；Backend 单独运行只直挂 `ir/`，完整本地门户验收采用隔离合成预览探针，不能把该工具当作额外已发布 Backend 能力。

## 页面与输入边界

- `/`、`/download/`、`/help/`、`/community/`、独立帖子、新帖、`/account/` 与 `/ir/` 使用统一入口；原 `/#download` 转到独立下载页，已移出的旧锚点不能伪装成仍存在的区块。
- 原下载锚点包含初始导航与已打开首页的同文档 hash 变化；旧判定 / 特性 / 阶段锚点转帮助，不留下同文档无反应的入口。
- 帖子标题 / 正文 / 回复和作者名按 API 合同渲染为文本节点，保留换行，不执行 HTML / Markdown，不提供附件、远端图片嵌入、点赞或私信。可信固定文案与不可信内容的处理边界明确。
- 发帖 / 回复使用 UUID 保证响应丢失后的同内容重交不重复创建；不因页面尚未得到成功响应先把内容显示为已保存。不自动高速重试，限流按 `Retry-After` 提示。
- 发布未获成功响应时文字、UUID 与原账号保留。账号切换后只有玩家主动选择“用当前账号发布”才重建 UUID 并改归当前账号，提示先核对上一账号发布结果；不能让普通重试悄悄改变作者，也不要求玩家通过修改正文脱离旧归属。
- 作者只管理自己的帖子和回复。作者删帖保留他人回复与固定地址占位，关闭帖禁止新增内容；删回复保留楼层。运营隐藏使帖子及子回复不公开，前端不以账户名字或本地开关虚构管理员权限。
- API 数据和错误按已采用合同消费，错误明确显示；不为缺字段或程序违约造默认对象、假成功或兜底假内容。外部输入在进入边界校验一次。

## 会话与 IR 回归

浏览器凭据只在 HttpOnly cookie，不放 localStorage；所有社区写请求同源并满足原 IR 的 Origin / JSON / `X-OMS-IR` 边界。跨页 / 标签复用同一浏览器会话，身份变化后不显示上一账号私有内容。

隐私说明区分本人可删除的帖子 / 回复正文，与需维护者核实的 IR / 账号数据删除；作者、时间、删除占位和他人回复的留存写清，不暗示已有网页删分 / 自助销号入口。下载适用平台本轮只写 Windows，不采用未经本轮来源绑定的系统版本细项。

`client-ir-default-isolation` 与 `client-ir-comparable-fields` 沿提交绑定来源与 [IR v1](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md)。IR 仍显示未经回放核验、最佳分 / 最佳灯来源差异，AT 只留本人历史；社区没有公开个人成绩主页，也不修改传分字段 / 条件分榜 / 本人历史权限。合成输入、社区操作或页面布局通过不签收真人成绩。

## 验证与联动

本轮验证覆盖多页入口、真实社区闭环、纯文本输入、作者权限、删除 / 隐藏、会话复用、IR 回归、持久恢复和桌面 / 窄屏布局；方法见 [verification](verification.md)。静态资源检查不能代签浏览器、持久保存或生产部署。

客户端事实变化先更新 Client Bridge，再经 Dev Bridge 采用后回写；接口、错误、下载或联调结论变化同步 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/README.md) 与 Backend。通用协作和文件归属见 [AGENTS](../../AGENTS.md)。
