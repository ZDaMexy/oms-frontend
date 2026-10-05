# 官网八页重设计与实际验收（2026-10-05）

## 当前结论

2026-10-05 12:02:06（UTC+8）八页已实际上线，current 为 ecca50eab82c-d34fab9b9611 / schema3，状态 **已部署待验收**。根执行者完成真实 API、本地八页桌面 / 390px、公开资源 / 缓存及实际公网页面检查。视觉认可、首次生产社区使用、OMS / ED 7K 的先导 P 与完整播放器矩阵 C 仍待真人；以下软件证据不能代签这些门。旧 IR 主机 / 两次空目录恢复证据保留原日期和来源。

## 来源与设计维护

用户已确认多页产品官网及精致科技风格，并指定 OpenDesign / Local Codex。首选模型被当前账号拒绝，零产物；备用首次委托冲突也未产出新运行。最终 gpt-6-astra / medium 自然成功，实际设置由该次启动事件、准确会话的 turn_context 和项目配置独立证明，没有修改全局默认或扫描其他会话。完整设计一次取得 41 文件，没有截断或跳过。

根只取现有 14 项运行白名单：八页、portal 四资源、IR 独立样式与脚本。设计说明、工具元数据、原稿参考和截图留在 F 盘证据，不进入运行包；全部 data-od-id 已移除。portal/site.js 与图标逐字节保留；社区 / IR 脚本只改可见文本，IR 本人定位保留原 focus({preventScroll:true}) 与 scrollIntoView()。实际请求、UUID、原账号归属、权限、revision、来源与分页计算未改。

公共颜色、字体、栅格、控件和焦点只在 portal/style.css 定义，IR 样式仅保留榜单布局。页面采用真实帖子流、直接功能标题与克制边线，保留零帖空状态；没有假新闻、成绩或活跃人数，也没有外部字体、图片、框架或新依赖。旧演奏与历史口径只作归档。帮助补上已经发布的 zlib 许可入口，五插件、两许可与版本文件共八项保持原路径。

手机帮助目录在正文前，八项按两列排列；IR 的 DOM 与手机视觉顺序均为谱面目录、成绩区、账号。桌面仍为左侧目录 / 账号、右侧成绩。维护者调整共享字体或控件时修改 portal/style.css，勿在 ir.css 再定义根 tokens、body 或全局表单规则。

## 实际本地浏览器

根在 http://127.0.0.1:18086 使用实际 Backend 与 Website 源码，live 数据库仅含两个合成账号、本地测试帖 / 回复和合成 OMS / ED 状态；全量公开 LR2IR 投影只读。没有生产账号 / 发帖 / 成绩写入，没有母库或私人原始行进入 Git。

| 玩家路径 | 实际观察 |
| --- | --- |
| 进入与查找 | 真零帖首页；实际写入后首页 / 社区出现长标题，分类空态、关键词及作者筛选使用 API，固定地址可重开 |
| 发帖与管理 | 登录后发帖；脚本字样保持纯文本、安全 HTTPS 链接可见；另一账号可回复但无帖子编辑入口；本人帖子 / 回复修改保存 |
| 删除语义 | 本地删回复保留楼层；作者删帖保留另一账号回复、固定地址占位并关闭新增回复；列表回到真实零帖 |
| 账号与本人 | 社区和 IR 共用登录；原账号只有两局 OMS 本人历史，ED 状态未充作新局；退出清除本人行 / 历史、密钥元信息和秘密显示，换账号无旧密钥 |
| 混榜与条件 | 原 MD5 查询；全选 29,204 身份，首批同分共享名次；OMS 单选 2 身份、175 EX，OMS + ED 最佳改为 180 EX且独立灯保留来源；空选 0 身份；同条件需主动选择，外部未知条件不混入 |
| 分页与详情 | 实际第二页、1461 尾页及普通重载深链；本人在全榜第 28901 名仍有提示；未知客户端 / 旧 ID / 原灯 / 无逐局时间如实展示，历史详情保持字段未知 |
| 八页布局 | 桌面 1280×900、手机 390×844；门户与 IR 正文字体一致。最终手机根 clientWidth / scrollWidth 均 375；IR 表格自身 342 / 900，键盘可横移，整页不被表格撑宽 |

