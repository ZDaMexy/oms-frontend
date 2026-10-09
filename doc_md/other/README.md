# 调研与运维

- [2026-10-09 OMS 表内难度筛选发布](oms-table-levels-20261009.md)：等级选择、网页绑定、备份与更新后盘账。
- [2026-10-09 OMS 难度表浏览发布](oms-bms-tables-20261009.md)：选表导航、网页版本绑定与双站 / 备份 / 当前预算。
- [2026-10-09 OMS 网页审改发布](oms-web-copy-review-20261009.md)：OMS资源目录切换、配置F保全、双站核对与本轮范围。
- [2026-10-08 原版官网与共享日志](shared-journal-budget-20261008.md)：当前官网接续、46件原日志 F 保全及 default480＋OMS32 MiB 的合计512 MiB配置。
- [现行OMS维护](../../../oms-web/doc_md/production-maintenance.md)：schema3原版站的准确来源、备份、同库回退与未完成真人门。
- [2026-10-06～07 旧静态维护镜像](oms-player-site-infrastructure-20261006.md)：保留当次来源、预算和回退操作，顶栏指向当前接续。
- [2026-10-04 社区门户上线](community-infrastructure-20261004.md)：当次静态来源、双站与手机检查、一致备份及 schema2回退边界。

- [2026-10-03 IR 生产试运行](ir-infrastructure-20261003.md)：共享配置备份 / 检查、双站访问、独立运行预算、备份及保留门。

记录本项目的部署与服务器运维，以及尚未进入主线的具体调研。

- [constraints](constraints.md)：部署、SSH、Nginx、TLS 与授权边界。
- [dev-progress](dev-progress.md)：当前OMS接续与旧日期的双站观察、本地 / 生产差异。
- [dev-plan](dev-plan.md)：当前维护入口、独立Homepage发布与旧OMS计划的适用范围。
- [changelog](changelog.md)：历史部署、续期和迁移记录。

共享服务器事实与 [另一网站 other](../../../homepage-website/doc_md/other/README.md) 保持镜像，这是两个独立项目共用设施所需的记录；任一侧变化同步另一侧。调研结论采纳后回写本项目主线。

## 2026-10-03 共享主机容量观察

经已有 SSH 别名只读取证：2 个逻辑 CPU、可见内存 1612.98 MiB，根盘剩余 8.7G；2026-09-26 至 10-03 的 1091 个约 10 分钟样本中，最低可用内存 890.91 MiB、swap 使用 0。完整测量与 OMS IR 的负载假设见 [容量基线](../../../../oms-server/oms-backend/doc_md/other/server-capacity-baseline-20261003.json)。没有安装依赖、改配置、部署或压力测试；该观察不刷新网站版本 / 部署验收，也不证明新服务容量。两站公开首页各单次 GET 返回 200，不能代替浏览器或持续可用性验证。

同日后续用户控制台截图确认 `ecs.e-c1m1.large`、2 vCPU / 2 GiB、20 GiB 系统盘，以及公网峰值 100 Mbps / 按使用流量计费。配置事实已单独补入上述容量基线，未覆盖此前实测值或测量时间；该规格使用共享 CPU，公网峰值不保证持续可得，出网流量单价与抵扣尚未确认。没有再次访问或更改生产服务。
