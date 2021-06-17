import FIREBASE from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET_ID,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
  NODE_ENV,
} = process.env;

if (NODE_ENV !== 'development') {
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

const googleAuthProvider = new FIREBASE.auth.GoogleAuthProvider();

export const firebase = {
  firebase: FIREBASE,
  // analytics: () => firebase.analytics(),
  auth: () => FIREBASE.auth(),
  firestore: () => FIREBASE.firestore(),
  storage: () => FIREBASE.storage(),
  signOut: () => FIREBASE.auth().signOut(),
  loginGoogle: () => FIREBASE.auth().signInWithPopup(googleAuthProvider),
};

export const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET_ID,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};
