import React from 'react';
import ReactDOM from 'react-dom/client';
import 'rrweb-player/dist/style.css';
import tearsJsInit from 'tears-js';
import ErrorPage from './ErrorPage';
import App from './App';
import './index.css';

tearsJsInit((err, events) => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ErrorPage events={events} error={err} />
  );
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


