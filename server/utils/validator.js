// Validate that input is a non-empty array of valid URLs
function validateUrls(urls) {
  // Check if 'urls' is an array and not empty
  if (!Array.isArray(urls) || urls.length === 0) return false;

  // Basic regex pattern to match http(s) URLs
  const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

  // Ensure every item in the array is a string and matches the URL pattern
  return urls.every((url) => typeof url === 'string' && urlRegex.test(url));
}

module.exports = { validateUrls };
