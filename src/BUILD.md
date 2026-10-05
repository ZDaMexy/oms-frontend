# 构建 OMS 玩家网站

运行页面来自固定 ppy/osu-web 2c596022a1345fbed288978e7fa5304df0359f50 的 React/Blade/BEM 源码适配，详细映射和原文件 SHA256 在 `osu-web/upstream.json`。OMS 的实际数据类型、请求和控制器在 `oms/`，不连接 ppy 的账号或在线服务。许可、依赖声明和本次对应源码提供说明见 `/credits/` 与 `portal/LICENCE.txt` / `portal/THIRD_PARTY_NOTICES.txt`。

Node 22；依赖版本由根目录 package.json/package-lock.json 固定。首次安装或更改锁文件由主执行者协调，node_modules、npm缓存、临时文件必须在非系统盘。当前 checkout 的示例：

```powershell
. F:/oms/UseDevelopmentStorage.ps1
$env:npm_config_cache = 'F:/oms/.dev-cache/npm'
Set-Location F:/zdamexy-workspace/websites/oms-website
npm ci
npm run typecheck
npm run build
npm run verify
```

构建只输出 `portal/player-site.js` 和 `portal/player-site.css`；Webpack 依赖版权注释可能另外生成 `portal/player-site.js.LICENSE.txt`。`npm run build` 的 postbuild 将 CSS 文件末尾规范为一个换行，保证提交与再次构建一致。没有 source map、动态分块、额外图片或生产 Node 服务。Web 内容由静态服务器提供，API 为已有同源 `/api/ir/v1` / `/api/ir/v2`。本机预览需真实配置的隔离 API，不能把来源 fixture 当来源可用证明。

生产和对应源码必须取同一次已提交输入；不要在发布主机在线安装 npm 依赖。源码下载包应包括 package.json、package-lock.json、webpack.config.cjs、tsconfig.json、本目录全部 TS/TSX/Less/JSON/本说明、同发布的运行 HTML/JS/CSS与许可。node_modules、缓存、数据库、账号内容和凭据不进入源码包。

首页、新闻列表与独立文章共同读取 `oms/news.ts`。新增内容只维护这一份真实条目；发行部署还需采用新 slug 的精确公开路由，并同步静态验证清单。当前 `/news/` 使用 `news/index.html`；`/news/2026-10-05-ir-trial/` 与 `/news/2026-06-26-oms-release/` 使用 `news/show.html`。文章无封面或作者字段时省略对应节点，不生成装饰占位。

修改源文件后冻结，再由一个执行者串行类型检查、构建与 focused / 浏览器 / 发布门。React/BEM 没有 inline style 或动态 style 元素，保持 `style-src 'self'`；封面只用采用源的 `<img>`。CSP、普通刷新、来源全范围榜、精确累计值、社区 UUID/归属、账号切换、两空恢复与真人验收是分别记录的门，构建成功不能代签。
