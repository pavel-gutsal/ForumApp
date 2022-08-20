import React from 'react';
import { LogoutBtn } from '../logoutBtn/logoutBtn';
import { GoogleBtn } from '../googleBtn/googleBtn';
import { useAuthContext } from '../../hooks/useAuthContext';
import './navBar.scss';

export const NavBar = () => {
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">Forum App</h1>
        {
          user
            ? (<LogoutBtn />)
            : (<GoogleBtn />)
        }
      </div>
    </div>
  );
};
