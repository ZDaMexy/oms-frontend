# OMS 玩家网站共享主机维护镜像（2026-10-06）

本说明在 OMS Website 与 Homepage 的 `doc_md/other/` 同内容维护，记录本轮玩家网站的共享设施边界与维护步骤。2026-10-06 是文档录入日期，不刷新已有取证时间，也不表示新网站已部署。本次仅整理文档；准备、量测、恢复、激活及公网验收由根执行者按实际报告签收。

共同操作入口为 [Backend 发布与维护](../../../../oms-server/oms-backend/deploy/README.md)。本轮服务、查询、资源、来源隔离及恢复水位取 [Backend 玩家网站验证](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-verification-20261005.md)，页面、源码来源、浏览器与真人路径取 [Website 玩家网站验证](../../../oms-website/doc_md/other/oms-player-site-verification-20261005.md)。产品范围取 [共同采用合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md)；这些入口的后续实测结论须按来源与适用版本读取，不能从历史成功推定新候选通过。

## 当前运行来源与待激活范围

| 对象 | 本镜像录入时的实际状态 |
| --- | --- |
| 真正线上 `current` | 本轮准备与实测期间始终为 `/opt/oms-ir/releases/b520bcb99015-5d0531c22423`，schema 3 |
| 原3ab玩家网站候选 | 仅prepared未激活；正式全量 / 原生 / 1,800秒与两恢复成功分项完成，原七日空间及包装总门false保留 |
| 本人SQL修复候选 | Backend实际25d，Web静态运行仍0cac原字节；新规模 / 重叠 / 两恢复 / 空间与发布尚待，精确新包身份只取Backend核验 |
| 新玩家网站实现 | 本地实际 fork 固定 osu-web `2c596022a1345fbed288978e7fa5304df0359f50` 的 React / Less 视图及 Blade 页面结构；继续由 OMS FastAPI / SQLite 承载真实账号、成绩和社区 |
| 发布形态 | 精确静态资源、同源 API 与不可变 release；生产不运行完整 ppy 服务或常驻 Node 前端 |

b520 的完整 Backend / Website / OMS 来源、当次发布时间与既有人工缺口取 [实际账号专项发布记录](../../../oms-website/doc_md/other/osu-web-lazer-account-verification-20261005.md)。新候选的完整提交、插件 / SDK 证据、同发布源码 offer、文件指纹与公开投影身份以实际 release / source manifest 和上述 Backend 验证为准。历史 ecca、旧 schema 2、历史审计提交和后续文档 HEAD 都不替换这份运行来源。

当前 prepared 的 Backend 为 `3abf9aa3741559f2f6fad310429b5ec9a490f349`，Website 仍 `0cac041e0cd1`，Client 来源仍 `234a9ff`，客户端文档 HEAD `f05` 不代替运行源码。runtime 登记78项 / source offer登记138项，其中 Web source-only69项，全部准确路径及指纹以 manifest 为准，开发源码不作生产路由。批准维护代码来自这个3ab候选的 backup.py / backup.sh 与 pinned `oms-ir-backup.service`；`53ea4e…` 仅是保持不变的 host_player_probe.py 验收脚本指纹，不是维护代码来源。这些记录不表示已替换生产 b520 或其日备份单元。

