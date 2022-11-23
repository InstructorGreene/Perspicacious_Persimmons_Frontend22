import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { mode: "onBlur" },
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      },
    }
  );

  const createUser = async (item) => {
    const checkUser = await props.client.getUserByEmail(item.email);
    console.log(checkUser.data.length);
    if (checkUser.data.length === 0) {
      if (item.password === item.confirmPassword) {
        await props.client.addUser(
          item.firstName,
          item.lastName,
          item.email,
          item.mobileNumber,
          item.password
        );
        alert("Account created, you may book the place for stall!");
        const res = await props.client.login(item.email, item.password);
        props.loggedIn(res.data.token);
        navigate("/booking");
      } else {
        alert("Password Confirmation should match the Password");
      }
    } else {
      console.log(item.email);
      alert("The user with this email already exists, log in please");
      navigate("/login");
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(createUser)}>
        <div className="form-box">
          <div className="input-wrap">
            <input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
                minLength: {
                  value: 2,
                  message: "Your name must be at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Your name must be 20 characters maximum",
                },
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: "Your name must contain only letters",
                },
              })}
              placeholder="First name"
            />
            {errors.firstName && (
              <div className="error">{errors.firstName.message}</div>
            )}
          </div>
          <div className="input-wrap">
            <input
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Last name must be 20 characters maximum",
                },
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: "Your last name must contain only letters",
                },
              })}
              placeholder="Last name"
            />
            {errors.lastName && (
              <div className="error">{errors.lastName.message}</div>
            )}
          </div>
          <div className="input-wrap">
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              placeholder="Email"
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <div className="input-wrap">
            <input
              type="number"
              {...register("mobileNumber", {
                required: {
                  value: true,
                  message: "Mobile number is required",
                },
                minLength: {
                  value: 10,
                  message:
                    "Mobile number is too short, it shoud be at least 10 characters",
                },
              })}
              placeholder="Mobile number"
            />
            {errors.mobileNumber && (
              <div className="error">{errors.mobileNumber.message}</div>
            )}
          </div>
          <div className="input-wrap">
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 2,
                  message:
                    "Password is too short, it shoud be at least 2 characters",
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <div className="error">{errors.password.message}a</div>
            )}
          </div>
          <div className="input-wrap">
            <input
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Password comfirmation is required",
                },
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword.message}</div>
            )}
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
