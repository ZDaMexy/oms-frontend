# 官网与原账号界面复查（2026-10-07）

本轮按用户要求反复检查中文、信息层次、控件与实际行为，继续固定 osu-web 的已采用结构。首页以真实新闻和帖子为主体，下载、账号和谱面入口缩短；个人统计可折叠，成绩直接可读；技术原值保留在详情，维护证据不再占据玩家主路径。未知字段和待验收范围保留。

## 来源与范围

开工客户端 master `3cd92e1`、Website main `8b934624`、Backend main `94fd491`、Dev Bridge main `5156839` 均在线 fetch 后为 0/0。当前运行身份于本日 03:34 CST 独立只读核对，仍为 `d1f052b93a81-22b4ee54f237`，release-manifest SHA `3370fbfbcb7d47f5f59a268694edecc96c973920b130e185f8b95473c8e3045c`；文档 HEAD 不冒充运行文件。

固定 osu-web `2c596022a1345fbed288978e7fa5304df0359f50` 保持；来源 JSON 的原上游 blob SHA 未改，只更新真实本地修改说明和日期。AGPL、对应修改源码、固定依赖与源码下载继续随发布。新客户端源码 `6168791c2cd4da2386de467c3fa5a116b3bb26e7` 已提交 / 推送，原账号与查榜修改的实际证据见[客户端报告](F:/oms/doc_md/other/OMS_IR_UI_REVIEW_20261007.md)。没有制作 Windows 发行物。

原始 82 个未提交治理 / legacy 资产 / 删除路径继续保全，精确指纹报告在 `F:/oms/artifacts/oms-player-site-20261005/original-dirty-guard-deai-20261007-r1.json` 与 r2；选择性提交不包含它们。只修改当前实际加载的门户 / IR、React / Less 和必要事实文档，未进入聊天、presence、多人、官网谱包托管、地力或 PP 规则。

## 反复审查与采用

| 轮次 | 确定问题与采用的修订 |
| --- | --- |
| 第一轮 | 去掉口号、重复开发方案、整块泛用入口与重复时间；新闻 / 下载 / 入门帮助改为实际步骤与状态。统一导航名称、标题边距、字体与表格；修复主页继承 flex 却声明 grid 列的布局冲突，以及页头两重水平 padding。未知条件用可读名称，原字段 / 原 ID 保留。 |
| 第二轮 | 手选下载来源却仍走推荐源：主按钮跟随合格所选来源，明确来源名；默认推荐仍走批准自动入口。mania 原 EX / 独立灯错义：隐藏 BMS 控件，显示实际通过。修空 value 提示项、他人页空侧栏和中屏侧栏反增旧值；删空记录中的“交分接通后”及帮助页未提供的声音设置承诺。 |
| 第三轮 | 单页隐藏分页会困住失效第二页：仅第一页且总页数一页时隐藏；页外空结果区别于整个范围为空，保留筛选并直接返回第一页。BMS / mania 空榜不生成空表头；原页外本人行、未知灯与真实条件不隐藏。清理无消费者旧样式。 |
| 第四轮 | 玩家榜空本页缺可见全榜人数：显示实际 total；再核下载来源、mania、本人 / 他人页、空范围 / 空本页、原始条件 / 灯和当前加载脚本。其余源码 / 文案范围没有未处理的确定项，视觉仍不代签。 |

客户端同样处理了实际交互：未保存地址 / 启用值时禁止登录、注册和密码回车；保存连接无 HTTP，保存后只使用新 origin。换来源清旧条件、回参考榜 / 第一页，详情原位置展开、收起。原 OmsIrService、保存 factory、UUID / owner / 待交、取消和迟到响应保持。

## 实际检查与限制

证据根 `F:/oms/artifacts/oms-deai-20261007/`，全部 shell 先开发存储，构建 / 测试只由根串行执行。

