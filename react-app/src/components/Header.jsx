import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const [expandedSubtabs, setExpandedSubtabs] = useState({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubtabs = (tab) => {
    setExpandedSubtabs(prev => ({
      ...prev,
      [tab]: !prev[tab]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleMenuClick = () => {
    if (window.innerWidth <= 767) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Toggle Button for Mobile */}
        <button
          className="nav-toggle-button"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`tab-navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`} id="tabNavigation">
          <li>
            <Link
              to="/"
              className={`tab-button ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}
              onClick={handleMenuClick}
            >
              Home
            </Link>
          </li>

          <li className="has-subtabs">
            <button
              className={`tab-button ${isActive('/archive') ? 'active' : ''}`}
              onClick={() => toggleSubtabs('archive')}
            >
              Game Archive
            </button>
            <ul className={`subtab-navigation ${expandedSubtabs.archive ? 'expanded' : ''}`}>
              <li>
                <Link
                  to="/archive/maps"
                  className={`subtab-button ${location.pathname === '/archive/maps' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Maps
                </Link>
              </li>
              <li>
                <Link
                  to="/archive/sponsors"
                  className={`subtab-button ${location.pathname === '/archive/sponsors' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  to="/archive/weapons"
                  className={`subtab-button ${location.pathname === '/archive/weapons' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Weapons
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/timeline"
              className={`tab-button ${isActive('/timeline') ? 'active' : ''}`}
              onClick={handleMenuClick}
            >
              Timeline
            </Link>
          </li>

          <li className="has-subtabs">
            <button
              className={`tab-button ${isActive('/community') ? 'active' : ''}`}
              onClick={() => toggleSubtabs('community')}
            >
              Community
            </button>
            <ul className={`subtab-navigation ${expandedSubtabs.community ? 'expanded' : ''}`}>
              <li>
                <Link
                  to="/community/discord"
                  className={`subtab-button ${location.pathname === '/community/discord' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  to="/community/alpha"
                  className={`subtab-button ${location.pathname === '/community/alpha' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Alpha
                </Link>
              </li>
              <li>
                <Link
                  to="/community/beta"
                  className={`subtab-button ${location.pathname === '/community/beta' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Beta
                </Link>
              </li>
            </ul>
          </li>

          <li className="has-subtabs">
            <button
              className={`tab-button ${isActive('/gallery') ? 'active' : ''}`}
              onClick={() => toggleSubtabs('gallery')}
            >
              Gallery
            </button>
            <ul className={`subtab-navigation ${expandedSubtabs.gallery ? 'expanded' : ''}`}>
              <li>
                <Link
                  to="/gallery/artworks"
                  className={`subtab-button ${location.pathname === '/gallery/artworks' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Artworks
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery/fanart"
                  className={`subtab-button ${location.pathname === '/gallery/fanart' ? 'active' : ''}`}
                  onClick={handleMenuClick}
                >
                  Fan Art
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