正式 `450d13d` [公开统计读取修订](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-player-site/constraints.md#2026-10-06-公开统计读取修订)采用必要、可重建读模型，保持schema3核心行、接口、精确数学和原预算。当前写事务提交前维护，旧普通SQLite写入保留dirty，新runtime在readiness前修复，失败回滚；全派生表 / 索引 / trigger进入备份与完整指纹。b520旧维护工具不能维护这些扩展，HTTP / 网站回退须保留批准3ab维护代码，并分别绑定真实运行release与维护来源。

本轮继续默认离线，由玩家主动打开、搜索、选择或交分触发请求。批准范围只有 Ginger Rush / 616 的公共 BMS 与 Sayobot 的原生 mania 有界元数据，以及核验后返回批准原站的 `307` 下载跳转。OMS 不托管或转发谱包、音频、BGA 正文，不把跳转或首字节连通性当作整包下载 / 入库完成；没有聊天、presence 或多人服务。

## 服务预算与公共元数据隔离

| 服务 | 维护边界 |
| --- | --- |
| 主 IR | 单 worker、`127.0.0.1:8081`；MemoryHigh 384 MiB / MemoryMax 500 MiB / swap 0 / CPUQuota 150%，继续保留 loopback 网络隔离 |
| 候选 catalog | `127.0.0.1:8082`，独立 non-login `oms-ir-catalog` 身份；本轮隔离取证 UID 996，MemoryHigh 80 MiB / MemoryMax 96 MiB / swap 0 / CPUQuota 25%；尚未生产启用 |
| catalog 受保护路径 | 必须拒绝访问 `/var/lib/oms-ir`、`/var/backups/oms-ir`、`/opt/oms-ir/archives`，无账号库、会话、Cookie 或 Authorization 透传 |
| 请求与缓存 | 固定批准目标，两并发、不排队，20 秒操作截止；规范元数据缓存限 8 MiB / 128 条 / 120 秒，不接受任意 URL 代理或后台持续扫描 |

预算是约束，不是容量结论。根须按实际候选核对 PID / cwd / argv、UID / GID、mount namespace、cgroup 限额与事件、受限身份拒读、超时 / 部分失败和剩余内存。单次通过的隔离观察或旧查询记录不能代签后续 SQL 候选的全部门。真实 RSS、p95、限流拒绝、写读并存、全量公开历史共用及共享主机余量只引用 Backend 实测，不以配置数值或十万合成 live 样本证明千万级档案容量。

元数据来源失败如实保留；BMS 原 MD5 / 可知 SHA256 与包身份、Sayobot 原 sid / bid 和未知字段不互相伪造关联。同名不合并来源或历史账号。新增来源、live、投影或同时保留 raw 恢复库须重新计账；资源不足先给出实测方案，不自行购买或扩盘。

## 共享 Nginx、Homepage 与缓存边界

本轮共享配置范围仅为 `39.105.55.78` 的 OMS extension：

`/www/server/panel/vhost/nginx/extension/39.105.55.78/oms-ir.conf`

只使用既有 `ssh zdamexy-srv` 入口。OMS 页面及白名单资源由 `/opt/oms-ir/current/web` 精确提供；开发目录、未登记静态文件和用户数据不作为生产路由。catalog 仅自己的同源 API 路由接独立 worker，原账号与成绩接口仍接主 IR，不能把请求或凭据转给外源进程。

Homepage 保持独立的 `/www/wwwroot/zdamexy.work`、Astro 内容、vhost 与原部署链。本轮不触发 Homepage 部署，不改其静态原内容、TLS、续期任务或 `.well-known`。两边既有约束见 [Homepage 运维边界](../../../homepage-website/doc_md/mainline/constraints.md) 与 [OMS Website 运维边界](../../../oms-website/doc_md/mainline/constraints.md)。

根已取本轮部署前 Homepage 页面 SHA256 基线，前缀为 `400a06b…`；完整指纹与采集时间以其双站报告为准，这是页面内容指纹而非 Git 提交。部署后是否仍相同须实际比较，旧相等结果或旧证书观察不刷新本轮双站 / TLS / 续期验收。

共享配置修改前保全本轮 include / vhost 来源，重载前使用 BT 的 `/www/server/nginx/sbin/nginx -t`，通过后才以 `/etc/init.d/nginx reload` 重载。切换前后根须复核两站、准确路径 / 参数保留跳转 / 404、CSP / nosniff、旧 IR / 社区与资源字节。普通刷新及实际 200 / 304 缓存行为也需本轮公网复核；准备包的文件时间、Ctrl+F5 恢复显示或旧缓存成功不能单独签收。

## 新候选发布与恢复门

所有准备、来源绑定、性能量测、30 分钟运行、备份、两次新空目录恢复、源码兼容往返和公网 / 缓存 / 双站结论，均由根实际执行后逐项登记。前端本地浏览器操作只证明其当次服务来源的页面行为，不证明新汇总 SQL 性能或共享主机运行。

完整历史投影须真实挂载并查询。个人读取与全榜按正式门量测，原失败、超时、执行器回收事件和补账保持原值；后续修复记录另写，不将旧失败改成成功。两次恢复都使用新空目标，核对账号、UUID / 原归属、真实最佳与独立灯、外部最佳状态、社区及隐藏覆盖；第二次还包括未 checkpoint WAL 中的撤销 / 隐藏。恢复期间不能覆盖仍在写的 live。

根已完成读模型focused117 / full312；主机查询r6两玩法各100,000 distinct的全部首请求 / 数学 / 隐私 / 旧读取往返通过，精确ms只引用Backend后续报告。`population-compat-report-r3.json` 已completed / pass，核对真实旧HTTP UUID新局 / 重交、ED最佳状态 / 独立灯、dirty / WAL、128 MiB新助手备份 / 附加空恢复及全量原始数学。r1 / r2路由前缀与条件描述字段误读失败完整保留，不改成通过。

正式1800秒 / 5 rps、全25M公开历史、100,000 OMS局 / 各29,204原生整榜及两新空恢复流程已于UTC 2026-10-05 21:40:23.852909启动，仍待结果；附加恢复与正式两恢复分开，同主服务worker及整个共享门不能由启动状态代签。新候选尚未激活，生产发布未开始；不把旧b520 / ecca成功时间补作本轮门，最终可激活范围以Backend验证及共同维护入口的根签收为准。

## 一致备份、受保护外取与空间维护

维护前记录真正 `current`、schema、原 timer 启用 / 活动状态和 worker 状态。先暂停 `oms-ir-backup.timer`，等待已经在跑的 backup worker 完整结束，再串行执行发布、恢复或空间维护；不停止备份 service 或杀进程来省空间。失败时保留诊断，并按共同维护入口决定何时恢复原 timer 状态。

日备份由批准的固定3ab候选维护代码沿SQLite backup API生成包括已提交WAL及完整派生结构的一致快照，再发布gzip与同名sidecar完整对；真实运行release与维护代码身份分记，生产当前b520的旧单元不因本文已切换。不能复制运行中的裸 `.db` 充当备份，也不能只凭退出码、压缩文件存在或一条SHA签收。根须将完整对外取到F盘受保护、Git忽略的位置，完整解压核验CRC、raw字节数 / SHA256、压缩指纹、schema与双来源绑定。七日保留和后续至少每周受保护外取沿共同维护入口执行，实时状态与新增数据增长须重新核账。

只有已明确归属本轮、可再生成且 idle 的纯合成 raw 文件，在完整压缩对 / 报告已保留并核验、确认无活动进程 / unit / 维护任务后，才按已审查的绝对文件路径逐个退场。相关 WAL / SHM 同样需停止与归属证明。保留目录、所有原失败、报告、恢复证据和两端压缩对；不整目录清理，不触碰生产 live、玩家数据、公共档案、母库或原备份。空间补账另记，不反写原资源失败。

本轮母库与个人原始行不属于网站维护切片，不能扫描、上传或提交；凭据、快照和受保护外取数据也不进入 Git 或公开源码包。

## 回退到真正线上 b520

候选仍未激活时不执行回退。读模型修订后，回退范围仅为 `/opt/oms-ir/releases/b520bcb99015-5d0531c22423` 的HTTP / 网站；维护代码固定保留实际3ab候选的backup.py / backup.sh与pinned备份单元，完整核心 / 派生结构和同一live继续保全。不能调用旧b520整套activator覆盖新维护单元，也不能用新activator处理缺catalog文件的旧包。兼容r3是对应通过记录，整体共享 / 正式恢复及实际回退仍以根的后续签收为准。

1. 保存本轮current / manifest、实际运行与固定维护的双来源、主服务 / catalog / 备份单元、include / vhost、原timer状态及失败证据；暂停timer并等待在跑备份结束，由批准3ab维护代码生成一致快照，保全schema3 live / WAL及完整派生结构。
2. 停止主服务，stop / disable新 `oms-ir-catalog.service`，只安装b520主服务单元并原子切换current；备份单元继续固定3ab维护来源，不恢复b520旧备份工具。快照和切换的真实磁盘峰值纳入本轮账。
3. 恢复经审查的 b520 配套 OMS extension，检查 BT Nginx 后重载；源码 `current/web` 与 include 必须配对，不能只恢复旧 include。
4. 实际复核b520运行来源 / 3ab维护来源分别正确、schema3核心 / 派生数据保全、catalog停止 / disabled、主服务与原timer状态、页面 / 资源 / 缓存、旧IR / 社区和Homepage双站。旧写留下的dirty须在重返新runtime的readiness前修复；任一步失败保留live / WAL / 证据，明确失败步骤。

完整命令与失败处置只维护在 [b520 回退流程](../../../../oms-server/oms-backend/deploy/README.md#本轮源码回退到实际-b520)。源码回退继续使用同一当前库；灾难恢复才在新空目录恢复数据，两者不能混用。不能恢复上线前旧快照来回退视觉，不能覆盖上线后新局、账号、帖子、隐藏或撤销，也不能切回不支持 schema 3 的历史运行时。

## 仍需真人签收

地力设计后置，BMS PP 另议；累计分、谱面收录或通关数不宣传为能力评级。新玩家网站、真实宿主交分 / 原生读榜、非空 OpenLR2 跨 DLL 容器、OMS 与网页同账号同谱一致性、真实原包下载 / 入库和首次真人社区仍需实际反馈。客户端日常验收由用户从 `F:/oms` 的 VS Code 非调试启动完成，不生成 Windows 发行包、publish 目录或额外安装副本。

先导 P 与完整指定版本 / 玩法矩阵 C 均未签收。部署门通过并实际试运行后只能登记“已部署待验收”，继续按 [具体真人路径](../../../oms-website/doc_md/other/oms-player-site-verification-20261005.md#内容维护真人路径与未完成项)承接反馈，不能宣布 P / C 完整闭环。

两份镜像：[OMS Website](../../../oms-website/doc_md/other/oms-player-site-infrastructure-20261006.md) / [Homepage](../../../homepage-website/doc_md/other/oms-player-site-infrastructure-20261006.md)。本说明不改变两个产品的源码、内容或发布节奏；根按最终实测更新运行水位及对应导航。
