import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';

import useKot, { KotProvider } from './context/useKot';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
