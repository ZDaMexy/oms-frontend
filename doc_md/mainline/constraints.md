# Frontend Mainline Constraints

## 产品与公开口径

- `client-ir-native-account-ui`：客户端实际复用原 lazer 用户按钮、登录与个人页，来源取 [Client Bridge 原账号快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-native-account-snapshot-20261005.md)。网站使用同一 OMS 账号和最小 ID / 用户名，但浏览器与桌面分别登录；外链不带凭据，不能将窗口复用理解为接回 ppy 服务或共享会话。真实两端、窗口与 P/C 门仍由用户签收。
- 统一阶段及状态只由 [Dev Bridge dev-plan](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义。2026-10-04 用户授权社区帖首页与独立下载 / 帮助页面，Phase 2 / Phase 4 进入开发；阶段变化不替代实现、浏览器或生产证据。
- 2026-10-05 玩家拒绝当前视觉与文风，官网视觉验收重新打开。首页、新闻、谱面搜索 / 详情、个人页、玩家榜、社区、下载、帮助、账号与 IR 必须保持共同的字体、色彩、排版及控件规则；中文直接说明功能与实际状态，移除重复宣传口号和模板套话。旧站视觉材料可作参考，其历史产品说明和第三方演奏素材不因设计回用而恢复适用性。实际可见方案与对应浏览器结果先于完成结论，功能检查不代签玩家的视觉认可。系统字体、既有 `portal/osu-web.css` / `portal/style.css` 与完整玩家视图的 `portal/player-site.css` 共同遵守这些规则；手机保留标题和页签，密集表格只在自身容器滚动。
- 2026-10-05 用户明确采用整体 osu-web 的成熟产品路径。固定上游 `2c596022a1345fbed288978e7fa5304df0359f50`，实际 fork 搜索 / 详情 / 个人 React 视图与 BEM Less，主页 / 导航 / 排名 Blade 结构迁入 JSX；OMS TypeScript 类型和按需控制器接真实 FastAPI / SQLite。固定依赖、原始修改源码、准确原 Git blob 指纹、构建说明及 AGPL-3.0-or-later 随同发布源码 offer，从 `/credits/` 可读；不把有限样式取样称为完整产品复用，不伪造 ppy API、PP、国家、等级、时长或在线状态，不使用未经核对的品牌、字体或图像。原社区沿 [社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)，首页展示真实新闻与帖子，不造合成玩家动态或活跃数。
- 平台口径准确表达 Windows-only；客户端能力来自 [Client Bridge](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/README.md) 的有日期 / 提交来源，旧事实不能靠网页重构刷新为当前客户端已验证。
- 默认发行边界引用 [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记)：`client-default-offline`（默认离线优先）、`client-in-app-update-disabled`（历史默认更新开关）与 `client-online-entrypoints`（代码接点不证明已连服务）。公开新页面只采用本轮需要且有适用依据的口径，不把后两项旧快照包装为新版本承诺。
- 公开下载静态跳转至 GitHub Releases，不调用 GitHub API、不经过 OMS Backend；QQ 群 650530995 为手动搜索联络说明，不虚构邀请 URL。最新公开发行与开发源码能力分开；官网发布不制作 Windows 发行包。用户自行发行，设备验收通过 VS Code 非调试启动当前工作区。
- 旧首页演奏、判定数值及第三方谱面数据源码保留归档，不由新门户加载，也不进入本轮公开发布。未确认的便携更新、存储细项和判定数值不进入新页面。
- 共享服务器及部署边界取 [共同发布维护](../../../../oms-server/oms-backend/deploy/README.md) 与 [双站维护镜像](../other/oms-player-site-infrastructure-20261006.md)；本轮沿不可变服务发布目录，只更新 OMS 扩展，保全原个人主页、TLS / 续期 / .well-known 和旧静态发布目录，不执行旧整站检出钩子。镜像整理不代签本轮准备、量测、恢复或部署。
- 门户静态页 / 固定阅读器由 Nginx 与 Backend API 同源提供；Backend 单独运行只直挂 `ir/`，完整本地门户验收采用隔离合成预览探针，不能把该工具当作额外已发布 Backend 能力。

## 2026-10-07 玩家呈现修订

采用用户深度去AI味要求：中文说明真实功能与当前动作，项目 / 运行取证只在维护说明；统一已采用的osu-web结构，不堆重复口号、嵌套卡片或无消费者控件。来源选择必须改变实际下载入口；mania不得显示BMS原EX / 独立灯；本人导航不为他人页预留空列。区分整个范围为空和本页为空，保留真实total、页外本人和直接回第一页，回页不清条件。未知字段、旧身份、原灯 / 原条件标识可折叠但不可删或推算；无原局ID不造历史。反复源码 / 文案审查及自动检查不代签实际视觉或真人验收，证据见[核验](../other/oms-deai-verification-20261007.md)。

## 页面与输入边界

2026-10-05 用户的新范围采用 [玩家网站合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md)：BMS 与原生 mania 的整体谱面获取、成熟公开个人页和透明玩家榜。首页近期新闻、`/news/` 与真实文章固定地址采用上游新闻视图，单一 `src/oms/news.ts` 维护真实日期及已发布 / 试运行状态；只发布已有公开发行或实际运行能力。新 [玩家 API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/player-api.md) 消费原已合格的公共最佳、独立灯和条件统计；[谱面 API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/catalog-api.md) 仅批准源元数据及原站包入口。地力设计后置、PP另议，累计分、收录和通关数量不包装成能力榜或自造评级。

- `/`、`/news/` 与固定文章、`/beatmapsets/`、`/beatmaps/`、`/rankings/`、`/download/`、`/help/`、`/community/`、独立帖子 / 新帖、`/account/`、`/users/?id=<OMS ID>`、`/credits/` 与 `/ir/` 使用统一入口。原 `/#download` 转到独立下载页，已移出的旧锚点不能伪装成仍存在的区块。个人页按真实玩法 / 键型 / 可用 live 来源展示当前公开最佳、独立灯、分条件统计和最近公开最佳 / 状态更新；最近不称全部逐局历史。作者帖子和本人管理按实际资格显示，完整 UUID 历史、AT 与密钥仍只走原认证入口；无公开资格账号不提供匿名枚举，旧 LR2IR 身份不跳转为同名 OMS 账号。
- BMS 谱面获取只使用批准的 Ginger / 616，原生 mania 使用 Sayobot。搜索保持真实来源分页 / 游标，不拼来源 TopN 充当完整目录；BMS 原 MD5 / 可知 SHA256 和包候选保真。Sayobot 缺原 .osu MD5 时不从 sid / bid、同名或候选包猜出 OMS 同谱关联。元数据请求有界、按需且无账号凭据透传，下载入口在验证后 `307` 至批准原站 HTTPS；OMS 不代理 / 托管大包，不把元数据、HEAD、首字节或跳转当整包下载 / 入库完成，也不提供未获证的自动入库入口。
- 玩家榜先筛完整玩法 / 键型 / 单个 live 来源和实际条件，再计算指标、共享名次和分页；BMS 提供覆盖及真实条件通关，mania 提供普通 `30000016` 的累计公开最佳分 / 覆盖。累计值以精确十进制字符串消费，同分、零通关真实参榜者和页外本人保真。未知条件 / 原灯不换算成已对齐条件，长原始字段可折叠但不删除；假 PP 列、假地域与推定地力不进入页面。
- 2026-10-06 沿正式 `450d13d` [公开统计读取修订](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md#2026-10-06-公开统计读取修订)采用必要、可重建的读模型，取代初修“无持久聚合”的技术取舍。它只消费当前 live 合格公开最佳、真实条件和独立灯，不复制私人局 payload、凭据或 LR2IR 个人记录，不成为第二份成绩权威；接口、精确整数、个人 / 全榜标准及资源预算不变。当前写事务提交前维护，旧 schema3 写入留下普通 SQLite dirty，新 runtime 在 readiness 前修复；失败回滚，不把失效统计当成功返回。全派生表 / 索引 / trigger 进入备份和完整指纹，未知 / 部分结构拒绝。
- 新读模型下 b520 的旧备份工具不能维护扩展结构。旧 HTTP / 网站兼容回退须保留批准的 `3abf9aa37415-0cac041e0cd1` 中 backup.py / backup.sh 与固定 `oms-ir-backup.service`，分别绑定真实运行 release 与维护代码来源；不能恢复旧整套备份单元、删除新表或用旧快照覆盖新局。`53ea4e…` 只是未改的 host_player_probe.py 验收脚本指纹，不是维护代码身份。旧读取往返、旧 HTTP 新写重返、128 MiB 维护预算与正式两次空恢复分别取 Backend 实测，局部通过不能代签整套回退。
- 原下载锚点包含初始导航与已打开首页的同文档 hash 变化；旧判定 / 特性 / 阶段锚点转帮助，不留下同文档无反应的入口。
- 门户HTML与`/portal/`资源每次使用都须重新校验版本，Nginx `Cache-Control: no-cache`覆盖200 / 304；Backend的`/ir/`沿既有中间件使用`no-store`，核验器按各自真实策略检查，不能错误要求IR持久缓存。旧校验值应返回新正文；发布门包含普通刷新、当前空304与旧校验值的新200，不能只签首次打开或强刷。改版前尚未联系服务器的缓存无法靠新响应头追溯清除，边界见[缓存复核](../other/community-infrastructure-20261004.md#2026-10-05缓存反馈复核)。
- 帖子标题 / 正文 / 回复和作者名按 API 合同渲染为文本节点，保留换行，不执行 HTML / Markdown，不提供附件、远端图片嵌入、点赞或私信。可信固定文案与不可信内容的处理边界明确。
- 发帖 / 回复使用 UUID 保证响应丢失后的同内容重交不重复创建；不因页面尚未得到成功响应先把内容显示为已保存。不自动高速重试，限流按 `Retry-After` 提示。
- 发布未获成功响应时文字、UUID 与原账号保留。账号切换后只有玩家主动选择“用当前账号发布”才重建 UUID 并改归当前账号，提示先核对上一账号发布结果；不能让普通重试悄悄改变作者，也不要求玩家通过修改正文脱离旧归属。
- 作者只管理自己的帖子和回复。作者删帖保留他人回复与固定地址占位，关闭帖禁止新增内容；删回复保留楼层。运营隐藏使帖子及子回复不公开，前端不以账户名字或本地开关虚构管理员权限。
- API 数据和错误按已采用合同消费，错误明确显示；不为缺字段或程序违约造默认对象、假成功或兜底假内容。外部输入在进入边界校验一次。

## 会话与 IR 回归

浏览器凭据只在 HttpOnly cookie，不放 localStorage；所有社区写请求同源并满足原 IR 的 Origin / JSON / `X-OMS-IR` 边界。跨页 / 标签复用同一浏览器会话，身份变化后不显示上一账号私有内容。

隐私说明区分本人可删除的帖子 / 回复正文，与需维护者核实的 IR / 账号数据删除；作者、时间、删除占位和他人回复的留存写清，不暗示已有网页删分 / 自助销号入口。下载适用平台本轮只写 Windows，不采用未经本轮来源绑定的系统版本细项。

`client-ir-default-isolation` 与 `client-ir-comparable-fields` 沿提交绑定来源与 [IR v1](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md)。IR 仍显示未经回放核验、最佳分 / 最佳灯来源差异，AT 只留本人历史；新增个人页仅消费正式玩家 API 允许的当前公开最佳，不扩张传分字段、私人逐局历史或 LR2IR 个人公开投影。客户端沿原 lazer 登录 / 个人页入口，浏览器与桌面分别认证，外链不交 token；合成输入、社区操作或页面布局通过不签收真人成绩。

## 多来源 IR 与专用密钥

采用 [正式审查修订 3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)与 [多来源正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)。本仓只记录网页候选/浏览器/公开页面范围，完整历史投影、服务资源、恢复与发布取 [Backend 多来源实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)。采纳合同或实现入口不等于生产开放、真实宿主或 P/C 验收。

- BMS 按原 MD5 直达和目录搜索，来源可单选、多选、全部当前可用或主动空选。未开放来源如实标注并禁用；空选保留为空，不能偷偷回到全部。深链保存来源、参考/同条件、条件和页码，来源/条件变化重置分页并请求该完整范围。
- 来源筛选同时决定最佳分、独立灯、身份人数、共享排名、本人全榜位置与分页，全部以服务返回为准。网页不拼各源 TopN、不按本页计算排名、不用比例替代原 EX 排序；本人不在当前页时仍消费同范围本人行，没有本人时明确无记录。
- 同条件需玩家主动选择服务公布的可证明条件；跨播放器判定、TOTAL、分支、血条或长条规则未知时继续参考，不按家族名推定一致。显示未知字段、来源与旧 namespace/ID；同名旧账号不认作本人，缺日期/最大 EX/原灯不补造。独立灯保原来源与规则说明，历史摘要不冒充有局 ID 的历史。
- 公开数据区分 OMS 保存后的 UUID 新局、外部最佳状态及 LR2IR 历史摘要。`client-ir-save-first` / `client-ir-default-isolation` 的已采用来源绑定 [OMS b7d0f74d 快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-client-snapshot-20261004.md)，默认离线 / 按需请求和旧待交归属不变；mania 与本人逐局历史保持原 v1 权限，不扩展聊天、presence、多人或 OMS 谱包托管。批准公共谱面元数据及原站下载跳转仅沿本次玩家网站合同。
- 密钥管理复用原 browser cookie、同源 Origin/JSON/`X-OMS-IR` 边界；网页密码不交播放器。专用秘密只在创建成功后当次显示，不存 localStorage/日志，也不从列表再次获取。账号切换清空私有显示与秘密，创建/撤销前核对当前账号；账号、谱面和榜请求 revision 排除晚到的旧响应，不能把密钥或本人记录留给新账号。
- Java 固定 SDK 编译仅软件证据，Open 工具/ABI与原生未知显示限制仍保留；目标版本、资格及未证明字段取 [播放器快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-player-snapshot-20261004.md)。网页来源出现、密钥创建或原生探针不能被文案升级为真实播放器交分通过。
- 本地浏览器、真实主机/全量预算、两次恢复、对应部署与真人门分开记录。未部署写候选实施，部署且真人未完写“已部署待验收”；P/C 必须按固定目标与玩法矩阵验收，不能以 ED 或单一插件签收整项，也不以旧社区成功刷新这些门。

## 验证与联动

本轮验证覆盖两模式真实谱面路径、公开个人 / 玩家榜语义、多页入口、社区纯文本 / 作者权限、会话和迟到回应边界、旧 IR 回归与桌面 / 窄屏布局；方法见 [verification](verification.md) 和 [玩家网站实际核验](../other/oms-player-site-verification-20261005.md)。读模型的软件与主机查询 r6 大样本首请求 / 数学 / 隐私 / 旧读取往返通过，兼容 r3 的真实旧 HTTP 新写 / 重交、外部状态、独立灯、dirty / WAL、新助手128 MiB备份及附加恢复已 completed / pass；r1 / r2探针误用原失败保留。正式 1800 秒 / 5 rps / 全量历史及两新空恢复流程已启动，结果待签；同主服务 worker 与发布不能由启动状态代签。根按原标准继续签收，精确版本、时间和结果只取 [Backend 验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md)。局部通过不代签整个共享门、生产激活、整包入库或用户视觉认可；新范围尚未部署，部署后仍须真人和 P/C 签收。

客户端事实变化先更新 Client Bridge，再经 Dev Bridge 采用后回写；接口、错误、下载或联调结论变化同步 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/README.md) 与 Backend。通用协作和文件归属见 [AGENTS](../../AGENTS.md)。

`client-ir-saved-connection-and-board-ui`：采用[Client Bridge原连接与查榜快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-ui-snapshot-20261007.md)，Website帮助采用真实启用 / 保存 / 登录顺序；原账号源码6168791及17/17仅软件证据，默认离线 / 原UUID / owner与独立会话不变，真实窗口和P/C仍待。
