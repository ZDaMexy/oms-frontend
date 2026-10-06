// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/beatmapsets-show/scoreboard/main.tsx/table.tsx/table-row.tsx at 2c596022a1.
// OMS supplies complete scoped ranks, independent lamps and namespaced identities.
import * as React from 'react';
import { Lamp, Ruleset } from '../../oms/types';
import { date, formatInteger, profileUrl, useAccount, useApi, useQuery } from '../../oms/api';
import { Sources, sourceLabel, useSources } from '../../oms/scopes';
import { Pagination } from '../components/pagination';
import { Status } from '../components/status';
import { ConditionFields, unknownFieldNames } from '../components/condition-details';
interface Metadata { chart: { md5: string; title: string | null; artist: string | null; difficulty: string | null; sha256: string | null }; ruleset: Ruleset; groups: { id: string; label: string }[] }
interface MixedRow { rank: number; identity: { namespace: string; id: string; username: string }; score: { record_kind: string; source: string; ex_score: number; max_ex_score: number | null; played_at: string | null; conditions: Record<string, unknown>; unknown_fields: string[]; lamp: Lamp | null }; best_lamps: Lamp[] }
interface MixedBoard { items: MixedRow[]; me: MixedRow | null; page: number; limit: number; total: number; notice: string; conditions: { id: string; label: string }[] }
interface ManiaRow { rank: number; user: { id: number; username: string }; score: { total_score: number; accuracy: number; passed: boolean; max_combo: number; played_at: string } }
interface ManiaBoard { items: ManiaRow[]; total: number; page: number; limit: number }
export function Scoreboard({ md5, ruleset }: { md5: string; ruleset: Ruleset }) {
  const { user, epoch } = useAccount(); const { query, update } = useQuery();
  const registry = useSources(epoch, false);
  const metadata = useApi<Metadata>('/charts/' + md5, epoch, '/api/ir/v2');
  const selected = query.has('sources') ? query.get('sources')!.split(',').filter(Boolean) : registry.data?.sources.filter(s => s.available).map(s => s.code) || [];
  const mode = query.get('mode') || 'reference'; const condition = query.get('condition') || ''; const page = query.get('board_page') || '1';
  const p = new URLSearchParams({ sources: selected.join(','), mode: mode === 'comparable' && !condition ? 'reference' : mode, page, limit: '20' }); if (condition && mode === 'comparable') p.set('condition', condition);
  const mixed = useApi<MixedBoard>(metadata.data?.ruleset === ruleset && ruleset === 'bms' && registry.data ? '/multisource/scores/chart/' + md5 + '?' + p : null, epoch);
  const group = query.get('group') || metadata.data?.groups[0]?.id || '';
  const mania = useApi<ManiaBoard>(metadata.data?.ruleset === ruleset && ruleset === 'mania' && group ? `/scores/chart/${md5}?group=${group}&page=${page}&limit=20` : null, epoch);
  const change = (v: Record<string, string | null>) => update({ ...v, board_page: '1' });
  const awaiting = mode === 'comparable' && !condition;
  function Identity({ row }: { row: MixedRow }) { return row.identity.namespace === 'oms' ? <a href={profileUrl(row.identity.id)}>{row.identity.username}<small className='player-identity'>OMS #{row.identity.id}</small></a> : <span>{row.identity.username}<small className='player-identity'>{row.identity.namespace === 'lr2ir' ? 'LR2IR 旧账号' : row.identity.namespace} #{row.identity.id}</small></span>; }
  function LampValue({ lamp }: { lamp: Lamp }) {
    const rule = lamp.rule_label || (lamp.family.startsWith('unknown:') ? '原规则未知' : lamp.family.startsWith('oms:') ? 'OMS 原条件' : lamp.family);
    return <div>{lamp.label}<small>{rule}{lamp.source && ' · ' + sourceLabel(lamp.source)}</small><details><summary>原灯信息</summary><p>{lamp.family} · {String(lamp.value)}</p>{lamp.record_id && <p>记录 ID：{lamp.record_id}</p>}</details></div>;
  }
  function MixedTable({ rows }: { rows: MixedRow[] }) {
    if (rows.length === 0) return null;
    return <div className='player-table-scroll'><table className='beatmap-scoreboard-table'>
      <thead><tr><th>名次</th><th>玩家</th><th>最佳 EX</th><th>来源与条件</th><th>独立最佳灯</th><th>游玩时间</th></tr></thead>
      <tbody>{rows.map(row => <tr className='beatmap-scoreboard-table__body-row' key={row.identity.namespace + row.identity.id}>
        <td>#{row.rank}</td><td><Identity row={row} /></td><td>{row.score.ex_score} / {row.score.max_ex_score ?? '未知'}</td>
        <td>{registry.data?.sources.find(s => s.code === row.score.source)?.label || row.score.source}
          <details><summary>{row.score.record_kind === 'play' ? 'OMS 新局条件' : row.score.record_kind === 'best_state' ? '最佳状态条件' : '历史摘要条件'}</summary>
            <ConditionFields values={row.score.conditions} />
            {row.score.unknown_fields.length > 0 && <p className='player-unknown'>未确认：{unknownFieldNames(row.score.unknown_fields)}</p>}
            <details><summary>原始未知字段</summary><p>{row.score.unknown_fields.join('、') || '无'}</p></details>
          </details>
        </td>
        <td>{row.best_lamps.length ? row.best_lamps.map(l => <LampValue key={l.family + l.record_id} lamp={l} />) : row.score.lamp ? <><small>原摘要灯</small><LampValue lamp={row.score.lamp} /></> : '灯未提供'}</td>
        <td>{date(row.score.played_at)}</td>
      </tr>)}</tbody>
    </table></div>;
  }
  return <section className='beatmapset-scoreboard page-extra' id='scores'><h2>谱面成绩</h2><Status state={metadata} />
    {metadata.data && metadata.data.ruleset !== ruleset && <p className='is-error' role='alert'>已收录原谱属于 {metadata.data.ruleset}，与当前所选玩法不一致。<a href={'/beatmaps/?md5=' + md5 + '&ruleset=' + metadata.data.ruleset}>查看该原谱 ›</a></p>}
    {metadata.data?.ruleset === ruleset && ruleset === 'bms' && <><Status state={registry} />{registry.data && <Sources registry={registry.data} ruleset='bms' selected={selected} onChange={v => change({ sources: v.join(','), condition: null })} />}<div className='page-tabs'><button className={'page-tabs__tab' + (mode === 'reference' ? ' page-tabs__tab--active' : '')} onClick={() => change({ mode: 'reference', condition: null })}>参考混榜</button><button className={'page-tabs__tab' + (mode === 'comparable' ? ' page-tabs__tab--active' : '')} onClick={() => change({ mode: 'comparable', condition: null })}>同条件榜</button></div>{mode === 'comparable' && <label>已确认的同条件<select value={condition} onChange={e => change({ condition: e.target.value || null })}><option value=''>请选择条件</option>{mixed.data?.conditions.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}</select></label>}<Status state={mixed} />{mixed.data && (awaiting ? <p className='player-status'>请选择已确认条件。未确认的规则不能进入同条件榜。</p> : <><p className='player-explanation'>{mixed.data.total} 个参榜账号 · {mixed.data.notice}。最佳分与独立灯可能来自不同记录。</p><MixedTable rows={mixed.data.items} />{mixed.data.items.length === 0 && <p className='player-empty'>{mixed.data.total === 0 ? '所选来源和条件没有公开成绩。' : '本页没有成绩。'}{mixed.data.page > 1 && <button className='button button-quiet' onClick={() => update({ board_page: '1' })}>返回第一页</button>}</p>}{user && mixed.data.me && !mixed.data.items.some(row => row.identity.namespace === 'oms' && row.identity.id === String(user.id)) && <><h3>我的排名</h3><MixedTable rows={[mixed.data.me]} /></>}{user && !mixed.data.me && <p>你在所选范围中还没有公开成绩。</p>}<Pagination {...mixed.data} onPage={v => update({ board_page: String(v) })} /></>)}</>}
    {metadata.data?.ruleset === ruleset && ruleset === 'mania' && <><label>成绩条件<select value={group} onChange={e => change({ group: e.target.value })}>{metadata.data.groups.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}</select></label><Status state={mania} />{!group && <p className='player-empty'>尚无公开条件组。</p>}{mania.data && <><p className='player-explanation'>{mania.data.total} 位玩家 · 客户端报告，未经回放核验。</p>{mania.data.items.length > 0 && <div className='player-table-scroll'><table className='beatmap-scoreboard-table'><thead><tr><th>名次</th><th>玩家</th><th>最佳分</th><th>准确率 / 连击</th><th>通过</th><th>游玩日期</th></tr></thead><tbody>{mania.data.items.map(row => <tr key={row.user.id}><td>#{row.rank}</td><td><a href={profileUrl(row.user.id)}>{row.user.username}</a></td><td>{formatInteger(row.score.total_score)}</td><td>{(row.score.accuracy * 100).toFixed(2)}% · {row.score.max_combo}</td><td>{row.score.passed ? '通过' : '未通过'}</td><td>{date(row.score.played_at)}</td></tr>)}</tbody></table></div>}{mania.data.items.length === 0 && <p className='player-empty'>{mania.data.total === 0 ? '当前条件没有公开成绩。' : '本页没有成绩。'}{mania.data.page > 1 && <button className='button button-quiet' onClick={() => update({ board_page: '1' })}>返回第一页</button>}</p>}<Pagination {...mania.data} onPage={v => update({ board_page: String(v) })} /></>}</>}
    <p className='player-explanation'><a href={'/ir/?md5=' + md5}>在 IR 中查看成绩详情</a></p>
  </section>;
}
