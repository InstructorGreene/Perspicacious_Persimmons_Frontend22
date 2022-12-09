import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import AddStall from "./AddStall";
import "./StallBookingForm.css";

const StallBookingForm = (props) => {
  const navigate = useNavigate();
  const [checkUserID, setCheckUserID] = useState();
  const [checkUserEmail, setCheckUserEmail] = useState();

  //react hook form
  const {
    label,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  //handle submit when the role is admin and stall holder
  const onSubmit = async (item) => {
    console.log(item);
    if (props.role === "admin") {
      props.client.addBooking(
        item.businessName,
        item.stallType,
        item.comments,
        item.bstatus,
        item.pitch,
        item.date,
        item.userid
      );
    } else {
      props.client.addBooking(
        item.businessName,
        item.stallType,
        item.comments,
        item.bstatus,
        item.pitch,
        item.date,
        props.userid
      );
    }
    console.log(props.role, props.userid);
    navigate("/dashboard");
  };

  //check handleSubmit user details if the user exist
  const checkUserDetails = async (item) => {
    const checkEmail = await props.client.getUserByEmail(item.email);

    console.log(checkEmail.data);
    setCheckUserID(checkEmail.data._id);
    setCheckUserEmail(checkEmail.data.email);

    if (checkEmail.data.length === 0) {
      alert("No Email found");
    } else {
      alert("The user with this email already exists");
    }
  };

  useEffect(() => {}, [checkUserID, checkUserEmail]);

  //booking through admin's dashboard
  const adminBooking = () => {
    if (props.role !== "admin") {
      return (
        <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="booking-form-box">
            <div className="input-wrap">
              <label>Business name</label>
              <div>
                <input
                  className="booking-input"
                  type="text"
                  {...register("businessName", {
                    required: {
                      value: true,
                      message: "Business name is required",
                    },
                  })}
                />
              </div>
            </div>

            <div className="input-wrap">
              <label>Select</label>

              <select
                className="booking-input"
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

            <div className="input-wrap">
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
      );
    } else {
      return (
        <div>
          <div className="addNewStaff">
            <AddStall checkUserDetails={checkUserDetails} />

            <Link
              to="/addUser"
              className="btn btn-custom btn-change btn-adduser"
            >
              Add User
            </Link>
          </div>

          <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="booking-form-box">
              <div className="input-wrap hidden">
                <label>User id</label>
                <input
                  type="text"
                  value={checkUserID}
                  {...register("userid", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>
              <div className="input-wrap">
                <label>Email</label>
                <input
                  className="booking-input"
                  type="text"
                  value={checkUserEmail}
                />
              </div>
              <div className="input-wrap">
                <label>Business name</label>

                <input
                  className="booking-input"
                  type="text"
                  {...register("businessName", {
                    required: {
                      value: true,
                      message: "Business name is required",
                    },
                  })}
                />
              </div>

              <div className="input-wrap">
                <label>Select by type</label>
                <select
                  className="booking-input"
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

                  <option value="food">Food</option>

                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="input-wrap">
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
        </div>
      );
    }
  };

  return <>{adminBooking()}</>;
};

export default StallBookingForm;
