import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./StallBookingForm.css";

const AddStall = (props) => {
  const { register, handleSubmit } = useForm();
  const formForCheckUser = () => {
    return (
      <div>
        <form onSubmit={handleSubmit(props.checkUserDetails)}>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
              },
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
            placeholder="Check user by email"
          />
          <Button className="add-button" variant="custom" type="submit">
            Check
          </Button>
        </form>
      </div>
    );
  };

  return <>{formForCheckUser()}</>;
};

export default AddStall;
