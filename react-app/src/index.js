import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";

import NiceProvider from "./context/NiceContext";
import App from "./App";
import "./index.css";
import configureStore from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore();

window.store = store;

const Root = () => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <NiceProvider>
          <App />
        </NiceProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};

root.render(
  // <React.StrictMode>
  <Root />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
