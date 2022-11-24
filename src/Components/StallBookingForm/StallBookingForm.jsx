import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./StallBookingForm.css";

function StallBookingForm(props) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (item) => {
    console.log(item);
    props.client.addBooking(
      item.businessName,
      item.mobileNumber,
      item.stallType,
      item.comments,
      item.status,
      item.date,
      props.userid
    );

    console.log(props.role, props.userid);
    navigate("/dashboard");
  };

  return (
    <>
      <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="booking-form-box">
          <div>
            <input
              type="text"
              {...register("businessName", { required: true })}
              placeholder="Business Name"
            />
          </div>

          <div>
            <select {...register("category", { required: true })}>
              <option value="">Select...</option>

              <option value="craft">Craft</option>

              <option value="donation">Donation</option>

              <option value="food">Food Stall</option>

              <option value="commercial">Commercial Items</option>
            </select>
          </div>
          <div>
            <input
              type="textarea"
              {...register("comments", { required: true })}
              placeholder="Comments"
            />
          </div>

          <Button className="add-button" variant="custom" type="submit">
            Add Booking
          </Button>
        </div>
      </form>
    </>
  );
}

export default StallBookingForm;
