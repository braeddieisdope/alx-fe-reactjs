
import React from 'react';

function MainContent() {
    return (
        <main style={{
            flex: '1',
            paddingTop: '3rem',
            paddingBottom: '3rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            textAlign: 'center',
            fontSize: '1.125rem',
            color: '#374151',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
