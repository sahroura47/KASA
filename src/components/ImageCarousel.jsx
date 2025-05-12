import { useState } from "react";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
function ImageCarousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };
  if (!pictures || pictures.length === 0) {
    return <div> Aucune image à afficher</div>;
  }
  return (
    <div className="carouselContainer">
      <button className="arrowLeft" onClick={handlePrev}>
        <img src={arrowLeft}  alt="précédent" />
      </button>
      <img
        src={pictures[currentImageIndex]}
        alt={"picture" + currentImageIndex + 1}
        className="carouselImage"
      />
      <button className="arrowRight" onClick={handleNext}>
        <img src={arrowRight} alt="suivant" />
      </button>
    </div>
  );
}
export default ImageCarousel;
