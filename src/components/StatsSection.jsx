import React from "react";
import arrow from "../assets/arrow.png";
const stats = [
  {
    value: "123+",
    size: "large",
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    value: "12+",
    size: "medium",
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    value: "12+",
    size: "medium",
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    value: "123",
    size: "large",
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
];
const StatsGrid = () => {
  return (
    <div className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <p className="stat-title">{stat.title}</p>
            <h2
              className={`stat-value ${
                stat.size === "large" ? "large" : "medium"
              }`}
            >
              {stat.value}
            </h2>
            <p className="stat-subtitle">{stat.subtitle}</p>
            <p className="stat-description">{stat.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatsGrid;
