import { useLocation } from "react-router-dom";

//style
import "../styles/gallery-in-line.scss";

const Gallery = () => {
  const venuePictures = useLocation();
  return (
    <div className="flex-gallery">
      {venuePictures.state.pictures.map((picture, index) => {
        return (
          <img
            className="gallery-picture"
            key={index}
            src={picture}
            alt={`picture ${index}`}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
