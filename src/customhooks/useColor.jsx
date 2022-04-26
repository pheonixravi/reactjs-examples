import { useState } from "react";

const useColor = () => {
  const [color, setColor] = useState("");

  const changeColor = () => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
  };
  return { color, changeColor };
};

export default useColor;
