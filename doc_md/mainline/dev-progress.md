# Frontend Mainline Progress

## 当前状态

2026-10-08 正式官网已由 [OMS Web](../../../oms-web/OMS.md) 接管，状态“已部署待验收”。本仓只保留旧静态设计、历史、原工作区差异与已验证兼容范围内的同库源码回退来源，退出当前功能开发。

当前运行、固定维护 / 回退与未完成真人路径只取 [原版站维护](../../../oms-web/doc_md/production-maintenance.md)，实际生产、恢复和失败证据取 [正式收尾](../../../oms-web/doc_md/production-deployment-20261007.md#正式发布与收尾)。本地视觉认可不关闭线上浏览器、下载入库、真实账号 / 密钥、OMS 对照或 P/C 门。

2026-10-22 本地保全与全仓审查从 `02826eaaccbaa56f33f02336dea52b782fe205e5` 接续，纳入此前 README / 文档、旧脚本清理与构建路径迁移；`.dev-cache/` 明确忽略，缓存和素材不进入提交。本仓只向 origin 推送保全源码，不执行旧整站部署 hook；生产身份仍取现行 OMS Web 维护。

## 多来源 IR 实施

当前成绩与多来源证据维护于 [Dev Bridge IR 矩阵](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-progress.md#多来源-ir-实施)，网页由 OMS Web 承载。旧页面的来源查询、密钥、浏览器和八资产结果仅适用于原日期 / 版本，完整记录见 [旧静态历史](changelog.md#旧静态站进展与计划归档)。

## 验证结论

2026-10-22 在本次完整工作区运行 `npm run verify`，16 页 / 524 引用 / 4 脚本 / 4 样式检查通过；两个旧脚本另经 `node --check` 语法检查。lock 的差异仅为 peer 元数据，包图、版本、依赖和 integrity 均保持；旧脚本已退出当前保全门户的公开加载，不据语法通过声称其旧交互已重新验收。检查与全仓提交范围取[本次记录](changelog.md#2026-10-22)，2026-10-03～12 的浏览器、主机 / 恢复与失败仍沿历史，不刷新生产或真人状态。

## 保留事项

- 保全本仓真实资源、Git 历史与原未提交差异，不执行旧整站部署 hook。
- 设计回退保留当前库；兼容性、配对路由与固定 helper 按现行 OMS Web 维护核对。
- 原客户端来源缺口与待复核状态沿 Client Bridge；旧页面退出公开使用不表示客户端能力不存在或已复验。

下一步见 [计划](dev-plan.md#当前最近任务)，历史见 [changelog](changelog.md)。
