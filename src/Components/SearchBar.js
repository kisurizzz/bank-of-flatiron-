import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchBar({onSearchChange}){
    return (
        <div className="search-container"> {/* Optional class for overall styling */}
      <label >Search Transactions:</label>
      <div className="search-input">  {/* Add a class for styling the input field */}
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          id="search"
          placeholder="Search by description"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}
export default SearchBar