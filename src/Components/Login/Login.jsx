import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import "./Login.css";

function Login(props) {
  const [disabled, changeDisabled] = useState(false);

  const navigateTo = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    changeDisabled(true);
    try {
      const res = await props.client.login(
        e.target.email.value,
        e.target.password.value
      );

      props.loggedIn(res.data.token);
      navigateTo("/booking");
    } catch (error) {
      alert("an error occurred, please try again");
    }
    changeDisabled(false);
  };

  return (
    <form className="form-container" onSubmit={(e) => submitHandler(e)}>
      <div className="login-form-box">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="login-input"
          disabled={disabled}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input"
          disabled={disabled}
        />

        <button type="submit" className="login-button btn" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
}

export default Login;

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (item) => {
//     console.log(item);
//   };

//   return (
//     <>
//       <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
//         <div className="login-form-box">
//           <div>
//             <input
//               type="email"
//               name="email"
//               {...register("email")}
//               placeholder="Email"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               {...register("password")}
//               placeholder="Password"
//             />
//           </div>
//           <div>
//             <label></label>
//             <Button variant="custom" className="login-button" type="submit">
//               Login
//             </Button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Login;
