import { Link } from "react-router-dom";

const VenueCard = ({ venues }) => {
  if (isLoading) {
    return <span>Loading...</span>;
  }
  {
    return (
      <ul>
        {venues.map((venue, index) => (
          <li key={index}>
            <div className="venue-card">
              <div className="venue-card-picture">
                {/* <Link
              to={{
                pathname: `/card-product-details/${item.placeId}`,
                state: {
                  name: item.name,
                  description: item.description,
                  address: item.address,
                  phone: item.phone,
                  pictures: item.pictures,
                  rating: item.rating,
                  coordinates: {
                    lng: item.location.lng,
                    lat: item.location.lat
                  },
                  price: item.price,
                  website: item.website
                }
              }}
            > */}
                <img src={venue.thumbnail} alt={venue.name} />
                {/* <span>
                <ion-icon name="heart-empty"></ion-icon>
              </span> */}
                {/* </Link> */}
              </div>
              <h3 className="no-margin no-padding ellipsis">
                {/* <Link
              to={{
                pathname: `/card-product-details/${item.placeId}`,
                state: {
                  name: item.name,
                  description: item.description,
                  address: item.address,
                  phone: item.phone,
                  pictures: item.pictures,
                  rating: item.rating,
                  coordinates: {
                    lng: item.location.lng,
                    lat: item.location.lat
                  },
                  price: item.price,
                  website: item.website
                }
              }}
            > */}
                {venue.name}
                {/* </Link> */}
              </h3>
              <p className="localisation no-margin">Paris, France</p>
              {/* <Reviews item={item} /> */}
              <p className="description no-margin">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};

export default VenueCard;
