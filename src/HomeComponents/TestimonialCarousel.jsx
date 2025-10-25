import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

/**
 * A component that displays a list of visually professional testimonials.
 * It is styled to show one testimonial at a time, simulating a horizontal carousel view that is scrollable.
 */
const TestimonialCarousel = () => {
  // --- Testimonial Data Array ---
  const testimonials = [
    {
      quote: "Working with this team transformed our brand strategy. Their attention to detail and creative execution were outstanding. We saw a 40% increase in engagement within the first quarter. Truly professional, highly recommended.",
      author: "Sarah K. Williams",
      title: "CEO, Zenith Technologies",
    },
    {
      quote: "The dedication and passion they put into our web development project were evident from day one. They delivered a flawless, high-performing site ahead of schedule. A superb experience!",
      author: "Michael J. Chen",
      title: "Founder, Innovate Labs",
    },
    {
      quote: "Their marketing strategy was perfectly tailored to our niche. They helped us cut through the noise and establish a strong market presence. The results speak for themselves—we couldn't be happier.",
      author: "Jessica R. Patel",
      title: "CMO, Global Solutions",
    },
  ];

  // --- Styles for the Main Section Container ---
  const sectionStyles = {
    backgroundColor: 'black', // Deep, dark slate gray background
    color: 'white', // Off-white text for contrast
    padding: '60px 0',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    overflow: 'hidden', // Ensures scrollbar isn't visible on the section itself
  };

  // --- Styles for the Carousel Wrapper (The viewport for the slides) ---
  const carouselWrapperStyles = {
    maxWidth: '850px', // Max width of the visible testimonial
    margin: '0 auto', // Center the wrapper
    overflowX: 'scroll', // Enables horizontal scrolling
    scrollSnapType: 'x mandatory', // Forces snapping to each card
    display: 'flex',
    padding: '0 40px', // Padding on the sides for a slight view of the next/previous slide
    WebkitOverflowScrolling: 'touch',
    boxShadow: 'inset 0 10px 15px -15px rgba(0,0,0,0.5), inset 0 -10px 15px -15px rgba(0,0,0,0.5)', 
  };
  
  // --- Styles for an Individual Testimonial Card ---
  const testimonialCardStyles = {
    // These styles force the card to take up the full width of the wrapper/viewport
    flex: '0 0 100%', 
    width: '100%', 
    scrollSnapAlign: 'center', // Snaps the card to the center of the viewport
    textAlign: 'center',
    padding: '40px 0', // Padding inside the wrapper
  };

  // --- Styles for the Quote Icon ---
  const quoteIconStyles = {
    color: '#4ade80', // Soft, professional green accent
    fontSize: '36px',
    marginBottom: '30px',
  };

  // --- Styles for the Testimonial Text ---
  const quoteTextStyles = {
    fontSize: '30px',
    fontWeight: '300',
    lineHeight: '1.4',
    margin: '0 auto 40px auto',
    fontStyle: 'italic',
  };

  // --- Styles for the Author / Citation ---
  const authorNameStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '5px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const authorTitleStyles = {
    fontSize: '16px',
    fontWeight: '400',
    color: '#9ca3af',
  };

  return (
    <div style={sectionStyles}>
        <div style={{textAlign: 'center', paddingBottom: '40px'}}>
            <h2 style={{fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: 0}}>What Our Clients Say</h2>
        </div>

        <div style={carouselWrapperStyles}>
            {testimonials.map((testimonial, index) => (
                <div key={index} style={testimonialCardStyles}>
                    <FaQuoteLeft style={quoteIconStyles} />
                    
                    <p style={quoteTextStyles}>
                        "{testimonial.quote}"
                    </p>

                    <div>
                        <p style={authorNameStyles}>
                            {testimonial.author}
                        </p>
                        <p style={authorTitleStyles}>
                            {testimonial.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TestimonialCarousel;