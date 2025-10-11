import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { inject } from '@vercel/analytics';

inject();
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
