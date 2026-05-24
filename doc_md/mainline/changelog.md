# Frontend Mainline Changelog

## 2026-04-21

- 将 `oms-frontend/` 初始化为独立 Git 仓库
- 新增前端 `.gitignore`，忽略 `node_modules/` 与 `dist/`
- 编写仓库根 README，明确当前阶段是宣传展示，后续阶段依次为账号系统、个人主页与成绩展示、排行榜、谱面下载入口与私服相关服务
- 为 `doc_md/` 下的主线、支线、调研线文档写入初始占位内容
- 将主线四件套对齐到同一条 OMS Web 完整产品路线
- 将 `subline/` 从平铺五件套重构为按功能方向拆分的目录结构，并新增 `P1-A/` 占位支线
- 建立工作区根目录 `dev_bridge_md/`，并为前端文档补充桥文档联动索引与同步规则
- 将 `dev_bridge_md/` 初始化为独立 Git 仓库，用于单独管理工作区级共享文档

## 2026-04-23

- 将 Phase 1 的首个实现目标收敛为静态展示与宣传页骨架
- 明确页面内容采用“先搭结构，再逐项向用户确认”的推进方式
- 为客户端事实同步新增 `oms_client_bridge_md/` 规划，并将其纳入前端文档联动规则
- 导入首轮客户端快照，并采纳默认离线、默认关闭游戏内更新、保留在线接点和 BMS 正式 ruleset 等安全公开事实
- 创建首版静态站骨架，包括首页、下载状态页、未来入口页以及共享样式和脚本
- 将站点视觉和内容组织从开发状态看板重写为产品官网表达
- 将多页面结构收敛为根级 `index.html`、`download.html`、`hub.html`
- 将导航改为面向用户的“首页 / 下载 / 功能介绍 / 未来规划”，并统一首页、下载页和未来规划页的暗色霓虹视觉系统

## 2026-05-23

- 修复 `site.css` 结构性损坏：多条规则（`.subhero-panel`、`.button-disabled`、`.split-box--accent`、`.channel-card--primary` 等）此前被错误嵌套进无关规则而失效，导致下载页与未来规划页样式破损
- 基于设计令牌（颜色 / 间距 / 圆角 / 字阶）重写整份样式表，统一组件并加入卡片悬浮、滚动渐显、粘性头部滚动态、staggered 卡片入场等微交互
- 为首页新增纯 CSS 下落 note 演奏区，按 beatmania IIDX SP 的 7+1K 还原（左侧 scratch + 白/蓝键交替、白/蓝/红 IIDX 音符配色与键位宽度、键帽与判定线、EX-SCORE/COMBO/Groove HUD），并将信号带 marquee 改为双组无缝循环
- 新增内联 SVG 站标与 favicon、`theme-color` 元信息，并将各页重复的 eyebrow/标题改为有层次的差异化文案
- 增强 `site.js`：粘性头部滚动态、rAF 节流滚动、`prefers-reduced-motion` 降级；样式层补充 `:focus-visible` 焦点环
- 资源版本号由 `v=20260423-1` 升级为 `v=20260523-1`
- 新增 `.claude/launch.json`（静态预览服务器配置），用于本地预览与视觉验证
- 新增首页演奏区的真实 BMS 谱面驱动：离线 Node 解析器 `parse-bms.cjs`（工作区根，不发布）将一张 7key BMS 谱解析为仅含音符列+节拍的紧凑数据 `assets/scripts/chart-xecus.js`（无音频/图形素材）；`site.js` 新增 rAF 滚动渲染器，按归一速度循环、静音、窗口化渲染、离屏暂停，并实时累加 COMBO/EX-SCORE；保留 CSS 循环作为回退
- 在演奏区下方加入小字署名「演示谱面 · Xecus [Another]（7K）　曲 SHIKI ／ obj fity」（取自 BMS `#ARTIST`；该难度无单独 obj 字段，故 obj 记为原包作者 fity），署名为可访问文本、非 aria-hidden
- 在判定线下方新增 IIDX 风格控制台：左侧旋转转盘（scratch）+ 7 个白/蓝交替的键钮，按列对齐轨道；音符落到判定线时对应控件实时点亮（JS hit flash）。仅借鉴硬件排布，配色用站点霓虹色（非绿色原配色），未复制原始美术
- 修复演奏区音符未落到判定线就消失的问题：`.note` 残留的 CSS `note-fall` 动画会覆盖 JS 内联 `top`，导致音符实际由旧动画驱动而被渲染器按节拍提前删除；现对 JS 生成的音符设 `animation: none`，由渲染器完全接管定位（音符底边对齐判定线），并将流速/可见窗口调为 `BPS≈5.8` / `VISIBLE_BEATS≈4.5`
- 修复演奏区播放速度过快：此前用固定 `BPS=5.8` 推进谱面时间轴，与谱面真实 BPM 无关，导致按 BPM 不同被加速（182BPM≈2×、87BPM≈4×）。改为 `BPS = bpm/60 × RATE`（按真实 BPM 播放，`RATE` 默认 1），并把 `VISIBLE_BEATS` 明确为仅控制视觉 hi-speed/音符间距，与播放时序解耦
- 演奏区手感定稿：`RATE=1`（真实 BPM 播放）+ `VISIBLE_BEATS=0.72`（87 BPM 下单音符约 0.5s 落到判定线）；前端资源版本推进至 `v=20260523-12`
- 演奏区演示谱面由 Xecus [Another] 换为 Stargazer [SAETHER]（曲 Lime / obj saaa，☆11，BPM 87）；解析器 `parse-bms.cjs` 新增 `#LNOBJ` 长条解析支持；小字署名同步更新为「曲 Lime ／ obj saaa」，旧 `chart-xecus.js` 已删除、改为 `chart-stargazer.js`
- 记录版权待确认项：演奏区当前使用第三方 BMS 谱面（Stargazer [SAETHER] / Lime·saaa）的音符位置数据，正式发布前需确认替换或授权

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 必须围绕同一现实状态保持一致
- **跨仓库主线**：若变更涉及前后端共同的产品阶段或边界，需对齐另一仓库的 `mainline/` 对应文档
- **桥文档**：若涉及前后端通信 / 接口契约 / 字段语义 / 错误码 / 下载入口 / 联调结论 → 同步 `dev_bridge_md/`
- **客户端快照**：若涉及客户端对接事实（端点 / ruleset_id / score submission / 联机 / 更新通道）→ 以 `oms_client_bridge_md/` 已确认快照为准，并回写受影响文档
