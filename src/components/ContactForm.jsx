import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, formState, handleSubmit } = useForm();
  //console.log(register);
  const handleSubmitForm = () => {
    console.log("hello");
  };

  //console.log(formState.errors);
  return (
    <div>
      <h2>Contact Form Page</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <p style={{ color: "red" }}>
          {formState.errors.name && formState.errors.name.message}
        </p>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "name must be of atleast 3 characters",
              },
            })}
          />
        </div>
        <div>
          <p style={{ color: "red" }}>
            {formState.errors.mobile && formState.errors.mobile.message}
          </p>
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            {...register("mobile", {
              required: "please provide your mobile number",
              pattern: {
                value: /^\d{10}$/,
                message: "please enter a valid mobile number",
              },
            })}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
