# OMS Frontend

OMS Frontend 是 OMS Web 的公开前端仓库，用于承载 OMS 项目的官网与未来 Web 入口。当前阶段仓库只实现宣传介绍展示，但信息架构、页面命名和文档组织从第一天起就按完整 Web 产品预留，不把项目限定成一次性的静态落地页。

## 项目简介

- 面向 OMS（osu!BMS）生态的官网前端仓库
- 现阶段负责项目介绍、特性说明、下载与进展展示
- 后续将逐步接入账号体系、玩家主页、成绩展示、排行榜、谱面下载入口和私服相关页面

## 产品定位

### 当前阶段：Phase 1 宣传展示

- 纯静态 HTML、CSS、JavaScript
- 优先完成宣传展示与信息组织
- 为未来的动态页面、接口接入和账户体系保留页面入口与扩展位

### 未来阶段：完整 OMS Web

- 账号注册、登录、找回密码与基础账户设置
- 玩家个人主页、游玩成绩、EX-SCORE 展示
- 排行榜、难度表相关入口与榜单页
- 谱面下载入口与私服相关服务页面
- 与 OMS 客户端和后端服务联动的动态交互

## 技术栈

- 当前阶段：HTML5、CSS3、Vanilla JavaScript
- 部署环境：阿里云 ECS（Ubuntu 24.04）+ Nginx
- 目标服务器：39.105.55.78
- 后续联动：OMS Web 后端服务（FastAPI + SQLite + Docker）

## 本地预览

当前仓库为纯静态站点，可使用任意静态文件服务器预览。

### 方式一：Python

```bash
cd oms-frontend
python -m http.server 8080
```

### 方式二：Node.js

```bash
cd oms-frontend
npx serve .
```

启动后在浏览器访问 `http://localhost:8080`，或使用工具输出的本地地址。

## 部署方式

推荐将仓库中的静态文件直接同步到阿里云 ECS，由 Nginx 托管。

1. 将站点文件上传到服务器目录，例如 `/var/www/oms-frontend`
2. 在 Nginx 的 `server` 块中将 `root` 指向该目录
3. 按需配置缓存、压缩、错误页与静态资源策略
4. 执行 `sudo nginx -t` 检查配置
5. 执行 `sudo systemctl reload nginx` 重新加载 Nginx

当前阶段没有强制构建步骤；若后续引入构建流程，本 README 会同步更新。

## 贡献指南

- 外部协作者请优先阅读本 README，了解仓库职责与当前阶段目标
- `doc_md/` 目录仅用于内部规划、vibe coding 上下文和任务同步，不视为对外产品文档
- 在 OMS Web 联合工作区中，前后端通信、接口约定、联调记录与验收结论还需同步更新根目录独立仓库 `dev_bridge_md/`
- 任何开发、调研、修复或验收只要改变了计划、状态、约束或验证结论，必须同步更新对应的 `doc_md/` 文档
- `doc_md/mainline/constraints.md`、`doc_md/mainline/dev-plan.md`、`doc_md/mainline/dev-progress.md`、`doc_md/mainline/changelog.md` 必须保持一致
- 提交变更时请明确说明该变更属于当前宣传展示阶段，还是在为后续账号、成绩、排行榜、下载入口等能力预留结构
# oms-frontend
