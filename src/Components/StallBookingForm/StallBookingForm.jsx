import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./StallBookingForm.css";

function StallBookingForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      businessName: "",
      mobileNumber: "",
      stallType: "",
      comments: "",
      status: "",
      date: "",
    },
  });

  return (
    <>
      <form className="booking-container" onSubmit={handleSubmit(console.log)}>
        <div className="booking-form-box">
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("businessName", { required: true })}
              placeholder="Business Name"
            />
          </div>
          <div>
            <input
              type="number"
              {...register("mobileNumber", { required: true })}
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("stallType", { required: true })}
              placeholder="Stall Type"
            />
          </div>
          <div>
            <input
              type="textarea"
              {...register("comments", { required: true })}
              placeholder="Comments"
            />
          </div>
          <div>
            <input
              type="Date"
              {...register("date", { required: true })}
              placeholder="Date"
            />
          </div>
          <Button className="add-button" variant="custom">
            Add Booking
          </Button>
        </div>
      </form>
    </>
  );
}

export default StallBookingForm;
