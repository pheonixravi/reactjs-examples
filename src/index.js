import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TestApp from "./component/hoc/TestApp";
import ClickCounter from "./component/hoc/ClickCounter";
import HoverCounter from "./component/hoc/HoverCounter";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TestApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
