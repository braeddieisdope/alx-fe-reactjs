import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Navbar Component
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

// Footer Component (Optional)
function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </footer>
  );
}

// Home Page
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

// About Page
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

// Services Page
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

// Contact Page
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
  };

  const pageStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    minHeight: '80vh'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  };

  const messageStyle = {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '20px'
  };

  return (
    <div style={pageStyle}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p style={messageStyle}>Thank you for your message! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '100px' }}
          />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      )}
    </div>
  );
}

// App Component with Routing
function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  return (
    <BrowserRouter>
      <div style={containerStyle}>
        <Navbar />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
