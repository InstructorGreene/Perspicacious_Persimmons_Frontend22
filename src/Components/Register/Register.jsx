import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(console.log)}>
        <div className="form-box">
          <div>
            <input
              {...register("firstName", { required: true })}
              placeholder="First name"
            />
          </div>
          <div>
            <input
              {...register("lastName", { minLength: 2 })}
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              type="email"
              {...register("email", { minLength: 2 })}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="password"
              {...register("password", { minLength: 2 })}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              {...register("confirmPassword", { minLength: 2 })}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <Button variant="custom" className="login-button" type="submit">
              Register
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
