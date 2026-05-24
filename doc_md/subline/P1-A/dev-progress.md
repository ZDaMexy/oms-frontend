# Frontend Subline P1-A Progress

- 已完成第一轮产品官网化重写，包括首页、下载页和未来规划页
- 已将统一导航、共享样式和基础脚本接入页面结构，可本地直接预览
- 已将默认离线、默认关闭游戏内更新、保留在线接点和 BMS 正式 ruleset 等已确认事实写入页面状态区
- 已将页面结构收敛为根级 `index.html`、`download.html`、`hub.html`
- 已将首页重写为英雄区、核心卖点、下载 CTA 与未来功能预告布局
- 已完成第二轮视觉重做：修复 `site.css` 结构性损坏，基于设计令牌重写样式表，新增首页 beatmania IIDX SP 7+1K 演奏区（白/蓝/红 IIDX 配色）/均衡器视觉、无缝 marquee、SVG 站标与 favicon，并加入 reduced-motion 降级与焦点环
- 已用本地静态服务器 + 预览工具的 inspect/eval 验证三页布局、响应式与交互（含此前破损的下载页/未来规划页样式已恢复）
- 已让首页演奏区读取真实 BMS 谱面：离线解析器把 7key 谱转成仅含音符位置的 `chart-stargazer.js`，运行时 rAF 渲染器按真实 BPM 播放（`RATE`）+ 独立 hi-speed（`VISIBLE_BEATS`，定稿约 0.5s 落速）下落、静音、窗口化、离屏暂停、HUD 实时计分、判定线下控制台命中点亮，回退到 CSS 循环
- 待确认：演奏区当前用第三方谱面（Stargazer [SAETHER] / Lime·saaa）的音符数据，正式发布前需替换为自制/授权谱面或仅留占位
- 当前仍有主标题、副标题、展示媒体、下载渠道、外链和 FAQ 等内容待逐项确认
- 当前支线成果已经回写主线文档

---

## 联动更新

更新本文件时，需同步检查以保持一致：

- **同目录五大文档**：`README.md` / `constraints.md` / `dev-plan.md` / `dev-progress.md` / `changelog.md` 必须保持一致
- **回写主线**：若结论影响主线计划 / 状态 / 约束 / 验证 → 提升回写 `mainline/` 对应文档
- **桥文档 / 客户端快照**：若涉及前后端通信或客户端对接事实 → 同步 `dev_bridge_md/` 与 `oms_client_bridge_md/`