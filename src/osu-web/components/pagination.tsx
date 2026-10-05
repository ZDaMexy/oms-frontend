// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// JSX port of resources/views/objects/_pagination_v2.blade.php (fixed 2c596022a1).
import * as React from 'react';
export function Pagination({ page, limit, total, onPage }: { page: number; limit: number; total: number; onPage(page: number): void }) {
  const pages = Math.max(1, Math.ceil(total / limit));
  return <nav className='pagination-v2' aria-label='分页'><button className='pagination-v2__link button button-quiet' disabled={page <= 1} onClick={() => onPage(page - 1)}>上一页</button><span className='pagination-v2__link pagination-v2__link--active'>{page} / {pages}</span><button className='pagination-v2__link button button-quiet' disabled={page >= pages} onClick={() => onPage(page + 1)}>下一页</button></nav>;
}
