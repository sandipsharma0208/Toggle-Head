import React, { useState, useEffect } from "react";
// import './VerticalSlider.css';
// import slideImg from "../../public/earth.jpg"

const slides = [
  {
    img: "https://storage.googleapis.com/a1aa/image/3f1bb12c-36ee-4aa7-ddf6-d55d26ee1803.jpg",
    title: "Slide Title 1",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/3f1bb12c-36ee-4aa7-ddf6-d55d26ee1803.jpg",
    title: "Slide Title 2",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/3f1bb12c-36ee-4aa7-ddf6-d55d26ee1803.jpg",
    title: "Slide Title 3",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/3f1bb12c-36ee-4aa7-ddf6-d55d26ee1803.jpg",
    title: "Slide Title 3",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
  },
];

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        <div
          className="slider-inner"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="slide-content">
                <h4>{slide.title}</h4>
                <p>{slide.text}</p>
              </div>
              <img src={slide.img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalSlider;
