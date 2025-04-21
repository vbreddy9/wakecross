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
      <div className="worryfree-container">
      <h2 className="worryfree-heading">
        Expert Dental Care —  <span className="bold">Without the Stress</span> 
      </h2>
      </div>
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
