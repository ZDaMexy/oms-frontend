export type Ruleset = 'bms' | 'mania';
export interface User { id: number; username: string }
export interface Condition { id: string; label: string; conditions: Record<string, unknown>; comparison: string; unknown_fields: string[] }
export interface Scope { ruleset: Ruleset; keymode: string; selected_sources?: string[]; condition_id?: string | null }
export interface Lamp { family: string; value: number | string; label: string; source?: string; record_id?: string | null; rule_label?: string }
export interface PublicBest {
  chart: { md5: string; sha256: string | null; title: string | null; artist: string | null; difficulty: string | null };
  ruleset: Ruleset; condition_scope: Condition;
  score: {
    record_id: string; record_kind: 'play' | 'best_state'; source: string;
    ex_score: number | null; max_ex_score: number | null; total_score: number | null;
    total_score_version: number | null; accuracy: number | null; passed: boolean | null;
    played_at: string | null; received_at: string; conditions: Record<string, unknown>; unknown_fields: string[]; lamp: Lamp | null;
  };
  best_lamps: Lamp[];
  activity?: { kind: string; order_at: string; played_at: string | null };
}
export interface Page<T> { items: T[]; page: number; limit: number; total: number }
export interface Performance {
  user: User; scope: Scope;
  totals: { public_chart_count: number; public_best_count: number };
  lanes: { source: string; condition_scope: Condition;
    metrics: { public_chart_count: number; public_best_count: number; cleared_chart_count: number | null; best_total_score: string | null };
    rankings: { metric: string; rank: number | null; total_players: number }[];
  }[];
  snapshot: { read_at: string; dataset: string };
}
export interface RankingRow { rank: number; user: User; value: string; public_chart_count: number; public_best_count: number }
export interface Ranking extends Page<RankingRow> {
  scope: { ruleset: Ruleset; keymode: string; source: string; metric: string; condition_scope: Condition | null; basis: string; rating: false };
  me: RankingRow | null; snapshot: { read_at: string; dataset: string };
}
export interface CommunityPost { id: number; title: string; excerpt: string; updated_at: string; reply_count: number }
export interface OmsSite {
  user: User | null; ready: Promise<void>; revision: number; sessionError: string | null;
  request<T>(path: string, options?: { refresh?: boolean; signal?: AbortSignal; apiRoot?: string }): Promise<T>;
  errorText(error: unknown): string;
}
declare global { interface Window { OmsSite: OmsSite } }
