
import React from 'react';

function About() {
  const pageStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    minHeight: '80vh'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#444',
    marginBottom: '15px',
    marginTop: '20px'
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.5'
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <p style={textStyle}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;