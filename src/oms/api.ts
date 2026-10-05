import * as React from 'react';
import { Ruleset, User } from './types';

export const sourceNames: Record<string, string> = { oms: 'OMS', beatoraja: 'beatoraja', lr2oraja: 'LR2oraja', lr2oraja_ed: 'LR2oraja Endless Dream', openlr2: 'OpenLR2', ginger: 'Ginger Rush', '616': '616 / Alvorna', sayobot: 'Sayobot' };
export const keymodes = (ruleset: Ruleset) => ruleset === 'bms'
  ? ['bms_5k', 'bms_7k', 'bms_9k', 'pms_9k', 'bms_14k']
  : Array.from({ length: 18 }, (_, i) => `mania_${i + 1}k`);
export function keyLabel(key: string) { return key.replace('mania_', '').replace('bms_', 'BMS ').replace('pms_', 'PMS ').toUpperCase(); }
export function profileUrl(id: number | string) { return `/users/?id=${id}`; }
export function chartUrl(md5: string, ruleset: Ruleset, extra?: Record<string, string>) {
  return '/beatmaps/?' + new URLSearchParams({ md5, ruleset, ...extra });
}
export function irUrl(md5: string) { return '/ir/?md5=' + encodeURIComponent(md5); }
export function formatInteger(value: string | number) {
  return BigInt(value).toLocaleString('zh-CN');
}
export function date(value: string | null) { return value === null ? '日期未提供' : new Intl.DateTimeFormat('zh-CN', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)); }
export function useAccount() {
  const [user, setUser] = React.useState<User | null>(window.OmsSite.user);
  const [epoch, setEpoch] = React.useState(window.OmsSite.revision);
  React.useEffect(() => {
    const changed = () => { setUser(window.OmsSite.user); setEpoch(window.OmsSite.revision); };
    window.addEventListener('oms:account', changed);
    void window.OmsSite.ready.then(changed);
    return () => window.removeEventListener('oms:account', changed);
  }, []);
  return { user, epoch };
}
export interface Load<T> { data: T | null; loading: boolean; error: string | null; reload(): void }
export function useApi<T>(path: string | null, epoch = 0, apiRoot = '/api/ir/v1'): Load<T> {
  const [state, setState] = React.useState<{ key: string; data: T | null; loading: boolean; error: string | null }>({ key: '', data: null, loading: path !== null, error: null });
  const [attempt, setAttempt] = React.useState(0);
  const key = JSON.stringify([path, epoch, attempt, apiRoot]);
  React.useEffect(() => {
    const abort = new AbortController();
    let live = true;
    setState({ key, data: null, loading: path !== null, error: null });
    if (path !== null) void (async () => {
      await window.OmsSite.ready;
      if (!live) return;
      try {
        const data = await window.OmsSite.request<T>(path, { signal: abort.signal, apiRoot });
        if (live) setState({ key, data, loading: false, error: null });
      } catch (error) {
        if (!live || abort.signal.aborted) return;
        const message = error instanceof Error && 'status' in error && error.status === 404 ? error.message : window.OmsSite.errorText(error);
        setState({ key, data: null, loading: false, error: message });
      }
    })();
    return () => { live = false; abort.abort(); };
  }, [path, epoch, attempt, apiRoot]);
  return { ...(state.key === key ? state : { data: null, loading: path !== null, error: null }), reload: () => setAttempt(v => v + 1) };
}
export function useQuery() {
  const [query, setQuery] = React.useState(new URLSearchParams(location.search));
  React.useEffect(() => {
    const changed = () => setQuery(new URLSearchParams(location.search));
    window.addEventListener('popstate', changed);
    return () => window.removeEventListener('popstate', changed);
  }, []);
  const update = (values: Record<string, string | null>) => {
    const next = new URLSearchParams(query);
    for (const [key, value] of Object.entries(values)) value === null ? next.delete(key) : next.set(key, value);
    history.pushState(null, '', location.pathname + '?' + next + location.hash);
    setQuery(next);
  };
  return { query, update };
}
