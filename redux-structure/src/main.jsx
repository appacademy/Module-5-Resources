import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "redux";
import App from "./App.jsx";
import configureStore from "./redux/store.js";
import "./index.css";

const store = configureStore(); // {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
