import React from "react";

const SearchBox = ({handleChange}) => {
  return (
    <div className="pa2">
      <input
        type="text"
        name="search"
        placeholder="Search Friends"
        className="pa3 bg-lightest-blue b--green ba"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
