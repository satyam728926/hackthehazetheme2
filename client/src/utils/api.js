import axios from 'axios';

// Send POST request to backend with list of URLs and return the response data
export const scrapeImages = async (urls) => {
  const response = await axios.post('http://localhost:5000/api/scrape', { urls });
  return response.data;
};
