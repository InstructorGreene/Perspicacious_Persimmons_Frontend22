import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FaUndo, FaShareSquare, FaEdit, FaTrash } from "react-icons/fa";
import "./Booking.css";

const Booking = (props) => {
  const [booking, setBooking] = useState(undefined);

  const removeBooking = (id) => {
    props.client.removeBooking(id).then(() => props.refreshList());
  };

  const editBooking = (item, id) => {
    props.client.updateBooking(item, id).then(() => props.refreshList());
    setBooking(item);
  };
  return (
    <div>
      <Card className="card" key={props._id}>
        <Card.Body id={props._id}>
          <Card.Title className="creator-data">Stall Holder Details</Card.Title>
          <div className="data-wrap">
            <div className="data-name-wrap">
              <p className="lable text-muted">
                First name: <span> {props.firstName}</span>
              </p>
              <p className="lable text-muted">
                Last name: <span> {props.lastName}</span>
              </p>
            </div>
            <div className="data-name-wrap">
              <p className="lable text-muted">
                Email: <span> {props.email}</span>
              </p>
              <p className="lable text-muted">
                Mobile: <span> {props.mobileNumber}</span>
              </p>
            </div>
          </div>
          <Card.Title className="booking-data">Booking Details</Card.Title>
          <p className="lable text-muted">
            Business/charity name:
            <span className="description"> {props.businessName}</span>
          </p>
          <p className="lable text-muted">
            Type of stall:
            <span className="description"> {props.stallType}</span>
          </p>
          <p className="lable text-muted">
            Additional comments:
            <span className="description"> {props.comments}</span>
          </p>
          <div className="action-bar">
            <button className="action-button" type="button">
              <FaUndo />
            </button>
            <button className="action-button" type="button">
              <FaShareSquare />
            </button>
            <button className="action-button" type="button">
              <FaEdit />
            </button>
            <button
              className="action-button"
              type="button"
              onClick={() => removeBooking}
            >
              <FaTrash />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Booking;
