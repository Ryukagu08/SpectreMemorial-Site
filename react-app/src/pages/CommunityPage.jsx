import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import CommunityDiscord from './community/CommunityDiscord';
import CommunityAlpha from './community/CommunityAlpha';
import CommunityBeta from './community/CommunityBeta';

const CommunityPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Routes>
      <Route index element={<CommunityDefault />} />
      <Route path="discord" element={<CommunityDiscord />} />
      <Route path="alpha" element={<CommunityAlpha />} />
      <Route path="beta" element={<CommunityBeta />} />
    </Routes>
  );
};

const CommunityDefault = () => {
  useEffect(() => {
    document.title = 'Community | Spectre Divide Memorial';
  }, []);

  return (
    <div id="community-default" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Community</h2>
        </div>

        <div className="community-overview">
          <div className="feature-grid">
            <div className="feature-media">
              <div className="youtube-container">
                <iframe
                  src="https://www.youtube.com/embed/nH6JjdwNvgs"
                  title="Community Highlight"
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">OUR COMMUNITY</h3>
              <p className="feature-description">
                The Spectre Divide community thrived across multiple platforms and testing phases. 
                Explore the Discord server and memories from the Alpha and Beta tests.
              </p>

              <div className="gallery-nav-buttons">
                <Link to="/community/discord" className="gallery-nav-btn">
                  <span className="btn-text">Discord</span>
                </Link>
                <Link to="/community/alpha" className="gallery-nav-btn">
                  <span className="btn-text">Alpha</span>
                </Link>
                <Link to="/community/beta" className="gallery-nav-btn">
                  <span className="btn-text">Beta</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="community-grid">
          <div className="quote-card qkz-quote">
            <p className="quote-text">
              You may underestimate the strength that flows through our community. But make no mistake - 
              that power resides within each of us, my fellow comrades. United, we are an unstoppable force.
            </p>
            <div className="quote-author">
              <img loading="lazy" src="/assets/gallery/fan-art/qkz/qkz-logo.webp" alt="Avatar" />
              <div className="author-info">
                <p className="author-name">Qkz.</p>
                <p className="author-title">Humble Hero</p>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <p className="quote-text">god i love this community</p>
            <div className="quote-author">
              <img loading="lazy" src="/assets/community/users/roka-logo.webp" alt="Avatar" />
              <div className="author-info">
                <p className="author-name">roka</p>
                <p className="author-title">Beta Tester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
