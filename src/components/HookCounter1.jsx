import React, { useEffect, useState } from "react";

const HookCounter1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `You clicked ${count} times`;
  }, []); //dependency array
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        useEffect - Click {count} times
      </button>
    </div>
  );
};

export default HookCounter1;
