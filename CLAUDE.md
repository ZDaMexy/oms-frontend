# CLAUDE.md — OMS Frontend

本仓库是 OMS 官网前端（纯静态 HTML/CSS/JS）。需求、计划、状态、约束都写在 `doc_md/`，本文件只导航。
开始任务前先读相关 `doc_md` 文档。工作区总索引见上级 `../CLAUDE.md`。

## 仓库内容

- 根级三页：`index.html`、`download.html`、`hub.html`
- `assets/`：共享样式与脚本
- `doc_md/`：内部规划文档

## 部署（push 即上线）

- `origin` → GitHub `ZDaMexy/oms-frontend`（源码真相）
- `deploy` → 服务器裸仓库 `zdamexy-srv:/www/wwwroot/oms.git`
- 纯静态：`git push deploy main` → 服务器 `post-receive` `checkout -f` 到网站根 `/www/wwwroot/oms` → `chown www`（无构建步骤）。
- **连服务器只用别名 `ssh zdamexy-srv`**（`~/.ssh/config`，IdentityFile `id_ed25519_zdamexy`；勿用 `ssh root@39.105.55.78` 直连，会用错密钥）。
- 站点 `oms.zdamexy.work`（与 `zdamexy.work` homepage 共用同一台 ECS）。备案通过前阿里云拦截未备案域名（403），用裸 IP + Host 头验证。
- BT 的 nginx 重载用 `/etc/init.d/nginx reload`，勿用 `/usr/sbin/nginx`。

## doc_md 索引

三条线，每条维护五大文档（README / constraints / dev-plan / dev-progress / changelog）：

- 总索引：[doc_md/README](doc_md/README.md)
- **mainline/**（主线，最重要）：[README](doc_md/mainline/README.md) · [constraints](doc_md/mainline/constraints.md) · [dev-plan](doc_md/mainline/dev-plan.md) · [dev-progress](doc_md/mainline/dev-progress.md) · [changelog](doc_md/mainline/changelog.md)
- **subline/**：[README](doc_md/subline/README.md) · `P1-A/`（首版静态宣传页工作线）[README](doc_md/subline/P1-A/README.md) · [constraints](doc_md/subline/P1-A/constraints.md) · [dev-plan](doc_md/subline/P1-A/dev-plan.md) · [dev-progress](doc_md/subline/P1-A/dev-progress.md) · [changelog](doc_md/subline/P1-A/changelog.md)
- **other/**：[README](doc_md/other/README.md) · [constraints](doc_md/other/constraints.md) · [dev-plan](doc_md/other/dev-plan.md) · [dev-progress](doc_md/other/dev-progress.md) · [changelog](doc_md/other/changelog.md)

## 当前状态（以 dev-progress.md 为准）

Phase 1 宣传展示。根级三页 + 统一暗色霓虹视觉、用户向导航（首页/下载/功能介绍/未来规划）。已完成第二轮视觉系统重做：修复上一版 `site.css` 结构性损坏（多条规则被错误嵌套而失效），基于设计令牌重写样式表，新增首页演奏区（beatmania IIDX SP 7+1K，白/蓝/红 IIDX 配色）：可由离线解析的真实 BMS 谱面数据（`assets/scripts/chart-stargazer.js`，仅音符位置、无音频素材；解析工具 `parse-bms.cjs` 在工作区根、不发布，支持 5x 长条与 `#LNOBJ`）经 `site.js` 的 rAF 渲染器驱动下落：**播放按真实 BPM**（`BPS=bpm/60×RATE`，RATE 默认 1），**视觉 hi-speed** 由 `VISIBLE_BEATS` 独立控制（定稿 `RATE=1`+`VISIBLE_BEATS=0.72`，87 BPM 下约 0.5s 落速）；静音/窗口化/离屏暂停/HUD 实时计分；判定线下方控制台（转盘+7 键钮）随命中点亮；解析失败或 reduced-motion 回退 CSS 循环。资源版本 `v=20260523-12`。**版权待确认**：当前用第三方谱面 Stargazer [SAETHER]/Lime·saaa 的音符数据,发布前需替换或授权。另有均衡器视觉、无缝 marquee、SVG 站标与 favicon，并加入 `prefers-reduced-motion` 降级与 `:focus-visible` 焦点环。资源版本号 `v=20260523-1`。主标题、副标题、展示媒体、下载渠道、外链、FAQ 等正式文案待逐项确认。

## 关键硬约束

- Phase 1 用纯静态 HTML/CSS/JS，不预先引入框架或构建系统。
- 客户端是 **Windows-only**，文案不得出现误导性跨平台表述。
- 可安全公开的客户端事实：默认离线优先、默认不启用游戏内更新、保留在线接点但默认未连远端、BMS 为正式 ruleset（短名 `bms`）。不得把「保留在线入口」写成「已可直连私服」。
- 部署目标：阿里云 ECS（Ubuntu 24.04）+ Nginx，公开地址 `39.105.55.78`。
- 未确认事实只能标「待确认」，禁止写成正式对外口径。

## 同步纪律

改动若改变 计划/状态/约束/事实，对应更新 dev-plan / dev-progress / constraints / changelog，并保持 mainline 五大文档一致。
涉及前后端通信、接口契约、字段、错误码、下载入口、联调结论 → 同步 `../dev_bridge_md/`。
涉及客户端对接事实 → 以 `../oms_client_bridge_md/` 已确认快照为准。
subline 结论被采纳 → 回写 mainline。
