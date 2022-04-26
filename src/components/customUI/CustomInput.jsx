import React from "react";
import { useController } from "react-hook-form";

export const CustomInput = ({
  name,
  type = "text",
  label: label,
  disabled = false,
  //value,
  //onChange,
  controller,
  rules /**A way to set input validation**/,
}) => {
  const { field } = useController({
    name /**This is the unique identifier used by React Hook Form**/,
    rules,
    //control,
  });
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        //value={value}
        // onChange={(e) => onChange(e.target.value)}
        {...field} /**this allows React Hook Form to handle the value, onChange and other form functionalities**/
        type={type}
        disabled={disabled}
      />
    </>
  );
};
