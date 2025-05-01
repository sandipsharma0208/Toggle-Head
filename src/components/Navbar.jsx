import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGO</div>
      <ul className="navbar-menu">
        <li>Qualifications</li>
        <li>Organizations</li>
        <li>Research & Analysis</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>
          <button className="enrolment-btn">Enrolment</button>
        </li>
        <li>
          <i className="fas fa-search search-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
