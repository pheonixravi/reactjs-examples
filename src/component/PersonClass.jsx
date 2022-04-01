import React, { Component } from "react";

class PersonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "scott",
    };
  }

  render() {
    return (
      <div>
        <h2>Hello, {this.state.name}</h2>
      </div>
    );
  }
}

export default PersonClass;
