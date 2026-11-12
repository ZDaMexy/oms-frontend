# 2026-11-12 共享主机安全体检与补丁

> 两站共用设施同文镜像。本页记录本次安全体检与修复；当前内核与运行时安全状态以本页为准。应用身份与产品验收状态不变。

## 体检结论

应用层关键组件均已在近期安全修复版：PHP **8.5.12**（修 php2shell CVE-2026-109618/109619，CVSS 9.2，在野利用）；Nginx **1.30.6**（修 10 月 CVE-2026-15176 等 RCE 批次）；系统 OpenSSL **3.0.13-0ubuntu3.16** / OpenSSH **9.6p1-3ubuntu13.20**（Ubuntu 已 backport 2026 各批 CVE，含 regreSSHion 与 10 月 USN-8928）；Laravel **13.35.0**（修邮件 CRLF CVE-2026-48019）。主要风险在内核与一批 apt 安全更新。

## 已实施修复（2026-11-12 CST）

- 内核 6.8.0-147 → **6.8.0-149-generic**：修 **CVE-2026-98432**（CVSS 9.8，IPv4 TCP 释放后重用，可远程 root）及 CVE-2026-98260 等。17:38 重启，约 15 秒恢复；147 保留作 GRUB 回退。
- **MPTCP 关闭并持久化**：`net.mptcp.enabled=0`，`/etc/sysctl.d/99-mptcp-hardening.conf`——CVE-2026-98432 已知利用路径缓解。
- Node 22.23.4 → **22.23.5**（11-11 安全更新，HTTP/2 UAF、llhttp 堆拷贝、TLS 重协商绕过 mTLS 等多个 HIGH）。
- apt 安全更新：glib 2.80.0-6ubuntu3.10、krb5 1.20.1-6ubuntu2.10、sqlite 3.45.1-1ubuntu2.9、snapd 2.78、libaudit 等。
- 修复迁移遗留：`shiro-agent` 重新 enabled（迁移时防双跑 disable 后未恢复自启），重启后正常 active。

## 保留 / 未动

- `intel-microcode`、`cloud-init` 沿用既有 hold（虚拟机微码由宿主管理；不强行 unhold）；docker / fwupd / open-vm-tools 等无关大跳变 hold。
- BT 面板 13.1.0 未更新（更新可能覆盖已加固 init / 模板，需单独评估）。
- 应用代码、网站内容、TLS 续期配置未改。

## 验证

重启后内核 149、MPTCP=0；nginx / oms-ir / oms-ir-catalog / oms-web / shiro-agent / bt 全 active，无 failed 单元，双 health ok，三备份 timer waiting；公网 zdamexy.work / oms 200、shiro 302、QQ 回调路由到达 Shiro。

## 待办

- Shiro 内置 Node 24.22.1 → **24.22.3**（11-11 更新影响 24.x；需走 Shiro 发布流程重建包，非 apt 可解决）。
- BT 面板 13.2.0 更新单独评估；888 端口服务（BT phpMyAdmin）可停用以收面。
- OMS Python 依赖由 uv 管理，本次未枚举（应用 OpenSSL 3.5.9 当前）。

证据：`oms-web/artifacts/server-health-20261112/`（版本采集、apt 补丁级、升级与重启验证收据）。