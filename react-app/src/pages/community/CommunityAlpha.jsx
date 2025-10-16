import { useEffect } from 'react';

const CommunityAlpha = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Alpha Community | Spectre Divide Memorial';
  }, []);

  return (
    <div id="community-alpha" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Alpha Community</h2>
          <p className="section-description">Stories and memories from the Alpha testing phase.</p>
        </div>

        <div className="feature-grid feature-grid-reverse">
          <div className="feature-content">
            <h3 className="feature-title">THE ALPHA COMMUNITY</h3>
            <p className="feature-description">
              The Alpha testers were the pioneers of Spectre Divide, experiencing the game in its 
              earliest form and providing crucial feedback that would shape its development.
            </p>
            <p className="feature-description">
              This community developed unique strategies and memes during the formative phase of the game's life.
            </p>
          </div>
          <div className="feature-media">
            <img loading="lazy" src="/assets/gallery/artwork/wallpaper/0.webp" alt="Alpha Community Banner" />
          </div>
        </div>

        <div className="community-grid">
          <div className="quote-card ben-quote">
            <p className="quote-text">
              Spectre was the light in the dark day for me, and genuinely, i could not be more thankful 
              for each and every one of you. This game, and its community helped me out when i was at a 
              pretty lonely time in my life, and i have no one to thank but MT and every lovely thing 
              theyve built. So many friends have been made and those friends have made me feel more at 
              home than any other group ive ever been apart.
            </p>
            <div className="quote-author">
              <a href="https://x.com/Nheyah01" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src="/assets/community/users/ben-logo.webp" alt="Alpha Tester Avatar" />
              </a>
              <div className="author-info">
                <p className="author-name">ben</p>
                <p className="author-title">ALPHA TESTER</p>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <p className="quote-text">
              Spectre Divide had something rare, it was special. It's hard not to think about what it 
              could've grown into. I'm glad I got to leave a mark. GL & GG.
            </p>
            <div className="quote-author">
              <a href="https://x.com/truofps" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src="/assets/community/users/truo-logo.webp" alt="Alpha Tester Avatar" />
              </a>
              <div className="author-info">
                <p className="author-name">TRUO</p>
                <p className="author-title">FIRST CHAMP</p>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <p className="quote-text">
              This is a placeholder for Alpha tester quotes. Memories from the earliest days of 
              Spectre Divide would appear here.
            </p>
            <div className="quote-author">
              <img loading="lazy" src="/assets/placeholder.webp" alt="Alpha Tester Avatar" />
              <div className="author-info">
                <p className="author-name">ALPHA USER</p>
                <p className="author-title">ALPHA TESTER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAlpha;
