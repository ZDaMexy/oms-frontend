# OMS Website

OMS 客户端官网，域名 [oms.zdamexy.work](https://oms.zdamexy.work)。采用 HTML / CSS / 原生 JavaScript，已于 2026-10-04 上线真实社区帖子首页，并提供独立下载、入门帮助、帖子与账号页面。

独立 [IR 页面](https://oms.zdamexy.work/ir/) 已于 2026-10-03 公网试运行，支持真实账号、条件组单谱榜与本人记录。社区复用同一个浏览器 cookie 账号，通过按需 HTTP 持久保存帖子与回复；没有持续在线连接。新社区本轮的实际完成和发布情况见 [当前进展](doc_md/mainline/dev-progress.md)，不能由本 README 的目标结构签收。

OMS 为 Windows-only、BMS / mania 双模式、离线优先。官网公开下载与开发源码分开，官网下载入口指向 GitHub Releases；本轮不生成 Windows 发行包，用户自行发行并通过 VS Code 非调试启动当前工作区验收。

## 页面与源码

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

新门户资源集中在 `portal/`，IR 资源在 `ir/`；旧 `assets/` 演奏 / 三语 / 判定源码作为历史保留，不加载到新门户，也不发布第三方谱面演示。正文只有纯文本，不执行帖子 HTML / Markdown；没有官方新闻栏目、假社区内容或活跃人数。

## 预览与验证

普通静态预览只能检查独立静态入口与布局：

```sh
python -m http.server 8080 --bind 127.0.0.1
```

账号、真实帖子 / 回复与动态帖子地址需要 Nginx 静态路由和 Backend API 同源提供。Backend 单独启动只挂 `ir/`；完整本机预览使用保留的隔离合成库探针，命令及验收范围见 [verification](doc_md/mainline/verification.md)，后端启动方法见 [Backend 运行与验证](../../oms-server/oms-backend/doc_md/mainline/verification.md)。

在本仓库运行 `node scripts/verify.mjs` 检查多页导航、本地资源和 JavaScript 语法；真实交互、数据持久保存、权限与窄屏另行验收。本机开发检查 shell 先执行 `. F:\oms\UseDevelopmentStorage.ps1`，临时与证据放 F 盘。

## 维护与发布

统一阶段由 [Dev Bridge](../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义，共同接口以 [社区合同](../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md) 和 [IR 合同](../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md) 为准。实现、验证、提交版本和生产版本分别记录；当前缺口与下一步见 [mainline](doc_md/mainline/README.md)。

`origin` 为 GitHub `ZDaMexy/oms-frontend`。本轮沿不可变服务发布目录更新官网、Backend 与 OMS Nginx 扩展，不执行旧 `deploy` 远端的静态整站检出钩子，避免覆盖旧首页既有未提交工作或误发布归档资源。共享设施与双站结果见 [other](doc_md/other/README.md)。
