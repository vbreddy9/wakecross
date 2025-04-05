import React from "react";
import logo from "./assets/banner.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[470px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat text-black flex items-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content Wrapper (Left Aligned) */}
      <div className="relative z-10 container mx-auto flex items-center justify-start h-full">
        <div className="max-w-2xl text-left px-4 sm:px-8 md:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            NEW PATIENT EXCLUSIVE{" "}
            <span className="text-customBlue">Offer!</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-2 sm:mb-4">
            Comprehensive Exam & X-Rays for{" "}
            <span className="text-customBlue text-xl sm:text-2xl md:text-3xl font-semibold">
              Just $99
            </span>
          </p>
          <p className="text-xs sm:text-base md:text-lg mb-4 sm:mb-6">
            Take the first step towards your best smile today.
          </p>

          {/* Call Button */}
          <a href="tel:+19194530777">
            <button className="bg-customBlue text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-500 transition duration-300 text-sm sm:text-lg shadow-md">
              CALL TODAY!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
