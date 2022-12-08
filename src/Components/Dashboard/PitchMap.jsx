import React, { useEffect } from "react";

const PitchMap = (props) => {
  let pitchMapArray = [];
  for (let i = 1; i <= 50; i++) {
    pitchMapArray.push(i);
  }
  let occupiedNumbers = [];
  let occupiedBookings = props.allBookings.filter((i) => i.pitch > 0);
  occupiedNumbers.push(
    occupiedBookings.map((item) => {
      return item.pitch;
    })
  );
  const changeBackground = (item) => {
    let isOccupied = occupiedNumbers[0].includes(item);
    if (isOccupied === true) {
      return "#093250";
    } else {
      return "transparent";
    }
  };

  const changeColor = (item) => {
    let isOccupied = occupiedNumbers[0].includes(item);
    if (isOccupied === true) {
      return "white";
    } else {
      return "#093250";
    }
  };

  const handleClick = (event) => {
    let isOccupied = occupiedNumbers[0].includes(event);
    if (isOccupied) {
      window.alert("This pitch number is booked, choose another");
      return;
    } else {
      props.choosePitchNumber(event);
    }
  };
  useEffect(() => {}, []);

  return pitchMapArray.map((item) => {
    return (
      <div
        key={item}
        className="pitch-item"
        style={{
          backgroundColor:
            props.pitchNumber === item ? "cadetblue" : changeBackground(item),
          color: changeColor(item),
        }}
        onClick={() => handleClick(item)}
      >
        {item}
      </div>
    );
  });
};

export default PitchMap;
