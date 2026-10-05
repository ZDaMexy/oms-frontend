# OMS 玩家网站核验（2026-10-05）

## 本次范围与发布状态

本轮按用户的新方向建设 BMS / mania 玩家网站：复用固定 osu-web 的实际 React搜索 / 详情 / 个人视图、排名结构与 BEM Less，接真实 OMS 数据、批准谱面来源和新闻。共同采用取 [玩家网站合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md)、[玩家API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/player-api.md)与 [谱面API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/catalog-api.md)。

**新范围源码已实现并通过下列软件门，尚未部署。** 当前生产仍为前轮 `b520bcb99015-5d0531c22423` / schema3：Backend `b520bcb990150c721619c47222dd0ff67a427f8f`、Website `5d0531c22423e0622d5c9f2ff3fd60b53c42d1b9`，客户端旧发布 provenance 为 `6bc52720dfa5634ed49fbe28a6d18fe980509199`。这些与本次尚待根审查的 Website / Backend 发布提交分开；新客户端源码 `234a9ff39654cdc30f3d5661cb6a9bf69bb90db6` 已提交推送，但不是新的 Windows 公开发行包。

前轮2026-10-05 17:16:55的最小身份页、原账号软件、全量主机 / 两空恢复及其真人未完成状态只取 [原核验](osu-web-lazer-account-verification-20261005.md)，旧OpenDesign改版只取 [原改版核验](website-redesign-verification-20261005.md)。原结果和失败不改写，不代签本次公开统计 / 全体玩家查询 / 新React页面 / 外源工作进程。新范围发布后真人未完只能记录“已部署待验收”，当前不宣布P / C闭环。

## 玩家已可在候选源码完成的路径

| 路径 | 实际内容 | 当前边界 |
| --- | --- | --- |
| `/`、`/news/`与独立文章 | 首页先显示真实开发 / 发行近况，再读取实际社区；两篇真实日期、状态与固定文章入口 | 原公开包仍为oms_20260626，未包含IR；不造帖子、玩家动态或活跃数 |
| `/beatmapsets/` | BMS按Ginger / 616真实来源页搜索；原生mania按Sayobot来源游标、1～18K浏览 | 源计数 / 游标与未知键型保留，不拼两源TopN目录或捏造总页数 |
| `/beatmaps/` | BMS以原MD5看两源原包与具体难度、自动下载及人工换源；mania看实际sid / bid与原生难度、下载原集合 | 自动入口在有界实际探测后跳到来源；没有获证的网页→客户端自动入库，元数据 / HEAD不是整包成功 |
| `/users/?id=<实际OMS ID>` | 按玩法、键型、来源查看公开当前最佳、独立灯、最近公开最佳 / 状态更新和分条件统计；作者帖子与本人管理按实际身份显示 | 完整UUID历史、AT、私人密钥不公开；LR2IR旧ID不合并，空账号只本人可读 |
| `/rankings/` | BMS单来源覆盖 / 实际条件通关榜；mania明确键型、普通30000016的累计公开最佳分 / 覆盖榜 | 明示积累指标；全范围筛选 / 共享排名后分页，零通关真实参与者及页外本人保真；不是PP / 地力 |
| `/account/`、`/community/`与`/ir/` | 原OMS浏览器会话、纯文本帖子 / 回复 / 作者管理、来源密钥和真正单 / 多 / 全 / 空来源同谱参考混榜保持 | 浏览器与桌面分别登录，账号变化清除旧私有内容；旧IR / 社区软件回归不代签本轮所有浏览器动作 |
| `/download/`、`/help/`、`/credits/` | 公共发行与开发版边界、启动 / 谱库 / IR方法、上游许可和对应修改源码入口 | 本轮不生成Windows发行包、publish或安装副本；同发布源码尚待不可变提交与公开字节门 |

最近公开记录消费当前公开最佳集合：OMS显示实际游玩日期与服务接收时间，外部状态的 `played_at=null`且只在最佳分或灯改善时更新服务器时间。它不是全部逐局历史或事件流。BMS最高EX和独立最佳灯可来自同真实规则 / 最大EX范围的不同记录；不可比条件分栏，未知条件与灯保留原意。

mania累计分包含当前公开最佳里的未通过局，精确整数以十进制字符串返回 / 显示；通过数只读该公开最佳的真实passed，不偷读较低分私人历史。镜像star / PP / 游玩数不进入OMS玩家统计。地力、Walkure / 黑星及BMS PP的算法和优先级按用户意见后续另议，本轮没有自创公式或把累计EX叫地力。

## 源码、复用与原工作保全

