import React from "react";
import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import "./assets/css/index.css";
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={routes} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
