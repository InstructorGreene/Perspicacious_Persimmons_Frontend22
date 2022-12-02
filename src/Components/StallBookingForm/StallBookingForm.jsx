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
    setCheckUserID(checkEmail.data[0]._id);
    setCheckUserEmail(checkEmail.data[0].email);

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
            <div>
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
                  placeholder="Comments"
                />
              </div>

              <Button className="add-button" variant="custom" type="submit">
                Add Booking
              </Button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <div className="addNewStaff">
            <AddStall checkUserDetails={checkUserDetails} />
            <Link to="/addUser" className="btn btn-custom btn-change">
              Add User
            </Link>
          </div>
          <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="booking-form-box">
              <div>
                <input
                  type="text"
                  value={checkUserID}
                  {...register("userid", {
                    required: {
                      value: true,
                    },
                  })}
                  placeholder="UserId"
                />
              </div>
              <input
                type="text"
                value={checkUserEmail}
                placeholder="User Email"
              />

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
        </div>
      );
    }
  };

  return <>{adminBooking()}</>;
};

export default StallBookingForm;
