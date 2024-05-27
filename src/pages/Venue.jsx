import { useLocation } from "react-router-dom";

// components
import VenueMap from "../components/VenueMap";
import GalleryInLine from "../components/GalleryInLine";

// style
import "../styles/venue.scss";

//images
import { Rating } from "react-simple-star-rating";
import FilledEuro from "../images/euro-filled-icon.svg";
import EmptyEuro from "../images/euro-empty-icon.svg";
import VeganFriendly from "../images/vegan-icon.svg";
import PhoneIcon from "../images/phone-icon.svg";
import ShopIcon from "../images/shop-icon.svg";
import WwwIcon from "../images/www-icon.svg";
import FacebookIcon from "../images/facebook-icon.svg";

const Venue = () => {
  const venueDetails = useLocation();
  return (
    <>
      <div className="venue-hero">
        <span className="venue-name">{venueDetails.state.name}</span>
        <div className="ratings">
          <div className="star-rating">
            <Rating
              allowFraction
              initialValue={venueDetails.state.rating}
              onClick={function noRefCheck() {}}
              readonly
              fillColor="#FFC200"
              emptyColor="#CCCC"
              size={20}
            />
          </div>
          <div className="euro-rating">
            {venueDetails.state.price ? (
              (venueDetails.state.price = "Inexpensive" ? (
                <>
                  <img src={FilledEuro} alt="filled-euro" />
                  <img src={EmptyEuro} alt="empty-euro" />
                  <img src={EmptyEuro} alt="empty-euro" />
                </>
              ) : (
                (venueDetails.state.price = "Moderate" ? (
                  <div>Moderate</div>
                ) : (
                  <div>Expensive</div>
                ))
              ))
            ) : (
              <div>prices undefined</div>
            )}
          </div>
        </div>
      </div>
      <div className="venue-map">
        <VenueMap />
      </div>
      <div className="venue-details-container">
        <div className="venue-info">
          <div>
            <img src={ShopIcon} alt="ShopIcon" />
            {venueDetails.state.address ? (
              <span>{venueDetails.state.address}</span>
            ) : (
              <i>no information</i>
            )}
          </div>
          <div>
            <img src={PhoneIcon} alt="PhoneIcon" />
            {venueDetails.state.phone ? (
              <span>{venueDetails.state.phone}</span>
            ) : (
              <i>no information</i>
            )}
          </div>
          <div>
            <img src={WwwIcon} alt="WwwIcon" />
            {venueDetails.state.website ? (
              <span>{venueDetails.state.website}</span>
            ) : (
              <i>no information</i>
            )}
          </div>
          <div className="vegan-friendly">
            <img
              className="vegan-friendly-img"
              src={VeganFriendly}
              alt="vegan-friendly-icon"
            />
            {console.log(venueDetails.state.vegOnly)}
            {venueDetails.state.vegOnly > 0 ? (
              <span className="vegan-friendly-text">vegan only</span>
            ) : (
              <span className="vegan-friendly-text">vegan friendly</span>
            )}
          </div>
          <div>
            <img src={FacebookIcon} alt="FacebookIcon" />
            {venueDetails.state.facebook ? (
              <span>{venueDetails.state.facebook}</span>
            ) : (
              <i>no information</i>
            )}
          </div>
        </div>
        <div className="venue-description-gallery">
          <div className="venue-description">
            {venueDetails.state.description}
          </div>
          <div className="venue-gallery">
            <GalleryInLine />
          </div>
        </div>
      </div>
    </>
  );
};

export default Venue;
