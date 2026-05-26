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
  "nav.specs":    { zh: "规格",     en: "SPECS",     ja: "仕様" },
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
    zh: '现代 BMS<br/><em>播放器。</em>',
    en: 'A modern<br/>BMS <em>player.</em>',
    ja: 'モダンな<br/>BMS <em>プレイヤー。</em>',
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
    zh: "查看规格",
    en: "VIEW SPECS",
    ja: "仕様を見る",
  },

  /* ---------- field overlays ---------- */
  "field.ch_prefix": {
    zh: "频道 01 · SP · 7K+1 · BPM",
    en: "CH-01 · SP · 7K+1 · BPM",
    ja: "CH-01 · SP · 7K+1 · BPM",
  },
  "field.live": { zh: "直播", en: "LIVE", ja: "ライブ" },
  "field.beat": { zh: "拍",   en: "BEAT", ja: "拍" },

  "hud.score":  { zh: "EX 分数", en: "EX-SCORE", ja: "EX スコア" },
  "hud.combo":  { zh: "连击",     en: "COMBO",    ja: "COMBO" },
  "hud.judge":  { zh: "判定",     en: "JUDGE",    ja: "判定" },
  "hud.gauge":  { zh: "槽量 · GROOVE", en: "GAUGE · GROOVE", ja: "ゲージ · GROOVE" },

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
  "sec02.no":    { zh: "02 · 能力规格", en: "02 · CAPABILITIES", ja: "02 · 能力スペック" },
  "sec02.title": { zh: "规格<br/><em>清单。</em>", en: "Spec<br/><em>sheet.</em>", ja: "仕様<br/><em>一覧。</em>" },
  "sec02.lede":  { zh: "", en: "", ja: "" },

  "sec03.no":    { zh: "03 · 判定窗口", en: "03 · JUDGEMENT", ja: "03 · 判定ウィンドウ" },
  "sec03.title": { zh: "判定<br/><em>窗口。</em>", en: "Timing<br/><em>windows.</em>", ja: "判定<br/><em>ウィンドウ。</em>" },
  "sec03.lede":  {
    zh: "下面的判定窗口以 BEATORAJA EASY 为参考，客户端内可在 OD / RAJA / LR2 / 类IIDX 之间切换。数据仅供参考，以发布版为准。",
    en: "The windows below are referenced to BEATORAJA EASY. Inside the client they can be switched between OD / RAJA / LR2 / IIDX-style. Reference values only; the shipping version is authoritative.",
    ja: "下の判定ウィンドウは BEATORAJA EASY を参照として並べている。クライアント内では OD / RAJA / LR2 / IIDX 系に切り替え可能。参考値にとどめ、リリース版を正とする。",
  },
  "sec03.ms": { zh: "毫秒", en: "MS", ja: "ミリ秒" },

  "sec04.no":    { zh: "04 · 下载", en: "04 · DOWNLOAD", ja: "04 · ダウンロード" },
  "sec04.title": { zh: "投币<br/><em>启动。</em>", en: "Insert<br/><em>cabinet.</em>", ja: "コイン<br/><em>投入。</em>" },
  "sec04.lede":  {
    zh: "发行包、版本说明、运行说明都在下载页。首发形态先在此说明，正式下载入口于 Phase 1 收尾开放。",
    en: "Release packages, version notes and run instructions live on the download page. The launch form is stated here; the public download opens at the end of Phase 1.",
    ja: "リリースパッケージ、バージョンノート、起動手順はダウンロードページに。初回リリースの形態はここで提示、正式なダウンロード口は Phase 1 終盤で開ける。",
  },

  "sec05.no":    { zh: "05 · 路线图", en: "05 · ROADMAP", ja: "05 · ロードマップ" },
  "sec05.title": { zh: "五个<br/><em>阶段。</em>", en: "Five<br/><em>phases.</em>", ja: "五つの<br/><em>段階。</em>" },
  "sec05.lede":  {
    zh: "OMS 网站分五段推进。现在是 Phase 1（宣传 + 展示）。账号、个人主页、OMS-IR 排行榜、谱面社区在客户端里都已预留入口，逐段开放。",
    en: "The OMS site rolls out in five phases. Phase 1 (promo + showcase) is current. Accounts, profile pages, OMS-IR leaderboards and the chart community are reserved client-side and opened one phase at a time.",
    ja: "OMS のサイトは五段階で進める。今は Phase 1（広報・展示）。アカウント、マイページ、OMS-IR ランキング、譜面コミュニティはクライアント側に入口を用意済み、フェーズごとに順次開放する。",
  },

  /* ---------- capabilities ---------- */
  "cap.01.name": { zh: "双模式", en: "Dual mode", ja: "デュアルモード" },
  "cap.01.sub":  { zh: "BMS · OSU!MANIA", en: "BMS · OSU!MANIA", ja: "BMS · OSU!MANIA" },
  "cap.01.body": {
    zh: "std / taiko / catch 等非 VSRG 模式已删除，保留 mania 游玩体验，与 bms 组成双 mode 规格。",
    en: "Non-VSRG modes (std / taiko / catch) are stripped. mania stays in, paired with bms as the two-mode spec.",
    ja: "std / taiko / catch などの非 VSRG モードは削除済み。mania のプレイ体験を残し、bms と二モード構成。",
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
    zh: "AC / EC / NC / HC / EXHC / FC 全支持。",
    en: "AC / EC / NC / HC / EXHC / FC, all supported.",
    ja: "AC / EC / NC / HC / EXHC / FC をすべてサポート。",
  },

  "cap.04.name": { zh: "难度表", en: "Difficulty tables", ja: "難易度表" },
  "cap.04.sub":  { zh: "DIFFICULTY TABLE", en: "DIFFICULTY TABLE", ja: "DIFFICULTY TABLE" },
  "cap.04.body": {
    zh: "社区难度表规范支持，内置常用难度表一键启用。",
    en: "Conforms to the community difficulty-table spec; common tables come built in, enable in one click.",
    ja: "コミュニティ難易度表の規格に準拠、主要な難易度表は内蔵済みでワンクリック有効化。",
  },

  "cap.05.name": { zh: "离线优先", en: "Offline-first", ja: "オフライン優先" },
  "cap.05.sub":  { zh: "LOCAL-ONLY · DEFAULT", en: "LOCAL-ONLY · DEFAULT", ja: "LOCAL-ONLY · DEFAULT" },
  "cap.05.body": {
    zh: "默认离线，自动更新默认关。OMS-IR、谱面社区、账号、聊天、观战、多人这些联网点在客户端里都写好了，未接服务器。便携包发布。",
    en: "Offline by default; auto-update off by default. OMS-IR, chart community, account, chat, spectate and multi are all wired client-side, not yet pointed at a server. Ships as a portable bundle.",
    ja: "既定でオフライン、自動更新も既定でオフ。OMS-IR、譜面コミュニティ、アカウント、チャット、観戦、マルチはクライアント側に実装済み、サーバー未接続。配布形態はポータブル。",
  },

  "cap.status.shipped":      { zh: "已实现",            en: "SHIPPED",             ja: "実装済" },
  "cap.status.shipped_off":  { zh: "已实现 · 默认关闭", en: "SHIPPED · OFF DEFAULT", ja: "実装済 · 既定オフ" },

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
  "phase.1.name": { zh: "宣传展示", en: "Static promo", ja: "広報 · 展示" },
  "phase.1.sub":  { zh: "STATIC SITE", en: "STATIC SITE", ja: "STATIC SITE" },
  "phase.1.body": {
    zh: "纯静态 HTML/CSS/JS 的官网和下载入口。先把产品介绍、能力说明、下载占位写完，信息架构留给后面的动态页面和接口用。",
    en: "Static HTML/CSS/JS site with a download entry. Get the product intro, capability statements and download placeholder shipped first; the information architecture is left in place for the dynamic pages and API hookups that come later.",
    ja: "純粋な HTML/CSS/JS によるサイトとダウンロード入口。まずプロダクト紹介、能力説明、ダウンロードのプレースホルダーを仕上げる。情報設計は後の動的ページや API 接続に向けて残しておく。",
  },

  "phase.2.name": { zh: "账号系统", en: "Accounts", ja: "アカウント" },
  "phase.2.sub":  { zh: "AUTH", en: "AUTH", ja: "AUTH" },
  "phase.2.body": {
    zh: "注册、登录、找回密码、基础账号设置。前后端联调的记录和字段约定写在工作区的桥文档里。",
    en: "Register, log in, recover password, basic account settings. Front/back integration notes and field contracts sit in the workspace bridge docs.",
    ja: "登録、ログイン、パスワード再発行、基本的なアカウント設定。フロントとバックの連携メモやフィールド定義は、ワークスペースのブリッジドキュメントに置く。",
  },

  "phase.3.name": { zh: "主页 / 成绩", en: "Profile / score", ja: "マイページ / スコア" },
  "phase.3.sub":  { zh: "PROFILE · SCORE", en: "PROFILE · SCORE", ja: "PROFILE · SCORE" },
  "phase.3.body": {
    zh: "玩家个人主页、最近成绩、EX-SCORE 展示，数据结构和客户端的回放、分数面对得上。",
    en: "Player home page, recent scores, EX-SCORE view — same data shape as the client's replay and score plane.",
    ja: "プレイヤーマイページ、最近のスコア、EX-SCORE 表示。クライアントのリプレイやスコア面とデータ構造を揃える。",
  },

  "phase.4.name": { zh: "OMS-IR", en: "OMS-IR", ja: "OMS-IR" },
  "phase.4.sub":  { zh: "LEADERBOARD", en: "LEADERBOARD", ja: "ランキング" },
  "phase.4.body": {
    zh: "BMS 和 mania 同台榜单，由 OMS-IR 提供数据。按 EX-SCORE 排序，可按难度表和模式筛选。",
    en: "One leaderboard for BMS and mania, served by OMS-IR. Sorted by EX-SCORE, filterable by difficulty table and mode.",
    ja: "BMS と mania を同一ランキングで見る。OMS-IR がデータを提供。EX-SCORE で並び、難易度表とモードで絞り込める。",
  },

  "phase.5.name": { zh: "谱面社区", en: "Chart community", ja: "譜面コミュニティ" },
  "phase.5.sub":  { zh: "COMMUNITY · CHARTS", en: "COMMUNITY · CHARTS", ja: "COMMUNITY · CHARTS" },
  "phase.5.body": {
    zh: "OMS 谱面社区——统一谱面库、搜索、难度表入口、下载跳转。服务页面与客户端联网点逐段对接。",
    en: "OMS chart community — unified chart DB, search, difficulty-table entries, download hand-off. Service pages and the client's online stubs connect piece by piece.",
    ja: "OMS 譜面コミュニティ——統合譜面データベース、検索、難易度表入口、ダウンロード受け渡し。サービスページとクライアントのオンライン接続口を段階的に接続する。",
  },

  "phase.status.current": { zh: "当前",     en: "CURRENT", ja: "現在" },
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
     DOWNLOAD PAGE (download.html)
     ============================================================ */
  "dlp.stage": {
    zh: "第 04 节 · 发行清单",
    en: "STAGE 04 · RELEASE MANIFEST",
    ja: "ステージ 04 · リリースマニフェスト",
  },
  "dlp.title": {
    zh: '发行<br/><em>清单。</em>',
    en: 'Release<br/><em>manifest.</em>',
    ja: 'リリース<br/><em>マニフェスト。</em>',
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
  "dlp.cta.primary": {
    zh: "下载主包",
    en: "GET PRIMARY",
    ja: "メインパッケージを取得",
  },
  "dlp.none.no":    { zh: "暂无公开发布",     en: "NO PUBLIC RELEASE FILED YET", ja: "公開リリースなし" },
  "dlp.none.title": {
    zh: '还在<br/><em>备料。</em>',
    en: 'Not<br/><em>filed yet.</em>',
    ja: 'まだ<br/><em>仕込み中。</em>',
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
  "dlp.ins.no":    { zh: "05 · 运行", en: "05 · RUN IT", ja: "05 · 起動" },
  "dlp.ins.title": {
    zh: '解压<br/><em>开玩。</em>',
    en: 'Unzip<br/><em>and run.</em>',
    ja: '解凍して<br/><em>起動。</em>',
  },
  "dlp.ins.lede": {
    zh: "下载、解压、运行——三步开玩。",
    en: "Download, unzip, run — three steps to play.",
    ja: "ダウンロード、解凍、起動——三ステップで遊ぶ。",
  },
  "dlp.ins.1.h":   { zh: "下载发行包", en: "Grab the release", ja: "リリースを取得" },
  "dlp.ins.1.b": {
    zh: "在上面的 ASSETS 列表里挑主包（带 ★ 的那个），点一下就开始下载。",
    en: "In the ASSETS list above, click the primary (★) bundle and the download starts.",
    ja: "上の ASSETS 一覧から主パッケージ（★ 付き）をクリックすればダウンロードが始まる。",
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
