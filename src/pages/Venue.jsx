import { useParams } from "react-router-dom";

const Venue = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div>venue</div>
    </>
  );
};

export default Venue;
