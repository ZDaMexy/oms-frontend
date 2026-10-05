// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/beatmapset-panel/index.tsx at 2c596022a1: actual content/play/menu structure and mobile expansion.
import * as React from 'react';
import { CatalogSet } from '../../oms/catalog';
import { keyLabel, sourceNames } from '../../oms/api';
export function size(value: number | null) { return value === null ? '包大小未提供' : `${(value / 1048576).toFixed(1)} MiB`; }
export class BeatmapsetPanel extends React.Component<{ item: CatalogSet }, { expanded: boolean }> {
  state = { expanded: false };
  render() {
    const { item } = this.props;
    return <article className={'beatmapset-panel beatmapset-panel--size-extra' + (this.state.expanded ? ' beatmapset-panel--mobile-expanded' : '')}>
      {item.cover_url && <a className='beatmapset-panel__cover-container' href={item.detail_url}><img className='player-card-cover' src={item.cover_url} alt='' loading='lazy' /></a>}
      <div className='beatmapset-panel__content'><a className='beatmapset-panel__play' href={item.detail_url} aria-label={`查看 ${item.title}`}><span aria-hidden='true'>›</span></a>
        <div className='beatmapset-panel__info'><div className='beatmapset-panel__info-row beatmapset-panel__info-row--title'><a className='beatmapset-panel__main-link' href={item.detail_url}>{item.title}</a></div>
          <div className='beatmapset-panel__info-row beatmapset-panel__info-row--artist'>{item.artist}</div>
          <div className='beatmapset-panel__info-row beatmapset-panel__info-row--mapper'>{item.creator && <span>谱面作者：{item.creator}</span>}</div>
          <div className='beatmapset-panel__info-row beatmapset-panel__info-row--stats'><span>{sourceNames[item.source] || item.source}</span><span>{item.charts.length} 个匹配原谱</span>{item.package && <span>{size(item.package.size_bytes)}</span>}</div>
          <a className='beatmapset-panel__info-row beatmapset-panel__info-row--extra' href={item.detail_url}><span>{[...new Set(item.charts.map(c => c.keymode ? keyLabel(c.keymode) : c.keys !== null ? `${c.keys}K` : '键型未知'))].join(' · ')}</span><span>{item.kind === 'mania-set' ? '原生 mania' : 'BMS 原包'}</span></a>
        </div><div className='beatmapset-panel__menu-container'><div className='beatmapset-panel__menu'><a className='beatmapset-panel__menu-item' href={item.detail_url} aria-label='谱面详情'>›</a></div></div>
      </div><button className='beatmapset-panel__mobile-expand' type='button' aria-expanded={this.state.expanded} onClick={() => this.setState(v => ({ expanded: !v.expanded }))}>{this.state.expanded ? '收起难度' : '查看难度'}</button>
      {this.state.expanded && <ul className='player-card-difficulties'>{item.charts.map((chart, i) => <li key={chart.md5 || chart.bid || i}><a href={chart.md5 ? '/beatmaps/?' + new URLSearchParams({ ruleset: item.kind === 'bms-package' ? 'bms' : 'mania', md5: chart.md5, ...(chart.sha256 ? { sha256: chart.sha256 } : {}) }) : item.detail_url + (chart.bid ? '&bid=' + chart.bid : '')}>{chart.difficulty || '难度未提供'}</a><span>{chart.keymode ? keyLabel(chart.keymode) : '键型未提供'}{chart.star_rating !== null ? ` · 镜像 ${chart.star_rating.toFixed(2)}★` : ''}</span></li>)}</ul>}
    </article>;
  }
}
