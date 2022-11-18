import React from "react";
import Card from "react-bootstrap/Card";

const Booking = (props) => {
  return (
    <div>
      <Card className="card-wrapp" key={props._id}>
        <Card.Body id={props._id}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.businessName}
          </Card.Subtitle>
          <Card.Text className="description">{props.email}</Card.Text>
          <Card.Text className="description">{props.comments}</Card.Text>
          <Card.Text className="description">{props.mobileNumber}</Card.Text>
          <Card.Text className="description">{props.stallType}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Booking;
