import { useState } from "react";
import axios from "axios";
import {
  FaTooth, FaRegSmile, FaClinicMedical, FaUserMd,
  FaHandsHelping, FaPhoneAlt, FaCalendarCheck, FaClock
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    referralSource: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{7,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number (7-15 digits)";
    }
    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await axios.post("https://wakecross-backend.vercel.app/send-email", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        referralSource: "",
      });
      navigate("/thankyou");
    } catch (err) {
      console.error("Submission Error", err);
      alert("Submission Failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Why Choose Us Section */}
        <div className="p-8 relative z-10">
          <h3 className="text-2xl font-semibold text-customBlue mb-2 relative inline-block">
            Why Choose Us?
            <div className="w-20 h-1 bg-customBlue absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h3>
          <ul className="space-y-4 text-lg mt-8">
            {[
              { icon: FaTooth, text: "Comprehensive dental check-ups & cleanings" },
              { icon: FaRegSmile, text: "Expert cosmetic dentistry for a brighter smile" },
              { icon: FaClinicMedical, text: "State-of-the-art dental technology" },
              { icon: FaUserMd, text: "Experienced and caring dental professionals" },
              { icon: FaHandsHelping, text: "Personalized treatment plans for every patient" },
              { icon: FaClock, text: "Flexible scheduling, including weekends" },
              { icon: FaPhoneAlt, text: "Emergency dental services available 24/7" },
              { icon: FaCalendarCheck, text: "Easy online appointment booking" },
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <item.icon className="text-customBlue mr-4 text-xl" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Registration Form */}
        <div className="relative">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full relative lg:absolute lg:-top-56 lg:left-1/2 lg:-translate-x-1/2 z-20">
            <h2 className="text-2xl font-bold text-center mb-4">SCHEDULE NOW</h2>
            <div className="w-20 h-1 bg-customBlue mx-auto mb-4"></div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["firstName", "lastName", "email", "phoneNumber", "dob"].map((name) => (
                <div key={name}>
                  <label className="block font-medium capitalize text-sm sm:text-base">
                    {name.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={name === "dob" ? "date" : name === "email" ? "email" : "text"}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={
                      name === "phoneNumber" ? "e.g., 9191234567" : name === "dob" ? "MM/DD/YYYY" : ""
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-sm sm:text-base"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-xs sm:text-sm">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block font-medium text-sm sm:text-base">
                  How Did You Hear About Us?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-sm sm:text-base"
                >
                  <option value="">Select an option</option>
                  <option value="Google">Google</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white py-2 px-4 rounded-lg transition text-sm sm:text-base ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-customBlue hover:bg-gray-500"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
