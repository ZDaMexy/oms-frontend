# Frontend Subline P1-A Changelog

## 2026-05-27

- 视觉打磨轮：缩放适配（移动端导航/状态栏窄屏）、Hero 标题 CJK 降字号、HUD 改造（EX-SCORE/COMBO 统一英文、删判定、GROOVE GAUGE IIDX 分段条）、删两页 cab 状态栏与 brand 日文 kana、收紧移动端 header、修 brand 大小字重合；资源版本 `v=20260526-5`

## 2026-05-26

- 落地 Claude Design 设计稿：第三轮视觉重做，推翻暗色霓虹，改为 Cabinet Mode（街机/电竞转播视觉）
- 产品重定位为 OMS = osu!lazer fork client（BMS ruleset）
- 页面由三页收敛为两页，删除 `hub.html`，规格/判定/路线图改为首页内锚点
- 新增中/英/日三语切换（`assets/scripts/i18n.js`）与四色信号强调切换
- 重写下载页 + 新增 `assets/scripts/download.js`：从 GitHub `ZDaMexy/oms/releases/latest` 拉取并三态渲染
- 重写 `assets/styles/site.css`（Cabinet Mode 设计令牌）与 `assets/scripts/site.js`（i18n + playfield + tweaks），复用 `chart-stargazer.js`
- 平台口径按硬约束收回为 Windows-only（设计稿原写 WIN/MAC/LINUX 未采纳）
- 已提交并双端推送上线，资源版本 `v=20260526-1`

## 2026-04-21

- 新增 `subline/P1-A/` 目录，作为前端 Phase 1 的首个支线功能方向占位
- 在 `P1-A/` 下初始化五大文档，用于后续支线归档

## 2026-04-23

- 将 `P1-A/` 从纯占位支线转为首版静态宣传页的实际工作线
- 创建首页、下载状态页和未来入口页的静态骨架，并接入统一导航、共享样式和基础脚本
- 以已导入的客户端快照为依据，填入第一批安全公开事实
- 将页面整体重写为产品官网风格，弱化开发汇报感，强化英雄区、卖点展示、下载 CTA 和未来功能预告
- 将页面入口改为根级 `index.html`、`download.html`、`hub.html`，并将导航收敛为用户向信息架构

## 2026-05-23

- 修复上一版 `site.css` 的规则嵌套损坏，恢复下载页与未来规划页的破损样式
- 基于设计令牌重写整份样式表，统一组件与微交互
- 新增首页纯 CSS 下落 note 演奏区（beatmania IIDX SP 7+1K，白/蓝/红 IIDX 配色）与均衡器视觉、双组无缝 marquee、内联 SVG 站标与 favicon
- 差异化各页 eyebrow 与标题文案，增强 `site.js`（滚动态头部、reduced-motion 降级），升级资源版本号
- 通过本地静态服务器 + 预览工具完成布局与交互验证
- 首页演奏区接入真实 BMS 谱面：离线解析为仅含音符位置的 `chart-xecus.js`，新增 rAF 滚动渲染器（归一速度、静音、窗口化、离屏暂停、HUD 实时计分、CSS 回退）
- 演奏区下方加入小字署名「曲 SHIKI ／ obj fity」（取自 BMS `#ARTIST`，该难度无单独 obj 字段）
- 判定线下方新增 IIDX 风格控制台：旋转转盘 + 7 白/蓝键钮，对齐轨道，音符到线时对应控件点亮；仅借鉴排布、用站点霓虹配色
- 修复音符未到判定线就消失：禁用 JS 生成音符上残留的 CSS `note-fall` 动画（原会覆盖内联 `top`），渲染器完全接管定位；并调快流速、收窄可见窗口
- 修复演奏区播放速度：改为按谱面真实 BPM 播放（`BPS=bpm/60×RATE`，RATE 默认 1），`VISIBLE_BEATS` 仅作视觉 hi-speed，与时序解耦（原固定 BPS 导致 182BPM≈2×、87BPM≈4× 加速）
- 演奏区手感定稿：`RATE=1` + `VISIBLE_BEATS=0.72`（87 BPM 下约 0.5s 落速）
- 演奏区演示谱面换为 Stargazer [SAETHER]（Lime / obj saaa）；解析器新增 `#LNOBJ` 长条支持；署名更新为「曲 Lime ／ obj saaa」
- 标记版权待确认：演奏区使用第三方谱面（Stargazer [SAETHER] / Lime·saaa）的音符数据，发布前需替换或授权

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 必须保持一致
- **回写主线**：若结论影响主线计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`