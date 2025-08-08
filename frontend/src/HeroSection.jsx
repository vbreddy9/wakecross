import React from "react";
import logo from "./assets/banner.webp";


const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            NEW PATIENT EXCLUSIVE <span className="highlight">Offer!</span>
          </h1>
          <p className="hero-subheading">
            Comprehensive Exam & X-Rays for{" "}
            <span className="highlight price">$99</span>
          </p>
          <p className="hero-desc">Take the first step towards your best smile today. <br/><span style={{ color: "#b22222", fontWeight: "bold" }}>
            Same-Day Appointments Available
          </span> </p>
          <a href="tel:+19194530777">
            <button className="call-btn">CALL TODAY!</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
