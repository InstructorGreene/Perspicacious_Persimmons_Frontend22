import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async (item) => {
    console.log(item);
    const res = await props.client.login(item.email, item.password);
    props.loggedIn(res.data.token);
    navigate("/booking");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-box">
          <div>
            <input
              type="email"
              name="email"
              {...register("email", { required: "Please enter valid email." })}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "an error occured, Please try again",
              })}
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
