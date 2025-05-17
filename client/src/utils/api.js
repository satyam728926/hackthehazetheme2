import axios from 'axios';

export const scrapeImages = async (urls) => {
  const response = await axios.post('http://localhost:5000/api/scrape', { urls });
  return response.data;
};
