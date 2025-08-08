import React from 'react';
import shilpa from "./assets/dr-shilpa-koneru.webp";

const DoctorProfile = () => {
  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <div className="doctor-left">
          <img
            src={shilpa}
            alt="Dr. Shilpa Koneru"
            className="doctor-image"
          />
        </div>
        <div className="doctor-right">
          <h2>DR. SHILPA KONERU, DDS</h2>
          <p>
            Dr. Shilpa Koneru is honored to continue the esteemed legacy established by Dr. Naran over the past 25 years. As the new owner of the practice, she is excited about the opportunity to serve the community and build strong, lasting relationships with each patient.
          </p>
          <p>
            Originally from India, Dr. Shilpa Koneru earned a bachelor’s in dental surgery before completing a two-year International Dentist Program in Buffalo, New York, where she graduated in 2013. Since then, she has dedicated her career to providing high-quality dental care, participating in outreach programs and offering free services to underserved populations.
          </p>
          <p>
            Committed to lifelong learning, Dr. Shilpa Koneru actively pursues continuing education courses to expand her expertise in various dental procedures. She believes in staying at the forefront of advancements in dentistry to provide patients with the best possible care.
          </p>
           <p>
           For her, dentistry is more than a profession – it is a true passion. She looks forward to meeting each patient and helping them achieve their dental health goals.
          </p>
        </div>
        <div className="doctor-cta">
          <div className="cta-box">
            <div className="cta-icon">📅</div>
            <h3>WE CAN’T WAIT TO SEE YOU!</h3>
            <p>
              Looking for a dentist committed to your care? Reach out to us today and schedule a visit!
            </p>
            <div className="cta-phone">📱 (919)-453-0777</div>
            <a href="tel:+19194530777" className="cta-button">
              REQUEST APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
