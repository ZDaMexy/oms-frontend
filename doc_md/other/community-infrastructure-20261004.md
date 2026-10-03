# OMS 社区门户生产发布与共享设施记录

本记录在 Website 与 Homepage 的 `other/` 镜像维护，事实截至 2026-10-04（UTC+8）。产品与接口分别见 [社区进展](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-progress.md) 和 [Backend 验收](../../../../oms-server/oms-backend/doc_md/other/community-verification-20261004.md)。没有发布 Homepage 源码或 Windows 客户端发行包。

## 实际生产来源

| 项目 | 当前事实 |
| --- | --- |
| OMS release | `/opt/oms-ir/releases/f1f8286640c7-c1b1b7a5da7a`，`/opt/oms-ir/current` 指向此目录 |
| Backend 运行源码 | `f1f8286640c7126b926342bd7f01b3940967392e` |
| Website 运行源码 | `c1b1b7a5da7a39d15c2bdbfb5aa49078b9d3303e` |
| 数据与健康 | schema 2，`status=ok`；后端仅 loopback 8081，服务 active / running，最终 `NRestarts=0` |
| 门户路由 | 根页及 `/download/`、`/help/`、`/account/`、`/community/`、`/community/new/`、正整数固定帖子阅读器、`/ir/`；API 同源 `/api/ir/v1` |
| 共享 Nginx 变更 | 仅 OMS include `/www/server/panel/vhost/nginx/extension/39.105.55.78/oms-ir.conf`，从 current/web 精确提供已发布门户资源 |
| 发布方式 | Backend 不可变包与激活脚本；原 OMS 裸仓静态检出 hook 未运行，不以旧 `/www/wwwroot/oms.git` 的 main 代表当前门户 |

03:18:21 首次激活 `f1f8286640c7-88808bea98c8`，事务升级 schema 1→2；BT Nginx 主配置检查通过后重载。03:25:31 激活最终来源，仅 Website 同文档旧锚点修复；两包 include `cmp` 相同，未再次重载。随后文档提交不替换上述运行源码来源。

原 vhost、网站根、证书、续期入口与 Homepage 部署链均保持原有边界。`/.well-known/` 保留 HTTP 入口，本轮没有读取私钥或重跑证书签发 / 自动续期；可用 TLS 不提升旧续期链路的验收日期。

## 验证范围与双站结果

最终公网实际 Edge 1280×800 / 390×844 只读检查通过：14 个页面 / 资源逐字节匹配 manifest、TLS / CSP、HTTP→HTTPS、保参 308、未知路径 404、API / JSON 64 KiB 边界、真实空首页、导航、旧锚点、手机布局及原 IR。脚本 / 资源 / CSP 错误为 0。个人主页 HTTPS 200，正文内容 SHA256 与发布前相同。

生产社区当前 0 帖；公网浏览器没有创建账号或帖子。发帖 / 回复 / 作者编辑删除、共用会话、重复提交与账号变更已在本地实际 Edge 和服务器实际 Nginx 的独立合成库完成；原 IR 会话 / 双玩法成绩迁移保全及 schema 2 新空目录恢复通过，未向生产迁入合成社区内容。真实公开写体验与客户端真人成绩由用户验收。

首次公网发现同文档 `#download` 未跳转，原失败报告保留，修复后的三项本地回归与最终公网均通过。服务器 stage a 的隔离 Lua 路径遗漏、stage b 的 desktop 探针错误 Origin 也保留为原失败，未放宽产品认证。补核 `public-ir-mobile-settled.png` 等待 IR 自身加载，匿名登录按钮可用；`thread-mobile-top.png` 从页首捕获原合成帖子，确认正文与粘性顶栏正常，原首次截图不覆盖。

## 一致备份与回退边界

- 首次发布前 schema 1 一致快照：`/var/backups/oms-ir/before-release-20261003T191821Z.db`。
- 原 OMS include 备份：`/var/backups/oms-ir/nginx-community-20261003T191821Z/`；首次切换证据：`/opt/oms-ir/releases/20261003T191821Z-switch`。
- 同 schema hash 修复前一致快照：`/var/backups/oms-ir/before-release-20261003T192531Z.db`；切换证据：`/opt/oms-ir/releases/20261003T192531Z-switch`。
- 03:22 schema 2 日备份成功，备份 timer enabled；03:35 再运行备份 service，`Result=success`、`ExecMainStatus=0`，最新一致快照 `/var/backups/oms-ir/daily-20261003T193514Z.db` 为 131072 bytes、权限 600。
- 最新快照已外取到 F 盘验收目录内受限、Git 忽略的 `private-backups/`，本机仅当前 Windows 身份与 SYSTEM 访问；服务器 / 本地 SHA256 均为 `49ba7ecc3cad3ef8c5d1fd4b0d9fde5aacb140b10502adb103e5e7a277642295`。没有检查数据库行或把生产数据提交 Git。日备份沿既有七天保留。

schema 已升至 2，原 schema 1 运行时不能直接接受当前库。升级后的启动 / 健康失败要停止并保全候选 current、生产库和前后快照；不得只切回旧代码或以发布前快照覆盖新增用户成绩 / 内容。相同 schema 的兼容回退沿 [发布维护](../../../../oms-server/oms-backend/deploy/README.md)，同时明确新增内容的保全。

长期证据位于 `F:\oms\artifacts\oms-community-20261004\`：`production-publish.txt`、`production-hash-fix.txt`、`production-final-backup.txt`、`production-final-offsite-backup.json`、`server-stage-c-report.json`、`public-browser-report.json`、`public-browser-run2.txt`、`final-screenshots-report.json` 和对应 manifest / 图像。验收日志、首轮失败与备份保留，不清理为临时构建缓存。
