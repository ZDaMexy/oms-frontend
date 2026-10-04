# Frontend Mainline Progress

## 当前状态

2026-10-04 官网已从介绍/下载单页改为社区近期帖子首页，提供独立下载、入门帮助、固定帖地址和账号页。旧首页与迁移源码保留归档，新门户在 `portal/` 实现；开工工作区与首次验证归 [历史记录](changelog.md)，不把开工 HEAD 写成当前或生产来源。

社区官网已上线，final current 为 `f1f8286640c7-c1b1b7a5da7a`（Backend `f1f8286` / Website `c1b1b7a`）。首页、独立下载 / 帮助、账号与社区帖子页面已接真实 API，原 IR 使用同一账号和导航。当前公开帖子 0，首页显示真实空状态；没有向生产写入合成社区内容。软件、本地实际 Edge、服务器隔离迁移 / 恢复和最终公网只读浏览器均通过，真人使用及客户端成绩仍由用户验收。共同边界见 [社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)，下一步见 [dev-plan](dev-plan.md#当前最近任务)，阶段只由 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义。

本轮多来源 IR 已由待审查转为修订 3 采纳后的候选实施，网页范围见下方[多来源 IR 实施](#多来源-ir-实施)。当前生产仍是上述发布包/schema 2，没有部署本轮 v2 来源混榜和历史投影；本地页面、客户端源码与旧生产各自记录，社区既有证据不提升为本轮验收。

## 本轮交付范围

| 玩家路径 | 本轮范围 | 当前证据边界 |
| --- | --- | --- |
| 第一次进入 | 首页真实帖子流，独立下载 / 帮助，Windows-only 与离线优先说明 | 已发布，公开空首页 / 多页 / 桌面 / 窄屏通过 |
| 参与社区 | 四类列表 / 搜索 / 作者筛选，注册登录后发帖，固定分享地址和分页回复 | 本地真实接口、持久恢复和实际浏览器闭环通过 |
| 管理自己的内容 | 帖子与回复编辑 / 删除；删帖保留他人回复并关闭新内容，删回复保留楼层 | 本地作者权限、纯文本 / 安全链接、占位页面操作通过 |
| 账号与成绩 | 与已试运行 IR 共用 cookie；账号页通往本人帖子和本人 IR | 本地跨页 / 标签和刷新 / 退出通过，公网只读原 IR 正常 |
| 公开版本 | GitHub Releases 静态下载、QQ 群号联络；Latest `oms_20260626` 与 IR 开发源码分开 | 本轮不制作 Windows 发行包 |

旧首页演奏 / 三语 / 判定素材保留归档，不进入新门户公开加载；原内容来源缺口留在 [历史记录](changelog.md#2026-10-04)，不能从“退出页面”推导客户端能力不存在或已复核。

## 已试运行 IR

2026-10-03 `https://oms.zdamexy.work/ir/` 已发布，通过同源真实 API 支持注册、登录、退出、BMS / mania 条件组单谱榜及本人历史；凭据不放 localStorage，AT 只留本人历史，最佳分 / 灯可来自不同局。客户端独立主动连接、保存后交分和原账号补交沿 [Client Bridge 实现来源](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-client-implementation-snapshot-20261003.md)，默认地址仍空。页面为未经回放核验的试验榜，没有网页手动上传；合成接口输入不是设备成绩。

原生产、容量与恢复结果见 [Backend IR4](../../../../oms-server/oms-backend/doc_md/other/ir4-host-verification-20261003.md)。用户真实 BMS / mania 同局、断网重启、原账号恢复与客户端发行人工门保留，通过 VS Code 非调试启动当前工作区验收，不要求额外候选包。

## 多来源 IR 实施

2026-10-04，D01～D09 已按 [正式审查修订 3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)采用。网页候选消费 [多来源正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)，服务全量投影/查询、资源与发布状态取 [Backend 多来源实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)，后续职责见 [计划投影](dev-plan.md#多来源-ir-实施)。

候选页面已能搜索标题/作者/MD5、按 MD5 直接打开谱面，选择一个、多个、全部可用来源或主动清空；来源、参考/同条件、条件与页码保留在 URL，刷新深链可恢复。服务先筛选完整候选再决定最佳 EX、独立灯、共享名次、人数与分页；页面显示该范围结果，不抓各来源 TopN 拼榜，也不在当前页寻找或伪造本人名次。同条件由玩家主动选择已公布条件，未知条件或无匹配时明确说明；mania 原计分条件榜与本人逐局历史保留 v1 路径。

榜行区分 OMS 新局、播放器最佳状态与历史最佳摘要，显示来源、未知条件、原身份 namespace/ID、原灯与未收录时间/最大 EX。旧 LR2IR 同名账号不合并为 OMS 本人；独立灯附来源和规则说明，不把未知灯换算成统一最好灯，不把历史摘要或外部状态称为逐局历史。

网页已实现对应来源专用密钥创建、元信息列表和撤销：秘密仅创建时显示，刷新后不能重新取得，不写 localStorage。账号切换清除上一账号本人行、历史、密钥列表及秘密；创建/撤销前重核账号，账号及读取 revision 防止晚到响应覆盖新账号/新来源范围。候选正常登录/退出/重载/换账号可见结果已有实际浏览器补核；人为迟到响应及真人宿主仍须各自证据。

root 的本地实际浏览器观察已覆盖来源筛选、并列名次、末页第1461页与范围人数、空选、本人落在第28901名而仍有全榜本人提示，以及刷新深链；此前候选证据保留原来源，后续账号/密钥及生成资产补核归下方报告。观察使用隔离数据，不是生产账号或目标播放器真实游玩，不签全部公开体验门。

OMS [本轮客户端来源](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-client-snapshot-20261004.md)绑定已推送 `b7d0f74d77425bc47079e55f854ff93fd3c0c9a5`；默认隔离及保存后新局沿 `client-ir-default-isolation` / `client-ir-save-first`，不改变旧 UUID/body/账号归属。三份固定Java SDK插件已通过实际send/read合成软件检查，OpenLR2两架构同版MSVC/MT编译与软件入口加载通过。帮助页提供候选五插件、许可通知和版本证明路径，生成资产严格白名单共七项；本次静态检查8页/208引用/3脚本/2样式通过。真实宿主、非空跨DLL容器、全部玩法/原生界面及公开部署仍待；实际限制取 [固定播放器事实](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-multisource-player-snapshot-20261004.md)，P/C步骤取[真人验收说明](../../../../oms-server/oms-backend/adapters/ACCEPTANCE.md)。

2026-10-04，Website `08ce0bd2247f` / Backend `9e10197e5c29` 候选在本机 `18086` 补核账号切换、密钥当次显示/重载/撤销、全来源榜、帮助页与七资产 HTTP/SHA256，具体结果及既有证据适用范围见 [浏览器补核报告](../other/multisource-browser-verification-20261004.md)，多来源尚未部署，生产交互、OMS 和目标播放器真人门仍待。

公网浏览器、真实共享主机预算、两次空目录恢复/回退、线上部署及 P/C 真人矩阵都仍有未完成项。对应门通过后由 root 更新实际发布来源并给真人路径，部署后真人未完记“已部署待验收”；当前尚未部署，不能提前使用该状态。旧社区成功、十万条合成容量及 SDK 编译不证明千万级基础榜或 P/C 完整闭环。

## 验证结论

下列保留原社区与 v1 IR 的既有验证日期、来源和当时登记数量，不适用于本轮多来源最新源码。多来源本地观察及未完成的公网/主机/部署/真人门见上方实施范围；最终结果由 root 补充。

2026-10-04 后端有效 focused 23 / 全回归 83 通过，含社区权限、纯文本、并发幂等、原 IR 行 / 会话保全和 schema 2 一致恢复；首轮 fixture 失败与有效证据见 [Backend 社区验收](../../../../oms-server/oms-backend/doc_md/other/community-verification-20261004.md)。

本轮多页静态通过（8 页 / 199 引用 / 3 脚本），静态检查器 1 正 / 5 反例通过；实际 Edge 本地合成库通过空社区、注册共享会话、固定帖 / 刷新、分类搜索、另一账号回复 / 权限 / 编辑、纯文本安全链接、丢响应只存一帖、切账号主动重建归属、社区 / IR 并发刷新 / 退出、删除占位关闭、未知地址与旧下载锚点。实际桌面 1360×1000、手机 390×844，各手机页无整页横溢出，页面脚本错误为 0。原报告 / 脚本 / 截图位于 `F:\oms\artifacts\oms-community-20261004\portal-browser-report.json` 及同目录；`thread-mobile.png` 首次 fullpage 捕获存在粘性页眉滚动状态，原捕获限制保留；已补 `thread-mobile-top.png` 页首截图和 `public-ir-mobile-settled.png` 的 IR 自身加载检查，正文 / 顶栏及匿名登录就绪均正常，证据见 `final-screenshots-report.json`。

工作区 101 文档 / 531 链接检查通过，来源状态仍为 5 / 17 / 11 待复核。服务器真实旧 / 新 runtime 的隔离合成门通过 v1 会话 / 双玩法成绩保全、社区权限 / 运营 / 幂等及 v2 新空目录恢复；具体候选和失败阶段不混用，见 [社区进展](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-progress.md)。

2026-10-04 03:18:21（UTC+8）完成生产 schema 1→2、备份和 Nginx reload，03:25:31 切到最终 current；配置 cmp 一致无需再次 reload。03:22 新 v2 快照 128 KiB 成功，备份 timer enabled、服务 active / NRestarts=0。共享设施事实只由 other 双站镜像维护。

公网首轮暴露同文档 `#download` 不跳转，修复为 `c1b1b7a` 后三个真实锚点场景通过；首轮 `public-browser-attempt1-report.json` 保留。最终公网实际 Edge 1280×800 / 390×844 只读通过 14 个页面 / 资源逐字节 manifest、一致 TLS / CSP / 重定向参数 / 404 / API边界、旧锚点与窄屏，脚本 / 资源错误为 0，个人主页内容 hash 不变。原始最终证据为同目录 `public-browser-report.json` / `public-browser-run2.txt`；没有创建公网账号或帖子，不代签真实发帖。2026-10-03 IR 证据及旧单页原日期保留，不重复包装为本轮首轮全绿。

## 保留事项

- 本地 / 主机隔离用户闭环和公网只读页已通过；生产首次真实发帖 / 回复由用户使用验收；顶部截图及 IR 就绪补核已完成，原初次捕获限制保留。
- 客户端真实游玩与完整发行人工门未关闭。官网发布不能把开发源码能力写入旧公开包说明。
- 便携更新 / 存储细项、判定数值的原来源不足仍保留；本轮移出公开表面，不以文档改版刷新 Client Bridge 原来源或待复核状态。

早期Website `5ac044e9d014` 本地核对：服务/网页重启后，全选29,204身份、第2/1461页仍显示本人全榜28901名；空选0身份；OMS+ED为2身份、180/175 EX，独立灯带真实规则/未知说明。本人历史仅2个OMS新局，外部最佳状态/归档未增加局数；固定宿主来源明确显示待真人验收。390×844窄屏正文无横向溢出（client/scrollWidth均375，表格在自身740宽容器内滚动），浏览器无console error；桌面与窄屏画面在F:/oms/artifacts/oms-ir-multisource-20261004/website-*.jpg。静态检查当时8页/205引用/3脚本/2样式通过，当时四插件待后续核对；现有五插件/七资产本地补核归[浏览器报告](../other/multisource-browser-verification-20261004.md)，公网仍待发布后验证。原窄屏证据不代签后续全部界面、真实宿主或OMS真人。
