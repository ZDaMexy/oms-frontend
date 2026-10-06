// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/beatmapsets-show/main.tsx/header.tsx/beatmap-picker.tsx/info.tsx/stats.tsx (2c596022a1).
// OMS source packages and raw charts replace ppy set IDs, converts, edits and fake statistics.
import * as React from 'react';
import { BmsDetail, Candidate, Chart, ManiaDetail, SourceStatus } from '../../oms/catalog';
import { Ruleset } from '../../oms/types';
import { keyLabel, sourceNames, useApi, useQuery } from '../../oms/api';
import { HeaderV4 } from '../components/header-v4';
import { Status } from '../components/status';
import { Scoreboard } from '../scoreboard/main';
import { size } from '../beatmapset-panel';

function Stats({ chart }: { chart: Chart }) {
  return <div className='beatmapset-stats'><table className='beatmap-stats-table'><tbody>
    {([['键型', chart.keymode ? keyLabel(chart.keymode) : chart.keys !== null ? `${chart.keys}K（原类型未知）` : null], ['BPM', chart.bpm], ['物量', chart.notes], ...(chart.length_seconds !== null ? [['时长（秒）', chart.length_seconds]] : []), ...(chart.star_rating !== null ? [['镜像星级', chart.star_rating]] : [])] as [string, string | number | null][]).map(([label, value]) => <tr key={label}><th className='beatmap-stats-table__label'>{label}</th><td className='beatmap-stats-table__value'>{value ?? '未提供'}</td></tr>)}
  </tbody></table></div>;
}
function Picker({ charts, selected, onSelect }: { charts: Chart[]; selected: Chart | null; onSelect(chart: Chart): void }) {
  const container = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const box = container.current;
    const active = box?.querySelector<HTMLElement>('.beatmapset-beatmap-picker__beatmap--active');
    if (box && active) box.scrollTop += active.getBoundingClientRect().top - box.getBoundingClientRect().top - (box.clientHeight - active.offsetHeight) / 2;
  }, [charts, selected?.md5, selected?.sha256, selected?.bid]);
  return <div ref={container} className='beatmapset-beatmap-picker' role='group' aria-label={`包内原谱，共 ${charts.length} 个`} tabIndex={0}>{charts.map((chart, i) => {
    const active = !!selected && (chart.md5 ? chart.md5 === selected.md5 && (!selected.sha256 || chart.sha256 === selected.sha256) : chart.bid !== null && chart.bid === selected.bid);
    return <button key={(chart.md5 || chart.bid || 'chart') + ':' + i} className={'beatmapset-beatmap-picker__beatmap' + (active ? ' beatmapset-beatmap-picker__beatmap--active' : '')} aria-pressed={active} onClick={() => onSelect(chart)} title={chart.difficulty || '原难度'}><span>{chart.keymode ? keyLabel(chart.keymode) : chart.keys !== null ? `${chart.keys}K（类型未知）` : '键型未知'}</span><span>{chart.difficulty || '难度未提供'}</span>{chart.star_rating !== null && <small>{chart.star_rating.toFixed(2)}★</small>}</button>;
  })}</div>;
}
function SourceStates({ states }: { states: SourceStatus[] }) {
  return <div className='player-provider-status'>{states.map(state => <p key={state.source}><strong>{sourceNames[state.source] || state.source}</strong> · {state.status === 'ok' ? '已找到谱面' : state.status === 'not-found' ? '未收录此谱面' : state.message || state.status}</p>)}</div>;
}
function Details({ chart }: { chart: Chart }) {
  return <div className='beatmapset-info'><div className='beatmapset-info__box'><details className='player-chart-details'><summary>谱面标识</summary><dl className='player-chart-identities'><div><dt>难度</dt><dd>{chart.difficulty ?? '未提供'}</dd></div>{chart.md5 && <div><dt>MD5</dt><dd><code>{chart.md5}</code></dd></div>}{chart.sha256 && <div><dt>SHA256</dt><dd><code>{chart.sha256}</code></dd></div>}{chart.bid !== null && <div><dt>谱面编号</dt><dd>{chart.bid}</dd></div>}</dl></details></div><div className='beatmapset-info__box'><a href='/help/#library'>如何添加到 OMS</a><a href='/help/#ir'>如何提交成绩</a></div></div>;
}
function BmsPage({ md5 }: { md5: string }) {
  const { query, update } = useQuery();
  const hash = query.get('sha256'); const extra = hash ? '?sha256=' + encodeURIComponent(hash) : '';
  const detail = useApi<BmsDetail>('/catalog/bms/' + encodeURIComponent(md5) + extra);
  const selectedSource = query.get('download_source') || detail.data?.recommended_source;
  const candidate = detail.data?.candidates.find(c => c.source === selectedSource);
  const chart = candidate?.chart || detail.data?.chart;
  const onSelect = (value: Chart) => { if (value.md5) location.assign('/beatmaps/?' + new URLSearchParams({ ruleset: 'bms', md5: value.md5, ...(value.sha256 ? { sha256: value.sha256 } : {}) })); };
  return <><HeaderV4 title='BMS 谱面' theme='beatmapsets' links={[{ url: '/beatmapsets/?ruleset=bms', title: '浏览谱面' }, { url: '#scores', title: '谱面成绩' }]} /><main id='main' className='osu-page player-page'><Status state={detail} loading='正在查找原谱与资源包…' />
    {detail.data && <>{chart ? <><div className='beatmapset-header'>
      {candidate?.cover_url && <img className='player-detail-cover' src={candidate.cover_url} alt='' />}
      <div className='beatmapset-header__box beatmapset-header__box--main'><h2 className='beatmapset-header__details-text beatmapset-header__details-text--title'>{chart.title || md5}</h2><p className='beatmapset-header__details-text beatmapset-header__details-text--artist'>{chart.artist}</p><p className='beatmapset-header__diff-name'>{chart.difficulty || '难度未提供'}</p><div className='beatmapset-header__beatmap-picker-box'>{candidate && <Picker charts={candidate.charts} selected={chart} onSelect={onSelect} />}</div>
        <div className='beatmapset-header__buttons'>{candidate?.eligible && candidate.package.download_url && <a className='button button-primary' href={candidate.source === detail.data.recommended_source ? '/api/ir/v1/catalog/bms/' + md5 + '/download' + extra : candidate.package.download_url} target='_blank' rel='noopener noreferrer'>从 {sourceNames[candidate.source] || candidate.source} 下载</a>}</div><p className='player-explanation'>由所选原站提供下载。其他来源见下方。</p>
      </div><div className='beatmapset-header__box beatmapset-header__box--stats'><Stats chart={chart} /></div>
    </div><Details chart={chart} /></> : <p className='player-empty'>两源尚未找到这个 MD5 的资源包，仍可查已有成绩。<code>{md5}</code></p>}
    <section className='page-extra player-package-sources'><h2>资源来源</h2><SourceStates states={detail.data.source_status} />{detail.data.candidates.map(c => <CandidateCard key={c.source + c.package.id} candidate={c} selected={selectedSource === c.source} onSelect={() => update({ download_source: c.source })} />)}</section></>}
    <Scoreboard md5={md5} ruleset='bms' /></main></>;
}
function CandidateCard({ candidate: c, selected, onSelect }: { candidate: Candidate; selected: boolean; onSelect(): void }) {
  return <article className={'player-package-candidate' + (selected ? ' player-package-candidate--selected' : '')}><div><h3>{sourceNames[c.source] || c.source}</h3><p>{c.package.name}</p><p>{size(c.package.size_bytes)} · {c.charts.length} 张谱面</p><details className='player-chart-details'><summary>匹配与下载状态</summary><p>{c.identity === 'md5-only' ? '谱面 MD5 匹配，整包内容可能不同' : c.identity} · {c.availability === 'unchecked' ? '下载可用性未确认' : c.availability}</p></details>{c.reason && <p className='is-error'>此来源无法下载当前谱面：{c.reason}</p>}</div><div><button className='button button-quiet' onClick={onSelect} aria-pressed={selected}>{selected ? '已选来源' : '选择此来源'}</button>{c.source_url && <a className='button button-quiet' href={c.source_url} target='_blank' rel='noopener noreferrer'>原站详情</a>}</div></article>;
}
function ManiaPage({ sid }: { sid: string }) {
  const { query, update } = useQuery(); const keys = query.get('keys');
  const detail = useApi<ManiaDetail>('/catalog/mania/sets/' + encodeURIComponent(sid) + (keys ? '?keys=' + encodeURIComponent(keys) : ''));
  const bid = query.get('bid');
  const chart = detail.data?.set.charts.find(c => String(c.bid) === bid) || detail.data?.set.charts[0];
  return <><HeaderV4 title='mania 谱面' theme='beatmapsets' links={[{ url: '/beatmapsets/?ruleset=mania', title: '浏览原生 mania' }]} /><main id='main' className='osu-page player-page'><Status state={detail} />{detail.data && chart && <><div className='beatmapset-header'>
    {detail.data.set.cover_url && <img className='player-detail-cover' src={detail.data.set.cover_url} alt='' />}
    <div className='beatmapset-header__box beatmapset-header__box--main'><h2 className='beatmapset-header__details-text beatmapset-header__details-text--title'>{detail.data.set.title}</h2><p className='beatmapset-header__details-text beatmapset-header__details-text--artist'>{detail.data.set.artist}</p><p>谱面作者：{detail.data.set.creator || '未提供'}</p><p className='beatmapset-header__diff-name'>{chart.difficulty}</p><div className='beatmapset-header__beatmap-picker-box'><Picker charts={detail.data.set.charts} selected={chart} onSelect={c => update({ bid: String(c.bid) })} /></div><div className='beatmapset-header__buttons'><a className='button button-primary' href={detail.data.download.full_url} target='_blank' rel='noopener noreferrer'>下载原集合</a><a className='button' href={detail.data.download.novideo_url} target='_blank' rel='noopener noreferrer'>无视频版本</a></div><p className='player-explanation'>Sayobot 原生 mania · sid {sid}{detail.data.mixed_modes ? ' · 此包也含其他模式，OMS 只导入原生 mania。' : ''}</p></div><div className='beatmapset-header__box beatmapset-header__box--stats'><Stats chart={chart} /></div></div><Details chart={chart} /><SourceStates states={detail.data.source_status} />
    {chart.md5 ? <Scoreboard key={chart.md5} md5={chart.md5} ruleset='mania' /> : <section className='page-extra'><h2>OMS 成绩</h2><p>尚未确认与 OMS 已收录成绩为同一谱面。</p><a className='button button-quiet' href={'/ir/?q=' + encodeURIComponent(detail.data.set.title)}>按歌名查找已收录成绩</a><details className='player-chart-details'><summary>谱面标识与成绩关联</summary><p>镜像提供原 sid / bid，但未提供原谱 MD5。同名搜索结果用于查找候选，不能据此确认是同一谱面。</p></details></section>}
  </>}</main></>;
}
function StoredMania({ md5 }: { md5: string }) {
  const metadata = useApi<{ chart: { title: string; artist: string; difficulty: string }; ruleset: Ruleset }>('/charts/' + encodeURIComponent(md5), 0, '/api/ir/v2');
  return <><HeaderV4 title={metadata.data?.chart.title || 'mania 谱面成绩'} theme='beatmapsets' links={[{ url: '/beatmapsets/?ruleset=mania', title: '获取原生 mania' }]} /><main id='main' className='osu-page player-page'><Status state={metadata} />{metadata.data && <div className='player-stored-chart'><h2>{metadata.data.chart.title}</h2><p>{metadata.data.chart.artist} · {metadata.data.chart.difficulty}</p><a className='button button-quiet' href={'/beatmapsets/?' + new URLSearchParams({ ruleset: 'mania', q: metadata.data.chart.title })}>按歌名查找下载来源</a><details className='player-chart-details'><summary>原谱标识与下载关联</summary><code>{md5}</code><p>镜像未提供 MD5，暂未确认对应的原集合。歌名相同的搜索结果仍需核对原谱。</p></details></div>}<Scoreboard md5={md5} ruleset='mania' /></main></>;
}
export function BeatmapsetsShowMain() {
  const query = new URLSearchParams(location.search); const ruleset = query.get('ruleset') || 'bms'; const md5 = query.get('md5'); const sid = query.get('sid');
  if (ruleset === 'bms' && md5) return <BmsPage md5={md5} />;
  if (ruleset === 'mania' && sid) return <ManiaPage sid={sid} />;
  if (ruleset === 'mania' && md5) return <StoredMania md5={md5} />;
  return <><HeaderV4 title='谱面详情' theme='beatmapsets' /><main id='main' className='osu-page player-page'><p className='player-empty'>请先选择一张谱面。</p><a className='button' href='/beatmapsets/'>浏览谱面</a></main></>;
}
