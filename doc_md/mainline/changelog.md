# Frontend Mainline Changelog

## 2026-06-02

- 首页演奏区演示谱面更换：由 Stargazer [SAETHER]（Lime / obj saaa，BPM 87）换为 **告白/告別 (BMS edit.) [Lost]**（曲 Greetea feat.ninnikuu，obj. MiyakoMeow，BG rapha & Liuyanzhi，BPM 161；来源 beatoraja Satellite sl1 `[hongun]khkb/_7_lost.bme`，7key）；用 `parse-bms.cjs` 离线解析为仅含音符位置的紧凑数据，新文件 `assets/scripts/chart-lost.js`（标题为日文，解析器 latin1 读取后手工修正回 `告白/告別 (BMS edit.)`），删除旧 `chart-stargazer.js`
- index.html：`<script>` 引用改为 `chart-lost.js`；playfield slate 曲名/难度/署名更新为「告白/告別 (BMS edit.) · [Lost] · Greetea feat.ninnikuu / obj. MiyakoMeow」（BPM/进度/长度仍由 `site.js` 按 `window.OMS_CHART` 动态计算，实测 BPM 161、长度 2:48、1629 音符）
- 经本地静态服务器 + preview 实测：reload 后谱面正常下落、HUD（EX-SCORE/COMBO/GROOVE GAUGE）实时累计、控制台无报错
- 版权待确认项随之更新：演示谱面仍为第三方作品（告白/告別 [Lost]），正式发布前同样需替换为自制/授权谱面或仅留 CSS 占位
- 同日二次调整（均经 preview 实测）：
  - 修复长条（LN）视觉：原渲染在「头」过判定线即整段删除（`progress < -0.06`），长条只闪一下巨块就消失。改为按 head→tail 画成「保持条」——头到判定线时钉在底部、条体随尾下落从底部收缩，尾过线（`tailProg < -0.06`）才清除并记 combo；保持期间对应 deck 键位常亮。`site.js` 渲染循环重写，移除不再使用的 `pxPerBeat`
  - 基准下落速度调慢 30%：`VISIBLE_BEATS` 初值与 `HS_BASE` 由 0.78 → 1.114（≈ 0.78 / 0.7），Hi-Speed 5 档倍率仍以此为 ×1.0 基准
  - slate 署名：因不安排音乐播放，由「Greetea feat.ninnikuu / obj. MiyakoMeow」改为只显示谱师 **obj. MiyakoMeow**
  - slate 曲名「告白/告別 (BMS edit.)」加外链跳转到 YouTube `https://www.youtube.com/watch?v=0ptk5HM1g8E`（新增 `.slate__title-link` 样式：虚线下边框 + hover/focus 信号色，`target=_blank` `rel=noopener`）
