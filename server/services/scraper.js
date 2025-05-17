const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url'); // Node.js built-in

async function scrapeImages(urls) {
  let allImages = [];

  for (const url of urls) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const baseUrl = new URL(url); // Get the base URL to resolve relative paths
      const imgs = [];

      $('img').each((_, el) => {
        const src = $(el).attr('src');
        if (src) {
          // Convert relative to absolute
          const absoluteUrl = new URL(src, baseUrl).href;
          imgs.push(absoluteUrl);
        }
      });

      allImages = allImages.concat(imgs);
    } catch (err) {
      console.warn(`Failed to scrape ${url}:`, err.message);
    }
  }

  // Remove duplicates
  return [...new Set(allImages)];
}

module.exports = { scrapeImages };
