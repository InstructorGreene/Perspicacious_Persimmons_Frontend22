import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaUndo, FaShareSquare, FaEdit, FaTrash } from "react-icons/fa";
import "./Dashboard.css";
import "./status";

const Dashboard = (props) => {
  const [stallholder, setStallholder] = useState([]);
  const [currentBooking, setCurrentBooking] = useState([]);
  const [booking, setBooking] = useState(undefined);

  

  const statusFilter = (resData) => {
    switch (props.role) {
      case "finance":
        return resData.filter(
          (item) =>
            item.bstatus === "confirmed" ||
            item.bstatus === "unpaid" ||
            item.bstatus === "paid"
        );
      case "allocator":
        return resData.filter(
          (item) => item.bstatus === "paid" || item.bstatus === "allocated"
        );
      case "StallHolder":
        return resData.filter((item) => item.userid === props.userid);
      default:
        return resData;


    }
  };
  
  const refreshList = () => {
    if (props.role === "StallHolder") {
      // console.log(props.userid);
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
  const changeStatus = (id, bstatus) => {
    const statuses = [
      "canceled",
      "created",
      "confirmed",
      "unpaid",
      "paid",
      "allocated",
    ];
    let newIndex = statuses.indexOf(bstatus) + 1;
    let newBstatus = statuses[newIndex];
    props.client.updateBookingStatus(id, newBstatus).then(() => refreshList());
  };
  const undoStatus = (id, bstatus) => {
    const statuses = [
      "canceled",
      "created",
      "confirmed",
      "unpaid",
      "paid",
      "allocated",
    ];
    let newIndex = statuses.indexOf(bstatus) - 1;
    let newBstatus = statuses[newIndex];
    props.client.updateBookingStatus(id, newBstatus).then(() => refreshList());
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
                    First name: <span> {item.firstName}</span>
                  </p>
                  <p className="lable text-muted">
                    Last name:
                    <span className="description"> {item.lastName}</span>
                  </p>
                </div>
                <div className="data-name-wrap">
                  <p className="lable text-muted">
                    Email: <span className="description"> {item.email}</span>
                  </p>
                  <p className="lable text-muted">
                    Mobile:
                    <span className="description"> {item.mobileNumber}</span>
                  </p>
                </div>
              </div>
              <Card.Title className="booking-data">Booking Details</Card.Title>
              <p className="lable text-muted">
                Booking status:
                <span id="bstatus" className="description">
                  {item.bstatus}
                </span>
              </p>
              <p className="lable text-muted">
                Pitch number:
                <span className="description"> {item.pitch}</span>
              </p>
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
                <button
                  className="action-button"
                  type="button"
                  onClick={() => undoStatus(item._id, item.bstatus)}
                >
                  <FaUndo />
                </button>
                <button
                  className="action-button"
                  type="button"
                  onClick={() => changeStatus(item._id, item.bstatus)}
                >
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
