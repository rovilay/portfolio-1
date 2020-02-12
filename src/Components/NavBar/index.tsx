import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';

import { BLOG_URL, NAV_LINKS } from '../../settings';
import './NavBar.scss';
import ThemeToggle from './ThemeToggle';

const NavLinks = () => {
  const renderLinks = NAV_LINKS.map(({ key, link }) => {
    return (
      <NavLink
        key={key}
        to={link}
        className='navbar-navlinks__link'
      >
        {key}
      </NavLink>
    );
  });

  return (
    <div className='navbar-navlinks'>
      {renderLinks}
      <a
        href={BLOG_URL}
        className='navbar-navlinks__link'
        rel='noopener noreferrer'
        target='_blank'
      >
        Blog
      </a>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className='navbar'>
      <Avatar />
      <NavLinks />
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
