
import React, { useState } from 'react';

// Main App component
const App = () => {
  // 1. State to store the value of the input field
  const [username, setUsername] = useState('');
  
  // 2. State to hold the fetched user data
  const [userData, setUserData] = useState(null);
  
  // 3. State to track if the API call is in progress
  const [loading, setLoading] = useState(false);
  
  // 4. State to handle and store any errors
  const [error, setError] = useState(null);

  /**
   * Fetches user data from the GitHub API.
   * This logic is now part of the component to resolve the file reference error.
   */
  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (response.status === 404) {
        // If the user is not found, we throw a specific error
        throw new Error("Looks like we can't find the user.");
      }

      if (!response.ok) {
        // Handle other HTTP errors (e.g., 500 server error)
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Re-throw the error to be handled by the component
      throw error;
    }
  };

  /**
   * Handles the form submission and initiates the API request.
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      // Reset the state and show a loading message
      setLoading(true);
      setError(null);
      setUserData(null);
  
      try {
        const user = await fetchUserData(username);
        setUserData(user);
      } catch (err) {
        setError(err.message);
      } finally {
        // Always stop the loading indicator
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          GitHub User Search
        </h1>
        
        {/* Search Form */}
        <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter a GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </form>

        {/* Conditional Rendering of Results/Status */}
        <div className="min-h-[100px] flex items-center justify-center text-center p-4">
          {/* Display loading message */}
          {loading && (
            <p className="text-gray-500 text-lg">Loading...</p>
          )}

          {/* Display error message */}
          {error && (
            <p className="text-red-500 text-lg font-medium">{error}</p>
          )}

          {/* Display user data */}
          {userData && !loading && !error && (
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg bg-gray-50 border border-gray-200 w-full animate-fadeIn">
              <img
                src={userData.avatar_url}
                alt={`${userData.login}'s avatar`}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  {userData.name || userData.login}
                </h2>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 text-md font-medium truncate inline-block mt-1"
                >
                  @{userData.login}
                </a>
                {userData.bio && (
                  <p className="text-gray-600 mt-2 text-sm">{userData.bio}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;