import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

     
      
<input name="examp" ref={register({ required: true,pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
{errors.examp && <span>This field is axaaa</span>}
      <input name="exampleRequired" ref={register({required: true, pattern: /^-?(6|[6-9]\d*)$/ })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}