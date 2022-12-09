import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

function AdminBooking() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (item) => {
    console.log(item);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "Email name is required",
              },
            })}
            placeholder="Email"
          />
          <input
            type="text"
            {...register("businessName", {
              required: {
                value: true,
                message: "Business name is required",
              },
            })}
            placeholder="Business name"
          />
          <input
            type="text"
            {...register("businessName", {
              required: {
                value: true,
                message: "Business name is required",
              },
            })}
            placeholder="Business name"
          />
          <div>
            <select
              {...register("category", {
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
          <div>
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

export default AdminBooking;
