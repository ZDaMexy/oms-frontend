# Frontend Mainline Plan

本文件只维护 Website 下一步。统一阶段与状态以 [Dev Bridge](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 为准；已实现内容和缺口证据见 [当前进展](dev-progress.md)，执行边界见 [constraints](constraints.md)。

## 当前最近任务

独立 IR 已试运行；后续按 [IR 闭环计划](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/dev-plan.md) 验收真实客户端与网页相同成绩 / 榜单、断网重启、分页与登录恢复，并补公网页面实际浏览器交互 / 桌面和窄屏检查。下列原静态首页任务保留，不因 IR 自动签收。

1. 补回可见 Windows-only 说明；处理内部稿页脚、占位构建号/日期、演奏区初始长度，核对标题、meta 与三语正文。
2. 为便携更新/存储承诺及判定窗口数值取得适用版本证据；复核已有客户端文案来源，按 [事实登记](../../../../oms-server/oms_client_bridge_md/doc_md/mainline/facts.md#事实登记) 回写。
3. 统一或移除未经定义的路线图子编号。
4. 收口品牌文案、下载说明与外链；先决定截图/视频、FAQ 的范围，再制作接入。
5. 确定第三方演示谱面的授权、替换或移除方案；如需重建数据，明确本地解析器与源数据的维护方式。
6. 按 HTML/JS 消费者清理失效样式，保留仍被使用的规则，并验证受影响布局。

## 后续 Website 执行投影

- **OMS-IR**：注册/登录入口、玩家主页、成绩列表、单曲表现、EX-SCORE 与排行榜视图，对接后端认证与 OMS-IR 契约。
- **社区官网**：按届时范围整合账号、成绩、榜单与谱面入口。
- **开放接口**：配合开放 API、QQ bot 和外部客户端传分的页面与文档入口。

OMS-IR 已采用 [v1 合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/constraints.md)；社区与开放接口仍未形成接口。旧 [P1-A](../subline/P1-A/README.md) 已交接。
