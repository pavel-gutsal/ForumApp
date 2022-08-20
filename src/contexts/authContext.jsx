/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useReducer } from 'react';
import { projectAuth } from '../firebase/config';

export const authContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_ON_LOAD':
    case 'SIGNIN':
      return { ...state, user: action.payload };
    case 'SIGNOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((firebaseUser) => {
      dispatch({ type: 'AUTH_ON_LOAD', payload: firebaseUser });
    });

    return () => unsub();
  }, []);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      { children }
    </authContext.Provider>
  );
};
