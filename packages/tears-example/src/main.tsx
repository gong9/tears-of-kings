import React from 'react';
import ReactDOM from 'react-dom/client';
import start from 'tears-js';
import App from './App';
import './index.css';

start((a) => {
  console.log(a);
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
