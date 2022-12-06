import React from "react";

const PitchMap = (props) => {
  let pitchMapArray = [];
  for (let i = 1; i <= 50; i++) {
    pitchMapArray.push(i);
  }
  const changeBackground = (item) => {
    let occupiedBookings = props.currentBooking.filter((i) => i.pitch > 0);
    let occupiedNumbers = [];
    occupiedNumbers.push(
      occupiedBookings.map((item) => {
        return item.pitch;
      })
    );
    let isOccupied = occupiedNumbers[0].includes(item);
    if (isOccupied == true) {
      return "#093250";
    } else {
      return "transparent";
    }
  };

  const changeColor = (item) => {
    let occupiedBookings = props.currentBooking.filter((i) => i.pitch > 0);
    let occupiedNumbers = [];
    occupiedNumbers.push(
      occupiedBookings.map((item) => {
        return item.pitch;
      })
    );
    let isOccupied = occupiedNumbers[0].includes(item);
    if (isOccupied == true) {
      return "white";
    } else {
      return "black";
    }
  };

  const handleClick = (event) => {
    props.choosePitchNumber(event);
  };

  return pitchMapArray.map((item) => {
    return (
      <div
        key={item}
        className="pitch-item"
        style={{
          backgroundColor: changeBackground(item),
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
