# 2026-10-22 共享服务器安全维护镜像

本轮已完成 PHP 漏洞修复、旧 BT PHP 停用、状态页访问限制、BT Nginx / TLS 库及 Ubuntu 安全包 / 内核更新；已实际重启并核对双站和业务服务，原应用与业务库保持。准确版本、启动修复、备份工具来源、恢复材料和验证边界只取[OMS Web 唯一记录](../../../oms-web/doc_md/php-security-maintenance-20261022.md)。

Homepage 发布链和站点内容独立，本轮没有执行 git push deploy main；OMS 仍为已部署待真人验收。SSH 别名、配置保全、BT 指定 binary / config 和双站核对继续适用。应用回退不得重新启用旧 PHP，维护时按当前安全记录及[现行维护](../../../oms-web/doc_md/production-maintenance.md)核对，而不直接覆盖历史单元。
