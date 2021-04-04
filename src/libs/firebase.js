import FIREBASE from 'firebase/app';
import 'firebase/auth';

const googleAuthProvider = new FIREBASE.auth.GoogleAuthProvider();

export const firebase = {
  firebase: () => FIREBASE,
  analytics: () => firebase.analytics(),
  auth: () => FIREBASE.auth(),
  signOut: () => FIREBASE.auth().signOut(),
  loginGoogle: () => FIREBASE.auth().signInWithPopup(googleAuthProvider),
};
