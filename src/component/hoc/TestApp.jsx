import React, { Component } from "react";
//import "../App.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class TestApp extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default TestApp;
