import React from "react";
import { Controller, useForm } from "react-hook-form";
//import Select from "react-select/dist/declarations/src/Select";
import Select from "react-select";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    // mode: "onBlur",
  });

  const handleError = (errros) => {};

  const selectOptions = [
    { value: "student", label: "Student" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" },
  ];

  const handleRegistration = (data) => {
    console.log(data);
  };

  const showMessage = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    role: {
      required: "Role is required",
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", showMessage.name)}
          />
          <small className="text-danger" style={{ color: "red" }}>
            {errors?.name && errors.name.message}
          </small>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", showMessage.email)}
          />
        </div>
        <small className="text-danger" style={{ color: "red" }}>
          {errors?.email && errors.email.message}
        </small>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", showMessage.password)}
          />
        </div>
        <small className="text-danger" style={{ color: "red" }}>
          {errors?.password && errors.password.message}
        </small>
        <div>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            {...register("mobile", {
              required: "please provide your mobile number",
              pattern: {
                value: /^\d{10}$/,
                message: "please enter a valid mobile number",
              },
            })}
          />
          <p style={{ color: "red" }}>
            {errors?.mobile && errors.mobile.message}
          </p>
        </div>
        <div>
          <label>Your Role</label>
          <Controller
            name="role"
            control={control}
            defaultValue=""
            rules={showMessage.role}
            render={(field) => (
              <Select options={selectOptions} {...field} label="Text field" />
            )}
          />
          <small className="text-danger">
            {errors?.role && errors.role.message}
          </small>
        </div>

        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
