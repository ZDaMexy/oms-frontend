# Frontend Other Changelog

## 2026-10-04（社区门户与共享设施）

- OMS 门户和社区已按不可变 release 上线；原 Homepage 内容与 TLS 正常，未触发个人主页部署。
- 记录两次激活、原 include 备份、schema 2、最终公网页面 / 手机只读验收及一致备份外取，详细事实见 [发布记录](community-infrastructure-20261004.md)。
- 保留首轮旧锚点和隔离探针失败及有效修复；没有公开测试帖、Windows 客户端发行包或证书续期重验。

## 2026-10-03（只读容量观察）

- 后续将用户截图确认的实例型号、2 vCPU / 2 GiB 与公网峰值 100 Mbps / 按流量计费镜像补存；不刷新实测日期或部署验收。
- 在两站 other 镜像保存 [共享主机容量观察](README.md#2026-10-03-共享主机容量观察) 与测量来源；没有配置、部署或网站代码变化，不提升历史网站验收。

## 2026-09-09（文档健康度整理）

- 将线上观察固定到原核验时点，当前进展只保留最近证据和版本差异，部署边界引用 constraints，历史完成项不再重复驻留进展。双站镜像事实未改变，没有重新执行生产验证。

## 2026-09-09（实际项目进度审查）

- 只读核对双站 DNS、HTTP 跳转、HTTPS、公开资源、服务器版本、站点权属、公开证书有效期及部署裸仓 main。
- 将本地工作区、已提交 HEAD 与生产发布拆开记录；确认本轮前的本地修改尚未上线，该次证据见 [dev-progress](dev-progress.md)。
- 同步两站共享设施观察记录，保留历史部署和续期结论；本轮未变更生产配置、触发发布或续期。

## 2026-08-09

- OMS 官网本地仓库迁入 `F:\zdamexy.work\oms-website`；Git 远端与生产部署目标不变。
- 网站工作区进一步并入 `F:\zdamexy-workspace\websites`，OMS Website 最终本地路径为 `F:\zdamexy-workspace\websites\oms-website`；线上部署链路不变。
- 将生产部署、SSH、BT Nginx 和双站回归约束从协作入口下沉到 `other/` 五文档。
- 公网复核：`https://oms.zdamexy.work` 与 `https://zdamexy.work` 均返回 HTTP 200，解析到 `39.105.55.78`。
- 与 Homepage `doc_md/other/` 建立双向索引，明确共享服务器事实采用两项目镜像记录并要求同步更新。

## 2026-06-03

- 部署服务器启用 HTTPS（oms.zdamexy.work + zdamexy.work/www 两站）：装 `acme.sh`（`/root/.acme.sh`，cron 每天 6:30 自动续期），签 **ZeroSSL ECC DV** 证书。当时 Let's Encrypt 生产环境异常（newAccount/newOrder 后立即 `accountDoesNotExist` / authz 404，staging 正常），默认 CA 虽设 LE 但实际 fallback 到 ZeroSSL 才签出。
- 证书装于 `/www/server/panel/vhost/cert/{oms.zdamexy.work,zdamexy.work}/{fullchain.pem,privkey.pem}`，`--install-cert --reloadcmd "/etc/init.d/nginx reload"`；下次续期约 2026-08-19，已 `--renew --force` 端到端实测通过。
- 两站 vhost（`39.105.55.78.conf` / `zdamexy.work.conf`）改为同 server 块 `listen 80; listen 443 ssl; http2 on;` + 证书；**域名 HTTP 301→HTTPS，裸 IP 与 `/.well-known/` 保持 HTTP**（IP 供 Host 测试、well-known 供续期 HTTP-01）。改前已备份 `*.conf.bak-pre-https-<时间戳>`。
- 备案/公网：截至本日两域名走公网 HTTP/HTTPS 均正常返回真实站点，未再观察到阿里云未备案 403 注入（5-26 时仍打不开）。
- 外部验证：`https://oms.zdamexy.work`、`https://zdamexy.work`、`https://www.zdamexy.work` 均 200 且证书浏览器信任；`http://` 域名 301 跳 HTTPS；裸 IP 仍 HTTP 200。

---

## 2026-04-21

- 初始化前端调研与杂项文档，占位记录后续参考资料、运维信息和开放问题
