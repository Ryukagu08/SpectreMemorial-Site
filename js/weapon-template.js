// All weapon data is centralized here for easy management
const weaponsData = {
  shortRange: [
    {
      id: "m25-hornet",
      name: "M25 HORNET",
      type: "Submachine Gun",
      image: "assets/archive/weapons/m25_hornet.webp",
      stats: {
        // Run Speed range: 4-6
        runSpeed: { value: 4.75, percent: 38 }, // (4.75 - 4) / (6 - 4) * 100
        magazine: 25,
        // Fire Rate range: 0-1000
        fireRate: { value: 750, percent: 75 }, // 750 / 1000 * 100
        // Reload Time range: 1-6
        reloadTime: { value: 2.0, percent: 80 }, // (6 - 2.0) / (6 - 1) * 100
        penetration: "LOW"
      },
      description: "Submachine gun with precise recoil control in short bursts. Perfect for mid-range encounters.",
      damage: [
        {
          ranges: ["0-20m", "20m+"],
          headshot: [67, 62],
          bodyshot: [29, 24],
          legshot: [23, 22]
        }
      ]
    },
    {
      id: "buzzsaw",
      name: "Buzzsaw",
      type: "Submachine Gun",
      image: "assets/archive/weapons/buzzsaw_rt40.webp",
      stats: {
        runSpeed: { value: 4.75, percent: 38 }, // (4.75 - 4) / (6 - 4) * 100
        magazine: 40,
        fireRate: { value: 840, percent: 84 }, // 840 / 1000 * 100
        reloadTime: { value: 2.3, percent: 74 }, // (6 - 2.3) / (6 - 1) * 100
        penetration: "LOW"
      },
      description: "Rapidfire submachine gun with a large magazine. Recoil can be difficult to control.",
      damage: [
        {
          ranges: ["0-20m", "20m+"],
          headshot: [62, 49],
          bodyshot: [25, 24],
          legshot: [25, 24]
        }
      ]
    },
    {
      id: "whisper",
      name: "Whisper",
      type: "Submachine Gun",
      image: "assets/archive/weapons/whisper.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 }, // (5.04 - 4) / (6 - 4) * 100
        magazine: 25,
        fireRate: { value: 666, percent: 67 }, // 666 / 1000 * 100
        reloadTime: { value: 2.0, percent: 80 }, // (6 - 2.0) / (6 - 1) * 100
        penetration: "LOW"
      },
      description: "Recoil is hard to control at first, but settles into a steady rhythm. Tracers are invisible to enemies. Increased move speed.",
      damage: [
        {
          ranges: ["0-20m", "20m+"],
          headshot: [78, 62],
          bodyshot: [28, 24],
          legshot: [25, 22]
        }
      ]
    },
    {
      id: "m17-bouncer",
      name: "M17 Bouncer",
      type: "Shotgun",
      image: "assets/archive/weapons/m17_bouncer.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 }, // (4.36 - 4) / (6 - 4) * 100
        magazine: 5,
        fireRate: { value: 60, percent: 6 }, // 60 / 1000 * 100
        reloadTime: { value: 4.2, percent: 36 }, // (6 - 4.2) / (6 - 1) * 100
        penetration: "LOW"
      },
      description: "Pump-action shotgun with formidable stopping power. Great for close-range engagements. Interruptible reload.",
      damage: [
        {
          ranges: ["0-8m", "8-12m", "12m+"],
          headshot: [44, 34, 18],
          bodyshot: [22, 17, 9],
          legshot: [18, 14, 8]
        }
      ]
    },
    {
      id: "m18-drummer",
      name: "M18 Drummer",
      type: "Shotgun",
      image: "assets/archive/weapons/m18_drummer.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 }, // (4.36 - 4) / (6 - 4) * 100
        magazine: 18,
        fireRate: { value: 160, percent: 16 }, // 160 / 1000 * 100
        reloadTime: { value: 3.3, percent: 54 }, // (6 - 3.3) / (6 - 1) * 100
        penetration: "LOW"
      },
      description: "Fully automatic shotgun with a high-capacity drum magazine. Overheats when fired continously.",
      damage: [
        {
          ranges: ["0-10m", "0-15m", "15m+"],
          headshot: [25, 15, 11],
          bodyshot: [17, 10, 7],
          legshot: [14, 8, 5]
        }
      ]
    }
  ],
  midLongRange: [
    {
      id: "trident",
      name: "Trident",
      type: "Rifle",
      image: "assets/archive/weapons/trident.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 18,
        fireRate: { value: 760, percent: 76 }, // 760 / 1000 * 100
        reloadTime: { value: 2.3, percent: 74 }, // (6 - 2.3) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Standard-issue assault rifle with balanced performance. Reliable and effective in most combat scenarios.",
      damage: [
        {
          ranges: ["0m+"],
          headshot: [116],
          bodyshot: [33],
          legshot: [30]
        }
      ]
    },
    {
      id: "cyclone",
      name: "Cyclone",
      type: "Rifle",
      image: "assets/archive/weapons/cyclone.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 30,
        fireRate: { value: 590, percent: 59 }, // 590 / 1000 * 100
        reloadTime: { value: 2.5, percent: 70 }, // (6 - 2.5) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Reliable, standard-issue rifle suitable for various combat scenarios. Great for mid to long-range engagements.",
      damage: [
        {
          ranges: ["0-15m", "15-30m", "30m+"],
          headshot: [140, 124, 116],
          bodyshot: [35, 33, 30],
          legshot: [33, 26, 25]
        }
      ]
    },
    {
      id: "crusader",
      name: "Crusader",
      type: "Rifle",
      image: "assets/archive/weapons/crusader.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 30,
        fireRate: { value: 666, percent: 67 }, // 666 / 1000 * 100
        reloadTime: { value: 2.5, percent: 70 }, // (6 - 2.5) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Assault rifle with precise sustained recoil control. Excels at mid-long range encounters.",
      damage: [
        {
          ranges: ["0-15m", "15-30m", "30m+"],
          headshot: [140, 126, 120],
          bodyshot: [39, 34, 31],
          legshot: [33, 30, 26]
        }
      ]
    },
    {
      id: "m49-fury",
      name: "M49 Fury",
      type: "Light Machine Gun",
      image: "assets/archive/weapons/m49_fury.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 50,
        fireRate: { value: 525, percent: 53 }, // 525 / 1000 * 100
        reloadTime: { value: 2.5, percent: 70 }, // (6 - 2.5) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Slow rate of fire and a large magazine. Ideal for laying down suppressive fire.",
      damage: [
        {
          ranges: ["0-30m", "30m+"],
          headshot: [62, 56],
          bodyshot: [38, 33],
          legshot: [33, 31]
        }
      ]
    },
    {
      id: "berserker-rb3",
      name: "Berserker RB3",
      type: "Light Machine Gun",
      image: "assets/archive/weapons/berserker_rb3.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 75,
        fireRate: { value: 600, percent: 60 }, // 600 / 1000 * 100
        reloadTime: { value: 5.1, percent: 18 }, // (6 - 5.1) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "High rate of fire belt-fed machine gun. Recoil becomes easier to manage over time. Rate of fire increases during full auto.",
      damage: [
        {
          ranges: ["0-20m", "20m+"],
          headshot: [75, 62],
          bodyshot: [45, 38],
          legshot: [37, 31]
        }
      ]
    },
    {
      id: "blackout",
      name: "Blackout",
      type: "Rifle",
      image: "assets/archive/weapons/blackout.webp",
      stats: {
        runSpeed: { value: 4.77, percent: 39 }, // (4.77 - 4) / (6 - 4) * 100
        magazine: 25,
        fireRate: { value: 680, percent: 68 }, // 680 / 1000 * 100
        reloadTime: { value: 2.5, percent: 70 }, // (6 - 2.5) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "High rate of fire assault rifle with a built-in suppressor. Tracers are invisible to enemies. Increased move speed.",
      damage: [
        {
          ranges: ["0-15m", "15m+"],
          headshot: [140, 124],
          bodyshot: [35, 31],
          legshot: [30, 26]
        }
      ]
    },
    {
      id: "m67-reaver",
      name: "M67 Reaver",
      type: "Rifle",
      image: "assets/archive/weapons/m67_reaver.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 25,
        fireRate: { value: 550, percent: 55 }, // 550 / 1000 * 100
        reloadTime: { value: 2.1, percent: 78 }, // (6 - 2.1) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "High caliber assault rifle with a slow rate of fire. Lethal headshots at any range.",
      damage: [
        {
          ranges: ["0m+"],
          headshot: [156],
          bodyshot: [39],
          legshot: [33]
        }
      ]
    },
    {
      id: "tempest",
      name: "Tempest",
      type: "Rifle",
      image: "assets/archive/weapons/tempest.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 }, // (4.50 - 4) / (6 - 4) * 100
        magazine: 12,
        fireRate: { value: 300, percent: 30 }, // 300 / 1000 * 100
        reloadTime: { value: 2.3, percent: 74 }, // (6 - 2.3) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Semi-automatic rifle. High zoom optics are great for long range. Lethal headshots at any range.",
      damage: [
        {
          ranges: ["0-15m", "15-30m", "30m+"],
          headshot: [250, 203, 156],
          bodyshot: [65, 50, 41],
          legshot: [49, 33, 31]
        }
      ]
    },
    {
      id: "harpe",
      name: "Harpe",
      type: "Sniper",
      image: "assets/archive/weapons/harpe.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 }, // (4.36 - 4) / (6 - 4) * 100
        magazine: 5,
        fireRate: { value: 90, percent: 9 }, // 90 / 1000 * 100
        reloadTime: { value: 2.0, percent: 80 }, // (6 - 2.0) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Lightweight semi-automatic sniper rifle. Inaccurate when moving. Lethal headshots at any range.",
      damage: [
        {
          ranges: ["0m+"],
          headshot: [202],
          bodyshot: [101],
          legshot: [85]
        }
      ]
    },
    {
      id: "prototype-op",
      name: "Prototype-OP",
      type: "Sniper",
      image: "assets/archive/weapons/prototype-op.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 }, // (4.36 - 4) / (6 - 4) * 100
        magazine: 5,
        fireRate: { value: 33, percent: 3 }, // 33 / 1000 * 100
        reloadTime: { value: 2.0, percent: 80 }, // (6 - 2.0) / (6 - 1) * 100
        penetration: "HIGH"
      },
      description: "Bolt-action sniper rifle capable of a one-shot-kill at any range. Inaccurate when moving. One-shot-kill.",
      damage: [
        {
          ranges: ["0m+"],
          headshot: [255],
          bodyshot: [150],
          legshot: [124]
        }
      ]
    }
  ],
  pistolMelee: [
    {
      id: "m2-carbon",
      name: "M2 Carbon",
      type: "Pistol",
      image: "assets/archive/weapons/m2_carbon.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 }, // (5.04 - 4) / (6 - 4) * 100
        magazine: 12,
        fireRate: { value: 352, percent: 35 }, // 352 / 1000 * 100
        reloadTime: { value: 1.8, percent: 84 }, // (6 - 1.8) / (6 - 1) * 100
        penetration: "MID"
      },
      description: "Standard-issue semi-automatic pistol. Reliable and easy to use.",
      damage: [
        {
          ranges: ["0-25m", "25m+"],
          headshot: [74, 66],
          bodyshot: [26, 22],
          legshot: [22, 18]
        }
      ]
    },
    {
      id: "m10-brat",
      name: "M10 Brat",
      type: "Pistol",
      image: "assets/archive/weapons/m10_brat.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 }, // (5.04 - 4) / (6 - 4) * 100
        magazine: 12,
        fireRate: { value: 900, percent: 90 }, // 900 / 1000 * 100
        reloadTime: { value: 2.3, percent: 74 }, // (6 - 2.3) / (6 - 1) * 100
        penetration: "MID"
      },
      description: "Fires a rapid barrage of bullets. Small magazine so watch your ammo count.",
      damage: [
        {
          ranges: ["0-25m", "25m+"],
          headshot: [49, 34],
          bodyshot: [21, 19],
          legshot: [19, 18]
        }
      ]
    },
    {
      id: "shiv",
      name: "Shiv",
      type: "Pistol",
      image: "assets/archive/weapons/shiv.webp",
      stats: {
        runSpeed: { value: 5.35, percent: 68 }, // (5.35 - 4) / (6 - 4) * 100
        magazine: 12,
        fireRate: { value: 405, percent: 41 }, // 405 / 1000 * 100
        reloadTime: { value: 1.7, percent: 86 }, // (6 - 1.7) / (6 - 1) * 100
        penetration: "MID"
      },
      description: "Low caliber suppressed pistol. Tracers are invisible to enemies. Increased movement speed.",
      damage: [
        {
          ranges: ["0-12m", "12-25m", "25m+"],
          headshot: [100, 74, 66],
          bodyshot: [33, 26, 22],
          legshot: [26, 22, 19]
        }
      ]
    },
    {
      id: "duster-rx6",
      name: "Duster RX6",
      type: "Pistol",
      image: "assets/archive/weapons/duster_rx6.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 }, // (5.04 - 4) / (6 - 4) * 100
        magazine: 6,
        fireRate: { value: 150, percent: 15 }, // 150 / 1000 * 100
        reloadTime: { value: 2.3, percent: 74 }, // (6 - 2.3) / (6 - 1) * 100
        penetration: "MID"
      },
      description: "High risk, high reward. Low rate of fire, so make your shots count.",
      damage: [
        {
          ranges: ["0-25m", "25m+"],
          headshot: [160, 145],
          bodyshot: [55, 50],
          legshot: [47, 43]
        }
      ]
    },
    {
      id: "melee",
      name: "Melee",
      type: "Melee",
      image: "assets/archive/weapons/melee.webp",
      stats: {},
      description: "The Melee is a basic melee weapon. It is the default weapon that players start with.",
      damage: [
        {
          ranges: ["Front-Side", "Back"],
          bodyshot: [50, 150]
        }
      ]
    }
  ]
};

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Weapon Renderer
  const WeaponRenderer = {
    init: function () {
      this.renderAllWeapons();
      this.attachEventListeners();
    },

    /**
     * Creates a weapon card DOM element from weapon data
     */
    createWeaponCard: function (weapon, category) {
      // Create the main card element
      const card = document.createElement('div');
      card.classList.add('weapon-card', category);
      card.id = weapon.id;

      // Create the weapon image
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('weapon-image');

      const img = document.createElement('img');
      img.src = weapon.image;
      img.alt = weapon.name;
      img.loading = "lazy";
      imageContainer.appendChild(img);

      // Create the details container
      const details = document.createElement('div');
      details.classList.add('weapon-details');

      // Add weapon name and type
      const nameEl = document.createElement('h4');
      nameEl.classList.add('weapon-name');
      nameEl.textContent = weapon.name;

      const typeEl = document.createElement('p');
      typeEl.classList.add('weapon-type');
      typeEl.textContent = weapon.type;

      // Create the stats panel
      const statsPanel = this.createStatsPanel(weapon, category);

      // Assemble the card
      details.appendChild(nameEl);
      details.appendChild(typeEl);
      details.appendChild(statsPanel);

      card.appendChild(imageContainer);
      card.appendChild(details);

      return card;
    },

    /**
     * Creates the stats panel for a weapon
     */
    createStatsPanel: function (weapon, category) {
      const panel = document.createElement('div');
      panel.classList.add('weapon-stats-panel', category);

      // Stats header
      const header = document.createElement('div');
      header.classList.add('stats-header');
      header.textContent = 'STATS';

      panel.appendChild(header);

      // Add each stat
      if (weapon.stats.runSpeed) {
        panel.appendChild(this.createStatRow('RUN SPEED', weapon.stats.runSpeed.value, weapon.stats.runSpeed.percent));
      }

      if (weapon.stats.magazine) {
        const magRow = document.createElement('div');
        magRow.classList.add('stats-row');

        const magName = document.createElement('div');
        magName.classList.add('stat-name');
        magName.textContent = 'MAGAZINE';

        const magValue = document.createElement('div');
        magValue.classList.add('stat-value');
        magValue.textContent = weapon.stats.magazine;

        magRow.appendChild(magName);
        magRow.appendChild(magValue);
        panel.appendChild(magRow);
      }

      if (weapon.stats.fireRate) {
        panel.appendChild(this.createStatRow('FIRE RATE', weapon.stats.fireRate.value, weapon.stats.fireRate.percent));
      }

      if (weapon.stats.reloadTime) {
        panel.appendChild(this.createStatRow('RELOAD TIME', weapon.stats.reloadTime.value, weapon.stats.reloadTime.percent));
      }

      if (weapon.stats.penetration) {
        const penRow = document.createElement('div');
        penRow.classList.add('stats-row');

        const penName = document.createElement('div');
        penName.classList.add('stat-name');
        penName.textContent = 'PENETRATION';

        const penValue = document.createElement('div');
        penValue.classList.add('stat-value');
        penValue.textContent = weapon.stats.penetration;

        penRow.appendChild(penName);
        penRow.appendChild(penValue);
        panel.appendChild(penRow);
      }

      // Description
      if (weapon.description) {
        const desc = document.createElement('div');
        desc.classList.add('stats-description');
        desc.textContent = weapon.description;
        panel.appendChild(desc);
      }

      // Damage table
      if (weapon.damage && weapon.damage.length > 0) {
        panel.appendChild(this.createDamageTable(weapon.damage[0]));
      }

      return panel;
    },

    /**
     * Creates a stat row with a progress bar
     */
    createStatRow: function (name, value, percent) {
      const row = document.createElement('div');
      row.classList.add('stats-row');

      const statName = document.createElement('div');
      statName.classList.add('stat-name');
      statName.textContent = name;

      const barContainer = document.createElement('div');
      barContainer.classList.add('stat-bar-container');

      const barBg = document.createElement('div');
      barBg.classList.add('stat-bar-background');

      const bar = document.createElement('div');
      bar.classList.add('stat-bar');
      bar.style.width = `${percent}%`;

      const statValue = document.createElement('div');
      statValue.classList.add('stat-value');
      statValue.textContent = value;

      barContainer.appendChild(barBg);
      barContainer.appendChild(bar);

      row.appendChild(statName);
      row.appendChild(barContainer);
      row.appendChild(statValue);

      return row;
    },

    /**
     * Creates a damage table
     */
    createDamageTable: function (damageData) {
      const table = document.createElement('div');
      table.classList.add('damage-table');

      // Header row
      const header = document.createElement('div');
      header.classList.add('damage-header');

      const emptyCell = document.createElement('div');
      emptyCell.classList.add('damage-cell');
      header.appendChild(emptyCell);

      // Add range headers
      damageData.ranges.forEach(range => {
        const cell = document.createElement('div');
        cell.classList.add('damage-cell');
        cell.textContent = range;
        header.appendChild(cell);
      });

      table.appendChild(header);

      // Headshot row
      if (damageData.headshot) {
        table.appendChild(
          this.createDamageRow('headshot', this.createHeadIcon(), damageData.headshot)
        );
      }

      // Bodyshot row
      if (damageData.bodyshot) {
        table.appendChild(
          this.createDamageRow('bodyshot', this.createBodyIcon(), damageData.bodyshot)
        );
      }

      // Legshot row
      if (damageData.legshot) {
        table.appendChild(
          this.createDamageRow('legshot', this.createLegIcon(), damageData.legshot)
        );
      }

      return table;
    },

    /**
     * Creates a damage row
     */
    createDamageRow: function (type, icon, values) {
      const row = document.createElement('div');
      row.classList.add('damage-row', type);

      const iconCell = document.createElement('div');
      iconCell.classList.add('damage-icon');
      iconCell.appendChild(icon);
      row.appendChild(iconCell);

      // Add damage values
      values.forEach(value => {
        const cell = document.createElement('div');
        cell.classList.add('damage-cell');
        cell.textContent = value;
        row.appendChild(cell);
      });

      return row;
    },

    /**
     * Creates a head icon element
     */
    createHeadIcon: function () {
      const icon = document.createElement('div');
      icon.classList.add('head-icon');
      return icon;
    },

    /**
     * Creates a body icon element
     */
    createBodyIcon: function () {
      const icon = document.createElement('div');
      icon.classList.add('body-icon');
      return icon;
    },

    /**
     * Creates a leg icon element
     */
    createLegIcon: function () {
      const legIconContainer = document.createElement('div');

      const legLeft = document.createElement('div');
      legLeft.classList.add('leg-icon');

      const legRight = document.createElement('div');
      legRight.classList.add('leg-icon');

      legIconContainer.appendChild(legLeft);
      legIconContainer.appendChild(legRight);

      return legIconContainer;
    },

    /**
     * Renders all weapons by category
     */
    renderAllWeapons: function () {
      // Render short range weapons
      const shortRangeGrid = document.querySelector('#short-range-weapons .weapons-grid');
      if (shortRangeGrid) {
        weaponsData.shortRange.forEach(weapon => {
          shortRangeGrid.appendChild(this.createWeaponCard(weapon, 'short-range'));
        });
      }

      // Render mid & long range weapons
      const midRangeGrid = document.querySelector('#mid-long-range-weapons .weapons-grid');
      if (midRangeGrid) {
        weaponsData.midLongRange.forEach(weapon => {
          midRangeGrid.appendChild(this.createWeaponCard(weapon, 'mid-long-range'));
        });
      }

      // Render pistol & melee weapons
      const pistolGrid = document.querySelector('#pistol-melee-weapons .weapons-grid');
      if (pistolGrid) {
        weaponsData.pistolMelee.forEach(weapon => {
          pistolGrid.appendChild(this.createWeaponCard(weapon, 'pistol-melee'));
        });
      }
    },

    /**
     * Attach event listeners for weapon filtering
     */
    attachEventListeners: function () {
      // Example: Filter functionality could be added here
      // const filterButtons = document.querySelectorAll('.weapon-filter-btn');
      // filterButtons.forEach(btn => {
      //   btn.addEventListener('click', function() {
      //     const filterValue = this.getAttribute('data-filter');
      //     WeaponRenderer.filterWeapons(filterValue);
      //   });
      // });
    }
  };

  // Initialize the weapon renderer
  WeaponRenderer.init();
});