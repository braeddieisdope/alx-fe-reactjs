
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: 'white',
      color: '#1f2937',
      textAlign: 'center',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
      fontSize: '2.25rem',
      fontWeight: '800',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;