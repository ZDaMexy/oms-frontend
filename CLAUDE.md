# CLAUDE.md — OMS Frontend

本仓库是 OMS 官网前端（纯静态 HTML/CSS/JS）。需求、计划、状态、约束都写在 `doc_md/`，本文件只导航。
开始任务前先读相关 `doc_md` 文档。工作区总索引见上级 `../CLAUDE.md`。

## 仓库内容

- 根级两页：`index.html`、`download.html`（特性/判定/路线图为首页内锚点 `#capabilities`/`#timing`/`#phases`，无独立 hub 页；导航文案「规格」已改为「特性」，锚点 id 仍为 `#capabilities`）
- `assets/styles/site.css`：Cabinet Mode 样式
- `assets/scripts/`：`site.js`（i18n + playfield 渲染器 + tweaks）、`i18n.js`（中/英/日词典）、`download.js`（GitHub release 拉取）、`chart-stargazer.js`（`window.OMS_CHART` 谱面数据）
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

Phase 1 宣传展示。已完成第三轮视觉系统重做（落地 Claude Design 设计稿）：推翻暗色霓虹，改为 **Cabinet Mode**（街机机台/电竞转播视觉语言，纯黑底 + 扫描线 + 信号青/红/lime LED + Big Shoulders Display/JetBrains Mono/Noto JP·SC）。产品重定位为 **OMS = 基于 osu!lazer 的 fork client，以 ruleset 形式增加 BMS 原生支持**。

- 根级两页：首页（cab 状态栏 / marquee 含三语切换 + 导航 / 两栏 Hero：左标题 + 右全幅 playfield，slate 显示曲名·难度名·曲师·BPM·进度 / capabilities 规格表 / 判定窗口条形图 / 下载块 / 五段路线图）；下载页（`fetch` GitHub `ZDaMexy/oms/releases/latest`，loading/有发行版/无发行版三态，失败退回跳转 releases 页）。`hub.html` 已删除。
- 中文默认 + 中/英/日切换（`assets/scripts/i18n.js`，持久化 localStorage），专有名词保留原文。
- Playfield：复用 `assets/scripts/chart-stargazer.js`（`window.OMS_CHART`，仅音符位置无音频；解析工具 `parse-bms.cjs` 在工作区根、不发布），`site.js` rAF 渲染器驱动，播放按真实 BPM、视觉 hi-speed 由 `VISIBLE_BEATS` 独立控制；离屏/切后台暂停（仅信任 IntersectionObserver + visibilitychange）；reduced-motion 回退。
- Tweaks 面板：信号色红/黄/蓝/绿（默认蓝）· Hi-Speed ×0.6/×1.0/×1.6 · Playfield Live/Pause。
- **平台口径收回为 Windows-only**（设计稿原写 WIN/MAC/LINUX，按硬约束未采纳）：`dl.platform` = WIN 10/11 · X64，安装步骤只讲 `OMS.exe`。
- 上线后视觉打磨轮（2026-05-27）：删除两页顶部 cab 状态栏与 brand 日文 kana；缩放适配（移动端导航可见+可横滚、cab→按需换行、跨 320–2560/横屏无溢出）；Hero 标题中/日文降字号 `clamp(44px,4.6vw,88px)` 解决窄栏重叠；HUD 改为 EX-SCORE / COMBO（三语统一英文）/ GROOVE GAUGE（IIDX 分段条 + 大号百分比，随 combo 填充），删除判定 PGREAT。GROOVE GAUGE 血条随信号色同步；Hi-Speed（5 档 ×0.6–×1.4）与 Playfield Live/Pause 移到 playfield slate 同行右侧，tweaks 面板仅留信号色。「规格」概念三语统一改为「特性」；所有大字标题去结尾句号（三语）；判定窗口区（#timing）从条形图改为「判定类型 + 难度」两下拉 + 表格（PG/GR/GD/BD/空PR），类型 IIDX/LR2/RAJA/OD（OD 用 osu!mania 公式），默认 RAJA easy(100%)；表格下方保留随选择实时重绘的条形可视化（PG/GR/GD/BD）。特性清单 cap.05「便携安装」（绿灯·已实现）+ cap.06「游戏社区」（IR/谱面库/论坛，红灯·开发中）。
- 资源版本 `v=20260526-15`。**版权待确认**：当前用第三方谱面 Stargazer [SAETHER]/Lime·saaa 的音符数据，发布前需替换或授权。正式文案、展示媒体、下载渠道、外链等仍待逐项确认。

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
