import { Link } from "react-router-dom";
import { useState } from "react";

//style
import "../styles/search.scss";

//images
import SearchIcon from "../images/search-icon.svg";

const Search = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-input"
        placeholder="City, restaurant, shop..."
      />
      <img src={SearchIcon} alt="loupe" />
    </div>
  );
};
export default Search;
