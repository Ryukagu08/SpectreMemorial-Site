import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import TimelinePage from './pages/TimelinePage';
import CommunityPage from './pages/CommunityPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';

// Import all CSS files
import './styles/variables.css';
import './styles/reset.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/lazy-loading.css';
import './styles/animations.css';
import './styles/modals.css';
import './styles/maps.css';
import './styles/sponsors.css';
import './styles/weapons.css';
import './styles/gallery.css';
import './styles/responsive.css';
import './styles/scrollbar.css';
import './styles/gallery-pagination.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }

    // Check for dark/light mode preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(prefersDarkMode ? 'dark-theme' : 'light-theme');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/archive/*" element={<ArchivePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/community/*" element={<CommunityPage />} />
            <Route path="/gallery/*" element={<GalleryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
