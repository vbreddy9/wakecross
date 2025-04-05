import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "It's recommended to visit the dentist every six months for a routine check-up and cleaning.",
  },
  {
    question: "Does teeth whitening damage enamel?",
    answer: "No, professional teeth whitening is safe when performed correctly. It does not damage the enamel.",
  },
  {
    question: "What are the benefits of Invisalign?",
    answer: "Invisalign aligners are nearly invisible, comfortable, and removable, making them a great alternative to metal braces.",
  },
  {
    question: "Do I need a dental implant or a bridge?",
    answer: "Dental implants are a long-term solution, while bridges are a good alternative if you prefer a less invasive procedure.",
  },
  {
    question: "What should I do in case of a dental emergency?",
    answer: "If you have a broken tooth, severe pain, or bleeding, contact your dentist immediately for urgent care.",
  },
];

const DentalFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Frequently Asked <span className="text-customBlue">Questions</span>
        </h2>

        {/* Underline */}
        <div className="w-16 h-1 bg-customBlue mx-auto my-4"></div>

        {/* FAQ Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 mt-8 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-lg font-medium text-gray-700 hover:text-customBlue transition"
              >
                {faq.question}
                <FaChevronDown
                  className={`text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="text-gray-600 px-4 pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalFAQ;
