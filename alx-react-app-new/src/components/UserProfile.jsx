
import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            border: '1px solid blue'
        }}>
            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '0.5rem'
            }}>{props.name}</h2>
            <p style={{
                color: '#4b5563',
                fontSize: '1.125rem'
            }}>Age: {props.age}</p>
            <p style={{
                color: '#6b7280',
                marginTop: '1rem',
                fontStyle: 'italic'
            }}>
                Bio: <span style={{ fontSize: '10px' }}>{props.bio}</span>
            </p>
        </div>
    );
};

export default UserProfile;