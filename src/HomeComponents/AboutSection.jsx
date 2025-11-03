
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Custom Hook for Counting Animation ---
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const elementRef = useRef(null); // Ref for the element to observe visibility

  // Check if the element is in view
  const isInView = useInView(elementRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!isInView) {
      setCount(0); // Reset count if you want it to restart when scrolling back (though 'once: true' prevents this in useInView)
      return;
    }

    startTimeRef.current = null;

    const animateCount = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * end);

      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    const animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return { count, elementRef };
};

// --- Counter Item Component ---
const CounterItem = ({ number, label, isLast }) => {
  const { count, elementRef } = useCounter(number, 2500); // 2.5 second duration

  return (
    <div style={styles.counterItem} ref={elementRef}>
      <p style={styles.counterNumber}>{count}</p>
      <p style={styles.counterLabel}>{label}</p>
      {!isLast && <div style={styles.counterSeparator}></div>}
    </div>
  );
};

// --- CSS-in-JS: Define styles as JavaScript objects ---
const styles = {
  // --- About Section Styles (Kept mostly from your original code) ---
  aboutContainer: {
    backgroundColor: '#52c34c', // Bright green background (Matched to image)
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: '50px 20px',
    boxSizing: 'border-box',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  aboutContent: {
    width: '100%',
    maxWidth: '900px',
    textAlign: 'center',
    marginTop: '50px',
  },
  helloThere: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: '0.85em',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    fontWeight: '1000',
    marginBottom: '5px',
  },
  weAreGlint: {
    color: 'white',
    fontSize: '4em',
    fontWeight: '900',
    margin: 0,
    paddingBottom: '20px',
  },
  aboutDivider: {
    width: '400px',
    height: '2px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: '15px auto',
  },
  aboutParagraph: {
    color: 'black',
    fontSize: '1.2em',
    lineHeight: '1.7',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '80%',
    fontWeight: 'bold', // Adjusted to match the bold look in the image
  },

  // --- NEW: Counter Section Styles ---
  counterSection: {
    backgroundColor: '#52c34c', // Match the main background
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 0',
    marginTop: '20px', // Space between the text and stats
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap', // Allow wrap on small screens
  },
  counterItem: {
    flex: '1 1 25%', // Each item takes roughly 25% of the width
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '200px', // Prevent items from getting too squished
  },
  counterNumber: {
    color: '#ffffff',
    fontSize: '70px', // Large font size
    fontWeight: '900',
    lineHeight: '1',
    margin: '0 0 10px 0',
  },
  counterLabel: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '600',
    textTransform: 'none',
    margin: 0,
  },
  counterSeparator: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1px',
    height: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Subtle white line
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.3, 
      duration: 0.6 
    }
  },
};

const statData = [
    { number: 127, label: "Awards Received" },
    { number: 1505, label: "Cups of Coffee" },
    { number: 109, label: "Projects Completed" },
    { number: 102, label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <div style={styles.aboutContainer}>
      {/* WORKAROUND: Including a <style> block for media queries */}
      <style>
        {`
          /* Responsive adjustments (for mobile screens) */
          @media (max-width: 900px) {
            .counter-separator-responsive {
              display: none !important; /* Hide separator on small screens */
            }
            .counter-item-responsive {
                flex: 1 1 50% !important; /* Two items per row on tablets/mobile */
                margin-bottom: 40px;
            }
          }
        `}
      </style>

      <div style={styles.aboutContent}>
        
        {/* HELLO THERE text */}
        <motion.p 
          style={styles.helloThere}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          HELLO THERE
        </motion.p>
        
        {/* We Are Glint headline */}
        <motion.h2 
          style={styles.weAreGlint}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          We Are Glint
        </motion.h2>

        {/* Horizontal Line (divider) */}
        <div style={styles.aboutDivider}></div>

        {/* Paragraph text */}
        <motion.p 
          style={styles.aboutParagraph}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </motion.p>
      </div>

      {/* --- NEW: Counter Section --- */}
      <div style={styles.counterSection}>
        <div style={styles.counterContainer}>
          {statData.map((stat, index) => (
            <CounterItem
              key={stat.label}
              number={stat.number}
              label={stat.label}
              isLast={index === statData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;