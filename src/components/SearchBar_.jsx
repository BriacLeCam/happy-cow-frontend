import { useState, useEffect } from "react";
import axios from "axios";

//style
import "../styles/search.scss";

//images
import SearchIcon from "../images/search-icon.svg";

const SearchBar_ = ({ setVenues }) => {
  const api =
    "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";

  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  //   const [venues, setVenues] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(api)
          .then(setData(response.data))
          .then(setIsLoading(false));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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

  // = (value) => {
  //     fetch(api)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         const venues = json.filter((venue) => {
  //           return (
  //             venue &&
  //             venue.name &&
  //             venue.name.toLowerCase().includes(value.toLowerCase())
  //           );
  //         });
  //         setVenues(venues);
  //       });
  //   };

  //   const handleChange = (value) => {
  //     setInput(value);
  //     fetchData(value);
  //   };

  //   return (
  //     <div className="search-bar">
  //       <input
  //         type="text"
  //         name="search-input"
  //         placeholder="City, restaurant, shop..."
  //         value={input}
  //         onChange={(event) => handleChange(event.target.value)}
  //       />
  //       <img src={SearchIcon} alt="loupe" />
  //     </div>
  //   );
};
export default SearchBar_;
