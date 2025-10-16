import { useState, useEffect } from 'react';
import artworks from '../../data/artworks';

const GalleryArtworks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Official Artworks | Spectre Divide Memorial';
  }, []);

  const artworksList = Object.values(artworks).filter(artwork => 
    !artwork.src.includes('banner') && 
    !artwork.src.includes('logo') &&
    (artwork.src.includes('.webp') || artwork.src.includes('.png') || artwork.src.includes('.jpg'))
  );

  const totalPages = Math.ceil(artworksList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArtworks = artworksList.slice(startIndex, startIndex + itemsPerPage);

  const handleImageClick = (artwork) => {
    setSelectedImage(artwork);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery-artworks" className="subtab-content active">
      <div className="container" id="gallery-artworks-content">
        <div className="section-header">
          <h2 className="section-title">Official Artworks</h2>
          <p className="section-description">Visual assets from Spectre Divide.</p>
        </div>

        {/* Main Artworks Section */}
        <h3 className="gallery-section-title">Concept & Promotional Artworks</h3>
        <div className="artworks-grid concept-promotional-grid">
          {currentArtworks.map((artwork, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => handleImageClick(artwork)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                loading="lazy" 
                src={`/${artwork.src}`} 
                alt={artwork.alt}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-above-comic">
            <div className="pagination-controls">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Comics Section */}
        <h3 className="gallery-section-title">Comic</h3>
        <div className="comic-pages">
          <div className="comic-page">
            <img loading="lazy" src="/assets/placeholder.webp" alt="Comic Page 1" />
          </div>
          <div className="comic-page">
            <img loading="lazy" src="/assets/placeholder.webp" alt="Comic Page 2" />
          </div>
        </div>
      </div>

      {/* Modal for expanded image */}
      {selectedImage && (
        <div id="modal" className="modal" onClick={closeModal}>
          <img 
            id="expandedImage" 
            className="expanded-image" 
            src={`/${selectedImage.src}`}
            alt={selectedImage.alt}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryArtworks;
