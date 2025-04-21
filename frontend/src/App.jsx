import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ContactDetails from './ContactDetails';
import RegistrationForm from './RegistrationForm.jsx';
import ReviewCard from './ReviewCard.jsx';
import WorryFreeSection from './WorryFreeSection.jsx';
import InsuranceInfo from './InsuranceInfo.jsx';
import DoctorProfile from './DoctorProfile.jsx';
import DentalFAQ from './DentalFAQ.jsx';
import ThankYouPage from './ThankYou.jsx'; 

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <RegistrationForm />
    <DoctorProfile />
    <InsuranceInfo />
    <WorryFreeSection />
    <ReviewCard />
    <DentalFAQ />
    <ContactDetails />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
    </Routes>
  );
};

export default App;
