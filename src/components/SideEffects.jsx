import React, { useEffect, useState } from "react";

const SideEffects = () => {
  const [message, setMessage] = useState("Hi there, how are you?");
  // change the message a second after the component has mounted.
  useEffect(() => {
    console.log("trigger use effect hook");

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000);
  }, []); //dependency arguments-by passing [] letting React know that your useEffect function doesn’t depend on any values from props or state.

  return <h1>{message}</h1>;
};

export default SideEffects;
