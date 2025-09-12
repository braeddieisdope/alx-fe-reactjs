
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    padding: '5px',
    borderRadius: '5px'
  };

  const navStyle = {
    backgroundColor: '#333',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;