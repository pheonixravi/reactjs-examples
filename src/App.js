import { useState } from "react";
import "./App.css";
import { Application } from "./components/Application";
import Home from "./components/Home";
import Login from "./components/Login";
import ParentComp1 from "./components/ParentComp1";
import Profile from "./components/Profile";
import { LoginContext } from "./Helper/Context";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* <ParentComp1 /> */}

      {/* <Application /> */}
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Home />
        <Login />
        <Profile />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
