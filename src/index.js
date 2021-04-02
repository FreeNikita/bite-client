import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'configs/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Загрузка...</div>}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
