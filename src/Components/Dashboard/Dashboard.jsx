import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [currentBooking, setCurrentBooking] = useState([]);

  const refreshList = () => {
    props.client
      .getBooking()
      .then((response) => setCurrentBooking(response.data));
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
