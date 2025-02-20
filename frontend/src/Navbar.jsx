import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Mobile phone icon import
import mlogo from './assets/british-elderly-care.webp'; // Import the logo image

const Navbar = () => {
  return (
    <header className="container sticky top-0 z-50 flex justify-between items-center bg-customDark text-white">
      {/* Logo */}
      <div className="flex">
      <a href="/">
          <img src={mlogo} alt="ElderCare Logo" className="w-30 h-20 mr-2" /> {/* Logo with size control */}
        </a>
      </div>
      
      {/* Phone number with mobile icon */}
      <a href="tel:+01902921475" className="text-lg flex items-center hover:text-gray-200">
        <FaPhoneAlt className="mr-2" /> +01902921475
      </a>
    </header>
  );
};

export default Navbar;
