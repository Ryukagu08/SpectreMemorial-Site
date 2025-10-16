import { useEffect } from 'react';

const CommunityDiscord = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Discord Community | Spectre Divide Memorial';
  }, []);

  return (
    <div id="community-discord" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Discord Community</h2>
          <p className="section-description">Connect with the Spectre Divide community on Discord.</p>
        </div>

        {/* Official Archived Server */}
        <div className="feature-grid">
          <div className="feature-media">
            <img loading="lazy" src="/assets/gallery/artwork/wallpaper/community-banner.webp" alt="Official Discord Server" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">OFFICIAL SERVER (ARCHIVED)</h3>
            <p className="feature-description">
              The original Spectre Divide Discord server has been preserved in an archived state. 
              Browse through the history of developer announcements, community discussions, and 
              memorable moments from throughout the game's life.
            </p>
            <div className="feature-cta">
              <a href="https://discord.gg/eJysqfK2td" className="gallery-nav-btn" target="_blank" rel="noopener noreferrer">
                <span className="btn-text">Join Archived Server</span>
              </a>
            </div>
          </div>
        </div>

        {/* Community Run Server */}
        <div className="feature-grid feature-grid-reverse">
          <div className="feature-content">
            <h3 className="feature-title">COMMUNITY-RUN SERVER (ACTIVE)</h3>
            <p className="feature-description">
              Join the active community-run Discord server where fans continue to connect, share memories, 
              and organize community events. This server is maintained by dedicated community members and 
              continues to be the main hub for Spectre Divide fans.
            </p>
            <div className="feature-cta">
              <a href="https://discord.gg/zPPwHxnqXe" className="gallery-nav-btn" target="_blank" rel="noopener noreferrer">
                <span className="btn-text">Join Active Community</span>
              </a>
            </div>
          </div>
          <div className="feature-media">
            <img loading="lazy" src="/assets/gallery/artwork/wallpaper/discord-banner.webp" alt="Community Discord Server" />
          </div>
        </div>

        {/* Discord Note */}
        <div className="discord-note">
          <p>
            Note: You'll need a Discord account to join these servers. If you don't have one, you can{' '}
            <a href="https://discord.com/register" target="_blank" rel="noopener noreferrer">
              sign up for free here
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityDiscord;
