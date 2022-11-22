import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register(props) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
  });
  const createUser = async (item) => {
    await props.client.addUser(
      item.firstName,
      item.lastName,
      item.email,
      item.mobileNumber,
      item.password
    );
    alert("Account created!");
    const res = await props.client.login(item.email, item.password);
    props.loggedIn(res.data.token);
    navigate("/booking");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(createUser)}>
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
              {...register("email", { required: true })}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="number"
              {...register("mobileNumber", { required: true })}
              placeholder="Mobile number"
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
