# Frontend Mainline Progress

## 当前状态

- 当前阶段是 Phase 1：宣传展示；后续阶段依次为账号系统、个人主页与成绩展示、排行榜、谱面下载入口与私服相关服务
- 仓库已初始化为独立 Git 仓库
- 当前已完成第一轮官网前端重写，站点视觉与内容组织已从“开发状态看板”切换为产品官网表达
- 当前已完成第二轮视觉系统重做：修复了上一版 `site.css` 的结构性损坏，并将整套暗色霓虹视觉升级为统一的设计令牌体系
- 当前已完成第三轮视觉系统重做（Claude Design 设计稿落地）：推翻暗色霓虹方向，改为 **Cabinet Mode**（街机机台 / 电竞转播视觉语言）；同步把产品定位由「BMS／mania 桌面客户端」重定位为 **OMS = 基于 osu!lazer 的 fork client，以 ruleset 形式增加 BMS 原生支持**
- 当前采用根级两页结构：`index.html`、`download.html`（原 `hub.html` 已删除，规格 / 判定 / 路线图改为首页内锚点 `#capabilities` / `#timing` / `#phases`）
- 当前站点为中文默认 + 中/英/日三语切换（`assets/scripts/i18n.js`，选择持久化到 `localStorage`），专有名词保留原文
- 页面正式内容、截图、下载说明和部分客户端相关事实仍待逐项确认

## 已完成

- 完成前端子仓库 `git init`
- 新增前端 `.gitignore`
- 编写仓库根 README，明确当前宣传展示定位与未来完整 OMS Web 路线
- 为 `doc_md/` 三条线补充占位内容，并让主线四件套围绕同一条产品路线对齐
- 将 `subline/` 从根目录平铺五件套收束为按功能方向拆分的目录结构，并建立 `P1-A/` 占位支线
- 为工作区根目录新增 `dev_bridge_md/`，并建立与前端文档的联动索引和同步规则
- `dev_bridge_md/` 已初始化为独立 Git 仓库，能够独立管理工作区级共享文档
- 将 Phase 1 的首个实现目标收敛为静态展示与宣传页骨架，而不是继续停留在抽象信息架构讨论
- 确认页面内容采用“先搭结构，再逐项向用户确认事实与文案”的推进方式
- 新增 `oms_client_bridge_md/` 规划，用于承接客户端侧关键信息快照并约束前端对外口径
- 已导入首轮客户端快照，可安全用于前端骨架的事实包括：默认离线、默认关闭游戏内更新、保留在线接点但默认未连远端、BMS 为正式 ruleset
- 已创建并重写首版静态页面：`index.html`、`download.html`、`hub.html` 以及共享样式、脚本
- 已将导航结构收敛为面向用户的“首页 / 下载 / 功能介绍 / 未来规划”
- 已将首页重写为产品官网英雄区、核心卖点区、下载 CTA 与未来功能预告结构
- 已将下载页和未来规划页改写为产品语气，使用“即将推出”而不是开发汇报式措辞
- 已修复 `site.css` 中多条规则被错误嵌套进无关规则导致失效的损坏（`.subhero-panel`、`.button-disabled`、`.split-box--accent`、`.channel-card--primary` 等此前在下载页/未来规划页不生效）
- 已用设计令牌（颜色 / 间距 / 圆角 / 字阶）重写整份样式表，统一卡片、按钮、导航、页脚等组件，并加入卡片悬浮、滚动渐显、粘性头部滚动态等微交互
- 已为首页打造纯 CSS 的下落 note 演奏区，采用 beatmania IIDX SP 的 7+1K 布局（左侧 scratch + 白/蓝键交替，白/蓝/红 IIDX 配色与键位宽度）配判定线与 EX-SCORE/COMBO/Groove HUD，并将信号带 marquee 改为无缝循环
- 已新增内联 SVG 站标与 favicon、`theme-color`，并去除各页 eyebrow 与标题重复的文案
- 已加入 `prefers-reduced-motion` 降级与 `:focus-visible` 焦点环，提升可访问性
- 已让首页演奏区可读取真实 BMS 谱面：用 Node 离线解析器（`parse-bms.cjs`，位于工作区根、不随前端发布；支持通道 11-19/16/18-19、5x 长条与 `#LNOBJ`）把 7key BMS 谱解析为「仅含音符列+节拍位置」的紧凑数据 `assets/scripts/chart-stargazer.js`（不含任何 `.wav`/`.bmp` 等版权素材），`site.js` 用 rAF 滚动渲染器消费它
- 演奏区渲染器的时序模型（已修正并定稿）：**播放速度按谱面真实 BPM**（`BPS = bpm/60 × RATE`，`RATE` 默认 1=真实曲速），与**视觉 hi-speed**（`VISIBLE_BEATS`，仅控制音符下落快慢/间距）解耦；静音；离屏/切后台自动暂停（仅信任 IntersectionObserver 与真正的 visibilitychange，避免 iframe 预览里 `document.hidden` 恒为 true 导致谱面不渲染）；解析失败或 reduced-motion 时回退；HUD 的 COMBO/EX-SCORE 随音符经过判定线实时累加并在循环时归零；判定线上方为键钮控制台、下方为 EX-SCORE / COMBO / JUDGE / GAUGE 大数字 HUD
- 已落地第三轮 Cabinet Mode 设计稿（来自 Claude Design handoff bundle）：
  - 视觉：纯黑底 `#050608` + 扫描线叠加 + vignette；信号青/红/lime live LED 系统；Big Shoulders Display + JetBrains Mono + Noto Sans JP/SC 字体；硬角、hazard 条
  - 首页：cab 状态栏 / marquee（品牌 + 三语切换 + 导航）/ 两栏 Hero（左 marquee 标题 + 右全幅 playfield，playfield 上方单行 slate 显示曲名·难度名·曲师·BPM·实时进度/总时长）/ capabilities 规格表 / 判定窗口可视化条形图 / 下载块 / 五段路线图 / 页脚
  - 下载页（`download.html` + `assets/scripts/download.js`）：打开即 `fetch` GitHub `ZDaMexy/oms/releases/latest`，三态渲染（loading / has-release 列出 assets+notes+主包★直链 / no-release 或失败退回跳转 GitHub releases 页，并露出 `ERR · http_xxx` 短码）；未认证 API 每 IP 每小时 60 次，限流时优雅退回
  - Tweaks 面板（右下）：信号色红/黄/蓝/绿四色（默认蓝）· Hi-Speed ×0.6/×1.0/×1.6 · Playfield Live/Pause
  - 平台口径按本仓库硬约束**收回为 Windows-only**（设计稿原写 WIN/MAC/LINUX，未采纳）：`dl.platform` = WIN 10/11 · X64、安装步骤只讲 `OMS.exe`
  - 文件：样式落到 `assets/styles/site.css`、脚本 `assets/scripts/site.js`（i18n + playfield + tweaks）、新增 `assets/scripts/i18n.js`（三语词典）与 `assets/scripts/download.js`；复用既有 `assets/scripts/chart-stargazer.js`（`window.OMS_CHART`）
