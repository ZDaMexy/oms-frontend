# Frontend Mainline Plan

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；社区沿 [社区闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md)，本轮多来源 IR 沿已采纳的[正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)实施。实际状态与证据见 [当前进展](dev-progress.md)。

## 当前最近任务

社区官网已发布，原 API/持久恢复、隔离写流程与公网只读证据保留原日期。本轮多来源候选网页已有实现和本地浏览器观察，生产仍为原 schema 2；下一步为：

1. 由 root 对最新候选页面完成最终浏览器复核：谱面直达、单/多/全/空来源、深链刷新、同条件切换、未知/旧身份/原灯、完整范围分页与本人，以及密钥创建/撤销、账号切换和桌面/窄屏；同时回归原 IR、本人历史与社区会话。
2. 配合 [Backend 多来源实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)完成真实共享主机资源、两次空目录恢复与回退门；对应门通过后发布五插件与来源证明，核对七生成资产的线上字节、两站及公开体验。软件编译/send-read/入口加载不替代主机、真实宿主或生产证据。
3. 部署后承接玩家反馈，先验收 OMS＋全量公开 LR2IR 历史＋ED 7K 的先导 P，再持续完成固定目标与玩法矩阵 C；真人未完时记录“已部署待验收”。客户端日常验收由用户通过 VS Code 非调试启动当前工作区，不制作 Windows 发行包。
4. 原社区首次真实发帖、回复和本人管理继续交用户使用验收；保留诚实空状态，不为主页观感填假帖，不把社区成功算作播放器交分通过。

## 多来源 IR 实施

网页和 OMS 游戏内的同谱来源多选、参考混榜、主动同条件榜与 LR2IR 全量公开历史已按 [D01～D09 正式审查修订 3](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md#15-正式审查决定)采用。Website 消费 [多来源正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)，具体服务/投影/发布状态引用 Backend，不另建全量或资源完成账。

本仓 M4 候选已实现 MD5 直达/目录检索、来源组合 URL、未知条件/旧身份/独立灯和专用密钥入口；来源变化交给服务按完整范围重新取最佳、灯、人数、排名和分页，不在页面拼 TopN。当前工作是最新页面复核、对应部署门及真实玩家反馈，而非重复搭建已完成入口。先导 P 和完整 C 的宿主/玩法/桌面/窄屏/账号切换证据独立留存，不由社区页面成功签收。

## 交付后的保留事项

- 客户端真实 BMS / mania 同局、断网重启和原账号恢复仍沿 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md)，由用户通过 VS Code 非调试启动当前工作区验收。本轮不制作 Windows 发行包。
- 截图 / 视频、后续帮助内容和公开发行说明按真实版本补充，不用网站布局或社区交互通过代替客户端事实复核。
- 附件、点赞、私信、实时聊天、在线状态、官网谱包及开放接口不进入本轮，也不预建入口；新需求另行采用合同。

旧 [P1-A](../subline/P1-A/README.md) 已交接；社区与本轮多来源 IR 均由 Website mainline 承载，共同接口分别取 Dev Bridge 的社区与多来源正式合同。
