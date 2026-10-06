// OMS presentation of adopted public condition/record fields; AGPL-3.0-or-later.
// Preserve source labels and raw values without inventing cross-player equivalence.
import * as React from 'react';
import { Condition, PublicBest } from '../../oms/types';
const fieldLabels: Record<string, string> = {
  keymode: '键型', judge_rank: '判定档', judge_algorithm: '判定规则', judge_version: '判定版本',
  gauge: '原血条', gauge_type: '血条', gauge_rules: '血条规则', long_note_mode: '长条类型',
  total: 'TOTAL', option_1: '原选项 1', option_2: '原选项 2', option_3: '原选项 3', option_4: '原选项 4',
  input: '输入方式', sha256: '谱面 SHA256', max_ex_score: '最大 EX', mods: 'Mod', assist: '辅助标记',
  frequency: '频率', cross_player_parity: '跨播放器规则一致性', played_at: '游玩时间',
  branch_policy: '随机分支规则', seed: '随机种子', total_score_version: '计分版本',
};
export function unknownFieldNames(fields: string[]) {
  return fields.map(name => fieldLabels[name] || name).join('、');
}
export function conditionOptionLabel(condition: Condition) {
  return condition.label.length > 64 ? condition.label.slice(0, 64) + '…' : condition.label;
}
export function ConditionFields({ values }: { values: Record<string, unknown> }) {
  return <dl className='player-condition-fields'>{Object.entries(values).map(([name, value]) => <div key={name}><dt title={name}>{fieldLabels[name] || name}</dt><dd>{value === null ? '未提供' : typeof value === 'object' ? JSON.stringify(value) : String(value)}</dd></div>)}</dl>;
}
export function ConditionDetails({ condition, source, record }: { condition: Condition; source: string; record?: PublicBest['score'] }) {
  const unknown = condition.unknown_fields.length > 0 || !!record?.unknown_fields.length;
  return <details className='player-condition-details'><summary>{source === 'oms' ? '游玩条件 · ' + conditionOptionLabel(condition) : '查看游玩条件'}{unknown && <span>（含未确认项）</span>}</summary><div className='player-condition-body'>
    <p>{condition.comparison === 'same-oms-rules' ? '相同 OMS 规则' : condition.comparison === 'unverified-source-condition' ? '此来源与其他播放器的规则尚未确认一致' : condition.comparison}</p><ConditionFields values={condition.conditions} />
    {condition.unknown_fields.length > 0 && <p className='player-unknown'>条件未确认：{unknownFieldNames(condition.unknown_fields)}</p>}
    {record && <><h4>本条成绩</h4><ConditionFields values={record.conditions} />{record.unknown_fields.length > 0 && <p className='player-unknown'>未确认：{unknownFieldNames(record.unknown_fields)}</p>}</>}
    <details className='player-chart-details'><summary>原始条件标识</summary><p>{condition.label}</p><p>ID：<code>{condition.id}</code></p><p>{condition.comparison}</p><p>条件未知字段：<code>{condition.unknown_fields.join('、') || '无'}</code></p>{record && <p>记录未知字段：<code>{record.unknown_fields.join('、') || '无'}</code></p>}</details>
  </div></details>;
}
