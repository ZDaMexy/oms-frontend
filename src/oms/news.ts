// OMS maintained publication data. One source for home, list and article pages.
// Dates are publication days in Asia/Shanghai, not inferred play or build times.
export interface NewsLink { label: string; href: string }
export interface NewsParagraph { heading?: string; text: string; links?: NewsLink[] }
export interface NewsPost { slug: string; date: string; title: string; state: string; summary: string; body: NewsParagraph[] }
export const newsPosts: NewsPost[] = [
  {
    slug: '2026-10-05-ir-trial', date: '2026-10-05', title: '按需 IR 试运行', state: '试运行',
    summary: '开发版可主动连接、保存后交分，并查看本人记录与来源榜。公开发行版尚未包含 IR；真实游玩与目标播放器验收仍在进行。',
    body: [
      { heading: '在开发版中使用', text: '开发版可在 IR 设置中主动填写 https://oms.zdamexy.work，登录后使用交分和读榜。OMS 先保存本地成绩，再提交保存后的新局；IR 默认关闭，离线游玩无需账号。', links: [{ label: '启用与交分说明', href: '/help/#ir' }, { label: '打开 IR', href: '/ir/' }] },
      { text: '当前公开发行仍为 oms_20260626，尚未包含 IR 接入。网页能查看本人已交记录和按谱面选择来源的榜单；不要把开发版能力当作公开安装包已经具有的功能。', links: [{ label: '客户端下载', href: '/download/' }] },
      { heading: '来源与历史身份', text: 'LR2IR 历史保留原账号 ID 和单谱历史最佳摘要，同名不会合并到新的 OMS 账号。跨来源混榜供参考；选择已公布的同条件，可以收窄比较范围。未知条件和原通关灯保持原有含义。' },
      { heading: '验收还在继续', text: '真实游玩、离线补交和指定播放器交分、读榜的一致性仍待玩家验收。本次试运行不表示先导或完整范围已完成。遇到重复交分、归属错误或榜单差异，请保留操作步骤并反馈。', links: [{ label: '提交问题', href: 'https://github.com/ZDaMexy/oms/issues' }] },
    ],
  },
  {
    slug: '2026-06-26-oms-release', date: '2026-06-26', title: 'OMS 20260626 发布', state: '已发布',
    summary: '这一版更新 BGA 演出、选歌展示层级和谱库使用。公开发行包与后续开发中的 IR 能力分别说明。',
    body: [
      { text: 'OMS 20260626 的公开发行更新了 BGA 演出、选歌展示层级和谱库使用。适用系统为 Windows；具体变化和下载文件以该版本的原发行说明为准。', links: [{ label: '原发行说明与下载', href: 'https://github.com/ZDaMexy/oms/releases/tag/oms_20260626' }] },
      { text: '这是当前提供的公开发行版。后续开发的按需 IR 接入尚未包含在这一安装包中；下载页会说明公开包与开发版的差别。', links: [{ label: '下载与首次启动', href: '/download/' }, { label: '入门帮助', href: '/help/' }] },
    ],
  },
];
export const newsUrl = (post: NewsPost) => '/news/' + post.slug + '/';
