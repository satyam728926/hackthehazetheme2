// frontend/src/Components/UrlInputForm.jsx
import React, { useState } from 'react';

export default function UrlInputForm({ onSubmit }) {
  const [urls, setUrls] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanUrls = urls
      .split(/[\n,]+/)
      .map((url) => url.trim())
      .filter((url) => url);

    if (cleanUrls.length === 0) {
      setError('Please enter at least one valid URL.');
      return;
    }

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
        onChange={(e) => setUrls(e.target.value)}
      />
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="scrape-btn">
        Scrape Images
      </button>
    </form>
  );
}
