import React from 'react';

const BusinessSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <p style={styles.whatWeDo}>WHAT WE DO</p>
        <h1 style={styles.headline}>
          We've got everything you need to launch and grow your business
        </h1>
        <div style={styles.line}></div>

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17.5C7 18.3284 6.32843 19 5.5 19C4.67157 19 4 18.3284 4 17.5C4 16.6716 4.67157 16 5.5 16C6.32843 16 7 16.6716 7 17.5Z" fill="#3DDB84"/>
                <path d="M10 16L12 16L12 11C12 9.89543 11.1046 9 10 9L7.00001 9V17.5C7.00001 18.3284 6.32843 19 5.50001 19H4C3.44772 19 3 18.5523 3 18V5C3 4.44772 3.44772 4 4 4H10C11.6569 4 13 5.34315 13 7V16H10ZM19 4H15C14.4477 4 14 4.44772 14 5V18C14 18.5523 14.4477 19 15 19H19C19.5523 19 20 18.5523 20 18V5C20 4.44772 19.5523 4 19 4Z" fill="#3DDB84"/>
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Brand Identity</h2>
            <p style={styles.cardText}>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3Z" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 13L14 17" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 13L10 17" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Illustration</h2>
            <p style={styles.cardText}>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>

          {/* New row begins here */}

          <div style={styles.card}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.41 7.59L12 13L6.59 7.59L5.17 9L12 15.83L18.83 9L17.41 7.59Z" fill="#3DDB84"/>
                <path d="M16 11H8V13H16V11Z" fill="#3DDB84"/>
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Marketing</h2>
            <p style={styles.cardText}>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM10 13H14V11H10V13Z" fill="#3DDB84"/>
                <path d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" fill="#3DDB84"/>
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Web Design</h2>
            <p style={styles.cardText}>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>

          {/* New row continues */}

          <div style={styles.card}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 16V8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16Z" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 11H21" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14H16" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Packaging Design</h2>
            <p style={styles.cardText}>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10H17" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 14H17" stroke="#3DDB84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Web Development</h2>
            <p style={styles.cardText}>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    backgroundColor: '#ffffff',
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '50vh',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1000px',
    textAlign: 'center',
  },
  whatWeDo: {
    color: '#1ece6dff',
    fontSize: '14px',
    fontWeight: '900',
    letterSpacing: '1px',
    marginBottom: '10px',
  },
  headline: {
    color: '#020202ff',
    fontSize: '52px',
    fontWeight: '900',
    lineHeight: '1.2',
    margin: '0 auto 40px auto',
    maxWidth: '700px',
  },
  line: {
    width: '300px',
    height: '5px',
    backgroundColor: '#d0cbcbff',
    margin: '0 auto 60px auto',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  card: {
    width: '400px',
    textAlign: 'center',
    marginBottom: '40px', // Add some space between rows
  },
  iconContainer: {
    marginBottom: '20px',
  },
  cardTitle: {
    color: '#333333',
    fontSize: '24px',
    fontWeight: '900',
    marginBottom: '15px',
  },
  cardText: {
    color: '#4b4949ff',
    fontSize: '12px',
    lineHeight: '1.6',
  },
};

export default BusinessSection;