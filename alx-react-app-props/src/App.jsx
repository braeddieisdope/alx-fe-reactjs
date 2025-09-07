import React, { createContext, useContext } from 'react';

// Create the Context outside of the App component.
const UserContext = createContext();

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

// UserInfo Component is now a simple wrapper.
function UserInfo() {
  return (
    <UserDetails />
  );
}

// ProfilePage Component is a simple wrapper.
function ProfilePage() {
  return (
    <UserInfo />
  );
}

// Main App Component provides the context.
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans antialiased">
      <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full mb-8 bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Context API Refactor</h1>
        <p className="text-gray-500 text-center mb-6">This app demonstrates refactoring prop drilling using the Context API.</p>
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
