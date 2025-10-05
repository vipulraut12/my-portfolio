import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Needed for React Router
import App from "./App";
import "./index.css";

// Create the React app and mount it on the #root div from index.html
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* BrowserRouter enables React Router for the whole app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
