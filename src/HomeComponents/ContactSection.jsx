import React from 'react';
import './ContactSection.css'; 
const ContactSection = () => {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message submitted! (Form functionality not fully implemented)');
        
    };

    return (
        <section className="contact-section-container">
            <div className="contact-header">
                <p className="contact-pre-title">CONTACT US</p>
                <h1 className="contact-main-title">
                    Reach out for a new project or just say hello
                </h1>
            </div>

            <div className="contact-content-wrapper">
                
               
                <div className="contact-form-area">
                    <h2 className="form-heading">SEND US A MESSAGE</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Your Message" rows="6" required></textarea>
                        
                       
                        <button type="submit" className="submit-button">SUBMIT</button>
                    </form>
                </div>
   <div className="contact-info-area">
                    <h2 className="info-heading">CONTACT INFO</h2>

                    <div className="info-group">
                        <h3 className="info-title">Where to Find Us</h3>
                        <p>1600 Amphitheatre Parkway</p>
                        <p>Mountain View, CA</p>
                        <p>94043 US</p>
                    </div>

                    <div className="info-group">
                        <h3 className="info-title">Email Us At</h3>
                        <p>contact@glintsite.com</p>
                        <p>info@glintsite.com</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;