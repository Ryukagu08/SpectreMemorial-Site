import { useEffect } from 'react';

const GalleryFanart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Fan Art | Spectre Divide Memorial';
  }, []);

  return (
    <div id="gallery-fanart" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fan Art</h2>
          <p className="section-description">Creative works made by the Spectre Divide community.</p>
        </div>

        {/* Featured Section */}
        <h3 className="gallery-section-title">Featured</h3>

        {/* First artwork with quote */}
        <div className="feature-grid">
          <div className="feature-media">
            <img loading="lazy" src="/assets/gallery/fan-art/qkz/qkz-launch.webp" alt="Featured Artist Work 1" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Beta Launch Date</h3>
            <div className="quote-card" style={{ boxShadow: 'none', background: 'none', padding: 0 }}>
              <p className="quote-text">
                This community, the people involved, for your hard work and support of my art. I shall hold 
                this power with great responsability. Once the time is bestowed to me, I shall provide.
              </p>
              <div className="quote-author">
                <img loading="lazy" src="/assets/gallery/fan-art/qkz/qkz-logo.webp" alt="Artist Avatar" />
                <div className="author-info">
                  <p className="author-name">Qkz.</p>
                  <p className="author-title">Humble Hero</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second artwork with quote */}
        <div className="feature-grid feature-grid-reverse">
          <div className="feature-content">
            <h3 className="feature-title">Game Launch Date</h3>
            <div className="quote-card" style={{ boxShadow: 'none', background: 'none', padding: 0 }}>
              <p className="quote-text">Thank you guys for being apart of something I won't ever forget. 💜</p>
            </div>
          </div>
          <div className="feature-media">
            <img loading="lazy" src="/assets/gallery/fan-art/qkz/qkz-drawing2.webp" alt="Featured Artist Work 2" />
          </div>
        </div>

        {/* Community Gallery Section */}
        <h3 className="gallery-section-title">Community Gallery</h3>
        <div className="abstract-fanart-grid">
          <div className="fanart-item fanart-area-blitz">
            <img loading="lazy" src="/assets/gallery/fan-art/fanarts/blitz.webp" alt="Blitz CQ by .kennyotsu" />
            <div className="gallery-caption">
              <h3>Blitz CQ</h3>
              <p>By .kennyotsu</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-midas">
            <img loading="lazy" src="/assets/gallery/fan-art/fanarts/midas-head.webp" alt="Ave Fanart by uhmwipe" />
            <div className="gallery-caption">
              <h3>"Ave" Fanart</h3>
              <p>By uhmwipe</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-muu">
            <img loading="lazy" src="/assets/gallery/fan-art/fanarts/muuuuuuuuu.webp" alt="Muuuu by Booquifious" />
            <div className="gallery-caption">
              <h3>Muuuu</h3>
              <p>By Booquifious</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-anti-tempest">
            <img loading="lazy" src="/assets/gallery/fan-art/thematic/anti-tempest.webp" alt="Minimalist Tempest by Antiparty" />
            <div className="gallery-caption">
              <h3>Minimalist Tempest</h3>
              <p>Antiparty</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-ave-crew">
            <img loading="lazy" src="/assets/gallery/fan-art/fanarts/ave-crew.webp" alt="Ave Crew Founders by Banana Chin" />
            <div className="gallery-caption">
              <h3>Ave Crew Founders</h3>
              <p>By Banana Chin</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-no-spectres">
            <img loading="lazy" src="/assets/gallery/fan-art/fanarts/no-spectres.webp" alt="Spectre Killed by robin" />
            <div className="gallery-caption">
              <h3>"Spectre Killed"</h3>
              <p>By robin</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-ballpittitan">
            <img loading="lazy" src="/assets/gallery/fan-art/fanarts/ballpittitan3d.webp" alt="Ballpit Titan Charm by syncopate" />
            <div className="gallery-caption">
              <h3>Ballpit Titan Charm</h3>
              <p>By syncopate</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-raccoon">
            <img loading="lazy" src="/assets/gallery/fan-art/thematic/raccoon-canal.webp" alt="Canal Nightmode by Raccoon" />
            <div className="gallery-caption">
              <h3>Canal Nightmode</h3>
              <p>Raccoon</p>
            </div>
          </div>

          <div className="fanart-item fanart-area-ballpit-ceo">
            <img loading="lazy" src="/assets/gallery/fan-art/thematic/ballpit-CEO.webp" alt="Ballpit CEO by Banana Chin & Midas" />
            <div className="gallery-caption">
              <h3>Ballpit CEO</h3>
              <p>Banana Chin & Midas</p>
            </div>
          </div>
        </div>

        {/* Ryker Contest Section */}
        <h3 className="gallery-section-title">Ryker Contest Winners</h3>
        <div className="contest-container">
          {/* First Place Winner */}
          <div className="contest-entry contest-first-place">
            <img loading="lazy" src="/assets/gallery/fan-art/ryker-contest/ryker-op.webp" alt="First Place Contest Entry" />
            <div className="contest-content">
              <h3 className="contest-title">FIRST PLACE</h3>
              <p className="contest-caption">By TEO | Omniment - "Ryker Themed OP"</p>
            </div>
          </div>

          <div className="contest-runners-up">
            {/* Second Place Winner */}
            <div className="contest-entry contest-second-place">
              <div className="contest-content-top">
                <h3 className="contest-title">SECOND PLACE</h3>
                <p className="contest-caption">By Ben & Rubix - "Ryker Brand Awareness"</p>
              </div>
              <div className="youtube-container">
                <iframe
                  src="https://www.youtube.com/embed/0DFcMlyzzNM"
                  title="Ryker Brand Awareness"
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Third Place Winner */}
            <div className="contest-entry contest-third-place">
              <div className="contest-content">
                <h3 className="contest-title">THIRD PLACE</h3>
                <p className="contest-caption">By DN (ken_jammin) - "Ryker Posters"</p>
              </div>
              <img loading="lazy" src="/assets/gallery/fan-art/ryker-contest/3rdPlace.webp" alt="Third Place Contest Entry" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFanart;
