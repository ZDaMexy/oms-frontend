// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// JSX port of resources/views/home/user.blade.php (2c596022a1); maintained OMS news and real community replace ppy publications/widgets.
import * as React from 'react';
import { HeaderV4 } from '../components/header-v4';
import { profileUrl, useAccount } from '../../oms/api';
import { HomeNews } from './news-post-preview';
function AccountEntry() {
  const { user } = useAccount();
  return <section className='player-home-account'><h2>{user ? user.username : 'OMS 账号'}</h2><p>{user ? '个人成绩与最近更新' : '登录后查看自己的成绩，参与社区讨论。'}</p><a className='button button-primary' href={user ? profileUrl(user.id) : '/account/'}>{user ? '我的个人页' : '登录 / 注册'}</a></section>;
}
export function HomeMain() {
  return <><HeaderV4 title='OMS' theme='home' links={[{ url: '/', title: '主页', active: true }, { url: '/news/', title: '新闻与更新' }, { url: '/community/', title: '玩家社区' }, { url: '/beatmapsets/', title: '谱面' }]} />
    <main id='main' className='osu-page player-page'><div className='user-home'>
      <div className='user-home__left-section'><HomeNews /><div className='user-home__news'><div className='player-home-section-title'><h2 id='feed-title' className='user-home__left-title'>玩家社区</h2><span id='feed-count' className='count'>正在读取</span><a className='button button-quiet' href='/community/new/'>发帖</a></div>
        <div className='feed-controls'><div className='categories' aria-label='帖子分类'>{[['', '全部'], ['discussion', '讨论'], ['help', '求助'], ['showcase', '分享'], ['development', '开发记录']].map(([category, label]) => <button key={category} type='button' className='category-button' data-category={category} aria-pressed={category === ''}>{label}</button>)}</div><form id='search-form' className='search' role='search'><label htmlFor='post-search'>搜索帖子</label><input id='post-search' name='q' type='search' maxLength={80} placeholder='搜索帖子标题与正文' autoComplete='off' /><button className='button' type='submit'>搜索</button></form></div>
        <p id='feed-message' className='feed-message' role='status' aria-live='polite'>正在读取帖子…</p><ul id='feed-list' className='feed-list' />
        <div id='feed-empty' className='empty' hidden><h3>社区暂无帖子</h3><p>可以发布讨论、求助或分享。</p><a className='button button-quiet' href='/community/new/'>发布帖子</a></div>
        <div className='pagination'><button id='feed-prev' className='button button-quiet' type='button' disabled>上一页</button><span id='feed-page'>待读取</span><button id='feed-next' className='button button-quiet' type='button' disabled>下一页</button></div><div id='feed-retry-wrap' className='empty' hidden><button id='feed-retry' className='button' type='button'>重新读取</button></div>
      </div></div>
      <aside className='user-home__right-sidebar'><AccountEntry /><section className='player-home-release'><a className='home-download' href='/download/'>下载 OMS <span aria-hidden='true'>↓</span></a><p>Windows · 20260626</p><p>离线游玩无需账号。此公开版本尚不支持 IR。</p><a href='/help/#startup'>首次启动</a></section><section className='player-home-facts'><h2>谱面与成绩</h2><a href='/beatmapsets/?ruleset=bms'>BMS 谱面</a><a href='/beatmapsets/?ruleset=mania'>mania 谱面</a><a href='/ir/'>谱面排行榜</a><a href='/rankings/'>玩家榜</a><a href='/help/#library'>添加本地谱库</a></section></aside>
    </div></main></>;
}
