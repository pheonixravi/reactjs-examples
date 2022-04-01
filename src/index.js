import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SideEffects from "./components/SideEffects";
import FilterData from "./components/FilterData";
import FetchData from "./components/FetchData";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SideEffects /> */}

    {/* <FilterData /> */}
    <FetchData />
  </React.StrictMode>,
  document.getElementById("root")
);
