// All weapon data is centralized here for easy management
export const weaponsData = {
  shortRange: [
    {
      id: "m25-hornet",
      name: "M25 HORNET",
      type: "Submachine Gun",
      image: "/assets/weapons/m25_hornet.webp",
      stats: {
        runSpeed: { value: 4.75, percent: 38 },
        magazine: 25,
        fireRate: { value: 750, percent: 75 },
        reloadTime: { value: 2.0, percent: 80 },
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
      image: "/assets/weapons/buzzsaw_rt40.webp",
      stats: {
        runSpeed: { value: 4.75, percent: 38 },
        magazine: 40,
        fireRate: { value: 840, percent: 84 },
        reloadTime: { value: 2.3, percent: 74 },
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
      image: "/assets/weapons/whisper.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 },
        magazine: 25,
        fireRate: { value: 666, percent: 67 },
        reloadTime: { value: 2.0, percent: 80 },
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
      image: "/assets/weapons/m17_bouncer.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 },
        magazine: 5,
        fireRate: { value: 60, percent: 6 },
        reloadTime: { value: 4.2, percent: 36 },
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
      image: "/assets/weapons/m18_drummer.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 },
        magazine: 18,
        fireRate: { value: 160, percent: 16 },
        reloadTime: { value: 3.3, percent: 54 },
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
      image: "/assets/weapons/trident.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 18,
        fireRate: { value: 760, percent: 76 },
        reloadTime: { value: 2.3, percent: 74 },
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
      image: "/assets/weapons/cyclone.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 30,
        fireRate: { value: 590, percent: 59 },
        reloadTime: { value: 2.5, percent: 70 },
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
      image: "/assets/weapons/crusader.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 30,
        fireRate: { value: 666, percent: 67 },
        reloadTime: { value: 2.5, percent: 70 },
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
      image: "/assets/weapons/m49_fury.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 50,
        fireRate: { value: 525, percent: 53 },
        reloadTime: { value: 2.5, percent: 70 },
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
      image: "/assets/weapons/berserker_rb3.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 75,
        fireRate: { value: 600, percent: 60 },
        reloadTime: { value: 5.1, percent: 18 },
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
      image: "/assets/weapons/blackout.webp",
      stats: {
        runSpeed: { value: 4.77, percent: 39 },
        magazine: 25,
        fireRate: { value: 680, percent: 68 },
        reloadTime: { value: 2.5, percent: 70 },
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
      image: "/assets/weapons/m67_reaver.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 25,
        fireRate: { value: 550, percent: 55 },
        reloadTime: { value: 2.1, percent: 78 },
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
      image: "/assets/weapons/tempest.webp",
      stats: {
        runSpeed: { value: 4.50, percent: 25 },
        magazine: 12,
        fireRate: { value: 300, percent: 30 },
        reloadTime: { value: 2.3, percent: 74 },
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
      image: "/assets/weapons/harpe.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 },
        magazine: 5,
        fireRate: { value: 90, percent: 9 },
        reloadTime: { value: 2.0, percent: 80 },
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
      image: "/assets/weapons/prototype-op.webp",
      stats: {
        runSpeed: { value: 4.36, percent: 18 },
        magazine: 5,
        fireRate: { value: 33, percent: 3 },
        reloadTime: { value: 2.0, percent: 80 },
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
      image: "/assets/weapons/m2_carbon.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 },
        magazine: 12,
        fireRate: { value: 352, percent: 35 },
        reloadTime: { value: 1.8, percent: 84 },
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
      image: "/assets/weapons/m10_brat.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 },
        magazine: 12,
        fireRate: { value: 900, percent: 90 },
        reloadTime: { value: 2.3, percent: 74 },
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
      image: "/assets/weapons/shiv.webp",
      stats: {
        runSpeed: { value: 5.35, percent: 68 },
        magazine: 12,
        fireRate: { value: 405, percent: 41 },
        reloadTime: { value: 1.7, percent: 86 },
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
      image: "/assets/weapons/duster_rx6.webp",
      stats: {
        runSpeed: { value: 5.04, percent: 52 },
        magazine: 6,
        fireRate: { value: 150, percent: 15 },
        reloadTime: { value: 2.3, percent: 74 },
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
      image: "/assets/weapons/melee.webp",
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
