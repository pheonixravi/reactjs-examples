import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//let's define yup schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required("Last name is mandatory"),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleError = (errros) => {};
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm, handleError)}>
          <input
            placeholder="First Name..."
            type="text"
            name="firstName"
            //ref={register("firstName")}
            {...register("firstName")}
          />
          <p> {errors?.firstName && errors.firstName.message} </p>
          <input
            placeholder="Last Name..."
            type="text"
            name="lastName"
            {...register("lastName")}
          />
          <p> {errors.lastName?.message} </p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p> {errors.email?.message} </p>

          <input
            type="text"
            name="age"
            placeholder="Age..."
            // ref={register("email")}
            {...register("age")}
          />
          <p> {errors.age?.message} </p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
