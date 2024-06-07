import { Link } from "react-router-dom";

//style
import "../styles/header.scss";

//images
import Logo from "../images/happy-cow-logo.svg";

const Header = (venues) => {
  const handleVenuesClick = () => {
    setInput("");
    console.log(Input);
    setVenues([]);
  };

  return (
    <nav>
      <div className="header-container">
        <section className="header-nav">
          <div className="header-logo-container">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <Link onClick={handleVenuesClick} to="/">
                Venues
              </Link>
            </li>
            <li>
              <Link to="https://www.happycow.net/blog/" target="_blank">
                Blog
              </Link>
            </li>
            <li>
              <Link to="https://www.happycow.net/recipes" target="_blank">
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="https://www.happycow.net/vegtopics/diet/vegan"
                target="_blank"
              >
                Information
              </Link>
            </li>
          </ul>
        </section>
        <section className="header-buttons">
          <button className="white-button">
            <Link to="#">Add listing</Link>
          </button>
          <button className="purple-button">
            <Link to="#">Login / Join</Link>
          </button>
        </section>
      </div>
    </nav>
  );
};

export default Header;
