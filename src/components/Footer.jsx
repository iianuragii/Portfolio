import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 2rem',
        marginTop: '2rem',
        marginBottom: '1.5rem',
        backgroundColor: '#2c2c2c',
        color: '#ffffff',
        opacity: '0.9',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '0.875rem',
          margin: '0',
          cursor: 'default',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.color = '#ff9800')}
        onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
      >
        © 2024 Anurag Dutta. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
