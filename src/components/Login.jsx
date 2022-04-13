import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";
const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div
      style={{
        color: "green",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      Login Page<button onClick={() => setLoggedIn(true)}>Login Here</button>
      {loggedIn ? <h2>you are logged in</h2> : <h2>you are not logged in</h2>}
    </div>
  );
};

export default Login;
