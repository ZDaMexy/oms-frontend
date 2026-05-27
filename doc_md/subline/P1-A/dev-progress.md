# Frontend Subline P1-A Progress

- 已完成第一轮产品官网化重写，包括首页、下载页和未来规划页
- 已将统一导航、共享样式和基础脚本接入页面结构，可本地直接预览
- 已将默认离线、默认关闭游戏内更新、保留在线接点和 BMS 正式 ruleset 等已确认事实写入页面状态区
- 已将页面结构收敛为根级 `index.html`、`download.html`、`hub.html`
- 已将首页重写为英雄区、核心卖点、下载 CTA 与未来功能预告布局
- 已完成第二轮视觉重做：修复 `site.css` 结构性损坏，基于设计令牌重写样式表，新增首页 beatmania IIDX SP 7+1K 演奏区（白/蓝/红 IIDX 配色）/均衡器视觉、无缝 marquee、SVG 站标与 favicon，并加入 reduced-motion 降级与焦点环
- 已用本地静态服务器 + 预览工具的 inspect/eval 验证三页布局、响应式与交互（含此前破损的下载页/未来规划页样式已恢复）
- 已让首页演奏区读取真实 BMS 谱面：离线解析器把 7key 谱转成仅含音符位置的 `chart-stargazer.js`，运行时 rAF 渲染器按真实 BPM 播放（`RATE`）+ 独立 hi-speed（`VISIBLE_BEATS`，定稿约 0.5s 落速）下落、静音、窗口化、离屏暂停、HUD 实时计分、判定线下控制台命中点亮，回退到 CSS 循环
- 已完成第三轮视觉重做（落地 Claude Design 设计稿）：推翻暗色霓虹，改为 **Cabinet Mode**（街机/电竞转播视觉，纯黑底 + 扫描线 + 信号青/红/lime LED + Big Shoulders Display/JetBrains Mono/Noto JP·SC）；产品重定位为 **OMS = osu!lazer fork client（BMS ruleset）**
- 已将页面结构由三页收敛为**两页**：`index.html` + `download.html`，**删除 `hub.html`**（规格/判定/路线图改为首页内锚点 `#capabilities`/`#timing`/`#phases`）
- 已新增中文默认 + 中/英/日三语切换（`assets/scripts/i18n.js`，持久化 localStorage），专有名词保留原文
- 已重写下载页：新增 `assets/scripts/download.js`，打开即 `fetch` GitHub `ZDaMexy/oms/releases/latest`，三态渲染（loading / 有发行版列 assets+notes+★主包直链 / 无发行版或失败退回跳转 releases 页并露出 `ERR · http_xxx`）
- 已把样式/脚本落到 `assets/styles/site.css` + `assets/scripts/site.js`（i18n + playfield 渲染器 + tweaks 面板：信号色红/黄/蓝/绿、Hi-Speed、Playfield Live/Pause）；复用既有 `chart-stargazer.js`
- 平台口径按硬约束**收回为 Windows-only**（设计稿原写 WIN/MAC/LINUX，未采纳）：`dl.platform` = WIN 10/11 · X64、安装步骤只讲 `OMS.exe`
- 已用本地静态服务器 + 预览工具验证：i18n 切换、四色强调、playfield 实时下落、Windows-only 口径正常，无控制台报错；下载页 GitHub 403（本机限流）时正确退回 no-release 态
- 已提交并双端推送（origin + deploy），服务器 `/www/wwwroot/oms` 部署确认；资源版本 `v=20260526-1`
- 待确认：演奏区当前用第三方谱面（Stargazer [SAETHER] / Lime·saaa）的音符数据，正式发布前需替换为自制/授权谱面或仅留占位
- 首页新公开口径（osu!lazer fork / OD·RAJA·LR2·IIDX 判定切换 / AC·EC·NC·HC·EXHC·FC 六槽 / 难度表 / 以 `ZDaMexy/oms` 为发行源）已由客户端作者确认为事实，并写入 `oms_client_bridge_md/` 已确认快照（2026-05-26）；OMS-IR、谱面社区为开发中，对外仅"跟进开发中"
- 下载入口结论（直连 GitHub releases、不经 Web 后端）已记入 `dev_bridge_md/`
- 当前仍有主标题、副标题、展示媒体、下载渠道、外链等内容待逐项确认
- 已完成上线后视觉打磨轮（2026-05-27，逐项 preview 实测）：缩放适配（移动端导航不再隐藏 + 可横滚、cab 状态栏按需换行、跨 320–2560 及横屏无溢出）；Hero 标题中/日文降为 `clamp(44px,4.6vw,88px)` 解决窄栏重叠；HUD 改造（EX-SCORE/COMBO 统一英文、删判定 PGREAT、GROOVE GAUGE 改 IIDX 分段条 + 大号百分比随 combo 填充）；删两页顶部 cab 状态栏与 brand 日文 kana、收紧移动端 header、修复删 kana 引发的 brand 大字/小字重合；资源版本 `v=20260526-5`
- 当前支线成果已经回写主线文档（mainline dev-progress / changelog）

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 必须保持一致
- **回写主线**：若结论影响主线计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`