本次没有创建 / 撤销新浏览器密钥、注册新密码、注入人为迟到响应或重跑重负载 / 恢复门。原密钥当次显示 / 撤销、权限 / 草稿丢响应与原运行恢复证据保留各自日期，未借本轮改版刷新。日常 OMS 仍由用户 VS Code 非调试启动验收，不生成 Windows 发行物。

正常路径检查的 console error 样本为 0；另主动访问本地不存在帖子，API 404 与页面“找不到这篇内容”是预期错误场景，不能把它算成正常页面失败。

## 首次失败与修复

首次手机 IR 根 scrollWidth 达 834，body 本身为 375；表格内绝对定位的屏幕阅读文本跨出滚动区。只给 table-wrap 建立定位上下文后，根 / body 均 375，表格仍自身横滚。首次五位名次分行，已将首列改为 96px / 名次 18px，29193 的文本矩形只有一行。初次截图与记录保留，最终截图另存。

首次第二页记录采样处在“待读取”，不是成功页；后续显式等待后记录 2 / 1461，尾页和重载也分别确认。首张主机自然宽截图为 667px，不冒充桌面；桌面另设 1280×900。生成方只有静态无 API 首页图，根实际图与之分开。

缓存维护检查原来只识别绝对 /portal/ 引用，新稿使用相对引用，已按页面真实 URL 解析绝对和相对地址，仍逐字节比较本地源码。部署后该检查和实际浏览器普通刷新分别通过；不能跳过尚未发布候选的字节不符。

首次公开检查误把未指定条件的 comparable 请求期望为 200，实际按合同返回 422 / condition_required；另一检查猜错社区路径，实际路由为 /api/ir/v1/community/posts。纠正检查后通过，未改服务迎合错误探针。上线后进程检查首次误要求 argv 含解析后的 release，实际 systemd 使用 current 链接；已通过 /proc/PID/cwd、工作目录及解释器 / 投影 / 网页路径解析证明新 release 正在运行，原错误单独留证。

Windows 直接输送多行 SSH heredoc 的首个只读探针因 CRLF 分隔失败，没有生产变更；后续将审查后的 UTF-8 / LF 脚本放 F 盘，再 scp 到本轮服务器目录执行。维护不把 PowerShell 字符串插值或字节收据当作实际来源证明。

## 原始证据

全部证据在 F:/oms/artifacts/oms-website-redesign-20261005/。核心文件为 open-design-full-artifact-tool-result.json、open-design-actual-runtime-config.json、open-design-fallback-terminal.json、source-integration.json、source-final-review.json 与 actual-browser-local-report.json；actual-*.png 为根实际 API 画面，open-design-generated-* 为生成方原范围，不能混签。原十六项 Website 未提交 / 删除文件按开工指纹逐一保全。

静态检查 node scripts/verify.mjs：8 页 / 207 引用 / 3 脚本 / 2 样式通过，完整导航、标签、资源、CSP 与脚本语法有效。工作区文档导航与 git diff --check 通过，源码提交 d34fab9 已推送；后续文档提交不替换运行源码身份。

发布原始证据为 release-export-report.json、release-manifest.json、server-before-deployment.json、server-release-budget.json、server-prepare.log、server-activate.log 和 server-after-deployment.json。公开实际结果为 public-http-report.json、public-cache-report.json 和 actual-browser-public-report.json；检查纠正前的 public-http-attempt1/2.json、server-after-deployment-attempt1.json 另存。实际公网图为 public-home-desktop.png、public-home-mobile.png、public-ir-mobile.png，不把设计生成图当上线截图。

收尾 closeout-evidence-report.json 再核原十六项工作与 14 运行文件，均未变化；本地合成 live 经一致 backup 保存为证据目录中的 local-preview-evidence.sqlite3，schema3 / quick_check=ok，不只留临时目录。仅停止确认属于本轮的预览 PID，移除已核对无用户改动的 F 盘临时运行源码 worktree；完整设计、截图、发布包、合成证据库与原公开投影保留，浏览器视口恢复。清理记录取 cleanup-report.json，没有清其他任务或全局缓存。

