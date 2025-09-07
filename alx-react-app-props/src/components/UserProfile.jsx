
import React from 'react';

const UserProfile = (props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.name}</h2>
            <p className="text-gray-600 text-lg">Age: {props.age}</p>
            <p className="text-gray-500 mt-4 italic">Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
