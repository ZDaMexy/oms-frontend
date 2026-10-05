import * as React from 'react';
import { Condition, Ruleset } from './types';
import { keyLabel, keymodes, sourceNames, useApi } from './api';
import { SearchFilter } from '../osu-web/beatmaps/search-filter';
export interface Source { code: string; label: string; available: boolean; record_kind: string; rulesets: Ruleset[] }
export interface SourceResponse { items: Omit<Source, 'rulesets'>[] }
export interface Registry { sources: Source[] }
export interface Scopes { scope: { ruleset: Ruleset; keymode: string; source: string }; items: Condition[]; page: number; limit: number; total: number }
export function useSources(epoch: number, liveOnly = true) {
  const response = useApi<SourceResponse>('/sources', epoch, '/api/ir/v2');
  return { ...response, data: response.data ? { sources: response.data.items.filter(s => !liveOnly || s.record_kind !== 'archive_best').map(s => ({ ...s, rulesets: s.code === 'oms' ? ['bms', 'mania'] as Ruleset[] : ['bms'] as Ruleset[] })) } : null };
}
export function PlaymodeTabs({ ruleset, keymode, onChange }: { ruleset: Ruleset; keymode: string; onChange(values: Record<string, string | null>): void }) {
  return <div className='player-mode-filters'>
    <SearchFilter title='玩法' options={[{ id: 'bms', name: 'BMS' }, { id: 'mania', name: 'mania' }]} selected={[ruleset]} onChange={v => onChange({ ruleset: v[0], keymode: v[0] === 'bms' ? 'bms_7k' : 'mania_4k', sources: null, source: null, condition: null, page: '1', scope_page: '1', metric: null })} />
    <SearchFilter title='键型' options={keymodes(ruleset).map(id => ({ id, name: keyLabel(id) }))} selected={[keymode]} onChange={v => onChange({ keymode: v[0], condition: null, page: '1', scope_page: '1' })} />
  </div>;
}
export function Sources({ registry, ruleset, selected, onChange }: { registry: Registry; ruleset: Ruleset; selected: string[]; onChange(values: string[]): void }) {
  return <div className='player-source-filters'><SearchFilter title='成绩来源' multiselect options={registry.sources.filter(s => s.rulesets.includes(ruleset)).map(s => ({ id: s.code, name: s.label + (s.available ? '' : '（未开放）'), disabled: !s.available }))} selected={selected} onChange={onChange} />
    <button className='text-button' onClick={() => onChange(registry.sources.filter(s => s.available && s.rulesets.includes(ruleset)).map(s => s.code))}>全部可用</button><button className='text-button' onClick={() => onChange([])}>清空</button>
  </div>;
}
export function sourceLabel(source: string) { return sourceNames[source] || source; }
