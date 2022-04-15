import React, { useRef } from "react";

const AccessDOM = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  //Add a "ref" attribute to an element to access it directly in the DOM.
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default AccessDOM;
