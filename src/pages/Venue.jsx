import { useLocation } from "react-router-dom";

// components
import VenueMap from "../components/VenueMap";

// style
import "../styles/venue.scss";

const Venue = () => {
  const venueDetails = useLocation();
  console.log(venueDetails);
  return (
    <>
      <div className="venue-hero">{venueDetails.state.name}</div>
      <VenueMap />
    </>
  );
};

export default Venue;
