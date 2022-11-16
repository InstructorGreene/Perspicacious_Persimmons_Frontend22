import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./StallBookingForm.css";

function StallBookingForm() {
  const [data, setData] = useState({
    name: "",
    businessName: "",
    mobileNumber: "",
    stallType: "",
    comments: "",
    status: "",
    date: "",
  });

  return (
    <>
      <form className="booking-container">
        <div className="booking-form-box">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Business Name" />
          </div>
          <div>
            <input type="number" placeholder="Mobile Number" />
          </div>
          <div>
            <input type="text" placeholder="Stall Type" />
          </div>
          <div>
            <input type="textarea" placeholder="Comments" />
          </div>
          <div>
            <input type="Date" placeholder="Date" />
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
