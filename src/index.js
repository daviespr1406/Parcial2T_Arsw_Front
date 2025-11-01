import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));
import "./styles.css";
import React from 'react';

import App from "./App";
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);