开工记录为Website `38ceb1028311dbb48bc9d3ab98ce759e3fc5313a`、Backend `dddfd004cf939d061ef1552804b12fa6a91c3331`、Client `857669c89f99c9c5f9292866aed237e4cc1048df`。主执行者复核跟踪与既有改动，基线与指纹在 `F:/oms/artifacts/oms-player-site-20261005/baseline-repositories.json` / `baseline-homepage.json`；旧治理文档、legacy资产与删除保全，不混入本次选择性发布。本报告文档执行者未运行git、检查、构建、测试或部署。

固定上游为 `ppy/osu-web` / `2c596022a1345fbed288978e7fa5304df0359f50`，不以在线浮动提交替代。来源去向及原Git blob SHA256登记于 [源码映射](../../src/osu-web/upstream.json)和 [完整上游登记](../../portal/osu-web-sources.json)，当前后者共76项。上游raw hash不冒充修改后本地文件hash；OMS请求 / 类型 / 来源控制和新闻数据的自有代码明确区分。

本次同发布源码白名单登记运行文件29项、原始修改源码69项；当前精确清单以Backend `scripts/build_release.py` 为准，增量名单保留于 `F:/oms/artifacts/oms-player-site-20261005/frontend-whitelist.json`。package.json / package-lock.json、构建配置、实际TS / TSX / Less / JSON、构建说明和许可随同一提交进入源码offer；node_modules、缓存、数据库、凭据、个人原始行和谱包不进入源码下载。生产静态资源无需Node常驻进程，也不部署完整ppy后台。

AGPL-3.0-or-later与React / 构建依赖声明在 `/credits/`、[LICENCE](../../portal/LICENCE.txt)和 [notice](../../portal/THIRD_PARTY_NOTICES.txt)。构建方法见 [src/BUILD.md](../../src/BUILD.md)。源码offer软件门已通过，实际提交版包 / 源码对应性、公开HTTP字节与恢复门仍待，不能用白名单数量宣布已经公开交付。

## 本轮有效软件门

由根统一执行者先加载 `F:/oms/UseDevelopmentStorage.ps1`，串行检查冻结源码，产物 / 缓存 / 临时 / 日志均在F盘。以下均为本轮范围的实际软件记录，没有用旧账号scope的软件数量替代。

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

Backend的Starlette TestClient / httpx弃用警告保留。客户端新提交和受限来源已在 [Client Bridge快照](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-player-site-client-snapshot-20261005.md) / [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md)采用。没有新schema迁移、个人历史投影或常驻玩家统计预计算；母库未进入本轮网站任务。