- 已完成上线后视觉打磨轮（2026-05-27，逐项经 preview 实测）：
  - 缩放适配：移动端导航不再 `display:none`（marquee 换行 + nav 紧凑可横滚）、cab 状态栏改按需换行（不再裁字）；跨 320/390/768/900/1024/1366/1920/2560 及横屏验证无横向溢出
  - Hero 标题 CJK 适配：原 `clamp(64,10vw,156)` 为英文短词调的，中文全角字在窄左栏会撑成 4 行重叠；中/日文单独降为 `clamp(44px,4.6vw,88px)` + 行高 0.95，各档两行
  - HUD 改造：EX-SCORE / COMBO 三语统一英文，删除「判定 PGREAT」格，GROOVE GAUGE 接管其位置并改为 IIDX 风格分段 LED 条 + 大号百分比（随 combo 实时填充）
  - 顶部 cab 状态栏（系统/主机/机台信号灯）两页全删；brand 旁不随语言变化的日文 kana（オーエムエス）移除；移动端 header 收紧（语言+导航并一行紧贴 brand）；修复删 kana 后 brand__sub 绝对定位换行压到大字的重合（加 `white-space:nowrap`）
  - GROOVE GAUGE 血条/数字改用 `--cyan` 信号色变量，随 tweaks 红/黄/蓝/绿同步
  - Hi-Speed 与 Playfield Live/Pause 控件从 tweaks 面板移到 playfield slate 同行右侧（field-top），tweaks 面板仅留信号色；JS 改全局绑定 `[data-set]`；移动端 field-top grid 行改 auto，控件换行不溢出
  - Hi-Speed 改 5 档 ×0.6/×0.8/×1.0/×1.2/×1.4（按倍率算 `VISIBLE_BEATS = 0.78 / 倍率`）
  - 文案：「规格」概念三语统一改为「特性」（nav / sec02 标题与序号 / 查看 CTA / 正文双 mode 规格）；锚点 id `#capabilities` 不变
  - 文案：所有大字标题去结尾句号（hero / sec02–05 / dl / none / install，中日「。」+ 英文「.」，三语）
  - 判定窗口区改造：条形图 → 「判定类型 + 难度」两下拉 + 表格（PG/GR/GD/BD/空PR）；类型 IIDX/LR2/RAJA/OD，OD 用 osu!mania 公式（`64/97/127/151 − 3×OD`、MAX ±16，档位 OD 5–10），默认 RAJA easy(100%)；数据在 `site.js` 的 `initTiming()`，移动端表格容器横向滚动
  - 表格下方保留原条形可视化（PG/GR/GD/BD 居中条），随下拉选择实时重绘、按最大窗口缩放、支持早晚不对称（如 RAJA +220/−280）；空PR 不入图
  - sec03 lede 精简为仅「判定窗口可按类型与难度切换」（去掉单位/来源/免责一句）
  - 资源版本迭代至 `v=20260526-14`（破缓存）

