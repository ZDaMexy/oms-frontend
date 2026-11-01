# 2026-11-01 Shiro 官方 QQ 回调共享设施镜像

> 证据落点更新（2026-11-01）：旧 Shiro 开发目录已完整 ZIP 校验后移除；下方旧业务文档固定到封存提交，原本地收据从 ZIP 按成员路径查阅，位置与校验身份取[交接](../../../../shiro-bot/doc_md/mainline/legacy-handoff.md)。本次只调整引用，不刷新原验证日期、网站发布或恢复结论。

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

修改前的 Homepage vhost 快照保存在 Shiro 本地验证产物 [homepage-vhost.before.conf 的归档入口](../../../../shiro-bot/doc_md/mainline/legacy-handoff.md#完整-zip)（ZIP 内 `shiro-bot/.pytest_cache/qq-official-20261101/homepage-vhost.before.conf`）。这是本次变更前配置的保全入口，不是网站内容发布包。

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

