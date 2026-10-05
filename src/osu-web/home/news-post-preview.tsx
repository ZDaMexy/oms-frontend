// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// JSX port of resources/views/home/_user_news_post_preview.blade.php, pin 2c596022a1.
// OMS has maintained text publications and date-only metadata; absent images are omitted.
import * as React from 'react';
import { NewsPost, newsPosts, newsUrl } from '../../oms/news';
export function NewsPostPreview({ post }: { post: NewsPost }) {
  return <article className='news-post-preview'>
    <div className='news-post-preview__body'><time className='news-post-preview__post-date' dateTime={post.date}>
      <span className='news-post-preview__date'>{post.date.slice(8)}</span><span className='news-post-preview__month-year'>{post.date.slice(0, 7)}</span>
    </time><div className='news-post-preview__post-right'><a className='news-post-preview__post-title' href={newsUrl(post)}>{post.title}</a><p className='player-news-state'>{post.state}</p><div className='news-post-preview__post-content'><p>{post.summary}</p></div></div></div>
  </article>;
}
export function HomeNews() {
  return <section className='user-home__news player-home-news' aria-labelledby='home-news-title'><div className='player-home-section-title'><h2 id='home-news-title' className='user-home__left-title'>新闻与更新</h2><a href='/news/'>全部近况 ›</a></div>{newsPosts.map(post => <NewsPostPreview key={post.slug} post={post} />)}</section>;
}
