export const sponsorsData = {
  pinnacle: {
    name: 'PINNACLE INTERNATIONAL',
    district: 'Five Stars',
    role: 'Assault',
    bannerImage: '/assets/sponsors/banners/pinnacle-banner.webp',
    logoImage: '/assets/sponsors/banners/pinnacle-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/pinnacle-art.webp',
    colorRGB: '255, 58, 68',
    abilities: {
      primary: {
        name: 'SPLINTER GRENADE',
        description: 'Throw a grenade that explodes into splinters, each dealing damage.',
        icon: '/assets/sponsors/abilities/pinnacle-primary.webp'
      },
      secondary: {
        name: 'ADRENA-LINK',
        description: 'Instantly equip a Spectre-linked stim that heals you. While healing, you can switch to your Spectre to gain enhanced vision and movespeed.',
        icon: '/assets/sponsors/abilities/pinnacle-secondary.webp'
      },
      tertiary: {
        name: 'FLASH GRENADE',
        description: 'Throw a grenade that explodes and blinds all players in line of sight.',
        alt: 'ALT FIRE: An underhand throw that explodes.',
        icon: '/assets/sponsors/abilities/pinnacle-tertiary.webp'
      }
    }
  },
  morrgen: {
    name: 'MORRGEN UNITED',
    district: 'Moongate',
    role: 'Disruptor',
    bannerImage: '/assets/sponsors/banners/morrgen-banner.webp',
    logoImage: '/assets/sponsors/banners/morrgen-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/morrgen-art.webp',
    colorRGB: '75, 249, 252',
    abilities: {
      primary: {
        name: 'SMOKE SHIFT',
        description: 'Throw a grenade that creates a cloud of smoke.',
        alt: 'ALT FIRE: Throw a smoke grenade and your Puck at the same time. Enemies cannot see your Puck\'s recall line.',
        icon: '/assets/sponsors/abilities/morrgen-primary.webp'
      },
      secondary: {
        name: 'MELTDOWN',
        description: 'Throw a grenade that creates an area of caustic fluid and damages players health over time.',
        icon: '/assets/sponsors/abilities/morrgen-secondary.webp'
      },
      tertiary: {
        name: 'HIDDEN GRASP',
        description: 'Deploy a trap that cloaks itself after deployment. Explodes if an enemy gets too close, creating a slow zone for a set amount of time.',
        icon: '/assets/sponsors/abilities/morrgen-tertiary.webp'
      }
    }
  },
  bloom: {
    name: 'BLOOM TECHNOLOGIES',
    district: 'Greenbelt',
    role: 'Support',
    bannerImage: '/assets/sponsors/banners/bloom-banner.webp',
    logoImage: '/assets/sponsors/banners/bloom-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/bloom-art.webp',
    colorRGB: '255, 93, 201',
    abilities: {
      primary: {
        name: 'HEX BARRIER',
        description: 'Deploy a barrier that blocks bullets. Each section of the barrier has some health.',
        icon: '/assets/sponsors/abilities/bloom-primary.webp'
      },
      secondary: {
        name: 'TWIN MEND',
        description: 'Heal a damaged ally and their Spectre over time.',
        alt: 'ALT FIRE: If damaged, heal yourself and your Spectre for some health over time.',
        icon: '/assets/sponsors/abilities/bloom-secondary.webp'
      },
      tertiary: {
        name: 'SWARM GRENADE',
        description: 'Throw a grenade that releases a swarm of bees for a set amount of time. The swarm blocks vision and deals damage to enemies inside it.',
        icon: '/assets/sponsors/abilities/bloom-tertiary.webp'
      }
    }
  },
  ryker: {
    name: 'RYKER INDUSTRIES',
    district: 'Port',
    role: 'Recon',
    bannerImage: '/assets/sponsors/banners/ryker-banner.webp',
    logoImage: '/assets/sponsors/banners/ryker-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/ryker-art.webp',
    colorRGB: '255, 168, 65',
    abilities: {
      primary: {
        name: 'WAVE SCAN',
        description: 'Throw a sonar spike that pulses towards your active body. Enemies hit by a pulse will be located for a short amount of time.',
        alt: 'ALT FIRE: The sonar spike will bounce once before sticking.',
        icon: '/assets/sponsors/abilities/ryker-primary.webp'
      },
      secondary: {
        name: 'HULL MINE',
        description: 'After a short delay, the first enemy who gets too close will trigger several explosions, each of which deals damage.',
        icon: '/assets/sponsors/abilities/ryker-secondary.webp'
      },
      tertiary: {
        name: 'ARC SENTRY',
        description: 'Deploys a sentry that slows enemies who get within its line of sight.',
        icon: '/assets/sponsors/abilities/ryker-tertiary.webp'
      }
    }
  },
  vector: {
    name: 'VECTOR DYNAMICS',
    district: 'Emerald',
    role: 'Assault',
    bannerImage: '/assets/sponsors/banners/vector-banner.webp',
    logoImage: '/assets/sponsors/banners/vector-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/vector-art.webp',
    colorRGB: '95, 242, 100',
    abilities: {
      primary: {
        name: 'DUAL AMP',
        description: 'Deploy a marker and gain an increased fire rate buff for a short amount of time. Reactivate to teleport your Spectre to the marker, giving it a fire rate buff. Kills reset the buff duration.',
        icon: '/assets/sponsors/abilities/vector-primary.webp'
      },
      secondary: {
        name: 'VECTOR WALL',
        description: 'Deploy a slow moving nanobot wall that blocks vision.',
        alt: 'ALT FIRE: The wall moves faster and lasts for a shorter amount of time.',
        icon: '/assets/sponsors/abilities/vector-secondary.webp'
      },
      tertiary: {
        name: 'NANO SPHERE',
        description: 'Deploy a bouncing nano swarm that deals damage over time to the first enemy it gets near.',
        icon: '/assets/sponsors/abilities/vector-tertiary.webp'
      }
    }
  },
  ghostlink: {
    name: 'GHOSTLINK COLLECTIVE',
    district: 'Communa',
    role: 'Disruptor',
    bannerImage: '/assets/sponsors/banners/ghostlink-banner.webp',
    logoImage: '/assets/sponsors/banners/ghostlink-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/ghostlink-art.webp',
    colorRGB: '171, 90, 248',
    abilities: {
      primary: {
        name: 'PARTITION',
        description: 'Deploy a barrier that blocks line of sight. The wall is not stopped by terrain and touching the wall slightly blurs vision.',
        icon: '/assets/sponsors/abilities/ghostlink-primary.webp'
      },
      secondary: {
        name: 'DUPE',
        description: 'Instantly deploy a dupe of your current body that lasts a few seconds. Additionally, leave a dupe behind you for a set of time when you Puck Throw if you have a charge remaining. Enemies who shoot dupes are revealed for a short amount of time.',
        icon: '/assets/sponsors/abilities/ghostlink-secondary.webp'
      },
      tertiary: {
        name: 'DISTORTION FIELD',
        description: 'Throw a grenade that creates a large distortion field and blurs the vision of all player\'s inside.',
        icon: '/assets/sponsors/abilities/ghostlink-tertiary.webp'
      }
    }
  },
  muu: {
    name: 'MUU ROBOTICS',
    district: 'Communa',
    role: 'Support',
    bannerImage: '/assets/sponsors/banners/muu-banner.webp',
    logoImage: '/assets/sponsors/banners/muu-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/muu-art.webp',
    colorRGB: '87, 251, 239',
    abilities: {
      primary: {
        name: 'PATCHES',
        description: 'Deploy a drone that moves forward and heals you and allies in its radius for health over time.',
        icon: '/assets/sponsors/abilities/muu-primary.webp'
      },
      secondary: {
        name: 'DAZZLER',
        description: 'Deploy a flying drone that follows your crosshair. After a short duration, the drone explodes and obscures the vision of any enemies in line of sight.',
        icon: '/assets/sponsors/abilities/muu-secondary.webp'
      },
      tertiary: {
        name: 'HYPER DOME',
        description: 'Throw a grenade that creates a permanent Fast Recall Zone and a breakable health shield dome on floor impact.',
        icon: '/assets/sponsors/abilities/muu-tertiary.webp'
      }
    }
  },
  umbra: {
    name: 'UMBRA RECONNAISSANCE',
    district: 'Shadows',
    role: 'Recon',
    bannerImage: '/assets/sponsors/banners/umbra-banner.webp',
    logoImage: '/assets/sponsors/banners/umbra-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/umbra-art.webp',
    colorRGB: '255, 58, 68',
    abilities: {
      primary: {
        name: 'RECON WING',
        description: 'Throw a drone that sticks to the first surface it hits. After a second the drone reveals enemies within range for a short amount of time.',
        alt: 'TARGET MARKER: Instantly create an AoE at the marker that reveals enemies.',
        icon: '/assets/sponsors/abilities/umbra-primary.webp'
      },
      secondary: {
        name: 'PULSEFINDER',
        description: 'Instantly equip a scanner that pulses every couple of seconds for a set amount of time. Enemies hit are detected and leave a marker at their location. Detected enemies can see the remaining pulses.',
        icon: '/assets/sponsors/abilities/umbra-secondary.webp'
      },
      tertiary: {
        name: 'GLARE BURST',
        description: 'Deploy a drone that charges for a few seconds and then temporarily blinds all players in its AoE.',
        alt: 'TARGET MARKER: Instantly create an AoE at the marker that temporarily blinds all players for a short amount of time.',
        icon: '/assets/sponsors/abilities/umbra-tertiary.webp'
      }
    }
  },
  monark: {
    name: 'MONARK TACTICAL',
    district: 'Shadows',
    role: 'Assault',
    bannerImage: '/assets/sponsors/banners/monark-banner.webp',
    logoImage: '/assets/sponsors/banners/monark-logo.webp',
    abilitiesArt: '/assets/sponsors/abilities-art/monark-art.webp',
    colorRGB: '255, 234, 0',
    abilities: {
      primary: {
        name: 'SOVEREIGN SHELL',
        description: 'Instantly protects you with a shield that slows you over time, and lasts 5 seconds. Reactivate it to end early.',
        icon: '/assets/sponsors/abilities/monark-primary.webp'
      },
      secondary: {
        name: 'CROSSWALL',
        description: 'Deploy a T-shaped wall that blocks vision. Aim towards the ground to deploy closer.',
        alt: 'ALT FIRE: If Crosswall is prepared on your Spectre, deploy the wall from your Spectre instead.',
        icon: '/assets/sponsors/abilities/monark-secondary.webp'
      },
      tertiary: {
        name: 'SIPHON',
        description: 'Fire a wave of energy. Enemies hit are temporarily drained health. If at least one enemy is hit, you and your Spectre gain health (and can overheal).',
        icon: '/assets/sponsors/abilities/monark-tertiary.webp'
      }
    }
  }
};
