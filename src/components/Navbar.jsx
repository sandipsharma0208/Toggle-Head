import React, { useState, useRef, useEffect } from "react";
import dropdownIcon from "../assets/dropdown-icon.png";
import searchIcon from "../assets/search.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  const menuItems = [
    "Qualifications",
    "Organizations",
    "Research & Analysis",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">LOGO</div>
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-list">
              <span>{item}</span>
              <img src={dropdownIcon} alt="Expand" width="10" height="8" />
            </li>
          ))}
          <li>
            <img src={searchIcon} alt="Expand" width="20" height="20" />
          </li>
          <li>
            <button className="enrolment-btn">Enrolment</button>
          </li>
        </ul>

        {/* Hamburger shown only on small screens */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Popup menu for small screens */}
      {isOpen && (
        <div className="popup-menu" ref={popupRef}>
          <button className="close-icon" onClick={toggleMenu}>
            ✕
          </button>
          <ul className="popup-menu-list">
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <li>
              <img src={searchIcon} alt="Expand" width="20" height="20" />
            </li>
            <li>
              <button className="enrolment-btn">Enrolment</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
