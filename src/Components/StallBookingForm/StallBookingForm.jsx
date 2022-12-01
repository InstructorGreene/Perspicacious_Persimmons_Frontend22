import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./StallBookingForm.css";

function StallBookingForm(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (item) => {
    props.client.addBooking(
      item.businessName,
      item.stallType,
      item.comments,
      item.bstatus,
      item.pitch,
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
          <div className="labels">
            <label>Business name</label>
            <input
              type="text"
              {...register("businessName", {
                required: {
                  value: true,
                  message: "Business name is required",
                },
              })}
            />
          </div>

          <div className="labels">
            <label>Stall type</label>
            <select
              {...register("stallType", {
                required: {
                  value: true,
                  message: "Choose the category of the stall",
                },
              })}
            >
              <option value="">Select...</option>

              <option value="craft">Craft</option>

              <option value="donation">Donation</option>

              <option value="food">Food Stall</option>

              <option value="commercial">Commercial Items</option>
            </select>
          </div>
          <div className="labels">
            <label>Comments</label>
            <textarea
              type="textarea"
              className="booking-textarea"
              rows="6"
              {...register("comments", {
                required: {
                  value: true,
                  message:
                    "Tell us what you will be selling / promoting at the carnival ",
                },
              })}
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
