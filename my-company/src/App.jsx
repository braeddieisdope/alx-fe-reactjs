
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Footer Component
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

// Main App Component with Routing
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