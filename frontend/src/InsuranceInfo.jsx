import { FaCheck } from "react-icons/fa";


const InsuranceInfo = () => {
  return (
    <div className="insurance-section">
      <div className="insurance-container">
        {/* Heading */}
        <h2 className="insurance-heading">
          We Are <span className="bold">In-Network</span> with the Following <span className="bold">Insurances</span>
        </h2>

        {/* Insurance List */}
        <div className="insurance-list">
          {[
            "Ameritas",
            "Cigna",
            "GEHA",
            "Guardian",
            "Humana",
            "Lincoln Financial",
            "Principal",
            "UHC",
            "No Medicaid Patients*",
          ].map((insurance, i) => (
            <div key={i} className="insurance-item">
              <FaCheck className="check-icon" />
              {insurance}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceInfo;
