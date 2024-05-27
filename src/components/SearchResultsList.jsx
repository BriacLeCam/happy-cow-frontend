import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";

// components

// style
import "../styles/searchResultList.scss";
const linkStyle = {
  margin: "1rem",
  width: "22%",
  textDecoration: "none",
  color: "#3F3F3F",
  display: "flex",
  flexdirection: "column",
};

//images
import { Rating } from "react-simple-star-rating";
import Head from "../images/happy-cow-head.svg";
import VeganIcon from "../images/vegan-icon.svg";

const SearchResultsList = ({ venues }) => {
  const itemPerPage = 20;
  // console.log(venues.length / itemPerPage);
  const paginationCount = 47;

  const [page, setPage] = useState(1);
  const [firstVenueIndex, setFirstVenueIndex] = useState(0);
  const [lastVenueIndex, setLastVenueIndex] = useState(itemPerPage);

  const handleChange = (event, page) => {
    setPage(page);
    // console.log(page);
    setFirstVenueIndex((page - 1) * itemPerPage);
    setLastVenueIndex(page * itemPerPage);
  };

  return (
    <>
      <div className="pagination">
        <Pagination
          count={paginationCount}
          color="secondary"
          variant="outlined"
          sx={{
            "Button.MuiPaginationItem-rounded.Mui-selected": {
              bgcolor: "#7C4EC4",
              color: "#ffffff",
            },
          }}
          shape="rounded"
          siblingCount={1}
          boundaryCount={3}
          showFirstButton
          showLastButton
          page={page}
          onChange={handleChange}
          // setFirstVenueIndex(0);
          // setLastVenueIndex(20);
        />
      </div>
      <div className="venue-card-wrapper">
        {venues
          .map((venue) => {
            // console.log(venue.price);
            return (
              <Link
                key={venue.placeId}
                style={linkStyle}
                to={`/venue/${venue.placeId}`}
                state={{
                  name: venue.name,
                  address: venue.address,
                  location: venue.location,
                  phone: venue.phone,
                  thumbnail: venue.thumbnail,
                  category: venue.category,
                  type: venue.type,
                  rating: venue.rating,
                  vegOnly: venue.vegOnly,
                  link: venue.link,
                  description: venue.description,
                  pictures: venue.pictures,
                  price: venue.price,
                  website: venue.website,
                  facebook: venue.facebook,
                  nearbyPlaceIds: venue.nearbyPlaceIds,
                }}
              >
                <ul>
                  <li className="venue-image-container">
                    <img
                      src={
                        venue.thumbnail.includes("no-image")
                          ? Head
                          : venue.thumbnail
                      }
                      alt="venue pic"
                    />
                  </li>
                  <li className="name">
                    <img src={VeganIcon} alt="vegan icon" />
                    <span>{venue.name}</span>
                  </li>
                  <li className="address">
                    {/* {`${currentCityZip[1]}, ${currentCityZip[3]}`} */}{" "}
                    Paris, France
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
                    <div className="description">
                      {venue.description
                        ? venue.description
                        : "no description available"}
                    </div>
                  </li>
                </ul>
              </Link>
            );
          })
          .slice(firstVenueIndex, lastVenueIndex)}
        {/* {console.log(firstVenueIndex, lastVenueIndex)} */}
      </div>
    </>
  );
};
export default SearchResultsList;
