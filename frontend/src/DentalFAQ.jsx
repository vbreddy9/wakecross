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
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">
          Frequently Asked <span style={{ fontWeight: '100', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Questions</span>
        </h2>

        <div className="faq-box">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
              >
                {faq.question}
                <FaChevronDown
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                />
              </button>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalFAQ;
