# 调研与运维

- [2026-10-22 共享服务器安全维护](shared-security-maintenance-20261022.md)：PHP / Nginx / 内核修复、真实重启及恢复材料；应用来源保持。

本目录保留旧 OMS 官网运维历史与两站共用设施镜像；现官网已交接到 OMS Web，Homepage 的内容与发布独立。

- [constraints](constraints.md)：部署、SSH、Nginx、TLS 与授权边界。
- [dev-progress](dev-progress.md)：当前维护入口、双站证据日期与本地 / 生产版本边界。
- [dev-plan](dev-plan.md)：下一次发布和受影响设施的复核安排。
- [changelog](changelog.md)：历史部署、续期、迁移与文档复核。
- [现行 OMS 维护](../../../oms-web/doc_md/production-maintenance.md)：当前准确来源、备份、同库回退与未完成真人门；下方日期化记录只证明各自时点和范围。

共享服务器事实与 [另一网站 other](../../../homepage-website/doc_md/other/README.md) 保持镜像；任一侧变化同步另一侧，不以单边记录作完整结论。采纳调研按实际受影响项目回写主线。

## 日期化共享设施证据

- [2026-10-17 网盘分层归档](../../../../oms-server/oms-backend/doc_md/other/netdisk-layout-20261017.md)：当前维护工具、46原文件归位、日期/类别/版本目录及新旧路径取回。

- [2026-10-17 阿里云出网与备份扩围调研](aliyun-backup-cost-20261017.md)：真实账单、ECS CDT已升级和内地20 GB/月共享额度；已采用全量恢复材料方案，实际验证/调度取Backend唯一记录。

- [2026-10-17 OMS单向加密网盘备份](oms-netdisk-backup-20261017.md)：本人OAuth、真实云端及本机解密验证通过，timer启用；双站有限检查。

- [2026-10-16 OMS闲置材料清理](oms-storage-cleanup-20261016.md)：F完整保全后实际退役、空间净增、正式服务保持和双站有限读取；回放/网盘仅评估。

- [2026-10-11 OMS 原生服务配套](oms-native-services-20261011.md)：当次原生内容、三服务同库往返、两备份、双站与精确定点清理。
- [2026-10-11 OMS 网络与共享压缩优化](oms-network-readonly-20261011.md)：当次双站 / 图片 gzip、实际网络部署、同库往返与备份 F 保全。
- [2026-10-09 OMSIR 完整成绩与选项发布](oms-score-display-20261009.md)：附加展示、主 IR / 网页精确绑定、备份、回退与有限资源。
- [2026-10-09 OMS LR2IR 普通来源发布](oms-lr2ir-source-20261009.md)：来源合并、共享绑定、备份、回退与预算。
- [2026-10-09 OMS 排行榜展示发布](oms-ranking-layout-20261009.md)：成绩布局、共享绑定、完整备份与历史运行包 F 保全。
- [2026-10-09 OMS 表内难度筛选发布](oms-table-levels-20261009.md)：等级选择、网页绑定、备份与当次盘账。
- [2026-10-09 OMS 难度表浏览发布](oms-bms-tables-20261009.md)：选表导航、网页版本绑定与双站 / 备份 / 当次预算。
- [2026-10-09 OMS 网页审改发布](oms-web-copy-review-20261009.md)：OMS 资源目录切换、配置 F 保全、双站核对与当次范围。
- [2026-10-08 原版官网与共享日志](shared-journal-budget-20261008.md)：官网接续、46 件原日志 F 保全及 default480＋OMS32 MiB 的合计 512 MiB 配置。
- [2026-10-06～07 旧静态维护镜像](oms-player-site-infrastructure-20261006.md)：当次来源、预算和回退操作，不作为现原版站步骤。
- [2026-10-04 社区门户上线](community-infrastructure-20261004.md)：当次静态来源、双站与手机检查、一致备份及 schema2 回退边界。
- [2026-10-03 IR 生产试运行](ir-infrastructure-20261003.md)：共享配置备份 / 检查、双站访问、独立运行预算、备份及保留门。

## 2026-10-03 共享主机容量观察

经已有 SSH 别名只读取证：2 个逻辑 CPU、可见内存 1612.98 MiB，根盘剩余 8.7G；2026-09-26 至 10-03 的 1091 个约 10 分钟样本中，最低可用内存 890.91 MiB、swap 使用 0。完整测量与 OMS IR 的负载假设见 [容量基线](../../../../oms-server/oms-backend/doc_md/other/server-capacity-baseline-20261003.json)。没有安装依赖、改配置、部署或压力测试；该观察不刷新网站版本 / 部署验收，也不证明新服务容量。两站公开首页各单次 GET 返回 200，不能代替浏览器或持续可用性验证。

同日后续用户控制台截图确认 `ecs.e-c1m1.large`、2 vCPU / 2 GiB、20 GiB 系统盘，以及公网峰值 100 Mbps / 按使用流量计费。配置事实已单独补入上述容量基线，未覆盖此前实测值或测量时间；该规格使用共享 CPU，公网峰值不保证持续可得。2026-10-17 后续[CDT与全备实施](aliyun-backup-cost-20261017.md)补齐单价、已升级状态和独立备份维护；未重测本节主机完整容量，原HTTP服务保持。
