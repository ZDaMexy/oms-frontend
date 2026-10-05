# Frontend Mainline Constraints

## 产品与公开口径

- `client-ir-native-account-ui`：客户端实际复用原 lazer 用户按钮、登录与个人页，来源取 [Client Bridge 原账号快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-native-account-snapshot-20261005.md)。网站使用同一 OMS 账号和最小 ID / 用户名，但浏览器与桌面分别登录；外链不带凭据，不能将窗口复用理解为接回 ppy 服务或共享会话。真实两端、窗口与 P/C 门仍由用户签收。
- 统一阶段及状态只由 [Dev Bridge dev-plan](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义。2026-10-04 用户授权社区帖首页与独立下载 / 帮助页面，Phase 2 / Phase 4 进入开发；阶段变化不替代实现、浏览器或生产证据。
- 2026-10-05 玩家拒绝当前视觉与文风，官网视觉验收重新打开。首页、社区、下载、帮助、账号与 IR 必须保持共同的字体、色彩、排版及控件规则；中文直接说明功能与实际状态，移除重复宣传口号和模板套话。旧站视觉材料可作参考，其历史产品说明和第三方演奏素材不因设计回用而恢复适用性。实际可见方案与对应浏览器结果先于完成结论，功能检查不代签设计质量。公共上游色板 / 组件在 portal/osu-web.css，body 字体和 OMS 控件适配在 portal/style.css，IR 样式仅定义榜单布局；手机视觉与 DOM 阅读顺序一致，密集表格仅在自身容器滚动。
- 2026-10-05 用户选择实际复用 osu-web 页面与组件设计，固定上游 `2c596022a1345fbed288978e7fa5304df0359f50`，将对应 Less / 模板适配为本项目可维护的原生 HTML / CSS / JavaScript；基础组件在 `portal/osu-web.css`，OMS 适配在 `portal/style.css`，IR 只维护榜单布局。复用文件、AGPL-3.0-or-later 与对应修改源码须从 `/credits/` 可读，不使用 osu! / ppy 品牌或未核对的字体 / 图像。以请求型 API 读取真实帖子 / 回复，账号复用原 IR；采用 [社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)。没有官方新闻栏目、假帖子、合成玩家动态或假活跃数，不扩张实时在线服务。
- 平台口径准确表达 Windows-only；客户端能力来自 [Client Bridge](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/README.md) 的有日期 / 提交来源，旧事实不能靠网页重构刷新为当前客户端已验证。
- 默认发行边界引用 [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记)：`client-default-offline`（默认离线优先）、`client-in-app-update-disabled`（历史默认更新开关）与 `client-online-entrypoints`（代码接点不证明已连服务）。公开新页面只采用本轮需要且有适用依据的口径，不把后两项旧快照包装为新版本承诺。
- 公开下载静态跳转至 GitHub Releases，不调用 GitHub API、不经过 OMS Backend；QQ 群 650530995 为手动搜索联络说明，不虚构邀请 URL。最新公开发行与开发源码能力分开；官网发布不制作 Windows 发行包。用户自行发行，设备验收通过 VS Code 非调试启动当前工作区。
- 旧首页演奏、判定数值及第三方谱面数据源码保留归档，不由新门户加载，也不进入本轮公开发布。未确认的便携更新、存储细项和判定数值不进入新页面。
- 共享服务器及部署边界由 [other/constraints](../other/constraints.md) 维护；本轮沿不可变服务发布目录，只更新 OMS 扩展，保全原个人主页和旧静态发布目录，不执行旧整站检出钩子。
- 门户静态页 / 固定阅读器由 Nginx 与 Backend API 同源提供；Backend 单独运行只直挂 `ir/`，完整本地门户验收采用隔离合成预览探针，不能把该工具当作额外已发布 Backend 能力。

## 页面与输入边界

- `/`、`/download/`、`/help/`、`/community/`、独立帖子、新帖、`/account/`、`/users/?id=<OMS ID>`、`/credits/` 与 `/ir/` 使用统一入口；原 `/#download` 转到独立下载页，已移出的旧锚点不能伪装成仍存在的区块。身份页只展示真实 OMS ID / 账号名与已有公开帖子，本人历史仍由原认证入口查看；无公开资格账号不提供匿名枚举，旧 LR2IR 身份不跳转为同名 OMS 账号。
- 原下载锚点包含初始导航与已打开首页的同文档 hash 变化；旧判定 / 特性 / 阶段锚点转帮助，不留下同文档无反应的入口。
- 门户 HTML 与 `/portal/` 资源每次使用都须重新校验版本，当前 Nginx 的 `Cache-Control: no-cache` 同时覆盖 200 / 304；旧校验值应返回新正文。发布检查包含普通刷新与实际引用资源的条件请求，不能只签首次打开或强制刷新。改版前已缓存且尚未联系服务器的旧页面无法靠新响应头追溯清除，反馈与证据边界见 [缓存复核](../other/community-infrastructure-20261004.md#2026-10-05缓存反馈复核)。
- 帖子标题 / 正文 / 回复和作者名按 API 合同渲染为文本节点，保留换行，不执行 HTML / Markdown，不提供附件、远端图片嵌入、点赞或私信。可信固定文案与不可信内容的处理边界明确。
- 发帖 / 回复使用 UUID 保证响应丢失后的同内容重交不重复创建；不因页面尚未得到成功响应先把内容显示为已保存。不自动高速重试，限流按 `Retry-After` 提示。
- 发布未获成功响应时文字、UUID 与原账号保留。账号切换后只有玩家主动选择“用当前账号发布”才重建 UUID 并改归当前账号，提示先核对上一账号发布结果；不能让普通重试悄悄改变作者，也不要求玩家通过修改正文脱离旧归属。
- 作者只管理自己的帖子和回复。作者删帖保留他人回复与固定地址占位，关闭帖禁止新增内容；删回复保留楼层。运营隐藏使帖子及子回复不公开，前端不以账户名字或本地开关虚构管理员权限。
- API 数据和错误按已采用合同消费，错误明确显示；不为缺字段或程序违约造默认对象、假成功或兜底假内容。外部输入在进入边界校验一次。

## 会话与 IR 回归

浏览器凭据只在 HttpOnly cookie，不放 localStorage；所有社区写请求同源并满足原 IR 的 Origin / JSON / `X-OMS-IR` 边界。跨页 / 标签复用同一浏览器会话，身份变化后不显示上一账号私有内容。

隐私说明区分本人可删除的帖子 / 回复正文，与需维护者核实的 IR / 账号数据删除；作者、时间、删除占位和他人回复的留存写清，不暗示已有网页删分 / 自助销号入口。下载适用平台本轮只写 Windows，不采用未经本轮来源绑定的系统版本细项。

`client-ir-default-isolation` 与 `client-ir-comparable-fields` 沿提交绑定来源与 [IR v1](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md)。IR 仍显示未经回放核验、最佳分 / 最佳灯来源差异，AT 只留本人历史；社区没有公开个人成绩主页，也不修改传分字段 / 条件分榜 / 本人历史权限。合成输入、社区操作或页面布局通过不签收真人成绩。

## 多来源 IR 与专用密钥

采用 [正式审查修订 3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)与 [多来源正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)。本仓只记录网页候选/浏览器/公开页面范围，完整历史投影、服务资源、恢复与发布取 [Backend 多来源实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)。采纳合同或实现入口不等于生产开放、真实宿主或 P/C 验收。

- BMS 按原 MD5 直达和目录搜索，来源可单选、多选、全部当前可用或主动空选。未开放来源如实标注并禁用；空选保留为空，不能偷偷回到全部。深链保存来源、参考/同条件、条件和页码，来源/条件变化重置分页并请求该完整范围。
- 来源筛选同时决定最佳分、独立灯、身份人数、共享排名、本人全榜位置与分页，全部以服务返回为准。网页不拼各源 TopN、不按本页计算排名、不用比例替代原 EX 排序；本人不在当前页时仍消费同范围本人行，没有本人时明确无记录。
- 同条件需玩家主动选择服务公布的可证明条件；跨播放器判定、TOTAL、分支、血条或长条规则未知时继续参考，不按家族名推定一致。显示未知字段、来源与旧 namespace/ID；同名旧账号不认作本人，缺日期/最大 EX/原灯不补造。独立灯保原来源与规则说明，历史摘要不冒充有局 ID 的历史。
- 公开数据区分 OMS 保存后的 UUID 新局、外部最佳状态及 LR2IR 历史摘要。`client-ir-save-first` / `client-ir-default-isolation` 的本轮来源绑定 [OMS b7d0f74d 快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-client-snapshot-20261004.md)，默认离线/按需请求和旧待交归属不变；mania 与本人逐局历史保持原 v1 权限，不扩展聊天、presence、多人与官网谱包。
- 密钥管理复用原 browser cookie、同源 Origin/JSON/`X-OMS-IR` 边界；网页密码不交播放器。专用秘密只在创建成功后当次显示，不存 localStorage/日志，也不从列表再次获取。账号切换清空私有显示与秘密，创建/撤销前核对当前账号；账号、谱面和榜请求 revision 排除晚到的旧响应，不能把密钥或本人记录留给新账号。
- Java 固定 SDK 编译仅软件证据，Open 工具/ABI与原生未知显示限制仍保留；目标版本、资格及未证明字段取 [播放器快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-player-snapshot-20261004.md)。网页来源出现、密钥创建或原生探针不能被文案升级为真实播放器交分通过。
- 本地浏览器、真实主机/全量预算、两次恢复、对应部署与真人门分开记录。未部署写候选实施，部署且真人未完写“已部署待验收”；P/C 必须按固定目标与玩法矩阵验收，不能以 ED 或单一插件签收整项，也不以旧社区成功刷新这些门。

## 验证与联动

本轮验证覆盖多页入口、真实社区闭环、纯文本输入、作者权限、删除 / 隐藏、会话复用、IR 回归、持久恢复和桌面 / 窄屏布局；方法见 [verification](verification.md)。静态资源检查不能代签浏览器、持久保存或生产部署。

客户端事实变化先更新 Client Bridge，再经 Dev Bridge 采用后回写；接口、错误、下载或联调结论变化同步 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/README.md) 与 Backend。通用协作和文件归属见 [AGENTS](../../AGENTS.md)。
