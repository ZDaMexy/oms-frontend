// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/profile-page/detail-stats.tsx and stats.tsx (2c596022a1); no missing ppy stats.
import * as React from 'react';
import { Performance } from '../../oms/types';
import { formatInteger } from '../../oms/api';
import { sourceLabel } from '../../oms/scopes';
import { ConditionDetails } from '../components/condition-details';
export function DetailStats({ data }: { data: Performance }) {
  return <div className='profile-detail'><div className='profile-detail-stats'>
    <div className='profile-detail-stats__chart-numbers profile-detail-stats__chart-numbers--top'><div className='profile-detail-stats__values player-stat-values'><div><strong>{data.totals.public_chart_count}</strong><span>公开谱面</span></div><div><strong>{data.totals.public_best_count}</strong><span>最佳成绩</span></div></div></div>
    <div className='profile-detail-stats__separator' />
    {data.lanes.length > 0 && <details className='player-stat-lanes' open={data.lanes.length === 1}><summary>按来源与条件查看统计（{data.lanes.length} 组）</summary><div className='profile-stats'>{data.lanes.map(lane => <section className='player-stat-lane' key={lane.source + lane.condition_scope.id}>
      <h3>{sourceLabel(lane.source)}</h3><ConditionDetails condition={lane.condition_scope} source={lane.source} /><dl>
        <div><dt>公开原谱</dt><dd>{lane.metrics.public_chart_count}</dd></div>
        {lane.metrics.cleared_chart_count !== null && <div><dt>通关原谱</dt><dd>{lane.metrics.cleared_chart_count} / {lane.metrics.public_chart_count}</dd></div>}
        {lane.metrics.best_total_score !== null && <div><dt>累计公开最佳分</dt><dd>{formatInteger(lane.metrics.best_total_score)}</dd></div>}
      </dl>{lane.metrics.cleared_chart_count !== null && lane.metrics.public_chart_count > 0 && <progress className='player-clear-progress' aria-label='公开成绩中的通关谱面' value={lane.metrics.cleared_chart_count} max={lane.metrics.public_chart_count} />}{lane.rankings.map(r => <a key={r.metric} className='player-lane-rank' href={'/rankings/?' + new URLSearchParams({ ruleset: data.scope.ruleset, keymode: data.scope.keymode, source: lane.source, condition: lane.condition_scope.id, metric: r.metric })}>{r.metric === 'cleared_charts' ? '通关榜' : r.metric === 'best_total_score' ? '累计分榜' : '收录榜'} {r.rank === null ? '未参榜' : `#${r.rank} / ${r.total_players}`}</a>)}
    </section>)}</div></details>}
  </div>{data.lanes.length === 0 && <p className='player-empty'>所选范围还没有公开成绩。</p>}<details className='player-chart-details'><summary>统计说明 · 仅含公开成绩</summary><p>谱面数按原谱去重，最佳成绩按来源与条件分别计数。通关数采用当前最佳分及独立灯；mania 累计分包含失败成绩。成绩未经回放核验。</p>{data.lanes.some(l => l.source !== 'oms' && l.condition_scope.unknown_fields.length > 0) && <p>跨播放器规则尚未确认一致，请查看各来源的游玩条件。</p>}</details></div>;
}
