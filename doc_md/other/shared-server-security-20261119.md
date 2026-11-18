# 2026-11-19 ZDaMexy 共享主机安全维护

## 主机与修复

本轮操作目标是 [11 月 12 日迁移后的生产主机](shared-server-migration-20261112.md)。严格校验现有 SSH 主机密钥，确认别名 `zdamexy-srv` 指向 `47.95.29.3`，机内 cloud-init 实例 ID 为 `i-2ze7ctyv63iajph1tj7h`。四个公开域名的 DNS 和实际 HTTPS 连接均指向该地址。宝塔 OMS vhost 保留迁移前的历史文件名。

| 生效组件 | 维护结果 |
| --- | --- |
| Nginx | stable `1.30.6 → 1.30.7`，与 mainline `1.31.9` 同批修复。原配置启用的 HTTP/2 与 TLS 1.3 分别涉及 CVE-2026-123007、CVE-2026-123633 及 CVE-2026-118899。临时关闭两项协议能力，随后在同构本机按上一版参数和模块清单重建。校验官方发布签名及 558 项模块文件后，在 00:37 CST 换入新二进制并恢复原 vhost。运行二进制 SHA-256 `d22acfe455230ca7d9fc2b6d4480ccc3cbf071c94b198399d9e1b69755198cc5`。 |
| OMS Web | Laravel `13.41.0` 和 Symfony HttpFoundation `8.1.11` 已加载。现行包、备份核验和回退边界见 [OMS Web 维护](../../../oms-web/doc_md/production-maintenance.md#2026-11-19-依赖安全维护)。 |
| Shiro | Node.js `24.22.3` 和 Fastify `5.12.8` 已随现行包加载。独立 Linux 测试 144 项通过，部署前后配置、模型、认知和作息指纹一致。见 [Shiro 生产记录](../../../../Shiro-Agent/doc_md/mainline/production.md#2026-11-19-运行时安全维护)。 |
| Ubuntu 运行库 | 已安装的 `libc6 2.39-0ubuntu8.12` 尚待重启。00:57:44 CST 指令发出，00:58:01 CST 重新通过原 SSH 主机密钥连入并观测到新 boot ID。内核 `6.8.0-149-generic`，Nginx、SSH、OMS Python 与 Shiro 的 libc 映射有效，`reboot-required` 清除。PHP FPM 使用其隔离运行时的 musl。 |

公告来源见 [Nginx](https://nginx.org/en/security_advisories.html)、[Nginx stable 发布记录](https://nginx.org/en/CHANGES-1.30)、[Ubuntu glibc](https://ubuntu.com/security/notices/USN-9065-1)、[Node.js](https://nodejs.org/en/blog/vulnerability/november-2026-security-releases)与 [Fastify](https://github.com/fastify/fastify/security/advisories/GHSA-3qgw-9275-xf8w)。

## 重启后实际检查

- Nginx、SSH socket、宝塔、OMS 两个 Python 服务及 Web、Shiro 均 active。systemd 无失败单元，三个既有备份 timer 均 waiting。SSH 禁用密码、交互和 GSSAPI 认证，UFW active，`net.mptcp.enabled=0`。OMS 两个回环健康地址均 200，数据库设备和 inode 与切换前一致。
- 从外网使用真实域名和证书验证 HTTPS。Homepage apex / www、OMS 首页 / 新闻 / IR、Shiro 登录均 200。Shiro 匿名配置返回 401，私人域名的 QQ 回调路径返回 404。Nginx 入口另用本机回环验证 TLS 1.3，Homepage 和 OMS 协商 HTTP/2，Shiro 沿用 HTTP/1.1。
- `nginx -t` 通过，运行二进制与本机签名源码构建产物指纹一致。三个公开 vhost 与缓解前原件逐字节一致，实际加载配置没有 HTTP/3、显式 resolver 或 stream 客户端证书验证指令。生产原始配置和旧二进制放在 `/var/backups/oms-maintenance/nginx-security-20261119/`。应急启用 1.30.6 时用同目录的受限配置并复验，尽快重新切回受修复版本。
- 01:19:32 CST，加密全备成功生成含 47 个数据对象的目录。新 OMS / Shiro 发布包、Nginx 二进制、数据库快照、维护材料与总目录的完整密文回读均有本轮收据。备份与盘账取 [OMS Web 记录](../../../oms-web/doc_md/production-maintenance.md#2026-11-19-依赖安全维护)。

## 复核范围与后续项

- 复核了实际运行的软件包与暴露配置。Ubuntu OpenSSH 为 `1:9.6p1-3ubuntu13.20`，系统 Node.js 为 `22.23.5`，PHP FPM 为 `8.5.12`，Homepage 为静态发布。内核软件包 `6.8.0-149.149` 已包含 11 月 12 日记录的修复。Apt 刷新后没有查到与本轮运行组件匹配的额外安全候选。见 [Ubuntu OpenSSH](https://ubuntu.com/security/notices/USN-8928-1)与 [PHP 8.5 发布记录](https://www.php.net/ChangeLog-8.php#8.5.12)。
- 系统 OpenSSL `3.0.13-0ubuntu3.16`，OMS Python 自带 `3.5.9`。11 月 17 日公告中的特殊调用条件在本轮核验的公开入口未见匹配，Ubuntu 暂无对应更新候选。后续补丁以发行方供给为准。见 [OpenSSL 11 月 17 日公告](https://www.openssl-library.org/news/secadv/20261117.txt)。
- 宝塔 `13.1.0` 管理口 `12034` 目前仍允许公网连接。`888` 未在现有 UFW 入站规则中放行。管理入口调整需与现行维护接入方式配套验证。
- 迁移后可查的 journal 未记录成功的 SSH 密码或交互登录，也未见 Nginx worker core dump 或 SIGSEGV 记录。本次证据覆盖软件版本、相关配置、受控健康探测和上述日志范围。OMS 真人验收及入侵取证各有独立范围。核验收据位于 OMS Web 本机 `artifacts/server-security-20261119/`。
