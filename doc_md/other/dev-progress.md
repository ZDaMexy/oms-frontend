# OMS Website Other Progress

现官网运行与回退取 [OMS Web 维护](../../../oms-web/doc_md/production-maintenance.md#当前来源与运行位置)，Shiro 当前来源和功能取 [Shiro 生产记录](../../../../Shiro-Agent/doc_md/mainline/production.md)。Homepage 内容和发布独立，线上身份见本页版本记录。

## 最新共享设施变更

共享主机、SSH 别名、运行位置和备份链沿 [11 月 12 日迁移镜像](shared-server-migration-20261112.md)。OMS 当前路由取现官网维护，新版 Shiro 的 Homepage 精确回调与私人 HTTPS 取 [11 月 1 日入口镜像](shiro-qq-webhook-20261101.md#2156-新版共享入口)。各版本如何切换按 [日期化运维索引](README.md) 追溯。

## 最新安全维护

最新已登记的共享主机安全维护为 [11 月 19 日镜像](shared-server-security-20261119.md)，覆盖 Nginx、OMS Web、Shiro 运行时和重启后 glibc。更早的内核与 MPTCP 措施取 [11 月 12 日镜像](shared-server-security-20261112.md)，现用 Python 与 PHP 来源分别沿 [11 月 1 日](shared-agent-security-20261101.md)和 [10 月 22 日](shared-security-maintenance-20261022.md)记录。

## 最新存储维护

最近共享根盘读数及 OMS 发布前后本地备份见 [11 月 24 日官网发布](../../../oms-web/doc_md/site-design-20261124.md#生产发布)。当时已核的全备目录取 [11 月 22 日只读记录](../../../oms-web/doc_md/production-maintenance.md#2026-11-22-只读运行复核)，11 月 19 日对象密文回读取 [原收据](../../../oms-web/doc_md/production-maintenance.md#2026-11-19-依赖安全维护)。日志预算、冷迁出与历史对象定位从 [存储镜像](shared-storage-offload-20261102.md) 和 [分层归档](../../../../oms-server/oms-backend/doc_md/other/netdisk-layout-20261017.md) 进入。

[ECS CDT 升级](aliyun-backup-cost-20261017.md)已登记，实际抵扣仍待出账核对；新 Linux 整机启动及云端新范围解密也各有独立未完成门。上传 / 密文回读或 timer waiting 不能关闭这些门，Shiro 认知不进入追加式全备。

## 双站观察与证据日期

11 月 24 日 OMS Web 发布后，OMS 和 Homepage 根地址的 HTTPS 检查通过。裸仓与 Homepage 文件身份仍取 [11 月 22 日只读复核](changelog.md#2026-11-22-双站只读复核)。四域名、OMS 两个健康地址和协议的完整范围取 [11 月 19 日镜像](shared-server-security-20261119.md)。静态 ACME 路径及实际续期按各自证据，后续见[维护计划](dev-plan.md#后续维护)。

## 本地与生产版本

Homepage 最新实核部署裸仓仍为 10 月 22 日安全增量，公开文件证据见[只读复核](changelog.md#2026-11-22-双站只读复核)；本地页面和脚本取 [Homepage 主线状态](../../../homepage-website/doc_md/mainline/dev-progress.md)。OMS 的现运行包、旧设计保全和客户端代码各从所属入口读取，后续发布先核实际 current。

## 运行约定与历史

部署、SSH、Nginx 与续期边界见 [constraints](constraints.md)。设施证据按日期从 [other 索引](README.md)读取，旧状态取[运维历史](changelog.md)，总工作区文档同步沿 [Dev Bridge 历史](../../../../oms-server/dev_bridge_md/doc_md/mainline/changelog.md)。
