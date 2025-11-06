import React from 'react'
import ContactSection from './HomeComponents/ContactSection'
import AnimatedNavSection from './ContactComponents/FirstSection'
import Footer from './HomeComponents/Footer'
function Contact() {
  return (
    <div>
 <AnimatedNavSection/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Contact