# OMS Website

本仓是 OMS 旧静态官网设计及历史来源，当前只作保全与已验证兼容范围内的源码回退。2026-10-08 [正式官网](https://oms.zdamexy.work/)已由相邻 [OMS Web](../oms-web/README.md) 接管，状态为“已部署待验收”；当前玩家范围、新闻维护和真人路径取[原版站文档](../oms-web/doc_md/README.md)。本仓不继续当前功能开发。

以下保留旧静态方案的职责与使用方法：2026-10-03 IR 公网试运行，2026-10-04 上线真实社区帖子首页、独立下载 / 帮助、帖子与账号页。社区复用浏览器 cookie 账号并按需 HTTP 保存内容，没有持续在线连接。旧实现和当次证据见[本仓记录](doc_md/mainline/dev-progress.md)，不代表当前原版站已获真人签收。

OMS 为 Windows-only、BMS / mania 双模式、离线优先。官网公开下载与开发源码分开，官网下载入口指向 GitHub Releases；本轮不生成 Windows 发行包，用户自行发行并通过 VS Code 非调试启动当前工作区验收。

## 原静态页面与源码（历史）

| 地址 | 职责 |
| --- | --- |
| `/` | 真实近期社区帖子、产品简述与常用入口 |
| `/download/` | 公开发行、下载和更新说明 |
| `/help/` | 启动、谱库、IR、隐私与反馈指引 |
| `/community/` | 分类 / 搜索 / 作者筛选及分页列表 |
| `/community/new/` | 新帖 |
| `/community/posts/{id}/` | 可分享的独立帖子及回复 |
| `/account/` | 共用账号、本人帖子和 IR 入口 |
| `/ir/` | 条件榜与本人记录 |

2026-10-04 静态社区门户资源集中在 `portal/`，IR 资源在 `ir/`；旧 `assets/` 演奏 / 三语 / 判定源码保留归档，当次门户不加载第三方谱面演示。正文只有纯文本，不执行帖子 HTML / Markdown；“没有官方新闻栏目”仅属当次页面范围，后续旧设计新闻记录另见主线历史。当前新闻维护源为原版站 [resources/oms/news.json](../oms-web/resources/oms/news.json)，方法见[新闻维护](../oms-web/doc_md/production-maintenance.md#新闻与内容维护)。

## 旧设计预览与验证

下列方法只用于旧设计，普通静态预览只能检查独立静态入口与布局：

```sh
python -m http.server 8080 --bind 127.0.0.1
```

原静态方案的账号、帖子 / 回复与动态地址需要 Nginx 静态路由和 Backend API 同源提供；当时 Backend 单独启动只挂 `ir/`。旧隔离预览探针及其范围见 [verification](doc_md/mainline/verification.md)，后端说明见 [Backend 运行与验证](../../oms-server/oms-backend/doc_md/mainline/verification.md)。这些步骤不用于现原版网站，当前本地运行取 [OMS Web 本地说明](../oms-web/doc_md/local-use-and-recovery.md)。

在本仓库运行 `node scripts/verify.mjs` 检查多页导航、本地资源和 JavaScript 语法；真实交互、数据持久保存、权限与窄屏另行验收。本机开发检查 shell 先执行 `. F:\oms\UseDevelopmentStorage.ps1`，临时与证据放 F 盘。

## 维护与发布

统一阶段由 [Dev Bridge](../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义，共同接口沿 [社区合同](../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md) 和 [IR 合同](../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md)。本仓 [mainline](doc_md/mainline/README.md) 保留旧设计边界与历史；当前来源、未完成真人门及保留当前库的回退只取 [OMS Web 维护](../oms-web/doc_md/production-maintenance.md)。

`origin` 为 GitHub `ZDaMexy/oms-frontend`，原页面、脚本与未提交工作继续保留。当前官网沿原版站不可变发布目录运行，不执行本仓旧 `deploy` 远端的整站检出钩子。共享设施镜像与历史双站结果见 [other](doc_md/other/README.md)。
