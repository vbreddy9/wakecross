import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


const ContactDetails = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">

          {/* Address Section */}
          <div className="contact-box">
            <h3 className="contact-title">Our Address</h3>
            <p className="contact-text">
              4008 Mitchell Mill Rd, Suite 108, Raleigh, NC 27616
            </p>
            <a 
              href="https://maps.app.goo.gl/9xJGEVvQ2JzpeWrc9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaMapMarkerAlt className="icon" /> View on Google Maps
            </a>
          </div>

          {/* Mobile Number Section */}
          <div className="contact-box">
            <h3 className="contact-title">Book Appointment</h3>
            <p className="contact-text">
              We're available 24/7. Feel free to reach out to us!
            </p>
            <a 
              href="tel:+19194530777" 
              className="contact-link"
            >
              <FaPhoneAlt className="icon" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
