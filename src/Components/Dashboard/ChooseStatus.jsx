import React, { useState } from "react";

const ChooseStatus = (props) => {
  const handleSelectChange = (e) => {
    props.chooseStatus(e.target.value);
    props.refreshList();
  };
  return (
    <div className="booking-container">
      <select
        name="select-status"
        id="select-status"
        onChange={handleSelectChange}
      >
        <option value="">All statuses</option>
        <option value="created">Created</option>

        <option value="confirmed">Confirmed</option>

        <option value="unpaid">Unpaid</option>

        <option value="paid">Paid</option>

        <option value="allocated">Allocated</option>
        <option value="canceled">Canceled</option>
      </select>
    </div>
  );
};

export default ChooseStatus;
