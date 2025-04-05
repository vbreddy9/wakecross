import { FaCheck } from "react-icons/fa";

const InsuranceInfo = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-light text-gray-800">
          We Are <span className="font-bold">In-Network</span> with the Following <span className="font-bold">Insurances</span>
        </h2>

        {/* Underline */}
        <div className="w-16 h-1 bg-customBlue mx-auto my-4"></div>

        {/* Insurance List - 3 Columns Layout */}
        <div className="text-left">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <div
                key={i}
                className="flex items-center gap-2 text-lg bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <FaCheck className="text-customBlue" />
                {insurance}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceInfo;
