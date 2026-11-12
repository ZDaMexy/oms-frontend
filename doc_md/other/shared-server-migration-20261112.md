# 2026-11-12 共享主机整机迁移（阿里云 ECS 换机）

> 两站共用设施同文镜像。本页是本次迁移的权威记录；当前服务器 IP、SSH 别名与运行位置以本页为准，日期化旧记录保留原时点。OMS 应用身份、Shiro 业务与真人验收状态不因迁移改变。

## 迁移结果

2026-11-12 将承载 Homepage、OMS 官网 / 后端与 Shiro 的共享主机从旧 ECS 整机迁移到新 ECS，DNS 切换后旧机停止。四个域名（`zdamexy.work`、`www.zdamexy.work`、`oms.zdamexy.work`、`shiro.zdamexy.work`）公网解析全部指向新机，用户真人验收（三站 + QQ）通过。

| 项 | 旧机（已停止） | 新机（现权威） |
| --- | --- | --- |
| 公网 IP | 39.105.55.78 | 47.95.29.3 |
| 实例 ID / 名称 | i-2ze0hllh43qxm749tfyq / oms-server | i-2ze7ctyv63iajph1tj7h / zdamexy-server |
| 内网 IP | 172.23.161.40 | 172.23.161.41 |
| 规格 | ecs.e-c1m1.large 2C2G | ecs.e-c1m1.large 2C2G |
| 系统盘 | 20 GiB ESSD AutoPL | 40 GiB ESSD Entry |
| 公网 | 100 Mbps 峰值 / 按流量 | 3 Mbps 固定带宽 |
| 计费 / 到期 | 包月，2026-11-21 23:59:59 到期 | 99 计划 1 年 ¥99（续费同价），2027-11-12 到期 |
| 地域 / 可用区 | 华北2（北京）F | 华北2（北京）F |
| 系统 | Ubuntu 24.04 | Ubuntu 24.04 |

新机沿用旧机同一 VPC `vpc-2zekdxzn6gde26jw6obvc` 与交换机 `vsw-2zeix34elky3oqybw4pij`，迁移走内网。

## 方法与时序（CST）

整机镜像克隆 + 安静窗口最终同步 + SSH 端口隧道过渡 + DNS 切换，未重建环境、未改应用代码。

1. 16:47 旧机运行中创建自定义镜像 `m-2zed1ihxrn0fczalbqur`（极速可用）。
2. 新机更换系统盘为该镜像（40G 自动扩容），开机后**立即禁用新机 Shiro 与三个备份 timer**，防止与旧机双跑。
3. 预验证：五服务 active、双 health ok、`nginx -t` 通过、用户 UID/GID、UFW、acme 续期链、双库 integrity 均与旧机一致；内网 SSH 与公网 80/443 打通。
4. 17:03:20 安静窗口冻结：旧机停 Shiro / oms-ir / oms-ir-catalog / oms-web，禁用三个备份 timer。
5. 17:04:04–07 内网最终 rsync 八个根：`/var/lib/oms-ir`、`/var/lib/shiro-agent`、`/etc/shiro-agent`、`/www/wwwroot/zdamexy.work`、`/www/wwwroot/zdamexy.work.git`、`/var/backups`、`/etc/oms-full-backup`、`/var/lib/oms-full-backup`。新机双库 integrity ok（OMS 22 表）后起 OMS 三服务。
6. 旧机起 `migration-tunnel.service`：SSH 转发 loopback 8081/8082/9070/18775 → 新机内网，旧 Nginx 配置零改动，残留流量无缝过渡。17:04:51 起新机 Shiro。
7. ~17:09 DNS 四条 A 记录（@、www、oms、shiro）切到 47.95.29.3，TTL 600。
8. 17:07–08 新机备份链验证：本地日快照与百度网盘数据库云备均成功（OAuth / age 链可用）。
9. 用户真人验收通过；17:17 旧机停止，核实旧机下线、新机独撑、四域名 + 回调公网直达新机。

实际写入冻结约 70 秒（17:03:20→17:04:30）；隧道使缓存旧 IP 的客户端在 TTL 窗口内仍被转发到新机。

## 数据安全

新机为唯一活写入方，持有旧机冻结全量加迁移后新增：OMS 业务库迁移前后字节相同（241664 B，integrity ok）；Shiro 认知库由旧机 741376 B 增至新机 757760 B（含验收 QQ 写入）。旧机回收不丢产品数据。独立兜底：百度网盘云备、新机本地日快照（自定义镜像 `m-2zed1ihxrn0fczalbqur` 已于 2026-11-12 经用户决定删除）。

旧机运维日志（Nginx 访问日志、journal）按设计有界且不进备份，未迁移；旧机磁盘保留至 2026-11-21 作冷回退；自定义镜像及关联快照已于 2026-11-12 经用户决定删除，不再作为兜底。

## 当前运行约定

- SSH 别名 `zdamexy-srv` → 新机 47.95.29.3；`zdamexy-old` → 旧机 39.105.55.78（已停止，回退用）。迁移临时密钥 `migration_ed25519`（旧机）待清理。
- 运行身份原样保持：OMS `fb2493cd7027-6dddd07312e4`、Shiro `0b0dcbd`、BT Python 3.13.18、PHP 8.5、各用户 UID/GID、UFW、AppArmor。证书随镜像迁移，有效期 2027-01-30/31，acme.sh cron 续期链保持。
- Homepage 部署链（bare git + post-receive + Node 22.23.4 + 构建目录）随镜像迁移，`git push deploy main` 经 `zdamexy-srv` 在新机生效。
- 三个备份 timer 在新机 enabled/waiting（04:15/04:45/05:30 CST），旧机已禁用。

## 边界

本次为基础设施迁移，不是产品验收：OMS「已部署待真人验收」状态不变（用户做的是设施验收，完整产品真人门仍取[现行维护](../../../oms-web/doc_md/production-maintenance.md#真人验收)）；Shiro 自然聊天与人物表现状态不变，只取[Shiro 进度](../../../../Shiro-Agent/doc_md/mainline/progress.md)。未改应用代码、未发布网站内容、未改 TLS 续期配置。

证据：`oms-web/artifacts/server-migration-20261112/`（旧机基线、Phase B/C 收据）。