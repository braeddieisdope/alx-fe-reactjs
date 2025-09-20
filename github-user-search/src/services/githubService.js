
// src/services/githubService.js

import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';
const GITHUB_USER_API_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_USER_API_URL}${username}`);
    return { success: true, data: response.data };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { success: false, error: 'User not found' };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
};

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = `${username}`;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);
    return { success: true, data: response.data.items };
  } catch (error) {
    return { success: false, error: 'An error occurred during the search.' };
  }
};