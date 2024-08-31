import React from "react";
import linkedin from '../assets/socials/linkedin.png';
import github from '../assets/socials/github.svg';
import twitter from '../assets/socials/twitter.png';
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundColor: '#1a1a29', // Dark background
        padding: '2rem ', // Increased padding for better spacing
        textAlign: 'center',
        color: '#ffffff',
      }}
    >
      <h1
        style={{
          color: '#ff9800',
          fontWeight: '700', // Bold font weight for emphasis
          fontSize: '2.5rem', // Larger font size for better visibility
          marginTop: '0', // Removed top margin for better alignment
          marginBottom: '1.5rem', // Increased bottom margin for spacing
        }}
      >
        GET IN TOUCH
      </h1>
      <p
        style={{
          margin: '1rem auto',
          color: '#d1d1d1',
          maxWidth: '80%', // Increased max-width for better readability
          lineHeight: '1.6',
        }}
      >
        Feel free to connect with me on any of the platforms below!
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem',
        }}
      >
        <a
          href="https://www.linkedin.com/in/anurag-dutta-522777245/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            width: '50px', // Slightly larger icons for better visibility
            height: '50px',
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            className="hover:scale-105" // Added hover effect for interactivity
          />
        </a>
        <a
          href="https://github.com/iianuragii"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src={github}
            alt="GitHub"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            className="hover:scale-105"
          />
        </a>
        <a
          href="https://twitter.com/_iianuragii_"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src={twitter}
            alt="Twitter"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            className="hover:scale-105"
          />
        </a>
      </div>
      <ScrollToTop
        smooth
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#ff9800',
          borderRadius: '50%',
          width: '50px', // Slightly larger button for better visibility
          height: '50px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Increased shadow for a better effect
        }}
      />
    </div>
  );
};

export default Contact;
