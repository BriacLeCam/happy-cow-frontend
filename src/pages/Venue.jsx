import { useLocation } from "react-router-dom";

const Venue = () => {
  const venueDetail = useLocation();
  console.log(venueDetail);
  return (
    <>
      <div>{venueDetail.state.name}</div>
    </>
  );
};

export default Venue;
