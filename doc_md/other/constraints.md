# Frontend Other Constraints

2026-10-07 后续已授权原版 OMS Web 新站部署。独立 PHP 页面环境、BT 原生路由和同库配对回退须经实际共享主机 / 两新恢复门；旧设计与实际配置备份只放 F，不在服务器另打旧站包，不升级共享 PHP。当前未切换；来源取 [生产迁移](../../../oms-web/doc_md/production-deployment-20261007.md)。

## 2026-10-04 OMS 社区发布边界

OMS 社区门户与 IR 使用 `/opt/oms-ir/current/web` 的精确静态路由及同源 Backend API，旧 OMS 整站检出 hook 不用于当前发布；Homepage 的网站根和发布链独立。共享配置变更前保留备份，BT Nginx 检查通过后重载，并核对两站 / TLS / 续期入口。schema 2 不能盲切原 v1 运行时或用发布前快照覆盖新增用户内容，详细来源与恢复边界见 [社区发布记录](community-infrastructure-20261004.md)。

- 调研或杂项记录不能直接替代主线约束
- 外部信息应尽量补充来源、日期与适用范围
- 未经确认的想法不能直接写成正式计划
- 任何改变主线现实状态的结论，都必须同步回写 `mainline/`

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 保持一致
- **提升主线**：若调研 / 杂项结论影响计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`
