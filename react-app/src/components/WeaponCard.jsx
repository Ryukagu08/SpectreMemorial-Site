const WeaponCard = ({ weapon }) => {
  const createStatRow = (name, value, percent) => (
    <div className="stats-row">
      <div className="stat-name">{name}</div>
      <div className="stat-bar-container">
        <div className="stat-bar-background"></div>
        <div className="stat-bar" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );

  const createIcon = (type) => {
    if (type === 'headshot') {
      return <div className="head-icon"></div>;
    } else if (type === 'bodyshot') {
      return <div className="body-icon"></div>;
    } else if (type === 'legshot') {
      return (
        <div>
          <div className="leg-icon"></div>
          <div className="leg-icon"></div>
        </div>
      );
    }
  };

  const createDamageTable = (damageData) => {
    if (!damageData || damageData.length === 0) return null;

    const data = damageData[0];

    return (
      <div className="damage-table">
        {/* Header row */}
        <div className="damage-header">
          <div className="damage-cell"></div>
          {data.ranges.map((range, index) => (
            <div key={index} className="damage-cell">{range}</div>
          ))}
        </div>

        {/* Headshot row */}
        {data.headshot && (
          <div className="damage-row headshot">
            <div className="damage-icon">{createIcon('headshot')}</div>
            {data.headshot.map((value, index) => (
              <div key={index} className="damage-cell">{value}</div>
            ))}
          </div>
        )}

        {/* Bodyshot row */}
        {data.bodyshot && (
          <div className="damage-row bodyshot">
            <div className="damage-icon">{createIcon('bodyshot')}</div>
            {data.bodyshot.map((value, index) => (
              <div key={index} className="damage-cell">{value}</div>
            ))}
          </div>
        )}

        {/* Legshot row */}
        {data.legshot && (
          <div className="damage-row legshot">
            <div className="damage-icon">{createIcon('legshot')}</div>
            {data.legshot.map((value, index) => (
              <div key={index} className="damage-cell">{value}</div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="weapon-card" id={weapon.id}>
      <div className="weapon-image">
        <img src={weapon.image} alt={weapon.name} loading="lazy" />
      </div>
      <div className="weapon-details">
        <h4 className="weapon-name">{weapon.name}</h4>
        <p className="weapon-type">{weapon.type}</p>

        <div className="weapon-stats-panel">
          <div className="stats-header">STATS</div>

          {weapon.stats.runSpeed && createStatRow('RUN SPEED', weapon.stats.runSpeed.value, weapon.stats.runSpeed.percent)}

          {weapon.stats.magazine && (
            <div className="stats-row">
              <div className="stat-name">MAGAZINE</div>
              <div className="stat-value">{weapon.stats.magazine}</div>
            </div>
          )}

          {weapon.stats.fireRate && createStatRow('FIRE RATE', weapon.stats.fireRate.value, weapon.stats.fireRate.percent)}

          {weapon.stats.reloadTime && createStatRow('RELOAD TIME', weapon.stats.reloadTime.value, weapon.stats.reloadTime.percent)}

          {weapon.stats.penetration && (
            <div className="stats-row">
              <div className="stat-name">PENETRATION</div>
              <div className="stat-value">{weapon.stats.penetration}</div>
            </div>
          )}

          {weapon.description && (
            <div className="stats-description">{weapon.description}</div>
          )}

          {createDamageTable(weapon.damage)}
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
