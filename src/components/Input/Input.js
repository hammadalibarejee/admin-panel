import React from "react";
import { useForm } from "react-hook-form";

export const InputForm = ({inputName,}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  console.log(watch("example")); 
  return (
    <div className="main">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register(`${inputName}`, { required: true })} id="chk" />
        {errors && <span>{inputName} is required</span>}


        {/* <button type="submit">Login</button> */}
      </form>
    </div>
  );
};