- 下载区（sec04）标题由街机风「投币启动 / Insert cabinet / コイン投入」改为下载语义「即刻下载 / Download now / 今すぐダウンロード」（`i18n.js` `sec04.title` 三语 + index.html 静态兜底，保留 `<em>` 强调结构）
- 特性卡 cap.03（Gauge · 点灯记录）的 lamp 清单上色：AC/EC/NC/HC/EXHC/FC 各 lamp 拆为带类 chip（`i18n.js` `cap.03.body` 三语 + index.html 静态兜底，lamp 缩写不翻译只随语言换后缀），新增 `.cap__body .lamp--*` 样式——AC 紫(#b07bff) · EC 绿(#3ddc84) · NC 蓝(#4d84ff) · HC 高亮白(白+双层辉光，突出) · EXHC 金(#ffcf4d+辉光) · FC 流动彩虹（gradient `background-clip:text` + `lampRainbow` 3s 动画，`prefers-reduced-motion` 下停动）
- 特性清单新增一条 cap.06「外部谱库」（DIRECTORY INDEX · MANIA/BMS，绿灯·已实现），插在 cap.05「便携安装」与原「游戏社区」之间，原游戏社区顺延为 cap.07（i18n 键 cap.06.* 新增、原 cap.06.* 重命名为 cap.07.*，index.html 同步加行并改编号 06→07）；文案：直接选定本地目录索引谱面（含 mania / BMS），无需为 OMS 单独准备谱库——为客户端作者新声明的事实，已同步记入 `../oms_client_bridge_md/`
- cap.06「外部谱库」文案补「无额外储存占用」（三语：zh 无额外储存占用 / en no extra storage footprint / ja 追加のストレージ使用なし）
- 路线图区（sec05）标题由「五个阶段 / Five phases / 五つの段階」改为「开发阶段 / Development phases / 開発段階」（正文「分五段推进」未动，仍准确）
- cap.01「双模式」正文改写（三语）：由「保留 mania 游玩体验，与 bms 组成双 mode 特性」改为「保留 mania 模式，与 bms 模式结合游玩，不用再切客户端啦」（en/ja 同步加「no more switching clients / もうクライアントを切り替えなくていい」）
- 资源版本 `v=20260602-8`（两页全部资源引用同步破缓存）
- **站点收敛为单页**：把 download.html 的下载功能整体并入首页 `#download` 段，删除 download.html（站点由两页变单页）：
  - index.html `#download` 段在原静态信息面板（版本/平台/包格式/更新器/在线/时间戳）下方新增 release manifest 三态区（loading / has-release 列 assets+notes+★主包直链 / no-release 退回 GitHub）与 4 步安装步骤，均复用既有 `dlp.*` i18n 与 `.rel`/`.install` 样式；index.html 加载 `download.js`
  - 导航与页脚「下载」由 `download.html` 改为锚点 `#download`；移除 dl__head 里指向 download.html 的 ghost 按钮（真正下载 CTA 由 manifest 的 `data-rel-primary` 承担）
  - sec04.lede 三语改为「发行包从 GitHub Releases 实时拉取，下载/解压/运行全在这一页」；安装步骤 eyebrow `dlp.ins.no` 去掉「05 ·」（避免与路线图 05 冲突），改为「运行 / RUN IT / 起動」
  - 下载契约不变：仍直连 GitHub releases、不经 Web 后端（与 `dev_bridge_md/` 结论一致），仅入口位置由独立页改为首页段落
  - preview 实测：download.js 在首页跑通（本机限流时正确退回 no-release + `ERR · http_403`），安装步骤 4 步、导航锚点 `#download`、无横向溢出、控制台无报错
- 页眉/页脚导航按页面实际滚动顺序重排：首页 → 特性(#capabilities) → 判定(#timing) → 下载(#download) → 规划(#phases)，`data-n` 编号同步改为 01–05（此前「下载」停在 02 是独立页时代遗留，下载并入首页后移到 04）
- 删除下载块静态信息面板 `dl__meta`（版本/平台/包格式/更新器/在线/时间戳）与两栏 `dl__grid` 包裹，`dl__head`（标题+lede+PORTABLE 软标）改为独立全宽，其下保留 release manifest 三态 + 安装步骤；`dl.*` i18n 键随之闲置（保留无害）
- sec04.lede 文案去 AI 味重写（三语）：旧「发行包从 GitHub Releases 实时拉取，下载、解压、运行——全在这一页」与下方安装步骤重复且带空话，改为克制版「发行包都在 GitHub Releases，下面同步最新一版。公开下载将在 Phase 1 收尾开放。」
- sec04.lede 再简化（三语）→「可自行选择下方下载方式。」（en: Pick a download option below. / ja: 下のダウンロード方法から選べる。）
- 下载区新增一个下载/加入方式：**QQ 群 · 650530995** 一键加群按钮（多平台官方分享链接 `qun.qq.com/universal-share/share`，群主提供，`busi_data` 解出群号 650530995，公开邀请链非密钥）；按钮同时加入「有发行版」`rel__cta` 与「无发行版」`rel__none-cta` 两态，保证任一状态都可见；新增 i18n 键 `dlp.cta.qq`（QQ 群 · 650530995 / QQ GROUP · / QQ グループ ·）
- 下载区精简 + 下载方式按钮重设计：
  - 删除 dl__head 的 `dl__lede`（「可自行选择下方下载方式。」）与「PORTABLE · 即将开放」软标（仅下载块那个；hero 区同名软标保留）；下载块只留 04 · 下载 / 即刻下载 标题
  - 删除无发行版态（rel__none）的 `NO PUBLIC RELEASE FILED YET` 状态行 + `还在备料` 标题 + 「公开下载入口…」lede，无发行版态现在只剩下载方式按钮
  - GitHub / QQ 群两个跳转按钮由原 `.btn` 重设计为成对 **method tile**（`.dl-methods`/`.dl-method`：图标 SVG + 名称 + 副标 + 箭头，左侧 hover 信号色条、上浮、focus 环；GitHub octocat mark + QQ 聊天气泡图标；两列等宽、≤640 单列）；有发行版态保留 `data-rel-primary` 主下载按钮在上、tiles 在下，无发行版态仅 tiles
  - `data-rel-github` / `data-rel-github-fallback` 仍在 tile 上（download.js 行为不变，null-safe 通过）；新增 i18n `dlp.m.gh`/`dlp.m.qqh`/`dlp.m.qq`；`dlp.none.*`、`dlp.cta.qq/github` 等键随之闲置（保留无害）
  - preview 实测：lede/软标/无发行版文案均移除，两态各 2 tile、当前无发行版态显示 GitHub+QQ tile、href 正确、SVG 图标在、无横向溢出、控制台无报错
- **删除 GitHub 自动拉取**：移除 `download.js`（文件删除 + index.html 脚本引用删除）与整套 `.rel` 三态（loading / 有发行版 tag+meta+primary+assets+notes / 无发行版）；下载方式改为两枚**常驻静态** `.dl-method` tile（GitHub Releases 跳转 + QQ 群一键加群跳转），不再调用 GitHub API；安装步骤①文案由「在上面 ASSETS 列表挑 ★ 主包」改为「点上面 GitHub Releases 进去下最新发行包（.zip）」（三语）；`dlp.fetching`/`dlp.k.*`/`dlp.none.*`/`dlp.cta.*` 等键随之闲置（保留无害）
- 首页 hero CTA：软标「PORTABLE · 即将开放」（`cta.win_soon`）替换为主按钮「即刻下载 ↓」（`cta.download`，新增 i18n 三语），`href="#download"` 平滑跳到下载区；`cta.win_soon` 键闲置（保留无害）
- 删除「解压开玩」安装步骤板块（`section.install` 整段 + 4 步）；`dlp.ins.*` 键随之闲置
- 路线图（sec05）：删除 `sec05.lede`（「OMS 网站分五段推进…逐段开放」整段，`section__lede` 元素移除，i18n 键闲置）；5 条 phase.N.body 全部去 AI 味 + 去内部引用重写（三语）——尤其 P2 原文「前后端联调…写在工作区的桥文档里」属内部文档引用、不应对外，已删；各条改为简短、面向访客的「这一阶段给用户什么」
- **路线图整体重定义**（按用户指示）：5 阶段 name/sub/body 全部重写（三语）+ 状态调整——
  - P1「底层加固」(RULESET · ENGINE)：完善 BMS ruleset、mod、游玩体验、皮肤系统、性能优化等 · **开发中**（`phase.status.current` 文案由「当前/CURRENT」改为「开发中/IN DEV/開発中」）
  - P2「初版官网」(STATIC SITE)：无登录的 OMS 官网 · 计划中
  - P3「OMS-IR」(LOGIN · SCORE · RANK)：注册账号，客户端内登录/传分/排行（也许支持 LR2/RAJA 本地存档分数上传）· 计划中
  - P4「社区官网」(COMMUNITY HUB)：像 osu!(official) 那样的中心化社区官网 · 计划中
  - P5「开放接口」(API · BOT)：API 与外部接通、QQ bot、非 OMS 客户端向 OMS-IR 传分等 · 计划中
  - 仅 P1 开发中，P2–P5 全部 计划中（P2 加 `is-future` 类与其余对齐）
  - ✅ **已决（用户确认）：新路线图提升为工作区权威定义**，并传播到：根 `CLAUDE.md` §2（唯一权威）、前/后端/桥的 `dev-plan` 产品阶段列表与「当前阶段」表述、前/后端/桥的 `doc_md/README` 与 mainline README/constraints/dev-progress、前/后端顶层 README、前/后端 CLAUDE 当前状态。旧模型（宣传展示→账号→主页成绩→排行榜→谱面下载）废弃。仓库映射：oms-frontend = P2 初版官网；oms-backend = P3 OMS-IR(+P5)；P1 底层加固为客户端侧。**剩余未改**：各仓库 `subline/P1-A` 命名框架说明与零散描述性「宣传展示」措辞（半历史性，由 §2「逐步对齐」说明覆盖）；changelog 历史条目不动
- 资源版本 `v=20260602-19`（index 全部资源引用同步破缓存）

## 2026-05-27

- 上线后视觉打磨轮（均经 preview 跨尺寸实测）：
  - 缩放适配：修复移动端导航消失（≤640 原 `display:none`）、cab 状态栏窄屏裁字（改按需换行）；跨主流分辨率/竖横屏无横向溢出
  - Hero 标题中/日文降字号（`clamp(44px,4.6vw,88px)`）解决全角字在窄栏撑成多行重叠
  - HUD：EX-SCORE / COMBO 三语统一英文；删除判定 PGREAT 格；GROOVE GAUGE 改 IIDX 风格分段 LED 条 + 大号百分比，随 combo 实时填充
  - 删除两页顶部 cab 状态栏（系统/主机/机台信号灯）；移除 brand 旁日文 kana；收紧移动端 header；修复 brand 大字/小字重合
  - GROOVE GAUGE 血条/辉光/机框/百分比改用 `--cyan` 信号色变量，随 tweaks 红/黄/蓝/绿同步
  - Hi-Speed 与 Playfield Live/Pause 控件从 tweaks 面板移到 playfield slate 同行右侧（field-top）；tweaks 面板只留信号色；JS 改为全局绑定 `[data-set]`；移动端 field-top grid 行改 auto 让控件换行不溢出
  - Hi-Speed 改 5 档 ×0.6/×0.8/×1.0/×1.2/×1.4（按倍率算 `VISIBLE_BEATS = 0.78 / 倍率`）
  - 文案：「规格」概念三语统一改为「特性」（zh 规格→特性、en SPECS/Spec→FEATURES/Feature、ja 仕様/スペック→特性），含 nav / sec02 标题与序号 / 查看 CTA / 正文「双 mode 规格→特性」；锚点 id `#capabilities` 不变
  - 文案：所有大字标题去掉结尾句号（中日「。」、英文「.」）——hero / sec02–05 / dl 标题 / none / install，三语
  - 判定窗口区（#timing）从条形图改为「判定类型 + 难度」两个下拉菜单 + 表格视觉（列 PG/GR/GD/BD/空PR）：IIDX（单档）/ LR2（easy~very hard）/ RAJA（very easy~very hard 5 档，含早晚不对称值）/ OD（osu!mania，按 `64/97/127/151 − 3×OD`、MAX ±16 算，档位 OD 5–10）；默认 RAJA easy(100%)；数据源 = 用户提供图片 + osu! wiki Overall Difficulty
  - 在表格下方保留并复活原条形可视化（PG/GR/GD/BD 居中条，随当前选择实时重绘、按最大窗口缩放、支持早晚不对称如 RAJA 的 +220/−280；空PR 因量级过大不入图）
  - 文案：sec03 lede 去掉「下方数值单位毫秒，来自社区资料与 osu! wiki，仅供参考，以发布版为准」一句，仅留「判定窗口可按类型与难度切换」
  - 特性清单：cap.05 由「离线优先」改为「便携安装」（单便携包安装、覆盖更新、包内存数据、无磁盘污染；绿灯 led--on · 已实现）；新增 cap.06「游戏社区」（IR / 谱面库 / 社区论坛等中心化平台；红灯 led--live · 开发中）
- 资源版本 `v=20260526-15`

## 2026-05-26

- 落地 Claude Design 设计稿 handoff bundle：第三轮视觉系统重做，推翻暗色霓虹方向，改为 **Cabinet Mode**（街机机台 / 电竞转播视觉语言）
- 产品重定位：由「BMS／mania 桌面客户端」改为 **OMS = 基于 osu!lazer 的 fork client，以 ruleset 形式增加 BMS 原生支持**（品牌副标 BMS · osu!lazer fork）
- 删除 `hub.html`：规格 / 判定 / 路线图改为首页内锚点 `#capabilities` / `#timing` / `#phases`，导航与页脚同步
- 新增中/英/日三语切换（中文默认），新增 `assets/scripts/i18n.js`（三语词典）；专有名词保留原文
- 重写下载页：`download.html` + 新增 `assets/scripts/download.js`，打开即 `fetch` GitHub `ZDaMexy/oms/releases/latest`，三态渲染（loading / 有发行版列 assets+notes+★主包直链 / 无发行版或失败退回跳转 GitHub releases 页）
- 重写 `assets/styles/site.css`（Cabinet Mode 设计令牌）与 `assets/scripts/site.js`（i18n + playfield 渲染器 + tweaks 面板）；复用既有 `assets/scripts/chart-stargazer.js`
- Tweaks 面板：信号色红/黄/蓝/绿四色（默认蓝）· Hi-Speed · Playfield Live/Pause
- **平台口径按硬约束收回为 Windows-only**：设计稿原写 WIN/MAC/LINUX，未采纳；`dl.platform` = WIN 10/11 · X64，安装步骤只讲 `OMS.exe`
- 资源版本号 `v=20260526-1`

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
