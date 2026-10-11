# OMS 原生在线服务与共享运维（2026-10-11）

2026-10-11 16:34:47 CST已切入OMS原生在线服务配套，状态**已部署待真人验收**。唯一当前运行 / 完整资源 / 两备份 / 同库回退及具体失败只取[OMS维护](../../../oms-web/doc_md/production-maintenance.md)与[本轮发布](../../../oms-web/doc_md/client-native-services-20261011.md#生产发布与闭环)；客户端来源先经Client Bridge再由Dev Bridge采用，不把网站更新当成Windows客户端发行。

共享设施只更新OMS include的准确版本和/client-content精确PHP位置、IR / catalog / Web / cache四unit绑定，发布前后13件原件 / metadata已在受保护F盘逐件核对。固定维护D1/22b、配对站点、Homepage / TLS / ACME保留原字节，BT指定配置检查 / init重载及两站实际HTTPS通过；Homepage本地内容不在本轮部署，当前生产内容水位仍沿其自身证据。

三服务同一schema3业务库新 `824de121a686-494932756b74` → 直接上一版 `cc37bdb8f3b4-f9a5afd99939` → 新实际往返通过；全部当前 / 上一版 / 旧设计 / 固定维护运行目录保留。未来操作重新取得新鲜备份与配置，按现行维护同时切换HTTP / catalog / PHP和正式缓存，不能仅切链接、用旧raw覆盖数据或盲盖本轮旧原件。

本轮90秒两路匿名共载、普通PHP45 / IR45、公开41＋内容8项及10scope往返哈希通过；纯内容public300 / ETag空体304，匿名不携带账号。没有生产真人写入 / 大历史投影GET；有限窗口不签50人持续容量或长期成本下降，旧1,800秒 / 两空恢复保留2026-10-08日期。

安全清理在完整F字节 / metadata / 无引用核验后：9个旧incoming取证目录386文件与2闲置FIFO metadata、49个已结束瞬态取证unit定义释放根盘14,602,240 B；新发布完成后907个unit / FD / SHA再次核验，精确重复上传gzip释放73,707,520 B。两步观察合计88,309,760 B（84.22 MiB），不算安装 / 日志变化后的净差。收尾根盘4,488,687,616 B，原恢复预留4,402,384,384 B、余86,303,232 B。库、备份、当前 / 回退、固定维护和F包都保留；发布时本机清理遭自动审批拒绝的原记录保留，随后用户已清理12个基线bin / obj并复核全部不存在，保全与容量口径取[客户端清理补记](../../../../oms/doc_md/subline/P3-IR/CHANGELOG.md#2026-10-11用户清理基线编译输出复核)，不计入上述服务器清理量。

固定helper发布前后各新鲜9,063 B gzip / 241,664 B raw，准确来源 / Invocation和全件F核验沿唯一发布记录；终态峰不可读如实记录。timer enabled / active / waiting，收尾下一次 `Mon 2026-10-12 04:17:32 CST`，不承诺以后秒数。

本轮证据根 `F:/zdamexy-workspace/websites/oms-web/artifacts/native-services-20261011/`，配置 / raw / 退出unit原件均受保护、不进Git。此前网络发布镜像保留各自清理与来源，不合并本轮收益；未查DNS或改证书 / 续期。普通浏览器 / 原生客户端真实窗口、IME / DPI、账号 / 社区写入、原包入库 / 整曲和P-C / Windows发行仍由用户签收。
