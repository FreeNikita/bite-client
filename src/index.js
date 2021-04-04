import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { theme } from 'configs/theme';
import { firebase, config } from 'libs/firebase';
import { GlobalLoading } from 'components/Loading';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';

console.log('process.env', process.env);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Suspense fallback={<GlobalLoading />}>
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
