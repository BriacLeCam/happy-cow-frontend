import { useState, useEffect } from "react";
import axios from "axios";

// components
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";

//images
import { ClockLoader } from "react-spinners";
import Wave from "../images/wave-white.svg";

// style
import "../styles/home.scss";

const Home = () => {
  const api =
    "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(venues);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        // console.log(response.data);
        setVenues(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <>
      <section className="hero-container">
        <span>Find vegan venues nearby</span>
        <div className="search-component">
          <SearchBar setVenues={setVenues} />
        </div>
      </section>
      <div className="loader">
        <ClockLoader color="#7B4EC3" margin={2} size={50} speedMultiplier={2} />
      </div>
    </>
  ) : (
    <>
      <div className="hero-wave-container">
        <div className="hero-container">
          <span>Find vegan venues nearby</span>
          <div className="search-component">
            <SearchBar setVenues={setVenues} />
          </div>
        </div>
        <div className="wave-container">
          <img className="wave" src={Wave} alt="wave" />
        </div>
      </div>
      <SearchResultsList venues={venues} />
    </>
  );
};

export default Home;
