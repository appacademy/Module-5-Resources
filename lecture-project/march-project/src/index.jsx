import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import UserProvider, { UserContext } from "./context/UserContext";
import ApiProvider from "./context/ApiContext";
import configureStore from "./store";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

window.store = store

const Root = () => {
  return (
    <ReduxProvider store={store}>
      <ApiProvider>
        <BrowserRouter>
          <UserProvider>
            <App />
          </UserProvider>
        </BrowserRouter>
      </ApiProvider>
    </ReduxProvider>
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