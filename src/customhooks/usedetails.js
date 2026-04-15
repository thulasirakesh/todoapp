import { useState } from "react";

export const useDetails = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const setUrUserName = (value) => setUserName(value);
  const setUrPassword = (value) => setPassword(value);
  const setUrShowPassword = (value) => setShowPassword(value);
  const setUrAge = (value) => setAge(value);
  const setUrError = (value) => seterror(value);

  return {
    userName,
    password,
    age,
    showPassword,
    error,
    setUrUserName,
    setUrPassword,
    setUrShowPassword,
    setUrAge,
    setUrError
  };
};
