import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h2>This is our Profile page for {username}</h2>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        Go to About us page
      </button>
    </div>
  );
};

export default Profile;
