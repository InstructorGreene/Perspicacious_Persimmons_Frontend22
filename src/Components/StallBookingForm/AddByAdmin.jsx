import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddByAdmin = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
  });

  const onSubmit = async (item) => {
    console.log(item);
    const checkUser = await props.client.getUserByEmail(item.email);
    if (checkUser.data.length === 0) {
      await props.client.addUser(
        item.firstName,
        item.lastName,
        item.email,
        item.mobileNumber,
        item.password,
        item.token
      );
      alert("Account created, you may book the place for stall!");

      navigate("/booking");
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
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
          </div>
          <div>
            <Button variant="custom" className="login-button" type="submit">
              Add User
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddByAdmin;
