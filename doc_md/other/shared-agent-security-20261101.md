# 2026-11-01 共享主机运行时与安全维护

> 证据落点更新（2026-11-01）：旧 Shiro 开发目录已完整 ZIP 校验后移除；下方旧业务文档固定到封存提交，原本地收据从 ZIP 按成员路径查阅，位置与校验身份取[交接](../../../../Shiro-Agent/doc_md/mainline/legacy-handoff.md)。本次只调整引用，不刷新原验证日期、网站发布或恢复结论。

本页是两站共用设施的同文镜像，准确运行时、BT 模板根因、备份指纹和未完成范围统一取 [OMS Web 权威记录](../../../oms-web/doc_md/server-agent-security-20261101.md)。Homepage、OMS、Shiro 的内容、源码和发布仍独立，不把主机维护记成网站或 Bot 业务验收。

## 已完成的设施变更

截至 2026-11-01 04:57 CST，OMS HTTP / catalog / 固定 helper 已切至 Python 3.12.16，BT 面板已切至 Python 3.13.18；公共不可变 base 位于 `/opt/python-runtimes`，产品各用独立 venv。标准库 OpenSSL 3.5.9 / SQLite 3.53.1 / Expat 2.9.0 已实测，应用来源、包名 / 版本及业务库 device / inode、schema3 / 22 表保持。

BT 的 `class/jobs.py` 会从 `panel/init.sh` 刷新 `/etc/init.d/bt`，原模板含可能重换旧 pyenv 的逻辑。本轮已将运行 init 与源模板同步为原已加固字节，核对真实 Python 进程；原生 ELF BT-Task 保持原 executable。准确指纹、初次检查失败和向前修复取权威记录，不隐去失败或回切漏洞解释器。

三 backup timer 恢复原 enabled / active / waiting，worker 均 MainPID=0 / ControlPID=0；切换前后两份固定 helper 一致备份已完整 F 验证。full plan 的 `python` root 改为 `/opt/python-runtimes`，`panel-runtime` 改为 `/opt/bt-panel-runtime/py31318-20261101`，但这些新 roots / venv / init 尚未由新全量云备份和解密恢复验收。旧运行时及候选保留，04:57 根盘约 5.526 GiB，原 4.10 GiB 恢复预留保持。

已确认闲置的 Docker / containerd / multipath 五项 service / socket 停止并 disable；AppArmor / libapparmor1 更新到 Ubuntu `.9` 修订、bubblewrap 到 `0.9.0-1ubuntu0.3`。无实时引用的 Nginx 源树经 F 盘完整保全后退役，共 7,301 文件 / 545,275,904 B；准确 archive SHA、配置保持与根盘读数只取权威记录。

## 05:07 后的设施收据

