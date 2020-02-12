import * as React from 'react';
import { NavLink } from 'react-router-dom';
import avatarimage from '../../assets/ogooluwa-1.jpg';

const Avatar: React.FC = () => {
  return (
    <div className='navbar-avatar'>
      <NavLink to='/'>
        <img src={avatarimage} alt='user avatar' />
      </NavLink>
    </div>
  );
};

export default Avatar;
