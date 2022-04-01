import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";
class HoverCounter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }
  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    //const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hoverd {count} times</h2>
      </div>
    );
  }
}
//inseted of exporting HoverCounter comp,we are exporting HOCs.
export default UpdatedComponent(HoverCounter);
