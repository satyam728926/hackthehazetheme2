import React from 'react';
import '../App.css'; // <-- Make sure this file exists and is imported

export default function ImageGrid({ images }) {
  if (!images || images.length === 0) {
    return <p className="no-images">No images found.</p>;
  }

  return (
    <div className="image-grid-wrapper">
      <div className="image-grid">
        {images.map((imgUrl, index) => (
          <div
            key={index}
            className="image-card"
          >
            <img
              src={imgUrl}
              alt={`Scraped image ${index + 1}`}
              className="image"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
