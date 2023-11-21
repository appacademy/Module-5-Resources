import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import "./index.css";
import ApodContextProvider from "./context/ApodContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApodContextProvider>
      <AppRouter />
    </ApodContextProvider>
  </React.StrictMode>
);
