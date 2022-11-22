import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data)
  }
  

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-box">
          <div>
            <input
              {...register("firstName", { required: true })}
              placeholder="First name"
            />
            {errors.firstName && errors.firstName.type === "required" && (<p className="errorMsg">First Name is required</p>)}
          </div>
          <div>
            <input
              {...register("lastName", { required: true, minLength: 2 })}
              placeholder="Last name"
            />
            {errors.lastName && errors.lastName.type === "required" && (<p className="errorMsg">Last Name is required</p>)}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
              placeholder="Email"
            />
            {errors.email && errors.email.type === "pattern" && (<p className ="errorMsg">Email is not valid</p>)}
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 2 })}
              placeholder="Password"
            />
            {errors.password && errors.password.type === "required" && (<p className ="errorMsg">Create Password with at least 2 characters</p>)}
          </div>
          <div>
            <input
              type="password"
              {...register("confirmPassword", { required: true, minLength: 2 })}
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