首轮前端类型检查在 `beatmaps/main.tsx` 报TS1005，新闻Less构建r3缺 `@osu-colour-b3`，原日志 `frontend-typecheck-r1.log` / `frontend-build-r3.log`保留；修正后r4有效通过，不把失败改成成功。Backend开发运行第一次uv缓存找不到指定Python安装的失败及明确使用既有F盘venv的有效过程取 [服务报告](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#根执行者已完成的软件检查)。

## 真实来源、浏览器与运行门

本机真实provider探针 `catalog-live-r1.json` / `.log`证明：616第一页20原谱合4包、原总数122008谱面行；指定MD5两源状态分别保留，616命中且有界探测后的自动入口选择真实HTTPS地址。Sayobot实际sid2440353返回5原生mania难度，4K搜索18集合、来源游标18008。没有谱面MD5字段就不造OMS关联；这些只读元数据 / 响应头 / 首byte，没有成功整包下载或入库证明。

Ginger在本机首轮握手 / 读取超时，页面仍可显示来源失败与另一源候选；独立同验证、精确header和短期限的某次诊断实际获得56,630字节JSON / 2.89秒，后续同peer仍失败。扩大期限、IPv4 / IPv6 / proxy未证明稳定修复，没有关闭TLS或吞错为空成功。取 `ginger-connection-review-20261005.md`、诊断 / 原失败JSON及 [Backend来源报告](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#实际公开源)；生产外源工作进程仍需真实验证。

根实际浏览器已核对首页两篇新闻、两篇固定文章、616目录、两源BMS原MD5 / SHA256与103难度、全量公开历史的5旧身份、全 / 空来源、Sayobot原sid2440353的5个4K难度，以及公开最佳、独立灯、BMS零通关、mania累计5,400,000、全榜第二页21～30名与页外本人#1/30。mania只有MD5而无下载sid时，显示已交原谱与真实成绩榜，下载按歌名另查且不宣称同谱。上述个人 / 排名使用明确标注的30个合成账号，未写入生产。

实际390px检查发现上游移动布局隐藏页标题与本人表格撑宽页面，修复后页标题可见、榜表在自身容器横向滚动，实际viewport / document.scrollWidth均为390；首页与个人页分别为390 / 375，没有整页横向溢出。103难度仍全量保留，列表高160px且内部滚动。实际退出合成账号后重新打开已加载的公开个人页，本人管理入口消失、公开最佳仍可读；没有浏览器警告或错误。证据为 `browser-mobile-ranking-r1.png`（原失败）、`browser-mobile-ranking-complete-r2.png`、`browser-mobile-home-r6.png`、`browser-desktop-home-r6.png`、`browser-mobile-profile-r7.png`、`browser-bms-details-r7.png`和 `browser-news-article-r7.png`。原失败和r6证据不改写，r7补完整HTTPS服务地址并重新通过前端门。

以上不代签原包完整下载 / 入库、迟到回应的完整浏览器竞态、密钥创建 / 撤销、全部社区作者管理或真人两端一致；对应软件回归仍单独保留。生产页面与公开资产将在实际发布后复核，当前截图均为本机测试环境。

共享主机新查询、外网worker权限隔离、写读并存、30分钟、全量历史共用、新盘账和两次新空目录恢复尚待。主IR原4同步任务 / 单worker / 500MiB / 150%CPU不据此放宽；新增外源进程96MiB / 25%CPU只是最初候选值，没有实测充分结论。开工内存 / 盘可用量只是瞬时观察，旧原先十万合成或前轮全量主机结果不代签新增个人 / 全体榜或外源预算；资源不足先给实测方案，不购买扩盘。

发布门尚待根审查真实提交、同发布运行 / 修改源码 / 许可字节、不可变包与worker配置，完成一致备份和两次新空恢复（第二次含未checkpoint的撤销 / 隐藏）、兼容回退 / 数据保全及双站后才能沿授权直接试运行。随后复核公开路由、文章固定地址、资源 / 原插件下载、普通刷新和200 / 304缓存；原个人主页与旧IR / 社区数据保全。不把旧发布维护成功改成本轮已经部署。

## 内容维护、真人路径与未完成项

新闻唯一正文源是 [src/oms/news.ts](../../src/oms/news.ts)，首页摘要、列表和文章共同读取。当前仅两篇：2026-10-05“按需IR试运行”（试运行）与2026-06-26“OMS 20260626发布”（已发布）；日期为真实公布日、不是构建或游玩时间。旧发行说明链接原tag，不把IR开发能力塞进旧公开包。新增文章只维护此源，采用真实slug / 日期 / 状态并同步精确路由 / 静态清单；缺作者 / 图片就省略节点，不填装饰假数据。

运行与恢复门通过并部署后，真人按以下路径验收，当前这些是待执行步骤：

1. 普通刷新进入首页，阅读两篇文章和原发行说明，往返 `/download/` / `/help/`，确认公开包与IR开发版边界、固定地址和页面一致性。
2. 打开 `/beatmapsets/`，分别查BMS真实原MD5与Sayobot原sid，选择具体难度；BMS查看两源、来源失败 / 未命中与人工换源，再主动下载原包。浏览器完成后按帮助导入当前OMS，核对原谱身份和实际入库 / 打开；Sayobot纯mania / 混合包及原bid需真实验证，不以网页跳转签收。
3. 浏览器登录本人真实OMS账号，从个人入口选择BMS / mania、键型与来源，核对公开最佳、独立灯、分条件统计、最近记录时间与第一页 / 后页。完整UUID历史继续本人原入口；退出 / 换账号及迟到回应不能恢复旧私有行。
4. 打开 `/rankings/`，BMS单来源、真实规则scope与通关 / 覆盖口径逐项核对；mania普通30000016累计最佳分及同分名次 / 页外本人对照。回到 `/ir/`查同谱单 / 多 / 全 / 空来源参考与主动同条件，确认旧LR2IR原ID / 未知条件和独立灯不被混淆。
5. 用户从 `F:/oms` 的VS Code非调试启动实际游玩，核对原账号页、mania六判定、保存UUID / 原账号旧待交和网页同账号读回；先OMS + 全量公开历史 + ED7K先导P，再固定目标 / 玩法矩阵C。社区首次真人发帖 / 回复 / 作者管理也留独立反馈。

未完成项明确保留：完整本轮浏览器、真实共享资源 / worker隔离、两次恢复、提交版发布 / 缓存 / 新备份外取、真实原包入库、客户端和指定宿主 / 非空跨DLL容器、两端一致 / 视觉认可 / P-C与发行真人。部署后承接反馈修复；地力 / BMS PP不靠本轮积累榜收口，也不生成Windows发行包。
