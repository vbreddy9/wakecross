import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    name: "Cosmetic Dentistry",
    description: "Enhance your smile with our expert cosmetic treatments.",
    details: "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. We use state-of-the-art procedures to help you achieve the perfect smile you've always wanted.",
    points: [
      "Teeth whitening for a brighter smile",
      "Veneers to improve tooth appearance",
      "Bonding for chipped or cracked teeth",
      "Smile makeovers tailored to your needs",
    ],
  },
  {
    name: "Crowns & Bridges",
    description: "Restore damaged or missing teeth for a perfect smile.",
    details: "Crowns and bridges are essential for restoring the strength and appearance of your teeth. These durable solutions help maintain proper dental function and aesthetics.",
    points: [
      "Custom-made crowns for damaged teeth",
      "Bridges to replace missing teeth",
      "Long-lasting and natural-looking materials",
      "Improves bite and chewing ability",
    ],
  },
  {
    name: "Emergency Care",
    description: "Immediate dental assistance for urgent needs.",
    details: "Dental emergencies can be painful and stressful. We provide quick and effective treatment to relieve pain and prevent further complications.",
    points: [
      "Same-day appointments for urgent care",
      "Treatment for broken or knocked-out teeth",
      "Pain relief for severe toothaches",
      "Emergency root canals and extractions",
    ],
  },
  {
    name: "Implants",
    description: "Permanent solutions for missing teeth.",
    details: "Dental implants are the gold standard for replacing missing teeth. They provide stability, durability, and a natural look.",
    points: [
      "Titanium posts for strong support",
      "Restores full chewing ability",
      "Prevents bone loss in the jaw",
      "A lifetime solution for missing teeth",
    ],
  },
  {
    name: "Laser Gum Surgery",
    description: "Advanced laser treatments for gum health.",
    details: "Laser gum surgery is a minimally invasive procedure that treats gum disease effectively and promotes faster healing.",
    points: [
      "No scalpels or stitches required",
      "Reduced bleeding and swelling",
      "Faster recovery time",
      "Precise treatment for gum disease",
    ],
  },
  {
    name: "Gum Recession Treatment",
    description: "Protect and restore your gums for a healthy smile.",
    details: "Gum recession exposes tooth roots and can lead to sensitivity and decay. We offer advanced treatments to restore and protect your gums.",
    points: [
      "Minimally invasive grafting procedures",
      "Reduces tooth sensitivity",
      "Prevents further gum recession",
      "Improves overall gum health",
    ],
  },
  {
    name: "Root Canals",
    description: "Save infected teeth with expert care.",
    details: "Root canals help remove infections from inside the tooth while preserving its structure. It’s a pain-free procedure that saves your natural teeth.",
    points: [
      "Removes infection and relieves pain",
      "Preserves your natural tooth",
      "Prevents further decay or extraction",
      "Quick recovery with minimal discomfort",
    ],
  },
  {
    name: "Invisalign",
    description: "Straighten your teeth with clear aligners.",
    details: "Invisalign offers a nearly invisible way to straighten your teeth without the need for metal braces.",
    points: [
      "Comfortable and removable aligners",
      "No dietary restrictions",
      "Faster results compared to traditional braces",
      "Customized for your unique smile",
    ],
  },
  {
    name: "Teeth Whitening",
    description: "Brighten your smile with professional whitening.",
    details: "Professional teeth whitening provides superior results compared to over-the-counter products, giving you a noticeably whiter smile.",
    points: [
      "Safe and effective whitening treatments",
      "Removes deep stains and discoloration",
      "Quick and long-lasting results",
      "Boosts confidence with a brighter smile",
    ],
  },
];

const ServiceList = () => (
  <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
    
    <div className="border-b-2 border-gray-300 mb-4 w-16"></div>
    <ul className="space-y-4">
      {services.map((service, index) => (
        <li key={index} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <Link to={`/service/${index}`} className="text-gray-700 font-medium flex-grow">{service.name}</Link>
          <FaArrowRight className="text-gray-500" />
        </li>
      ))}
    </ul>
  </div>
);

const ServiceDetail = ({ index }) => {
  const service = services[index];
  if (!service) return <h1 className="text-center text-red-500">Service not found</h1>;
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-extrabold text-gray-900">{service.name}</h1>
      <p className="text-gray-700 leading-relaxed">{service.description}</p>

      {/* Additional Content */}
      <p className="text-gray-700 leading-relaxed">{service.details}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {service.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white text-center p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">Schedule Your Consultation Today!</h3>
        <p className="mt-2">Take the first step towards your perfect smile.</p>
        <a href="tel:+19194530777" className="inline-block mt-4 bg-white text-blue-600 font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-200">Call Now</a>
      </div>
    </div>
  );
};

const DentalServices = () => (
  <Router>
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <ServiceList />
      <div className="lg:col-span-2">
        <Routes>
          {/* Redirect to first service by default */}
          <Route path="/" element={<Navigate to="/service/0" replace />} />
          {services.map((_, index) => (
            <Route key={index} path={`/service/${index}`} element={<ServiceDetail index={index} />} />
          ))}
        </Routes>
      </div>
    </div>
  </Router>
);

export default DentalServices;
