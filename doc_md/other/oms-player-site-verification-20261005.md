# OMS 玩家网站核验（2026-10-05）

## 本次范围与发布状态

本轮按用户的新方向建设 BMS / mania 玩家网站：复用固定 osu-web 的实际 React搜索 / 详情 / 个人视图、排名结构与 BEM Less，接真实 OMS 数据、批准谱面来源和新闻。共同采用取 [玩家网站合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md)、[玩家API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/player-api.md)与 [谱面API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/catalog-api.md)。

**新范围已实现、尚未部署。** 生产仍`b520bcb99015-5d0531c22423` / schema3；新Backend来源`25d32397c330090fe7e6588938bd558d884bfa89`只修复本人名次读取，沿[差异验收](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md#2026-10-06-本人名次纯读取修订与差异验收)继续。3ab全量 / 原生 / 1,800秒及两恢复成功分项完成，原空间false和本人慢请求保留，新规模 / 重叠 / 两恢复 / 空间与发布仍待。Web29项静态运行与0cac原字节相同；本次缓存维护核验脚本属于源码offer，须按实际新提交提供，不能忽略未提交输入。Client运行234a9ff、文档f05分记。准确包 / 失败 / 资源取[Backend验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md)，不把本地HEAD或prepared当线上。

前轮2026-10-05 17:16:55的最小身份页、原账号软件、全量主机 / 两空恢复及其真人未完成状态只取 [原核验](osu-web-lazer-account-verification-20261005.md)，旧OpenDesign改版只取 [原改版核验](website-redesign-verification-20261005.md)。原结果和失败不改写，不代签本次公开统计 / 全体玩家查询 / 新React页面 / 外源工作进程。新范围发布后真人未完只能记录“已部署待验收”，当前不宣布P / C闭环。

## 玩家已可在候选源码完成的路径

| 路径 | 实际内容 | 当前边界 |
| --- | --- | --- |
| `/`、`/news/`与独立文章 | 首页先显示真实开发 / 发行近况，再读取实际社区；两篇真实日期、状态与固定文章入口 | 原公开包仍为oms_20260626，未包含IR；不造帖子、玩家动态或活跃数 |
| `/beatmapsets/` | BMS按Ginger / 616真实来源页搜索；原生mania按Sayobot来源游标、1～18K浏览 | 源计数 / 游标与未知键型保留，不拼两源TopN目录或捏造总页数 |
| `/beatmaps/` | BMS以原MD5看两源原包与具体难度、自动选择入口及人工换源；mania看实际sid / bid与原生难度和原集合入口 | 批准有界元数据 / 连通性核验后 `307` 至原站，OMS不代理 / 托管包；缺MD5不猜同谱关联，元数据 / HEAD / 首字节 / 跳转不签整包成功或自动入库 |
| `/users/?id=<实际OMS ID>` | 按玩法、键型、来源查看公开当前最佳、独立灯、最近公开最佳 / 状态更新和分条件统计；作者帖子与本人管理按实际身份显示 | 完整UUID历史、AT、私人密钥不公开；LR2IR旧ID不合并，空账号只本人可读 |
| `/rankings/` | BMS单来源覆盖 / 实际条件通关榜；mania明确键型、普通30000016的累计公开最佳分 / 覆盖榜 | 明示积累指标；全范围筛选 / 共享排名后分页，零通关真实参与者及页外本人保真；不是PP / 地力 |
| `/account/`、`/community/`与`/ir/` | 原OMS浏览器会话、纯文本帖子 / 回复 / 作者管理、来源密钥和真正单 / 多 / 全 / 空来源同谱参考混榜保持 | 浏览器与桌面分别登录，账号变化清除旧私有内容；旧IR / 社区软件回归不代签本轮所有浏览器动作 |
| `/download/`、`/help/`、`/credits/` | 公共发行与开发版边界、启动 / 谱库 / IR方法、上游许可和对应修改源码入口 | 本轮不生成Windows发行包、publish或安装副本；准备包的对应源码身份取Backend，公开字节与实际发布门仍待 |

客户端开发工作区沿 `client-ir-native-account-ui` 的原 lazer 用户按钮、登录与个人页路径，来源取 [原账号快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-native-account-snapshot-20261005.md) 与 [本轮客户端快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-player-site-client-snapshot-20261005.md)。网站与桌面用同一 OMS 账号但分别登录，个人外链只传稳定 ID、不传 token；原入口的软件通过不签用户 VS Code 非调试游玩、旧待交 / UUID / 归属或真人两端一致。

最近公开记录消费当前公开最佳集合：OMS显示实际游玩日期与服务接收时间，外部状态的 `played_at=null`且只在最佳分或灯改善时更新服务器时间。它不是全部逐局历史或事件流。BMS最高EX和独立最佳灯可来自同真实规则 / 最大EX范围的不同记录；不可比条件分栏，未知条件与灯保留原意。

mania累计分包含当前公开最佳里的未通过局，精确整数以十进制字符串返回 / 显示；通过数只读该公开最佳的真实passed，不偷读较低分私人历史。镜像star / PP / 游玩数不进入OMS玩家统计。地力、Walkure / 黑星及BMS PP的算法和优先级按用户意见后续另议，本轮没有自创公式或把累计EX叫地力。

## 源码、复用与原工作保全

开工记录为Website `38ceb1028311dbb48bc9d3ab98ce759e3fc5313a`、Backend `dddfd004cf939d061ef1552804b12fa6a91c3331`、Client `857669c89f99c9c5f9292866aed237e4cc1048df`。主执行者复核跟踪与既有改动，基线与指纹在 `F:/oms/artifacts/oms-player-site-20261005/baseline-repositories.json` / `baseline-homepage.json`；旧治理文档、legacy资产与删除保全，不混入本次选择性发布。本报告文档执行者未运行git、检查、构建、测试或部署。

固定上游为 `ppy/osu-web` / `2c596022a1345fbed288978e7fa5304df0359f50`，不以在线浮动提交替代。来源去向及原Git blob SHA256登记于 [源码映射](../../src/osu-web/upstream.json)和 [完整上游登记](../../portal/osu-web-sources.json)，当前后者共76项。上游raw hash不冒充修改后本地文件hash；OMS请求 / 类型 / 来源控制和新闻数据的自有代码明确区分。

当前 prepared 整体 runtime 登记 78 项 / source offer 登记 138 项，其中 Web source-only 69 项；Web 自身运行页 / 资源仍沿冻结的 `0cac041e0cd1`，不把这 69 项开发源码当生产路由。准确数量、路径和指纹以当前 release / source manifest 及 Backend `scripts/build_release.py` 为准，初始增量名单保留于 `F:/oms/artifacts/oms-player-site-20261005/frontend-whitelist.json`。package.json / package-lock.json、构建配置、实际TS / TSX / Less / JSON、构建说明和许可随对应提交进入源码 offer；node_modules、缓存、数据库、凭据、个人原始行和谱包不进入源码下载。生产静态资源无需 Node 常驻进程，也不部署完整 ppy 后台。

AGPL-3.0-or-later与React / 构建依赖声明在 `/credits/`、[LICENCE](../../portal/LICENCE.txt)和 [notice](../../portal/THIRD_PARTY_NOTICES.txt)。构建方法见 [src/BUILD.md](../../src/BUILD.md)。源码 offer 软件门保留有效记录，实际提交版包 / 源码对应性只取 Backend 候选准备证据；公开 HTTP 字节、完整运行与恢复门仍待，不能用白名单数量或 prepared 状态宣布已经公开交付。

## 本轮有效软件门

由根统一执行者先加载 `F:/oms/UseDevelopmentStorage.ps1`，串行检查冻结源码，产物 / 缓存 / 临时 / 日志均在F盘。以下保留本轮 Website 冻结时对应范围的实际软件记录，没有用旧账号 scope 的数量替代，也不将这些结果代签后续 SQL 修复。后续 Backend 的 focused / 回归、索引与数学取证及性能失败另取其验证，不在这里复写每轮事实。

| 门 | 实际结果 | 证据（`F:/oms/artifacts/oms-player-site-20261005/`） |
| --- | --- | --- |
| 前端类型 | r8 `tsc --noEmit`通过 | `frontend-typecheck-r8.log` |
| 前端生产资源构建 | r8 Webpack5.104.1成功、3.156秒；输出player-site.js / css及依赖版权文本，postbuild规范CSS末尾换行 | `frontend-build-r8.log` |
| 静态页面 | r8：16pages / 524references / 4scripts / 4stylesheets通过；范围为路由 / 导航 / 锚点 / 标签 / 资源 / 语法 / CSP | `frontend-static-r8.log` |
| 公开玩家及原身份接口 | 74通过；公开资格、显式凭据、单次读取额度、AT / 私人UUID保护、独立灯、筛选 / 分页、零通关并列 / 页外本人和超JS / int64的精确累计 | `player-profiles-r1.log` / `.xml` |
| 本轮服务与原业务回归 | 171通过；批准源 / JSON / URL / 部分失败 / deadline / 缓存 / 两并发 / 首byte关闭、proxy边界和原成绩 / 真混榜 / 社区 / 一致备份 | `backend-r1.log` / `.xml` |
| 修改后的源码offer白名单 | r3：1通过，覆盖最终69项源码白名单，不把前171项冒充后续变更已验证 | `release-source-r3.log` / `.xml` |
| 客户端mania判定 | 有效restore / Release复编后11/11、零跳过；真实ManiaRuleset / Capture / Create保全Perfect / Great / Good / Ok / Meh / Miss | `client-judgements-r1.log`、`client-results/mania-native-judgements-r1.trx` |
| 普通Desktop Release | 成功、零错误，保留未改BMS测试CS8600 / CA2007两警告 | `desktop-release-r1.log` |

Backend的Starlette TestClient / httpx弃用警告保留。客户端新提交和受限来源已在 [Client Bridge快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-player-site-client-snapshot-20261005.md) / [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md)采用。2026-10-06 正式 `450d13d` [公开统计读取修订](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md#2026-10-06-公开统计读取修订)取代初修“无持久聚合”的技术取舍：schema3 核心行不改写，准许可重建派生表 / 索引 / trigger，全部进入一致备份与完整指纹；没有扩展 LR2IR 个人历史投影或访问母库。当前 runtime 提交前维护，旧普通 SQLite 写入留下 dirty，readiness 前修复，失败回滚，不把旧缓存作为成功结果。

根执行的读模型 focused 117 / full 312 软件结果保留在 [Backend 软件验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#公开统计修订的软件验证)，不替换上表原软件数量或首次失败。批准维护代码固定为实际 `3abf9aa37415-0cac041e0cd1` 的 backup.py / backup.sh 与 pinned `oms-ir-backup.service`；运行 b520与维护3ab身份分别记录，不能称为旧b520备份字节。`53ea4e…` 仅为保持不变的 host_player_probe.py 验收脚本SHA前缀，不是维护 helper 身份。

首轮前端类型检查在 `beatmaps/main.tsx` 报TS1005，新闻Less构建r3缺 `@osu-colour-b3`，原日志 `frontend-typecheck-r1.log` / `frontend-build-r3.log`保留；修正后r4有效通过，不把失败改成成功。Backend开发运行第一次uv缓存找不到指定Python安装的失败及明确使用既有F盘venv的有效过程取 [服务报告](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#根执行者已完成的软件检查)。

## 真实来源、浏览器与运行门

本机真实provider探针 `catalog-live-r1.json` / `.log`证明：616第一页20原谱合4包、原总数122008谱面行；指定MD5两源状态分别保留，616命中且有界探测后的自动入口选择真实HTTPS地址。Sayobot实际sid2440353返回5原生mania难度，4K搜索18集合、来源游标18008。没有谱面MD5字段就不造OMS关联；这些只读元数据 / 响应头 / 首byte，没有成功整包下载或入库证明。

Ginger在本机首轮握手 / 读取超时，页面仍可显示来源失败与另一源候选；独立同验证、精确header和短期限的某次诊断实际获得56,630字节JSON / 2.89秒，后续同peer仍失败。扩大期限、IPv4 / IPv6 / proxy未证明稳定修复，没有关闭TLS或吞错为空成功。取 `ginger-connection-review-20261005.md`、诊断 / 原失败JSON及 [Backend来源报告](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#实际公开源)。这里保留当次本机失败，后续共享主机来源 / 独立进程实测由Backend单独登记，候选仍未生产启用。

根本地实际浏览器 r6～r7 已核对首页两篇新闻、两篇固定文章、616目录、两源BMS原MD5 / SHA256与103难度、全量公开历史的5旧身份、全 / 空来源、Sayobot原sid2440353的5个4K难度，以及公开最佳、独立灯、BMS零通关、mania累计5,400,000、全榜第二页21～30名与页外本人#1/30。mania只有MD5而无下载sid时，显示已交原谱与真实成绩榜，下载按歌名另查且不宣称同谱。上述个人 / 排名使用明确标注的30个合成账号，未写入生产；r8社区实际动作另记下一节，不能将这些合成账号称为玩家动态。

实际390px检查发现上游移动布局隐藏页标题与本人表格撑宽页面，修复后页标题可见、榜表在自身容器横向滚动，实际viewport / document.scrollWidth均为390；首页与个人页分别为390 / 375，没有整页横向溢出。103难度仍全量保留，列表高160px且内部滚动。实际退出合成账号后重新打开已加载的公开个人页，本人管理入口消失、公开最佳仍可读；没有浏览器警告或错误。证据为 `browser-mobile-ranking-r1.png`（原失败）、`browser-mobile-ranking-complete-r2.png`、`browser-mobile-home-r6.png`、`browser-desktop-home-r6.png`、`browser-mobile-profile-r7.png`、`browser-bms-details-r7.png`和 `browser-news-article-r7.png`。原失败和r6证据不改写，r7补完整HTTPS服务地址并重新通过前端门。

以上不代签原包完整下载 / 入库、迟到回应的完整浏览器竞态、密钥创建 / 撤销、全部社区作者管理或真人两端一致；对应软件回归仍单独保留。生产页面与公开资产将在实际发布后复核，当前截图均为本机测试环境。

共享主机批准来源 / worker隔离的当次观察、原查询失败与后续修复只维护于 [Backend 验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md)。根已完成主机查询 r6 两玩法各100,000 distinct完整样本的全部首次请求 / 数学 / 隐私 / 真旧读取往返；精确 ms只引用Backend后续报告。`population-compat-report-r3.json` completed / pass，finished_at `2026-10-05T21:36:52.672550+00:00`，核对真实旧HTTP UUID新局 / 重交、ED最佳状态更新 / 独立灯、dirty队列 / WAL、128 MiB新助手备份及附加空目录恢复、完整原始数学一致性。r1 / r2的路由前缀、条件描述字段误读失败全部保留，未改为通过。

正式流程于UTC `2026-10-05T21:40:23.852909` 以1800秒 / 5 rps、全25M公开历史、100,000 OMS局 / 各29,204原生整榜和两新空恢复范围启动，仍待结果。兼容r3的附加恢复不是正式两恢复，同主服务worker和全部共享门也不能由启动代签；生产发布未开始。主IR原4同步任务 / 单worker / 500MiB / 150%CPU及catalog96MiB / 25%CPU不放宽，不以合成live证明全部档案容量；资源不足先给实测方案，不购买扩盘。

prepared 包的真实提交、同发布运行 / 修改源码 / 许可字节与worker配置取Backend准备证据，不能替代激活。根在兼容r3基础上完成正式完整运行、一致备份和两新空恢复（第二次含未checkpoint的撤销 / 隐藏）、保留固定3ab候选backup.py / backup.sh及备份单元的b520 HTTP / 网站回退与数据保全 / 双站门后才能沿授权试运行；不能用旧整套activator覆盖新维护单元。实际部署后再复核公开路由、文章固定地址、资源 / 原插件下载、普通刷新与200 / 304缓存和新备份受保护外取；保全原个人主页、旧IR / 社区，不把旧成功改成本轮已经部署。

## 追加记录（2026-10-06）：根浏览器 r8 社区回归

根在本地 `http://127.0.0.1:8084` 实际操作当前 Website `0cac041e0cd1`。该本地服务启动时采用的 Backend 是 `7dd428`；本次证据证明网页操作、会话与作者入口的权限 / UI 行为，不证明后续汇总 SQL 的性能，也不替代新候选在共享主机上的运行门。前述旧失败、未完成状态与各次证据原样保留，本节只追加实际观察。

| 实际操作 | 实际结果与范围 |
| --- | --- |
| 未登录访问发帖页 | 要求登录后发帖 |
| 合成账号 `verify_player_00` 登录 | 返回发帖编辑页；创建仅本地的 post `2`。这是明确标注的合成验收内容，不是实际玩家发帖，未发布到生产 |
| 原作者编辑帖子 | 标题和正文可编辑，固定地址 `/community/posts/2/` 保持不变 |
| 原作者创建、编辑回复 | 实际创建并编辑一条回复；截图 `browser-community-author-r8.png` 保存作者画面，拍摄于回复编辑之前，不把该截图当作编辑后画面 |
| 正文安全显示 | 正文中的 `<img src=x onerror=alert(1)>` 实际显示为文字；浏览器中 `#thread img` 的数量为 `0`，没有把这段正文生成图片节点 |
| 退出后更换账号 | 合成账号 `verify_player_01` 登录后可读取同一帖正文，看不到原作者的编辑 / 删除入口；仅隐藏入口的观察不代签所有越权写入场景 |
| 展开账号菜单 | 实际 DOM 中的账号名称与入口链接符合对应账号状态 |

作者画面的实际证据为 `F:/oms/artifacts/oms-player-site-20261005/browser-community-author-r8.png`。本次没有浏览器删除帖子 / 回复、修改密码、创建新密钥，也没有向生产发布合成帖子；首次真人发帖、回复与作者管理验收仍待进行。完整浏览器迟到回应竞态、密钥边界和原包下载 / 入库等未完成项继续保留。

本节取证当时的候选 `7dd8036285cc-0cac041e0cd1` 已准备但尚未激活，该状态作为原记录保留；后续 prepared 候选取顶部当前发布状态。这里不签共享主机玩家榜性能、30 分钟或两次空恢复；本地启动版本 `7dd428` 的网页成功不能补写成新汇总 SQL、生产或恢复门成功，也不宣布 P / C 完整闭环。

## 追加记录（2026-10-06）：正式人口与缓存核验

根已完整保全3ab正式报告：全量 / 原生 / 1,800秒 / 资源及两空恢复成功分项完成，七日空间组合总门false不改写。原个人恢复对照的全人口BMS统计超300ms，旧53人r6只能代表其原范围；Backend25d修复已通过focused119，新候选完整人口 / 不同最佳 / 写读重叠与两恢复仍待，精确结果只引用Backend。上文“流程启动仍待”是当时记录，不再作为当前状态。

既有IR中间件是no-store，门户静态资源是no-cache。缓存核验器原来一概要求no-cache，根据真实策略修正，仅改变维护检查，未改页面或Nginx缓存行为。strict导出r8真实拒绝未提交的该源码offer文件，原失败`release-export-r8.json`保留；选择性提交后重新导出，不能从旧HEAD提供伪对应源码。新生产普通刷新 / 旧值200 / 当前空304仍须实际部署后签，当前无公开缓存通过结论。

## 内容维护、真人路径与未完成项

新闻唯一正文源是 [src/oms/news.ts](../../src/oms/news.ts)，首页摘要、列表和文章共同读取。当前仅两篇：2026-10-05“按需IR试运行”（试运行）与2026-06-26“OMS 20260626发布”（已发布）；日期为真实公布日、不是构建或游玩时间。旧发行说明链接原tag，不把IR开发能力塞进旧公开包。新增文章只维护此源，采用真实slug / 日期 / 状态并同步精确路由 / 静态清单；缺作者 / 图片就省略节点，不填装饰假数据。

运行与恢复门通过并部署后，真人按以下路径验收，当前这些是待执行步骤：

1. 普通刷新进入首页，阅读两篇文章和原发行说明，往返 `/download/` / `/help/`，确认公开包与IR开发版边界、固定地址和页面一致性。
2. 打开 `/beatmapsets/`，分别查BMS真实原MD5与Sayobot原sid，选择具体难度；BMS查看两源、来源失败 / 未命中与人工换源，再主动下载原包。浏览器完成后按帮助导入当前OMS，核对原谱身份和实际入库 / 打开；Sayobot纯mania / 混合包及原bid需真实验证，不以网页跳转签收。
3. 浏览器登录本人真实OMS账号，从个人入口选择BMS / mania、键型与来源，核对公开最佳、独立灯、分条件统计、最近记录时间与第一页 / 后页。完整UUID历史继续本人原入口；退出 / 换账号及迟到回应不能恢复旧私有行。
4. 打开 `/rankings/`，BMS单来源、真实规则scope与通关 / 覆盖口径逐项核对；mania普通30000016累计最佳分及同分名次 / 页外本人对照。回到 `/ir/`查同谱单 / 多 / 全 / 空来源参考与主动同条件，确认旧LR2IR原ID / 未知条件和独立灯不被混淆。
5. 用户从 `F:/oms` 的VS Code非调试启动实际游玩，核对原账号页、mania六判定、保存UUID / 原账号旧待交和网页同账号读回；先OMS + 全量公开历史 + ED7K先导P，再固定目标 / 玩法矩阵C。社区首次真人发帖 / 回复 / 作者管理也留独立反馈。

未完成项明确保留：本地r6～r8未覆盖的完整浏览器竞态 / 密钥 / 作者删除与越权写入、同主服务worker联测和正在执行的正式1800秒 / 两新空恢复 / WAL、整体共享签收、实际激活 / 公网字节 / 普通刷新缓存 / 双站 / 新备份受保护外取。主机查询r6和兼容r3已过范围保留原证据，不能替代这些正式门。首次真实整包下载 / 入库、用户VS Code非调试游玩、指定宿主 / 非空跨DLL容器、两端一致、首次真人社区、玩家视觉认可 / P-C与发行人工门仍待。部署后承接反馈修复；地力后置、PP另议，本轮不伪造能力榜，也不生成Windows发行包。
