import React, { useState } from "react";

const ChooseStatus = ({ chooseStatus }) => {
  const handleSelectChange = (e) => {
    chooseStatus(e.target.value);
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
