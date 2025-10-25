import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Subscription attempt! (Form functionality not fully implemented)');
    };

    return (
        <footer className="site-footer">
            <div className="footer-content-main">
                
                {/* Left Column: Logo and About Text */}
                <div className="footer-about">
                    <h3 className="footer-logo">Glint.</h3>
                    <p className="footer-text">
                        Proin eget tortor risus. Mauris blandit aliquet elit. eget
                        tincidunt nibh pulvinar a. Praesent sapien massa, convallis
                        a pellentesque nec, egestas non nisi. Mauris blandit
                        aliquet elit. eget tincidunt nibh pulvinar a. Nulla porttitor
                        accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                        Quaerat voluptas autem necessitatibus vitae aut.
                    </p>
                </div>

                {/* Right Column: Newsletter Subscription */}
                <div className="footer-subscribe">
                    <h3 className="subscribe-title">Get Notified</h3>
                    <p className="subscribe-text">
                        Quia quo qui sed odit. Quaerat voluptas autem
                        necessitatibus vitae aut non alias sed quia. Ut itaque enim
                        optio ut excepturi deserunt iusto porro.
                    </p>
                    <form className="subscribe-form" onSubmit={handleSubscribe}>
                        {/* Assuming the Email Address text is a placeholder or a label inside the input area */}
                        <div className="input-group">
                            {/* A simple span or icon can be used for the email icon, here we use text */}
                            <span className="email-icon">📧</span> 
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                required 
                            />
                        </div>
                        <button type="submit" className="subscribe-button">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="footer-bottom">
                <p className="copyright-text">
                    © Copyright Glint 2022
                </p>
                <p className="template-credit">
                    Site Template by <a href="#colorlib">Colorlib</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;