- 最终 Website r5 的 TypeScript、Webpack 与静态链接 / CSP 全通过；实际 16 路由 / 524 引用 / 4 脚本 / 4 样式。r1、r3 早先结果保留原日期与源码，不复用旧产物签新增空页修订。
- `player-views-r3.json` 记录第一批 11 项真实源码 SSR / DOM 模型检查；最终 `player-views-r4.json` 16 项覆盖所选下载入口、不可下载来源、未知 9K / 缺星级、原条件值、分页、本人 / 他人页、空榜 / 页外本人 / 旧 LR2IR 身份、mania 控件与选项 value。这是隔离 fixture，不是实际浏览器布局或宿主签收。首次 r4 探针缺来源 registry，错误 fixture 失败日志保留，修正模型后 `player-views-r4b.log` 通过，没有为探针改产品。
- `community-empty-r4.json` 三个实际社区分支场景覆盖筛选为空、真正无帖子、失效第二页的真实 total / 筛选 / 返回路径；模型不发布测试帖子。
- 客户端 Release focused 首次 2 例因异步释放线程改 TextFlow 失败，原件保留；修复后原 17 例通过，普通 Desktop Release 编译通过，仅两既有 BMS 测试警告；不签新客户端真机。
- 浏览器库存可列现有 IAB 页，但创建与绑定生产 tab 分别 30 秒 / 10 秒超时并重置 kernel；Chrome 不可用；最后按 URL 获得3/5/6/7库存，再绑定原 tab6 也30秒超时并重置，见 `browser-connection-r6.json`。只看过旧 r6 / r7 本地截图以定位结构问题，未把旧合成截图当本轮部署或视觉证明。
- 官网公开下载仍为 [oms_20260626](https://github.com/ZDaMexy/oms/releases/latest)，本日复核 Latest 正式页，开发源码与公开发行分开；新闻日期不改为本轮开发日期。

## 部署、维护与真人路径

2026-10-07 04:25:04 CST 实际切换到 `d1f052b93a81-e6fdf914cb04` / schema3，当前 **已部署待验收**。Website 运行源 `e6fdf914cb04b89c73b29d5703d0f21fccb28696`；Backend 仍为 `d1f052b93a81e34307439c119f5fac66b82ac767`。48 个 Backend / 插件叶与原投影逐字节保持；服务完整运行门的客户端来源仍为 `234a9ff`，新原账号界面软件来源 `6168791` 分开记录，后续文档 HEAD 不替换它们。

- 发布 tar SHA `b2bc5c490b5f2e6bddb72bb4cdb35ab0b7412507d4ae8b9ac8bc3cd59b78e62b`，78 叶 release-manifest SHA `44d673a1f5c03dc5e921e9c2862fe0501eef0044c2e268f007a08a620a7b3c29`。实际外层 tar 使用发布 mtime，避免相同大小资源继承旧 ETag。初次出口报告误将源码清单重序列化后取 SHA，原 r5 保留；`release-export-r5-corrected.json` 修正为真实清单字节，包未更改。
- 公开修改源码包 SHA `bc3ceeab2d07ab7bc1578f706c0d08b3da45895e532fc5ce4a9132452e81ea31`，其中清单 SHA `4d8e701ea17dda6fc4e4b48681f209dd4db834f3a18adb600df63b9f3ea58ad8`；本次从公网重新下载，138 个原始源码 / 许可叶全部一致。
- `production-deployment-r6-failed.json` 保留：正式 backup 已完成，但 inactive oneshot 的 MemoryPeak 为 `[not set]`，控制器 int 转换失败；没有切换 current，timer 恢复。已按实际执行 SHA 保留原 r6 控制器。r7 改采实际同一 starttimestamp / PID 的 100ms 运行帧，终态缺值时记 null，不填零或套旧运行；本次 r7 实际峰与终态均为 134,217,728 B，正式 Max128 MiB / CPU50% / swap0，终态成功且 PID 已退出。F 私有目录首次 SID 未用 `*` 导致 ACL 设置失败，未复制私有数据；修正并核 owner / SYSTEM 两条受保护 ACL 后才外取。
- `production-deployment-r7.json`：正式旧维护 helper 不变，部署前快照仍准确绑定 `d1/22b` 及其原清单；两次新空目录用新 e6 清单恢复，同一公开投影合法，sidecar 不改源身份。两份 raw 均为 233,472 B / SHA `60980b093e5134e1149edb993fe78d4ad9229e15d81106b3924767d0e599c477`；实际终态峰分别 117,964,800 / 117,952,512 B，High112 / Max128 MiB、CPU50%、swap0，PID 均已退出。
- 主机维护期间 198 份实际 200ms 样本最低 MemAvailable 855,326,720 B、磁盘余量 4,757,770,240 B，swap 使用 0；不是连续物理峰保证。源码切换后 8081 / 8082 健康及两单位 loaded / active / running、正 PID；live dev/inode `64771/265517`、schema3 和六份原配置 SHA 不变，timer 原 `enabled / active` 恢复。没有安装单位、修改 Nginx、恢复 live、购买或扩盘。完整25M与1800秒容量门沿未变 d1 / 22b 原实际来源，不改签为今日重跑。
- 正式 gzip / sidecar 原件外取到 `F:/oms/artifacts/oms-deai-20261007/production-private-r7/`；`external-full-verification.json` 独立完成全 EOF / CRC、raw 字节 / SHA、全部22表 / sequence / schema / 索引 / FK / integrity。宿主两恢复 raw 整字节等于该外取快照；不声称另在宿主逐表扫描。母库和其他私有目标未访问，私有原件不入 Git。
- 本次公开核对 `public-release-r7-20261006T202615Z/public-release-report.json` 137 GET / 770 检查通过，包括每个实际静态资源 / 五插件 / 双许可 / 版本清单、完整源码提供、旧IR / 社区 / 玩家页、两站 TLS / 原 ACME探针路由、重定向与批准原站307。热谱真实人数29,202、末页1461，单 / 多 / 全 / 空来源、页外空结果及 v1 / v2 内容一致；该谱无获证 OMS 条件，未造同条件实绩；公开社区无帖子，未发测试帖。Ginger / 616 两候选当次均 ok，Sayobot 元数据当次 ok，整包下载未跟随。
- `public-cache-r7.json` 54 请求 / 158 检查通过，当前校验值空304且保留 no-cache / IR no-store。真正从旧 d1/22b 发布捕获的23个页面 / 资源原校验值，`prior-cache-validation-r5.json` 的46请求全部通过；44个改变内容的条件请求均返回新200。HTTP不代替玩家旧浏览器普通刷新。

维护、每日备份、受保护外取与源码回退取[当前维护说明](../../../../oms-server/oms-backend/doc_md/other/oms-player-site-maintenance-20261006.md)。本次前端源码回退目标是 `d1f052b93a81-22b4ee54f237`，保留同一 live，仅原子切 current 并重启主 / catalog；备份 helper 继续固定原 d1/22b，不使用旧整套 activator 或旧快照覆盖。

玩家验收从普通刷新[首页](https://oms.zdamexy.work/)开始：看新闻 / 帖子 → 独立下载 / 入门帮助；谱面浏览 → 切下载来源并核实际跳转；个人页 → 最佳 / 最近更新 / 帖子，核本人管理只对本人出现；玩家榜 / 同谱榜 → 单 / 多 / 全 / 空来源及同条件，检查空本页仍可返回。IR 切 mania 时应无原 EX 控件、显示通过；BMS 独立灯与旧 LR2IR ID / 未知条件仍可查看。

客户端从 VS Code 非调试启动按[真实窗口路径](F:/oms/doc_md/other/OMS_IR_UI_REVIEW_20261007.md#真人路径与剩余项)验收。实际字体、间距、窄屏、窗口焦点与整体观感仍待用户签收，不用“没有确定源码项”宣称完全去 AI 味。P/C、固定宿主交分 / 原生读榜、两端同谱与实际原包入库仍明确未完成。
