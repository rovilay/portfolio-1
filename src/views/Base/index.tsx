import * as React from 'react';
import { NavLink } from 'react-router-dom';

import avatarimage from '../../assets/ogooluwa-2.jpg';

import { ENGINEER_NAME, SOCIAL_LINKS, GET_TO_KNOW_ME } from '../../settings';
import './Base.scss';

const Base: React.FC = () => {
  const socialLinks = SOCIAL_LINKS.map(({ link, icon, alt, id }) => {
    return (
      <a
        key={id}
        href={link}
        type='button'
        rel='noopener noreferrer'
        target='_blank'
      >
        <img
          className='github-icon'
          src={icon}
          alt={alt}
        />
      </a>
    );
  });

  return (
    <div className='base'>
      <div className='base-data'>
        <div className='base-avatar'>
          <img src={avatarimage} alt='Ogooluwa Akinola' />
        </div>
        <div className='base-info'>
          <p className='base-info__name'>Hi! I am {ENGINEER_NAME}.</p>
          <p className='base-info__detail'>{GET_TO_KNOW_ME}</p>
          <div className='base-cta'>
            <NavLink
              to='/projects'
              className='btn btn-primary'
            >
              Projects
            </NavLink>
            <i className='material-icons-outlined md-36'>arrow_right</i>
          </div>
        </div>
      </div>
      <div className='base-social'>
        {socialLinks}
      </div>
    </div>
  );
};

export default Base;
