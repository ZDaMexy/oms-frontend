# 共享系统日志保全与当前官网：2026-10-08

当前正式OMS官网已切入原版[OMS Web](../../../oms-web/AGENTS.md)，状态 **已部署待验收**；本仓旧静态设计作为保全 / 同库源码回退来源，原工作区差异未并入本次文档提交。运行、备份、F保全和回退取[当前维护](../../../oms-web/doc_md/production-maintenance.md)，完整实际发布 / 失败取[正式收尾](../../../oms-web/doc_md/production-deployment-20261007.md#正式发布与收尾)。

用户明确授权“同意，保全核验后清理旧日志”。共享系统日志46原件已先完整保存并核验到F盘，随后才清理服务器旧日志；默认namespace480 MiB加既有OMS32 MiB，合计配置512 MiB。原件、完整gzip CRC / 全成员SHA、暂停 / 恢复边界和实际终态只取[系统日志原记录](../../../oms-web/doc_md/production-deployment-20261007.md#系统日志原件完整-f-保全与实际-512-mib-保留)。没有在服务器新增旧设计备份包，不把母库、个人原始行、日志或凭据放进Git。

个人站 / 共享Nginx / TLS / ACME规则保持，双站真实HTTP与资源核验取正式收尾；静态ACME404不声明实际续签。镜像记录：[Homepage](../../../homepage-website/doc_md/other/shared-journal-budget-20261008.md)。原版网站真实下载 / 账号 / OMS及P/C仍待真人验收，不由日志清理或网站上线关闭。
