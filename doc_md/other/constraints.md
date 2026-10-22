# OMS Website Other Constraints

2026-10-22 起共享主机安全配置和恢复范围取[安全维护镜像](shared-security-maintenance-20261022.md)。Nginx 的 systemd 服务现已绑定 BT binary / config / PID；下方“未升级 BT PHP”等表述属于 10 月 8 日当次范围，当前旧 PHP8.2 已停用。禁止以应用回退覆盖受修复运行时或安全配置。

2026-10-08 原版OMS Web已部署 / schema3，状态“已部署待验收”。独立PHP、BT配对路由与同库回退已有实际证据；当前运行、固定维护与旧设计回退的准确来源和步骤只取[现行维护](../../../oms-web/doc_md/production-maintenance.md)。当次旧设计及实际配置备份只放F，未在服务器另打旧站包或升级共享PHP；共享日志保全与512 MiB配置取[镜像记录](shared-journal-budget-20261008.md)。

## 2026-10-04 OMS 社区发布边界

本节保留2026-10-04当次schema2静态社区边界：当时门户与IR使用 `/opt/oms-ir/current/web` 精确静态路由及同源Backend API，旧整站检出hook不用于当次发布；Homepage网站根和发布链独立。共享配置变更前备份、BT Nginx检查后重载及双站 / TLS / 续期入口核对仍为共同边界。旧schema2不能盲切原v1或以发布前快照覆盖新增内容；当次来源见[社区发布记录](community-infrastructure-20261004.md)，不作为现原版PHP与schema3回退步骤。

## 共享运维边界

- `other/` 中的调研或杂项不能替代主线结论；一旦影响计划、状态、约束或验证，按实际受影响项目回写主线，当前官网结论归 OMS Web。
- 服务器 `39.105.55.78` 同时承载 OMS 官网与 Homepage；两者网站根、部署仓库和发布流程独立。
- 服务器连接只使用 SSH 别名 `ssh zdamexy-srv`，不得改用裸 IP 直连。
- 2026-10-04旧静态社区与IR共用Backend不可变目录，Nginx从 `/opt/oms-ir/current/web` 提供指定页面和资源，来源见[当次社区记录](community-infrastructure-20261004.md)。该位置不代表现原版PHP路由；旧 `git push deploy main` 整站检出链只保留历史，不用于当前官网。
- 生产 push 必须由用户明确授权；修改共享 Nginx、TLS 或服务配置前必须备份，配置变更后、重载前执行对应配置检查（BT Nginx 使用 `/www/server/nginx/sbin/nginx -t`），并在变更前后同时验证两个站点。
- BT 的 Nginx 重载使用 `/etc/init.d/nginx reload`，其二进制与主配置是 `/www/server/nginx/sbin/nginx`、`/www/server/nginx/conf/nginx.conf`，不得误用系统另一套 `/usr/sbin/nginx`。
- 证书位于 `/www/server/panel/vhost/cert/<域名>/`；`/.well-known/` 保留 HTTP 续期入口，证书与续期链路不得被站点发布破坏。服务器版本与已安装证书元信息取 [2026-09-09 历史观察](changelog.md#2026-09-09-双站观察与版本差异)，后续双站公开证据取 [进展](dev-progress.md#双站观察与证据日期)；旧有效期与静态路径检查不代表当前证书或实际续期已重验。
- 外部信息应注明来源、日期与适用范围；未经确认的想法不得直接进入正式计划。
- 私钥、令牌、`.env`不向聊天、公共日志或Git输出；仅已授权的[完整恢复材料备份](../../../../oms-server/oms-backend/doc_md/other/full-backup-20261017.md)在受限流程读取指定运行秘密并直接加密，恢复私钥仍只在受保护F盘。
- 涉及接口契约或客户端事实时，分别同步 `F:\zdamexy-workspace\oms-server\dev_bridge_md` 与 `F:\zdamexy-workspace\oms-server\oms_client_bridge_md`。
