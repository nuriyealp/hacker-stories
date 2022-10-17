import React from "react";

const LastSearches = ({ lastSearches, onLastSearch }) => (
  <>
    {/* <span>Last Searches: </span> */}
    {lastSearches.map((searchTerm, index) => (
      <button
        key={searchTerm + index}
        type="button"
        onClick={() => onLastSearch(searchTerm)}
      >
        {searchTerm}
      </button>
    ))}
  </>
);

export default LastSearches;
