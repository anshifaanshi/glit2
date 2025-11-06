import React from 'react';

export default function AnimatedNavSection() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '150px',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '-100%',
    left: '-100%',
    width: '300%',
    height: '300%',
    background: 'linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111), linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111)',
    backgroundSize: '60px 60px',
    backgroundPosition: '0 0, 30px 30px',
    animation: 'moveBackground 20s linear infinite',
    opacity: 0.3
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  };

  const textStyle = {
    fontSize: '24px',
    color: ' #4CAF50',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    textDecoration: 'none',
    fontWeight: '500'
  };

  const dividerStyle = {
    width: '2px',
    height: '40px',
    backgroundColor: '#34d399',
    transform: 'rotate(15deg)',
    opacity: 0.7
  };

  const [homeHover, setHomeHover] = React.useState(false);
  const [aboutHover, setAboutHover] = React.useState(false);

  return (
    <>
      <style>
        {`
          @keyframes moveBackground {
            0% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
            }
            25% {
              transform: translate3d(-30px, -30px, 20px) rotateX(5deg) rotateY(5deg);
            }
            50% {
              transform: translate3d(-60px, 0, 0) rotateX(0deg) rotateY(10deg);
            }
            75% {
              transform: translate3d(-30px, 30px, -20px) rotateX(-5deg) rotateY(5deg);
            }
            100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
            }
          }
        `}
      </style>
      
      <div style={containerStyle}>
        <div style={backgroundStyle}></div>
        
        <div style={contentStyle}>
          <a 
            href="/"
            style={{...textStyle, opacity: homeHover ? 0.7 : 1}}
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
          >
            Home Page
          </a>
          
          <div style={dividerStyle}></div>
          
          <a 
            href="/about"
            style={{...textStyle, opacity: aboutHover ? 0.7 : 1}}
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            About Us
          </a>
        </div>
      </div>
    </>
  );
}