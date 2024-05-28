import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { useLocation } from "react-router-dom";

//images
import OverlayIcon from "../images/happy-cow-icon.svg";

const VenueMap = () => {
  const MapVenueDetails = useLocation();
  // console.log(MapVenueDetails.state.location);
  return (
    <Map
      height={290}
      defaultCenter={[
        MapVenueDetails.state.location.lat,
        MapVenueDetails.state.location.lng,
      ]}
      defaultZoom={17}
    >
      <ZoomControl />
      {/* <Overlay
        anchor={[
          MapVenueDetails.state.location.lat,
          MapVenueDetails.state.location.lng,
        ]}
        offset={[-2, 120]}
      >
        <img src={OverlayIcon} width={100} height={100} alt="" />
      </Overlay> */}
      <Marker
        width={50}
        color="#7C4EC4"
        anchor={[
          MapVenueDetails.state.location.lat,
          MapVenueDetails.state.location.lng,
        ]}
      />
    </Map>
  );
};

export default VenueMap;
