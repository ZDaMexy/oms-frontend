# 2026-10-04 多来源 IR 浏览器补核

本次隔离候选中，玩家已能从网页搜索 MD5 并打开全部来源参考榜、查看自己的 OMS 新局历史，以及创建和撤销播放器专用密钥；切换账号后只显示当前账号的个人内容。以下是 root 使用实际 CUA 浏览器完成的补核，记录匿名行为汇总；多来源尚未部署，OMS 与目标播放器真人验收仍未完成。

## 适用来源与方法

| 项目 | 本次适用来源 |
| --- | --- |
| 日期 | 2026-10-04 |
| Website | `08ce0bd2247fe46631308d7a38bfc4c404cee086` |
| Backend | `9e10197e5c29cf6bb4048c7c4ac390e6e8c0fbea` |
| 候选标识 | `9e10197e5c29-08ce0bd2247f`，证据文件中的 `r6` 对应此候选 |
| 浏览器地址 | 本机 loopback `18086`，不是公网生产 |
| 数据范围 | 当前账号、OMS 新局及外部状态均为 root 拥有的隔离合成输入；历史来源为全量公开投影 |
| 执行与归档 | root 操作实际浏览器；本报告按其观察与现存证据归档，没有再次运行浏览器或开发检查 |

这些来源不随后续 HEAD、候选编号或生产切换自动更新，不能标成 r8 或新生产。原母库与公开个人原始行不进入本报告；秘密、凭据和账号原行不写 Git。共同语义取 [正式合同](../../../../oms-server/dev_bridge_md/doc_md/subline/oms-ir/multisource-contract.md)，服务全量、主机及恢复证据取 [Backend 实施](../../../../oms-server/oms-backend/doc_md/mainline/dev-progress.md#多来源-ir-实施)。

## 实际账号与密钥路径

| 操作 | 本次观察 |
| --- | --- |
| 合成账号 A 登录并打开本人历史 | 只显示 2 个 OMS 新局，包含 BMS 与 mania；外部状态和历史摘要不增加逐局历史 |
| A 创建 OpenLR2 来源专用密钥 | 创建成功时显示一次秘密；秘密没有保存或打印到证据报告 |
| 重载后查看密钥并撤销 | 秘密不再显示，撤销状态可见；A 原有 ED 密钥仍可用 |
| 退出 | 本人历史、密钥及个人显示清空 |
| 合成账号 B 登录 | 密钥列表为空，本人历史为 3 个新局，含 B 独有的 mania 条目 |
| 退出 B，返回 A | 本人历史恢复为 A 的 2 个新局，未出现 B 独有条目；密钥列表只有 A 自己的已撤销 OpenLR2 与原 ED 项 |

该路径证明此次实际登录、退出、重载和账号切换后的可见结果，不单独签收人为延迟旧响应、密码重设、跨来源写入或目标宿主用密钥交分等其他门。

## 全来源参考榜与帮助页

通过网页 MD5 搜索结果点击打开谱面，全部来源参考榜显示 29,204 个身份，本人提示为同范围全榜第 28,901 名；历史旧 namespace/ID、未知条件及原灯按来源如实展示，没有把历史同名账号认作当前本人。本次没有重新执行此前的全部来源组合和末页路径。

帮助页实际显示三个 Java 插件、OpenLR2 两架构 DLL、nlohmann/json MIT 通知及 `versions.json` 路径，并说明固定版本、未知 BP 与并列显示限制；当次浏览器没有 warn/error。文案与下载路径通过不等于原生界面、真实交分或非空 C++ 容器跨 DLL 已通过，MIT 通知也不表示 OpenLR2 SDK 许可已确认，宿主与 SDK 不随运行包分发。

## 七个生成资产

实际 HTTP 读取以下七项全部返回 200，下载字节的 SHA256 均与上述候选匹配；汇总文件逐项登记 `exact_candidate=true`，没有将后续候选资产代入。

| 候选路径 | 本次字节数 |
| --- | ---: |
| `ir/adapters/omsir-beatoraja-0.8.8-0.1.0.jar` | 18,200 |
| `ir/adapters/omsir-lr2oraja-build11611350155-0.1.0.jar` | 18,232 |
| `ir/adapters/omsir-ed-v0.4.0-0.1.0.jar` | 18,227 |
| `ir/adapters/OmsIR-v260915.x64.dll` | 463,872 |
| `ir/adapters/OmsIR-v260915.x86.dll` | 400,896 |
| `ir/adapters/nlohmann-json-LICENSE.MIT.txt` | 1,075 |
| `ir/adapters/versions.json` | 14,599 |

原始汇总：`F:/oms/artifacts/oms-ir-multisource-20261004/browser-assets-r6.json`，其中 `scope=isolated localhost`、`public_deployment=false`；它记录匹配结果，不包含逐项 SHA256 字面值。此门覆盖本机候选的实际生成资产请求，不代替公网发布后的下载字节核对。

## 画面与既有证据

本次截图均保留在 F 盘证据目录，没有复制入 Git：

- `F:/oms/artifacts/oms-ir-multisource-20261004/browser-key-revoked-r6.png`
- `F:/oms/artifacts/oms-ir-multisource-20261004/browser-account-two-history-r6.png`
- `F:/oms/artifacts/oms-ir-multisource-20261004/browser-account-one-history-r6.png`
- `F:/oms/artifacts/oms-ir-multisource-20261004/browser-help-players-r6.png`
- `F:/oms/artifacts/oms-ir-multisource-20261004/browser-all-sources-r6.png`

root 已查看密钥撤销与账号 A 本人历史两张画面，其余保留为当次 CUA 截图，不另称逐图人工签收。既往 Website `5ac044e9d014` 候选的深链、单选/多选/全选/空选、本人末页、主动同条件及 390px 证据沿 [主线既有记录](../mainline/dev-progress.md#保留事项)保留原来源和适用范围，本次不重复签收，也不把其日期或静态检查数量刷新到本报告。

## 未完成门

多来源当前仍是未部署候选，生产保留原社区与 v1 IR；公开页面交互和七资产公网哈希需在对应发布后核对。OMS 日常真人验收由用户通过 VS Code 非调试启动当前工作区，固定播放器的真实交分、原生读榜、玩法矩阵及 P/C 仍沿 [真人验收说明](../../../../oms-server/oms-backend/adapters/ACCEPTANCE.md)执行；全量主机资源、恢复与回退门由 Backend 单独记录。本次未生成 Windows 发行包，不宣布 P/C 完整闭环，部署且真人未完时才能登记“已部署待验收”。