## 上线与真人路径

本次严格发布绑定如下；它与各仓后续文档 HEAD 分开：

| 项目 | 实际发布来源 |
| --- | --- |
| Website | d34fab9b9611215cc6bf8c19dcd0238bbb2d4f3a |
| Backend | ecca50eab82c352b71f2e4590322b9a211546cb8 |
| OMS / 插件来源 | b7d0f74d77425bc47079e55f854ff93fd3c0c9a5；插件各自固定来源保持原 manifest |
| 发布包 | oms-ir-ecca50eab82c-d34fab9b9611.tar.gz；637,710 字节；SHA256 059c9bb07c147d21e126305bbf21c59ffdfc690622d15a8358aa3b99117c15e0 |
| current | /opt/oms-ir/releases/ecca50eab82c-d34fab9b9611；55 个 manifest 文件全部核对 |
| 上线前快照 | /var/backups/oms-ir/before-release-20261005T040206Z.db；schema3 / quick_check=ok / 184,320 字节 / 0600 |

只读核对当时实际 current 后，用其准确 Backend 编译证据重新验证 33 运行文件与 8 生成资产，与旧生产逐字节相同，再和已提交 Website 组成新包。prepare-release / activate-release 原严格门均通过；激活先串行做一致备份，再切换并检查 schema3 健康。Nginx 配置字节不变，无配置 reload。服务、投影和默认离线边界未改，没有生产合成账号 / 帖子 / 成绩写入。

服务器 12:24:47（UTC+8）复核服务与备份 timer active，NRestarts=0；PID 的实际工作目录绑定新 release。全量公开投影仍为原版本 / 1,600,610,304 字节 / 0444，不重导母库。可用空间 4,737,937,408 字节，原保守恢复预留 4,264,776,296 字节后余额 473,161,112 字节；没有购买或扩盘，不能据此签未来增长。旧 schema3 主机 / 两次新空恢复沿 [Backend 原发布门](../../../../oms-server/oms-backend/doc_md/other/multisource-host-verification-20261004.md#最终-r10-与实际发布)，未借本轮刷新原证据日期。

公开 22 文件各 GET / HEAD，共 44 请求，字节 / SHA / CSP / nosniff 与 manifest 一致。目录实际 334,119 项（334,117 历史谱面及 2 个原 live 谱面）；实谱全来源 29,202 身份，LR2 单选及 OMS+LR2 均 16,898，空选 0，第二页及 1461 尾页成功。同条件没有主动指定条件时返回 422，原 v1 两谱、社区 0 帖、匿名本人 401、未知静态 404 与个人站原指纹正常。

缓存维护门六门户页与四实际资源共 22 请求 / 62 检查通过，含 200 / 304、旧日期 / 不匹配 ETag 回新版。实际公网普通刷新已见新首页；从首页点击下载再返回首页成功。手机首页与 IR 全来源深链分别补核，后者根 / body 375 / 375、表格 342 / 900，20 行、页码 1 / 1461，未知条件 / 原身份 / 缺时间均正确。首次组合浏览器调用超时保留，后续同页真实观察另存；不把控制调用速度或最初超时当网站页面错误。临时视口已恢复。

玩家上线后普通刷新首页，进入下载、帮助、社区和 IR，检查各页的视觉一致与阅读操作；本人发帖 / 回复和管理用真实账号验收。OMS 当前工作区主动连接后按同谱 / 同来源与网页核对，ED 7K 先导后再逐项固定矩阵，方法取 [真实播放器验收](../../../../oms-server/oms-backend/adapters/ACCEPTANCE.md)。没有真人结论时仍记录“已部署待验收”。

维护、每日备份、每周受保护外取和兼容 schema3 回退沿 [服务维护](../../../../oms-server/oms-backend/deploy/README.md#仅官网改版的发布)。上一兼容 release ecca50eab82c-09d7ffdf4bbb 与其 ready 标记保留；需要退回官网时按同一激活门切回兼容源码、保留当前数据库 / WAL，并复核健康和页面。不能用旧快照覆盖上线后的玩家数据，也不能回到旧 schema2 服务。
