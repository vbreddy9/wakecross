import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import mlogo from "./assets/logo-w.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <a href="/" className="mb-2 sm:mb-0">
          <img
            src={mlogo}
            alt="wake cross family"
            className="h-14 sm:h-20 w-auto"
          />
        </a>

        {/* Phone */}
        <a
          href="tel:+19194530777"
          className="text-black border border-gray-300 rounded px-4 py-2 text-base sm:text-lg flex items-center gap-2 hover:text-gray-600 hover:border-gray-500 transition"
        >
          <FaPhoneAlt className="text-sm sm:text-base" /> (919)-453-0777
        </a>
      </div>
    </header>
  );
};

export default Navbar;
