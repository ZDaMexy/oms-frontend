# Frontend Subline P1-A Constraints

- `P1-A/` 是 Phase 1 的支线功能方向占位，目前只用于验证支线目录组织方式
- 当前尚未进行任何开发，禁止把未开始的内容写成已完成进度
- `P1-A/` 内的计划、状态和变更必须与实际一致，不能提前伪造里程碑
- 若 `P1-A/` 的结论影响主线计划、状态或约束，必须同步回写 `mainline/`
- 后续新增支线方向时，应与 `P1-A/` 保持同样的五大文档结构

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 必须保持一致
- **回写主线**：若结论影响主线计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`