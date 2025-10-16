import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import GalleryArtworks from './gallery/GalleryArtworks';
import GalleryFanart from './gallery/GalleryFanart';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Routes>
      <Route index element={<GalleryDefault />} />
      <Route path="artworks" element={<GalleryArtworks />} />
      <Route path="fanart" element={<GalleryFanart />} />
    </Routes>
  );
};

const GalleryDefault = () => {
  useEffect(() => {
    document.title = 'Gallery | Spectre Divide Memorial';
  }, []);

  return (
    <div id="gallery-default" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-description">Spectre Divide visual content.</p>
        </div>

        <div className="gallery-overview">
          <div className="feature-grid">
            <div className="feature-media">
              <img loading="lazy" src="/assets/gallery/artwork/wallpaper/gallery-banner.webp" alt="Gallery Highlight" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">VISUAL SHOWCASE</h3>
              <p className="feature-description">
                Explore the visual legacy of Spectre Divide through our collection of official artworks 
                and community-created fan art. Select a category to view specific collections.
              </p>

              <div className="gallery-nav-buttons">
                <Link to="/gallery/artworks" className="gallery-nav-btn">
                  <span className="btn-text">Artworks</span>
                </Link>
                <Link to="/gallery/fanart" className="gallery-nav-btn">
                  <span className="btn-text">Fan Art</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
