// src/components/ContactHeaderOneFile.js
import React from 'react';

const ContactHeader = () => {
  // 1. Define the unique CSS for the Wavy Background pattern
  // This is the only part that cannot be done with simple Tailwind utility classes.
  const wavyBackgroundStyle = {
    // Soft green/white gradient bleed
    background: 'linear-gradient(to bottom, #f0fff0, #ffffff)', 
    
    // Faint, repeating, white wavy pattern using radial gradients
    backgroundImage: `
      repeating-radial-gradient(
        circle at 0 100%, 
        rgba(255, 255, 255, 0.5) 1px, 
        transparent 20px
      ),
      repeating-radial-gradient(
        circle at 100% 0, 
        rgba(255, 255, 255, 0.5) 1px, 
        transparent 20px
      )
    `,
    backgroundSize: '80px 80px', // Controls the wave density
    opacity: 0.9, // Makes the pattern subtle
  };

  return (
    // Outer container with Tailwind classes for white background and centering
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-full mx-auto">
      
      {/* 2. Inner container for the content, applying the custom style and 'group' for hover */}
      <div 
        className="group relative flex flex-col items-center justify-center p-12 h-64 transition-all duration-300"
        style={wavyBackgroundStyle} // Applying the unique background style
      >
        
        {/* Main Content: Centered Column */}
        <div className="flex flex-col items-center">
          
          {/* Main "Contact Us" Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-none">
            
            {/* 3. The Green Highlighted Span with Hover Effects */}
            <span 
              className="px-4 py-2 bg-lime-400 rounded-lg inline-block 
                         transition-colors duration-300 ease-in-out
                         group-hover:bg-white group-hover:shadow-md" // **Green Background turns WHITE on hover**
            >
              <span className="text-gray-900 group-hover:text-lime-700">Contact</span> {/* Text color for visibility */}
            </span>
            
            {/* The rest of the text, kept black */}
            <span className="ml-2">Us</span>
          </h1>

          {/* Breadcrumb / Sub-text */}
          <p className="text-sm text-gray-500 mt-3">
            Home / Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;