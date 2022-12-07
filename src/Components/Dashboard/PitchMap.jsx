import React, { useState } from "react";

const PitchMap = (props) => {
  const [isActive, setIsActive] = useState(false);
  let pitchMapArray = [];
  for (let i = 1; i <= 50; i++) {
    pitchMapArray.push(i);
  }
  const changeBackground = (item) => {
    let occupiedBookings = props.allBookings.filter((i) => i.pitch > 0);
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
    let occupiedBookings = props.allBookings.filter((i) => i.pitch > 0);
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
      return "#093250";
    }
  };

  const handleClick = (event) => {
    props.choosePitchNumber(event);
    setIsActive(event);
  };

  return pitchMapArray.map((item) => {
    return (
      <div
        key={item}
        className="pitch-item"
        style={{
          backgroundColor:
            isActive === item ? "cadetblue" : changeBackground(item),
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
