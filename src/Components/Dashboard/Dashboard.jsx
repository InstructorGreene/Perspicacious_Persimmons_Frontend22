import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import {
  FaUndoAlt,
  FaRedoAlt,
  FaEdit,
  FaTrashAlt,
  FaRegWindowClose,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./Dashboard.css";
import StallHolderDetails from "./StallHolderDetails";
import ChooseStatus from "./ChooseStatus";
import PitchMap from "./PitchMap";

const Dashboard = (props) => {
  const [allBookings, setAllBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState([]);
  const [chosenStatus, setChosenStatus] = useState("");
  const [stallholder, setStallholder] = useState();
  const [pitchNumber, setPitchNumber] = useState(undefined);

  const findStallholder = async () => {
    const foundStallHolder = await props.client.getUserById(props.userid);
    setStallholder(foundStallHolder.data);
  };
  const chooseStatus = (chosenStatus) => {
    setChosenStatus(chosenStatus);
  };
  const choosePitchNumber = (chosenPitchNumber) => {
    setPitchNumber(chosenPitchNumber);
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
  const getBookingList = () => {
    props.client.getBooking().then((response) => setAllBookings(response.data));
  };

  //delete through admin
  const removeBookingStall = (id) => {
    if (props.role === "admin") {
      if (window.confirm("Confirm delete booking")) {
        props.client.removeBooking(id).then(() => refreshList());
      }
    } else return;
  };

  //cancelation
  const cancelStatus = (id) => {
    if (window.confirm("Confirm booking cancellation ")) {
      props.client.updateBookingPitch(id, "0").then();
      props.client
        .updateBookingStatus(id, "canceled")
        .then(() => refreshList());
    } else return;
  };

  //set pitch number
  const changePitchNumber = (id, newIndex) => {
    switch (newIndex) {
      case 4:
        props.client.updateBookingPitch(id, pitchNumber).then();
        setPitchNumber(undefined);
        return newIndex;
      case 3:
        props.client.updateBookingPitch(id, "0").then();
        setPitchNumber(false);
        return newIndex;
    }
  };

  // change status of booking
  const changeStatus = (id, bstatus) => {
    if (window.confirm("Confirm changing status")) {
      const statuses = ["created", "confirmed", "unpaid", "paid", "allocated"];
      let newIndex = statuses.indexOf(bstatus) + 1;
      switch (props.role) {
        case "finance":
          newIndex === 4
            ? window.alert("You can't change status")((newIndex = 3))
            : (newIndex = newIndex);
          break;
        case "allocator":
          if (!pitchNumber) {
            window.alert("Choose pitch number on the map");
            return;
          } else {
            if (newIndex === 4) {
              changePitchNumber(id, newIndex);
            } else {
              window.alert("You can't change status")((newIndex = 4));
            }
            break;
          }
        case "admin":
          newIndex >= 2
            ? window.alert("You can't change status")((newIndex = 1))
            : (newIndex = newIndex);
          break;
      }
      let newBstatus = statuses[newIndex];
      props.client
        .updateBookingStatus(id, newBstatus)
        .then(() => refreshList());
    } else return;
  };
  // undo changing status of booking
  const undoStatus = (id, bstatus) => {
    if (window.confirm("Confirm changing status")) {
      const statuses = ["created", "confirmed", "unpaid", "paid", "allocated"];
      let newIndex = statuses.indexOf(bstatus) - 1;
      newIndex <= -1 ? (newIndex = 0) : (newIndex = newIndex);
      switch (props.role) {
        case "finance":
          newIndex === 0
            ? window.alert("You can't change status")((newIndex = 1))
            : (newIndex = newIndex);
          break;
        case "allocator":
          newIndex === 2
            ? window.alert("You can't change status")((newIndex = 3))
            : changePitchNumber(id, newIndex);
          break;
        case "admin":
          newIndex >= 2
            ? window.alert("You can't change status")
            : (newIndex = newIndex);
          break;
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

  // Change colour depending on status
  const statusColor = (status) => {
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
    getBookingList();
    findStallholder();
  }, [chosenStatus, pitchNumber]);
  useEffect(() => {
    refreshList();
  }, []);

  const buildRows = () => {
    return currentBooking.map((item) => {
      return (
        <div key={item._id}>
          <Card className="card" key={item._id}>
            <Card.Body id={item._id}>
              <div
                className="stall-holder-details"
                style={{
                  display: props.role === "StallHolder" ? "none" : "inline",
                }}
              >
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
                      props.role === "StallHolder" || props.role === "admin"
                        ? "inline"
                        : "none",
                  }}
                  className="action-button"
                  type="button"
                  onClick={() => cancelStatus(item._id)}
                >
                  <FaRegWindowClose />
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
                  onClick={() => undoStatus(item._id, item.bstatus)}
                >
                  <FaUndoAlt />
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
                  <FaRedoAlt className="icon-btn" />
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
                  <FaTrashAlt />
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
      {props.role === "StallHolder" ? (
        <></>
      ) : (
        <ChooseStatus chooseStatus={chooseStatus} />
      )}

      {props.role === "StallHolder" ? (
        <div className="stall-holder-details">
          <StallHolderDetails stallholder={stallholder} />
          <h2 className="subtitle dashboard">Your bookings</h2>
        </div>
      ) : (
        <></>
      )}
      <div className="sticky-container">
        {props.role === "allocator" ? (
          <div className="pitch-map-wrap">
            <div className="pitch-map">
              <PitchMap
                pitchNumber={pitchNumber}
                choosePitchNumber={choosePitchNumber}
                allBookings={allBookings}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="cards">{buildRows()}</div>
      </div>
    </>
  );
};
export default Dashboard;
