// utils/validator.js
function validateUrls(urls) {
  if (!Array.isArray(urls) || urls.length === 0) return false;

  const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

  return urls.every((url) => typeof url === 'string' && urlRegex.test(url));
}

module.exports = { validateUrls };
