// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/profile-page/main.tsx/top-scores.tsx/historical.tsx (2c596022a1).
// OMS sections preserve mode, stats, top scores, recent state, community and owner management.
import * as React from 'react';
import { CommunityPost, Page, Performance, PublicBest, Ruleset, User } from '../../oms/types';
import { date, useAccount, useApi, useQuery } from '../../oms/api';
import { PlaymodeTabs, Sources, useSources } from '../../oms/scopes';
import { HeaderV4 } from '../components/header-v4';
import { Status } from '../components/status';
import { Pagination } from '../components/pagination';
import { DetailStats } from './detail-stats';
import { PlayDetail } from './play-detail';
import { conditionOptionLabel } from '../components/condition-details';

export function ProfileMain() {
  const { user, epoch } = useAccount();
  const { query, update } = useQuery();
  const id = query.get('id') || (user ? String(user.id) : '');
  const ruleset = (query.get('ruleset') || 'bms') as Ruleset;
  const keymode = query.get('keymode') || (ruleset === 'bms' ? 'bms_7k' : 'mania_4k');
  const registry = useSources(epoch);
  const available = registry.data?.sources.filter(s => s.available && s.rulesets.includes(ruleset)).map(s => s.code) || [];
  const selected = query.has('sources') ? query.get('sources')!.split(',').filter(Boolean) : available;
  const params = new URLSearchParams({ ruleset, keymode });
  if (query.has('sources')) params.set('sources', query.get('sources')!);
  if (query.get('condition')) params.set('condition', query.get('condition')!);
  const profile = useApi<{ user: User }>(id ? '/users/' + encodeURIComponent(id) + '/profile' : null, epoch);
  const performance = useApi<Performance>(profile.data ? `/users/${id}/performance?${params}` : null, epoch);
  const [section, setSection] = React.useState<'best' | 'recent' | 'community'>('best');
  const page = Number(query.get('page') || '1');
  const records = useApi<Page<PublicBest>>(profile.data && section !== 'community' ? `/users/${id}/public-${section === 'best' ? 'bests' : 'recent'}?${params}&page=${page}&limit=20` : null, epoch);
  const posts = useApi<Page<CommunityPost>>(profile.data && section === 'community' ? `/community/posts?author_id=${id}&page=${page}&limit=20` : null, epoch);
  React.useEffect(() => { document.title = profile.data ? profile.data.user.username + ' · OMS' : '个人页 · OMS'; }, [profile.data]);
  const own = !!profile.data && user?.id === profile.data.user.id;
  const change = (v: Record<string, string | null>) => update({ ...v, page: '1' });
  return <><HeaderV4 title={profile.data?.user.username || '个人页'} theme='users' links={[{ url: '/users/' + (id ? '?id=' + id : ''), title: '个人页', active: true }, { url: '/rankings/', title: '玩家榜' }, { url: '/community/', title: '社区' }]} />
    <main id='main' className='osu-page player-page'>
      {!id && <p className='player-status'>从榜单或社区玩家名进入个人页，或<a href={'/account/?next=' + encodeURIComponent('/users/')}>登录后查看自己</a>。</p>}
      <Status state={profile} />
      {profile.error && <a className='button' href={'/account/?next=' + encodeURIComponent(location.pathname + location.search)}>登录后返回此个人页</a>}
      {profile.data && <><div className='profile-info'><div className='profile-info__details'><div className='profile-info__info'><h2 className='profile-info__name'>{profile.data.user.username}</h2><span className='player-identity'>OMS #{profile.data.user.id}</span></div><div className='player-profile-actions'>{own && <a className='button' href='/account/'>管理账号</a>}<a className='button button-quiet' href='/beatmapsets/'>查找谱面</a></div></div></div>
        <PlaymodeTabs ruleset={ruleset} keymode={keymode} onChange={change} />
        <Status state={registry} />{registry.data && <Sources registry={registry.data} ruleset={ruleset} selected={selected} onChange={v => change({ sources: v.join(','), condition: null })} />}
        <Status state={performance} />{performance.data && <DetailStats data={performance.data} />}
        <div className='player-profile-columns'><div><div className='page-tabs'>{([['best', '公开最佳'], ['recent', '最近公开最佳 / 状态更新'], ['community', '社区内容']] as const).map(([value, label]) => <button key={value} className={'page-tabs__tab' + (section === value ? ' page-tabs__tab--active' : '')} aria-pressed={section === value} onClick={() => { setSection(value); update({ page: '1' }); }}>{label}</button>)}</div>
          {section !== 'community' && <section className='page-extra' aria-label={section === 'best' ? '公开最佳' : '最近公开最佳 / 状态更新'}>
            {performance.data && <label className='player-condition-label'>游玩条件<select value={query.get('condition') || ''} onChange={e => change({ condition: e.target.value || null })}><option value=''>所选来源的全部条件</option>{performance.data.lanes.map(l => <option key={l.source + l.condition_scope.id} value={l.condition_scope.id}>{conditionOptionLabel(l.condition_scope)}</option>)}</select></label>}
            {section === 'recent' && <p className='player-explanation'>最近接收或更新的公开最佳，外部播放器记录最佳状态。{own ? '完整本人游玩记录可从“本人管理”查看。' : '完整本人游玩记录仅本人登录后可查看。'}</p>}
            <Status state={records} />{records.data && <><div className='play-detail-list'>{records.data.items.map(item => <PlayDetail key={item.score.record_id + item.condition_scope.id} item={item} recent={section === 'recent'} />)}</div>{records.data.items.length === 0 && <p className='player-empty'>所选范围没有公开最佳。</p>}<Pagination {...records.data} onPage={v => update({ page: String(v) })} /></>}
          </section>}
          {section === 'community' && <section className='page-extra'><Status state={posts} />{posts.data && <><ul className='player-community-list'>{posts.data.items.map(post => <li key={post.id}><a href={`/community/posts/${post.id}/`}>{post.title}</a><p>{post.excerpt}</p><small>{date(post.updated_at)} · {post.reply_count} 回复</small></li>)}</ul>{posts.data.items.length === 0 && <p className='player-empty'>尚无可公开查看的帖子。</p>}<Pagination {...posts.data} onPage={v => update({ page: String(v) })} /></>}</section>}
        </div>{own && <aside className='player-owner-links'><h3>本人管理</h3><a href='/ir/#history'>完整本人记录</a><a href='/ir/#keys'>播放器专用密钥</a><a href='/community/new/'>发布帖子</a><a href='/account/'>账号与退出登录</a><p>浏览器与游戏分别登录；私有历史和密钥仅本人可见。</p></aside>}</div>
      </>}
    </main></>;
}
