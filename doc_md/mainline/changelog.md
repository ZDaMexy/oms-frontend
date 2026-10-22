# Frontend Mainline Changelog

## 2026-10-22

专项同步审查并接收开工已有的文档迁移、旧 i18n / 动效脚本清理和 SDK 路径说明，修正当前状态仍停在 10 月 12 日的问题；新增 `.dev-cache/` 忽略，缓存不进入源码。`npm run verify` 通过 16 页 / 524 引用 / 4 脚本 / 4 样式，两个旧脚本语法通过，lock 仅 peer 元数据变化。没有重新构建旧设计、浏览器交互验收或部署；完整范围、阶段与事实登记边界取[统一收据](../../../../oms-server/dev_bridge_md/doc_md/mainline/changelog.md#2026-10-22-全工作区进度与文档记忆同步)。

## 2026-10-12

- 以 HEAD `66e2123facca415b7d47c03983eb143def14aef4`、Git 状态及原有 diff 核对保全基线；README / 文档、`.gitignore`、旧脚本与 `src/BUILD.md` 的既有差异完整保留，未改业务源码。
- 旧 P1-A 及支线索引补齐官网交接后的使用边界：原 2026-09-09 结构 / 交互交接结论保留，当前功能、内容与真人反馈转到 OMS Web，本仓主线仅承接保全 / 已验证范围内的回退任务。
- `client-ir-saved-connection-and-board-ui` 保留原事实 ID、源码及软件来源，帮助启用 / 保存 / 登录明确为当时步骤；现行固定 OMSIR 直接登录转引共同合同，未修改事实登记或以历史帮助刷新真人门。
- 本轮只修改协作文档；没有重测旧站、生产访问、提交、推送或部署。共享镜像与入口整理见 [运维当次记录](../other/changelog.md#2026-10-12)，既有运行 / 浏览器 / 恢复与真人限制保持原证据日期。

## 2026-10-11

- 以本地 HEAD `0f16e53926726dbbf11889a3241c9c32b0f099eb`、Git 状态与既有 diff 核对旧仓保全职责；未改原页面或脚本，保留此前未提交差异。
- 给旧 `src/BUILD.md` 与主线验证方法补齐历史适用范围，避免旧新闻源 / 静态构建 / 缓存检查被当作现官网操作；README 的旧验证入口直接指向既有历史，现新闻继续取 OMS Web。仅核对迁移后的预览探针及旧严格包路径存在，没有运行探针或重测旧站。
- 开工文档原文与各仓已有 diff 保存在 `F:/zdamexy-workspace/oms/artifacts/workspace-doc-health-20261011/before.json`；`src/BUILD.md` 开工原文单独保存在同目录 `before-src-BUILD.md.txt`。本轮没有提交、推送、部署或生产复验；共享设施记录核对见 [运维当次记录](../other/changelog.md#2026-10-11)。

## 2026-10-09（旧设计状态与计划收束）

当前进展只保留 2026-10-08 的交接状态、回退职责与尚未关闭的真人门；旧执行计划和历次验证移入下方历史。原页面、脚本、未提交差异及失败不改，本次未运行旧站软件 / 浏览器或部署。

### 旧静态站进展与计划归档

以下原文来自本轮开工时的进展和计划，证据日期为 2026-10-03～07；其中“本轮”“当前”“待”均属原时点。2026-10-09 仅归档，标题层次和相对链接按新位置调整；当前官网及维护只取 OMS Web。完整开工原文见 F:/oms/artifacts/oms-doc-health-20261009-0000/before.json。

#### 原进展

#### 2026-10-07 页面与原账号复查

四轮源码 / 文案复查后的官网已于04:25:04 CST实际发布 `d1f052b93a81-e6fdf914cb04` / schema3。重复说明与卡片收紧，排版统一，所选下载源、mania错义、他人空侧栏和失效分页已修；原始条件、未知灯、旧身份与本人范围保留。新官网公开页面 / 缓存 / 全部对应源码、正式备份与两新空恢复通过，Backend / 插件 / 投影与六份配置字节不变。客户端软件来源6168791已推送，原账号窗口仍待VS Code非调试体验。来源、失败与真人路径取[本次核验](../other/oms-deai-verification-20261007.md)，当前“已部署待验收”。浏览器工具超时，视觉与P/C未签收。下方d1 / 22b为前次完整运行门的原来源。

#### 2026-10-07 页面发布前的完整运行记录

前次完整运行门记录（2026-10-07本次04:25页面发布前）：整体osu-web BMS / 原生mania玩家网站 `d1f052b93a81-22b4ee54f237` / schema3 **已部署待验收**。新全量R7与严格源码提供、完整受保护F / 实际空间、生产激活与切回后的156公开GET / 880检查、HTTP缓存 / 双站、三阶段正式备份 / 两新空恢复和b520→新同库回退、原timer恢复均有实际证据；原失败保持，最终observer漏采prune PID与独立F22表备份校验分记。客户端运行234a9ff未变；文档HEAD不更新运行来源。精确门、资源与维护只取[最新服务验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#生产发布与维护收尾) / [维护说明](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-maintenance-20261006.md)，页面 / 真人缺口取[本仓核验](../other/oms-player-site-verification-20261005.md)。视觉 / 普通浏览器刷新、真人下载入库 / 私有账号 / OMS两端与P/C尚未签收。

玩家现可在官网首页看两篇真实开发 / 发行近况并进入原社区；按 Ginger / 616 来源浏览 BMS，用原MD5看具体谱、两个原包候选、自动推荐与人工换源；通过Sayobot浏览1～18K原生mania、原sid / bid和具体难度。下载仅在批准有界元数据 / 连通性核验后307到原站；初次Ginger失败与616替代、切回后Ginger和616均ok的两次实际结果分别保留，不承诺外源持续可用。来源失败 / 未命中、未知键型、SHA和源计数 / 游标如实显示；首次真实整包下载、OMS入库 / 打开仍待，没有已获证的网页→客户端自动入库。

个人页按玩法、键型和一个 / 多个新来源展示公开最佳、独立灯、最近公开最佳 / 外部状态更新与分条件统计；本人UUID、AT、密钥与旧LR2IR身份沿原边界。玩家榜按单个新来源 / 明确真实条件统计BMS通关与覆盖、mania普通30000016累计最佳；全范围先算名次后分页，并列和页外本人保真。地力 / 黑星 / komasan / Walkure后置，PP为后续优先方向但须独立讨论规则 / 数据 / 客户端；累计分和通关数不称PP或地力。

客户端开发工作区沿原 lazer 用户按钮、登录与个人页入口，网站用同一 OMS 账号；浏览器与桌面分别登录，个人页外链只传稳定 ID，不移交 token。原入口的软件和来源依据取 [Client Bridge 原账号快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-native-account-snapshot-20261005.md) 与 [本轮客户端来源](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-player-site-client-snapshot-20261005.md)。用户 VS Code 非调试游玩、旧待交 / UUID / 归属和两端真实一致性仍待，不将软件入口描述为真人已通过。

旧静态阶段的新闻维护源为 `src/oms/news.ts`，当时供首页、列表和固定文章共同读取2026-10-05“按需IR试运行”与2026-06-26“OMS 20260626发布”，真实日期 / 状态和旧release边界明确；该文件不再承载当前新闻维护。固定osu-web `2c596022a1345fbed288978e7fa5304df0359f50` 的实际React视图 / Blade结构 / BEM Less、依赖 / 构建说明 / AGPL及对应修改源码已纳入当次精确白名单并公开，运行与源码清单分别绑定；旧全资产字节门不代签原版站浏览器视觉。

根统一类型检查r8与生产资源构建r8、静态页面门通过；Backend玩家 / 原身份、批准源与旧IR / 混榜 / 社区 / 备份，以及最终源码offer白名单均通过对应软件门。Client原生mania六判定与普通Desktop Release通过，新源 `234a9ff39654cdc30f3d5661cb6a9bf69bb90db6` 已推送。精确命令、结果及首次失败只取 [新核验](../other/oms-player-site-verification-20261005.md#本轮有效软件门)，不以软件数签产品或真人完成。

根本地实际浏览器 r6～r7 已核对首页 / 两篇新闻、真实来源目录 / 详情、公开最佳 / 独立灯 / 分条件统计、玩家榜后页与页外本人，以及退出后移除本人管理入口。390px 标题 / 本人表格溢出修复通过，103 难度仍全部可选且内部滚动，原失败保留。r8 在 Website `0cac041e0cd1` / 启动时 Backend `7dd428` 的本地服务核对游客登录要求、两个明确合成账号、post 2 的创建 / 固定地址编辑、回复创建 / 编辑、XSS 正文文本显示及非作者隐藏编辑 / 删除入口；未向生产发合成帖，截图是回复编辑前画面。这些证明当次页面行为，不证明后续 SQL 性能；精确证据和未覆盖动作取 [新核验](../other/oms-player-site-verification-20261005.md)。

正式 `450d13d` 的公开统计修订采用必要、可重建的读模型，替代初修“无持久聚合”的技术取舍，公开语义和原标准不变。根已完成 focused 117 / full 312 软件门；主机查询 r6 两玩法各100,000 distinct的原首请求、数学、隐私和真实旧 runtime 读取往返通过。`population-compat-report-r3.json` 已 completed / pass，核对旧 HTTP UUID 新局 / 重交、ED 最佳状态 / 独立灯、dirty / WAL、128 MiB新助手备份 / 附加空恢复及完整原始数学，r1 / r2路由前缀与条件描述字段误用失败保持原记录。批准维护代码来自 `3abf9aa37415-0cac041e0cd1` 的 backup.py / backup.sh与固定备份单元，运行 b520 / 维护3ab来源分别绑定；`53ea4e…` 只是未改的 host_player_probe.py 指纹，具体来源与结果只取 Backend 验证。

正式流程在 UTC 2026-10-05 21:40:23.852909 以 1800 秒 / 5 rps、全量25M历史、100,000 OMS局及各29,204原生整榜、两次新空恢复范围启动；以下保留该启动时点的待签记录：结果当时待根签收，启动或兼容 r3通过不证明整个共享门和同主服务 worker联测已通过，生产发布当时未开始。实际激活后的公开字节 / 普通刷新和 200 / 304 缓存 / 双站 / 新备份，首次真实整包下载 / 入库、用户非调试游玩、真实宿主 / 非空 DLL、真人视觉认可与 P/C 继续保留；地力后置、PP另议，通过门并实际部署后才写“已部署待验收”，不生成 Windows 发行包 / publish / 安装副本。

#### 前轮已部署记录

2026-10-05 17:16:55（UTC+8）已部署实际 osu-web 静态适配 `b520bcb99015-5d0531c22423` / schema3：共用导航、主页真实帖子、下载 / 帮助及最小 `/users/`，固定 upstream 来源与 AGPL / 对应运行源码可查。客户端原登录 / 个人页已接同账号与本人 UUID 记录，原界面软件门与普通编译通过；全量主机、两空恢复、保全补账、schema3 兼容往返、公开字节 / 路由 / 缓存和新日备份通过。详细来源、首次失败、工具限制、维护和真人路径只取 [本次核验](../other/osu-web-lazer-account-verification-20261005.md)。当前 **已部署待验收**：视觉认可、生产真人社区、两端真实成绩、窄屏 / 公网点击往返与 P/C 未签收，下方早先发布保持历史适用范围。

#### 2026-10-05 早先发布记录

2026-10-05 官网整体重设计已由 OpenDesign / Local Codex 的 gpt-6-astra / medium 完成，并已移入现有八页。首页真实帖子流、独立下载 / 帮助、账号、发帖 / 详情和 IR 使用同一组字体、颜色、表单与焦点规则；移除口号、内部维护口吻和编辑元数据，保留旧公开包与 IR 开发版边界。首选模型拒绝、备用冲突与准确实际设置证据保留；全局配置未改。

根实际 API / 浏览器已通过零帖与真写入测试帖、长标题、分类搜索 / 作者筛选、跨账号回复和本人编辑、删帖保留他人回复 / 关闭、账号私有显示清除，以及完整来源 / 同条件 / 首中末页 / 深链。手机帮助目录和 IR 阅读顺序已修复；首次手机 IR 整页撑宽与五位名次换行保留失败记录，最终 390px 根 375 / 375、表格自身横滚正常。静态 8 页 / 207 引用通过；详细范围、原始失败和未签项取 [官网重设计验收](../other/website-redesign-verification-20261005.md)。

2026-10-05 12:02:06（UTC+8）已上线 ecca50eab82c-d34fab9b9611 / schema3，Website 运行来源 d34fab9 已推送，Backend / 插件 / 投影字节保持原 ecca 发布身份。一致快照与激活 / 健康门、55 文件、公开 22 文件 GET / HEAD 和缓存 22 请求 / 62 检查通过；实际普通刷新、下载往返及公网手机首页 / 全来源榜补核。维护 / 备份 / 兼容回退和实测余量只取上述报告及服务维护，后续文档 HEAD 不代替运行提交。当前 **已部署待验收**，视觉认可、生产真人社区与 P/C 仍待，不能由 OpenDesign 或合成输入代签。

本次仅在 F 盘保留完整设计、实际源码预览与证据；只移植现有 14 项运行文件，没有新依赖 / 外部资源 / Windows 发行物。原十六项未提交 / 删除文件逐一保全，未带入发布。服务 / 适配器 / 投影字节未变，发布继续采用实际在线 Backend ecca 的准确来源，方法见 [仅官网改版发布](../../../../oms-server/oms-backend/deploy/README.md#仅官网改版的发布)。

2026-10-04 官网已从介绍/下载单页改为社区近期帖子首页，提供独立下载、入门帮助、固定帖地址和账号页。旧首页与迁移源码保留归档，新门户在 `portal/` 实现；开工工作区与首次验证归 [历史记录](changelog.md)，不把开工 HEAD 写成当前或生产来源。

社区官网于2026-10-04上线，当时包为`f1f8286640c7-c1b1b7a5da7a`；首页、下载/帮助、账号和社区已接真实API，原IR共用账号与导航，公开0帖不填造。软件、本地Edge、隔离迁移/恢复及当日公开只读证据保留日期，真人使用仍待；本次schema3保全社区/原账号，当前来源见下方多来源实施。共同边界取[社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)，下一步见[计划](dev-plan.md#当前最近任务)，阶段只由[Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md)定义。

2026-10-05 01:41:04（UTC+8）v2来源混榜、全量历史和五插件当时发布ecca50eab82c-09d7ffdf4bbb/schema3；后续官网改版current见[当前状态](dev-progress.md#当前状态)。网页范围见[多来源实施](dev-progress.md#多来源-ir-实施)，原实际主机/公开HTTP/备份取Backend，P/C和网页/OMS/固定宿主真人尚未闭环，旧社区浏览器证据不提升为本次交互验收。

同日玩家报告强刷后才能看到新版首页；当次门户 200 / 304 缓存校验、旧校验值返回新版与实际浏览器普通刷新通过，加入后续发布门，详见 [缓存反馈复核](../other/community-infrastructure-20261004.md#2026-10-05缓存反馈复核)。当次仅补维护检查与文档，未替换生产制品或签收真人社区、P/C；随后重设计发布另取顶部当前记录。

#### 本轮交付范围

本表保留原社区门户的交付范围与当时证据，完整玩家网站的当前公开能力与真人缺口见顶部状态；不把下方“已发布”扩展到新的谱面 / 个人统计 / 玩家榜范围。

| 玩家路径 | 本轮范围 | 当前证据边界 |
| --- | --- | --- |
| 第一次进入 | 首页真实帖子流，独立下载 / 帮助，Windows-only 与离线优先说明 | 已发布，公开空首页 / 多页 / 桌面 / 窄屏通过 |
| 参与社区 | 四类列表 / 搜索 / 作者筛选，注册登录后发帖，固定分享地址和分页回复 | 本地真实接口、持久恢复和实际浏览器闭环通过 |
| 管理自己的内容 | 帖子与回复编辑 / 删除；删帖保留他人回复并关闭新内容，删回复保留楼层 | 本地作者权限、纯文本 / 安全链接、占位页面操作通过 |
| 账号与成绩 | 与已试运行 IR 共用 cookie；账号页通往本人帖子和本人 IR | 本地跨页 / 标签和刷新 / 退出通过，公网只读原 IR 正常 |
| 公开版本 | GitHub Releases 静态下载、QQ 群号联络；Latest `oms_20260626` 与 IR 开发源码分开 | 本轮不制作 Windows 发行包 |

旧首页演奏 / 三语 / 判定素材保留归档，不进入新门户公开加载；原内容来源缺口留在 [历史记录](changelog.md#2026-10-04)，不能从“退出页面”推导客户端能力不存在或已复核。

#### 已试运行 IR

2026-10-03 `https://oms.zdamexy.work/ir/` 已发布，通过同源真实 API 支持注册、登录、退出、BMS / mania 条件组单谱榜及本人历史；凭据不放 localStorage，AT 只留本人历史，最佳分 / 灯可来自不同局。客户端独立主动连接、保存后交分和原账号补交沿 [Client Bridge 实现来源](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-client-implementation-snapshot-20261003.md)，默认地址仍空。页面为未经回放核验的试验榜，没有网页手动上传；合成接口输入不是设备成绩。

原生产、容量与恢复结果见 [Backend IR4](../../../../oms-server/oms-backend/doc_md/other/ir4-host-verification-20261003.md)。用户真实 BMS / mania 同局、断网重启、原账号恢复与客户端发行人工门保留，通过 VS Code 非调试启动当前工作区验收，不要求额外候选包。

#### 多来源 IR 实施

D01～D09 按[正式审查修订3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)采用，旧静态网页消费[多来源合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)。此处保留2026-10-07当次线上 `d1f052b93a81-22b4ee54f237` / schema3的记录；b520是当次已实测的旧回退来源，ecca等日期继续保留历史。旧完整全量、部署 / 同库往返、资源及备份只取[当次服务验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#生产发布与维护收尾)，当前真人与增长维护见[计划](dev-plan.md#当前最近任务)。

已部署页面可搜索标题/作者/MD5、按MD5直达，选择一个、多个、全部来源或清空；来源、参考/同条件、条件与页码保留在URL。服务先筛完整范围再计算最佳EX、独立灯、共享名次、人数/分页/全榜本人，不拼各来源TopN。同条件由玩家主动选择已证明的OMS组，未知或无匹配明确说明；mania条件榜和本人逐局历史保留v1。

榜行区分 OMS 新局、播放器最佳状态与历史最佳摘要，显示来源、未知条件、原身份 namespace/ID、原灯与未收录时间/最大 EX。旧 LR2IR 同名账号不合并为 OMS 本人；独立灯附来源和规则说明，不把未知灯换算成统一最好灯，不把历史摘要或外部状态称为逐局历史。

网页已实现对应来源专用密钥创建、元信息列表和撤销：秘密仅创建时显示，刷新后不能重新取得，不写 localStorage。账号切换清除上一账号本人行、历史、密钥列表及秘密；创建/撤销前重核账号，账号及读取 revision 防止晚到响应覆盖新账号/新来源范围。候选正常登录/退出/重载/换账号可见结果已有实际浏览器补核；人为迟到响应及真人宿主仍须各自证据。

root 的本地实际浏览器观察已覆盖来源筛选、并列名次、末页第1461页与范围人数、空选、本人落在第28901名而仍有全榜本人提示，以及刷新深链；此前候选证据保留原来源，后续账号/密钥及生成资产补核归下方报告。观察使用隔离数据，不是生产账号或目标播放器真实游玩，不签全部公开体验门。

OMS[产品来源](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-client-snapshot-20261004.md)绑定b7d0f74d，默认隔离/保存后交分沿`client-ir-default-isolation`/`client-ir-save-first`，旧UUID/body/归属保全。最终三Java固定SDK软件/实际网络完整榜及Open两架构编译/入口/WinHTTP完整性通过，真实宿主/非空跨DLL/玩法/UI仍待；限制取[固定事实](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-player-snapshot-20261004.md)。帮助页已发布五插件、MIT/Zlib双许可及versions.json共八生成资产，实际公开字节均核对；P/C步骤取[真人说明](../../../../oms-server/oms-backend/adapters/ACCEPTANCE.md)。

2026-10-04，Website `08ce0bd2247f` / Backend `9e10197e5c29` 候选在本机 `18086` 补核账号切换、密钥当次显示/重载/撤销、全来源榜、帮助页与当时七资产 HTTP/SHA256，具体范围见 [浏览器补核报告](../other/multisource-browser-verification-20261004.md)；当时多来源尚未部署。该旧结果不代签生产账号操作、OMS 和目标播放器真人。

最终同制品/真实全量主机/两新空恢复/源码往返及外取后补账完成后已实际部署，公开22文件SHA/HEAD/响应头、全量目录/来源筛选/历史语义、原IR/社区/双站和64KiB413通过，首份正式日备份也已在受保护F盘完整核验，见[最终发布证据](../../../../oms-server/oms-backend/doc_md/other/multisource-host-verification-20261004.md#最终-r10-与实际发布)。公开浏览器初次超时后已在同一HTTPS页实际补核匿名来源切换、首/第二/尾页、深链/同条件空范围及桌面/390px，console error为0；[实际截图与检查纠正](../../../../oms-server/oms-backend/doc_md/other/multisource-host-verification-20261004.md#正式网页实际浏览器补核)单独留证，既有隔离图保留原日期。公开账号/密钥/本人、DPI/非调试OMS与P/C全部真人仍待。当前“已部署待验收”，匿名读榜和SDK软件不代签真人。

#### 验证结论

下列保留原社区与 v1 IR 的既有验证日期、来源和当时登记数量，不适用于本轮多来源最新源码。多来源与官网改版的实际发布、软件 / 公开门和未完成真人门见上方当前状态及实施范围，原证据日期不刷新。

2026-10-04 后端有效 focused 23 / 全回归 83 通过，含社区权限、纯文本、并发幂等、原 IR 行 / 会话保全和 schema 2 一致恢复；首轮 fixture 失败与有效证据见 [Backend 社区验收](../../../../oms-server/oms-backend/doc_md/other/community-verification-20261004.md)。

本轮多页静态通过（8 页 / 199 引用 / 3 脚本），静态检查器 1 正 / 5 反例通过；实际 Edge 本地合成库通过空社区、注册共享会话、固定帖 / 刷新、分类搜索、另一账号回复 / 权限 / 编辑、纯文本安全链接、丢响应只存一帖、切账号主动重建归属、社区 / IR 并发刷新 / 退出、删除占位关闭、未知地址与旧下载锚点。实际桌面 1360×1000、手机 390×844，各手机页无整页横溢出，页面脚本错误为 0。原报告 / 脚本 / 截图位于 `F:\oms\artifacts\oms-community-20261004\portal-browser-report.json` 及同目录；`thread-mobile.png` 首次 fullpage 捕获存在粘性页眉滚动状态，原捕获限制保留；已补 `thread-mobile-top.png` 页首截图和 `public-ir-mobile-settled.png` 的 IR 自身加载检查，正文 / 顶栏及匿名登录就绪均正常，证据见 `final-screenshots-report.json`。

工作区 101 文档 / 531 链接检查通过，来源状态仍为 5 / 17 / 11 待复核。服务器真实旧 / 新 runtime 的隔离合成门通过 v1 会话 / 双玩法成绩保全、社区权限 / 运营 / 幂等及 v2 新空目录恢复；具体候选和失败阶段不混用，见 [社区进展](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-progress.md)。

2026-10-04 03:18:21（UTC+8）完成生产 schema 1→2、备份和 Nginx reload，03:25:31 切到最终 current；配置 cmp 一致无需再次 reload。03:22 新 v2 快照 128 KiB 成功，备份 timer enabled、服务 active / NRestarts=0。共享设施事实只由 other 双站镜像维护。

公网首轮暴露同文档 `#download` 不跳转，修复为 `c1b1b7a` 后三个真实锚点场景通过；首轮 `public-browser-attempt1-report.json` 保留。最终公网实际 Edge 1280×800 / 390×844 只读通过 14 个页面 / 资源逐字节 manifest、一致 TLS / CSP / 重定向参数 / 404 / API边界、旧锚点与窄屏，脚本 / 资源错误为 0，个人主页内容 hash 不变。原始最终证据为同目录 `public-browser-report.json` / `public-browser-run2.txt`；没有创建公网账号或帖子，不代签真实发帖。2026-10-03 IR 证据及旧单页原日期保留，不重复包装为本轮首轮全绿。

#### 保留事项

- 本地 / 主机隔离用户闭环和公网只读页已通过；生产首次真实发帖 / 回复由用户使用验收；顶部截图及 IR 就绪补核已完成，原初次捕获限制保留。
- 客户端真实游玩与完整发行人工门未关闭。官网发布不能把开发源码能力写入旧公开包说明。
- 便携更新 / 存储细项、判定数值的原来源不足仍保留；本轮移出公开表面，不以文档改版刷新 Client Bridge 原来源或待复核状态。

早期Website `5ac044e9d014` 本地核对：服务/网页重启后，全选29,204身份、第2/1461页仍显示本人全榜28901名；空选0身份；OMS+ED为2身份、180/175 EX，独立灯带真实规则/未知说明。本人历史仅2个OMS新局，外部最佳状态/归档未增加局数；固定宿主来源明确显示待真人验收。390×844窄屏正文无横向溢出（client/scrollWidth均375，表格在自身740宽容器内滚动），浏览器无console error；桌面与窄屏画面在F:/oms/artifacts/oms-ir-multisource-20261004/website-*.jpg。静态检查当时8页/205引用/3脚本/2样式通过，当时四插件待后续核对；后续候选五插件/七资产本地补核归[浏览器报告](../other/multisource-browser-verification-20261004.md)，当时公网待发布后验证。实际当前八资产及公开补核取本页多来源实施，旧窄屏图不代签后续全部界面、真实宿主或OMS真人。

#### 原计划

#### 2026-10-07 旧Website计划（历史）

##### 页面与原账号体验验收

沿[实际路径](../other/oms-deai-verification-20261007.md#部署维护与真人路径)接玩家普通刷新、下载来源、个人成绩、空页 / 条件榜与VS Code原账号窗口反馈。源码 / 软件与公开HTTP分别签收，视觉与真人范围未完时仍记录“已部署待验收”，不关闭P/C或制作客户端发行包。

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；本轮整体玩家网站沿 [新正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md)、[玩家API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/player-api.md)与 [谱面API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/catalog-api.md)。原社区沿 [社区计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md)，原多来源IR沿 [正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)。实际状态与证据见 [当前进展](dev-progress.md)。

##### 当次最近任务

当次页面发布为 `d1f052b93a81-e6fdf914cb04`，状态“已部署待验收”；来源 / 缓存 / 恢复取[页面复查](../other/oms-deai-verification-20261007.md)。前次整体运行门的原来源为 `d1f052b93a81-22b4ee54f237`。当次页面、公开资源 / HTTP缓存 / 双站、全量 / 1,800秒 / 两新空恢复、真实源码同库往返与备份维护门分别留证，原false保持；旧准确来源和维护取[当次服务验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#生产发布与维护收尾)。当次[真人路径与缺口](../other/oms-player-site-verification-20261005.md#内容维护真人路径与未完成项)继续保留历史，不代签现原版站的普通浏览器、下载入库、私有账号、OMS和宿主P/C。

1. 接续 r6～r8 尚未覆盖的浏览器动作：完整迟到回应竞态、错误凭据 / 私有入口与密钥边界、作者删除及跨账号写入，保留原 IR / 社区回归。首页新闻、两模式来源 / 详情、公开最佳和独立灯、榜后页 / 页外本人、退出清除本人入口，以及本地合成社区发帖 / 编辑 / 回复已完成的观察不重写为待做；实际截图仍不代签用户视觉认可或真人使用。
2. 已过全量、原生整榜、1,800秒、两新空恢复及真实资源门按新d1 / 22b原来源引用，不重复未变门。后续新输入、数据增长 / 新来源、版本或实际失败触发对应数学 / 读写重叠 / 全量 / 空恢复 / 预算核验；保持原限制，不用暖读或十万合成样本替代全量档案。
3. 维护固定d1-helper、七日日备份与每周受保护外取；新/旧HTTP往返同库回退已实测，保留当前数据 / 22表结构和源码双身份。后续按[当前维护说明](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-maintenance-20261006.md)执行；源码回退不覆盖live或使用旧整套activator，灾难恢复另在新空目录核验。
4. 生产路由、固定文章、源码与五插件全字节、旧校验值新200 / 当前空304、双站及正式备份外取已完成。继续普通浏览器刷新 / 页面点击、窄屏与视觉反馈，不由HTTP代签；实际反馈修复选择性提交推送，新运行字节才重新部署并核对应门。
5. 部署后给出 [真人路径](../other/oms-player-site-verification-20261005.md#内容维护真人路径与未完成项)：首次真实整包下载 / 入库、用户视觉认可、原 lazer 登录 / 个人页、mania 六判定、公开 / 本人页与透明指标、同谱来源 / 条件及两端一致。Sayobot 缺 MD5 时不猜 sid / bid 对应 OMS 谱面。客户端由用户从 VS Code 非调试启动当前工作区，不制作 Windows 包；先 OMS＋全量公开 LR2IR 历史＋ED 7K 先导 P，再完整固定版本 / 玩法矩阵 C，真人未完只记“已部署待验收”。
6. 当次旧静态新闻使用 `src/oms/news.ts` 的真实 slug / 日期 / 状态 / 正文及对应文章路由和清单；这项旧计划已随本仓交接退出。旧公开 release 不承诺 IR，地力设计后置、PP另议，Walkure / BMS PP 的算法与优先级仍留独立讨论；累计公开最佳、收录和通关指标不伪造能力榜。

#### 前轮已部署范围的真人反馈

实际 osu-web 前端 / 原 lazer 账号路径已部署待验收，最小身份、跨账号清除、严格源码 / 许可、全量运行 / 两空恢复、兼容回退、双站 / 缓存和新备份门已通过。接续用户非调试 OMS、网页真实同账号 / 来源对照、视觉与社区反馈，并补公网点击往返和窄屏工具缺口；准确 current 与证据只取 [本次核验](../other/osu-web-lazer-account-verification-20261005.md)。先导 P 后继续完整 C，不由软件 / 工具 / 合成输入代签，也不重复已过未变的运行门。

社区官网已发布，旧证据保留原日期。2026-10-05多来源网页/全量历史/五插件已发布schema3，公开HTTP/全部资产与双站、主机/恢复/补账和首份正式备份外取通过，当前“已部署待验收”；下一步为：

1. 公开匿名谱面查询、单/多/全/空来源、深链/同条件空范围、未知/旧身份/原灯、首/第二/尾页及桌面/390px已实际补核，初次超时保留。继续本人、密钥创建/撤销/账号切换、DPI和网页/OMS真人对照；原IR/本人历史/社区会话真人独立留证，不用匿名读榜签账号或游玩。
2. 实际运行/恢复/公开资产门已完成，具体来源取[Backend实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)。按真实反馈修改受影响页面并复验对应门，维持已发布五插件/双许可/版本来源；未改且已通过的主机/静态门不重复运行。
3. 部署后承接玩家反馈，先验收 OMS＋全量公开 LR2IR 历史＋ED 7K 的先导 P，再持续完成固定目标与玩法矩阵 C；真人未完时记录“已部署待验收”。客户端日常验收由用户通过 VS Code 非调试启动当前工作区，不制作 Windows 发行包。
4. 原社区首次真实发帖、回复和本人管理继续交用户使用验收；保留诚实空状态，不为主页观感填假帖，不把社区成功算作播放器交分通过。

#### 多来源 IR 实施

网页和 OMS 游戏内的同谱来源多选、参考混榜、主动同条件榜与 LR2IR 全量公开历史已按 [D01～D09 正式审查修订 3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)采用。Website 消费 [多来源正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)，具体服务/投影/发布状态引用 Backend，不另建全量或资源完成账。

本仓M4已部署MD5直达/目录、来源URL、未知/旧身份/独立灯和专用密钥入口；服务按完整范围重算最佳、灯、人数、排名/分页，不拼TopN。公开匿名桌面/窄屏读榜已实际补核；当前工作为网页/OMS真人一致、P/C宿主/玩法、账号/本人/密钥和DPI验收及反馈，保留独立证据，不重复已完成入口和运行门，不由社区页面签收。

#### 交付后的保留事项

- 客户端真实 BMS / mania 同局、断网重启和原账号恢复仍沿 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md)，由用户通过 VS Code 非调试启动当前工作区验收。本轮不制作 Windows 发行包。
- 截图 / 视频、后续帮助内容和公开发行说明按真实版本补充，不用网站布局或社区交互通过代替客户端事实复核。
- 附件、点赞、私信、实时聊天与在线状态继续保留原范围。批准Ginger / 616 / Sayobot的谱面元数据及浏览器原包入口已进入本轮玩家合同；OMS大包代理 / 托管、未批准新源与其他开放接口没有进入这次实施。地力与BMS PP另作专题，不能把积累榜改名为能力评级。

旧 [P1-A](../subline/P1-A/README.md) 已交接；社区与本轮多来源 IR 均由 Website mainline 承载，共同接口分别取 Dev Bridge 的社区与多来源正式合同。

## 2026-10-08（原版Web接管与旧仓交接）

正式官网已由 [OMS Web](../../../oms-web/OMS.md) 接管，旧静态仓退出当前功能开发，只保留设计、历史、原工作区差异与同库源码回退来源。当前维护和真人路径转到[原版站维护](../../../oms-web/doc_md/production-maintenance.md)，真实生产与失败取[正式收尾](../../../oms-web/doc_md/production-deployment-20261007.md#正式发布与收尾)；本地视觉认可不关闭线上真人与 P/C 门。

本次仅修订文档职责、适用时点与导航：旧 `src/oms/news.ts` 保留为历史，当前新闻维护转原版 `resources/oms/news.json`。旧 schema2、b520、3ab维护来源及旧停止catalog的操作保留原时点，原未提交页面 / 脚本和无关治理改动未覆盖；没有重标旧失败或复跑旧门。

## 2026-10-07（中文、页面层次与实际操作复查）

按用户要求反复处理当前实际加载页面与原账号入口：新闻 / 首页 / 下载 / 帮助减重复说明，统一排版；真实下载跟随所选来源、mania通过语义、条件占位、本人侧栏与失效分页修复，未知 / 原ID / 原灯 / 页外本人保全。软件与四轮审查来源见[本次核验](../other/oms-deai-verification-20261007.md)，04:25:04 CST实际发布d1 / e6，公网资源 / 缓存 / 完整对应源码及正式备份 / 两新空恢复通过，实际失败保留；不签视觉、宿主或P/C，原82dirty保全。

## 2026-10-05（整体osu-web玩家网站候选与本轮软件门）

- 按用户新方向落实固定osu-web `2c596022a1345fbed288978e7fa5304df0359f50` 的实际React搜索 / 谱面详情 / 个人与排名结构、BEM Less和统一导航，继续真实OMS账号、社区和原IR；新增Ginger / 616的原MD5 / 两源原包、Sayobot原生mania / sid / bid路径，真实未知 / 失败 / 计数 / 游标保留，网页获取不伪称自动入库。
- 公开个人页新增当前最佳 / 独立灯 / 最近公开最佳状态 / 分条件统计，玩家榜明示单来源 / 键型 / 实际规则、完整范围RANK后分页与页外本人。mania累计分精确字符串、含未通过，BMS覆盖 / 通关不叫地力；AT / 本人全UUID历史 / LR2IR旧身份维持原边界，地力 / Walkure / BMS PP后置且不自创。
- 首页新增两篇真实新闻，首页摘要 / 列表 / 文章共同读取 `src/oms/news.ts`；2026-10-05按需IR试运行与2026-06-26公开发行分状态，原oms_20260626未含IR。运行文件29 / 原始修改源码68、上游raw文件hash76项纳入对应源码 / 许可白名单；发布提交仍待根审查。
- 根串行typecheck r4 / Webpack r4通过（3.011秒），静态16页 / 524引用 / 4脚本 / 4样式通过；Backend玩家 / 原身份74、本轮批准源与旧IR / 社区 / 备份回归171、其后源码offer新白名单1分别通过。客户端mania六判定11/11与普通Desktop Release通过，新234a9ff已推送，保留BMS测试两既有警告及前端首次类型 / 新闻Less失败；证据归F盘本轮artifact，准确范围见 [新核验](../other/oms-player-site-verification-20261005.md)。
- 实际浏览器已打开新首页和谱面，完整浏览器 / 窄屏、共享主机 / worker隔离预算、两新空恢复、部署 / 公开缓存 / 双站 / 新备份及真人尚待。线上仍为前轮b520bcb99015-5d0531c22423/schema3，未以本次候选替换；旧scope软件 / 主机 / 真人记录保持原日期，新预算初值不宣称通过。部署后未完真人只记“已部署待验收”，P/C、实际包入库、视觉与原发行门保留，无Windows发行物。
- 本次文档执行者仅编辑本条、主线进展 / 计划及新核验报告，未运行git、检查、构建、测试或部署；原dirty治理文档 / AGENTS / other导航 / 删除与约束文件未触。统一文档门、选择性提交和发布由根完成后另记。

## 2026-10-05（实际 osu-web 上线待验收）

17:16:55（UTC+8）发布 `b520bcb99015-5d0531c22423` / schema3。最小个人页、原 lazer 账号链接、真实来源 / 同条件榜和对应 AGPL 源码已上线，跨标签旧操作提示已复验修复。全量主机 / 两空恢复 / 保全补账、旧 schema3 往返、公开 84/232 / 缓存 38/110、新备份外取通过；准确运行提交、原失败和浏览器限制仅取[此次核验](../other/osu-web-lazer-account-verification-20261005.md)。原候选 / OpenDesign与旧390px结果保留各自日期，当前普通刷新 / 公网点击 / 窄屏、视觉、两端与宿主 P/C 真人未签收。

## 2026-10-05（实际 osu-web 复用与原账号页候选）

- 按用户改选实际 upstream `2c596022…` 的 Blade / Less，在静态页面复用 nav2 / header-v4 / user-home / forum-topic-entry / download-page / profile-info；继续 OMS 真实帖子与 FastAPI / SQLite，不引入整个 ppy 服务、品牌、美术或字体。十页共用导航，新增最小同账号个人页、作者 / OMS 榜单入口和源码许可页，LR2 旧身份保持文本及独立 ID。
- 静态十页 / 311 引用通过，本地真实浏览器完成登录、发帖 / 回复 / 固定地址 / 作者页与桌面 / 手机布局检查。客户端原账号与本人页软件门 64/64、普通 Desktop 编译通过；实际源码下载、全量共享主机、恢复、新包部署与真人仍待后续门。来源、权限、初次失败及原工作保全只取 [本次核验](../other/osu-web-lazer-account-verification-20261005.md)，不刷新早先 OpenDesign 与 P/C 签收。

## 2026-10-05（官网改版实际上线，真人视觉仍待）

- 12:02:06（UTC+8）严格发布 ecca50eab82c-d34fab9b9611 / schema3，Website d34fab9 已推送；33 服务文件、8 生成资产和公开投影保持实际原来源 / 字节。一致备份、激活 / 健康、55 manifest 文件、公开 GET / HEAD 及缓存维护门通过，Nginx 配置未变。
- 实际公开普通刷新 / 下载往返与手机首页 / 全来源榜补核；手机表格自身横滚且整页无溢出。错误 comparable 期望、猜错 API 路径、current 链接进程断言与首次浏览器超时均保留，纠正检查后的证据另存；未为探针改产品。实际来源、盘账、备份和恢复方法见 [官网验收](../other/website-redesign-verification-20261005.md)。当前“已部署待验收”，视觉、生产真人社区与 P/C 未签。

## 2026-10-05（八页重设计移植与实际浏览器回归）

- OpenDesign 备用 Astra / medium 自然完成，完整取得 41 文件；根只移植现有 14 运行文件，去掉编辑元数据，保全脚本业务行为及本人定位。门户 / IR 全局样式归一，首页采用真实帖子流，中文改为具体动作，公开包与试运行限制保持准确。
- 补既有 zlib 许可链接；帮助目录手机前置，IR DOM 与手机阅读顺序一致。实际 API 在两个本地账号完成发帖 / 回复 / 编辑 / 删除占位、权限与账号清除，来源全量 / 同条件 / 首中末页 / 深链和桌面 / 390px观察。首次整页横溢出、五位名次分行和中间加载采样分别修复 / 重验，未改写初次证据。
- 缓存检查支持相对资源引用，仍要求已部署字节相符。本记录为源码与本地门，部署后另记实际来源 / 缓存；真实视觉、社区使用和 P/C 未签收，见 [实际报告](../other/website-redesign-verification-20261005.md)。

## 2026-10-05（需求确认、备用设计生成与浏览器恢复）

- 用户确认多页产品官网及精致科技风格。首选 Local Codex 实际返回模型不受当前 ChatGPT 账号支持，零产物；同委托切换模型的首次备用调用被绑定冲突拒绝，零新运行，原错误均保留。随后为已授权的备用生成建立独立委托，复用同一个 F 盘设计项目，不重问需求；Astra 实际运行，项目独立配置查询确认 medium，全局默认未改。
- 宿主浏览器的文档化标签 API 恢复实际截图与工作台查看，原状态绑定超时保留。真实 API 隔离预览与公开投影只读已准备；核对当前生产的 Backend ecca 来源后，在 F 盘 detached 运行时副本重验 33 个服务文件、8 个既有插件/许可/版本文件，字节均与实际 current 包相同。Website / Backend 在线跟踪均 0/0，旧未提交工作保全；此时尚未移植或发布设计，后续实际结果取 [当前状态](dev-progress.md#当前状态)。

## 2026-10-05（OpenDesign 重启恢复与 F 盘设计准备）

- 用户先后重启工具后，同一新需求流程的需求卡与模型发现恢复。Local Codex 已登录，现有 CLI 配置为用户首选 `gpt-6.1-sol` / `max`；尚未实际启动模型。需求卡缺少可操作的宿主表单，按原三个问题转为文字选择，保持同一草稿，等待需求确认。
- 为本次设计建立 F 盘独立八页副本与旧站参考，仅新项目目录联接指向 F 盘，入口指纹一致；未修改全局工具注册或迁移其他用户数据。原十六项未提交工作指纹不变，Website / Backend fetch 后各 0/0；重启后浏览器预览创建和已有标签绑定仍超时，未产生实际截图。源码与生产制品未改，具体准备和证据见 [当前状态](dev-progress.md#当前状态)。

## 2026-10-05（视觉与文风拒签，重设计待工具恢复）

- 玩家明确反馈当前门户质量低于旧站、模板感重、IR 与门户不一致，重开整体视觉验收并同步 [执行计划](dev-plan.md#当前最近任务) 和约束；此前功能通过保留原范围，没有把它改写成视觉认可。
- 按用户选择尝试 OpenDesign / Local Codex，首次简报与独立连接检查均为 `Transport closed`。没有收到确认卡、工作流或 run，没有模型生成或设计交付；安装版本 0.24.1 / 注册启用的只读核对没有修复当前已关闭连接。原站本地视觉对照亦遇到浏览器控制超时，未签实际截图。未改工具注册、用户数据、门户运行源码或生产制品；F 盘保全基线与 scoped brief 见 [当前进展](dev-progress.md#当前状态)，等待工具恢复或后续明确选择。

## 2026-10-05（首页缓存反馈复核）

- 玩家确认 Ctrl+F5 后出现新版首页；原缓存已被替换，具体旧响应策略没有取证，不把旧缓存推断写成已证明的故障源。当前正式门户六页与四资源的正文 / 200 / 304 / 旧校验值复核及实际普通刷新通过，IR 与个人站只读回归通过。
- 增加 [公网缓存检查](../../scripts/verify-public-cache.mjs) 与 [发布验证方法](verification.md#发布后的缓存复核)，共享设施证据同步双站镜像。未改生产配置、运行源码、数据库或客户端发行物；实际来源与证据取 [缓存记录](../other/community-infrastructure-20261004.md#2026-10-05缓存反馈复核)，社区真实使用与 IR P/C 仍待验收。

## 2026-10-05（多来源和全量历史已部署待验收）

- Website实际09d7ffdf4bbb与Backend ecca/schema3已发布，全量历史/来源筛选、五插件/双许可/版本清单可按需访问；22公开文件字节、目录/来源查询、原IR/社区/双站及413通过。实际运行/恢复/补账、生产保全和首份正式备份外取只取[Backend最终证据](../../../../oms-server/oms-backend/doc_md/other/multisource-host-verification-20261004.md#最终-r10-与实际发布)，共享include来源同步两个站点other镜像，未发布Homepage源码。
- 公开浏览器初次超时保留，同一HTTPS页随后实际匿名来源切换、首/第二/尾页、深链/同条件空范围和桌面/390px通过，截图及两条检查断言纠正留证，console error为0。当前“已部署待验收”，继续P/C真人、网页/OMS一致、本人/账号/密钥/DPI与反馈；不以读榜成功代签宿主/真人，不提升旧公开Windows包。

## 2026-10-04（五插件候选交付说明）

- 帮助页加入固定OpenLR2两架构DLL及nlohmann/json许可通知路径，补实际“播放器专用密钥”、配置目录、架构匹配和重启步骤；Java SDK send/read与Open软件入口通过的范围明确，真实宿主/玩法与未知BP、并列界面限制仍待。
- 生成资产仅开放五插件、许可及versions七条严格路径，静态8页/208引用通过；部署字节与P/C真人路径沿[当前进展](dev-progress.md#多来源-ir-实施)，尚未改变生产，不提升旧公开客户端包。
- Website `08ce0bd2247f` / Backend `9e10197e5c29` 本机候选的账号、专用密钥、全来源榜、帮助与七资产补核归 [浏览器报告](../other/multisource-browser-verification-20261004.md)，既有筛选/深链/窄屏证据保留原范围，多来源未部署且生产、OMS/播放器真人门未关闭。

## 2026-10-04（多来源 IR 候选实施同步）

- D01～D09 已按修订 3 采用，网页计划从待审查转为 [多来源实施](dev-plan.md#多来源-ir-实施)，共同语义只引用 [正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)与 [Backend 实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)。
- 候选页面已实现 MD5 直达/目录、单/多/全/空来源、服务完整范围最佳/独立灯/人数/排名/分页/本人、主动同条件及刷新深链；未知条件、旧 ID、原灯与三种记录粒度如实显示。专用密钥创建仅当次显示、元信息/撤销、账号清空与 revision 边界纳入约束。
- 本地实际浏览器初步观察覆盖筛选、并列、末页第1461页、空选、本人第28901名及刷新深链；最终新版浏览器 QA/报告仍待 root，不写成全部门通过。OMS 本轮来源绑定已推送 b7d0f74d，三 Java 固定 SDK 编译仅软件；Open v143 组件、真实宿主/玩法、共享主机预算、恢复、部署与 P/C 真人闭环均保留未完成项。
- 本次只同步四份 Website mainline 文档，未运行检查或发布；当前生产仍 `f1f8286640c7-c1b1b7a5da7a`/schema 2。旧社区、旧客户端来源及以下历史提案记录保留原日期/结论，不因本轮源码或文档同步提升。

## 2026-10-04（多来源 IR 文档一致性同步）

- 补齐[待审查网页投影](dev-plan.md#多来源-ir-实施)：来源多选/参考混榜/全量历史尚未实现，正式审查后才消费已采用查询。退出已完成的社区生产/备份/截图/提交待办，保留用户真实使用与客户端门。
- 开工基线 `8e76d6a` 从当前状态退出，实际生产来源保持社区发布记录；不改旧 Website assets 或新门户代码、不部署、不刷新公开包/浏览器/客户端证据。专项文档检查与健康结论沿 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-progress.md#文档治理验证)。

## 2026-10-04（最终维护与截图补核）

- 最终补核已从页首查看帖子顶栏与正文，等待 IR 自身加载后匿名登录可用；03:35 schema 2 日备份再成功，并外取受限 F 盘快照且 SHA256 一致。原截图采样限制、首轮失败和真人门保留，完整共享路径及备份元信息见 Website / Homepage 的 [社区发布记录](../other/community-infrastructure-20261004.md)。

## 2026-10-04

### 社区官网正式上线与公开浏览器收尾

- 03:18:21（UTC+8）完成一致备份、生产 schema 1→2 与 Nginx 备份 / 检查 / reload；03:25:31 切到 final current `f1f8286640c7-c1b1b7a5da7a`，配置 cmp 一致无需再次 reload。Backend `f1f8286` / Website `c1b1b7a` 已发布，03:22 的 v2 128 KiB 一致备份成功、timer enabled、服务 active / NRestarts=0。
- 真实旧 / 新 runtime 与 loopback Nginx 的服务器合成门通过原浏览器 / desktop 会话、BMS / mania 两局保全，社区权限 / 运营 / 幂等及新空目录 v2 一致恢复；stage-a lua 路径与 stage-b 探针 Origin 失败独立保留，最终有效报告为 `server-stage-c-report.json` / `server-stage-c.txt`，不宣称初次全绿或读取真人生产内容。
- 公网首轮发现同文档下载 hash 没有被监听；`c1b1b7a` 修复后初始下载、同文档下载和旧判定转帮助三场景独立回归通过。保留 `public-browser-attempt1-report.json`，最终 `public-browser-report.json` / `public-browser-run2.txt` 只证明修复版本。
- 最终公网实际 Edge 1280×800 / 390×844 只读通过 14 个页面 / 资源逐字节 manifest、TLS / CSP / 重定向参数 / 404 / API、旧锚点、移动布局与脚本 / 资源，个人主页 hash 未变。公开帖子 0，没有创建公网账号或假帖子；写闭环证据来自本地 / 主机隔离门，真人社区使用和客户端成绩交用户验收。
- 方法已明确为 Nginx 门户静态 / 固定阅读器与 Backend API 同源。Backend 本身只直挂 `ir/`，本地完整页面采用保留的 `preview-server.py` 合成库探针，不把额外挂载工具包装成产品能力。共享运维镜像由 root 维护。

### 社区帖官网开工

- 用户确认首页向社区帖发展，不采用官方新闻栏目。建立 [共同社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md) 与真实用户闭环：首页 / 分类 / 搜索 / 固定帖地址、注册登录、发帖回复和本人编辑删除；复用 IR cookie，正文为纯文本，运营 CLI 可隐藏恶意帖。
- 独立下载 / 帮助与统一导航一起实施；公开 Latest `oms_20260626` 与 IR 开发源码分开，官网 / 服务发布不生成 Windows 发行包。旧首页 diff 与演奏 / 三语 / 判定源码保全，新公开页面不加载第三方谱面演示。
- 本记录仅说明采用与开工，新页面浏览器、持久保存 / 恢复和生产发布尚待本轮证据，不借用旧单页或原 IR 通过结果签收。

### 同日软件验证与账号草稿边界

- Backend 有效 focused 23 / 全回归 83 通过，含社区作者权限、纯文本、原会话 / 成绩保全和 v2 一致恢复，详见 [软件报告](../../../../oms-server/oms-backend/doc_md/other/community-verification-20261004.md)。此为接口与存储软件门，页面浏览器、窄屏和生产状态独立保留。
- 发布未获成功响应时保留原文字 / UUID / 账号；切换后新增玩家主动“用当前账号发布”动作才重建 UUID / 归属，提醒核对旧账号发布结果，不要求改一字才能重试。帮助隐私文案区分本人删帖 / 回复与需核实的账号 / IR 删除，平台说明只写 Windows。

### 同日本地实际 Edge 与多页门

- 隔离合成库的实际 Edge 通过空首页、注册共享账号、固定帖 / 重载、纯文本安全链接、另一账号回复 / 权限 / 编辑、真实列表 / 分类 / 搜索、丢响应只生成一帖、切账号主动重建归属、社区 / IR 过期并发刷新 / 退出、作者删除占位关闭、未知地址与旧下载锚点。桌面实际 1360×1000、手机 390×844，各手机页无整页横溢出、脚本错误为 0，报告为 `F:\oms\artifacts\oms-community-20261004\portal-browser-report.json`。
- 首次帖子 fullpage 窄屏截图存在粘性页眉捕获滚动状态，作为初次证据保留，待补顶部核对，不宣称截图完整无瑕。
- 多页静态（8 页 / 199 引用 / 3 脚本）、检查器 1 正 / 5 反例、工作区 101 文档 / 531 链接通过；生产与公开 1280×800 / 390×844 浏览器仍待验收。Backend 已提交推送 `f1f8286`，Website 本轮来源待统一提交，原治理 diff 独立保全。

### 被新门户替代的单页审查事实

- 原 2026-09-09 工作区为 Cabinet Mode 单页，`#capabilities` / `#timing` / `#download` / `#phases` 导航，82×3 正文词条与四档强调色；演奏使用第三方 **告白/告別 (BMS edit.) [Lost]** 音符位置数据，7+1K、BPM 161、452 拍 / 1629 音符、时长 2:48，静音自动分数 / Gauge 动效并非真实成绩。
- 判定表含 IIDX / LR2 / RAJA / OD 共 16 个组合；交互通过不证明具体数值与当前客户端一致。便携文案的覆盖更新、包内储存及“无磁盘污染”只有概括来源，细项仍缺依据；旧客户端能力来源不能因整理而刷新。
- 原工作区没有可见 Windows-only，仍有“BULLETIN 内部稿”、占位构建号 `0.1.0-DEV`、访客 UTC 日期和 2:28 / 2:48 初始长度差异，公开阶段子编号未统一；旧样式有失效消费者。上述是当时审查记录，不是新门户当前缺陷，也不说明客户端不存在这些能力。
- 当轮没有真实客户端截图 / 视频 / 音频、详细安装说明或 FAQ；GitHub / QQ 为静态跳转，不调用 GitHub API / Backend。原源码及既有验证日期保留，不将归档消费者当作新版已发布能力。

## 2026-10-03

### IR 公网试运行交付

- 独立 `ir/` 已按用户授权部署，Backend / Website 来源、双站结果、共享配置与首次一致备份见 [基础设施记录](../other/ir-infrastructure-20261003.md)。C# 原样合成导出的同局、榜与本人历史以及网页会话边界通过；公网浏览器控制连接超时，最终页面操作仍待用户验收。
- 客户端完整候选与四次隔离启动已有证据，真实 BMS / mania 游玩、断网重启与同局核对保留。原静态首页未提交源码与其旧公开版本独立保全。

### 同日本地验收

- 新增独立 `ir/` 本地试验页，真实 API 完成注册 / 登录、分组榜、成绩详情和本人历史；最佳分 / 灯来源分开，AT 私有，客户端自报标签明确。统一 Phase 3 投影转为开发中，生产未发布。
- 实际浏览器完成两标签刷新 / 退出、中断恢复及桌面 / 手机布局；修复新历史条件组链接与窄屏阅读器标签溢出。证据及合成数据限制见 [IR1 报告](../../../../oms-server/oms-backend/doc_md/other/ir1-local-verification-20261003.md)；原首页未提交工作保全，未重复宣称原演奏 / 三语验收。

## 2026-09-09（文档减负）

- 入口只保留导航，主线进展集中当前实现、缺口和有日期的验证摘要；重复完成清单与历史验收移至本日志，计划只列下一步和后续执行投影，通用协作规则不再在每份文档尾部复制。
- 已交接的 P1-A 合并为 README 与历史日志，取消独立状态、计划和约束副本；保留“结构/交互交接不等于正式验收完成”的边界。
- 本次只调整文档，保留客户端来源定位和全部审查缺口，不改业务代码、脚本、统一阶段或生产版本，也不重跑网站验收矩阵。

## 2026-09-09（交互实现验证）

- 静态入口在清理过程中曾捕获缺失词条，修复后通过；后续同日进度审查重跑仍通过。
- 本地 `127.0.0.1:8093`、隔离 headless Edge，1280×800 / 390×844 两视口下三语均无横向溢出；截图人工检查页面布局。
- 语言切换/刷新持久化、非法与禁止存储、暂停后滚出/滚入、模拟页面隐藏/显示事件、恢复播放、Hi-Speed 与强调色控制、16 个判定组合、两枚下载入口及减少动画偏好均通过；页面脚本错误和本地资源失败为 0。
- 语言切换与重载期间存在 Google 外部字体 `ERR_ABORTED`，不代表全网络无错误；真实浏览器标签切换尚未按验收步骤实际操作。此为交互实现任务的证据，后续纯文档任务仅复用。

## 2026-09-09（实际进度与文档记忆审查）

- 以当前 HEAD 加既有未提交工作核对单页 HTML、全部 assets、验证脚本及本地解析器；新增按模块的实际实现清单，区分静音动效、客户端宣传事实、真实 Web 服务与正式交付。
- 修正“Windows-only 已在页面落地”“便携细项均为已确认事实”“未来入口已预留”等高估；明确页面可见平台说明缺失、便携承诺/判定数值来源不足、内部稿与版本/日期占位、未定义路线图子编号和失效 CSS 等未闭环项。
- 将初版官网计划从重复搭建已实现页面收束为可执行的内容、来源和样式收口；P1-A 交接仅代表结构与交互成果完成，正式验收状态仍由主线及统一路线决定。
- README 明确本地 `parse-bms.cjs` 被 Git 忽略、不随克隆或生产分发；验证文档补充脚本覆盖范围及客户端事实/判定数值不在静态通过证明范围内。
- 本轮只同步文档，重跑静态验收与差异空白检查；浏览器记录明确复用同日上轮证据，没有重演全部交互或刷新客户端 HEAD，未提交、推送或部署。

## 2026-09-09

- 新增 `node scripts/verify.mjs`，以 Node 内置模块检查本地引用、脚本语法、三语词条、页面控件契约及演示谱面数据；新增浏览器验收步骤，入口接入项目 README 与 mainline。
- 当前文档移除重复的阶段状态表和待做清单，阶段定义只引用 Dev Bridge，Website 保留执行投影；按职责更新受影响文档，历史不改写为当前状态。
- `site.js` 删除已无页面消费者的统计与密度渲染、缺译文兜底、必需 DOM 静默返回、假 BPM / 高度和无需求的旧浏览器分支。外部存储不可用与非法存储语言的处理仍限于浏览器边界。
- 合并用户播放选择、视口与页面可见性的控制，修复暂停后滚回演奏区或收到可见性事件会擅自恢复的问题；系统减少动画时显示暂停并禁用动画控件。
- 清理 i18n 中 77 个已删除 UI 的词条，保留 82 个当前词条；保留前序 Hero 文案修正。游戏社区状态对齐统一路线的“计划中”；外部谱库三语删除来源未支持的“无额外储存占用”承诺，未将本轮文案复核写成客户端 HEAD 复核。
- 默认发行约束引用 Client Bridge 的稳定事实 ID；资源缓存版本推进至 `20260909-1`。静态检查与本地 headless Edge 浏览器验收通过，具体范围和外部字体限制归档在[当日验证记录](#2026-09-09交互实现验证)。

## 2026-08-09（收尾文档审查）

- 建立统一权威链：产品阶段以 Dev Bridge `mainline/dev-plan.md` 为唯一权威，Website `dev-plan.md` 只保留执行投影；客户端事实与跨边界结论分别经 Client Bridge、Dev Bridge 回写。
- 同步更新仓库 README：将“当前阶段”改为“当前站点”，直接链接统一阶段权威与 OMS Server 工作区，避免单项目入口另立阶段来源。
- 收束 mainline 当前状态：移除已废弃旧五阶段、旧多页面、`download.js` / GitHub API 与“尚无视觉稿”等过期现状；历史实现过程继续保留在 changelog。
- 将 `P1-A` 明确为旧模型遗留编号并映射 Phase 2 初版官网；支线当前文档改为已完成成果的维护与追溯入口，新支线改用描述性目录名。
- 为 Homepage / OMS Website 的共享基础设施文档补充双向索引。
- 修正 Hero 三语阶段口径：现代 mod 仍为开发中；OMS-IR 与谱面社区改为后续规划，消除与 Phase 3 / 4“计划中”路线图卡片的公开矛盾；资源版本更新为 `v=20260809-1` 以避免旧 i18n 缓存覆盖新口径。

## 2026-08-09

- OMS 官网仓库从 `F:\oms-server\oms-frontend` 迁入 `F:\zdamexy.work\oms-website`，完整保留独立 `.git`、历史与 `origin` / `deploy` 远端。
- 随后网站工作区整体并入 `F:\zdamexy-workspace\websites`，仓库最终路径为 `F:\zdamexy-workspace\websites\oms-website`；Git HEAD、历史与远端继续保持不变。
- `AGENTS.md` 收束为项目介绍与 `doc_md` 导航；产品阶段权威入口移至 `doc_md/mainline/dev-plan.md`，部署和共享服务器约束下沉至 `doc_md/other/`。
- 将原工作区根的 `parse-bms.cjs` 迁入本仓库根并由 `.gitignore` 排除，保持其为本地开发工具、不进入生产 checkout。
- 修正迁移后的 OMS 后端、接口契约与客户端事实快照路径。
- 迁移后执行静态资源、JavaScript 语法与桌面 / 移动端浏览器复验，资源、布局、交互入口和控制台检查均通过。
- 明确项目根 `AGENTS.md + doc_md` 是单项目直接打开时的自包含入口；任务扩展为跨项目协作时改从 `F:\zdamexy-workspace` 打开。
- Dev Bridge 与 Client Bridge 的文档入口统一迁入各自 `doc_md/`；本仓库同步更新接口契约、统一产品阶段与客户端事实快照索引，业务结论未改变。

### 当日验证（由进展归档）

- `index.html` 的 7 个本地 `src` / `href` 引用均可解析；3 个站点脚本与本地 `parse-bms.cjs` 通过 `node --check`。1280×800 / 390×844 预览无横向溢出，主标题、playfield、2 个判定选择器、2 个下载入口与 BPM 161 动态进度正常，控制台无 warning / error。
- 项目可从自身 `AGENTS.md + doc_md` 自包含启动；跨项目任务可由 `F:\zdamexy-workspace` 总入口路由。
- 统一阶段权威、旧模型移除及 Hero 公开状态复核见同日收尾文档审查记录。
- 当时的工作区回归为 95 个 Markdown 可达、308 个相对链接无失效、17 项语义断言通过；LF、BOM、尾随空白与 H1 检查无异常。这些数字只代表当日版本。

## 2026-08-03

- 将 `AGENTS.md` 升级为本仓库唯一持久协作入口，等值迁入原有仓库结构、部署说明、当前状态、关键硬约束与同步纪律，并移除旧的平行入口文件
- 将 README、mainline 五大文档及跨仓库权威路径统一改为根 `AGENTS.md` §2，消除删除旧入口后的断链

## 2026-07-30

- 新增 Codex `AGENTS.md` 协作入口，明确纯静态技术边界、公开口径、文档联动和生产部署授权要求
- 新增 `.gitattributes`，统一文本为 LF，并显式标记字体、图片、压缩包等二进制资源

## 2026-06-02

- 首页演奏区演示谱面更换：由 Stargazer [SAETHER]（Lime / obj saaa，BPM 87）换为 **告白/告別 (BMS edit.) [Lost]**（曲 Greetea feat.ninnikuu，obj. MiyakoMeow，BG rapha & Liuyanzhi，BPM 161；来源 beatoraja Satellite sl1 `[hongun]khkb/_7_lost.bme`，7key）；用 `parse-bms.cjs` 离线解析为仅含音符位置的紧凑数据，新文件 `assets/scripts/chart-lost.js`（标题为日文，解析器 latin1 读取后手工修正回 `告白/告別 (BMS edit.)`），删除旧 `chart-stargazer.js`
- index.html：`<script>` 引用改为 `chart-lost.js`；playfield slate 曲名/难度/署名更新为「告白/告別 (BMS edit.) · [Lost] · Greetea feat.ninnikuu / obj. MiyakoMeow」（BPM/进度/长度仍由 `site.js` 按 `window.OMS_CHART` 动态计算，实测 BPM 161、长度 2:48、1629 音符）
- 经本地静态服务器 + preview 实测：reload 后谱面正常下落、HUD（EX-SCORE/COMBO/GROOVE GAUGE）实时累计、控制台无报错
- 版权待确认项随之更新：演示谱面仍为第三方作品（告白/告別 [Lost]），正式发布前同样需替换为自制/授权谱面或仅留 CSS 占位
- 同日二次调整（均经 preview 实测）：
  - 修复长条（LN）视觉：原渲染在「头」过判定线即整段删除（`progress < -0.06`），长条只闪一下巨块就消失。改为按 head→tail 画成「保持条」——头到判定线时钉在底部、条体随尾下落从底部收缩，尾过线（`tailProg < -0.06`）才清除并记 combo；保持期间对应 deck 键位常亮。`site.js` 渲染循环重写，移除不再使用的 `pxPerBeat`
  - 基准下落速度调慢 30%：`VISIBLE_BEATS` 初值与 `HS_BASE` 由 0.78 → 1.114（≈ 0.78 / 0.7），Hi-Speed 5 档倍率仍以此为 ×1.0 基准
  - slate 署名：因不安排音乐播放，由「Greetea feat.ninnikuu / obj. MiyakoMeow」改为只显示谱师 **obj. MiyakoMeow**
  - slate 曲名「告白/告別 (BMS edit.)」加外链跳转到 YouTube `https://www.youtube.com/watch?v=0ptk5HM1g8E`（新增 `.slate__title-link` 样式：虚线下边框 + hover/focus 信号色，`target=_blank` `rel=noopener`）
- 下载区（sec04）标题由街机风「投币启动 / Insert cabinet / コイン投入」改为下载语义「即刻下载 / Download now / 今すぐダウンロード」（`i18n.js` `sec04.title` 三语 + index.html 静态兜底，保留 `<em>` 强调结构）
- 特性卡 cap.03（Gauge · 点灯记录）的 lamp 清单上色：AC/EC/NC/HC/EXHC/FC 各 lamp 拆为带类 chip（`i18n.js` `cap.03.body` 三语 + index.html 静态兜底，lamp 缩写不翻译只随语言换后缀），新增 `.cap__body .lamp--*` 样式——AC 紫(#b07bff) · EC 绿(#3ddc84) · NC 蓝(#4d84ff) · HC 高亮白(白+双层辉光，突出) · EXHC 金(#ffcf4d+辉光) · FC 流动彩虹（gradient `background-clip:text` + `lampRainbow` 3s 动画，`prefers-reduced-motion` 下停动）
- 特性清单新增一条 cap.06「外部谱库」（DIRECTORY INDEX · MANIA/BMS，绿灯·已实现），插在 cap.05「便携安装」与原「游戏社区」之间，原游戏社区顺延为 cap.07（i18n 键 cap.06.* 新增、原 cap.06.* 重命名为 cap.07.*，index.html 同步加行并改编号 06→07）；文案：直接选定本地目录索引谱面（含 mania / BMS），无需为 OMS 单独准备谱库——为客户端作者新声明的事实，已同步记入 `F:\zdamexy-workspace\oms-server\oms_client_bridge_md`
- cap.06「外部谱库」文案补「无额外储存占用」（三语：zh 无额外储存占用 / en no extra storage footprint / ja 追加のストレージ使用なし）
- 路线图区（sec05）标题由「五个阶段 / Five phases / 五つの段階」改为「开发阶段 / Development phases / 開発段階」（正文「分五段推进」未动，仍准确）
- cap.01「双模式」正文改写（三语）：由「保留 mania 游玩体验，与 bms 组成双 mode 特性」改为「保留 mania 模式，与 bms 模式结合游玩，不用再切客户端啦」（en/ja 同步加「no more switching clients / もうクライアントを切り替えなくていい」）
- 资源版本 `v=20260602-8`（两页全部资源引用同步破缓存）
- **站点收敛为单页**：把 download.html 的下载功能整体并入首页 `#download` 段，删除 download.html（站点由两页变单页）：
  - index.html `#download` 段在原静态信息面板（版本/平台/包格式/更新器/在线/时间戳）下方新增 release manifest 三态区（loading / has-release 列 assets+notes+★主包直链 / no-release 退回 GitHub）与 4 步安装步骤，均复用既有 `dlp.*` i18n 与 `.rel`/`.install` 样式；index.html 加载 `download.js`
  - 导航与页脚「下载」由 `download.html` 改为锚点 `#download`；移除 dl__head 里指向 download.html 的 ghost 按钮（真正下载 CTA 由 manifest 的 `data-rel-primary` 承担）
  - sec04.lede 三语改为「发行包从 GitHub Releases 实时拉取，下载/解压/运行全在这一页」；安装步骤 eyebrow `dlp.ins.no` 去掉「05 ·」（避免与路线图 05 冲突），改为「运行 / RUN IT / 起動」
  - 下载契约不变：仍直连 GitHub releases、不经 Web 后端（与 `dev_bridge_md/` 结论一致），仅入口位置由独立页改为首页段落
  - preview 实测：download.js 在首页跑通（本机限流时正确退回 no-release + `ERR · http_403`），安装步骤 4 步、导航锚点 `#download`、无横向溢出、控制台无报错
- 页眉/页脚导航按页面实际滚动顺序重排：首页 → 特性(#capabilities) → 判定(#timing) → 下载(#download) → 规划(#phases)，`data-n` 编号同步改为 01–05（此前「下载」停在 02 是独立页时代遗留，下载并入首页后移到 04）
- 删除下载块静态信息面板 `dl__meta`（版本/平台/包格式/更新器/在线/时间戳）与两栏 `dl__grid` 包裹，`dl__head`（标题+lede+PORTABLE 软标）改为独立全宽，其下保留 release manifest 三态 + 安装步骤；`dl.*` i18n 键随之闲置（保留无害）
- sec04.lede 文案去 AI 味重写（三语）：旧「发行包从 GitHub Releases 实时拉取，下载、解压、运行——全在这一页」与下方安装步骤重复且带空话，改为克制版「发行包都在 GitHub Releases，下面同步最新一版。公开下载将在 Phase 1 收尾开放。」
- sec04.lede 再简化（三语）→「可自行选择下方下载方式。」（en: Pick a download option below. / ja: 下のダウンロード方法から選べる。）
- 下载区新增一个下载/加入方式：**QQ 群 · 650530995** 一键加群按钮（多平台官方分享链接 `qun.qq.com/universal-share/share`，群主提供，`busi_data` 解出群号 650530995，公开邀请链非密钥）；按钮同时加入「有发行版」`rel__cta` 与「无发行版」`rel__none-cta` 两态，保证任一状态都可见；新增 i18n 键 `dlp.cta.qq`（QQ 群 · 650530995 / QQ GROUP · / QQ グループ ·）
- 下载区精简 + 下载方式按钮重设计：
  - 删除 dl__head 的 `dl__lede`（「可自行选择下方下载方式。」）与「PORTABLE · 即将开放」软标（仅下载块那个；hero 区同名软标保留）；下载块只留 04 · 下载 / 即刻下载 标题
  - 删除无发行版态（rel__none）的 `NO PUBLIC RELEASE FILED YET` 状态行 + `还在备料` 标题 + 「公开下载入口…」lede，无发行版态现在只剩下载方式按钮
  - GitHub / QQ 群两个跳转按钮由原 `.btn` 重设计为成对 **method tile**（`.dl-methods`/`.dl-method`：图标 SVG + 名称 + 副标 + 箭头，左侧 hover 信号色条、上浮、focus 环；GitHub octocat mark + QQ 聊天气泡图标；两列等宽、≤640 单列）；有发行版态保留 `data-rel-primary` 主下载按钮在上、tiles 在下，无发行版态仅 tiles
  - `data-rel-github` / `data-rel-github-fallback` 仍在 tile 上（download.js 行为不变，null-safe 通过）；新增 i18n `dlp.m.gh`/`dlp.m.qqh`/`dlp.m.qq`；`dlp.none.*`、`dlp.cta.qq/github` 等键随之闲置（保留无害）
  - preview 实测：lede/软标/无发行版文案均移除，两态各 2 tile、当前无发行版态显示 GitHub+QQ tile、href 正确、SVG 图标在、无横向溢出、控制台无报错
- **删除 GitHub 自动拉取**：移除 `download.js`（文件删除 + index.html 脚本引用删除）与整套 `.rel` 三态（loading / 有发行版 tag+meta+primary+assets+notes / 无发行版）；下载方式改为两枚**常驻静态** `.dl-method` tile（GitHub Releases 跳转 + QQ 群一键加群跳转），不再调用 GitHub API；安装步骤①文案由「在上面 ASSETS 列表挑 ★ 主包」改为「点上面 GitHub Releases 进去下最新发行包（.zip）」（三语）；`dlp.fetching`/`dlp.k.*`/`dlp.none.*`/`dlp.cta.*` 等键随之闲置（保留无害）
- 首页 hero CTA：软标「PORTABLE · 即将开放」（`cta.win_soon`）替换为主按钮「即刻下载 ↓」（`cta.download`，新增 i18n 三语），`href="#download"` 平滑跳到下载区；`cta.win_soon` 键闲置（保留无害）
- 删除「解压开玩」安装步骤板块（`section.install` 整段 + 4 步）；`dlp.ins.*` 键随之闲置
- 路线图（sec05）：删除 `sec05.lede`（「OMS 网站分五段推进…逐段开放」整段，`section__lede` 元素移除，i18n 键闲置）；5 条 phase.N.body 全部去 AI 味 + 去内部引用重写（三语）——尤其 P2 原文「前后端联调…写在工作区的桥文档里」属内部文档引用、不应对外，已删；各条改为简短、面向访客的「这一阶段给用户什么」
- **路线图整体重定义**（按用户指示）：5 阶段 name/sub/body 全部重写（三语）+ 状态调整——
  - P1「底层加固」(RULESET · ENGINE)：完善 BMS ruleset、mod、游玩体验、皮肤系统、性能优化等 · **开发中**（`phase.status.current` 文案由「当前/CURRENT」改为「开发中/IN DEV/開発中」）
  - P2「初版官网」(STATIC SITE)：无登录的 OMS 官网 · 计划中
  - P3「OMS-IR」(LOGIN · SCORE · RANK)：注册账号，客户端内登录/传分/排行（也许支持 LR2/RAJA 本地存档分数上传）· 计划中
  - P4「社区官网」(COMMUNITY HUB)：像 osu!(official) 那样的中心化社区官网 · 计划中
  - P5「开放接口」(API · BOT)：API 与外部接通、QQ bot、非 OMS 客户端向 OMS-IR 传分等 · 计划中
  - 仅 P1 开发中，P2–P5 全部 计划中（P2 加 `is-future` 类与其余对齐）
  - ✅ **已决（用户确认）：新路线图提升为工作区权威定义**，并传播到：根 `AGENTS.md` §2（唯一权威）、前/后端/桥的 `dev-plan` 产品阶段列表与「当前阶段」表述、前/后端/桥的 `doc_md/README` 与 mainline README/constraints/dev-progress、前/后端顶层 README、前/后端 AGENTS 当前状态。旧模型（宣传展示→账号→主页成绩→排行榜→谱面下载）废弃。仓库映射：oms-frontend = P2 初版官网；oms-backend = P3 OMS-IR(+P5)；P1 底层加固为客户端侧。**剩余未改**：各仓库 `subline/P1-A` 命名框架说明与零散描述性「宣传展示」措辞（半历史性，由 §2「逐步对齐」说明覆盖）；changelog 历史条目不动
- 资源版本 `v=20260602-19`（index 全部资源引用同步破缓存）

## 2026-05-27

- 上线后视觉打磨轮（均经 preview 跨尺寸实测）：
  - 缩放适配：修复移动端导航消失（≤640 原 `display:none`）、cab 状态栏窄屏裁字（改按需换行）；跨主流分辨率/竖横屏无横向溢出
  - Hero 标题中/日文降字号（`clamp(44px,4.6vw,88px)`）解决全角字在窄栏撑成多行重叠
  - HUD：EX-SCORE / COMBO 三语统一英文；删除判定 PGREAT 格；GROOVE GAUGE 改 IIDX 风格分段 LED 条 + 大号百分比，随 combo 实时填充
  - 删除两页顶部 cab 状态栏（系统/主机/机台信号灯）；移除 brand 旁日文 kana；收紧移动端 header；修复 brand 大字/小字重合
  - GROOVE GAUGE 血条/辉光/机框/百分比改用 `--cyan` 信号色变量，随 tweaks 红/黄/蓝/绿同步
  - Hi-Speed 与 Playfield Live/Pause 控件从 tweaks 面板移到 playfield slate 同行右侧（field-top）；tweaks 面板只留信号色；JS 改为全局绑定 `[data-set]`；移动端 field-top grid 行改 auto 让控件换行不溢出
  - Hi-Speed 改 5 档 ×0.6/×0.8/×1.0/×1.2/×1.4（按倍率算 `VISIBLE_BEATS = 0.78 / 倍率`）
  - 文案：「规格」概念三语统一改为「特性」（zh 规格→特性、en SPECS/Spec→FEATURES/Feature、ja 仕様/スペック→特性），含 nav / sec02 标题与序号 / 查看 CTA / 正文「双 mode 规格→特性」；锚点 id `#capabilities` 不变
  - 文案：所有大字标题去掉结尾句号（中日「。」、英文「.」）——hero / sec02–05 / dl 标题 / none / install，三语
  - 判定窗口区（#timing）从条形图改为「判定类型 + 难度」两个下拉菜单 + 表格视觉（列 PG/GR/GD/BD/空PR）：IIDX（单档）/ LR2（easy~very hard）/ RAJA（very easy~very hard 5 档，含早晚不对称值）/ OD（osu!mania，按 `64/97/127/151 − 3×OD`、MAX ±16 算，档位 OD 5–10）；默认 RAJA easy(100%)；数据源 = 用户提供图片 + osu! wiki Overall Difficulty
  - 在表格下方保留并复活原条形可视化（PG/GR/GD/BD 居中条，随当前选择实时重绘、按最大窗口缩放、支持早晚不对称如 RAJA 的 +220/−280；空PR 因量级过大不入图）
  - 文案：sec03 lede 去掉「下方数值单位毫秒，来自社区资料与 osu! wiki，仅供参考，以发布版为准」一句，仅留「判定窗口可按类型与难度切换」
  - 特性清单：cap.05 由「离线优先」改为「便携安装」（单便携包安装、覆盖更新、包内存数据、无磁盘污染；绿灯 led--on · 已实现）；新增 cap.06「游戏社区」（IR / 谱面库 / 社区论坛等中心化平台；红灯 led--live · 开发中）
- 资源版本 `v=20260526-15`

## 2026-05-26

- 落地 Claude Design 设计稿 handoff bundle：第三轮视觉系统重做，推翻暗色霓虹方向，改为 **Cabinet Mode**（街机机台 / 电竞转播视觉语言）
- 产品重定位：由「BMS／mania 桌面客户端」改为 **OMS = 基于 osu!lazer 的 fork client，以 ruleset 形式增加 BMS 原生支持**（品牌副标 BMS · osu!lazer fork）
- 删除 `hub.html`：规格 / 判定 / 路线图改为首页内锚点 `#capabilities` / `#timing` / `#phases`，导航与页脚同步
- 新增中/英/日三语切换（中文默认），新增 `assets/scripts/i18n.js`（三语词典）；专有名词保留原文
- 重写下载页：`download.html` + 新增 `assets/scripts/download.js`，打开即 `fetch` GitHub `ZDaMexy/oms/releases/latest`，三态渲染（loading / 有发行版列 assets+notes+★主包直链 / 无发行版或失败退回跳转 GitHub releases 页）
- 重写 `assets/styles/site.css`（Cabinet Mode 设计令牌）与 `assets/scripts/site.js`（i18n + playfield 渲染器 + tweaks 面板）；复用既有 `assets/scripts/chart-stargazer.js`
- Tweaks 面板：信号色红/黄/蓝/绿四色（默认蓝）· Hi-Speed · Playfield Live/Pause
- **平台口径按硬约束收回为 Windows-only**：设计稿原写 WIN/MAC/LINUX，未采纳；`dl.platform` = WIN 10/11 · X64，安装步骤只讲 `OMS.exe`
- 资源版本号 `v=20260526-1`

## 2026-04-21

- 将 `oms-frontend/` 初始化为独立 Git 仓库
- 新增前端 `.gitignore`，忽略 `node_modules/` 与 `dist/`
- 编写仓库根 README，明确当前阶段是宣传展示，后续阶段依次为账号系统、个人主页与成绩展示、排行榜、谱面下载入口与私服相关服务
- 为 `doc_md/` 下的主线、支线、调研线文档写入初始占位内容
- 将主线四件套对齐到同一条 OMS Web 完整产品路线
- 将 `subline/` 从平铺五件套重构为按功能方向拆分的目录结构，并新增 `P1-A/` 占位支线
- 建立工作区根目录 `dev_bridge_md/`，并为前端文档补充桥文档联动索引与同步规则
- 将 `dev_bridge_md/` 初始化为独立 Git 仓库，用于单独管理工作区级共享文档

## 2026-04-23

- 将 Phase 1 的首个实现目标收敛为静态展示与宣传页骨架
- 明确页面内容采用“先搭结构，再逐项向用户确认”的推进方式
- 为客户端事实同步新增 `oms_client_bridge_md/` 规划，并将其纳入前端文档联动规则
- 导入首轮客户端快照，并采纳默认离线、默认关闭游戏内更新、保留在线接点和 BMS 正式 ruleset 等安全公开事实
- 创建首版静态站骨架，包括首页、下载状态页、未来入口页以及共享样式和脚本
- 将站点视觉和内容组织从开发状态看板重写为产品官网表达
- 将多页面结构收敛为根级 `index.html`、`download.html`、`hub.html`
- 将导航改为面向用户的“首页 / 下载 / 功能介绍 / 未来规划”，并统一首页、下载页和未来规划页的暗色霓虹视觉系统

## 2026-05-23

- 修复 `site.css` 结构性损坏：多条规则（`.subhero-panel`、`.button-disabled`、`.split-box--accent`、`.channel-card--primary` 等）此前被错误嵌套进无关规则而失效，导致下载页与未来规划页样式破损
- 基于设计令牌（颜色 / 间距 / 圆角 / 字阶）重写整份样式表，统一组件并加入卡片悬浮、滚动渐显、粘性头部滚动态、staggered 卡片入场等微交互
- 为首页新增纯 CSS 下落 note 演奏区，按 beatmania IIDX SP 的 7+1K 还原（左侧 scratch + 白/蓝键交替、白/蓝/红 IIDX 音符配色与键位宽度、键帽与判定线、EX-SCORE/COMBO/Groove HUD），并将信号带 marquee 改为双组无缝循环
- 新增内联 SVG 站标与 favicon、`theme-color` 元信息，并将各页重复的 eyebrow/标题改为有层次的差异化文案
- 增强 `site.js`：粘性头部滚动态、rAF 节流滚动、`prefers-reduced-motion` 降级；样式层补充 `:focus-visible` 焦点环
- 资源版本号由 `v=20260423-1` 升级为 `v=20260523-1`
- 新增 `.claude/launch.json`（静态预览服务器配置），用于本地预览与视觉验证
- 新增首页演奏区的真实 BMS 谱面驱动：离线 Node 解析器 `parse-bms.cjs`（工作区根，不发布）将一张 7key BMS 谱解析为仅含音符列+节拍的紧凑数据 `assets/scripts/chart-xecus.js`（无音频/图形素材）；`site.js` 新增 rAF 滚动渲染器，按归一速度循环、静音、窗口化渲染、离屏暂停，并实时累加 COMBO/EX-SCORE；保留 CSS 循环作为回退
- 在演奏区下方加入小字署名「演示谱面 · Xecus [Another]（7K）　曲 SHIKI ／ obj fity」（取自 BMS `#ARTIST`；该难度无单独 obj 字段，故 obj 记为原包作者 fity），署名为可访问文本、非 aria-hidden
- 在判定线下方新增 IIDX 风格控制台：左侧旋转转盘（scratch）+ 7 个白/蓝交替的键钮，按列对齐轨道；音符落到判定线时对应控件实时点亮（JS hit flash）。仅借鉴硬件排布，配色用站点霓虹色（非绿色原配色），未复制原始美术
- 修复演奏区音符未落到判定线就消失的问题：`.note` 残留的 CSS `note-fall` 动画会覆盖 JS 内联 `top`，导致音符实际由旧动画驱动而被渲染器按节拍提前删除；现对 JS 生成的音符设 `animation: none`，由渲染器完全接管定位（音符底边对齐判定线），并将流速/可见窗口调为 `BPS≈5.8` / `VISIBLE_BEATS≈4.5`
- 修复演奏区播放速度过快：此前用固定 `BPS=5.8` 推进谱面时间轴，与谱面真实 BPM 无关，导致按 BPM 不同被加速（182BPM≈2×、87BPM≈4×）。改为 `BPS = bpm/60 × RATE`（按真实 BPM 播放，`RATE` 默认 1），并把 `VISIBLE_BEATS` 明确为仅控制视觉 hi-speed/音符间距，与播放时序解耦
- 演奏区手感定稿：`RATE=1`（真实 BPM 播放）+ `VISIBLE_BEATS=0.72`（87 BPM 下单音符约 0.5s 落到判定线）；前端资源版本推进至 `v=20260523-12`
- 演奏区演示谱面由 Xecus [Another] 换为 Stargazer [SAETHER]（曲 Lime / obj saaa，☆11，BPM 87）；解析器 `parse-bms.cjs` 新增 `#LNOBJ` 长条解析支持；小字署名同步更新为「曲 Lime ／ obj saaa」，旧 `chart-xecus.js` 已删除、改为 `chart-stargazer.js`
- 记录版权待确认项：演奏区当前使用第三方 BMS 谱面（Stargazer [SAETHER] / Lime·saaa）的音符位置数据，正式发布前需确认替换或授权
