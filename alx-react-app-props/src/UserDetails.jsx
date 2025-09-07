
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-8 w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">User Details (from Context)</h3>
      <div className="space-y-2 text-gray-600">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
    </div>
  );
}

export default UserDetails;