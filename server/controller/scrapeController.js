const { validateUrls } = require('../utils/validator');
const { scrapeImages } = require('../services/scraper');

exports.scrapeImagesHandler = async (req, res) => {
  const { urls } = req.body;

  if (!validateUrls(urls)) {
    return res.status(400).json({ error: 'Please provide an array of valid URLs.' });
  }

  try {
    const images = await scrapeImages(urls);
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Scraping failed' });
  }
};
