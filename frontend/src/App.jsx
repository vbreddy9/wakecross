import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import WhyChooseAndContactForm from './WhyChooseAndContactForm';
import ContactDetails from './ContactDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseAndContactForm />
      <ServicesSection />
      <ContactDetails/>
      <Footer />
    </div>
  );
};

export default App;
