import { useLocation } from "react-router-dom";

// components
import VenueMap from "../components/VenueMap";

// style
import "../styles/venue.scss";

//images
import { Rating } from "react-simple-star-rating";
import FilledEuro from "../images/euro-filled-icon.svg";
import EmptyEuro from "../images/euro-empty-icon.svg";
import VeganFriendly from "../images/vegan-icon.svg";

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
              emptyColor="#808080"
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
        </div>
      </div>
      <div className="venue-map">
        <VenueMap />
      </div>
      <div className="venue-details-container">
        <div className="venue-info">
          <span>{venueDetails.state.address}</span>
          <span>{venueDetails.state.phone}</span>
          <span>{venueDetails.state.website}</span>
          <span>{venueDetails.state.facebook}</span>
        </div>
        <div className="venue-description">
          {venueDetails.state.description}
        </div>
      </div>
    </>
  );
};

export default Venue;
