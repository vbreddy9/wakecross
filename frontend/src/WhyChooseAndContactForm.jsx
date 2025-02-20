import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaHeartbeat, FaUsers, FaClock, FaHandHoldingHeart,
  FaClipboardCheck, FaDollarSign, FaPhoneAlt, FaUserMd, FaCalendarCheck,
  FaCogs, FaUserShield } from 'react-icons/fa';

const services = [
  "Live-in Care", "End of Life Care", "Diabetes Care", "Companion Care", 
  "Complex Care", "Personal Care", "Catheter Care", "Cerebral Palsy Care", 
  "Dementia & Alzheimer's Care", "Bowel Care", "Overnight Care", "Interim Care", 
  "Continence Care", "Emergency Care"
];

const WhyChooseAndContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', age: '', postCode: '', existingCare: '', 
    service: '', healthConditions: '', careTiming: '', hoursPerDay: '', daysPerWeek: '', fundingSource: '', emergencyContact: '', 
    livingArrangements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to send visitor data to the backend after 20 seconds 
  const visitTrackedRef = useRef(false); // Prevent duplicate execution

  const trackUserVisit = async () => {
    try {
      const storedVisit = sessionStorage.getItem("visitTracked");
      if (storedVisit) return; // Prevent multiple calls
  
      sessionStorage.setItem("visitTracked", "true"); // ✅ Move before setTimeout
  
      setTimeout(async () => {
        try {
          console.log("Tracking visitor..."); // Debugging
  
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();
  
          const visitData = {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            browser: navigator.userAgent,
            referrer: document.referrer || "Direct Visit",
            visitTime: new Date().toISOString(),
          };
  
          await fetch("http://localhost:5000/notify-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visitData),
          });
  
          console.log("Admin notified:", visitData);
        } catch (error) {
          console.error("Error sending visit data:", error);
        }
      }, 10000); // Notify admin after 10 seconds
    } catch (error) {
      console.error("Error tracking visit:", error);
    }
  };
  
  useEffect(() => {
    if (!visitTrackedRef.current) {
      trackUserVisit();
      visitTrackedRef.current = true; // ✅ Ensures it runs only once
    }
  }, []);
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    setIsSubmitting(true);
  
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Your message has been sent successfully!');
        window.history.pushState({}, '', '/thankyou'); 

        setTimeout(() => {
          window.history.pushState({}, '', '/');
          setFormData({  
            name: '', email: '', mobile: '', age: '', postCode: '', existingCare: '',
            service: '', healthConditions: '', careTiming: '', hoursPerDay: '', daysPerWeek: '', fundingSource: '', emergencyContact: '', 
            livingArrangements: ''
          });
        }, 2000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('There was an error while sending your message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-gray-100 pt-8 pb-4 lg:pb-0 relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Why Choose Section */}
          <div className="py-4 relative z-0">
            <h3 className="text-2xl font-semibold text-customBlue mb-2 py-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-8 text-left text-lg">
              <li className="flex items-center"><FaCheckCircle className="text-customBlue mr-4 text-xl" /> Professional and experienced caregivers</li>
              <li className="flex items-center"><FaClock className="text-customBlue mr-4 text-xl" /> 24/7 availability for peace of mind</li>
              <li className="flex items-center"><FaHeartbeat className="text-customBlue mr-4 text-xl" /> Personalized care plans to meet individual needs</li>
              <li className="flex items-center"><FaUsers className="text-customBlue mr-4 text-xl" /> Compassionate and attentive care</li>
              <li className="flex items-center"><FaDollarSign className="text-customBlue mr-4 text-xl" /> Affordable rates and flexible services</li>
	      <li className="flex items-center"><FaHandHoldingHeart className="text-customBlue mr-4 text-xl" /> A focus on improving quality of life</li>
              <li className="flex items-center"><FaClipboardCheck className="text-customBlue mr-4 text-xl" /> Regular health checkups and assessments</li>
              <li className="flex items-center"><FaPhoneAlt className="text-customBlue mr-4 text-xl" /> Quick and easy access to support and services</li>
              <li className="flex items-center"><FaUserMd className="text-customBlue mr-4 text-xl" /> Expert caregivers with medical training</li>
              <li className="flex items-center"><FaCalendarCheck className="text-customBlue mr-4 text-xl" /> Flexible scheduling to meet your needs</li>
              <li className="flex items-center"><FaCogs className="text-customBlue mr-4 text-xl" /> Comprehensive range of services</li>
              <li className="flex items-center"><FaUserShield className="text-customBlue mr-4 text-xl" /> Trusted and reliable service</li>
            </ul>

            {/* Mission Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-customBlue mb-4">Our Mission</h3>
              <p className="text-lg text-left">
                At British Elderly Care, our mission is to provide compassionate and high-quality care to elderly individuals, ensuring their comfort, safety, and well-being.
              </p>
            </div>

            {/* Vision Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-customBlue mb-4">Our Vision</h3>
              <p className="text-lg text-left">
                Our vision is to be the leading provider of elder care services, known for our unwavering dedication to improving the lives of elderly individuals.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg relative z-10 lg:w-10/12 top-0 lg:transform lg:-translate-y-44">
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-lg font-medium">Mobile Number</label>
                  <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+44" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div>
                  <label htmlFor="age" className="block text-lg font-medium">Age</label>
                  <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} placeholder="Enter your age" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div>
                  <label htmlFor="postCode" className="block text-lg font-medium">Post Code</label>
                  <input type="text" id="postCode" name="postCode" value={formData.postCode} onChange={handleInputChange} placeholder="Enter your postcode" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="existingCare" className="block text-lg font-medium">Do you have existing care?</label>
                  <select id="existingCare" name="existingCare" value={formData.existingCare} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-lg font-medium">Tell us what you're looking for?</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
                    <option value="">Select Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="healthConditions" className="block text-lg font-medium">Health Conditions/Medical History</label>
                  <textarea id="healthConditions" name="healthConditions" value={formData.healthConditions} onChange={handleInputChange} placeholder="E.g., Diabetes, Hypertension, Arthritis" className="w-full p-3 border border-gray-300 rounded-lg" rows="3" required />
                </div>

                <div>
                  <label htmlFor="careTiming" className="block text-lg font-medium">Preferred Care Timing</label>
                  <select id="careTiming" name="careTiming" value={formData.careTiming} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
                    <option value="">Select Timing</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Overnight">Overnight</option>
                    <option value="24/7">24/7 Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hoursPerDay" className="block text-lg font-medium">How many hours care per day do you require?</label>
                  <input type="text" id="hoursPerDay" name="hoursPerDay" value={formData.hoursPerDay} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="daysPerWeek" className="block text-lg font-medium">How many days care per week do you require?</label>
                  <input type="number" id="daysPerWeek" name="daysPerWeek" value={formData.daysPerWeek} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="emergencyContact" className="block text-lg font-medium">Emergency Contact Number</label>
                  <input type="text" id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>

                <div>
                  <label htmlFor="fundingSource" className="block text-lg font-medium">How will you be funding your care?</label>
                  <select id="fundingSource" name="fundingSource" value={formData.fundingSource} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
                    <option value="">Select Option</option>
                    <option value="Self">Self</option>
                    <option value="Family">Family</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Government Assistance">Government Assistance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="livingArrangements" className="block text-lg font-medium">Current Living Arrangements</label>
                  <select id="livingArrangements" name="livingArrangements" value={formData.livingArrangements} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" required>
                    <option value="">Select Option</option>
                    <option value="Alone">Living Alone</option>
                    <option value="Family">Living with Family</option>
                    <option value="In a Facility">In a Care Facility</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-3 bg-customBlue text-white rounded-lg hover:bg-customDark transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? 'Please wait, submitting...' : 'BOOK APPOINTMENT'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAndContactForm;
