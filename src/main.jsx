import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RoutingContextProvider } from "./contexts/RoutingContext";
// import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoutingContextProvider>
      <App />
    </RoutingContextProvider>
  </React.StrictMode>
);
