// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/beatmaps/main.tsx, search-content.tsx and search-panel.tsx at 2c596022a1.
import * as React from 'react';
import { CatalogSearch } from '../../oms/catalog';
import { Ruleset } from '../../oms/types';
import { keyLabel, keymodes, sourceNames, useApi, useQuery } from '../../oms/api';
import { HeaderV4 } from '../components/header-v4';
import { Status } from '../components/status';
import { BeatmapsetPanel } from '../beatmapset-panel';
import { SearchFilter } from './search-filter';
export function BeatmapsMain() {
  const { query, update } = useQuery();
  const ruleset = (query.get('ruleset') || 'bms') as Ruleset;
  const source = query.get('source') || (ruleset === 'bms' ? 'ginger' : 'sayobot');
  const q = query.get('q') || '';
  const [draft, setDraft] = React.useState(q);
  const [inputError, setInputError] = React.useState<string | null>(null);
  React.useEffect(() => setDraft(q), [q]);
  const page = query.get('page') || '1'; const cursor = query.get('cursor') || '0'; const keys = query.get('keys') || '';
  const params = new URLSearchParams({ ruleset, source, q, page, cursor }); if (keys) params.set('keys', keys);
  const results = useApi<CatalogSearch>('/catalog/search?' + params);
  const change = (values: Record<string, string | null>) => update({ ...values, page: '1', cursor: '0' });
  const search = (event: React.FormEvent) => {
    event.preventDefault();
    setInputError(null);
    if (ruleset === 'bms' && /^[0-9a-f]{32}$/i.test(draft.trim())) { location.assign('/beatmaps/?ruleset=bms&md5=' + draft.trim().toLowerCase()); return; }
    if (ruleset === 'mania' && /^\d+$/.test(draft.trim())) {
      const sid = BigInt(draft.trim());
      if (sid < 1n || sid > 2147483647n) { setInputError('原集合编号应为 1～2147483647 的整数。'); return; }
      location.assign('/beatmaps/?' + new URLSearchParams({ ruleset: 'mania', sid: String(sid), ...(keys ? { keys } : {}) }));
      return;
    }
    change({ q: draft.trim() });
  };
  return <><HeaderV4 title='谱面' theme='beatmapsets' links={[{ url: '/beatmapsets/', title: '浏览与获取', active: true }, { url: '/ir/', title: '已收录成绩' }]} />
    <main id='main' className='osu-page player-page'><div className='beatmapsets-search beatmapsets-search--expanded'><form className='player-catalog-search' onSubmit={search} role='search'><label htmlFor='chart-search'>曲名、作者、BMS 原谱 MD5 或 mania 集合编号</label><div className='beatmapsets-search__input-container'><input id='chart-search' className='beatmapsets-search__input' type='search' value={draft} maxLength={200} onChange={e => { setDraft(e.target.value); setInputError(null); }} placeholder={ruleset === 'bms' ? '搜索曲名，或用 MD5 直达原谱' : '搜索曲名或原集合编号'} /><button className='button button-primary' type='submit'>搜索</button></div>{inputError && <p className='is-error' role='alert'>{inputError}</p>}</form>
      <SearchFilter title='玩法' options={[{ id: 'bms', name: 'BMS' }, { id: 'mania', name: 'mania' }]} selected={[ruleset]} onChange={v => change({ ruleset: v[0], source: v[0] === 'bms' ? 'ginger' : 'sayobot', keys: null })} />
      <SearchFilter title='获取来源' options={(ruleset === 'bms' ? ['ginger', '616'] : ['sayobot']).map(id => ({ id, name: sourceNames[id] }))} selected={[source]} onChange={v => change({ source: v[0] })} />
      <SearchFilter title='原谱键型' options={[{ id: '', name: '全部' }, ...keymodes(ruleset).map(id => ({ id: ruleset === 'bms' ? id : id.match(/\d+/)![0], name: keyLabel(id) }))]} selected={[keys]} onChange={v => change({ keys: v[0] || null })} />
    </div><div className='beatmapsets'><div className='beatmapsets__toolbar'><p>选择获取来源浏览谱包，或输入 BMS 原谱 MD5 直接查找。</p><a href='/help/#library'>添加谱库说明 ›</a></div><Status state={results} loading='正在查找谱面…' />
      {results.data && <><div className='beatmapsets__content'><div className='beatmapsets__items'>{results.data.items.map(item => <div className='beatmapsets__item' key={item.id}><BeatmapsetPanel item={item} /></div>)}</div>{results.data.items.length === 0 && <p className='player-empty'>{results.data.has_more ? '这一页没有匹配原谱，来源仍有下一页。' : '来源中没有找到匹配原谱。'}</p>}</div><div className='beatmapsets__paginator'><span>{results.data.total === null ? '来源未提供总数量' : `${results.data.total} ${results.data.total_basis === 'source-chart-rows' ? '条来源原谱（同包合并显示）' : '个来源包'}`}</span><button className='button' disabled={!results.data.has_more} onClick={() => update({ page: String(results.data!.page + 1), cursor: String(results.data!.next_cursor ?? 0) })}>下一页</button><button className='button button-quiet' disabled={page === '1' && cursor === '0'} onClick={() => update({ page: '1', cursor: '0' })}>回到第一页</button></div>
        {results.data.source_status.map(s => s.status !== 'ok' && <p className='player-source-status' key={s.source}>{sourceNames[s.source] || s.source}：{s.message || s.status}</p>)}
      </>}
    </div></main></>;
}
