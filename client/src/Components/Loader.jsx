import React from 'react';

export default function Loader() {
  return (
    <div className="text-center my-6">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-2 text-blue-600">Scraping images...</p>
    </div>
  );
}
// This code defines a simple loader component that displays a spinning animation and a message indicating that images are being scraped. The loader is styled using Tailwind CSS classes for a modern look.