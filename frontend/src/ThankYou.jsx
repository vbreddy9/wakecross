import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const ThankYou = () => {
  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-card">
        <FaCheckCircle className="thankyou-icon" />
        <h1 className="thankyou-title">Thank You!</h1>
        <p className="thankyou-message">
          We've received your appointment request. Our team will contact you shortly.
        </p>
        <Link to="/" className="thankyou-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
