import { Link } from "react-router-dom";

//style
import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <span>Find vegan venues nearby</span>
      <input
        type="text"
        name="search-input"
        placeholder=" City, restaurant, shop..."
      />
    </section>
  );
};
export default Hero;
