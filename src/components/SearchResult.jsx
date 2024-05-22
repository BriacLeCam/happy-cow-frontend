import { Link } from "react-router-dom";

//images
import { Rating } from "react-simple-star-rating";
import VeganIcon from "../images/vegan-icon.svg";

const SearchResult = ({ venue }) => {
  //   console.log(venue.address);
  //   const cityZip = venue.address;
  //   const currentCityZip = cityZip.split(", ");
  return (
    // <Link
    //   to={`/venue/${venue.placeId}`}
    //   state={{
    //     name: venue.name,
    //     address: venue.address,
    //     location: venue.location,
    //     phone: venue.phone,
    //     thumbnail: venue.thumbnail,
    //     category: venue.category,
    //     rating: venue.rating,
    //     vegOnly: venue.vegOnly,
    //     link: venue.link,
    //     description: venue.description,
    //     pictures: venue.pictures,
    //     price: venue.price,
    //     website: venue.website,
    //     facebook: venue.facebook,
    //     nearbyPlaceIds: venue.nearbyPlaceIds,
    //   }}
    // >
    <ul key={venue.placeId}>
      <li className="venue-image-container">
        <img src={venue.thumbnail} alt="venue pic" />
      </li>
      <li className="name">
        <img src={VeganIcon} alt="vegan icon" />
        <span>{venue.name}</span>
      </li>
      <li className="address">
        {/* {`${currentCityZip[1]}, ${currentCityZip[3]}`} */} Paris, France
      </li>
      <li className="rating">
        <div>
          <Rating
            allowFraction
            initialValue={venue.rating}
            onClick={function noRefCheck() {}}
            readonly
            fillColor="#FFC200"
            size={20}
          />
        </div>
      </li>
      <li>
        <p className="description">
          {venue.description ? venue.description : "no description available"}
        </p>
      </li>
    </ul>
    // </Link>
  );
};
export default SearchResult;
