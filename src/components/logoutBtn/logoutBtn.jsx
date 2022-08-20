import React from 'react';
import './logoutBtn.scss';
import { useSignOut } from '../../hooks/useSignOut';

export const LogoutBtn = () => {
  const { signOut } = useSignOut();

  return (
    <button
      className="logoutBtn"
      type="button"
      onClick={signOut}
    >
      <div className="logoutBtn__container" />
      <img
        className="logoutBtn__img"
        src="./assets/logout.svg"
        alt="google.svg"
      />
      <h3 className="logoutBtn__header">Log Out</h3>
    </button>
  );
};
