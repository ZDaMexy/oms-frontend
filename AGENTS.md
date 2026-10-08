# AGENTS.md — OMS Website

本仓保留 OMS 旧静态官网设计、Git 历史及原工作区差异，作为保全与已验证兼容范围内的源码回退来源。2026-10-08 正式官网已由相邻 [OMS Web](../oms-web/AGENTS.md) 接管；本仓退出当前功能开发。项目说明见 [README](README.md)，历史与共享设施记录集中在 [doc_md](doc_md/README.md)。

## 任务入口

- 当前官网功能、新闻和真人反馈转到 [OMS Web 文档](../oms-web/doc_md/README.md)；运行、备份与回退只取[现行维护](../oms-web/doc_md/production-maintenance.md)。本仓专项保全或历史审查先读 `constraints.md` 与 `dev-progress.md`，按需追溯计划和 `changelog.md`；不以旧计划重新启动功能开发。
- [主线](doc_md/mainline/README.md) · [P1-A](doc_md/subline/P1-A/README.md)（已交接的历史支线） · [调研与运维](doc_md/other/README.md)
- 本入口与本仓 `doc_md` 支持从单项目独立开始工作；任务扩展到其他项目时，切换到 `F:\zdamexy-workspace` 并读取全部受影响项目入口。工作区导航见 [上级 AGENTS](../AGENTS.md)。

## 协作与记忆

- 修改前核对 HEAD、Git 状态与相关已有 diff，保留此前未提交工作；并行任务按文件分工，交付区分本轮增量。
- 在已授权范围内持续完成实施与验证，常规细节自行决策，已有授权不重复确认；提交、推送和部署遵循本项目约束。
- AGENTS 保存稳定协作规则，README 导航，constraints 边界，dev-plan 下一步，dev-progress 当前状态及带日期的证据，changelog 历史。当前事实完整维护一处，其余引用；休眠线不强制五件套。
- 会话摘要用于续接，不另建平行事实账本；发生冲突时核对权威文档与实际文件。文档整理日期不替代验证日期，历史成功不代表当前已验证，本地完成不代表已发布。
- 按已确认需求、实际调用方和明确不变量直接实现，优先修复根因；不堆假想兼容、无用抽象、重复判空、静默吞错或伪成功默认值。外部输入在边界校验，内部按契约运行；只捕获实际可恢复的失败，移除失效代码。
- 验证覆盖本轮行为及必要回归，通过且无新变化时停止扩测；交付记录实际结果和未复核事项。只更新受影响的文档职责，不机械重写整套文件。
