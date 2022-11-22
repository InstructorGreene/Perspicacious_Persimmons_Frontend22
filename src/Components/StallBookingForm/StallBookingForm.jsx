import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./StallBookingForm.css";

function StallBookingForm(props) {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (item) => {
    props.client.addBooking(
      item.businessName,
      item.mobileNumber,
      item.stallType,
      item.comments,
      item.date
    );
    console.log(item);
  };

  return (
    <>
      <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
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
          <div>
            <input
              type="Date"
              {...register("date", { required: true })}
              placeholder="Date"
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
