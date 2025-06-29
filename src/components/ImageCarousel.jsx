import { useState } from "react";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
function ImageCarousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      return (prevIndex - 1 + pictures.length) % pictures.length;
    });
  };

  if (!pictures || pictures.length === 0) {
    return <div> Aucune image à afficher</div>;
  }

  const showArrows = pictures.length > 1;
  
  return (
    <div className="carouselContainer">
      {showArrows && (
        <button className="arrowLeft" onClick={handlePrev}>
          <img src={arrowLeft} alt="précédent" />
        </button>
      )}
      <img
        src={pictures[currentImageIndex]}
        alt={"picture" + (currentImageIndex + 1)}
        className="carouselImage"
      />
      {showArrows && (
        <button className="arrowRight" onClick={handleNext}>
          <img src={arrowRight} alt="suivant" />
        </button>
      )}
      <div className="pagination">
        {currentImageIndex+1} / {pictures.length}
      </div>
    </div>
  );
}
export default ImageCarousel;
