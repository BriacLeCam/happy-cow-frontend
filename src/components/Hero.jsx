import { Link } from "react-router-dom";
import { useState } from "react";

//components
import Search from "./Search";

//style
import "../styles/hero.scss";

//images

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <span>Find vegan venues nearby</span>
        <div className="search-component">
          <Search />
        </div>
      </section>
    </>
  );
};
export default Hero;
