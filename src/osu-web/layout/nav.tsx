// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// JSX port of resources/views/layout/_nav2.blade.php and app/helpers.php::nav_links, pin 2c596022a1.
import * as React from 'react';
import { profileUrl, useAccount } from '../../oms/api';
const links = [['/', '首页'], ['/beatmapsets/', '谱面'], ['/rankings/', '玩家榜'], ['/community/', '社区'], ['/download/', '客户端下载'], ['/help/', '帮助']];
export function Nav() {
  const { user } = useAccount();
  return <div className='shell nav2 header-inner'>
    <a className='brand nav2__col nav2__col--logo' href='/' aria-label='OMS 首页'><span className='nav2__logo-link'><img className='nav2__logo' src='/portal/favicon.svg' alt='' width='42' height='42' /></span><span className='brand-word'>OMS</span></a>
    <nav className='nav2__colgroup nav2__colgroup--menu site-nav' aria-label='主要导航'>{links.map(([href, name]) => {
      const active = href === '/' ? location.pathname === '/' : location.pathname.startsWith(href) || (href === '/beatmapsets/' && location.pathname === '/beatmaps/');
      return <div key={href} className='nav2__col nav2__col--menu'><a className={'nav2__menu-link-main' + (active ? ' nav2__menu-link-main--active' : '')} aria-current={active ? 'page' : undefined} href={href}>{name}{active && <span className='nav2__menu-link-bar' aria-hidden='true' />}</a></div>;
    })}</nav>
    <details className='player-account-menu'><summary>{user ? user.username : '账号'}</summary><div className='simple-menu'>
      {user && <a href={profileUrl(user.id)} className='simple-menu__item'>我的个人页</a>}
      <a id='site-account' href='/account/' className='simple-menu__item'>{user ? '账号与退出' : '登录 / 注册'}</a>
      {user && <><a href='/ir/#history' className='simple-menu__item'>本人记录</a><a href='/ir/#keys' className='simple-menu__item'>播放器密钥</a></>}
      <a href='/ir/' className='simple-menu__item'>IR 与来源说明</a>
    </div></details>
  </div>;
}
