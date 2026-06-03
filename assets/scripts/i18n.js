/* =============================================================
   OMS · CABINET — i18n dictionary
   Default = zh (中文). Proper nouns (BMS, mania, osu!lazer,
   ruleset, EX-SCORE, BPM, COMBO, PGREAT, GREAT, GOOD, BAD,
   IIDX, LR2, BEATORAJA, OD, RAJA, Stargazer, Lime, saaa,
   Satellite, Stella, 発狂, Windows, x64, OMS, OMS-IR,
   GAUGE, GROOVE, etc.) are intentionally left untranslated.
   Platform copy is Windows-only per project constraints.
   ============================================================= */
window.OMS_I18N = {
  /* ---------- top cabinet status bar ---------- */
  "bar.system":  { zh: "系统",      en: "SYSTEM",  ja: "システム" },
  "bar.ready":   { zh: "就绪",      en: "READY",   ja: "稼働中" },
  "bar.build":   { zh: "构建",      en: "BUILD",   ja: "ビルド" },
  "bar.host":    { zh: "主机",      en: "HOST",    ja: "ホスト" },
  "bar.online":  { zh: "联网未接服务端", en: "ONLINE STUBBED", ja: "オンライン未接続" },
  "bar.cabinet": { zh: "机台",      en: "CABINET", ja: "稼働" },
  "bar.live":    { zh: "运行中",    en: "LIVE",    ja: "ライブ" },
  "bar.filed":   { zh: "记录",      en: "FILED",   ja: "更新" },

  /* ---------- nav ---------- */
  "nav.home":     { zh: "首页",     en: "HOME",      ja: "ホーム" },
  "nav.download": { zh: "下载",     en: "DOWNLOAD",  ja: "ダウンロード" },
  "nav.specs":    { zh: "特性",     en: "FEATURES",  ja: "特性" },
  "nav.judge":    { zh: "判定",     en: "JUDGE",     ja: "判定" },
  "nav.roadmap":  { zh: "规划",     en: "ROADMAP",   ja: "計画" },

  /* ---------- brand sub ---------- */
  "brand.sub": {
    zh: "BMS · osu!lazer fork",
    en: "BMS · OSU!LAZER FORK",
    ja: "BMS · osu!lazer fork",
  },

  /* ---------- hero left ---------- */
  "hero.stage": {
    zh: "第 01 节 · 演示模式",
    en: "STAGE 01 · INTRO ATTRACT",
    ja: "ステージ 01 · デモモード",
  },
  "hero.title": {
    zh: '现代 BMS<br/><em>播放器</em>',
    en: 'A modern<br/>BMS <em>player</em>',
    ja: 'モダンな<br/>BMS <em>プレイヤー</em>',
  },
  "hero.kana": {
    zh: "osu!lazer fork · BMS ruleset",
    en: "osu!lazer fork · BMS ruleset",
    ja: "osu!lazer fork · BMS ルールセット",
  },
  "hero.lede": {
    zh: "<strong>OMS</strong> 是一个基于 osu!lazer 的 fork client，以 ruleset 的形式增加了对 BMS 谱面的原生支持，支持 OD / RAJA / LR2 / 类IIDX 判定窗自由切换，支持 Gauge 点灯记录，支持难度表。更多现代 mod 跟进开发中，未来 OMS-IR、谱面社区跟进开发中。",
    en: "<strong>OMS</strong> is a fork client of osu!lazer that adds native BMS chart support as a ruleset. Free switching between OD / RAJA / LR2 / IIDX-style judgement windows. Gauge clear records. Difficulty table support. More modern mods are in the works; OMS-IR and the chart community are also in development.",
    ja: "<strong>OMS</strong> は osu!lazer をベースにした fork クライアントで、BMS 譜面のネイティブサポートを ruleset として追加している。OD / RAJA / LR2 / IIDX 系の判定ウィンドウを自由に切り替え可能。Gauge の点灯記録に対応、難易度表に対応。より現代的な mod も順次追加中、OMS-IR と譜面コミュニティも開発中。",
  },
  "cta.win_soon": {
    zh: "PORTABLE · 即将开放",
    en: "PORTABLE · COMING SOON",
    ja: "PORTABLE · 近日公開",
  },
  "cta.view_specs": {
    zh: "查看特性",
    en: "VIEW FEATURES",
    ja: "特性を見る",
  },
  "cta.download": {
    zh: "即刻下载",
    en: "DOWNLOAD",
    ja: "ダウンロード",
  },

  /* ---------- field overlays ---------- */
  "field.ch_prefix": {
    zh: "频道 01 · SP · 7K+1 · BPM",
    en: "CH-01 · SP · 7K+1 · BPM",
    ja: "CH-01 · SP · 7K+1 · BPM",
  },
  "field.live": { zh: "直播", en: "LIVE", ja: "ライブ" },
  "field.beat": { zh: "拍",   en: "BEAT", ja: "拍" },

  "hud.score":  { zh: "EX-SCORE", en: "EX-SCORE", ja: "EX-SCORE" },
  "hud.combo":  { zh: "COMBO",    en: "COMBO",    ja: "COMBO" },
  "hud.judge":  { zh: "判定",     en: "JUDGE",    ja: "判定" },
  "hud.gauge":  { zh: "GROOVE GAUGE", en: "GROOVE GAUGE", ja: "GROOVE GAUGE" },

  /* ---------- now-playing panel ---------- */
  "np.label":   { zh: "当前曲目", en: "NOW PLAYING", ja: "演奏中" },
  "np.readout": { zh: "实时读数", en: "LIVE READOUT", ja: "リアルタイム" },
  "np.air":     { zh: "直播中",   en: "ON AIR",      ja: "配信中" },
  "np.ch":      { zh: "频道 01 · 演示曲", en: "CH-01 · DEMO ATTRACT", ja: "CH-01 · デモ" },
  "np.lv":      { zh: "难度", en: "LV",    ja: "Lv" },
  "np.bpm":     { zh: "BPM",   en: "BPM",   ja: "BPM" },
  "np.notes":   { zh: "物量",  en: "NOTES", ja: "ノート数" },
  "np.nps":     { zh: "密度时间线", en: "NPS · TIMELINE", ja: "密度タイムライン" },
  "np.peak":    { zh: "峰值", en: "PK", ja: "PK" },
  "np.lanes":   { zh: "键道分布 · 7K+1", en: "LANE DIST · 7K+1", ja: "レーン分布 · 7K+1" },

  /* ---------- vital stats ---------- */
  "v.bpm":      { zh: "BPM",       en: "BPM",          ja: "BPM" },
  "v.level":    { zh: "难度",      en: "LEVEL",        ja: "レベル" },
  "v.notes":    { zh: "总物量",    en: "TOTAL · NOTES",ja: "総ノート数" },
  "v.avgnps":   { zh: "平均 NPS",  en: "AVG · NPS",    ja: "平均 NPS" },
  "v.peaknps":  { zh: "峰值 NPS",  en: "PEAK · NPS",   ja: "ピーク NPS" },
  "v.length":   { zh: "时长",      en: "LENGTH",       ja: "長さ" },

  /* ---------- section heads ---------- */
  "sec02.no":    { zh: "02 · 能力特性", en: "02 · FEATURES", ja: "02 · 能力特性" },
  "sec02.title": { zh: "特性<br/><em>清单</em>", en: "Feature<br/><em>sheet</em>", ja: "特性<br/><em>一覧</em>" },
  "sec02.lede":  { zh: "", en: "", ja: "" },

  "sec03.no":    { zh: "03 · 判定窗口", en: "03 · JUDGEMENT", ja: "03 · 判定ウィンドウ" },
  "sec03.title": { zh: "判定<br/><em>窗口</em>", en: "Timing<br/><em>windows</em>", ja: "判定<br/><em>ウィンドウ</em>" },
  "sec03.lede":  {
    zh: "判定窗口可按类型（IIDX / LR2 / RAJA / OD）与难度切换。",
    en: "Judgement windows switch by type (IIDX / LR2 / RAJA / OD) and difficulty.",
    ja: "判定ウィンドウはタイプ（IIDX / LR2 / RAJA / OD）と難易度で切り替えられる。",
  },
  "sec03.ms": { zh: "毫秒", en: "MS", ja: "ミリ秒" },

  "jt.type":     { zh: "判定类型", en: "JUDGE TYPE", ja: "判定タイプ" },
  "jt.diff":     { zh: "判定难度", en: "DIFFICULTY", ja: "判定難易度" },
  "jt.col.kind": { zh: "类型", en: "KIND", ja: "種類" },
  "jt.note": {
    zh: "PG/GR/GD/BD/空PR = PGREAT / GREAT / GOOD / BAD / 空POOR · 单位 ms · OD 取 osu!mania 窗口",
    en: "PG/GR/GD/BD/空PR = PGREAT / GREAT / GOOD / BAD / empty POOR · in ms · OD uses osu!mania windows",
    ja: "PG/GR/GD/BD/空PR = PGREAT / GREAT / GOOD / BAD / 空POOR · 単位 ms · OD は osu!mania のウィンドウ",
  },

  "sec04.no":    { zh: "04 · 下载", en: "04 · DOWNLOAD", ja: "04 · ダウンロード" },
  "sec04.title": { zh: "即刻<br/><em>下载</em>", en: "Download<br/><em>now</em>", ja: "今すぐ<br/><em>ダウンロード</em>" },
  "sec04.lede":  {
    zh: "可自行选择下方下载方式。",
    en: "Pick a download option below.",
    ja: "下のダウンロード方法から選べる。",
  },

  "sec05.no":    { zh: "05 · 路线图", en: "05 · ROADMAP", ja: "05 · ロードマップ" },
  "sec05.title": { zh: "开发<br/><em>阶段</em>", en: "Development<br/><em>phases</em>", ja: "開発<br/><em>段階</em>" },
  "sec05.lede":  {
    zh: "OMS 网站分五段推进。现在是 Phase 1（宣传 + 展示）。账号、个人主页、OMS-IR 排行榜、谱面社区在客户端里都已预留入口，逐段开放。",
    en: "The OMS site rolls out in five phases. Phase 1 (promo + showcase) is current. Accounts, profile pages, OMS-IR leaderboards and the chart community are reserved client-side and opened one phase at a time.",
    ja: "OMS のサイトは五段階で進める。今は Phase 1（広報・展示）。アカウント、マイページ、OMS-IR ランキング、譜面コミュニティはクライアント側に入口を用意済み、フェーズごとに順次開放する。",
  },

  /* ---------- capabilities ---------- */
  "cap.01.name": { zh: "双模式", en: "Dual mode", ja: "デュアルモード" },
  "cap.01.sub":  { zh: "BMS · OSU!MANIA", en: "BMS · OSU!MANIA", ja: "BMS · OSU!MANIA" },
  "cap.01.body": {
    zh: "std / taiko / catch 等非 VSRG 模式已删除，保留 mania 模式，与 bms 模式结合游玩，不用再切客户端啦。",
    en: "Non-VSRG modes (std / taiko / catch) are stripped. mania mode stays, played together with bms mode — no more switching clients.",
    ja: "std / taiko / catch などの非 VSRG モードは削除済み。mania モードを残し、bms モードと一緒に遊べる——もうクライアントを切り替えなくていい。",
  },

  "cap.02.name": { zh: "判定兼容", en: "Judge compat", ja: "判定互換" },
  "cap.02.sub":  { zh: "COMPAT · LAYER", en: "COMPAT · LAYER", ja: "COMPAT · LAYER" },
  "cap.02.body": {
    zh: "<code>OD</code>（osu! 原生判定）/ <code>RAJA</code>（Beatoraja）/ <code>LR2</code>（LunaticRave2）/ <code>IIDX</code>（类 IIDX）判定类型和判定难度切换支持。",
    en: "<code>OD</code> (osu! native), <code>RAJA</code> (Beatoraja), <code>LR2</code> (LunaticRave2), <code>IIDX</code> (IIDX-style) — judgement profile and judgement difficulty switching supported.",
    ja: "<code>OD</code>（osu! ネイティブ判定）/ <code>RAJA</code>（Beatoraja）/ <code>LR2</code>（LunaticRave2）/ <code>IIDX</code>（IIDX 系）の判定タイプと判定難易度の切り替えに対応。",
  },

  "cap.03.name": { zh: "Gauge · 点灯记录", en: "Gauges · clear log", ja: "ゲージ · 点灯記録" },
  "cap.03.sub":  { zh: "6 GAUGES + LAMP RECORD", en: "6 GAUGES + LAMP RECORD", ja: "6 GAUGES + LAMP RECORD" },
  "cap.03.body": {
    zh: '<span class="lamp lamp--ac">AC</span> / <span class="lamp lamp--ec">EC</span> / <span class="lamp lamp--nc">NC</span> / <span class="lamp lamp--hc">HC</span> / <span class="lamp lamp--exhc">EXHC</span> / <span class="lamp lamp--fc">FC</span> 全支持。',
    en: '<span class="lamp lamp--ac">AC</span> / <span class="lamp lamp--ec">EC</span> / <span class="lamp lamp--nc">NC</span> / <span class="lamp lamp--hc">HC</span> / <span class="lamp lamp--exhc">EXHC</span> / <span class="lamp lamp--fc">FC</span>, all supported.',
    ja: '<span class="lamp lamp--ac">AC</span> / <span class="lamp lamp--ec">EC</span> / <span class="lamp lamp--nc">NC</span> / <span class="lamp lamp--hc">HC</span> / <span class="lamp lamp--exhc">EXHC</span> / <span class="lamp lamp--fc">FC</span> をすべてサポート。',
  },

  "cap.04.name": { zh: "难度表", en: "Difficulty tables", ja: "難易度表" },
  "cap.04.sub":  { zh: "DIFFICULTY TABLE", en: "DIFFICULTY TABLE", ja: "DIFFICULTY TABLE" },
  "cap.04.body": {
    zh: "社区难度表规范支持，内置常用难度表一键启用。",
    en: "Conforms to the community difficulty-table spec; common tables come built in, enable in one click.",
    ja: "コミュニティ難易度表の規格に準拠、主要な難易度表は内蔵済みでワンクリック有効化。",
  },

  "cap.05.name": { zh: "便携安装", en: "Portable install", ja: "ポータブル" },
  "cap.05.sub":  { zh: "PORTABLE · ONE PACKAGE", en: "PORTABLE · ONE PACKAGE", ja: "PORTABLE · ONE PACKAGE" },
  "cap.05.body": {
    zh: "单便携包实现安装，覆盖即可实现更新，便携包内数据储存，无磁盘污染。",
    en: "A single portable package: install by unzipping, update by overwriting, data kept inside the package — no disk pollution.",
    ja: "単一のポータブルパッケージ。展開してインストール、上書きで更新、データはパッケージ内に保存、ディスクを汚さない。",
  },

  "cap.06.name": { zh: "外部谱库", en: "External library", ja: "外部ライブラリ" },
  "cap.06.sub":  { zh: "DIRECTORY INDEX · MANIA/BMS", en: "DIRECTORY INDEX · MANIA/BMS", ja: "DIRECTORY INDEX · MANIA/BMS" },
  "cap.06.body": {
    zh: "直接选定本地目录索引谱面（含 mania / BMS），无额外储存占用，无需为 OMS 单独准备谱库。",
    en: "Point OMS at any local folder to index charts (mania / BMS included) — no extra storage footprint, no need to maintain a separate library just for OMS.",
    ja: "任意のローカルフォルダを指定して譜面をインデックス（mania / BMS 対応）。追加のストレージ使用なし、OMS 専用の譜面ライブラリを用意する必要はない。",
  },

  "cap.07.name": { zh: "游戏社区", en: "Game community", ja: "ゲームコミュニティ" },
  "cap.07.sub":  { zh: "IR · CHARTS · FORUM", en: "IR · CHARTS · FORUM", ja: "IR · CHARTS · FORUM" },
  "cap.07.body": {
    zh: "IR、谱面库、社区论坛等中心化交流平台。",
    en: "IR, chart library, community forum and other centralized hubs.",
    ja: "IR、譜面ライブラリ、コミュニティフォーラムなどの中央集権的な交流プラットフォーム。",
  },

  "cap.status.shipped":      { zh: "已实现",            en: "SHIPPED",             ja: "実装済" },
  "cap.status.shipped_off":  { zh: "已实现 · 默认关闭", en: "SHIPPED · OFF DEFAULT", ja: "実装済 · 既定オフ" },
  "cap.status.indev":        { zh: "开发中",            en: "IN DEV",              ja: "開発中" },

  /* ---------- download meta ---------- */
  "dl.version":  { zh: "版本",     en: "VERSION",   ja: "バージョン" },
  "dl.platform": { zh: "平台",     en: "PLATFORM",  ja: "プラットフォーム" },
  "dl.package":  { zh: "包格式",   en: "PACKAGE",   ja: "パッケージ" },
  "dl.updater":  { zh: "更新器",   en: "UPDATER",   ja: "アップデーター" },
  "dl.online":   { zh: "在线",     en: "ONLINE",    ja: "オンライン" },
  "dl.filed":    { zh: "时间戳",   en: "FILED",     ja: "更新時刻" },

  "dl.version.v":  { zh: "0.1.0-DEV<small>内部版 · 公开发布未定</small>",     en: "0.1.0-DEV<small>internal · public release TBD</small>", ja: "0.1.0-DEV<small>内部版 · 公開リリース未定</small>" },
  "dl.platform.v": { zh: "WIN 10 / 11 · X64<small>仅 Windows 桌面</small>", en: "WIN 10 / 11 · X64<small>Windows desktop only</small>", ja: "WIN 10 / 11 · X64<small>Windows デスクトップのみ</small>" },
  "dl.package.v":  { zh: "PORTABLE .ZIP<small>免安装 · 解压即用</small>",     en: "PORTABLE .ZIP<small>no install · unzip and run</small>", ja: "PORTABLE .ZIP<small>インストール不要 · 解凍して起動</small>" },
  "dl.updater.v":  { zh: "MANUAL<small>不自动更新 · 自己按版本号下</small>", en: "MANUAL<small>no auto-update · grab by version</small>",       ja: "MANUAL<small>自動更新なし · 任意のバージョンを取得</small>" },
  "dl.online.v":   { zh: "STUBBED<small>账号 · 排行榜 · 多人都留好了</small>",   en: "STUBBED<small>auth · leaderboard · multi reserved</small>",         ja: "STUBBED<small>アカウント · ランキング · マルチの接続口を用意済み</small>" },
  "dl.filed.small": { zh: "页面生成时刻", en: "page generated at", ja: "ページ生成時刻" },

  /* ---------- roadmap phases ---------- */
  "phase.1.name": { zh: "底层加固", en: "Core hardening", ja: "基盤強化" },
  "phase.1.sub":  { zh: "RULESET · ENGINE", en: "RULESET · ENGINE", ja: "RULESET · ENGINE" },
  "phase.1.body": {
    zh: "完善 BMS ruleset、mod、游玩体验、皮肤系统、性能优化等。",
    en: "Maturing the BMS ruleset, mods, gameplay, the skin system, performance and more.",
    ja: "BMS ruleset・mod・プレイ体験・スキンシステム・性能最適化などを作り込む。",
  },

  "phase.2.name": { zh: "初版官网", en: "First site", ja: "初版サイト" },
  "phase.2.sub":  { zh: "STATIC SITE", en: "STATIC SITE", ja: "STATIC SITE" },
  "phase.2.body": {
    zh: "无登录的 OMS 官网。",
    en: "The OMS site — no login yet.",
    ja: "ログインなしの OMS 公式サイト。",
  },

  "phase.3.name": { zh: "OMS-IR", en: "OMS-IR", ja: "OMS-IR" },
  "phase.3.sub":  { zh: "LOGIN · SCORE · RANK", en: "LOGIN · SCORE · RANK", ja: "LOGIN · SCORE · RANK" },
  "phase.3.body": {
    zh: "注册账号，客户端内登录、传分、看排行。（也许会支持 LR2 / RAJA 本地存档分数上传）",
    en: "Sign up, then log in from the client to submit scores and see rankings. (LR2 / RAJA local-save uploads, maybe.)",
    ja: "アカウント登録、クライアントからログインしてスコア送信・ランキング。（LR2 / RAJA のローカル保存スコア送信も検討）",
  },

  "phase.4.name": { zh: "社区官网", en: "Community hub", ja: "コミュニティ" },
  "phase.4.sub":  { zh: "COMMUNITY HUB", en: "COMMUNITY HUB", ja: "COMMUNITY HUB" },
  "phase.4.body": {
    zh: "像 osu!(official) 那样的中心化社区官网。",
    en: "A central community site, in the spirit of osu! (official).",
    ja: "osu!（公式）のような中央コミュニティサイト。",
  },

  "phase.5.name": { zh: "开放接口", en: "Open API", ja: "外部接続" },
  "phase.5.sub":  { zh: "API · BOT", en: "API · BOT", ja: "API · BOT" },
  "phase.5.body": {
    zh: "API 与外部接通、QQ bot、非 OMS 客户端向 OMS-IR 传分等。",
    en: "Open API and integrations — a QQ bot, score submission to OMS-IR from non-OMS clients, and more.",
    ja: "API と外部接続——QQ bot、OMS 以外のクライアントから OMS-IR へのスコア送信など。",
  },

  "phase.status.current": { zh: "开发中",   en: "IN DEV", ja: "開発中" },
  "phase.status.planned": { zh: "计划中",   en: "PLANNED", ja: "予定" },

  /* ---------- footer ---------- */
  "foot.tag": {
    zh: "BMS · osu!lazer fork · 现代 BMS 播放器",
    en: "BMS · osu!lazer fork · modern BMS player",
    ja: "BMS · osu!lazer fork · モダンな BMS プレイヤー",
  },
  "foot.copy":  { zh: "保留所有权利", en: "ALL RIGHTS RESERVED", ja: "全著作権所有" },
  "foot.nav":   { zh: "导航",         en: "NAV",                 ja: "ナビ" },
  "foot.note":  {
    zh: "这页是 BULLETIN 内部稿。正式文案、下载入口、演示谱面、版权信息都以正式发布版为准。",
    en: "This page is the internal BULLETIN draft. Final copy, download entry, demo chart and rights info are settled at release.",
    ja: "このページは BULLETIN の内部稿。正式コピー、ダウンロード口、デモ譜面、権利情報は、公式リリースの内容を正とする。",
  },
  "foot.eof":   { zh: "— 文件结束", en: "— END OF FILE", ja: "— ファイル終了" },

  /* ---------- tweaks panel ---------- */
  "tw.title":   { zh: "调节面板", en: "Tweaks",  ja: "ツイーク" },
  "tw.accent":  { zh: "信号色 · 强调",  en: "SIGNAL · ACCENT", ja: "シグナル · アクセント" },
  "tw.speed":   { zh: "HI-SPEED · 速度", en: "HI-SPEED · SPEED", ja: "HI-SPEED · 速度" },
  "tw.field":   { zh: "谱面区",         en: "PLAYFIELD",        ja: "譜面エリア" },
  "tw.live":    { zh: "运行",   en: "Live",  ja: "動作" },
  "tw.pause":   { zh: "暂停",   en: "Pause", ja: "停止" },

  /* ============================================================
     DOWNLOAD — release manifest + install steps
     (now part of the homepage #download section; download.html removed)
     ============================================================ */
  "dlp.stage": {
    zh: "第 04 节 · 发行清单",
    en: "STAGE 04 · RELEASE MANIFEST",
    ja: "ステージ 04 · リリースマニフェスト",
  },
  "dlp.title": {
    zh: '发行<br/><em>清单</em>',
    en: 'Release<br/><em>manifest</em>',
    ja: 'リリース<br/><em>マニフェスト</em>',
  },
  "dlp.kana": {
    zh: "GitHub Releases · 最新版直链",
    en: "GitHub Releases · latest, direct",
    ja: "GitHub Releases · 最新版を直接取得",
  },
  "dlp.lede": {
    zh: "页面打开即从 GitHub 拉取最新一版 OMS 发行包。下载、解压、运行。尚未发公开版时，本页指向 GitHub release 页以便跟进。",
    en: "On page open we pull the latest OMS release from GitHub. Download, unzip, run. When no public release is filed yet, this page points to the GitHub releases page so you can follow along.",
    ja: "ページを開いた瞬間、GitHub から最新の OMS リリースを取得する。ダウンロード、解凍、起動。公開版がない時は GitHub のリリースページへ案内する。",
  },
  "dlp.fetching": {
    zh: "正在拉取 github.com/ZDaMexy/oms/releases/latest …",
    en: "FETCHING github.com/ZDaMexy/oms/releases/latest …",
    ja: "github.com/ZDaMexy/oms/releases/latest を取得中 …",
  },
  "dlp.k.latest":   { zh: "最新版本",        en: "LATEST RELEASE",       ja: "最新リリース" },
  "dlp.k.filed":    { zh: "发布时间",        en: "PUBLISHED",            ja: "公開日" },
  "dlp.k.author":   { zh: "发布者",          en: "AUTHOR",               ja: "公開者" },
  "dlp.k.assets":   { zh: "资源数",          en: "ASSETS",               ja: "アセット数" },
  "dlp.k.assets-h": { zh: "资源列表 · ASSETS",      en: "ASSETS · downloadables", ja: "アセット一覧 · ASSETS" },
  "dlp.k.notes-h":  { zh: "更新说明 · RELEASE NOTES", en: "RELEASE NOTES",          ja: "リリースノート · RELEASE NOTES" },
  "dlp.cta.dl":     { zh: "下载",            en: "DOWNLOAD",             ja: "ダウンロード" },
  "dlp.cta.github": { zh: "在 GitHub 上查看", en: "VIEW ON GITHUB",       ja: "GitHub で開く" },
  "dlp.cta.qq":     { zh: "QQ 群 · 650530995", en: "QQ GROUP · 650530995", ja: "QQ グループ · 650530995" },
  "dlp.m.gh":       { zh: "从 GitHub Releases 下载发行包", en: "Grab the build from GitHub Releases", ja: "GitHub Releases から発行包を入手" },
  "dlp.m.qqh":      { zh: "QQ 群", en: "QQ Group", ja: "QQ グループ" },
  "dlp.m.qq":       { zh: "一键加群 · 650530995", en: "One-tap join · 650530995", ja: "ワンタップ参加 · 650530995" },
  "dlp.cta.primary": {
    zh: "下载主包",
    en: "GET PRIMARY",
    ja: "メインパッケージを取得",
  },
  "dlp.none.no":    { zh: "暂无公开发布",     en: "NO PUBLIC RELEASE FILED YET", ja: "公開リリースなし" },
  "dlp.none.title": {
    zh: '还在<br/><em>备料</em>',
    en: 'Not<br/><em>filed yet</em>',
    ja: 'まだ<br/><em>仕込み中</em>',
  },
  "dlp.none.lede": {
    zh: "公开下载入口要等到 Phase 1 收尾才开。在 GitHub 上盯一眼就能知道什么时候有新的包。",
    en: "The public download opens at the end of Phase 1. Watch the GitHub releases page to catch the moment a new build lands.",
    ja: "公開ダウンロード口は Phase 1 の終盤で開ける。GitHub のリリースページを見ておけば、新しいビルドが落ちた瞬間に気付ける。",
  },
  "dlp.none.cta":   { zh: "打开 GitHub · ZDaMexy/oms/releases", en: "OPEN GITHUB · ZDaMexy/oms/releases", ja: "GitHub を開く · ZDaMexy/oms/releases" },
  "dlp.err": {
    zh: "拉取失败 · 已切换到 GitHub 链接",
    en: "FETCH FAILED · falling back to GitHub link",
    ja: "取得失敗 · GitHub リンクに切り替え",
  },

  /* ---- install steps ---- */
  "dlp.ins.no":    { zh: "运行", en: "RUN IT", ja: "起動" },
  "dlp.ins.title": {
    zh: '解压<br/><em>开玩</em>',
    en: 'Unzip<br/><em>and run</em>',
    ja: '解凍して<br/><em>起動</em>',
  },
  "dlp.ins.lede": {
    zh: "下载、解压、运行——三步开玩。",
    en: "Download, unzip, run — three steps to play.",
    ja: "ダウンロード、解凍、起動——三ステップで遊ぶ。",
  },
  "dlp.ins.1.h":   { zh: "下载发行包", en: "Grab the release", ja: "リリースを取得" },
  "dlp.ins.1.b": {
    zh: "点上面的 GitHub Releases 进去，下载最新的发行包（.zip）。",
    en: "Open GitHub Releases above and grab the latest build (.zip).",
    ja: "上の GitHub Releases を開いて、最新の発行包（.zip）を入手。",
  },
  "dlp.ins.2.h":   { zh: "解压到独立目录", en: "Unzip to its own folder", ja: "独立したフォルダに解凍" },
  "dlp.ins.2.b": {
    zh: "选位置解压。建议单独一个文件夹，与其他游戏目录分开。",
    en: "Unzip anywhere you like. Use a folder of its own, kept separate from other game installs.",
    ja: "好きな場所に解凍する。他のゲームディレクトリとは別の、独立したフォルダにしておく。",
  },
  "dlp.ins.3.h":   { zh: "启动 OMS", en: "Launch OMS", ja: "OMS を起動" },
  "dlp.ins.3.b": {
    zh: "双击 <code>OMS.exe</code> 启动。首次启动会在系统数据目录里建自己的存档。",
    en: "Double-click <code>OMS.exe</code> to launch. The first launch creates its own save data folder in your system data path.",
    ja: "<code>OMS.exe</code> をダブルクリックして起動。初回起動でシステムのデータパスに専用のセーブフォルダが作られる。",
  },
  "dlp.ins.4.h":   { zh: "把谱面拖进来", en: "Drag your charts in", ja: "譜面をドロップ" },
  "dlp.ins.4.b": {
    zh: "把 BMS 谱面文件夹拖到 OMS 窗口，或在设置里指定根目录。难度表（Satellite / Stella / 発狂）可稍后接入。",
    en: "Drag a BMS chart folder onto the OMS window, or point it at a root directory in settings. Difficulty tables (Satellite / Stella / 発狂) can be added later.",
    ja: "BMS 譜面フォルダを OMS ウィンドウにドロップ、または設定からルートディレクトリを指定する。難易度表（Satellite / Stella / 発狂）は後でも追加可能。",
  },
};
