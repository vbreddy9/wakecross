import { FaCheck } from "react-icons/fa";

const WorryFreeSection = () => {
  return (
    <div className="worryfree-container">
      <h2 className="worryfree-heading">
        Because <span className="bold">Dentistry</span> Should be <span className="bold">Stress-Free</span>
      </h2>

      <div className="underline"></div>

      <div className="worryfree-grid">
        {/* Column 1 */}
        <div className="column">
          <h3 className="column-title">Stress-Free Sedation</h3>
          <ul className="feature-list">
            <li><FaCheck className="icon" /> Affordable laughing gas with any treatment.</li>
            <li><FaCheck className="icon" /> IV sedation for deep relaxation.</li>
            <li><FaCheck className="icon" /> Complete extensive treatment in one visit.</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="column">
          <h3 className="column-title">Stress-Free Scheduling</h3>
          <ul className="feature-list">
            <li><FaCheck className="icon" /> Hours: 8:00 AM – 5:00 PM (Mon & Tue)</li>
            <li><FaCheck className="icon" /> Hours: 8:00 AM – 5:00 PM (Fri & Sat)</li>
            <li><FaCheck className="icon" /> Everything under one roof!</li>
            <li><FaCheck className="icon" /> Same-day appointments & treatments.</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="column">
          <h3 className="column-title">Stress-Free Financing</h3>
          <ul className="feature-list">
            <li><FaCheck className="icon" /> No insurance? We offer flexible plans.</li>
            <li><FaCheck className="icon" /> Free exam & X-ray for new patients.</li>
            <li><FaCheck className="icon" /> Affordable financing options available.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorryFreeSection;
