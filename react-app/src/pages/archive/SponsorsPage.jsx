import { useState, useEffect } from 'react';
import { sponsorsData } from '../../data/sponsorsData';

const SponsorsPage = () => {
  const [activeSponsor, setActiveSponsor] = useState('pinnacle');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Sponsors | Spectre Divide Memorial';
  }, []);

  const handleSponsorClick = (sponsorId) => {
    setActiveSponsor(sponsorId);
  };

  const currentSponsor = sponsorsData[activeSponsor];

  return (
    <div id="archive-sponsors" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sponsors</h2>
          <p className="section-description">The factions that empower Santai combatants with unique abilities.</p>
        </div>

        {/* Main sponsor showcase */}
        <div 
          className="sponsor-showcase" 
          id="featuredSponsor" 
          data-sponsor={activeSponsor}
          style={{ '--sponsor-color': currentSponsor.colorRGB }}
        >
          {/* Banner background */}
          <div className="sponsor-banner-container">
            <img loading="lazy" src={currentSponsor.bannerImage} alt={currentSponsor.name} className="sponsor-banner-image" />
            <div className="sponsor-banner-overlay"></div>
          </div>

          {/* Content wrapper */}
          <div className="sponsor-content-wrapper">
            {/* Sponsor identity */}
            <div className="sponsor-identity">
              <div className="sponsor-logo-container">
                <img loading="lazy" src={currentSponsor.logoImage} alt={`${currentSponsor.name} Logo`} className="sponsor-logo-image" />
              </div>

              <div className="sponsor-info">
                <h3 className="sponsor-name">{currentSponsor.name}</h3>
                <div className="sponsor-meta">
                  <div className="meta-item">
                    <span className="meta-label">District:</span>
                    <span className="meta-value">{currentSponsor.district}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Role:</span>
                    <span className="meta-value">{currentSponsor.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content section with art and abilities */}
            <div className="sponsor-content-section">
              {/* Sponsor art section */}
              <div className="sponsor-art-section">
                <div className="sponsor-art-container">
                  <img loading="lazy" src={currentSponsor.abilitiesArt} alt={`${currentSponsor.name} Abilities`} className="sponsor-art-image" />
                </div>
              </div>

              {/* Abilities section */}
              <div className="sponsor-abilities-section">
                <h4 className="abilities-title">Tactical Abilities</h4>

                <div className="abilities-container">
                  {Object.entries(currentSponsor.abilities).map(([type, ability]) => (
                    <div key={type} className="ability-card">
                      <div className="ability-icon-container">
                        <img loading="lazy" src={ability.icon} alt={ability.name} className="ability-icon" />
                      </div>
                      <div className="ability-details">
                        <div className="ability-header">
                          <span className="ability-name">{ability.name}</span>
                          <span className="ability-type">{type.toUpperCase()}</span>
                        </div>
                        <p className="ability-description">{ability.description}</p>
                        {ability.alt && <p className="ability-alt">{ability.alt}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors selection grid */}
        <div className="sponsors-selector">
          <h3 className="sponsors-selector-title">All Sponsors</h3>
          <div className="sponsors-grid">
            {Object.entries(sponsorsData).map(([id, sponsor]) => (
              <div
                key={id}
                className={`sponsor-thumb ${activeSponsor === id ? 'active' : ''}`}
                data-sponsor={id}
                onClick={() => handleSponsorClick(id)}
              >
                <div className="sponsor-thumb-logo">
                  <img loading="lazy" src={sponsor.logoImage} alt={sponsor.name} className="sponsor-thumb-image" />
                </div>
                <div className="sponsor-thumb-info">
                  <h4 className="sponsor-thumb-name">{sponsor.name.split(' ')[0]}</h4>
                  <span className="sponsor-thumb-role">{sponsor.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
