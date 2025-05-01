import React, { useState } from "react";

const slides = [
  {
    title: "Lorem ipsum",
    text: "",
  },
  {
    title: "Second Slide Title",
    text: "This is the second slide content...",
  },
  {
    title: "Third Slide Title",
    text: "This is the third slide content...",
  },
  {
    title: "Fourth Slide Title",
    text: "This is the Fourth slide content...",
  },
];

const HeroSlider2 = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="hero-section-2">
      <div className="hero-slider-2">
        <div
          className="slides-container"
          style={{ transform: `translateY(-${index * 220}px)` }}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a tenetur ad porro eligendi nam laudantium reprehenderit eaque rerum, soluta omnis nesciunt saepe consequuntur quia recusandae, voluptas, accusamus ab aliquid fugit
             nulla ipsum sunt consectetur veritatis harum? Ratione corrupti voluptas consequuntur.
              Numquam sint aperiam temporibus laudantium cupiditate veritatis explicabo iste.</p>
          {slides.map((slide, i) => (
            <div className="slide-2" key={i}>
              <div>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <button className="know-more-btn">
                  Know More <i className="fas fa-play" />
                </button>
              </div>
              <div className="hero-image-2">
                <img
                  src="https://storage.googleapis.com/a1aa/image/3f1bb12c-36ee-4aa7-ddf6-d55d26ee1803.jpg"
                  alt="Hero"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vertical-dots-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider2;
