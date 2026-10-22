# 2026-10-22 共享服务器安全维护镜像

晚间[全量修复](../../../oms-web/doc_md/architecture-security-review-20261022.md#全量修复实施)已接入客户端正规图片许可、归档/序列化/本机缓存及进程内BGA补丁，并更新两站构建依赖和F盘开发环境。服务器OMS/helper已用Python 3.12.15，独立PHP已用修复后的curl/OpenSSL；宝塔13.1.0/Python 3.13.16于21:13:53 CST切换通过。实际站点配置保持、旧PHP8.2仍masked，双站/双health/BT Nginx检查通过。旧面板加密原件及晚间新完整云备份、真实取回和离线数据库恢复均已验证，准确覆盖、数量与边界取唯一记录。Homepage安全提交`7d71c1f`已于21:19:58 CST循原hook部署；既有Header/CSS与检查脚本保持本地工作状态。

上午[全工作区安全筛查](../../../oms-web/doc_md/architecture-security-review-20261022.md)更新服务器Node、OMS / 备份 / 面板证书束与发布工具，当时未发布Homepage内容；图片库许可、原生BGA、面板Python及静态构建依赖当时仍待接续，现取上方晚间结果。原件与新鲜备份已在F核验，准确变更、短暂启动失败与修正、运行及云备份边界统一取该记录。

19:14 傍晚复核后另完成宿主机 NSS / c-ares 三包安全更新，原件与新包已取回 F 并核验，双站 / 双 health 通过，业务进程保持。该时点独立PHP的libcurl与应用/helper自带OpenSSL仍待处理，后续修复取上方晚间记录；当时版本、适用条件及云备份范围取[傍晚增量](../../../oms-web/doc_md/architecture-security-review-20261022.md#傍晚公告增量复核)，不将上午证据套用于晚间新增文件。

本轮已完成 PHP 漏洞修复、旧 BT PHP 停用、状态页访问限制、BT Nginx / TLS 库及 Ubuntu 安全包 / 内核更新；已实际重启并核对双站和业务服务，原应用与业务库保持。准确版本、启动修复、备份工具来源、恢复材料和验证边界只取[OMS Web 唯一记录](../../../oms-web/doc_md/php-security-maintenance-20261022.md)。

Homepage发布链和站点内容独立：上午共享主机维护没有执行`git push deploy main`，晚间仅通过该hook发布已验证的安全依赖增量。OMS仍为已部署待真人验收。SSH别名、配置保全、BT指定binary/config和双站核对继续适用。应用回退不得重新启用旧PHP，维护时按当前安全记录及[现行维护](../../../oms-web/doc_md/production-maintenance.md)核对，而不直接覆盖历史单元。
