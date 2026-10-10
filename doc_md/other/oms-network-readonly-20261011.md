# OMS 网络审查与共享压缩优化（2026-10-11）

2026-10-11 02:22 CST，OMS网络审查只读确认共享主机：OMS current为 `a85aee3e3c45-b17354d27c6b`，IR / catalog / Web active / running、NRestarts0，共享可用内存795,975,680 B、swap使用0，两个公开主页HTTPS均200。Nginx原gzip / JSON与keepalive60秒已生效，公开sources压缩实体496 B、identity1847 B且解压相等。这次观察不刷新持续运行 / 恢复或真人日期。

02:45 CST公开CSS声明PNG和Homepage社交预览JPEG重复gzip仅省0.534% / 0.584%，解压后SHA相同；不推导全站速度或CPU百分比。02:52 CST将完整13件配置 / unit / manifest及元数据保全到F受保护目录后，只从共享Nginx的gzip类型表移除JPEG / GIF / PNG。宝塔Nginx配置检查 / reload及前后双站200通过；两实际图片恢复原实体且SHA相等，JSON继续gzip1847→496 B。TLS、域名、路由、服务预算和Homepage产品源码保持；配置SHA、原件、作用范围与仅恢复该行的回退步骤只维护在[OMS网络审查](../../../oms-web/doc_md/network-service-review-20261011.md#共享图片gzip优化已生效)。

根可用磁盘4,495,077,376 B，扣除已核恢复预留4,402,384,384 B仅余92,692,992 B（约88.4MiB）；发布须按新包 / 展开 / 保全 / 回退重新预算，不能删除所需回退包或自行扩盘。没有访问母库、个人原始行、凭据或业务备份内容。首个SSH连接超时、缺rg及随后只读成功分别保留。

OMS网页 / Backend / 客户端的本轮源码、请求量、软件验证与未上线范围仅维护于[OMS网络审查](../../../oms-web/doc_md/network-service-review-20261011.md)，原件在客户端 `artifacts/network-review-20261011/production-readonly.json`。当前准确运行与未完成门仍取[维护说明](../../../oms-web/doc_md/production-maintenance.md)。

共享事实与[另一站镜像](../../../homepage-website/doc_md/other/oms-network-readonly-20261011.md)同步。
