import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import AboutSection from './HomeComponents/AboutSection'

import ContactSection from './HomeComponents/ContactSection'
import Footer from './HomeComponents/Footer'
import TestimonialCarousel from './HomeComponents/TestimonialCarousel'

import RecentWorksSection from './HomeComponents/RecentWorkSection'
import BusinessSection from './HomeComponents/BuisnessSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      
   <BusinessSection/>
      <RecentWorksSection/>
   <TestimonialCarousel/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home