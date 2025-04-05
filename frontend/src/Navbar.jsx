import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import mlogo from "./assets/logo-w.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/">
          <img
            src={mlogo}
            alt="wake cross family"
            className="w-28 h-14 sm:w-44 sm:h-20"
          />
        </a>

        {/* Phone */}
        <a
          href="tel:+19194530777"
          className="text-black border-2 border rounded py-2 px-2 text-lg flex items-center gap-2 hover:text-gray-500"
        >
          <FaPhoneAlt /> (919)-453-0777
        </a>
      </div>
    </header>
  );
};

export default Navbar;
