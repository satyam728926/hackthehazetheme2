const express = require('express');
const router = express.Router();
const { scrapeImagesHandler } = require('../controller/scrapeController');

router.post('/', scrapeImagesHandler);

module.exports = router;
