import React from 'react';

const services = [
  { title: "Live-in Care", description: "Providing 24/7 care and support in the comfort of the client’s own home." },
  { title: "End of Life Care", description: "Compassionate care focused on comfort and dignity during the final stages of life." },
  { title: "Diabetes Care", description: "Expert care for managing diabetes, including blood sugar monitoring and medication assistance." },
  { title: "Companion Care", description: "Providing emotional support and companionship to enhance quality of life." },
  { title: "Complex Care", description: "Specialized care for individuals with complex medical needs and chronic conditions." },
  { title: "Personal Care", description: "Assistance with daily activities like bathing, dressing, and grooming for enhanced comfort and dignity." },
  { title: "Catheter Care", description: "Skilled care for managing catheters to prevent infections and ensure comfort." },
  { title: "Cerebral Palsy Care", description: "Personalized care for individuals with cerebral palsy to improve mobility and daily functioning." },
  { title: "Dementia & Alzheimer's Care", description: "Specialized care to support those with dementia or Alzheimer's, focusing on safety and quality of life." },
  { title: "Bowel Care", description: "Comprehensive care for bowel health, including assistance with bowel management and hygiene." },
  { title: "Overnight Care", description: "Providing overnight assistance for individuals who need help during the night, including monitoring and personal care." },
  { title: "Interim Care", description: "Temporary care solutions for individuals needing short-term assistance following hospitalization or a life event." },
  { title: "Continence Care", description: "Support for individuals with continence needs, including help with managing incontinence products and personal care." },
  { title: "Emergency Care", description: "Rapid, expert response to urgent medical needs and emergencies, providing peace of mind to clients and families." },
];

const ServicesSection = () => {
  return (
    <section className="container flex items-center justify-center text-center bg-gray-50">
      <div className="flex flex-col gap-12 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our in-home care services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center place-items-center ">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
