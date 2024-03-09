import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CoffeeProvider from './context/CoffeeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </React.StrictMode>
);
