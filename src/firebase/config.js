import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCuOSUt3SfLpM4ATB3XIOVLle2JT3XIDkk',
  authDomain: 'forum-d4353.firebaseapp.com',
  projectId: 'forum-d4353',
  storageBucket: 'forum-d4353.appspot.com',
  messagingSenderId: '693828839949',
  appId: '1:693828839949:web:feaa66f379f093995f8344',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
