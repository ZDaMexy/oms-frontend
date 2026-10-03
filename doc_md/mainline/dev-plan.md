# Frontend Mainline Plan

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；本轮用户已授权社区帖子首页及独立页面，按 [社区闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md) 实施。实际状态与证据见 [当前进展](dev-progress.md)。

## 当前最近任务

官网已发布为 Backend `f1f8286` / Website `c1b1b7a`；API / 持久恢复、本地与主机隔离写流程、最终公网只读 / 桌面 / 窄屏门通过，具体证据和首轮锚点修复见 [当前进展](dev-progress.md)。保留事项按本轮边界收尾：

1. 本轮最终生产、备份 / 外取、公开浏览器与帖子顶部截图已留证；完成最终文档检查与选择性提交推送，保全旧治理工作和首次失败。
2. 用户在真实环境注册 / 登录并发帖、回复和本人管理，产生第一批真实社区内容；当前 0 帖保留诚实空状态，不为主页观感填假帖。
3. 保持 GitHub Latest `oms_20260626` 与 IR 开发源码分开；用户从 VS Code 验收客户端同局与断网补交，本轮不制作 Windows 发行包。

## 交付后的保留事项

- 客户端真实 BMS / mania 同局、断网重启和原账号恢复仍沿 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md)，由用户通过 VS Code 非调试启动当前工作区验收。本轮不制作 Windows 发行包。
- 截图 / 视频、后续帮助内容和公开发行说明按真实版本补充，不用网站布局或社区交互通过代替客户端事实复核。
- 附件、点赞、私信、实时聊天、在线状态、官网谱包及开放接口不进入本轮，也不预建入口；新需求另行采用合同。

旧 [P1-A](../subline/P1-A/README.md) 已交接；本轮社区由 Website mainline 承载，共同接口只维护于 [Dev Bridge 社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)。
