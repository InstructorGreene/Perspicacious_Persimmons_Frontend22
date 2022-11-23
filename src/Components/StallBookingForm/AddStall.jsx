import React from "react";
import StallBookingForm from "./StallBookingForm";

const AddStall = (props) => {
  return (
    <>
      <StallBookingForm client={props.client} />
    </>
  );
};

export default AddStall;
