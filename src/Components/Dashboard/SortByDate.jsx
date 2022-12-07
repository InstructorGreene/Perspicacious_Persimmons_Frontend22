import React, { useState } from "react";

const SortByDate = (props) => {
  const handleSelectChange = (e) => {
    props.chooseStatus(e.target.value);
  };
  return (
    <div className="select-container">
      <label className="select-label" htmlFor="select-status">
        Select status of booking to show
      </label>
      <select
        className="select-status"
        name="select-status"
        id="select-status"
        onChange={handleSelectChange}
      >
        <option value="allocated">Oldest to Newest</option>
        <option value="canceled">Newest to Oldest</option>
      </select>
    </div>
  );
};

export default SortByDate;
