import { useState, useEffect } from "react";

//style
import "../styles/search.scss";

//images
import SearchIcon from "../images/search-icon.svg";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (element) => {
    // console.log(element.target.value);
    let searchValue = element.target.value;
    setSearch(searchValue);
  };

  console.log(search);

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-input"
        placeholder="City, restaurant, shop..."
        onChange={handleSearch}
      />
      <img src={SearchIcon} alt="loupe" />
    </div>
  );
};
export default Search;
