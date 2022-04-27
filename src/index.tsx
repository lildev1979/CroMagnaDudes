import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "react-image-lightbox/style.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { SnackbarProvider } from "./contexts/Snackbar";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
