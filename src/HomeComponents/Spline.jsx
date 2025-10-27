import React from "react";
import Spline from "@splinetool/react-spline";

function SplineScene() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Solid overlay behind the logo */}
      <div
        style={{
          position: "absolute",
          bottom: 10,   // distance from bottom
          right: 10,    // distance from right
          width: 160,   // adjust based on logo size
          height: 60,   // adjust based on logo size
          backgroundColor: "#59BC53", // bold solid color
          borderRadius: 5,
          zIndex: 1
        }}
      />
      {/* Spline Canvas */}
      <Spline scene="https://prod.spline.design/4mbwyVVQoE9nlhNW/scene.splinecode" />
    </div>
  );
}

export default SplineScene;
