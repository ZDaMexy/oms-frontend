# Frontend Other Changelog

## 2026-06-03

- 部署服务器启用 HTTPS（oms.zdamexy.work + zdamexy.work/www 两站）：装 `acme.sh`（`/root/.acme.sh`，cron 每天 6:30 自动续期），签 **ZeroSSL ECC DV** 证书。当时 Let's Encrypt 生产环境异常（newAccount/newOrder 后立即 `accountDoesNotExist` / authz 404，staging 正常），默认 CA 虽设 LE 但实际 fallback 到 ZeroSSL 才签出。
- 证书装于 `/www/server/panel/vhost/cert/{oms.zdamexy.work,zdamexy.work}/{fullchain.pem,privkey.pem}`，`--install-cert --reloadcmd "/etc/init.d/nginx reload"`；下次续期约 2026-08-19，已 `--renew --force` 端到端实测通过。
- 两站 vhost（`39.105.55.78.conf` / `zdamexy.work.conf`）改为同 server 块 `listen 80; listen 443 ssl; http2 on;` + 证书；**域名 HTTP 301→HTTPS，裸 IP 与 `/.well-known/` 保持 HTTP**（IP 供 Host 测试、well-known 供续期 HTTP-01）。改前已备份 `*.conf.bak-pre-https-<时间戳>`。
- 备案/公网：截至本日两域名走公网 HTTP/HTTPS 均正常返回真实站点，未再观察到阿里云未备案 403 注入（5-26 时仍打不开）。
- 外部验证：`https://oms.zdamexy.work`、`https://zdamexy.work`、`https://www.zdamexy.work` 均 200 且证书浏览器信任；`http://` 域名 301 跳 HTTPS；裸 IP 仍 HTTP 200。

---

## 2026-04-21

- 初始化前端调研与杂项文档，占位记录后续参考资料、运维信息和开放问题

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 保持一致
- **提升主线**：若调研 / 杂项结论影响计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`
