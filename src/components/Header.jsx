import { Link } from "react-router-dom";

//style
import "../styles/header.scss";

//images
import Logo from "../images/happy-cow-logo.svg";

const Header = (venues) => {
  return (
    <header>
      <ul className="header-nav">
        <li className="submenu">
          <ul>
            <Link to="/">
              <li className="header-logo-container">
                <img className="header-logo" src={Logo} alt="" />
              </li>
            </Link>
            <li>
              <Link to="/">Venues</Link>
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
        </li>

        <li>
          <button className="white-button">
            <Link to="#">Add listing</Link>
          </button>
          <button className="purple-button">
            <Link to="#">Login / Join</Link>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
