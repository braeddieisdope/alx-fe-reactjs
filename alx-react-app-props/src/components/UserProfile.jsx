
import React, { useContext } from 'react';

// Initialize a Context using React.createContext()
const UserContext = React.createContext();

// UserDetails Component consumes the context.
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

function UserProfile() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <UserContext.Provider value={userData}>
        <UserDetails />
      </UserContext.Provider>
    </div>
  );
}

export default UserProfile;