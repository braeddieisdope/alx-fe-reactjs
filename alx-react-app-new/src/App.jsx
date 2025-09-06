import React, { useState } from 'react';

// Counter Component - Created within App.jsx to avoid import errors
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl font-semibold text-gray-700">Current Count: <span className="text-blue-600">{count}</span></p>
      <div className="flex gap-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// Header Component
const Header = ({ title = "React App" }) => (
    <header className="bg-blue-600 text-white p-6 rounded-t-2xl">
        <h1 className="text-3xl font-bold">{title}</h1>
    </header>
);

// Main Content Component
const MainContent = ({ content = "Welcome to our page!" }) => (
    <main className="p-6 bg-white text-gray-800">
        <p>{content}</p>
    </main>
);

// Footer Component
const Footer = ({ year = "2023" }) => (
    <footer className="bg-gray-800 text-white p-4 rounded-b-2xl text-sm">
        <p>&copy; {year} My React App</p>
    </footer>
);

// User Profile Component
const UserProfile = ({ name, age, bio }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1 mb-4">Age: {age}</p>
        <p className="text-center text-gray-700">{bio}</p>
    </div>
);

// Main App Component
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans antialiased">
        <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full mb-8">
            <Header title="My Favorite Cities" />
            <MainContent content="I love to visit New York, Paris, and Tokyo." />
            <Footer year="2023" />
        </div>
        <UserProfile 
            name="Alice" 
            age="25" 
            bio="Loves hiking and photography" 
        />
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-xs w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Counter App</h2>
            <Counter />
        </div>
    </div>
  );
}

export default App;
