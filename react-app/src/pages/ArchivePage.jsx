import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import MapsPage from './archive/MapsPage';
import SponsorsPage from './archive/SponsorsPage';
import WeaponsPage from './archive/WeaponsPage';

const ArchivePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Routes>
      <Route index element={<ArchiveDefault />} />
      <Route path="maps" element={<MapsPage />} />
      <Route path="sponsors" element={<SponsorsPage />} />
      <Route path="weapons" element={<WeaponsPage />} />
    </Routes>
  );
};

const ArchiveDefault = () => {
  useEffect(() => {
    document.title = 'Game Archive | Spectre Divide Memorial';
  }, []);

  return (
    <div id="archive-default" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Game Archive</h2>
          <p className="section-description">Information and media from the game.</p>
        </div>

        <div className="archive-overview">
          <p>Select a category above to explore the Spectre Divide archive.</p>

          <div className="archive-highlights">
            <div className="feature-grid">
              <div className="feature-media">
                <img loading="lazy" src="/assets/gallery/artwork/wallpaper/archive-banner.webp" alt="Archive Highlight" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">ARCHIVE HIGHLIGHTS</h3>
                <p className="feature-description">
                  Explore the complete collection of maps, sponsors, and weapons from Spectre Divide. 
                  Our archive preserves the game's legacy for fans and newcomers alike.
                </p>

                <div className="gallery-nav-buttons">
                  <Link to="/archive/maps" className="gallery-nav-btn">
                    <span className="btn-text">Maps</span>
                  </Link>
                  <Link to="/archive/sponsors" className="gallery-nav-btn">
                    <span className="btn-text">Sponsors</span>
                  </Link>
                  <Link to="/archive/weapons" className="gallery-nav-btn">
                    <span className="btn-text">Weapons</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
