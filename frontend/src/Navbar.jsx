import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import mlogo from "./assets/logo-w.webp";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/">
          <img src={mlogo} alt="Wake Cross Family" className="logo" />
        </a>

        {/* Phone */}
        <a href="tel:+19194530777" className="phone-link">
          <FaPhoneAlt /> (919)-453-0777
        </a>
      </div>
    </header>
  );
};

export default Navbar;
