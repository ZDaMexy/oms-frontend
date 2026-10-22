/* =============================================================
   OMS · CABINET — i18n dictionary
   Default = zh (中文). Proper nouns (BMS, mania, osu!lazer,
   ruleset, EX-SCORE, BPM, COMBO, PGREAT, GREAT, GOOD, BAD,
   IIDX, LR2, BEATORAJA, OD, RAJA,
   Satellite, Stella, 発狂, Windows, x64, OMS, OMS-IR,
   GAUGE, GROOVE, etc.) are intentionally left untranslated.
   Platform copy is Windows-only per project constraints.
   ============================================================= */
window.OMS_I18N = {
  /* ---------- top cabinet status bar ---------- */
  "bar.build":   { zh: "构建",      en: "BUILD",   ja: "ビルド" },
  "bar.host":    { zh: "主机",      en: "HOST",    ja: "ホスト" },
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
    zh: "<strong>OMS</strong> 是一个基于 osu!lazer 的 fork client，以 ruleset 的形式增加了对 BMS 谱面的原生支持，支持 OD / RAJA / LR2 / 类IIDX 判定窗自由切换，支持 Gauge 点灯记录，支持难度表。更多现代 mod 跟进开发中；OMS-IR 与谱面社区处于后续规划。",
    en: "<strong>OMS</strong> is a fork client of osu!lazer that adds native BMS chart support as a ruleset. Free switching between OD / RAJA / LR2 / IIDX-style judgement windows. Gauge clear records. Difficulty table support. More modern mods are in development; OMS-IR and the chart community are planned for later phases.",
    ja: "<strong>OMS</strong> は osu!lazer をベースにした fork クライアントで、BMS 譜面のネイティブサポートを ruleset として追加している。OD / RAJA / LR2 / IIDX 系の判定ウィンドウを自由に切り替え可能。Gauge の点灯記録に対応、難易度表に対応。より現代的な mod は開発中。OMS-IR と譜面コミュニティは今後のフェーズで計画中。",
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

  "hud.score":  { zh: "EX-SCORE", en: "EX-SCORE", ja: "EX-SCORE" },
  "hud.combo":  { zh: "COMBO",    en: "COMBO",    ja: "COMBO" },
  "hud.gauge":  { zh: "GROOVE GAUGE", en: "GROOVE GAUGE", ja: "GROOVE GAUGE" },

  /* ---------- section heads ---------- */
  "sec02.no":    { zh: "02 · 能力特性", en: "02 · FEATURES", ja: "02 · 能力特性" },
  "sec02.title": { zh: "特性<br/><em>清单</em>", en: "Feature<br/><em>sheet</em>", ja: "特性<br/><em>一覧</em>" },

  "sec03.no":    { zh: "03 · 判定窗口", en: "03 · JUDGEMENT", ja: "03 · 判定ウィンドウ" },
  "sec03.title": { zh: "判定<br/><em>窗口</em>", en: "Timing<br/><em>windows</em>", ja: "判定<br/><em>ウィンドウ</em>" },
  "sec03.lede":  {
    zh: "判定窗口可按类型（IIDX / LR2 / RAJA / OD）与难度切换。",
    en: "Judgement windows switch by type (IIDX / LR2 / RAJA / OD) and difficulty.",
    ja: "判定ウィンドウはタイプ（IIDX / LR2 / RAJA / OD）と難易度で切り替えられる。",
  },

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

  "sec05.no":    { zh: "05 · 路线图", en: "05 · ROADMAP", ja: "05 · ロードマップ" },
  "sec05.title": { zh: "开发<br/><em>阶段</em>", en: "Development<br/><em>phases</em>", ja: "開発<br/><em>段階</em>" },

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
    zh: "直接选定本地目录索引谱面（含 mania / BMS），无需为 OMS 单独准备谱库。",
    en: "Point OMS at a local folder to index charts (mania / BMS included), without maintaining a separate library just for OMS.",
    ja: "ローカルフォルダを指定して譜面をインデックス（mania / BMS 対応）。OMS 専用の譜面ライブラリを用意する必要はない。",
  },

  "cap.07.name": { zh: "游戏社区", en: "Game community", ja: "ゲームコミュニティ" },
  "cap.07.sub":  { zh: "IR · CHARTS · FORUM", en: "IR · CHARTS · FORUM", ja: "IR · CHARTS · FORUM" },
  "cap.07.body": {
    zh: "IR、谱面库、社区论坛等中心化交流平台。",
    en: "IR, chart library, community forum and other centralized hubs.",
    ja: "IR、譜面ライブラリ、コミュニティフォーラムなどの中央集権的な交流プラットフォーム。",
  },

  "cap.status.shipped":      { zh: "已实现",            en: "SHIPPED",             ja: "実装済" },

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
  "tw.live":    { zh: "运行",   en: "Live",  ja: "動作" },
  "tw.pause":   { zh: "暂停",   en: "Pause", ja: "停止" },

  /* ============================================================
     DOWNLOAD — static GitHub Releases and QQ group links
     ============================================================ */
  "dlp.m.gh":       { zh: "从 GitHub Releases 下载发行包", en: "Grab the build from GitHub Releases", ja: "GitHub Releases から発行包を入手" },
  "dlp.m.qqh":      { zh: "QQ 群", en: "QQ Group", ja: "QQ グループ" },
  "dlp.m.qq":       { zh: "一键加群 · 650530995", en: "One-tap join · 650530995", ja: "ワンタップ参加 · 650530995" },

};
