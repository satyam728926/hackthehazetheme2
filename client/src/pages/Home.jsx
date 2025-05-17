import React, { useState } from 'react';
import UrlInputForm from '../Components/UrlInputForm';
import ImageGrid from '../Components/ImageGrid';
import Loader from '../Components/Loader';
import { scrapeImages } from '../utils/api';
import '../App.css';

export default function Home() {
  const [images, setImages] = useState([]);   // Store fetched images
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState('');     // Track error message

  // Handle URL submission and fetch images
  const handleScrape = async (urls) => {
    setLoading(true);
    setImages([]);
    setError('');

    try {
      const data = await scrapeImages(urls); // Call API to scrape images
      setImages(data.images || []);
    } catch (err) {
      // Show error message on failure
      setError('❌ Failed to fetch images. Make sure the URLs are correct and the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      {/* Scraper Input Box */}
      <div className="scraper-box">
        <h1 className="scraper-title">🖼️ Image Scraper</h1>
        <UrlInputForm onSubmit={handleScrape} /> {/* URL input form */}
        {error && <p className="error-text">{error}</p>} {/* Show error if exists */}
      </div>

      {/* Image Results Section */}
      <div className="image-results-box">
        <h2 className="results-title">Results</h2>

        {/* Show loading spinner */}
        {loading && <Loader />}

        {/* Show message if no images and not loading */}
        {!loading && images.length === 0 && !error && (
          <p className="text-center no-images-text">No images to display. Try entering a valid URL above.</p>
        )}

        {/* Show image grid if images exist */}
        {!loading && images.length > 0 && <ImageGrid images={images} />}
      </div>
    </div>
  );
}
