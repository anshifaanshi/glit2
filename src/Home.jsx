import React from 'react';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import ContactSection from './HomeComponents/ContactSection';
import Footer from './HomeComponents/Footer';
import TestimonialCarousel from './HomeComponents/TestimonialCarousel';
import SplineScene from './HomeComponents/Spline';
import RecentWorksSection from './HomeComponents/RecentWorkSection';
import BusinessSection from './HomeComponents/BuisnessSection';

const Home = () => {
  return (
    <div>
      <div id="home-section">
        <HeroSection />
      </div>

      <div id="about-section">
        <AboutSection />
      </div>

      

      <div id="business-section">
        <BusinessSection />
      </div>
<div id="spline-section">
        <SplineScene />
      </div>
      <div id="recent-works-section">
        <RecentWorksSection />
      </div>

      <div id="testimonial-section">
        <TestimonialCarousel />
      </div>

      <div id="contact-section">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
