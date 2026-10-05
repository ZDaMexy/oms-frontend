import { Ruleset } from './types';
export interface Chart {
  md5: string | null; sha256: string | null; title: string | null; artist: string | null; difficulty: string | null;
  keymode: string | null; keys: number | null; bpm: number | null; notes: number | null;
  length_seconds: number | null; star_rating: number | null; bid: number | null;
}
export interface Package { id: string; name: string; size_bytes: number | null; download_url: string | null }
export interface CatalogSet {
  id: string; source: string; kind: 'bms-package' | 'mania-set'; title: string; artist: string | null; creator: string | null;
  cover_url: string | null; package: Package | null; charts: Chart[]; sid: number | null; detail_url: string; source_url: string | null;
}
export interface SourceStatus { source: string; status: string; message: string | null }
export interface CatalogSearch {
  ruleset: Ruleset; source: string; query: string; items: CatalogSet[]; page: number; limit: number;
  total: number | null; total_basis: string; next_cursor: number | null; has_more: boolean; source_status: SourceStatus[]; read_at: string;
}
export interface Candidate {
  source: string; package: Package; chart: Chart; charts: Chart[]; cover_url: string | null; source_url: string | null;
  identity: string; eligible: boolean; availability: string; reason: string | null;
}
export interface BmsDetail { ruleset: 'bms'; chart: Chart | null; candidates: Candidate[]; recommended_source: string | null; source_status: SourceStatus[]; read_at: string }
export interface ManiaDetail { ruleset: 'mania'; set: CatalogSet; mixed_modes: boolean; download: { full_url: string; novideo_url: string }; source_status: SourceStatus[]; read_at: string }
