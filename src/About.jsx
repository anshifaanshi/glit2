// HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import DarkVeil from './AboutComponents/DarkVeil'; 
import AboutSection from "./HomeComponents/AboutSection";
import Footer from "./HomeComponents/Footer";


const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section with DarkVeil */}
      <div style={styles.heroContainer}>
        <DarkVeil
          hueShift={120} // greenish tint
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          speed={0.5}
          scanlineFrequency={50}
          warpAmount={0.02}
        />

        {/* Top-left text */}
        <div style={styles.topLeftText}>WELCOME TO GLINT</div>

        {/* Centered content */}
        <div style={styles.centerContent}>
          <h1 style={styles.heading}>We Are Glint</h1>
          <button
            style={styles.button}
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* About Section below DarkVeil */}
      <AboutSection />
      <Footer/>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  topLeftText: {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "1rem",
    fontWeight: "bold",
    zIndex: 2,
  },
  centerContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 2,
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "900",
    marginBottom: "20px",
    color: "#ffffff",
  },
  button: {
    padding: "12px 30px",
    border: "2px solid white",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default About;
