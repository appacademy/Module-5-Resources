import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux'

import CatsProvider from './context/CatsProvider';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore()

const Root = () => (
  <ReduxProvider store={store}>
    <CatsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CatsProvider>
  </ReduxProvider>
)

root.render(
  // <React.StrictMode>
    <Root />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
