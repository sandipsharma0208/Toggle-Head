import React, { useState, useEffect } from "react";
import carousel from "../assets/carousel-2.png";
import playButton from "../assets/play-icon.png";

const slides = [
  {
    img: carousel,
    title: "Slide Title 1",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a tenetur 
           ad porro eligendi nam laudantium reprehenderit eaque rerum, soluta omnis 
           nesciunt saepe consequuntur quia recusandae, voluptas, accusamus ab aliquid fugit
           nulla ipsum sunt consectetur veritatis harum? Ratione corrupti voluptas consequuntur.`,
  },
  {
    img: carousel,
    title: "Slide Title 2",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a tenetur 
           ad porro eligendi nam laudantium reprehenderit eaque rerum, soluta omnis 
           nesciunt saepe consequuntur quia recusandae, voluptas, accusamus ab aliquid fugit
           nulla ipsum sunt consectetur veritatis harum? Ratione corrupti voluptas consequuntur.`,
  },
  {
    img: carousel,
    title: "Slide Title 3",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a tenetur 
           ad porro eligendi nam laudantium reprehenderit eaque rerum, soluta omnis 
           nesciunt saepe consequuntur quia recusandae, voluptas, accusamus ab aliquid fugit
           nulla ipsum sunt consectetur veritatis harum? Ratione corrupti voluptas consequuntur.`,
  },
  {
    img: carousel,
    title: "Slide Title 4",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a tenetur 
           ad porro eligendi nam laudantium reprehenderit eaque rerum, soluta omnis 
           nesciunt saepe consequuntur quia recusandae, voluptas, accusamus ab aliquid fugit
           nulla ipsum sunt consectetur veritatis harum? Ratione corrupti voluptas consequuntur.`,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="carousel">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="carousel-content">
                <div className="carousel-caption">
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <button className="know-more-btn">
                    Know More{" "}
                    <img
                      src={playButton}
                      alt="play-button"
                      width="15"
                      height="15"
                    />
                  </button>
                </div>
                {/* <div style={{ minHeight: "60vh", width:"100%" }}> */}
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
