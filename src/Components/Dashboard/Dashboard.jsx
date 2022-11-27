import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaUndo, FaShareSquare, FaEdit, FaTrash } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [currentBooking, setCurrentBooking] = useState([]);
  const [booking, setBooking] = useState(undefined);

  const refreshList = () => {
    if (props.role === "StallHolder") {
      console.log(props.userid);
      props.client
        .getBookingByUserId(props.userid)
        .then((response) => setCurrentBooking(response.data));
    } else {
      props.client
        .getBooking()
        .then((response) => setCurrentBooking(response.data));
    }
  };

  //delete through admin
  const removeBookingStall = (id) => {
    if (props.role === "admin") {
      props.client.removeBooking(id).then(() => refreshList());
    }
  };

  const editBooking = (id, item) => {
    // props.client.updateBooking(id, item).then(() => refreshList());
    // setBooking(item);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildRows = () => {
    return currentBooking.map((item) => {
      let user = props.client
        .getUserById(item.userid)
        .then((response) => (user = response.data));
      console.log(user);
      return (
        <div key={item._id}>
          <Card className="card" key={item._id}>
            <Card.Body id={item._id}>
              <Card.Title className="creator-data">
                Stall Holder Details
              </Card.Title>
              <div className="data-wrap">
                <div className="data-name-wrap">
                  <p className="lable text-muted">
                    First name: <span> {user.firstName}</span>
                  </p>
                  <p className="lable text-muted">
                    Last name:{" "}
                    <span className="description"> {user.lastName}</span>
                  </p>
                </div>
                <div className="data-name-wrap">
                  <p className="lable text-muted">
                    Email: <span className="description"> {user.email}</span>
                  </p>
                  <p className="lable text-muted">
                    Mobile:{" "}
                    <span className="description"> {user.mobileNumber}</span>
                  </p>
                </div>
              </div>
              <Card.Title className="booking-data">Booking Details</Card.Title>
              <p className="lable text-muted">
                Business/charity name:
                <span className="description"> {item.businessName}</span>
              </p>
              <p className="lable text-muted">
                Type of stall:
                <span className="description"> {item.stallType}</span>
              </p>
              <p className="lable text-muted">
                Additional comments:
                <span className="description"> {item.comments}</span>
              </p>
              <div className="action-bar">
                <button className="action-button" type="button">
                  <FaUndo />
                </button>
                <button className="action-button" type="button">
                  <FaShareSquare />
                </button>
                <button
                  className="action-button"
                  type="button"
                  onClick={() => editBooking(item._id, item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="action-button"
                  type="button"
                  onClick={() => removeBookingStall(item._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <>
      <div className="cards">{buildRows()}</div>
    </>
  );
};

export default Dashboard;
