const { validateUrls } = require('../utils/validator');
const { scrapeImages } = require('../services/scraper');


exports.scrapeImagesHandler = async (req, res) => {
  const { urls } = req.body; // Extract URLs from the request body

  // Validate the URL list; if invalid, return a 400 error
  if (!validateUrls(urls)) {
    return res.status(400).json({ error: 'Please provide an array of valid URLs.' });
  }

  try {
    // Perform image scraping using the service function
    const images = await scrapeImages(urls);

    // Return the list of scraped image URLs as a JSON response
    res.json({ images });
  } catch (error) {
    // If something goes wrong during scraping, return a 500 error
    res.status(500).json({ error: error.message || 'Scraping failed' });
  }
};
