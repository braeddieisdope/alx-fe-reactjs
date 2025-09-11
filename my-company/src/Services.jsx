
import React from 'react';

function Services() {
  const pageStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '80vh'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#444',
    marginBottom: '20px',
    marginTop: '20px'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'left'
  };

  const listItemStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '1.1rem',
    color: '#555'
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Technology Consulting</li>
        <li style={listItemStyle}>Market Analysis</li>
        <li style={listItemStyle}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;