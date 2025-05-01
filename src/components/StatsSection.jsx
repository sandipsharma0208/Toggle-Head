import React from "react";

const stats = [
  {
    id: 1,
    number: "123+",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 2,
    number: "12+",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    id: 3,
    number: "12+",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    id: 4,
    number: "123",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
];

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <p className="stat-label">Lorem ipsum</p>
            <p className="stat-number">{stat.number}</p>
            <p className="stat-subtitle">{stat.subtitle}</p>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
