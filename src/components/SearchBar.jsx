import { useState } from "react";

//style
import "../styles/search.scss";

//images
import SearchIcon from "../images/search-icon.svg";

const SearchBar = ({ setVenues }) => {
  const api =
    "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        const venues = json.filter((venue) => {
          return (
            venue && venue.name && venue.name.toLowerCase().includes(value)
          );
        });
        setVenues(venues);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-input"
        placeholder="City, restaurant, shop..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
      <img src={SearchIcon} alt="loupe" />
    </div>
  );
};
export default SearchBar;
