# Frontend Mainline Plan

本文件只维护 Website 执行计划。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；本轮用户已授权社区帖子首页及独立页面，按 [社区闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/dev-plan.md) 实施。实际状态与证据见 [当前进展](dev-progress.md)。

## 当前最近任务

官网已发布；API/持久恢复、本地与主机隔离写流程、最终公网只读/桌面/窄屏已有证据，具体来源和首轮修复见 [当前进展](dev-progress.md)。下一步保留：

1. 用户在真实环境注册/登录并发帖、回复和本人管理，产生第一批真实社区内容；保留诚实空状态，不为主页观感填假帖。
2. 支持用户从 VS Code 验收客户端同局与断网补交，公开下载能力按其实际发行版本说明，不用开发源码代替；不制作 Windows 发行包。
3. 多来源 IR 先完成[正式规划审查](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md)，按下方待审查投影进入；已完成的生产/备份/顶部截图和提交收尾保留于历史。

## 待审查多来源 IR

网页和 OMS 游戏内的同谱来源多选、真实参考混榜、主动同条件榜与 LR2IR 全量公开历史由 [唯一详细提案](../../../../oms-server/dev_bridge_md/doc_md/other/oms-ir-multisource-plan-20261004.md)维护。D01～D09 未正式审查，现有 `/ir/` 仍是 v1 条件榜，没有来源筛选或历史基础榜。

审查采纳后本仓承担 M4 的谱面直达/目录检索、来源组合 URL、未知条件/旧身份/独立灯展示，以及接入密钥/帮助中真正需要的入口；按 M3 已采纳查询消费，不在页面拼 TopN 或过滤后伪造全局名次。先导 P 和完整 C 的桌面/窄屏/账号切换及真人证据独立留存，不由社区页面成功签收。

## 交付后的保留事项

- 客户端真实 BMS / mania 同局、断网重启和原账号恢复仍沿 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md)，由用户通过 VS Code 非调试启动当前工作区验收。本轮不制作 Windows 发行包。
- 截图 / 视频、后续帮助内容和公开发行说明按真实版本补充，不用网站布局或社区交互通过代替客户端事实复核。
- 附件、点赞、私信、实时聊天、在线状态、官网谱包及开放接口不进入本轮，也不预建入口；新需求另行采用合同。

旧 [P1-A](../subline/P1-A/README.md) 已交接；本轮社区由 Website mainline 承载，共同接口只维护于 [Dev Bridge 社区合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-community/constraints.md)。
