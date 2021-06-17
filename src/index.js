import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebase, config } from 'libs/firebase';
import { GlobalLoading } from 'components/Loading';
import { theme } from 'configs/theme';

import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/user';
import App from './App';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Suspense fallback={<GlobalLoading />}>
      <FirebaseAuthProvider firebase={firebase.firebase} {...config}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <UserProvider>
              <App />
            </UserProvider>
          </BrowserRouter>
        </ThemeProvider>
      </FirebaseAuthProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
