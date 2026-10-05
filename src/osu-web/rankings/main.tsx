// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Actual JSX port of resources/views/rankings/index.blade.php, global.blade.php and _main_column.blade.php (2c596022a1).
import * as React from 'react';
import { Ranking, RankingRow, Ruleset } from '../../oms/types';
import { formatInteger, profileUrl, useAccount, useApi, useQuery } from '../../oms/api';
import { PlaymodeTabs, Scopes, useSources } from '../../oms/scopes';
import { HeaderV4 } from '../components/header-v4';
import { Pagination } from '../components/pagination';
import { Status } from '../components/status';
import { ConditionDetails, conditionOptionLabel } from '../components/condition-details';
const metricNames: Record<string, string> = { coverage: '公开收录谱面数', cleared_charts: '公开通关谱面数', best_total_score: '累计公开最佳分' };
function Row({ item, own = false }: { item: RankingRow; own?: boolean }) {
  return <tr className={'ranking-page-table__row' + (own ? ' player-rank-self' : '')}><td className='ranking-page-table__column'>#{item.rank}</td><td className='ranking-page-table__column ranking-page-table__column--main'><div className='ranking-page-table-main'><a className='ranking-page-table-main__link' href={profileUrl(item.user.id)}>{item.user.username}</a></div></td><td className='ranking-page-table__column player-rank-value'>{formatInteger(item.value)}</td><td className='ranking-page-table__column ranking-page-table__column--dimmed'>{item.public_chart_count}</td></tr>;
}
export function RankingsMain() {
  const { user, epoch } = useAccount(); const { query, update } = useQuery();
  const ruleset = (query.get('ruleset') || 'bms') as Ruleset;
  const keymode = query.get('keymode') || (ruleset === 'bms' ? 'bms_7k' : 'mania_4k');
  const source = query.get('source') || 'oms';
  const metric = query.get('metric') || (ruleset === 'bms' ? 'coverage' : 'best_total_score');
  const registry = useSources(epoch);
  const scopes = useApi<Scopes>('/rankings/scopes?' + new URLSearchParams({ ruleset, keymode, source, page: query.get('scope_page') || '1', limit: '50' }), epoch);
  const options = scopes.data?.items || [];
  const condition = query.get('condition') || (ruleset === 'mania' ? options[0]?.id : '') || '';
  const params = new URLSearchParams({ ruleset, keymode, source, metric, page: query.get('page') || '1', limit: '20' });
  if (condition) params.set('condition', condition);
  const waiting = metric === 'cleared_charts' && !condition;
  const board = useApi<Ranking>(!waiting ? '/rankings/players?' + params : null, epoch);
  const change = (v: Record<string, string | null>) => update({ ...v, page: '1' });
  return <><HeaderV4 title='玩家榜' theme='rankings' links={[{ url: '/rankings/', title: '玩家指标', active: true }, { url: '/beatmapsets/', title: '谱面榜单' }]} />
    <main id='main' className='osu-page player-page'><PlaymodeTabs ruleset={ruleset} keymode={keymode} onChange={change} /><Status state={registry} />
      <div className='ranking-filter'><label>成绩来源<select value={source} onChange={e => change({ source: e.target.value, condition: null, scope_page: '1' })}>{registry.data?.sources.filter(s => s.rulesets.includes(ruleset)).map(s => <option key={s.code} value={s.code} disabled={!s.available}>{s.label}{s.available ? '' : '（未开放）'}</option>)}</select></label><label>排序指标<select value={metric} onChange={e => change({ metric: e.target.value, condition: null })}><option value='coverage'>公开收录谱面数</option>{ruleset === 'bms' ? <option value='cleared_charts'>公开通关谱面数</option> : <option value='best_total_score'>累计公开最佳分</option>}</select></label><label>游玩条件<select value={condition} onChange={e => change({ condition: e.target.value || null })}><option value=''>{ruleset === 'bms' && metric === 'coverage' ? '所选来源全部条件（收录进度）' : '请选择已有公开条件'}</option>{condition && !options.some(o => o.id === condition) && <option value={condition}>当前所选条件（目录其他页）</option>}{options.map(o => <option key={o.id} value={o.id}>{conditionOptionLabel(o)}</option>)}</select></label></div>
      <Status state={scopes} />{scopes.data && scopes.data.total > scopes.data.limit && <div className='player-scopes-pages'><span>条件目录</span><Pagination {...scopes.data} onPage={v => update({ scope_page: String(v) })} /></div>}
      <p className='player-explanation'>{metric === 'best_total_score' ? '累计每谱当前公开最佳总分，含失败成绩。' : metric === 'cleared_charts' ? '按所选来源与游玩条件统计通关原谱，未知灯不计作通关。' : '按所选来源与键型的公开原谱数排序。'}同分并列。成绩未经回放核验。</p>
      {waiting && scopes.data && <p className='player-empty'>{options.length ? '请选择已有公开条件，再查看通关排名。' : '所选范围还没有可用的公开条件；可更换键型或来源。'}</p>}
      <Status state={board} />{board.data && <>{board.data.scope.condition_scope && <div className='player-ranking-condition'><ConditionDetails condition={board.data.scope.condition_scope} source={board.data.scope.source} /></div>}<Pagination {...board.data} onPage={v => update({ page: String(v) })} /><div className='ranking-page player-table-scroll'><table className='ranking-page-table'><caption>{metricNames[board.data.scope.metric]} · {board.data.total} 位玩家</caption><thead><tr><th className='ranking-page-table__heading'>排名</th><th className='ranking-page-table__heading ranking-page-table__heading--main'>玩家</th><th className='ranking-page-table__heading ranking-page-table__heading--focused'>{metricNames[board.data.scope.metric]}</th><th className='ranking-page-table__heading'>公开原谱</th></tr></thead><tbody>{board.data.items.map(item => <Row key={item.user.id} item={item} own={user?.id === item.user.id} />)}</tbody></table></div>{board.data.items.length === 0 && <p className='player-empty'>所选范围没有公开成绩。</p>}{board.data.me && !board.data.items.some(i => i.user.id === board.data!.me!.user.id) && <section className='player-rank-position'><h3>本人位置</h3><div className='player-table-scroll' role='region' aria-label='本人位置表格' tabIndex={0}><table className='ranking-page-table'><tbody><Row item={board.data.me} own /></tbody></table></div></section>}<Pagination {...board.data} onPage={v => update({ page: String(v) })} /><p className='player-snapshot'>统计于 {new Date(board.data.snapshot.read_at).toLocaleString('zh-CN')}；新成绩会改变当前名次。</p></>}
    </main></>;
}
