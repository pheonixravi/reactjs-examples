import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";
const Profile = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div
      style={{
        color: "red",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      Profile Page
      {loggedIn ? <h2>you are logged in</h2> : <h2>you are not logged in</h2>}
    </div>
  );
};

export default Profile;
