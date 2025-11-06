import React from 'react';
import { FaLink } from 'react-icons/fa'; // Used for the link icon overlay

/**
 * A reusable component for a single portfolio item.
 */
const PortfolioItem = ({ imageUrl, title, subtitle }) => {
  // Styles for the image container (for positioning the overlay content)
  const itemContainerStyles = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    cursor: 'pointer',
    // Ensures all images start with the same size
    minHeight: '350px', 
    backgroundColor: 'black', // Placeholder color while loading
  };

  // Styles for the image itself
  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
    // Apply a darkness filter to the Beetle image to match the screenshot
    filter: (title === 'THE BEETLE' || title === 'SHUTTERBUG') ? 'brightness(0.2) saturate(0.8)' : 'none',
  };
  
  // Styles for the overlay content (title, subtitle, and link icon)
  const overlayContentStyles = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: 'white',
    textAlign: 'left',
    zIndex: 10,
  };

  // Styles for the link icon (top left)
  const linkIconStyles = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid white',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  };


  return (
    <div 
      style={itemContainerStyles}
      // Simple hover effect for demonstration
      onMouseEnter={(e) => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
    >
      <div style={linkIconStyles}>
        <FaLink size={16} />
      </div>
      
      <img 
        src={imageUrl} 
        alt={title} 
        style={imageStyles} 
      />

      <div style={overlayContentStyles}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 5px 0' }}>{title}</h3>
        <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>{subtitle}</p>
      </div>
    </div>
  );
};

/**
 * The main component that renders the 2x2 "Recent Works" section.
 */
const RecentWorksGrid = () => {
  // --- All four Image URLs and Data ---
  const worksData = [
    {
      imageUrl: 'https://preview.colorlib.com/theme/glint/images/portfolio/woodcraft@2x.jpg',
      title: 'WOODCRAFT',
      subtitle: 'Branding',
    },
    {
      imageUrl: 'https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-shutterbug.jpg',
      title: 'SHUTTERBUG',
      subtitle: 'Web Design',
    },
    {
      imageUrl: 'https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-beetle.jpg',
      title: 'THE BEETLE',
      subtitle: 'Web Development',
    },
    {
      imageUrl: 'https://preview.colorlib.com/theme/glint/images/portfolio/grow-green@2x.jpg',
      title: 'GROW GREEN',
      subtitle: 'Photography',
    },
  ];

  // --- Styles for the Main Section ---
  const sectionStyles = {
    backgroundColor: '#1a1a1a', 
    color: '#ffffff', 
    padding: '80px 40px', 
    textAlign: 'center', 
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    position: 'relative', 
    overflow: 'hidden', 
  };

  // --- Styles for the "MENU" Button ---
  const menuButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: ' #4CAF50', 
    color: '#1a1a1a', 
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: 'none',
    outline: 'none',
  };

  // --- Styles for the Text Content ---
  const subtitleStyles = {
    color: ' #4CAF50', 
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '15px',
    textTransform: 'uppercase',
  };

  const headingStyles = {
    fontSize: '48px', 
    fontWeight: '800', 
    lineHeight: '1.2',
    maxWidth: '800px', 
    margin: '0 auto 40px auto', 
  };

  const dividerStyles = {
    width: '200px', 
    height: '2px',
    backgroundColor: ' #4CAF50', 
    margin: '0 auto 60px auto', 
  };

  // --- Styles for the Image Grid (2x2) ---
  const imageGridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', 
    gap: '30px', 
    maxWidth: '1200px', 
    margin: '0 auto', 
  };

  return (
    <div style={sectionStyles}>
     

      <p style={subtitleStyles}>RECENT WORKS</p>
      <h1 style={headingStyles}>
        We love what we do, check out <br />
        some of our latest works
      </h1>
      <div style={dividerStyles}></div> 

      <div style={imageGridStyles}>
        {worksData.map((work, index) => (
          <PortfolioItem 
            key={index} 
            imageUrl={work.imageUrl} 
            title={work.title} 
            subtitle={work.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWorksGrid;