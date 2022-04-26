import { useState } from "react";

//let's encapsulate the controlled compoent behaviour for input elements ie. binding he value and onChange attribute.
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default useInput;
