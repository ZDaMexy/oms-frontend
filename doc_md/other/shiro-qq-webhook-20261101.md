# 2026-11-01 Shiro 官方 QQ 回调共享设施镜像

2026-11-01 21:56:58 CST，新 `shiro-agent.service` 已激活，Homepage exact `/shiro-qq/webhook` 从维护状态改为代理新版。新增本人配置入口 [shiro.zdamexy.work](https://shiro.zdamexy.work) 与独立 TLS；旧 `shiro-bot.service` / snapshot timer 保持停用。22:05:52 的静态 JS 修复沿同一服务与路由发布，未改网站内容或 OMS。业务来源、登录及真人状态只取 [Shiro 生产运行](../../../../Shiro-Agent/doc_md/mainline/production.md)，旧停用与清理取[退役记录](../../../../Shiro-Agent/doc_md/mainline/deployment-retirement.md)。

## 21:56 新版共享入口

Homepage 只代理 exact 回调到 `http://127.0.0.1:18775/qq/webhook`，不开放 Bot 管理 API。新增 `/www/server/panel/vhost/nginx/shiro.zdamexy.work.conf`，代理同一薄宿主的静态配置页及认证 API；该域名的 `/qq/webhook` 明确 404。专属入口 HTTP01 webroot 为 `/var/lib/acme-shiro`，实际 DNS A 记录为 39.105.55.78。

Let’s Encrypt EC256 证书已实际签发，UTC 有效期为 **2026-11-01 12:55:18 至 2027-01-30 12:55:17**，安装于 `/www/server/panel/vhost/cert/shiro.zdamexy.work/`。沿用 acme.sh 3.1.4 与既有 cron，安装记录的续期 reload hook 为 BT Nginx `-t` 通过后 `/etc/init.d/nginx reload`；未改原两站证书，未来续期不因本次签发自动视作已验证。

修改前双站均 200，Homepage 配置保全在 root0700 的 `/var/backups/oms-maintenance/shiro-agent-release-20261101/`。BT 配置检查及 reload 通过；首次新域名 TLS 检查遇到 worker 切换窗口，随后确认登录页 200、匿名配置 API 401、私人回调 404、公开 challenge 200 且实际 Ed25519 验证通过、非法回调 403。双站仍 200，nginx、oms-ir、oms-ir-catalog、oms-web 均 active。22:05 修正版之后双站与配置登录页再次 200。没有上传工程 QA、测试依赖或在服务器构建。

| 共享配置 | SHA-256 |
| --- | --- |
| Homepage 变更前 | `c33d25d7e367766fa11e89266d638dcc3e4f00f1fceb8824bdb571951838687d` |
| Homepage 变更后 | `6f752ed53bdfcc205d74c06404c9f56b6974ae8656d5178d91170b5ad3540d4b` |
| 新 Shiro vhost | `b70c8768e68ce0d17dfd6fb8b5709d01796317491d7b46ee7bf9131cf4daed6a` |

原网站内容、部署 hook、OMS 业务版本和数据库保持。新认知资料没有加入现有 OMS 追加式全备；当前恢复和旧图库只读复用的归属只取 Shiro 生产记录，旧云对象未删除。原恢复预留保持，QQ 全群权限、本人绑定与真实业务不由网站健康检查代签。

## 17:21 停旧历史

2026-11-01 17:21 后，旧 Bot 已停止并取消自启，旧 snapshot timer 同样停用；exact 回调改为 503 maintenance，不再代理到已停端口。BT 配置检查、reload、Homepage / OMS 200 与原四服务 active 已核对；原配置保全、当前配置 SHA、清理与恢复归属统一取 [Shiro 待部署记录](../../../../Shiro-Agent/doc_md/mainline/deployment-retirement.md)。新版仍在本机开发，没有上传 QA、激活新服务或创建配置子域名。下方 03:18 记录保留其原时点，不代表旧 Bot 现在仍在运行。

> 证据落点更新（2026-11-01）：旧 Shiro 开发目录已完整 ZIP 校验后移除；下方旧业务文档固定到封存提交，原本地收据从 ZIP 按成员路径查阅，位置与校验身份取[交接](../../../../Shiro-Agent/doc_md/mainline/legacy-handoff.md)。本次只调整引用，不刷新原验证日期、网站发布或恢复结论。

> 实际证据时间：2026-11-01 03:18 CST（UTC+8）。本页仅记录共享服务器与 Nginx 的变更和保全边界；Shiro 的功能、配置、恢复与后续验收统一取 [Shiro 官方部署指南](https://github.com/ZDaMexy/Shiro-BOT/blob/364fb1dcf34c6f4ba669dedb1bcd87a34f66b915/doc_md/mainline/qq-official-deployment.md)。

Shiro-BOT、Homepage 与 OMS 是独立产品。本次为独立 QQ 官方机器人增加服务和 Homepage 域名下的精确回调路由，不构成 OMS 机器人集成，也不改变 OMS 的阶段或真人验收状态。两站 `other/` 保存相同设施事实，目录入口见 [README](README.md)。

## 当次服务与路由

| 项目 | 2026-11-01 03:18 的实际状态 |
| --- | --- |
| 独立服务 | 新增 `shiro-bot.service`，使用独立运行用户、state、cache 和虚拟环境；仅监听 `127.0.0.1:18775` |
| 代码与切换 | 部署提交 `61fca69384f241c3d6a851780e50073cdab9f8fa`；`/opt/shiro-bot/current` 指向 `/opt/shiro-bot/releases/61fca69384f241c3d6a851780e50073cdab9f8fa` |
| 解释器 | 独立 Python 3.12.15 / OpenSSL 3.5.9，从已修复的公共解释器树复制，不链接 OMS 的运行目录 |
| 服务配置 | EnvironmentFile 为 `/etc/shiro-bot/qq.env`；内容和凭据不进入网站仓库或本记录 |
| 唯一新增站点路由 | Homepage vhost 的 exact `/shiro-qq/webhook`，代理到 `http://127.0.0.1:18775/qq/webhook` |
| 公网回调 | [https://zdamexy.work/shiro-qq/webhook](https://zdamexy.work/shiro-qq/webhook) |
| 资源预算配置 | `MemoryHigh=256M`、`MemoryMax=384M`、`MemorySwapMax=0`、`CPUQuota=50%`、`TasksMax=64` |
| 当次盘账 | 剩余约 `5.45 GiB`，仍不低于原有 `4.10 GiB` 恢复预留；该单时点观察不代表长期容量或完整共载验收 |

Homepage 和 OMS 的站点内容、发布 hook、TLS / ACME 配置、OMS 数据库与业务服务未随本次变更调整。新路由只使用上述 exact 位置，不把整个 Homepage 请求空间代理给机器人。

## 配置保全与激活

修改前的 Homepage vhost 快照保存在 Shiro 本地验证产物 [homepage-vhost.before.conf 的归档入口](../../../../Shiro-Agent/doc_md/mainline/legacy-handoff.md#完整-zip)（ZIP 内 `shiro-bot/.pytest_cache/qq-official-20261101/homepage-vhost.before.conf`）。这是本次变更前配置的保全入口，不是网站内容发布包。

| Homepage vhost | SHA-256 |
| --- | --- |
| 变更前 | `4a3821d2747035031999c8137feaede6e1ceb4b43414ac2b8ccd674acf9bf415` |
| 变更后 | `7300fc5a52c80802cebbb07495da8f754cfe6e3afe277b34257f717d30a72a40` |

BT Nginx 的 `/www/server/nginx/sbin/nginx -t` 通过后，使用 `/etc/init.d/nginx reload` 激活。重载后首次立即请求遇到旧 worker 返回 404，随后重新请求已通过下方回调验证；不能把该首轮 404 记为最终路由未生效，也不省略这次实际观察。

共享配置恢复须沿 Shiro 部署指南核对当时的路由与服务，再按两站 [运维边界](constraints.md)执行备份、BT 配置检查、重载和双站复核。若 vhost 后续已有其它变更，应只撤回本次精确路由，不能用旧快照盲目覆盖整份现行配置；OMS 应用回退也不负责回退这个独立服务。

## 实际验证与仍未验收范围

| 验证对象 | 当次结果与边界 |
| --- | --- |
| 公网回调受控请求 | challenge 及返回的 Ed25519 签名验证通过，HTTP 200；非法十六进制签名头返回 403 |
| 两站 HTTPS 根页 | 变更前后 [Homepage](https://zdamexy.work/) 与 [OMS](https://oms.zdamexy.work/) 均返回 200 |
| 现有共享 / OMS 服务 | 变更前后 `nginx`、`oms-ir`、`oms-ir-catalog`、`oms-web` 均为 active；不据此推定业务真人门已通过 |
| 平台控制台与真人 QQ | 该时点由用户自行配置 `GROUP_AT_MESSAGE_CREATE`、`C2C_MESSAGE_CREATE` 并执行真人收发，尚待反馈；后续结果只更新 Shiro 部署与验证记录 |
| TLS / 续期 | 本次 HTTPS 读取不代表证书安装、DNS、ACME 任务或实际续期重新验收；此前证据日期保持 |

本次没有把新机器人加入现有备份任务。两站已有全量恢复材料不能据此解释为已覆盖 Shiro 的 release、解释器、服务环境或状态目录；具体备份缺口与恢复步骤沿 [Shiro 部署指南](https://github.com/ZDaMexy/Shiro-BOT/blob/364fb1dcf34c6f4ba669dedb1bcd87a34f66b915/doc_md/mainline/qq-official-deployment.md)接续。双站业务与原恢复预留保持，不提升新 Linux 整机恢复、长期压力或任何产品真人验收结论。

