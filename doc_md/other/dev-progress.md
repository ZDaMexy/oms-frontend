# OMS Website Other Progress

最近已登记的 OMS 应用为 **2026-11-04 05:18 CST 玩家服务发布**；当前运行与回退取 [OMS Web 维护](../../../oms-web/doc_md/production-maintenance.md#当前来源与运行位置)。Homepage 内容与发布独立，Shiro 当前业务来源取[本仓生产记录](../../../../Shiro-Agent/doc_md/mainline/production.md)。本页复用已有收据，没有在本次文档审查中连接生产。

## 最新共享设施变更

11 月 4 日四个 OMS 单元与 Nginx include 的发布 / 缓存路径随应用切换，受修复运行时、安全限制、TLS / ACME 与 Homepage 源码 / 主进程保持；实际配置核验、重载及双站读取取[共享镜像](shared-oms-player-services-20261104.md)。

11 月 1 日新版 Shiro 的 Homepage exact 回调与私人 HTTPS 沿[入口镜像](shiro-qq-webhook-20261101.md#2156-新版共享入口)。当天早期旧 Bot 的部署、维护重启与后来新 Bot 的切换属于不同操作；旧线不作为当前运行入口。

## 最新安全维护

最近已登记的运行时与主机安全维护取 [11 月 1 日镜像](shared-agent-security-20261101.md)，10 月 22 日修复 / 恢复材料取[原日期镜像](shared-security-maintenance-20261022.md)。当时“Web npm 修复已提交未部署”、新全备待完成和四 timer 的读数保留在原报告，不作为后续应用发布或现行定时器清单。系统 / 上游未完成项依原证据保留，本次没有重做漏洞扫描。

## 最新存储维护

11 月 2 日日志预算调整与历史原件冷迁出取[存储镜像](shared-storage-offload-20261102.md)；11 月 4 日新应用全备、临时发布物清理及最近已登记盘账取 [OMS Web 收据](../../../oms-web/doc_md/oms-player-services-20261104.md#云备份与发布清理)。10 月 17 日[分层归档](../../../../oms-server/oms-backend/doc_md/other/netdisk-layout-20261017.md)维护目录 / 定位方法及原恢复证据，不能继续当作最新成功批次。

[ECS CDT 升级](aliyun-backup-cost-20261017.md)已登记，实际抵扣仍待出账核对；新 Linux 整机启动及云端新范围解密也各有独立未完成门。上传 / 密文回读或 timer waiting 不能关闭这些门，Shiro 认知不进入追加式全备。

## 双站观察与证据日期

最近共享应用发布的双站 HTTPS 200 与 CSS 完整 SHA 核对为 **2026-11-04**，[镜像](shared-oms-player-services-20261104.md)链接准确来源。11 月 1 日两次 Bot 入口切换和维护重启、10 月 22 日安全维护及更早公开检查只证明各自时点；有限读取不签普通浏览器、长期性能或真实用户路径。

静态 ACME 路径保留 10 月 8 日[正式收尾](../../../oms-web/doc_md/production-deployment-20261007.md#正式发布与收尾)范围；Shiro 子域的首次签发 / 续期配置取 11 月 1 日入口镜像。证书可用、安装、DNS 与实际续期是不同证据，不因本轮整理刷新。后续按[计划](dev-plan.md#后续维护)核受影响项。

## 本地与生产版本

Homepage 最近已登记生产为 10 月 22 日安全增量 `7d71c1f`；本地页面 / 脚本与原验证取 [Homepage 主线状态](../../../homepage-website/doc_md/mainline/dev-progress.md)。源码推送不改变部署 hook 水位。OMS 已发布来源与客户端开发源码、旧设计保全分别维护；后续发布仍先核实际 current。

## 运行约定与历史

部署、SSH、Nginx 与续期边界见 [constraints](constraints.md)。日期化设施证据从 [other 索引](README.md)进入；被本页取代的旧现状和本轮修正取[运维历史](changelog.md#2026-11-05-共享设施文档现状复核)。本次同步不改变共享配置或网站产物，治理总范围取 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/changelog.md#2026-11-05-全工作区进度与文档记忆审查)。
