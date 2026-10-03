# Frontend Mainline Constraints

## 产品与公开口径

- 统一产品阶段及状态只由 [Dev Bridge dev-plan](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 定义。Website 可以提前准备代码与内容，不能自行推进阶段；正式交付还须完成已选定内容与来源核对。
- 官网首页保留静态 HTML/CSS/JavaScript；2026-10-03 用户授权的独立 `ir/` 页面按 [IR v1 合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md) 接真实账号、本人记录与试验榜并已生产试运行；社区与开放接口不预建。
- 公开平台说明必须准确表达 Windows-only；未确认的品牌文案或客户端细项不能写成正式事实。
- 客户端端点、`ruleset_id`、联机、更新及协议兼容等事实必须来自 [Client Bridge](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/README.md) 的有日期/提交来源；进入新实现或发布前复核适用性，旧快照不等于当前客户端 HEAD。
- 默认发行边界引用 [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记)：`client-default-offline`（默认离线优先）、`client-in-app-update-disabled`（默认不启用游戏内更新）、`client-online-entrypoints`（在线接点不代表已连接服务）。这些 ID 用于定位来源与消费者，不另立事实副本。
- 客户端发行包入口直达 GitHub Releases；谱面等大文件由本地服务器承载，静态页面只负责入口与说明。正式公开保留第三方演示谱面前需确认授权或替代方案。
- 部署授权及共享服务器边界由 [other/constraints](../other/constraints.md) 维护。

## 实现与验证

- DOM、词典、演示谱面是受版本管理的内部契约，由 [验证入口](verification.md) 检查；缺节点、缺译文或坏数据应暴露错误，不用假 BPM/高度、空对象、中文兜底或静默返回掩盖。
- 持久化语言值在浏览器边界校验；禁止 `localStorage` 时仅禁用持久化、允许本页切换语言，异常处理限定在存储调用处。
- 保留用户暂停、离屏/页面隐藏暂停和系统减少动画偏好。按实际消费者直接实现并清理失效代码，不保留已删除页面或无支持需求的旧浏览器分支。
- 验证只覆盖本轮行为和必要回归；文档或静态文案变动不要求全站浏览器矩阵，具体证据范围如实记录。

## 联动

本轮 `client-ir-default-isolation` 与 `client-ir-comparable-fields` 经过 Client Bridge 登记和 Dev Bridge 采用。IR 页面同源消费 `/api/ir/v1`，浏览器凭据只在 HttpOnly cookie，不用 localStorage 或假数据；明确显示未经回放核验与最佳分 / 最佳灯来源差异，AT 不提供公开榜。候选客户端能力以绑定来源和有效软件证据为限，不能把合成输出写成真人成绩或完整发行签收。

客户端事实变化先更新 Client Bridge，再经 Dev Bridge 采纳后回写 Website/Backend；接口、字段、错误码、下载或联调结论变化同步 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/README.md) 与受影响项目。通用读取、回写和并行规则见 [AGENTS](../../AGENTS.md)。
