import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
