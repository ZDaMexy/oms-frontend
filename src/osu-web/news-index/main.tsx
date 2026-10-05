// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/news-index/main.tsx at 2c596022a1.
// OMS uses one committed publication list; no ppy/admin/cursor API or fabricated posts.
import * as React from 'react';
import { newsPosts } from '../../oms/news';
import { HeaderV4 } from '../components/header-v4';
import { PostItem } from './post-item';
export function NewsIndexMain() {
  return <><HeaderV4 title='新闻与更新' theme='news' links={[{ url: '/news/', title: '全部近况', active: true }, { url: '/download/', title: '公开客户端' }]} />
    <main id='main' className='osu-page player-page'><div className='news-index player-news-index'>{newsPosts.map(post => <div className='news-index__item' key={post.slug}><PostItem post={post} /></div>)}</div></main></>;
}
