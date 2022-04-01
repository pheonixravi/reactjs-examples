import React, { Component } from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "ravi@gmail.com" };
    this.changeState = this.changeState.bind(this);
  }

  render() {
    return (
      <div>
        <h1>ReactJS component's Lifecycle</h1>
        <h3>Email {this.state.email}</h3>
        <button onClick={this.changeState}>Click Here!</button>
      </div>
    );
  }
  changeState() {
    this.setState({ email: "ravikumar@gmail.com" });
  }
  componentWillMount() {
    console.log("Component Will MOUNT!");
  }
  componentDidMount() {
    console.log("Component Did MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component Will Recieve Props!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component Will UNMOUNT!");
  }
}
export default LifeCycle;
