import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomInput } from "./CustomInput";

const UserProfile = () => {
  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useState("");

  const { controller, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      email: "",
    },
  });
  //   const onSubmit = async () => {
  //     await axios
  //       .post("/user", { userName, email })
  //       .then(() => console.log("Success"))
  //       .catch((e) => console.error(e));
  //   };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* <CustomInput
        type="text"
        label="User Name"
        name="userName"
        value={userName}
        onChange={setUserName}
      /> */}
      <CustomInput
        type="text"
        label="User Name"
        name="userName"
        controller={controller}
        rules={{ required: true }} /** passing in the validation rule**/
      />
      <CustomInput
        type="text"
        label="Email"
        name="email"
        //value={email}
        //onChange={setEmail}
        controller={controller}
        rules={{ required: true }}
      />
      {/* <button onClick={onSubmit}>Submit</button> */}
      <button onClick={handleSubmit((data) => onSubmit(data))}>Submit</button>
    </div>
  );
};

export default UserProfile;
