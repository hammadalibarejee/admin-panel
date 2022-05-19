import React from "react";
import { InputForm } from "../Input/Input";
import { useState } from "react";

export const Login = () => {

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    phonenumber: "",
  });
  console.log(loginInfo);
  return (
    <>

      <InputForm inputName={loginInfo}  />
      <InputForm inputName="password" />

    </>
  );
};
