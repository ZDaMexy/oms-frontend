# 2026-10-03 共享主机上的 OMS IR 试运行

用户明确授权独立 IR 持续开发、commit / push 与直接部署，由用户在真实环境验收。该部署与 Homepage / OMS 静态首页各自的发布相互独立。

## 共享配置与双站结果

通过已有 `ssh zdamexy-srv` 准备不可变 IR release，独立 CPython 3.12.14 / SQLite 3.53.1；单 worker 仅监听 loopback 8081，服务 MemoryMax 500 MiB、无进程 swap、CPUQuota 150%。生产包来源为 Backend `52d3174` + Website `d29ac64`，current 指向 `/opt/oms-ir/releases/52d3174d1def-d29ac644dc77`。

发布前备份 OMS BT vhost 和完整 extension；只新增 `/www/server/panel/vhost/nginx/extension/39.105.55.78/oms-ir.conf`，以已有 include 发布 `/ir/` 与 `/api/ir/v1/`。`/www/server/nginx/sbin/nginx -t` 通过后 `/etc/init.d/nginx reload`。原 Homepage 配置、两网站根、证书和 `.well-known` 保持；没有运行任一旧网站 post-receive 发布。

2026-10-03 19:19 CST：变更前两站 HTTPS 200；Nginx 重载后第一次 IR GET 曾 404，后续独立核对 IR / API / 两站均 200，失败日志保留。HTTP `/ir/` 为 301 跳同域 HTTPS，HTTPS `/ir` 为 308 跳 `/ir/`；TLS 校验正常。服务 active/running、NRestarts=0，日备份 timer 已启用。只签收这些实际请求，不宣称持续可用、证书续期或静态首页工作区成果已上线。

公网真实 HTTP 接收客户端原样导出的合成 BMS / mania JSON，同局重复不新增、榜与本人历史一致、退出撤销、他人历史 403、Secure / HttpOnly / Strict cookie、准确 Origin 与 64 KiB JSON 413 通过。记录明确“非玩家成绩”。本轮公网浏览器控制连接反复超时，未取得最终页面交互 / 桌面或手机截图；原本地浏览器证据保留，不代签公网页面。

## 运行预算、备份与责任

十万条合成历史、50 局 / 10 秒 +25 次读榜 / 秒复测通过，RSS 峰值约 131 MiB；两次新空目录恢复含未 checkpoint WAL 会话撤销通过。共出口 50 人登录按 Retry-After 全部完成约 66 秒；登录 60 次尝试 / 分钟、注册 20 人 / 小时、读榜 600 次 / 分钟，均按出口共享。容量与配额的完整口径见 [Backend IR4](../../../../oms-server/oms-backend/doc_md/other/ir4-host-verification-20261003.md)。

19:30 CST 执行已安装的备份 service，正常退出，84 KiB 新一致快照已经 SSH 外取到 F 盘证据并核对一致；生产快照没有恢复试验，恢复验证使用纯合成库。专用日备份保留七日，专用 journal 上限 32 MiB / 14 日；共享 BT 错误日志沿站点原策略，IR access log 关闭。生产数据与快照不进 Git 或网站根。

后续维护、账号人工恢复、外取快照、灾难恢复及回退按 [Backend 发布维护](../../../../oms-server/oms-backend/deploy/README.md)。真实客户端完整游玩、断网重启、网页同一局和此前设备 / 皮肤 / 发行人工门由产品验收，不以软件探针关闭。两站 `other` 保持本记录镜像。
