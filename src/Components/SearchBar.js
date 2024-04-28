import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchBar({onSearchChange}){
    return (
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search your Recent Transactions"
            onChange={(e) =>onSearchChange(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      );
}
export default SearchBar