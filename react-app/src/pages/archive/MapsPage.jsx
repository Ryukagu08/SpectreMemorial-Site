import { useState, useEffect } from 'react';
import { mapsData } from '../../data/mapsData';

const MapsPage = () => {
  const [activeMap, setActiveMap] = useState('canal');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Maps | Spectre Divide Memorial';
  }, []);

  const handleMapClick = (mapId) => {
    setActiveMap(mapId);
  };

  const currentMap = mapsData[activeMap];

  return (
    <div id="archive-maps" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Maps</h2>
          <p className="section-description">The battlegrounds of Sentai Crews.</p>
        </div>

        {/* Featured Map Display */}
        <div className="map-featured" id="featuredMap">
          <div className="map-featured-image">
            <img loading="lazy" src={currentMap.mainImage} alt={currentMap.title} className="main-map-image" />
            <div className="map-minimap-overlay">
              <img loading="lazy" src={currentMap.minimapImage} alt={`${currentMap.title} Minimap`} className="minimap-image" />
            </div>
          </div>
          <div className="map-featured-content">
            <h3 className="map-title">{currentMap.title}</h3>
            <p className="map-description">{currentMap.description}</p>
            <div className="map-tags">
              {currentMap.tags.map((tag, index) => (
                <span key={index} className="map-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Map Selection Grid */}
        <h3 className="gallery-section-title">All Maps</h3>
        <div className="maps-grid">
          {Object.entries(mapsData).map(([id, map]) => (
            <div
              key={id}
              className={`map-card ${activeMap === id ? 'active' : ''}`}
              data-map={id}
              onClick={() => handleMapClick(id)}
            >
              <div className="map-card-image">
                <img loading="lazy" src={map.mainImage} alt={map.title} className="map-thumbnail" />
                <div className="map-overlay">
                  <img loading="lazy" src={map.minimapImage} alt={`${map.title} Minimap`} className="map-overlay-minimap" />
                </div>
              </div>
              <div className="map-card-content">
                <h4 className="map-card-title">{map.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Map Details Section */}
        <div className="map-details-container">
          {Object.entries(mapsData).map(([id, map]) => (
            <div key={id} className={`map-details ${activeMap === id ? 'active' : ''}`} id={`${id}-details`}>
              <div className="map-details-content">
                <h3 className="map-details-title">{map.title}</h3>
                <p className="map-details-description">{map.description}</p>
                <div className="map-details-features">
                  <div className="map-feature">
                    <h4>KEY LOCATIONS</h4>
                    <ul>
                      {map.keyLocations.map((location, index) => (
                        <li key={index}>{location}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="map-feature">
                    <h4>TACTICAL NOTES</h4>
                    <p>{map.tacticalNotes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapsPage;
