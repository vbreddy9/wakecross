import React from 'react';
import logo from './assets/elderlycare.jpg'; // Import the image from the assets folder

const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center p-8 py-5 px-4"
      style={{ backgroundImage: `url(${logo})` }} // Use the imported image path
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex items-center justify-start text-white p-8 px-4 sm:px-10  md:px-20">
        <div className="max-w-lg">
          <h1 className="text-4xl font-semibold mb-4 mt-20">Caring for Your Loved Ones with Compassion</h1>
          <p className="text-lg mb-6">We provide expert elderly care services to ensure your peace of mind.</p>
          <button className="bg-customBlue text-white py-2 px-6 rounded-lg hover:bg-customDark transition-all duration-300">
            <a href="tel:+01902921475" className="text-lg">CALL TODAY!</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
