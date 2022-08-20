import { useContext } from 'react';
import { authContext } from '../contexts/authContext';

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('useAuthContext must be inside an AuthContextProvider');
  }

  return context;
};
