import React, { useState } from 'react';

export default function UrlInputForm({ onSubmit }) {
  const [urls, setUrls] = useState(''); // Input field value
  const [error, setError] = useState(''); // Error message state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split input by comma or newline, trim whitespace, and remove empty entries
    const cleanUrls = urls
      .split(/[\n,]+/)
      .map((url) => url.trim())
      .filter((url) => url);

    // Show error if no valid URLs
    if (cleanUrls.length === 0) {
      setError('Please enter at least one valid URL.');
      return;
    }

    // Clear error and pass cleaned URLs to parent
    setError('');
    onSubmit(cleanUrls);
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <textarea
        className="url-input"
        rows={4}
        placeholder="Enter URLs (comma or newline separated)"
        value={urls}
        onChange={(e) => setUrls(e.target.value)} // Update state on input change
      />
      {error && <p className="form-error">{error}</p>} {/* Show error if present */}
      <button type="submit" className="scrape-btn">
        Scrape Images
      </button>
    </form>
  );
}
