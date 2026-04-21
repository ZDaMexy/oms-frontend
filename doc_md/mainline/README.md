# Frontend Mainline

`mainline/` 是 OMS Frontend 的主交付线，也是当前仓库最重要的上下文来源。

## 主线目标

- 当前阶段是 Phase 1：宣传展示
- 后续阶段依次为账号系统、个人主页与成绩展示、排行榜、谱面下载入口与私服相关服务
- 当前虽然只做宣传展示，但页面结构和信息架构必须为后续完整 OMS Web 预留空间

## 文件职责

- `constraints.md`：记录边界、限制与不能违背的约束
- `dev-plan.md`：记录计划中的工作与阶段安排
- `dev-progress.md`：记录实际进展、验证结论与当前状态
- `changelog.md`：记录已发生的关键变更

## 相关结构约定

- `subline/` 是支线功能集合目录，不直接平铺五件套
- 每个支线功能方向都应拆成独立子目录，并在该子目录下维护五大文档
- 当前已先建立 `subline/P1-A/` 作为 Phase 1 的首个支线占位

## 文档联动索引

- 前端主文档线：`oms-frontend/doc_md/mainline/`
- 后端主文档线：`oms-backend/doc_md/mainline/`
- 工作区级桥文档主线：`dev_bridge_md/mainline/`

## 同步规则

- 计划变了，更新 `dev-plan.md`
- 状态变了，更新 `dev-progress.md`
- 约束变了，更新 `constraints.md`
- 事实变了，更新 `changelog.md`
- 若变化涉及前后端对接边界，必须同步更新 `dev_bridge_md/` 中对应文档
- 以上四者必须围绕同一条主线描述同一个现实状态
