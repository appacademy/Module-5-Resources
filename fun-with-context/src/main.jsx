import React from "react";
import ReactDOM from "react-dom/client";
import HoroscopeProvider from "./context/HoroscopeContext";
import AppRouter from "./router/AppRouter";
import "./index.css";

const Root = () => {
  return (
    <HoroscopeProvider>
      <AppRouter />
    </HoroscopeProvider>    
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
