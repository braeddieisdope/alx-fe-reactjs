import React from 'react';

function WelcomeMessage() {
    return (
        <div className="p-8 bg-white shadow-xl rounded-2xl text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello everyone, I am learning React at ALX!</h1>
            <p className="text-lg text-gray-600 mb-1">This is a simple JSX component.</p>
            <p className="text-lg text-gray-600">I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;