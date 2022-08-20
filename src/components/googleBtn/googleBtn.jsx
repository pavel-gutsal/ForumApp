import React from 'react';
import { useSigninGoogle } from '../../hooks/useSigninGoogle';
// import { useSignOut } from './hooks/useSignOut';
import './googleBtn.scss';

export const GoogleBtn = () => {
  const { signInGoogle } = useSigninGoogle();
  // const { signOut } = useSignOut();

  return (
    <button
      className="googleBtn"
      type="button"
      onClick={signInGoogle}
    >
      <div className="googleBtn__container">
        <img
          className="googleBtn__img"
          src="./assets/google.svg"
          alt="google.svg"
        />
      </div>
      <h3 className="googleBtn__header">Sign in with Google</h3>
    </button>
  );
};
