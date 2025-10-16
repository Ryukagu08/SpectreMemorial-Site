import { useEffect } from 'react';

const CommunityBeta = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Beta Community | Spectre Divide Memorial';
  }, []);

  return (
    <div id="community-beta" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Beta Community</h2>
          <p className="section-description">Stories and memories from the Beta testing phase.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-media">
            <img loading="lazy" src="/assets/gallery/artwork/wallpaper/1.webp" alt="Beta Community Banner" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">THE BETA COMMUNITY</h3>
            <p className="feature-description">
              The Beta phase saw a significant influx of new players as Spectre Divide began to reach a 
              wider audience. During this time, the meta evolved rapidly and many of the game's most 
              beloved strategies emerged.
            </p>
            <p className="feature-description">
              Beta players were instrumental in refining game balance and creating the competitive community.
            </p>
          </div>
        </div>

        <div className="community-grid">
          <div className="quote-card">
            <p className="quote-text">
              This is a placeholder for Beta tester quotes. Stories from the vibrant Beta testing phase 
              would appear here.
            </p>
            <div className="quote-author">
              <img loading="lazy" src="/assets/placeholder.webp" alt="Beta Tester Avatar" />
              <div className="author-info">
                <p className="author-name">BETA USER</p>
                <p className="author-title">BETA TESTER</p>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <p className="quote-text">
              This is a placeholder for Beta tester quotes. Stories from the vibrant Beta testing phase 
              would appear here.
            </p>
            <div className="quote-author">
              <img loading="lazy" src="/assets/placeholder.webp" alt="Beta Tester Avatar" />
              <div className="author-info">
                <p className="author-name">BETA USER</p>
                <p className="author-title">BETA TESTER</p>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <p className="quote-text">
              This is a placeholder for Beta tester quotes. Stories from the vibrant Beta testing phase 
              would appear here.
            </p>
            <div className="quote-author">
              <img loading="lazy" src="/assets/placeholder.webp" alt="Beta Tester Avatar" />
              <div className="author-info">
                <p className="author-name">BETA USER</p>
                <p className="author-title">BETA TESTER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBeta;
