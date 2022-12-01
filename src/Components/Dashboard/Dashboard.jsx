import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaUndo, FaShareSquare, FaEdit, FaTrash } from "react-icons/fa";
import "./Dashboard.css";
import "./status";
import ChooseStatus from "./ChooseStatus";

const Dashboard = (props) => {
  const [currentBooking, setCurrentBooking] = useState([]);
  const [chosenStatus, setChosenStatus] = useState("");
  const [booking, setBooking] = useState(undefined);

  const chooseStatus = (chosenStatus) => {
    setChosenStatus(chosenStatus);
  };
  const statusFilter = (resData) => {
    switch (props.role) {
      case "finance":
        return resData
          .filter(
            (item) =>
              item.bstatus === "confirmed" ||
              item.bstatus === "unpaid" ||
              item.bstatus === "paid"
          )
          .filter((item) =>
            chosenStatus === "" ? true : item.bstatus === chosenStatus
          );
      case "allocator":
        return resData
          .filter(
            (item) => item.bstatus === "paid" || item.bstatus === "allocated"
          )
          .filter((item) =>
            chosenStatus === "" ? true : item.bstatus === chosenStatus
          );
      case "StallHolder":
        return resData
          .filter((item) => item.userid === props.userid)
          .filter((item) =>
            chosenStatus === "" ? true : item.bstatus === chosenStatus
          );
      default:

        return resData.filter((item) =>
          chosenStatus === "" ? true : item.bstatus === chosenStatus
        );
    }
  };

  const refreshList = () => {
    props.client
      .getBooking()
      .then((response) => setCurrentBooking(statusFilter(response.data)));
  };

  //delete through admin
  const removeBookingStall = (id) => {
    if (props.role === "admin") {
      props.client.removeBooking(id).then(() => refreshList());
    }
  };
  const changeStatus = (id, bstatus) => {
    if (window.confirm("Confirm changing status")) {
      const statuses = ["created", "confirmed", "unpaid", "paid", "allocated"];
      let newIndex = statuses.indexOf(bstatus) + 1;
      switch (props.role) {
        case "finance":
          newIndex === 4 ? (newIndex = 3) : (newIndex = newIndex);
        case "allocator":
          newIndex === 5
            ? window.alert("You can't change status")((newIndex = 4))
            : (newIndex = newIndex);
        case "admin":
          newIndex === 2
            ? window.alert("You can't change status")((newIndex = 1))
            : (newIndex = newIndex);
      }
      let newBstatus = statuses[newIndex];
      props.client
        .updateBookingStatus(id, newBstatus)
        .then(() => refreshList());
    } else return;
  };
  const undoStatus = (id, bstatus) => {
    if (window.confirm("Confirm changing status")) {
      const statuses = ["created", "confirmed", "unpaid", "paid", "allocated"];
      let newIndex = statuses.indexOf(bstatus) - 1;
      newIndex === -1 ? (newIndex = 0) : (newIndex = newIndex);
      switch (newIndex) {
        case 5:
          newIndex = 4;
        default:
          newIndex = newIndex;
      }
      let newBstatus = statuses[newIndex];
      props.client
        .updateBookingStatus(id, newBstatus)
        .then(() => refreshList());
    } else return;
  };

  const editBooking = (id, item) => {
    // props.client.updateBooking(id, item).then(() => refreshList());
    // setBooking(item);
  };

  const statusColor = (status) => {
    // switch case depending on status
    switch (status) {
      case "canceled":
        return "red";
      case "created":
        return "white";
      case "confirmed":
        return "yellow";
      case "unpaid":
        return "orange";
      case "paid":
        return "lightgreen";
      case "allocated":
        return "skyblue";
      default:
        return "white";
    }
  };

  useEffect(() => {
    refreshList();
  }, [chosenStatus]);
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
                    Last name: <span> {item.lastName}</span>
                  </p>
                </div>
                <div className="data-name-wrap">
                  <p className="lable text-muted">
                    Email: <span> {item.email}</span>
                  </p>
                  <p className="lable text-muted">
                    Mobile: <span> {item.mobileNumber}</span>
                  </p>
                </div>
              </div>
              <Card.Title className="booking-data">Booking Details</Card.Title>
              <p
                className="lable"
                style={{ backgroundColor: statusColor(item.bstatus) }}
              >
                <span className="bookingText">Booking status:</span>
                <span id="bstatus" className="description">
                  {" "}
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
                  style={{
                    display:
                      props.role === "StallHolder" || props.role === "committee"
                        ? "none"
                        : "inline",
                  }}
                  className="action-button"
                  type="button"
                  onClick={() => undoStatus(item._id, item.bstatus)}
                >
                  <FaUndo />
                </button>
                <button
                  style={{
                    display:
                      props.role === "StallHolder" || props.role === "committee"
                        ? "none"
                        : "inline",
                  }}
                  className="action-button"
                  type="button"
                  onClick={() => changeStatus(item._id, item.bstatus)}
                >
                  <FaShareSquare />
                </button>
                <button
                  style={{
                    display:
                      props.role === "StallHolder" || props.role === "admin"
                        ? "inline"
                        : "none",
                  }}
                  className="action-button"
                  type="button"
                  onClick={() => editBooking(item._id, item)}
                >
                  <FaEdit />
                </button>
                <button
                  style={{
                    display: props.role === "admin" ? "inline" : "none",
                  }}
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
      <ChooseStatus chooseStatus={chooseStatus} refreshList={refreshList} />
      <div className="cards">{buildRows()}</div>
    </>
  );
};

export default Dashboard;
