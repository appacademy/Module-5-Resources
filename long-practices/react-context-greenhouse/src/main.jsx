import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeProvider from './context/ThemeContext';
//!!START SILENT
import ClimateProvider from './context/ClimateContext';
//!!END

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*!!START SILENT */}
    <ClimateProvider>
    {/*!!END */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    {/*!!START SILENT */}
    </ClimateProvider>
    {/*!!END */}
  </React.StrictMode>
);
