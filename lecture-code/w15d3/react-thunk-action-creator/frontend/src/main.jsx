import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';
//!!START SILENT
import * as articleActions from './store/articleReducer';
//!!END

const store = configureStore();

//!!START SILENT
if (import.meta.env.MODE !== 'production') {
  window.store = store;
  window.articleActions = articleActions;
}
//!!END

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
