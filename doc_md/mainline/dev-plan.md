# Frontend Mainline Plan

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；社区沿 [社区闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md)，本轮多来源 IR 沿已采纳的[正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)实施。实际状态与证据见 [当前进展](dev-progress.md)。

## 当前最近任务

2026-10-05 玩家拒签当前视觉与文风，优先处理首页、社区列表 / 详情 / 发帖、下载、帮助、账号和 IR 的整体设计一致性。按 [当前阻断与已保全材料](dev-progress.md#当前状态) 恢复 OpenDesign / Local Codex 后，采用用户指定的模型顺序产出实际可见方案，再移植到现有原生页面，验证真实空状态、真实帖子、混榜和桌面 / 手机；不以问卷、设计说明或 HTTP 成功称为改版完成。保持真实 API / 账号 / 来源资格和公开包边界，原站只作为视觉参考，不恢复其已过期产品文案或演奏素材。

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
- 附件、点赞、私信、实时聊天、在线状态、官网谱包及开放接口不进入本轮，也不预建入口；新需求另行采用合同。

旧 [P1-A](../subline/P1-A/README.md) 已交接；社区与本轮多来源 IR 均由 Website mainline 承载，共同接口分别取 Dev Bridge 的社区与多来源正式合同。
