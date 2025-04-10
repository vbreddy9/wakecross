import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ContactDetails from './ContactDetails';
import RegistrationForm from './RegistrationForm.jsx';
import ReviewCard from './ReviewCard.jsx';
import WorryFreeSection from './WorryFreeSection.jsx';
import InsuranceInfo from './InsuranceInfo.jsx';
import DentalFAQ from './DentalFAQ.jsx';



const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RegistrationForm/>
      <ReviewCard/>
      <WorryFreeSection/>
      <InsuranceInfo/>
      <DentalFAQ/>
      <ContactDetails/>
      <Footer />
    </div>
  );
};

export default App;
