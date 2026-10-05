// OMS presentation of adopted public condition/record fields; AGPL-3.0-or-later.
// Preserve source labels and raw values without inventing cross-player equivalence.
import * as React from 'react';
import { Condition, PublicBest } from '../../oms/types';
export function conditionOptionLabel(condition: Condition) {
  return condition.label.length > 64 ? condition.label.slice(0, 64) + '…' : condition.label;
}
function Fields({ values }: { values: Record<string, unknown> }) {
  return <dl className='player-condition-fields'>{Object.entries(values).map(([name, value]) => <div key={name}><dt>{name}</dt><dd>{value === null ? '未提供' : typeof value === 'object' ? JSON.stringify(value) : String(value)}</dd></div>)}</dl>;
}
export function ConditionDetails({ condition, source, record }: { condition: Condition; source: string; record?: PublicBest['score'] }) {
  const unknown = condition.unknown_fields.length > 0 || !!record?.unknown_fields.length;
  return <details className='player-condition-details'><summary>{source === 'oms' ? '游玩条件 · ' + conditionOptionLabel(condition) : '查看游玩条件'}{unknown && <span>（含未确认项）</span>}</summary><div className='player-condition-body'>
    <p>{condition.label}</p><p>条件 ID：<code>{condition.id}</code></p><p>比较资格：{condition.comparison}</p><Fields values={condition.conditions} />
    {condition.unknown_fields.length > 0 && <p>条件未知字段：<code>{condition.unknown_fields.join('、')}</code></p>}
    {record && <><h4>记录条件</h4><Fields values={record.conditions} /><p>记录未知字段：<code>{record.unknown_fields.join('、') || '无'}</code></p></>}
    {unknown && <p>{source === 'oms' ? '部分字段尚未确认，保留原有信息。' : '跨播放器的部分条件尚未确认一致，保留来源原有信息。'}</p>}
  </div></details>;
}
