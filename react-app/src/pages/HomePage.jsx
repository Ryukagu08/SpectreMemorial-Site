import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Spectre Divide Memorial';
  }, []);

  return (
    <div id="home" className="tab-content active">
      {/* Banner */}
      <section className="main-banner">
        <div className="banner-overlay">
          <video className="banner-video" muted loop playsInline autoPlay>
            <source loading="eager" src="/assets/homepage_bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="banner-content">
          <div className="banner-logo">
            <img loading="eager" src="/assets/logos/SDLogo.svg" alt="Spectre Divide Logo" />
          </div>
          <p className="banner-subtitle">MEMORIAL SITE</p>
          <div className="banner-date">2020 - 2025</div>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-media">
            <img loading="eager" src="/assets/gallery/artwork/wallpaper/0.webp" alt="Game Banner" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">THE GAME</h3>
            <p className="feature-description">
              Spectre Divide is the genre-evolving, free-to-play 3v3 tactical shooter driven by Duality.
              Use Duality to control two bodies in real-time,
              letting you defend two sites at once, cover your own cross, or even trade yourself.
              Master tactical gunplay and an arsenal of future tech to achieve infamy.
            </p>
          </div>
        </div>

        <div className="feature-grid feature-grid-reverse">
          <div className="feature-content">
            <h3 className="feature-title">THE COMMUNITY</h3>
            <p className="feature-description">
              The Spectre Divide community remains united even after the game's closure. Users continue to share a strong sense of camaraderie,
              creating an inviting space for those who want to discuss the game or meet new people.
            </p>
          </div>
          <div className="feature-media">
            <img loading="lazy" className="community-banner" src="/assets/gallery/artwork/wallpaper/community-banner.webp" alt="Community Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
