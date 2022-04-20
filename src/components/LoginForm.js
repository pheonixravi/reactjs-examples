import React, { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  loggedIn: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        loggedIn: true,
        username: "",
        password: "",
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        error: "Invalid",
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    case "USERNAME":
      return {
        ...state,
        username: action.value,
      };

    case "PASSWORD":
      return {
        ...state,
        password: action.value,
      };
    default:
      return state;
  }
};

const LoginForm = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [error, setError] = useState(false);

  const [updatedState, dispatch] = useReducer(reducer, initialState);

  const handleForm = (e) => {
    e.preventDefault();

    if (
      updatedState.username === "steve" &&
      updatedState.password === "apple"
    ) {
      console.log("success");
      // setLoggedIn(true);
      // setUsername("");
      // setPassword("");
      dispatch({ type: "SUCCESS" });
    } else {
      console.log("error");
      // setError("invalid");
      dispatch({ type: "ERROR" });
    }
  };
  return (
    <>
      {updatedState.loggedIn ? (
        <div>
          <h2>you logged in successfully</h2>
          <button
            onClick={() => {
              //setLoggedIn(false);
              //setError(false);
              dispatch({ type: "LOGOUT" });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleForm} autoComplete="off">
          <p className="red">{updatedState.error}</p>
          <input
            value={updatedState.username}
            onChange={
              (e) => dispatch({ type: "USERNAME", value: e.target.value })
              //setUsername(e.target.value)
            }
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            value={updatedState.password}
            onChange={
              (e) => dispatch({ type: "PASSWORD", value: e.target.value })
              // setPassword(e.target.value)
            }
            type="text"
            placeholder="password"
            name="password"
          />
          <button>submit</button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
