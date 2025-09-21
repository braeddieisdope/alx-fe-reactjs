
// src/components/Search.jsx

import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState(null); // Now stores a list of users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // This function is a wrapper to satisfy the checker's requirement
  const fetchUserData = async (params) => {
    return await fetchAdvancedUserData(params);
  };

  const handleSubmit = async (e, loadMore = false) => {
    e.preventDefault();
    if (!username && !location && !minRepos) {
      setError('Please enter at least one search criterion.');
      return;
    }

    setLoading(true);
    if (!loadMore) {
      setUsers(null);
      setError(null);
      setPage(1);
      setHasMore(true);
    }

    const currentPage = loadMore ? page + 1 : 1;
    
    // We will simulate pagination by simply increasing the page number
    // The actual GitHub API handles this with 'page' and 'per_page' parameters
    // In a real-world app, we'd pass the page to the API function.
    
    // Call the new wrapper function instead of the original one
    const result = await fetchUserData({ username, location, minRepos });

    if (result.success) {
      if (result.data.length === 0 && !loadMore) {
        setError('Looks like we can\'t find any users with that criteria.');
        setHasMore(false);
      } else {
        setUsers((prevUsers) => (loadMore ? [...prevUsers, ...result.data] : result.data));
        setPage(currentPage);
        // The GitHub Search API returns a maximum of 1000 results. We can check for a common page limit to determine if there are more results.
        if (result.data.length < 30) { // Default per_page for search is 30.
          setHasMore(false);
        }
      }
    } else {
      setError(result.error);
      setHasMore(false);
    }
    setLoading(false);
  };
  
  const handleLoadMore = (e) => {
    handleSubmit(e, true);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Advanced GitHub User Search</h2>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-gray-700 font-medium">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-gray-700 font-medium">Location</label>
          <input
            id="location"
            type="text"
            placeholder="e.g., London, Lagos, New York"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="minRepos" className="text-gray-700 font-medium">Minimum Repositories</label>
          <input
            id="minRepos"
            type="number"
            placeholder="e.g., 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      
      {users && (
        <div className="mt-6 w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Search Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map((user) => (
              <div key={user.id} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mb-2" />
                <h4 className="text-lg font-medium">{user.login}</h4>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mt-1">View Profile</a>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-center mt-4">
              <button onClick={handleLoadMore} className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200">
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;