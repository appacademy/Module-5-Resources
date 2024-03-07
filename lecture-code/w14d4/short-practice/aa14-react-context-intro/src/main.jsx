import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HoroscopeContext } from './context/HoroscopeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HoroscopeContext.Provider value={{sign: "Leo"}} >
      <App />
    </HoroscopeContext.Provider>
  </React.StrictMode>
);
