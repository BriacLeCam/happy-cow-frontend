import { useState } from "react";

// style
import "../styles/home.scss";

// components
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";

//images

const Home = () => {
  const [venues, setVenues] = useState([]);

  return (
    <>
      <section className="hero-container">
        <span>Find vegan venues nearby</span>
        <div className="search-component">
          <SearchBar setVenues={setVenues} />
        </div>
      </section>

      <SearchResultsList venues={venues} />
      {console.log(venues)}
    </>
  );
  // const api =
  //   "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json";
  // const [venues, setVenues] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(api);
  //       // console.log(response.data);
  //       setVenues(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // return isLoading ? (
  //   <span>Loading...</span>
  // ) : (
  //   <div className="venue-card-wrapper">
  //     {venues
  //       // .filter((venue) => {
  //       //   return venue.name.includes(Search);
  //       // })
  //       .map((venue) => {
  //         const cityZip = venue.address;
  //         const currentCityZip = cityZip.split(", ");
  //         return (
  //           <ul key={venue.placeId}>
  //             <li className="venue-image-container">
  //               <img src={venue.thumbnail} alt="venue pic" />
  //             </li>
  //             <li className="name">
  //               <img src={VeganIcon} alt="vegan icon" />
  //               <span>{venue.name}</span>
  //             </li>
  //             <li className="address">{`${currentCityZip[1]}, ${currentCityZip[3]}`}</li>
  //             <li className="rating">
  //               <div>
  //                 <Rating
  //                   allowFraction
  //                   initialValue={venue.rating}
  //                   onClick={function noRefCheck() {}}
  //                   readonly
  //                   fillColor="#FFC200"
  //                   size={20}
  //                 />
  //               </div>
  //             </li>
  //             <li>
  //               <p className="description">{venue.description} </p>
  //             </li>
  //           </ul>
  //         );
  //       })}
  //   </div>
  // );
};

export default Home;
