# OMS 社区门户生产发布与共享设施记录

本记录在 Website 与 Homepage 的 `other/` 镜像维护，社区首轮事实为 2026-10-04，文末多来源发布与缓存复核为 2026-10-05（UTC+8）。产品与接口分别见 [社区进展](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-progress.md) 和 [Backend 验收](../../../../oms-server/oms-backend/doc_md/other/community-verification-20261004.md)。没有发布 Homepage 源码或 Windows 客户端发行包。

下方社区来源/恢复/浏览器章节保留2026-10-04当时范围；当前schema3及共享include后续变更见文末[2026-10-05多来源发布](#2026-10-05多来源发布)。

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

## 2026-10-05多来源发布

01:41:04（UTC+8）实际current为`/opt/oms-ir/releases/ecca50eab82c-09d7ffdf4bbb`、schema3，Backend ecca50eab82c/Website09d7ffdf4bbb，OMS产品源码b7d0f74d；状态“已部署待验收”。详细来源、全量运行/两恢复/补账、生产原列保全与公开/备份只维护于[Backend最终证据](../../../../oms-server/oms-backend/doc_md/other/multisource-host-verification-20261004.md#最终-r10-与实际发布)，后续文档HEAD不替换运行源码。

共享变更只涉及OMS既有extension/oms-ir.conf：增加准确v2代理及五插件/双许可/版本文件路由，BT Nginx切换前后预检和reload成功。实际PID/cwd/argv/loopback8081 ownership已核对，timer enabled/active；没有触发Homepage部署、证书签发或续期。发布前include/vhost备份位于`/var/backups/oms-ir/nginx-20261004T174104Z/`，切换证据`/opt/oms-ir/releases/20261004T174104Z-switch/`，旧schema2一致快照`/var/backups/oms-ir/before-release-20261004T174104Z.db`保留。

公开默认TLS验证、22个准确文件字节/SHA/HEAD/CSP/nosniff、保参308/404、完整历史/来源查询、原IR/社区和双站通过；两入口65,537字节匿名无效正文均JSON413/no-store/nosniff。两个主页内容hash与发布前一致，不填造公开成绩/社区。公开浏览器初次超时保留，随后同一HTTPS页实际匿名来源切换、首/第二/尾页、深链、同条件空范围及桌面/390px通过，截图/检查断言纠正见[正式浏览器补核](../../../../oms-server/oms-backend/doc_md/other/multisource-host-verification-20261004.md#正式网页实际浏览器补核)。旧截图保持原日期，公开账号/密钥/本人、DPI、OMS/宿主P/C真人仍待。

首份正式schema3日备份`daily-20261004T174642Z.db.gz`及同名`.json`实际unit成功，F盘受限目录完整解压CRC/raw字节/SHA和来源绑定通过。快照包含用户数据不入Git，报告无个人行/凭据；七日对保留、至少每周受保护外取，维护串行且增长重新计账。schema1/2旧源码不能接新库，向前修复或已实际验证兼容schema3的源码回退保全同一live；灾难恢复沿[发布维护](../../../../oms-server/oms-backend/deploy/README.md)，不能用旧快照覆盖上线后新内容。

长期新增证据在`F:/oms/artifacts/oms-ir-multisource-20261004/`：`deployment-r10.json`、`public-multisource-report-r10.json`、`public-body-budget-r10.json`、`public-browser-r10-report.json`、`production-first-backup-r10.json`、`production-backup-offhost-r10.json`及`production-closeout-r10.json`；母库、个人原始行和凭据不提交Git。

## 2026-10-05缓存反馈复核

玩家先报告首页仍像旧版，随后确认 Ctrl+F5 后已显示新版。这属于更新可见性反馈；与改版前旧缓存相符，但强刷已替换原缓存，没有捕获玩家原响应头、缓存条目或网络过程，不判定具体旧 `max-age`、缓存层或浏览器行为。当前 HTML / 资源的新响应头不能追溯清除尚未重新向服务器请求的旧页面。

08:33～08:44（UTC+8）仅只读取证：`current` 仍为 `ecca50eab82c-09d7ffdf4bbb`，OMS extension 与该制品的 include 相同，服务 active；门户共享头文件已经使用 `Cache-Control: no-cache`。没有改配置、reload、换制品或触发两个网站的发布钩子。退役的物理单页仍为 24,389 字节、Last-Modified 2026-06-03 05:24:20 UTC；它不是当前门户源码或生产首页。

08:41:12～08:41:13 运行 Website 的 `scripts/verify-public-cache.mjs`，六个门户页和页面实际引用的四个 `/portal/` 资源正文与本地源码一致，200 / 304 均含 `no-cache`，当前 ETag 返回空正文 304；旧物理单页日期和明确合成的不匹配 ETag 均返回当前首页 200。22 个只读请求 / 62 个检查通过。新脚本随实际 HTML 引用核对资源版本，不只探测历史查询字符串；不接触账号、帖子写请求或玩家缓存。

实际公网浏览器普通 reload 后显示“一起聊聊，下一局。”、真实 0 帖空状态及独立导航；点击“下载”进入“准备好，开始下一局。”的独立下载页。该结果证明当前页面刷新 / 导航可用，不还原玩家强刷前的缓存，也不签首次真实发帖或 IR 真人 P/C。HTTPS 首页 SHA256 `517d4bb48319ba1bf247ae437d13b40b0d63b4b6215637245b8e672a95f20c66`，IR SHA256 `90562df8278020c6502f980980856e9dfdf0aaea09ba15046ddb637482f87173`，均匹配本地制品内容；个人站 HTTPS 200 / SHA256 `400a06bbe5318fd9c57aedcaac61b8f5a8edeaf815d4404602c66f687f0d10a7` 与此前一致。

长期证据位于 `F:/oms/artifacts/oms-homepage-cache-20261005/`：`public-cache-report.json`、`inspection-report.json`、`runtime-cache-inspection.txt`、`home-after-normal-reload.txt` / `.png` 与浏览器最终记录。后续门户发布在 [Website 验证方法](../../../oms-website/doc_md/mainline/verification.md#发布后的缓存复核) 核对普通刷新、返回首页和真实资源的条件请求；不要求玩家常规强刷来替代发布验收。运行源码仍是前节已发布来源，本轮维护 / 文档 HEAD 不替换它。

## 2026-10-05实际osu-web发布

17:16:55（UTC+8）当前 OMS 为 `b520bcb99015-5d0531c22423` / schema3。共享变更仅 OMS 原 extension 增加 users / credits 精确路由，实际 BT Nginx 切换前后预检与 reload 通过；vhost / .well-known / Homepage 源码和部署均未改。vhost 与 extension 备份 `/var/backups/oms-ir/nginx-20261005T091651Z/`，switch `/opt/oms-ir/releases/20261005T091651Z-switch/`，schema3 一致快照 `/var/backups/oms-ir/before-release-20261005T091651Z.db` 保留。

双个人站 HTTPS200 / SHA256 `400a06bbe5318fd9c57aedcaac61b8f5a8edeaf815d4404602c66f687f0d10a7` 前后相同；OMS公开84请求/232检查和门户缓存38/110通过，实际首页与普通reload后保存的截图为“主页”与真实0帖。AX/DOM读取及组合调用后段超时、窄屏override未真正生效单独保留；仅签保存完成的普通刷新，点击往返/窄屏不由HTTP代签。新备份unit成功且完整受保护F外取核验，timer enabled/active。准确运行来源、完整预算/恢复/补账、失败、备份/兼容回退及未完真人门只取[此次核验](osu-web-lazer-account-verification-20261005.md)，当前“已部署待验收”，P/C未签收。共享记录与Homepage镜像同步，不自行扩盘。
