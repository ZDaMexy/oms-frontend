# Frontend Mainline Progress

## 当前状态

当前维护 Phase 2 静态官网，并按用户授权发布 Phase 3 的独立 IR 试运行页；首页正式内容仍未收口。统一阶段及状态由 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义，下一步只在 [dev-plan](dev-plan.md#当前最近任务) 维护。

2026-09-09 代码审查基于 HEAD `5215e3b9d180a5572aaa631a58a38a2af852c0c4` 加当时未提交工作，覆盖 `index.html`、全部 4 个 assets 文件、验证脚本与本地解析器。工作区实现不等于已提交或已部署，生产版本对照见 [运维进展](../other/dev-progress.md)。

2026-10-03 `https://oms.zdamexy.work/ir/` 已发布，通过同源真实 API 支持注册、登录、退出、BMS / mania 条件组单谱榜及本人历史；凭据不放浏览器 localStorage，AT 只留本人历史，最佳分 / 灯可来自不同局。候选客户端主动连接 / 保存后交分 / 原账号补交沿 [Client Bridge 实现来源](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms-ir-client-implementation-snapshot-20261003.md)，默认地址仍空。页面明确为未经回放核验的试验榜，无手动上传；生产接收原样 C# 合成输出、同局重复及会话边界通过，不是真实设备成绩。容量 / 运行见 [Backend IR4](../../../../oms-server/oms-backend/doc_md/other/ir4-host-verification-20261003.md)；本轮没有发布首页已有未提交改动。

## 实现清单（2026-09-09 代码审查）

| 模块 | 工作区实际实现 | 证据与适用边界 |
| --- | --- | --- |
| 页面与视觉 | Cabinet Mode 单页；页眉/页脚按首页、特性、判定、下载、规划导航，对应 `index.html`、`#capabilities`、`#timing`、`#download`、`#phases`；桌面分栏与移动端折叠、横滚导航 | `index.html`、`assets/styles/site.css`；正式媒体尚未集成 |
| 语言与调节 | 82 个页面词条覆盖中/英/日，中文默认，语言存入 `localStorage`；红/黄/蓝/绿强调色，蓝色默认 | `i18n.js`、`site.js`；语言是正文切换，页面标题、meta description、部分 aria-label 和判定选项没有三语切换；强调色与播放设置不持久化 |
| 演奏区 | 静音 7+1K 谱面演示，BPM 161、452 拍、1629 音符，运行时显示 2:48；长条、自动累计分数/COMBO/Gauge、5 档 Hi-Speed、用户暂停、离屏/页面隐藏暂停、减少动画偏好 | `chart-lost.js`、`site.js`；分数与 Gauge 是网站动效计算，无键盘游玩、音频、真实客户端成绩或传分 |
| 特性清单 | 双模式、判定切换、Gauge、难度表、便携安装、外部谱库 6 项标为已实现，游戏社区标为计划中 | `index.html`、`i18n.js`；除便携细项外，客户端文案采用 [Client Bridge 历史确认](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记)，不证明当前客户端 HEAD；来源缺口见下节 |
| 判定窗口 | IIDX 1 档、LR2 4 档、RAJA 5 档、OD 6 档，共 16 个类型/难度组合；默认 RAJA easy，5 个读数和 4 条可视条随选择更新 | `site.js` 中本地数据及公式；切换交互可用不代表窗口数值已经与客户端校准 |
| 下载与路线图 | GitHub Releases / QQ 群 650530995 两枚静态链接；5 个阶段名称与状态对齐统一路线 | `index.html`、`i18n.js`；不调用 GitHub API 或 OMS Backend，没有自动取版本、包清单、安装步骤或下载代理；公开子编号尚未有统一定义 |
| 素材与工程 | 3 个站点 JS、1 份 CSS；没有客户端截图、视频或音频资源，无应用框架、构建步骤或包管理依赖 | 文件与本地解析器范围见 [仓库 README](../../README.md)；静态检查由 `scripts/verify.mjs` 提供，CSS 仍含失效模块 |

## 验证结论

- 2026-10-03 生产试运行：IR / API 与原两站均 200，HTTPS、cookie / Origin、同一组榜 / 本人隔离及原样 Create 合成输出通过；页面收集 / 留存 / 恢复说明已发布。浏览器控制连接反复超时，公网页面最终交互与桌面 / 手机截图未取得有效证据，保留首轮本地浏览器记录原日期并交真实环境验收；不把接口通过代签页面。
- 2026-10-03 IR1：真实浏览器通过账号、条件榜、本人历史、新条件历史链接、两标签并发会话恢复 / 退出、错密码反馈和服务中断后重试；1280×800 / 390×844 实际视口无整页横溢出、最终页面脚本错误为 0。六条记录是合成验收输入，真实客户端与多页浏览器尚未验证，详细证据见 [IR1 报告](../../../../oms-server/oms-backend/doc_md/other/ir1-local-verification-20261003.md)。本轮没有重新验收首页演奏 / 三语 / 系统动画偏好，不刷新 2026-09-09 原日期。
- 2026-10-03 首页投影检查：`node scripts/verify.mjs` 通过（17 本地引用、4 脚本、82×3 词条、控件与 1629 音符）；独立 IR 的 `node --check ir/ir.js` 和当前 diff 空白检查通过。首页既有未提交实现保全，此静态结果不冒充本轮首页浏览器验收。
- 2026-09-09 进度审查：`node scripts/verify.mjs` 通过（17 个本地引用、4 个脚本、82×3 词条、控件与 1629 音符），`git diff --check` 通过；仅核对网站实现与文档，未刷新客户端 HEAD。
- 2026-09-09 交互实现验收：隔离 headless Edge、`127.0.0.1:8093`、1280×800 / 390×844、三语布局与核心交互通过；后续纯文档审查复用该证据。模拟的页面隐藏/显示事件不代替真实标签切换；Google 字体存在 `ERR_ABORTED`，页面脚本与本地资源错误为 0。完整操作范围见 [当日验证记录](changelog.md#2026-09-09交互实现验证)。

历史迁移与验收见 [changelog](changelog.md#2026-08-09)。检查方法和不能证明的事项见 [verification](verification.md)。

## 风险与待确认

- **公开内容尚未收口**：当前 `index.html` 和全部正文词条均无可见 Windows-only 说明；FAQ、客户端截图/视频、详细安装/更新说明尚未集成。页脚仍称“BULLETIN 内部稿”，构建号固定 `0.1.0-DEV`，“记录/更新”日期来自访客打开页面时的 UTC 日期，并非发布记录。演奏区 HTML 初始长度 `2:28` 与脚本计算出的 `2:48` 不一致。
- **便携声明缺少细项依据**：`cap.05.body` 当前承诺“覆盖即可更新、便携包内数据储存、无磁盘污染”。[来源导出](../../../../oms-server/oms_client_bridge_md/doc_md/other/oms_server_bridge_export.md) 只给出“便携优先”的概括，现有事实登记不足以支持这些细项；这属于来源未闭环，不能据此断言客户端没有该能力。
- **判定数值未校准**：Client Bridge 的 `client-judgement-options` 只确认类型/难度切换，不提供具体窗口数值。网站 `site.js` 的 16 组数据、OD 公式和列映射没有版本化客户端依据；交互验收通过不构成数值准确性证明。
- **路线图子编号未统一**：页面 `phase__id` 仍显示 `P1-A · P1-B`、`P2-A` 至 `P5-A`，统一路线未定义这些子编号；它们不能映射成仓库历史 `subline/P1-A` 或被当成已成立的任务分解。
- **失效样式尚未清理**：`site.css` 仍含无当前 HTML/JS 消费者的 `.cab-bar*`、`.vitals*`、`.dl-hero*`、`.rel*`、`.install*` 等样式。2026-09-09 完成的简化仅覆盖脚本与词条；旧下载样式区还夹有当前按钮使用的 `.btn--primary`，清理时需按消费者处理。
- 演奏区当前使用第三方 BMS 谱面 **告白/告別 (BMS edit.) [Lost]** 的音符位置数据；正式公开保留前需要明确授权或替代方案。
