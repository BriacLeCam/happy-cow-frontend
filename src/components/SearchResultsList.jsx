import { Rating } from "react-simple-star-rating";

//images
import VeganIcon from "../images/vegan-icon.svg";

const SearchResultsList = ({ venues }) => {
  return (
    <div className="venue-card-wrapper">
      {venues.map((venue) => {
        const cityZip = venue.address;
        const currentCityZip = cityZip.split(", ");
        return (
          <ul key={venue.placeId}>
            <li className="venue-image-container">
              <img src={venue.thumbnail} alt="venue pic" />
            </li>
            <li className="name">
              <img src={VeganIcon} alt="vegan icon" />
              <span>{venue.name}</span>
            </li>
            <li className="address">{`${currentCityZip[1]}, ${currentCityZip[3]}`}</li>
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
              <p className="description">{venue.description} </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default SearchResultsList;
