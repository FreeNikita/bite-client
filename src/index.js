import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { theme } from 'configs/theme';
import { firebase } from 'libs/firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';

export const config = {
  apiKey: 'AIzaSyB2UhLwDAvXPMrqQ7dOcP61pMEBcaNyuxw',
  authDomain: 'bite-client.firebaseapp.com',
  databaseURL: 'https://bite-client-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bite-client',
  storageBucket: 'bite-client.appspot.com',
  messagingSenderId: '563745401443',
  appId: '1:563745401443:web:60822d7150e3bc3e2a6656',
  measurementId: 'G-WZ37H3VGDS',
};

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Загрузка...</div>}>
      <FirebaseAuthProvider firebase={firebase.firebase()} {...config}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </FirebaseAuthProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
