import React, { useState } from "react";
// import './FAQSection.css';
import plus from "../assets/add.png";
import remove from "../assets/remove.png";

const faqs = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Default to the second item open

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="faq-item">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq${index}`}
                className={`faq-button ${isOpen ? "expanded" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question">{faq.question}</span>
                {isOpen ? (
                  <img src={plus} alt="Collapse" width="20" height="20" />
                ) : (
                  <img src={remove} alt="Expand" width="20" height="20" />
                )}
              </button>

              {isOpen && (
                <div id={`faq${index}`} className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
