import React from "react";
import { FaUserMd, FaTooth, FaTools, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd className="feature-icon" />,
    title: "Experienced Doctor",
    desc: "Skilled professionals offering personalized dental care."
  },
  {
    icon: <FaTooth className="feature-icon" />,
    title: "Painless Treatment",
    desc: "Comfort-focused dental procedures for all ages."
  },
  {
    icon: <FaTools className="feature-icon" />,
    title: "Top Equipment",
    desc: "Advanced tools ensuring precision and safety."
  },
  {
    icon: <FaClock className="feature-icon" />,
    title: "24/7 Care",
    desc: "Round-the-clock dental support for emergencies."
  }
];

const DentalFeatures = () => {
  return (
    <section className="dental-section">
      <h2 className="worryfree-heading">
        Because <span className="bold">Dentistry</span> Should be <span className="bold">Stress-Free</span>
      </h2>
      <div className="dental-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalFeatures;
