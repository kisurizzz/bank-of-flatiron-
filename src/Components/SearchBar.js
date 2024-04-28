function SearchBar(){
    return (
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search your Recent Transactions"
            // onChange={(e) =>handleSearch(e.target.value)}
          />
          <i className="circular search link icon"></i>
        </div>
      );
}
export default SearchBar