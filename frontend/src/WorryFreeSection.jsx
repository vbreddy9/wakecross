import { FaCheck } from "react-icons/fa";

const WorryFreeSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-12 py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-light text-gray-700">
        Because <span className="font-bold">Dentistry</span> Should be <span className="font-bold">Stress-Free</span>
      </h2>
      
      {/* Underline */}
      <div className="w-16 h-1 bg-customBlue mx-auto my-4"></div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold">Stress-Free Sedation</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Affordable laughing gas with any treatment.</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> IV sedation for deep relaxation.</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Complete extensive treatment in one visit.</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold">Stress-Free Scheduling</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Hours: 8:00 AM – 5:00 PM (Mon & Tue)</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Hours: 8:00 AM – 5:00 PM (Fri & Sat)</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Everything under one roof!</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Same-day appointments & treatments.</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold">Stress-Free Financing</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> No insurance? We offer flexible plans.</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Free exam & X-ray for new patients.</li>
            <li className="flex items-center gap-2"><FaCheck className="text-customBlue" /> Affordable financing options available.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorryFreeSection;
