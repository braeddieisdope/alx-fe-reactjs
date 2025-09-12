
import React, { useState } from 'react';

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

export default Contact;