import { useEffect, useRef, useState } from "react";
import "./App.css";
import AccessDOM from "./components/AccessDOM";
import StopWatch from "./components/StopWatch";

function App() {
  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);
  // console.log(count);

  // useEffect(() => {
  //   //console.log(count.current);
  //   count.current = count.current + 1;
  //   console.log(count.current);
  // });

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // );
  return (
    <div>
      {/* <AccessDOM /> */}
      <StopWatch />
    </div>
  );
}

export default App;
