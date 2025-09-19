
// github-user-search/src/services/githubService.js

const GITHUB_API_URL = 'https://api.github.com/users';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<object>} A promise that resolves with the user data.
 * @throws {Error} Throws an error if the user is not found or the API call fails.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/${username}`);

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