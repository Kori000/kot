import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import useKot, { KotProvider } from './context/useKot';
ReactDOM.createRoot(document.getElementById('root')).render(
  <KotProvider>
    <App />
  </KotProvider>
);
