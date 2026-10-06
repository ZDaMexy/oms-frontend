# OMS 玩家网站共享主机维护镜像（2026-10-06）

## 2026-10-07 04:25页面发布

当前OMS为 `d1f052b93a81-e6fdf914cb04` / schema3，已部署待验收。新客户端账号UI软件来源6168791与服务完整门原客户端来源234a9ff分记；Website运行源e6，Backend仍d1，48服务 / 插件叶和只读公开投影不变。本次没有修改Nginx、TLS、续期、Homepage内容或四份安装单元，六份原配置SHA保持。

137次公开GET / 770检查、54次当前缓存请求 / 158检查、46次真正旧22b校验值请求、完整138叶源码提供及正式备份 / 两新空兼容恢复均通过；两站TLS与指定缺失ACME探针保持原状态，不宣称实际续期。准确当前来源、原失败、工具限制与真人路径取[页面核验](../../../oms-website/doc_md/other/oms-deai-verification-20261007.md)，维护取[当前运行说明](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-maintenance-20261006.md)。当前前端回退目标22b，同库重启主 / catalog，Nginx保持；下方旧b520 / 22b往返、全量与预算均是前次实测记录，不改签为本次重跑。

## 前次完整运行门与共享设施记录

本说明在OMS Website和Homepage同内容维护。2026-10-07更新实际运行水位：`d1f052b93a81-22b4ee54f237` / schema3 **已部署待验收**，client runtime234a9ff未变；原b520为本次已实测同库回退的真实旧HTTP / 网站来源。以前25d / 37f / 3ab prepared与失败水位是历史，不代表当前线上。原失败和取证日期不改。

当前精确来源、全量 / 1,800秒 / 新空恢复、受保护F原件、真实资源、激活和实际source-only回退、公开路由 / 缓存 / 双站与三阶段备份只取 [Backend最新验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md#生产发布与维护收尾)。固定维护helper、日备份 / 每周受保护外取、恢复与源码回退的具体操作取 [当前运行说明](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-maintenance-20261006.md)；页面 / 原包和真人路径取 [Website验证](../../../oms-website/doc_md/other/oms-player-site-verification-20261005.md#内容维护真人路径与未完成项)。

## 共用设施的实际范围

只有OMS extension `/www/server/panel/vhost/nginx/extension/39.105.55.78/oms-ir.conf` 换成与新release配对的6,892 B版本；共享vhost `/www/server/panel/vhost/nginx/39.105.55.78.conf` 保持原3,195 B / SHA431b56a6…。root实际BT nginx -t、/etc/init.d/nginx reload通过。Homepage仍由 `/www/wwwroot/zdamexy.work` 原独立Astro部署提供；没有触发Homepage内容发布或改TLS / 续期。

最终实际公开156 GET / 880检查通过：两站TLS主页与Homepage基线内容保持，指定缺失ACME路径仍404；这不声明实际ACME续期已执行。OMS精确白名单网页 / assets / AGPL / 对应修改源码 / 五插件全字节通过，旧八ETag / IMS返回新200，当前ETag空304。普通浏览器视觉和刷新因工具超时仍待真人，不用Ctrl+F5或HTTP字节代签。

## 当前预算、备份与回退

主IR仅127.0.0.1:8081，High384 / Max500MiB、CPU150%、swap0；catalog仅127.0.0.1:8082，High80 / Max96MiB、CPU25%、swap0，独立UID996 / GID986。实际catalog namespace受限身份对live / 备份目录 / 指定档案open均EACCES13；不透传账号、Cookie、Authorization或玩家IP。批准外源为Ginger / 616 BMS与Sayobot原生mania，只做有界元数据及批准原站307，谱包正文不代理 / 托管。

备份单元固定d1 release的backup.sh与helper，Max128MiB / CPU50% / swap0，实际Accountingyes；旧b520 HTTP运行期间也保留新维护来源。新、旧、回新三个实际正式快照完整对已受保护F外取并全CRC / raw / 22表验证；两次真正新空生产恢复通过，未覆盖live。最后observer漏采prune子PID的false原样保留，实际正式workerExit0与完整对独立核验分别成立，不造PID / 数据 / 成功flags。

原timer已恢复enabled / active / waiting，00:56CST实测下一次04:17:46，之后取实时systemctl值；全部本轮临时90-*与任务创建50-MemoryAccounting配置已按身份撤销，原安装单元未改。维护前暂停timer并等已经运行的备份完成；七日prune与至少每周受保护外取继续，只有本次外取已经完成，未新增自动外取任务。

00:55CST实测可用内存约870MiB、loadavg0.05 / 0.03 / 0.02、swap使用0；磁盘4,777,447,424B，按八对真实 / 批准最大gzip与sidecar、临时raw962,183,168B、系统2GiB共预留3,433,858,016B，另余1,343,589,408B。固定证据已计入；后续实际live / 来源增长或保留更多raw重测，不购买 / 扩盘。旧十万合成门不能代签25M档案。

源码回退只切真实b520 HTTP / 网站与准确include，继续同一当前库和d1维护pin；停止catalog后先收实际加载终态，再disable，停止主服务后采有序关闭日志，再切来源。新源码返回在readiness前清算dirty。实际新→旧→新往返、原IR / 社区 / 历史读取与非配额全表指纹保持，只有真实GET更新rate_limits。检查误判曾导致停服，其原失败和修复收据取Backend，不宣称不中断。不得用旧整套activator覆盖新备份单元或恢复上线前旧raw来回退页面。

## 仍需真人签收

普通浏览器视觉 / 刷新、真实原包下载入库、账号与密钥、原lazer登录 / 本人UUID / 旧待交归属、同MD5来源 / 同条件 / 首尾页两端一致、固定宿主真实交分 / 原生读榜与30玩法矩阵、首次真人社区仍待。先OMS＋全量公开历史＋ED7K先导P，再完整C，均未闭环；用户VS Code非调试启动，无Windows发行包 / publish / 安装副本。地力 / komasan后置，PP独立规则后续优先讨论，不把累计分叫能力值。默认离线 / 按需请求、无聊天 / presence / 多人。

两份镜像：[OMS Website](../../../oms-website/doc_md/other/oms-player-site-infrastructure-20261006.md) / [Homepage](../../../homepage-website/doc_md/other/oms-player-site-infrastructure-20261006.md)。本次仅更新OMS共享设施记录，Homepage原未提交工作保持；母库、个人原始行、快照或凭据不入Git / 公开源码，私有目录不扫描。