## 下一步

- 向用户逐项确认首页主标题、副标题、功能卖点、下载说明、路线图、FAQ 和外链信息
- 从 `oms_client_bridge_md/` 导入已确认的客户端事实，用于约束下载区、兼容性说明和未来功能预留文案
- 继续迭代首版静态页面内容与视觉细节
- 按用户确认结果替换首页、下载页和未来入口页中的占位内容
- 在 `subline/` 下按实际需求逐步增加新的功能方向目录，而不是继续平铺支线文档
- 当出现首个真实前后端通信议题时，将其同步写入 `dev_bridge_md/`
- 为后续账号、成绩、排行榜和下载入口保留导航与页面扩展位

## 验证结论

- 当前文档结构已经显式覆盖“宣传展示 -> 账号系统 -> 成绩展示 -> 排行榜 -> 下载入口”的完整路线
- 当前支线文档结构已经改为“功能方向目录 + 五大文档”的收束方式，首个目录为 `P1-A/`
- 当前前端文档已经建立到工作区级桥文档 `dev_bridge_md/` 的联动索引
- 当前前端与桥文档的联动已经建立在独立仓库基础上，可单独提交共享文档变更
- 当前仓库仍没有动态功能实现，任何后续功能接入都需要继续同步更新主线文档
- 当前 Phase 1 的执行重心已经从“纯文档占位”前移到“先落静态展示页骨架，再补内容确认”
- 当前前端对客户端事实的引用需要经过 `oms_client_bridge_md/` 的快照确认，避免口径漂移
- 当前已具备一批可直接写入宣传页状态说明的客户端事实，但仍不应把联网能力描述成已可用
- 当前静态页面骨架已经可本地直接预览，页面结构、导航与分区具备继续填充内容的基础
- 当前两页（首页 + 下载页）已统一为 Cabinet Mode 视觉语言，可继续直接填充正式内容
- 当前第三轮 Cabinet Mode 已通过本地静态服务器 + 预览工具验证：首页 i18n（中/英/日切换）、四色信号强调切换、playfield 实时下落（COMBO 累加、进度跳秒）、Windows-only 平台口径均正常，控制台无报错；下载页在 GitHub API 403（本机 IP 限流）时正确退回 no-release 态并显示 `ERR · http_403`
- 当前视觉系统已通过本地静态服务器（`python -m http.server`）+ 预览工具验证：桌面英雄区为双栏、移动端单栏并切换汉堡导航、当前页导航高亮、滚动渐显与无缝 marquee 均正常，控制台无报错；此前损坏的下载页/未来规划页样式经计算样式核对已恢复
- 当前截图后端在本环境不稳定（大视口超时），视觉正确性主要通过预览工具的 inspect/eval 计算样式核对确认

## 风险与待确认

- 当前尚无视觉稿、品牌资源和正式页面内容
- 后续接口契约尚未确定，页面预留方式需要和后端计划持续对齐
- 当前工作区与客户端工作区分离，若不通过桥文档快照同步，客户端相关事实容易在宣传文案中漂移
- 当前首页演奏区使用的是第三方 BMS 谱面（Stargazer [SAETHER] / 曲 Lime、obj saaa）的音符位置数据，仅作演示动效，演奏区下方已加小字署名「曲 Lime ／ obj saaa」（该文件 `#ARTIST` 明确写有 `Lime / obj:saaa`）；正式公开发布前仍需确认：是否保留第三方谱面数据、换成自制/已授权谱面、或仅保留 CSS 占位演奏区，以规避版权风险

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 必须围绕同一现实状态保持一致
- **跨仓库主线**：若变更涉及前后端共同的产品阶段或边界，需对齐另一仓库的 `mainline/` 对应文档
- **桥文档**：若涉及前后端通信 / 接口契约 / 字段语义 / 错误码 / 下载入口 / 联调结论 → 同步 `dev_bridge_md/`
- **客户端快照**：若涉及客户端对接事实（端点 / ruleset_id / score submission / 联机 / 更新通道）→ 以 `oms_client_bridge_md/` 已确认快照为准，并回写受影响文档
