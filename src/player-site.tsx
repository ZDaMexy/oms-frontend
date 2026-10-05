import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav } from './osu-web/layout/nav';
import { HomeMain } from './osu-web/home/main';
import { BeatmapsMain } from './osu-web/beatmaps/main';
import { BeatmapsetsShowMain } from './osu-web/beatmapsets-show/main';
import { ProfileMain } from './osu-web/profile-page/main';
import { RankingsMain } from './osu-web/rankings/main';
import { NewsIndexMain } from './osu-web/news-index/main';
import { NewsShowMain } from './osu-web/news-show/main';
import './osu-web/css/player-site.less';
class PageBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <main id='main' className='osu-page player-page'><h1>页面无法显示</h1><p role='alert'>页面遇到错误，请重新打开；仍有问题时联系维护者。</p><a href='/help/#contact'>联系与反馈</a></main> : this.props.children; }
}
const nav = document.getElementById('player-nav');
if (nav) ReactDOM.render(<Nav />, nav);
const app = document.getElementById('player-app');
if (app) {
  const page = document.body.dataset.page;
  const content = page === 'home' ? <HomeMain /> : page === 'catalog' ? <BeatmapsMain /> : page === 'chart' ? <BeatmapsetsShowMain /> : page === 'profile' ? <ProfileMain /> : page === 'rankings' ? <RankingsMain /> : page === 'news' ? <NewsIndexMain /> : page === 'news-article' ? <NewsShowMain /> : null;
  ReactDOM.render(<PageBoundary>{content}</PageBoundary>, app);
}
