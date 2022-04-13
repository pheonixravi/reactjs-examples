import { useEffect, useState } from "react";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import DataFetch from "./components/DataFetch";
import FetchData from "./components/FetchData";
import HookCounter1 from "./components/HookCounter1";

function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  /*

  */

  return (
    <div className="App">
      {advice}
      {/* <ClassCounterOne /> */}
      {/* <HookCounter1 /> */}

      {/* <FetchData /> */}
      <DataFetch />
    </div>
  );
}

export default App;
