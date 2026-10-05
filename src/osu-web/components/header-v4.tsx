// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later; see /credits/.
// Fork of resources/js/components/header-v4.tsx at 2c596022a1345fbed288978e7fa5304df0359f50.
// OMS: explicit titles, no core/Turbo, ppy routes, or missing cover.
import * as React from 'react';
export interface Link { url: string; title: string; active?: boolean }
export function HeaderV4({ title, theme, links = [], children }: { title: string; theme: string; links?: Link[]; children?: React.ReactNode }) {
  return <div className={`header-v4 header-v4--${theme}`}>
    <div className='header-v4__container header-v4__container--main'>
      <div className='header-v4__bg-container'><div className='header-v4__bg' /></div>
      <div className='header-v4__content'><div className='header-v4__row header-v4__row--title'><h1 className='header-v4__title'>{title}</h1></div>{children}</div>
    </div>
    {links.length > 0 && <div className='header-v4__container'><div className='header-v4__content'><nav className='header-v4__row header-v4__row--bar' aria-label='本页导航'>
      <ul className='header-nav-v4 header-nav-v4--list'>{links.map(link => <li key={link.url} className='header-nav-v4__item'><a className={'header-nav-v4__link' + (link.active ? ' header-nav-v4__link--active' : '')} aria-current={link.active ? 'page' : undefined} href={link.url}>{link.title}</a></li>)}</ul>
    </nav></div></div>}
  </div>;
}
