import firebase from 'firebase/app';
import { useAuthContext } from './useAuthContext';
import 'firebase/auth';

export const useSigninGoogle = () => {
  const { dispatch } = useAuthContext();

  const signInGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await firebase.auth().signInWithPopup(provider);
      if (res.user) {
        dispatch({ type: 'SIGNIN', payload: res.user });
      } else {
        throw new Error('failed to sign in');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return { signInGoogle };
};
