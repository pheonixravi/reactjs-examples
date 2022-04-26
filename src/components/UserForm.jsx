import React, { useState } from "react";
import useInput from "../customhooks/useInput";

const UserForm = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleForm = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...bindFirstName}
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...bindLastName}
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
