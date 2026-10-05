// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/profile-page/play-detail.tsx (2c596022a1); OMS score/lamp/time semantics.
import * as React from 'react';
import { PublicBest } from '../../oms/types';
import { chartUrl, date, formatInteger } from '../../oms/api';
import { sourceLabel } from '../../oms/scopes';
import { ConditionDetails } from '../components/condition-details';
export function PlayDetail({ item, recent = false }: { item: PublicBest; recent?: boolean }) {
  const score = item.score;
  return <article className='play-detail play-detail--highlightable'>
    <div className='play-detail__group play-detail__group--top'>
      <div className='play-detail__icon play-detail__icon--main'><span className='player-lamp'>{score.lamp?.label || (score.passed === null ? '未知' : score.passed ? '通过' : '未通过')}</span></div>
      <div className='play-detail__detail'><a className='play-detail__title' href={chartUrl(item.chart.md5, item.ruleset, item.chart.sha256 ? { sha256: item.chart.sha256 } : undefined)}>{item.chart.title || item.chart.md5}<small className='play-detail__artist'>{item.chart.artist}</small></a>
        <div className='play-detail__beatmap-and-time'><span className='play-detail__beatmap'>{item.chart.difficulty || '难度未提供'}</span><span className='play-detail__time'>{sourceLabel(score.source)} · {score.record_kind === 'play' ? 'OMS 新局' : '最佳状态'}</span></div>
      </div>
    </div>
    <div className='play-detail__group player-score-summary'><strong>{item.ruleset === 'bms' ? `${score.ex_score} / ${score.max_ex_score ?? '未知'} EX` : formatInteger(score.total_score!)}</strong>{score.accuracy !== null && <span>{(score.accuracy * 100).toFixed(2)}%</span>}
      {item.best_lamps.length > 0 && <span>独立最佳灯：{item.best_lamps.map(l => `${l.label}（${l.rule_label || l.family}）`).join('；')}</span>}
    </div>
    <div className='player-score-meta'>{recent && <span>{item.activity?.kind === 'best-state-updated' ? '最佳状态更新' : '公开最佳接收'}：{date(item.activity!.order_at)}</span>}{score.played_at !== null && <span>游玩：{date(score.played_at)}</span>}<span>接收：{date(score.received_at)}</span></div>
    <ConditionDetails condition={item.condition_scope} source={score.source} record={score} />
  </article>;
}
