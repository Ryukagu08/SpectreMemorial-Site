import { useEffect } from 'react';
import { weaponsData } from '../../data/weaponsData';
import WeaponCard from '../../components/WeaponCard';

const WeaponsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Weapons | Spectre Divide Memorial';
  }, []);

  return (
    <div id="archive-weapons" className="subtab-content active">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Weapons</h2>
          <p className="section-description">Details on the arsenal available in Spectre Divide.</p>
        </div>

        {/* Introduction section */}
        <div className="feature-grid">
          <div className="feature-media weapons-banner">
            <img loading="lazy" src="/assets/gallery/artwork/wallpaper/weapons-banner.webp" alt="Weapons Overview" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">ARSENAL</h3>
            <p className="feature-description">
              Spectre Divide features a diverse array of weapons across multiple categories,
              each offering unique advantages in different combat scenarios. From close-quarters
              shotguns to precision long-range rifles, your loadout choices define your playstyle.
            </p>
          </div>
        </div>

        {/* Short Range Weapons Section */}
        <section id="short-range-weapons">
          <h3 className="gallery-section-title">Short Range Weapons</h3>
          <div className="weapon-category-description">
            <p>Devastating at close quarters, these weapons excel in tight spaces and rapid engagements.</p>
          </div>

          <div className="weapons-grid">
            {weaponsData.shortRange.map((weapon) => (
              <WeaponCard key={weapon.id} weapon={weapon} />
            ))}
          </div>
        </section>

        {/* Mid & Long Range Weapons Section */}
        <section id="mid-long-range-weapons">
          <h3 className="gallery-section-title">Mid & Long Range Weapons</h3>
          <div className="weapon-category-description">
            <p>Precision tools for tactical players who prefer keeping enemies at a distance.</p>
          </div>

          <div className="weapons-grid">
            {weaponsData.midLongRange.map((weapon) => (
              <WeaponCard key={weapon.id} weapon={weapon} />
            ))}
          </div>
        </section>

        {/* Pistol & Melee Weapons Section */}
        <section id="pistol-melee-weapons">
          <h3 className="gallery-section-title">Pistol & Melee Weapons</h3>
          <div className="weapon-category-description">
            <p>Secondary weapons and melee options for backup or emergency situations.</p>
          </div>

          <div className="weapons-grid">
            {weaponsData.pistolMelee.map((weapon) => (
              <WeaponCard key={weapon.id} weapon={weapon} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeaponsPage;
