import SearchResult from "./SearchResult";

const SearchResultsList = ({ venues }) => {
  return (
    <div className="venue-card-wrapper">
      {venues.map((venue) => {
        return <SearchResult venue={venue} key={venue.placeId} />;
      })}
    </div>
  );
};
export default SearchResultsList;
