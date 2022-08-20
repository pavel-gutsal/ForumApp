import { useAuthContext } from './useAuthContext';
import { projectAuth } from '../firebase/config';

export const useSignOut = () => {
  const { dispatch } = useAuthContext();

  const signOut = async () => {
    try {
      await projectAuth.signOut();
      dispatch({ type: 'SIGNOUT' });
    } catch (err) {
      console.warn(err);
    }
  };

  return { signOut };
};
