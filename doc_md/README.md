# OMS Frontend 文档索引

本目录保存 OMS Frontend 的内部规划文档，仅用于 vibe coding 上下文、任务同步和决策留痕。

## 目录分工

- `mainline/`：主交付线，记录当前应当优先推进的正式路线
- `subline/`：并行支线集合，按功能方向拆分为多个子目录，每个子目录各自维护五大文档
- `other/`：调研、运维、杂项与尚未上升为正式计划的内容

## 文档联动索引

- 当前仓库内部规划：`oms-frontend/doc_md/`
- 工作区级前后端桥文档独立仓库：`dev_bridge_md/`
- 后端仓库内部规划：`oms-backend/doc_md/`

## 统一产品阶段

1. Phase 1：宣传展示
2. Phase 2：账号系统
3. Phase 3：个人主页与成绩展示
4. Phase 4：排行榜
5. Phase 5：谱面下载入口与私服相关服务

## 文档纪律

- 仓库根目录 README 是唯一对外正式文档
- 任何开发、调研、修复或验收只要改变计划、状态、约束或验证结论，必须同步更新所归属的文档
- 若变更涉及前后端通信、字段约定、接口契约、联调方式或验收结论，必须同步更新工作区根目录独立仓库 `dev_bridge_md/`
- `mainline/constraints.md`、`mainline/dev-plan.md`、`mainline/dev-progress.md`、`mainline/changelog.md` 必须互相一致
- `subline/` 不再直接平铺五件套；支线必须按功能方向建子目录，并在子目录中维护对应五大文档
- 若支线或调研内容被采纳，必须同步提升到 `mainline/`
