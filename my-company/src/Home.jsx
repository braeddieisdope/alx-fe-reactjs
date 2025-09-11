
import React from 'react';

function Home() {
  const pageStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#444',
    marginBottom: '15px'
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    lineHeight: '1.5'
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Welcome to Our Company</h1>
      <p style={textStyle}>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;