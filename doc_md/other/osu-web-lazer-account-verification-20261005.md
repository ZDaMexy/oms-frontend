# osu-web 与 lazer 原账号路径核验（2026-10-05）

## 范围与状态

用户采用实际 osu-web 前端，并要求客户端复用 lazer 原登录与个人页。此次静态适配继续使用 OMS FastAPI / SQLite 与原账号、逐局 / 最佳状态 / 历史摘要边界，默认离线和按需连接。候选本地检查正在进行，尚未切换生产；实际 current 仍为 `ecca50eab82c-d34fab9b9611` / schema3，旧发布只取 [原报告](website-redesign-verification-20261005.md#上线与真人路径)。视觉、真实社区、OMS＋全量公开历史＋ED7K 先导 P 与完整 C 均未签收。

## 来源与原工作保全

起始 Client `1ffef225c2c64c350e5478c304d9f1140cb71802`、Website `e97101e0677501a3fe893fbb6e075fa1ecef2dfa`、Backend `3af29a6001f9a66e214e1c384c1e31b8b6567fc3`，各在线 fetch 后跟踪差异 0/0。Dev Bridge / Client Bridge / Homepage 的在线来源和原未提交文件指纹一并留 F 盘基线；本轮选择性提交，不夹带既有治理整理、legacy assets 或删除。历史发布提交不当作当前工作区源码。

osu-web reference 在线复核后快进到 `2c596022a1345fbed288978e7fa5304df0359f50`，复用其 nav2、header-v4、header-nav-v4、user-home、forum-topic-entry、download-page、btn-osu-big、profile-info 的实际 Blade / Less，并在静态 HTML / CSS / DOM 脚本中适配 OMS。准确 19 个 upstream 文件、指纹与本地去向见 [来源清单](../../portal/osu-web-sources.json)，许可与变更见 [LICENCE](../../portal/LICENCE.txt) 和 [notice](../../portal/THIRD_PARTY_NOTICES.txt)。使用系统字体与 OMS 已有图标，未导入 ppy 商标、字体、美术或整套服务。发布时由严格白名单生成 `/portal/oms-website-source.tar.gz`，绑定实际提交和原源码字节，不含开发目录、私库、凭据、个人原始行或插件二进制。

## 已验证的候选行为

- Backend 最小 profile 接口 focused 19 项、完整 182 项通过；生成源码下载另有 1 项 exact bytes / 白名单检查通过。接口只返回 `user.id / username`，已有公开榜或可见社区作者匿名可见；无公开内容账号仅本人会话可读，其他人 / 不存在账号同为 404。错误会话、冲突凭据、来源密钥不会退成匿名权限。共用 600/IP/min 读额度与 no-store；不增加数据库列或改旧档案可见性。
- Website 静态复查 10 页 / 311 引用 / 4 脚本 / 3 样式通过。真实浏览器在隔离合成账号完成登录、发帖、回复、固定帖子链接、作者入口和本人个人页；原始脚本文本作为文本显示。十页桌面和 390×844 各一次布局记录，无整页横向溢出。个人页移除没有真实字段的空白封面；没有伪造 PP、国家、等级、次数或局历史。数据与截图仅本地隔离，不上传生产社区。
- 客户端复用原 ToolbarUserButton / LoginOverlay / LoginForm 与 UserProfileOverlay / ProfileHeader / 原分页控件，连接真实 OmsIrService；奖杯仅保留查榜和账号跳转。r7 集中 Release 有效复编 64/64 通过，关闭窗口取消 HTTP、迟到登录不发布凭据 / 账号、关闭 / 换账号后旧本人记录不出现，跨账号与原 UI 回归均保留。Desktop 普通 Release 编译通过，保留未改 BMS 测试源文件 CS8600 / CA2007 两项警告。r1～r3 编译失败、r4～r6 各 63/64 的原证据保留；场景注册方法组提前捕获上一轮窗口，改为执行时读取当前实例，不削弱安全断言。Service 在实际 await 登录回应后、写凭据前复核取消。真人 UI、实服、P/C 未由这些软件结果签收。

原始命令、日志、TRX / XML、截图与失败均留 `F:/oms/artifacts/oms-osu-web-lazer-account-20261005/`。软件门不签真人产品质量或 P/C，十页布局记录也不等于每条交互已签收。

## 共享主机空间准备

保持原全量公开投影 25,562,325 摘要 / 334,117 谱面 / 1,600,610,304 字节，未重读母库或扫描其他私有数据。主机原合成 live 验证库 887,123,968 字节已完整压缩到 F 盘，解压逐字节指纹 `85a1d405524abf8ae855f27d5ede077bef8a371abf27f8e081d536934bfe1390` 一致；压缩 34,283,523 字节。核对严格旧路径、合成标记、无使用进程和已提交 WAL 后，只移除这份闲置合成原库及空 WAL / SHM，保留旧报告、元数据与恢复压缩证据。可用空间从 4,727,586,816 增至 5,614,743,552 字节，生产库、日备份与不可变投影未动。

最初保全脚本错误假定旧恢复 raw 仍存在，随后只处理实际存在的主合成库；首次严格辅助文件检查遇到只读 SQLite 产生的空 WAL / SHM，复核后定点处理。原失败日志不改写。完整保全与退休收据见同 F 盘目录的 `retain-host-evidence-r2.log`、`retained-r10-databases/retention-report.json`、`retire-retained-host-evidence-r2.log` 与 `retained-r10-retirement.json`。新包的全量运行、真实共享预算与两次新空恢复尚待执行；不拿旧十万条报告或压缩保全代签这些门，不购买或扩盘。

## 后续与真人门

继续完成窗口关闭 / 换账号隔离、个人页公开资格与登录返回、来源混榜回归、实际已提交包和源码下载、固定 SDK / 两架构制品来源、全量主机运行与两次新空恢复。通过后直接部署试运行并核对双站、精确路由、CSP、普通刷新及实际下载字节，另记准确 current、备份和兼容 schema3 回退来源。

部署后用户通过 VS Code 非调试启动 `F:/oms`，从原右上角用户入口连接 / 登录，打开原个人页检查本人记录，再跳同账号网页；网页与奖杯按同 MD5 / 来源 / 条件对照真实成绩、独立灯、人数、排名、分页。仍需保存后真实新局、旧待交 / UUID / 归属、断网重启和换账号，随后先导 ED7K 与完整指定版本 / 玩法 / Open 两架构门；沿 [实际播放器说明](../../../../oms-server/oms-backend/adapters/ACCEPTANCE.md)承接反馈。真人未签收时只标“已部署待验收”，不生成 Windows 发行物。
