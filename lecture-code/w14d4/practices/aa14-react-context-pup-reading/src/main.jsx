import React from 'react';
import ReactDOM from 'react-dom/client';
import { PupProvider } from './context/PupContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PupProvider>
      <App />
    </PupProvider>
  </React.StrictMode>
);
