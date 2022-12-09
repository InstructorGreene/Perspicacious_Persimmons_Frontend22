import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Piechart.css";

const Piechart = (props) => {
  console.log(props);
  const counter = (str) => {
    let type = str;
    return props.allBookings.reduce(
      (acc, cur) => (cur.stallType === type ? ++acc : acc),
      0
    );
  };
  const foodCount = counter("food");
  const donationCount = counter("donation");
  const commercialCount = counter("commercial");
  const craftCount = counter("craft");
  const total = foodCount + commercialCount + donationCount + craftCount;

  return (
    <div className="pie">
      <PieChart
        radius={40}
        lineWidth={75}
        segmentsShift={1}
        labelPosition={65}
        viewBoxSize={[100, 100]}
        labelStyle={(index) => ({
          fontSize: "5px",
          fontFamily: "sans-serif",
        })}
        label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value}%`}
        data={[
          {
            title: "Donation",
            value: Math.floor((donationCount / total) * 100),
            color: "lightblue",
          },
          {
            title: "Food",
            value: Math.floor((foodCount / total) * 100),
            color: "lightgreen",
          },
          {
            title: "Commercial",
            value: Math.floor((commercialCount / total) * 100),
            color: "lightcoral",
          },
          {
            title: "Craft",
            value: Math.floor((craftCount / total) * 100),
            color: "orange",
          },
        ]}
      />
      <div className="pie-legend">
        <p>Total stalls: {total}</p>

        <ul>
          <li>
            <span>Food stalls: {foodCount}</span>
          </li>
          <li>
            <span>Donation stalls: {donationCount}</span>
          </li>
          <li>
            <span>Commertial stalls: {commercialCount}</span>
          </li>
          <li>
            <span>Craft stalls: {craftCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Piechart;
