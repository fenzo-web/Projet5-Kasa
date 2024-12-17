import React, { useState } from "react";
import "./Carousel.scss";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel__button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="carousel__image-container">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="carousel-image"
        />
      </div>
      <button className="carousel__button next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="carousel__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
