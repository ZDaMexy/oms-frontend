# Frontend Mainline Plan

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；本轮整体玩家网站沿 [新正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md)、[玩家API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/player-api.md)与 [谱面API](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/catalog-api.md)。原社区沿 [社区计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md)，原多来源IR沿 [正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)。实际状态与证据见 [当前进展](dev-progress.md)。

## 当前最近任务

整体osu-web玩家网站已有谱面获取、公开个人页、真实指标榜、新闻及本地r6～r8浏览器证据；新范围尚未部署、线上仍b520。3ab正式全量 / 原生 / 1,800秒及两空恢复成功分项已完成，七日空间false和完整人口本人慢请求保留；Backend25d修复只改本人读取，沿[正式差异验收](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md#2026-10-06-本人名次纯读取修订与差异验收)推进新候选，未改旧门准确引用而不重复签新来源。页面缺口取[Website核验](../other/oms-player-site-verification-20261005.md)，完整来源与实际耗时 / 维护只取[Backend验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md)。

1. 接续 r6～r8 尚未覆盖的浏览器动作：完整迟到回应竞态、错误凭据 / 私有入口与密钥边界、作者删除及跨账号写入，保留原 IR / 社区回归。首页新闻、两模式来源 / 详情、公开最佳和独立灯、榜后页 / 页外本人、退出清除本人入口，以及本地合成社区发帖 / 编辑 / 回复已完成的观察不重写为待做；实际截图仍不代签用户视觉认可或真人使用。
2. 根在新候选重验近三万人口和两玩法100,000不同最佳的个人数学 / 首请求与p95，至少120秒新个人统计与真实OMS / 外部写入、原榜及完整历史读取重叠；共享资源不放宽。原3ab的全量 / 原生 / 1,800秒、真实来源worker及旧写兼容r3只引用原日期 / 来源；新锁 / 尾延迟 / 内存问题须恢复完整持续门。
3. 根核对实际新manifest、两模块AST及未改运行字节，Web缓存核验脚本属于源码offer且须准确提交提供；重新做两新空恢复，第二次含已提交未checkpoint撤销 / 隐藏，完整指纹和新非空API均一致。保全旧账号 / UUID / 外部状态 / 社区与投影，维护仍实际128MiB / 50%CPU。源码回退只回b520 HTTP / 网站并保留批准新候选维护helper，不用旧整套activator覆盖新备份单元，不以旧快照覆盖上线后记录。
4. 对应门通过后沿授权激活试运行，再实际核对全部路由 / 固定文章、源码与插件字节、普通刷新 / 200 与 304 缓存、原个人站、IR / 社区及新备份受保护外取；根据实测同步水位、维护和回退。反馈修复选择性提交推送，不能在激活前预写部署成功或用强刷代签普通刷新。
5. 部署后给出 [真人路径](../other/oms-player-site-verification-20261005.md#内容维护真人路径与未完成项)：首次真实整包下载 / 入库、用户视觉认可、原 lazer 登录 / 个人页、mania 六判定、公开 / 本人页与透明指标、同谱来源 / 条件及两端一致。Sayobot 缺 MD5 时不猜 sid / bid 对应 OMS 谱面。客户端由用户从 VS Code 非调试启动当前工作区，不制作 Windows 包；先 OMS＋全量公开 LR2IR 历史＋ED 7K 先导 P，再完整固定版本 / 玩法矩阵 C，真人未完只记“已部署待验收”。
6. 后续新闻只维护 `src/oms/news.ts` 的真实 slug / 日期 / 状态 / 正文，同步精确文章路由与静态清单，不用假帖子 / 假动态或旧公开 release 的 IR 承诺补首页。地力设计后置、PP另议，Walkure / BMS PP 的算法与优先级留独立讨论；累计公开最佳、收录和通关指标不伪造能力榜。

## 前轮已部署范围的真人反馈

实际 osu-web 前端 / 原 lazer 账号路径已部署待验收，最小身份、跨账号清除、严格源码 / 许可、全量运行 / 两空恢复、兼容回退、双站 / 缓存和新备份门已通过。接续用户非调试 OMS、网页真实同账号 / 来源对照、视觉与社区反馈，并补公网点击往返和窄屏工具缺口；准确 current 与证据只取 [本次核验](../other/osu-web-lazer-account-verification-20261005.md)。先导 P 后继续完整 C，不由软件 / 工具 / 合成输入代签，也不重复已过未变的运行门。

社区官网已发布，旧证据保留原日期。2026-10-05多来源网页/全量历史/五插件已发布schema3，公开HTTP/全部资产与双站、主机/恢复/补账和首份正式备份外取通过，当前“已部署待验收”；下一步为：

1. 公开匿名谱面查询、单/多/全/空来源、深链/同条件空范围、未知/旧身份/原灯、首/第二/尾页及桌面/390px已实际补核，初次超时保留。继续本人、密钥创建/撤销/账号切换、DPI和网页/OMS真人对照；原IR/本人历史/社区会话真人独立留证，不用匿名读榜签账号或游玩。
2. 实际运行/恢复/公开资产门已完成，具体来源取[Backend实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)。按真实反馈修改受影响页面并复验对应门，维持已发布五插件/双许可/版本来源；未改且已通过的主机/静态门不重复运行。
3. 部署后承接玩家反馈，先验收 OMS＋全量公开 LR2IR 历史＋ED 7K 的先导 P，再持续完成固定目标与玩法矩阵 C；真人未完时记录“已部署待验收”。客户端日常验收由用户通过 VS Code 非调试启动当前工作区，不制作 Windows 发行包。
4. 原社区首次真实发帖、回复和本人管理继续交用户使用验收；保留诚实空状态，不为主页观感填假帖，不把社区成功算作播放器交分通过。

## 多来源 IR 实施

网页和 OMS 游戏内的同谱来源多选、参考混榜、主动同条件榜与 LR2IR 全量公开历史已按 [D01～D09 正式审查修订 3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)采用。Website 消费 [多来源正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)，具体服务/投影/发布状态引用 Backend，不另建全量或资源完成账。

本仓M4已部署MD5直达/目录、来源URL、未知/旧身份/独立灯和专用密钥入口；服务按完整范围重算最佳、灯、人数、排名/分页，不拼TopN。公开匿名桌面/窄屏读榜已实际补核；当前工作为网页/OMS真人一致、P/C宿主/玩法、账号/本人/密钥和DPI验收及反馈，保留独立证据，不重复已完成入口和运行门，不由社区页面签收。

## 交付后的保留事项

- 客户端真实 BMS / mania 同局、断网重启和原账号恢复仍沿 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md)，由用户通过 VS Code 非调试启动当前工作区验收。本轮不制作 Windows 发行包。
- 截图 / 视频、后续帮助内容和公开发行说明按真实版本补充，不用网站布局或社区交互通过代替客户端事实复核。
- 附件、点赞、私信、实时聊天与在线状态继续保留原范围。批准Ginger / 616 / Sayobot的谱面元数据及浏览器原包入口已进入本轮玩家合同；OMS大包代理 / 托管、未批准新源与其他开放接口没有进入这次实施。地力与BMS PP另作专题，不能把积累榜改名为能力评级。

旧 [P1-A](../subline/P1-A/README.md) 已交接；社区与本轮多来源 IR 均由 Website mainline 承载，共同接口分别取 Dev Bridge 的社区与多来源正式合同。
