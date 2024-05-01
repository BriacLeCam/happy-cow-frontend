import { Link } from "react-router-dom";

//style
import "../styles/header.scss";

//images
import Logo from "../images/happy-cow-logo.svg";

const Header = () => {
  return (
    <header>
      <ul className="header-nav">
        <li className="submenu">
          <ul>
            <li className="header-logo-container">
              <img className="header-logo" src={Logo} alt="" />
            </li>
            <li>
              <Link to="#">Restaurants</Link>
            </li>
            <li>
              <Link to="#">Stores</Link>
            </li>
            <li>
              <Link to="#">Recipes</Link>
            </li>
            <li>
              <Link to="#">Advices</Link>
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
