import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [currentBooking, setCurrentBooking] = useState([]);
  console.log(currentBooking);

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

  useEffect(() => {
    refreshList();
  }, []);

  const buildRows = () => {
    return currentBooking.map((item) => {
      return (
        <div className="card-wrap" key={item._id}>
          <Booking
            key={item._id}
            businessName={item.businessName}
            comments={item.comments}
            stallType={item.stallType}
            status={item.status}
          />
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
