# Frontend Mainline Plan

## 当前最近任务

本仓退出当前官网功能开发，只维护旧设计、历史和已验证兼容范围内的回退来源；保全原页面、脚本与未提交差异。当前功能、新闻与真人反馈转到 [OMS Web](../../../oms-web/doc_md/README.md)，操作取 [原版站维护](../../../oms-web/doc_md/production-maintenance.md)。

1. 仅在实际旧设计审查或回退任务中修改本仓；按 [约束](constraints.md) 与 [旧站验证](verification.md) 检查受影响范围，不重新发布旧页面替代新站。
2. 回退前核对实际 current、数据库 / schema、固定 helper 与配对路由，保全新增数据，沿现行维护已验证的兼容范围执行。
3. 当前新闻只维护原版站 [resources/oms/news.json](../../../oms-web/resources/oms/news.json)，方法见 [新闻维护](../../../oms-web/doc_md/production-maintenance.md#新闻与内容维护)；旧 src/oms/news.ts 保留为历史。

## 多来源 IR 实施

本仓只保留原网页实现与回退合同，现网页 / OMS 真人、先导 P / 完整 C 和持续维护从 [共同 IR 计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md#多来源-ir-实施) 接续。旧静态浏览器或匿名读取不代签原版站真人验收。

## 历史与阶段

2026-10-07 及更早执行计划已移入 [旧静态历史](changelog.md#旧静态站进展与计划归档)，不作为当前待办。实际状态见 [进展](dev-progress.md)，统一产品阶段只取 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md)。
