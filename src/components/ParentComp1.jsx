import React, { useState } from "react";

const ParentComp1 = () => {
  const [message, setMessage] = useState("Happy Coding!");
  return (
    <>
      <h1>{`Mesasge is ${message}!`}</h1>
      <Comp2 message={message} />
    </>
  );
};

const Comp2 = ({ message }) => {
  console.log({ message });
  return (
    <>
      <h1>Component 2</h1>
      <Comp3 msg1={message} />
    </>
  );
};

const Comp3 = ({ msg1 }) => {
  return (
    <>
      <h1>Component 3</h1>
      <Comp4 message={msg1} />
    </>
  );
};

const Comp4 = ({ message }) => {
  return (
    <>
      <h1>Component 4</h1>
      <Comp5 message={message} />
    </>
  );
};

const Comp5 = ({ message }) => {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Received ${message} again!`}</h2>
    </>
  );
};

export default ParentComp1;
