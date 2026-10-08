# OMS Website Other Constraints

2026-10-08 原版OMS Web已部署 / schema3，状态“已部署待验收”。独立PHP、BT配对路由与同库回退已有实际证据；当前运行、固定维护与旧设计回退的准确来源和步骤只取[现行维护](../../../oms-web/doc_md/production-maintenance.md)。旧设计及实际配置备份只放F，不在服务器另打旧站包、不升级共享PHP；共享日志保全与512 MiB配置取[镜像记录](shared-journal-budget-20261008.md)。

## 2026-10-04 OMS 社区发布边界

本节保留2026-10-04当次schema2静态社区边界：当时门户与IR使用 `/opt/oms-ir/current/web` 精确静态路由及同源Backend API，旧整站检出hook不用于当次发布；Homepage网站根和发布链独立。共享配置变更前备份、BT Nginx检查后重载及双站 / TLS / 续期入口核对仍为共同边界。旧schema2不能盲切原v1或以发布前快照覆盖新增内容；当次来源见[社区发布记录](community-infrastructure-20261004.md)，不作为现原版PHP与schema3回退步骤。

- `other/` 中的调研或杂项不能替代主线结论；一旦影响计划、状态、约束或验证，必须回写 `mainline/`。
- 服务器 `39.105.55.78` 同时承载 OMS 官网与 Homepage；两者网站根、部署仓库和发布流程独立。
- 服务器连接只使用 SSH 别名 `ssh zdamexy-srv`，不得改用裸 IP 直连。
- 2026-10-04旧静态社区与IR共用Backend不可变目录，Nginx从 `/opt/oms-ir/current/web` 提供指定页面和资源，来源见[当次社区记录](community-infrastructure-20261004.md)。该位置不代表现原版PHP路由；旧 `git push deploy main` 整站检出链只保留历史，不用于当前官网。
- 生产 push 必须由用户明确授权；修改共享 Nginx、TLS 或服务配置前必须备份，配置变更后、重载前执行对应配置检查（BT Nginx 使用 `/www/server/nginx/sbin/nginx -t`），并在变更前后同时验证两个站点。
- BT 的 Nginx 重载使用 `/etc/init.d/nginx reload`，其二进制与主配置是 `/www/server/nginx/sbin/nginx`、`/www/server/nginx/conf/nginx.conf`，不得误用系统另一套 `/usr/sbin/nginx`。
- 证书位于 `/www/server/panel/vhost/cert/<域名>/`；`/.well-known/` 保留 HTTP 续期入口，证书与续期链路不得被站点发布破坏。服务器版本与当前证书有效期见 [最近核验](dev-progress.md)，既有部署约定不代表每次已重验。
- 外部信息应注明来源、日期与适用范围；未经确认的想法不得直接进入正式计划。
- 涉及接口契约或客户端事实时，分别同步 `F:\zdamexy-workspace\oms-server\dev_bridge_md` 与 `F:\zdamexy-workspace\oms-server\oms_client_bridge_md`。
