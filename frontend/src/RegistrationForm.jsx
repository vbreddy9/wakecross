import { useState } from "react";
import axios from "axios";
import {
  FaTooth, FaRegSmile, FaClinicMedical, FaUserMd,
  FaHandsHelping, FaPhoneAlt, FaCalendarCheck, FaClock
} from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    referralSource: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // <-- Added loading state

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

    setLoading(true); // Start loading
    try {
      await axios.post("https://api.wakecrossdentistry.com/send-email", formData);
            // ✅ Push success event to GTM
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "form_submission_success",
            formName: "Schedule Form", // Optional, helps identify form in GTM
          });
      alert("Form Submitted Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        referralSource: "",
      });
    } catch (err) {
      console.error("Submission Error", err);
      alert("Submission Failed. Please try again later.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-grid">

        {/* Left Section */}
        <div className="choose-us-section">
          <h3 className="section-heading">
            Why Choose Us?
            
          </h3>
          <ul className="choose-us-list">
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
              <li key={index} className="choose-us-item">
                <item.icon className="choose-us-icon" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="form-wrapper">
          <div className="registration-form-card">
            <h2 className="form-title">BOOK APPOINTMENT</h2>
            
            <form onSubmit={handleSubmit} className="registration-form">
              {["firstName", "lastName", "email", "phoneNumber", "dob"].map((name) => (
                <div key={name} className="form-group">
                  <label className="form-label">
                    {name.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={name === "dob" ? "date" : name === "email" ? "email" : "text"}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={
                      name === "firstName" ? "Enter first name" :
                      name === "lastName" ? "Enter last name" :
                      name === "email" ? "Enter your e-mail" :
                      name === "phoneNumber" ? "+1 (XXX) XXX-XXXX" :
                      ""
                    }
                    className="form-input"
                  />
                  {errors[name] && (
                    <p className="form-error">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div className="form-group">
                <label className="form-label">How Did You Hear About Us?</label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select an option</option>
                  <option value="Google">Google</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegistrationForm;
