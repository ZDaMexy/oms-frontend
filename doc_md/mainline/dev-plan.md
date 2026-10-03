# Frontend Mainline Plan

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；本轮用户已授权社区帖子首页及独立页面，按 [社区闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md) 实施。实际状态与证据见 [当前进展](dev-progress.md)。

## 当前最近任务

首页 / 独立页面、真实帖 / 回复 / 本人管理、账号复用和本地实际 Edge 桌面 / 窄屏闭环已通过，软件与原数据 / 恢复门见 [当前进展](dev-progress.md)。不因原 TODO 文本重复扩测，接下来执行：

1. 统一提交当前 Website 来源；保全开工已有未提交治理 diff，不借发布并入旧素材或第三方谱面演示。
2. 取得生产一致备份，按 schema 1→2 与新不可变 release 发布官网 / Backend，验证固定帖子地址、独立页面、旧下载入口、IR / API / TLS 及个人主页。
3. 在公开环境以桌面 1280×800 / 手机 390×844 验收真实同源账号与页面，补核帖子顶部截图；公开行为探针不得留下假社区动态。
4. 汇总生产保全 / 运行 / 浏览器和来源版本，提交推送实际状态。GitHub Latest `oms_20260626` 与 IR 开发源码分开，本轮不制作 Windows 包，真实客户端游玩由用户从 VS Code 验收。

## 交付后的保留事项

- 客户端真实 BMS / mania 同局、断网重启和原账号恢复仍沿 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md)，由用户通过 VS Code 非调试启动当前工作区验收。本轮不制作 Windows 发行包。
- 截图 / 视频、后续帮助内容和公开发行说明按真实版本补充，不用网站布局或社区交互通过代替客户端事实复核。
- 附件、点赞、私信、实时聊天、在线状态、官网谱包及开放接口不进入本轮，也不预建入口；新需求另行采用合同。

旧 [P1-A](../subline/P1-A/README.md) 已交接；本轮社区由 Website mainline 承载，共同接口只维护于 [Dev Bridge 社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)。
