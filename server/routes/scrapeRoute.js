const express = require('express');
const router = express.Router();

// Import the handler function for scraping images
const { scrapeImagesHandler } = require('../controller/scrapeController');

// Define a POST route to trigger the image scraping handler
router.post('/', scrapeImagesHandler);

// Export the router to be used in the main app
module.exports = router;
