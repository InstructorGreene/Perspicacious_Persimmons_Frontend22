import React from "react";

const SortByDate = (props) => {
  const handleSelectChange = (e) => {
    props.chooseSortDate(e.target.value);
  };
  return (
    <div className="select-container">
      <label className="select-label" htmlFor="sort-by-date">
        Sort by date
      </label>
      <select
        className="sort-by-date"
        name="sort-by-date"
        id="sort-by-date"
        onChange={handleSelectChange}
      >
        <option value="newest">Newest to Oldest</option>
        <option value="oldest">Oldest to Newest</option>
      </select>
    </div>
  );
};

export default SortByDate;
