import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import App from "./Components/App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App tab="home"/>
  </HashRouter>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
