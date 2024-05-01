import { Link } from "react-router-dom";

//style
import "../styles/hero.scss";

//images
import SearchIcon from "../images/search-icon.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <span>Find vegan venues nearby</span>
      <div className="search-bar">
        <input
          type="text"
          name="search-input"
          placeholder="City, restaurant, shop..."
        />
        <img src={SearchIcon} alt="loupe" />
      </div>
    </section>
  );
};
export default Hero;
