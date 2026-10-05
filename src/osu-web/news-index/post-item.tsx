// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/news-index/post-item.tsx at 2c596022a1.
// Replace ppy routes/moment/raw HTML with maintained OMS text; omit absent cover and author.
import * as React from 'react';
import { NewsPost, newsUrl } from '../../oms/news';
export function PostItem({ post }: { post: NewsPost }) {
  return <a className='news-card news-card--index news-card--hover player-news-card' href={newsUrl(post)}>
    <div className='news-card__main'><div className='player-news-meta'><time className='news-card__time' dateTime={post.date}>{post.date}</time><span>{post.state}</span></div>
      <div className='news-card__row news-card__row--title'>{post.title}</div><p className='news-card__row news-card__row--preview'>{post.summary}</p>
    </div>
  </a>;
}
