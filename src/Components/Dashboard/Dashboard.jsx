import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";

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
        <div className="event-wrapp" key={item._id}>
          <Booking
            key={item._id}
            name={item.name}
            businessName={item.businessName}
            email={item.email}
            mobileNumber={item.mobileNumber}
            comments={item.comments}
            stallType={item.stallType}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div>
        {buildRows()}
        {/* {refreshList()} */}
      </div>
    </>
  );
};

export default Dashboard;
