import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Address Section */}
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-customBlue mb-4">Our Address</h3>
            <p className="text-lg text-gray-700 mb-4">
            4008 Mitchell Mill Rd,Suite 108, Raleigh,NC 27616
            </p>
            <a 
              href="https://maps.app.goo.gl/9xJGEVvQ2JzpeWrc9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black border-2 border border-black rounded py-2 px-3 text-lg inline-flex items-center gap-2 hover:text-customBlue"
            >
              <FaMapMarkerAlt className="mr-2" /> View on Google Maps
            </a>
          </div>
          
          {/* Mobile Number Section */}
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-customBlue mb-4">Book Appointment</h3>
            <p className="text-lg text-gray-700 mb-4">
              We're available 24/7. Feel free to reach out to us!
            </p>
            <a 
              href="tel:+19194530777" 
              className="text-black border-2 border border-black rounded py-2 px-3 text-lg inline-flex items-center gap-2 hover:text-customBlue"
            >
              <FaPhoneAlt className="mr-2" /> Call Now
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
