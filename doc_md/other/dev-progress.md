# OMS Website Other Progress

## 当前 OMS 网页维护（2026-10-09）

OMS成绩来源、谱面 / 玩家榜和个人成绩页已发布审改。当前共享绑定、双站 / 完整备份、历史运行包F保全和新增预算取[本轮镜像](oms-ranking-layout-20261009.md)，准确版本 / 回退只取[现行维护](../../../oms-web/doc_md/production-maintenance.md)。公开成绩前后一致，本地桌面与此前有效窄屏图片已取得；线上取景20秒超时，真人门继续待验收。Homepage本地内容没有随本轮发布。

## 2026-10-09 表内等级发布记录（15:03）

OMS谱面榜已发布表内等级选择，当前共享配置、双站 / 完整备份及预算取[本轮镜像](oms-table-levels-20261009.md)，准确版本 / 回退只取[现行维护](../../../oms-web/doc_md/production-maintenance.md)。本地桌面与公网检查通过，窄屏工具未生效、线上浏览器仍超时，真人门继续待验收；Homepage本地内容没有随本轮发布。

## 2026-10-09 难度表浏览记录（14:07）

OMS 难度表浏览已发布，新增共享配置绑定、双站 / 完整备份、有限读取与当前盘账取[共享镜像](oms-bms-tables-20261009.md)。准确当前来源和回退只取[现行维护](../../../oms-web/doc_md/production-maintenance.md)；网页元数据来源不提升客户端事实，Homepage本地内容没有随本轮上线。下方文案轮和2026-10-08接续保留各自日期，真人门继续待验收。

## 2026-10-09 文案审改记录

OMS 文案与阅读体验审改已发布，本轮双站 HTTPS、资源与完整备份核对取[共享镜像](oms-web-copy-review-20261009.md)。准确运行身份、回退和待验收范围只取[现行维护](../../../oms-web/doc_md/production-maintenance.md)；下方2026-10-08接续与更早观察保持历史日期，Homepage本地内容没有随本轮发布。

## 2026-10-08 原版接续记录

原版OMS官网已由 [OMS Web](../../../oms-web/OMS.md) 接管，HTTP / 页面运行包为 `b879e4233818-b0feceae22e4` / schema3，状态“已部署待验收”。固定维护来源为D1/22b，旧设计同库回退目标为D1/e6；完整身份与现行步骤只取[原版站维护](../../../oms-web/doc_md/production-maintenance.md)，共享接续取[镜像记录](shared-journal-budget-20261008.md)。

Homepage内容发布仍独立；原版上线不代表个人主页工作区改动已发布。系统日志原件完整F保全及合计512 MiB配置已有实际记录，线上真人浏览器、下载 / 账号 / OMS与P/C未因此关闭。下方旧观察保留原日期，不代表当前源码或刷新TLS实际续期验收。

## 2026-10-04 社区发布记录（历史）

社区门户当次release为 `f1f8286640c7-c1b1b7a5da7a` / schema2；最终公网桌面与手机只读检查通过，个人主页内容与发布前一致。03:35一致日备份成功并完成受限F盘外取。当次路径、来源、失败与真人门取[社区发布记录](community-infrastructure-20261004.md)，不用于现原版站的来源与回退判断。

## 最近双站核验

2026-09-09 01:10（UTC+8）通过公网请求和 `ssh zdamexy-srv` 只读核对，未修改服务器或触发部署。以下为两站共同的观察记录，另一站 other 保持镜像。

| 项目 | 该次证据 |
| --- | --- |
| DNS 与访问 | 2026-09-09 01:10（UTC+8），两域名 A 记录均为 `39.105.55.78`；HTTP 均 301 跳同域 HTTPS，HTTPS 首页均 200，系统 TLS 证书校验通过。 |
| 服务器 | `/etc/os-release` 为 Ubuntu 24.04.4 LTS；`/www/server/nginx/sbin/nginx -v` 为 Nginx 1.28.3。 |
| 网站根权属 | `/www/wwwroot/zdamexy.work` 与 `/www/wwwroot/oms` 均为 `www:www`。 |
| 当前证书文件 | 两个站点 `fullchain.pem` 均由 ZeroSSL ECC DV SSL CA 2 签发，有效期为 2026-08-18 00:00:00 至 2026-11-16 23:59:59（UTC）。仅读取公开证书元信息，未读取私钥。 |
| 复核范围 | 已查当前可达性、已安装证书、部署裸仓 main 与公开资源；该次未执行 post-receive、续期任务、Nginx reload 或生产浏览器矩阵，不能据此宣称完整发布/续期链路已重新验收。 |


## 本地与生产版本

本节仅保存2026-09-09的本地 / 部署观察；其中“本地”“生产”和未发布差异都指当次，不能用旧HEAD或裸仓水位判断当前原版站或Homepage发布。

- 本地 main 为 `5215e3b9d180a5572aaa631a58a38a2af852c0c4`；生产部署裸仓 `/www/wwwroot/oms.git` 的 main 为 `e8b764bcbbc9a7c25c330f5a6b144692bb374dd5`。本地 HEAD 比部署提交多 2 个文档/协作基线提交，另有尚未提交的页面与脚本修改。
- 生产 `index.html`、`assets/scripts/site.js`、`assets/scripts/i18n.js`、`assets/styles/site.css` 与部署 main 的工作树比较无差异；当前本地工作区没有同步到生产。
- 公网资源标记仍为 `20260602-19`，本地为 `20260909-1`。线上 HTML、i18n 与 site.js 不同于本地；`chart-lost.js` 和 site.css 字节一致。此前 Hero/社区状态口径和 2026-09-09 本地协作优化的播放修复不能记为已上线。
- 生产 `index.html` 文件最后修改时间为 2026-06-03 13:24:20（UTC+8），与公网 Last-Modified 对应；资源标记及文件时间均不替代发布日志。
- 该次只读审查不触发提交、push 或部署。后续发布安排见 [计划](dev-plan.md)；直接 push 当前 HEAD 不会包含未提交修复。


## 运行约定与历史

部署目标、SSH、Nginx 与续期边界见 [constraints](constraints.md)。历史部署和续期验证见 [changelog](changelog.md)，最近检查没有重跑发布或续期链路。当前无新增产品调研结论。
