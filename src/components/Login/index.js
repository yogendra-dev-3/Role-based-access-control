import React from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../common/InputField";
import "./login.css";
import { localStorageKeys } from "../../constants";
import { useHistory } from "react-router-dom";
import { routePath } from "../../routes/constant";

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode:"all",
    reValidateMode:"onSubmit"
  });

  const history=useHistory()

  const onSubmit=(data)=>{
    const {username,password}=data
    const userDetails={
      username,
      password
    }
    localStorage.setItem(localStorageKeys.loggedUser,JSON.stringify(userDetails))
    history.push(`${routePath.dashboard}/${routePath.home}`)
  }

  return (
    <div className="login-main">
      <form className="login-card" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <InputField
              label="Username"
              placeholder="Enter your username"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.username?.message}
            />
          )}
          rules={{
            required: "Please enter your username",
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.password?.message}
            />
          )}
          rules={{
            required: "Please enter your password",
          }}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
