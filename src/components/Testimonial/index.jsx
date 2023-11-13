import React, { useState } from "react";
import CardTestimonial from "./CardTestimoni";
import testi1 from "./../assets/testi1.png";
import testi2 from "./../assets/testi2.png";
import testi3 from "./../assets/testi3.svg";

const CarouselTestimonial1 = () => {
  const testimonialData = [
    { id: 1, image: testi1 },
    { id: 2, image: testi2 },
    { id: 3, image: testi3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonialData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <button
        className="btn btn-primary"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <div>
        <CardTestimonial imagetesti={testimonialData[currentIndex].image} />
      </div>
      <button
        className="btn btn-primary"
        onClick={nextSlide}
        disabled={currentIndex === testimonialData.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default CarouselTestimonial1;
