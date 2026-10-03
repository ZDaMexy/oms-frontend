# OMS Website 验证

2026-10-03 独立 IR 发布没有并入原首页的既有未提交源码与 `scripts/verify.mjs`。下列首页方法与既有结果针对本地工作区；公网 IR 的真实 HTTP、容量、恢复及最终页面操作边界见 [生产记录](../other/ir-infrastructure-20261003.md)，不能用首页静态检查代签。

## 可复跑检查

从本仓库运行：

```sh
node scripts/verify.mjs
```

使用 Node.js 内置模块，无需 `npm install`。检查 `index.html` 的本地资源与锚点、CSS 资源、站点与验证脚本语法、加载顺序、当前页面全部三语词条、必需控件及 7+1K 演示谱面的拍位、键道与长度。失败时报告具体文件或契约，返回非零退出码。

这些检查针对受版本管理的页面契约，不能证明真实浏览器的布局和事件行为，也不校验客户端功能事实、判定窗口数值、发布包可用性、演示谱面授权或正式内容是否齐备。当前已知缺口见 [dev-progress](dev-progress.md#风险与待确认)。跨仓库阶段与客户端事实消费者的一致性检查由 [Dev Bridge 工作区验证](../../../../oms-server/dev_bridge_md/doc_md/mainline/README.md) 负责。

语法检查覆盖 `assets/scripts/` 与 `scripts/`，不包含 Git 忽略的本地 `parse-bms.cjs`；修改该本地工具时另运行 `node --check parse-bms.cjs`，并以实际授权输入核对输出。浏览器演示只读取已生成的谱面数据，不加载源 BMS 或解析器。

## 本地 IR 试验页

新 `ir/` 由 Backend 提供同源 API 和静态页，不能以普通 `http.server` 代替其账号 / 榜单验收。按 [Backend 运行与验证](../../../../oms-server/oms-backend/doc_md/mainline/verification.md) 启动后打开 `http://127.0.0.1:8081/ir/`，另执行 `node --check ir/ir.js`；现有首页检查器不覆盖此独立页。

浏览器检查空列表、注册 / 登录 / 退出、本人历史、BMS / mania 条件榜、独立最佳分 / 灯、错误反馈、会话到期与多标签退出、服务中断手动重试，以及 1280×800 / 390×844 布局。先核实际 `innerWidth`，表格可内部横滚，整页不能溢出。合成 fixture 与真实客户端游玩分别记录；不把本地可用写成官网已公开上线。结果见 [IR1 报告](../../../../oms-server/oms-backend/doc_md/other/ir1-local-verification-20261003.md)。

## 浏览器验收

在本仓库执行 `python -m http.server 8080 --bind 127.0.0.1`，打开 `http://127.0.0.1:8080`。用桌面 1280×800 和移动 390×844 视口检查受本次改动影响的项目：

1. 页面无横向溢出；主标题、演奏区、页眉导航、下载入口和判定表可见且未裁切。控制台没有页面脚本错误，本地资源请求成功；外部字体的网络失败单独记录。
2. 中、英、日切换能更新正文及语言按钮，刷新保留所选语言。涉及存储代码时，补查无效存储值回到中文、浏览器禁止存储后仍可切换本次页面语言。
3. 演奏区显示谱面实际 BPM 与时长，音符下落且分数 / COMBO 累计；Hi-Speed 只改变视觉流速。点击暂停后滚出再滚入演奏区、切换浏览器标签回来，仍保持暂停；点击运行后恢复。
4. 开启系统或开发者工具的 `prefers-reduced-motion: reduce` 并刷新：演奏区不自动播放，暂停状态可见，动画控制禁用；语言、导航和判定仍可用。
5. 判定类型 IIDX / LR2 / RAJA / OD 均能切换，难度选项、5 个数值和 4 条可视条同步变化。保留 RAJA 早晚不对称值与 IIDX 空 PR 的 `?`。
6. 两个下载入口分别指向 GitHub Releases 与 QQ 群；路线图和游戏社区的公开状态与 [统一阶段](../../../../oms-server/dev_bridge_md/doc_md/mainline/dev-plan.md) 一致。

验收记录写入 [dev-progress](dev-progress.md)，注明日期、命令、视口、实际检查范围与未验证项；不复制过往通过数字充当本轮证据。
