import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Finanzas } from "./Finanzas";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <BrowserRouter>
          <Finanzas/>
        </BrowserRouter>
  </React.StrictMode>
);