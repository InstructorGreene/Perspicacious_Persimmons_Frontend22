import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import "./Login.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (item) => {
    console.log(item);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-box">
          <div>
            <input
              type="email"
              name="email"
              {...register("email")}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <div>
            <label></label>
            <Button variant="custom" className="login-button" type="submit">
              Login
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
