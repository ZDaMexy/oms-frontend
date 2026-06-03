# Frontend Other Progress

- 当前仅完成 `other/` 文档占位，尚无正式调研产出
- 已知后续需要关注的主题包括域名策略、多语言策略、隐私与统计边界
- 目前没有需要提升到主线的调研结论
- 运维事实（2026-06-03）：部署服务器已启用 HTTPS（`acme.sh` + ZeroSSL，oms/zdm 两站，cron 自动续期；域名 HTTP 301→HTTPS，裸 IP/`.well-known` 留 HTTP），详见 `changelog.md`。判定为运维事实、未改变 mainline 站点交付内容，故不提升主线

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 保持一致
- **提升主线**：若调研 / 杂项结论影响计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`
