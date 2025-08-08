import React from "react";
import logo from "./assets/banner.webp";
import googleIcon from "./assets/google-icon.png"; // You'll need a small Google 'G' logo image

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
          <p className="hero-desc">
            Take the first step towards your best smile today. <br />
            <span style={{ color: "#b22222", fontWeight: "bold" }}>
              Same-Day Appointments Available
            </span>
          </p>

          {/* Call Today Button */}
          <a href="tel:+19194530777">
            <button className="call-btn">CALL TODAY!</button>
          </a>

          {/* Google Review Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
              backgroundColor: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              width: "fit-content"
            }}
          >
            <img
              src={googleIcon}
              alt="Google"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
              Google Reviews
            </span>
            <span style={{ color: "#f4b400", fontWeight: "bold", marginLeft: "6px" }}>
              ★ 4.9
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
