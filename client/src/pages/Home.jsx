import React, { useState } from 'react';
import UrlInputForm from '../Components/UrlInputForm';
import ImageGrid from '../Components/ImageGrid';
import Loader from '../Components/Loader';
import { scrapeImages } from '../utils/api';
import '../App.css';

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScrape = async (urls) => {
    setLoading(true);
    setImages([]);
    setError('');

    try {
      const data = await scrapeImages(urls);
      setImages(data.images || []);
    } catch (err) {
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
        <UrlInputForm onSubmit={handleScrape} />
        {error && <p className="error-text">{error}</p>}
      </div>

      {/* Image Results Section */}
      <div className="image-results-box">
        <h2 className="results-title">Results</h2>

        {/* Loading Spinner */}
        {loading && <Loader />}

        {/* Empty state when no images and no error and not loading */}
        {!loading && images.length === 0 && !error && (
          <p className="text-center no-images-text">No images to display. Try entering a valid URL above.</p>
        )}

        {/* Image Grid */}
        {!loading && images.length > 0 && <ImageGrid images={images} />}
      </div>
    </div>
  );
}
