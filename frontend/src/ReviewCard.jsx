import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import wake from "./assets/wake-cross-family-dentist.jpg";

const ReviewCard = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg p-6 sm:p-8">
      {/* Image Section */}
      <div className="w-full sm:w-1/2">
        <img
          src={wake}
          alt="Dental Clinic"
          className="rounded-lg w-full h-60 sm:h-80 object-cover"
        />
      </div>

      {/* Text & Review Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-6 sm:mt-0 sm:pl-6">
        <h2 className="text-2xl font-bold text-gray-900">#1 Rated Dentist</h2>
        <p className="text-lg text-gray-600">On Google</p>

        {/* Underline */}
        <div className="w-16 h-1 bg-customBlue mx-auto sm:mx-0 my-2"></div>
        <p className="text-gray-700 text-sm sm:text-base">
          Wake Cross Family Dentistry (Formerly Known as Raleigh Dental and Implants)
        </p>

        {/* Star Ratings & Score */}
        <div className="flex items-center justify-center sm:justify-start space-x-2 my-3">
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 text-2xl" />
            ))}
            <FaStarHalfAlt className="text-yellow-500 text-2xl" />
          </div>
          <span className="text-lg font-semibold text-gray-800">4.9</span>
        </div>

        {/* Additional Review Text */}
        <p className="text-gray-600 text-sm sm:text-base italic">
          "Exceptional service and friendly staff! Highly recommended for family dental care."
        </p>

        {/* Button */}
        <button 
          onClick={() => window.open("https://maps.app.goo.gl/9xJGEVvQ2JzpeWrc9", "_blank")} 
          className="mt-4 bg-customBlue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-purple-800 transition"
        >
          SEE MORE REVIEWS NOW
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
