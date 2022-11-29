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

  //booking through admin's dashboard
  const adminBooking = () => {
    if (props.role !== "admin") {
      return (
        <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="booking-form-box">
            <div>
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
            </div>

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
      );
    } else {
      return (
        <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="booking-form-box">
            <div>
              <input
                type="text"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                })}
                placeholder="First name"
              />
            </div>
            <div>
              <input
                type="text"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                })}
                placeholder="Last name"
              />
            </div>
            <div>
              <input
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
                placeholder="Email"
              />
            </div>
            <div>
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
            </div>

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
      );
    }
  };
  console.log(props.role);

  return <>{adminBooking()}</>;
}

export default StallBookingForm;