05:07 CST 已验证新公钥 SSH 会话并关闭 password / keyboard-interactive，root 仅公钥；UFW 删除 FTP 20/21、39000:40000 和 888/8888 的双栈放行，保留 22/80/443/BT 12034，默认入站拒绝。精确配置与回滚 timer 关闭证据只取 [OMS Web SSH / UFW 记录](../../../oms-web/doc_md/server-agent-security-20261101.md#host-hardening)。

AppArmor 仅加载 `/usr/bin/bwrap` 特定 profile，全局 userns restriction 仍为 1。真实服务用户的 Linux QA **37 passed**，含 **13 项** seccomp / 子进程继承 / ABI 定向验证；这是候选执行面的缓解，不是宿主内核修复或 Bot 正式 / 真人验收。配置与范围只取 [候选隔离收据](../../../oms-web/doc_md/server-agent-security-20261101.md#candidate-isolation)。

05:21 CST，BT 冷停后仅离线补修 dnspython / PyMongo 两包，85 包其余不变；正常协议烟测、TLS loopback 404、双站与双 health 200、init / 模板指纹通过。首次误用 HTTP 请求 TLS-only 面板得到 curl 56，修正 HTTPS 后通过；该探错不算真实服务故障。精确版本、公告条件与补修后 OSV 复核只取 [依赖记录](../../../oms-web/doc_md/server-agent-security-20261101.md#dependency-security)。

<a id="current-release-backup"></a>

## 05:43 后的发布与备份状态

Shiro v0.2 已正式切至 `4dc8422`，独立状态快照和同机新目录恢复通过；业务来源、恢复范围与真人门只取 [Shiro 部署记录](https://github.com/ZDaMexy/Shiro-BOT/blob/364fb1dcf34c6f4ba669dedb1bcd87a34f66b915/doc_md/mainline/qq-official-deployment.md)。同机恢复不签云端解密或异机启动。

Backend `1de5eab` 已推送，真实 age 的 guard / 备份组合回归 **108 passed / 1 条既有 Starlette 提示**。新备份工具 `d9a42ff093e1799d` 与 plan 已上线，旧 `f7b8b9b0a39b7971` 保留。06:35 CST 全备已成功完成：42 个声明 roots 实际展开 49 对象及 catalog；本轮新增 / 变化密文上传后完整下载核 SHA，未变化对象 metadata probe 后复用。四个 timer enabled / active / waiting，workers idle；准确 plan、八类归档、conditional host metadata 和 catalog 指纹统一取 [OMS Web 当前状态](../../../oms-web/doc_md/server-agent-security-20261101.md#current-release-backup)。本轮没有读取恢复私钥，云端 age 解密 / 异机启动未验收。

## 06:29 旧面板保全后退役

仅旧 `/www/server/panel.before-security-20261022` 和本次自有 transport archive 已删除，现行 panel / pyenv 保持。F 受限归档逐普通文件与全部成员 metadata / links / EOF CRC 验证通过，主执行者独立复核 archive / manifest SHA；进程 / FD 无 live references，full plan 无该路径，Nginx 配置和前后双站 / health / 服务基线保持。净 free 增加 982,413,312 B 含并行全备影响，不当作纯删除理论增量。准确成员数、指纹、受保护保全件与实际运行边界只取 [OMS Web 退役收据](../../../oms-web/doc_md/server-agent-security-20261101.md#panel-retirement)。

## 06:37 重启与依赖复核

维护重启已用新 boot ID 和重启后真实收据确认，业务服务 active / NRestarts=0，四个 timer waiting / workers idle；key-only SSH、UFW、AppArmor、current / venv / pyenv 与 OMS 同库身份保持。双站 / health / QQ challenge、bad hex 403、面板 HTTPS 404 与 Nginx 检查通过；Shiro 受限探针只复核 synthetic 恢复态，没有真人、QQ / 模型调用或 live 覆盖，业务细节仍取 Shiro。内核仍为 6.8.0-147，reboot-required 消失不代表上游 WIP 漏洞已修。根分区 free 约 6.159 GiB、MemAvailable 约 920.59 MiB；6 秒 startup 样本不证明长期性能。准确数值、指纹和边界只取 [OMS Web 重启记录](../../../oms-web/doc_md/server-agent-security-20261101.md#maintenance-reboot)。

实际 Composer、Homepage 源码 / 构建 npm 的精确版本核对及本地 Web 构建依赖修复见 [依赖记录](../../../oms-web/doc_md/server-agent-security-20261101.md#web-dependency-security)。本地修复已提交为 `7000b90625`，未部署；484 个现有 assets 文件 SHA 一致，不把本地构建验证当作线上应用更新。

## 实际验证与边界

候选导入及 JWT / Brotli / 图片等烟测通过；切换后 45 秒有界双 health、双站 HTTPS 根页均 200，BT 指定 Nginx `-t` 通过，既有业务服务 active。未发布网站内容、改发布 hook、TLS、OMS DB 内容或阶段；HTTPS 读取不签实际续期，当前 OMS 真人门保持。

系统 Python 的 CVE-2026-115557 仍待 Ubuntu 评估；CVE-2026-98260 官网当前 Noble kernel 已列修复中，不能把已安装 candidate 或重启当成漏洞已关闭。最新 20 条 USN 比对只证明限定范围，不声称主机全无漏洞。SSH / UFW、新 Bot 切换与独立快照 / 同机恢复、旧面板退役、新全备及维护重启均已取得后续收据；本轮云端 age 解密 / 异机启动和真人验收仍未签收。Node 22.23.4 已覆盖官方 10 月 21 日安全发布，系统 Python 仍由 Ubuntu 评估；既有 intel-microcode / cloud-init hold 保持。准确上游状态和待办只取 [OMS Web](../../../oms-web/doc_md/server-agent-security-20261101.md#remaining-security)。

03:18 首期独立 QQ 回调的配置与有限验证仍见 [原日期记录](shiro-qq-webhook-20261101.md)，不覆盖为新版事实。Shiro 当前部署、运行隔离、恢复与真人收发只取 [其部署记录](https://github.com/ZDaMexy/Shiro-BOT/blob/364fb1dcf34c6f4ba669dedb1bcd87a34f66b915/doc_md/mainline/qq-official-deployment.md)。

本轮原证据位于完整 ZIP 的 `shiro-bot/.pytest_cache/server-agent-20261101/`；`python-rollout/final.json` 只描述 **04:57 OMS / BT 解释器切换**，最新全备与重启终态分别取 `full-completion.json`、`maintenance-reboot-verified.json` 及上方 OMS Web 权威入口。配置原件与 DB 快照在受限 `private/`，不进 Git、不展示个人行或密钥。旧 [10 月 22 日维护](shared-security-maintenance-20261022.md)保留原日期及原恢复范围。
