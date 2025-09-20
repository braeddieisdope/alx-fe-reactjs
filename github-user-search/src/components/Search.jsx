
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      setError('Please enter a username.');
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);

    const result = await fetchUserData(username);

    if (result.success) {
      setUser(result.data);
    } else {
      setError('Looks like we cant find the user.');
    }

    setLoading(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="error-message">{error}</p>}

      {user && (
        <div className="user-profile">
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="avatar"
          />
          <h2>{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile on GitHub
          </a>
          <p>Followers: {user.followers}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default Search;