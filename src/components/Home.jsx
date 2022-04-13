import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";
const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div
      style={{
        color: "blue",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      Home Page
      {loggedIn ? <h2>you are logged in</h2> : <h2>you are not logged in</h2>}
    </div>
  );
};

export default Home;
