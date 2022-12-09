import React from "react";
import Card from "react-bootstrap/Card";

const StallHolderDetails = (props) => {
  return (
    <div>
      <Card.Title className="creator-data">Stall Holder Details</Card.Title>
      <div className="data-wrap">
        <div className="data-name-wrap">
          <p className="lable text-muted">
            First name: <span> {props.stallholder?.firstName}</span>
          </p>
          <p className="lable text-muted">
            Last name: <span> {props.stallholder?.lastName}</span>
          </p>
        </div>
        <div className="data-name-wrap">
          <p className="lable text-muted">
            Email: <span> {props.stallholder?.email}</span>
          </p>
          <p className="lable text-muted">
            Mobile: <span> {props.stallholder?.mobileNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StallHolderDetails;
