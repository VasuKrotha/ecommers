import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context";
import { ShoppingCartProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <FilterProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </FilterProvider>
  </Router>
);
