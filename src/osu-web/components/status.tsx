import * as React from 'react';
import { Load } from '../../oms/api';
export function Status({ state, loading = '正在读取…' }: { state: Load<unknown>; loading?: string }) {
  if (state.loading) return <p className='player-status' role='status'>{loading}</p>;
  if (state.error) return <div className='player-status is-error' role='alert'><p>{state.error}</p><button className='button' onClick={state.reload}>重新读取</button></div>;
  return null;
}
