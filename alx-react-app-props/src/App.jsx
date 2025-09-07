
import React from 'react';
import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext';
import './index.css';

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
