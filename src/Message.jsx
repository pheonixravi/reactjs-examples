import React from "react";

const stylingObject = {
  div: {
    color: "red",
    border: "1px solid red",
  },
  input: {
    margin: "2px",
    padding: "5px",
  },
};
const Message = () => {
  return (
    <div style={stylingObject.div}>
      <input style={stylingObject.input} type="text" />
    </div>
  );
};

export default Message;
