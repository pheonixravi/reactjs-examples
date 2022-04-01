import { useState } from "react";
import "./App.css";
import LifeCycle from "./component/LifeCycle";
import Person from "./component/Person";
import PersonClass from "./component/PersonClass";

function App() {
  const [name, setName] = useState("Happy Coding!");

  const changeName = () => {
    setName("React JS is awesome");
  };
  return (
    <div className="App">
      {/* <LifeCycle /> */}
      {/* <Person name="steve jobs" />
      <PersonClass /> */}
      <p>Mesage is{name}</p>
      <button onClick={changeName}>Click here to change</button>
    </div>
  );
}

export default App;
