import React from "react";

const cards = Array(8).fill({
  title: "Lorem ipsum",
  text: "Lorem ipsum dolor sit amet...",
});

const CardsSlider = () => {
  return (
    <section className="cards-section">
      <div className="cards-wrapper">
        <div className="cards-container">
          {cards.map((card, i) => (
            <div className="card" key={i}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        {/* <button className="nav-btn left" onClick={handlePrev}>
          <i className="fas fa-chevron-left" />
        </button>
        <button className="nav-btn right" onClick={handleNext}>
          <i className="fas fa-chevron-right" />
        </button> */}
      </div>
    </section>
  );
};

export default CardsSlider;
