const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url'); 

// Scrapes all image URLs from the given list of webpage URLs
async function scrapeImages(urls) {
  let allImages = [];

  for (const url of urls) {
    try {
      // Fetch HTML content of the page
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const baseUrl = new URL(url); // Base URL for resolving relative paths
      const imgs = [];

      // Find all <img> elements and extract their 'src' attributes
      $('img').each((_, el) => {
        const src = $(el).attr('src');
        if (src) {
          // Convert relative image URLs to absolute URLs
          const absoluteUrl = new URL(src, baseUrl).href;
          imgs.push(absoluteUrl);
        }
      });

      // Accumulate all found images
      allImages = allImages.concat(imgs);
    } catch (err) {
      // Log errors but continue processing other URLs
      console.warn(`Failed to scrape ${url}:`, err.message);
    }
  }

  // Remove duplicate image URLs before returning
  return [...new Set(allImages)];
}

module.exports = { scrapeImages };
