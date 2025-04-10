import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import wake from "./assets/wake-cross-family-dentist.jpg";


const ReviewCard = () => {
  return (
    <div className="review-card">
      {/* Image Section */}
      <div className="image-container">
        <img src={wake} alt="Dental Clinic" className="clinic-image" />
      </div>

      {/* Text & Review Section */}
      <div className="text-section">
        <h2 className="heading">#1 Rated Dentist</h2>
        <p className="subheading">On Google</p>

        <div className="underline"></div>

        <p className="clinic-name">
          Wake Cross Family Dentistry (Formerly Known as Raleigh Dental and Implants)
        </p>

        <div className="rating-row">
          <div className="stars">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
            <FaStarHalfAlt className="star-icon" />
          </div>
          <span className="score">4.9</span>
        </div>

        <p className="review-text">
          "Exceptional service and friendly staff! Highly recommended for family dental care."
        </p>

        <button
          onClick={() => window.open("https://maps.app.goo.gl/9xJGEVvQ2JzpeWrc9", "_blank")}
          className="review-button"
        >
          SEE MORE REVIEWS NOW
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
