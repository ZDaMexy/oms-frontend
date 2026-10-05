// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/news-show/main.tsx at 2c596022a1.
// Maintained OMS paragraphs/links replace raw HTML; no fabricated author, cover or comments.
import * as React from 'react';
import { newsPosts, newsUrl } from '../../oms/news';
import { HeaderV4 } from '../components/header-v4';
export function NewsShowMain() {
  const slug = location.pathname.split('/').filter(Boolean)[1];
  const post = newsPosts.find(p => p.slug === slug);
  React.useEffect(() => { document.title = post ? post.title + ' · OMS' : '近况不存在 · OMS'; }, [post]);
  return <><HeaderV4 title='新闻与更新' theme='news' links={[{ url: '/news/', title: '全部近况' }, ...(post ? [{ url: newsUrl(post), title: post.title, active: true }] : [])]} />
    <main id='main' className='osu-page player-page'>{post ? <article className='news-show player-news-article'><div className='news-show__info'><h1 className='news-show__title'>{post.title}</h1><p className='player-news-meta'><time dateTime={post.date}>{post.date}</time><span>{post.state}</span></p></div><div className='player-news-body'>{post.body.map((p, i) => <section key={i}>{p.heading && <h2>{p.heading}</h2>}<p>{p.text}</p>{p.links && <div className='player-news-links'>{p.links.map(link => <a key={link.href} href={link.href}>{link.label} ›</a>)}</div>}</section>)}</div><nav className='news-show__nav' aria-label='其他近况'><a href='/news/'>全部近况 ›</a>{newsPosts.filter(p => p.slug !== post.slug).map(p => <a key={p.slug} href={newsUrl(p)}>{p.title} ›</a>)}</nav></article> : <p className='player-empty'>这篇近况不存在。<a href='/news/'>查看已发布近况 ›</a></p>}</main></>;
}
