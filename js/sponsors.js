document.addEventListener('DOMContentLoaded', function () {
    function preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    const SponsorController = {
        init: function () {
            this.sponsorData = {
                pinnacle: {
                    name: 'PINNACLE INTERNATIONAL',
                    district: 'Five Stars',
                    role: 'Assault',
                    bannerImage: 'assets/sponsors/banners/pinnacle-banner.webp',
                    logoImage: 'assets/sponsors/banners/pinnacle-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/pinnacle-art.webp',
                    abilities: {
                        primary: {
                            name: 'SPLINTER GRENADE',
                            description: 'Throw a grenade that explodes into splinters, each dealing damage.',
                            icon: 'assets/sponsors/abilities/pinnacle-primary.webp'
                        },
                        secondary: {
                            name: 'ADRENA-LINK',
                            description: 'Instantly equip a Spectre-linked stim that heals you. While healing, you can switch to your Spectre to gain enhanced vision and movespeed.',
                            icon: 'assets/sponsors/abilities/pinnacle-secondary.webp'
                        },
                        tertiary: {
                            name: 'FLASH GRENADE',
                            description: 'Throw a grenade that explodes and blinds all players in line of sight.',
                            alt: 'ALT FIRE: An underhand throw that explodes.',
                            icon: 'assets/sponsors/abilities/pinnacle-tertiary.webp'
                        }
                    }
                },
                morrgen: {
                    name: 'MORRGEN UNITED',
                    district: 'Moongate',
                    role: 'Disruptor',
                    bannerImage: 'assets/sponsors/banners/morrgen-banner.webp',
                    logoImage: 'assets/sponsors/banners/morrgen-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/morrgen-art.webp',
                    abilities: {
                        primary: {
                            name: 'SMOKE SHIFT',
                            description: 'Throw a grenade that creates a cloud of smoke.',
                            alt: 'ALT FIRE: Throw a smoke grenade and your Puck at the same time. Enemies cannot see your Puck\'s recall line.',
                            icon: 'assets/sponsors/abilities/morrgen-primary.webp'
                        },
                        secondary: {
                            name: 'MELTDOWN',
                            description: 'Throw a grenade that creates an area of caustic fluid and damages players health over time.',
                            icon: 'assets/sponsors/abilities/morrgen-secondary.webp'
                        },
                        tertiary: {
                            name: 'HIDDEN GRASP',
                            description: 'Deploy a trap that cloaks itself after deployment. Explodes if an enemy gets too close, creating a slow zone for a set amount of time.',
                            icon: 'assets/sponsors/abilities/morrgen-tertiary.webp'
                        }
                    }
                },
                bloom: {
                    name: 'BLOOM TECHNOLOGIES',
                    district: 'Greenbelt',
                    role: 'Support',
                    bannerImage: 'assets/sponsors/banners/bloom-banner.webp',
                    logoImage: 'assets/sponsors/banners/bloom-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/bloom-art.webp',
                    abilities: {
                        primary: {
                            name: 'HEX BARRIER',
                            description: 'Deploy a barrier that blocks bullets. Each section of the barrier has some health.',
                            icon: 'assets/sponsors/abilities/bloom-primary.webp'
                        },
                        secondary: {
                            name: 'TWIN MEND',
                            description: 'Heal a damaged ally and their Spectre over time.',
                            alt: 'ALT FIRE: If damaged, heal yourself and your Spectre for some health over time.',
                            icon: 'assets/sponsors/abilities/bloom-secondary.webp'
                        },
                        tertiary: {
                            name: 'SWARM GRENADE',
                            description: 'Throw a grenade that releases a swarm of bees for a set amount of time. The swarm blocks vision and deals damage to enemies inside it.',
                            icon: 'assets/sponsors/abilities/bloom-tertiary.webp'
                        }
                    }
                },
                ryker: {
                    name: 'RYKER INDUSTRIES',
                    district: 'Port',
                    role: 'Recon',
                    bannerImage: 'assets/sponsors/banners/ryker-banner.webp',
                    logoImage: 'assets/sponsors/banners/ryker-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/ryker-art.webp',
                    abilities: {
                        primary: {
                            name: 'WAVE SCAN',
                            description: 'Throw a sonar spike that pulses towards your active body. Enemies hit by a pulse will be located for a short amount of time.',
                            alt: 'ALT FIRE: The sonar spike will bounce once before sticking.',
                            icon: 'assets/sponsors/abilities/ryker-primary.webp'
                        },
                        secondary: {
                            name: 'HULL MINE',
                            description: 'After a short delay, the first enemy who gets too close will trigger several explosions, each of which deals damage.',
                            icon: 'assets/sponsors/abilities/ryker-secondary.webp'
                        },
                        tertiary: {
                            name: 'ARC SENTRY',
                            description: 'Deploys a sentry that slows enemies who get within its line of sight.',
                            icon: 'assets/sponsors/abilities/ryker-tertiary.webp'
                        }
                    }
                },
                vector: {
                    name: 'VECTOR DYNAMICS',
                    district: 'Emerald',
                    role: 'Assault',
                    bannerImage: 'assets/sponsors/banners/vector-banner.webp',
                    logoImage: 'assets/sponsors/banners/vector-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/vector-art.webp',
                    abilities: {
                        primary: {
                            name: 'DUAL AMP',
                            description: 'Deploy a marker and gain an increased fire rate buff for a short amount of time. Reactivate to teleport your Spectre to the marker, giving it a fire rate buff. Kills reset the buff duration.',
                            icon: 'assets/sponsors/abilities/vector-primary.webp'
                        },
                        secondary: {
                            name: 'VECTOR WALL',
                            description: 'Deploy a slow moving nanobot wall that blocks vision.',
                            alt: 'ALT FIRE: The wall moves faster and lasts for a shorter amount of time.',
                            icon: 'assets/sponsors/abilities/vector-secondary.webp'
                        },
                        tertiary: {
                            name: 'NANO SPHERE',
                            description: 'Deploy a bouncing nano swarm that deals damage over time to the first enemy it gets near.',
                            icon: 'assets/sponsors/abilities/vector-tertiary.webp'
                        }
                    }
                },
                ghostlink: {
                    name: 'GHOSTLINK COLLECTIVE',
                    district: 'Communa',
                    role: 'Disruptor',
                    bannerImage: 'assets/sponsors/banners/ghostlink-banner.webp',
                    logoImage: 'assets/sponsors/banners/ghostlink-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/ghostlink-art.webp',
                    abilities: {
                        primary: {
                            name: 'PARTITION',
                            description: 'Deploy a barrier that blocks line of sight. The wall is not stopped by terrain and touching the wall slightly blurs vision.',
                            icon: 'assets/sponsors/abilities/ghostlink-primary.webp'
                        },
                        secondary: {
                            name: 'DUPE',
                            description: 'Instantly deploy a dupe of your current body that lasts a few seconds. Additionally, leave a dupe behind you for a set of time when you Puck Throw if you have a charge remaining. Enemies who shoot dupes are revealed for a short amount of time.',
                            icon: 'assets/sponsors/abilities/ghostlink-secondary.webp'
                        },
                        tertiary: {
                            name: 'DISTORTION FIELD',
                            description: 'Throw a grenade that creates a large distortion field and blurs the vision of all player\'s inside.',
                            icon: 'assets/sponsors/abilities/ghostlink-tertiary.webp'
                        }
                    }
                },
                muu: {
                    name: 'MUU ROBOTICS',
                    district: 'Communa',
                    role: 'Support',
                    bannerImage: 'assets/sponsors/banners/muu-banner.webp',
                    logoImage: 'assets/sponsors/banners/muu-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/muu-art.webp',
                    abilities: {
                        primary: {
                            name: 'PATCHES',
                            description: 'Deploy a drone that moves forward and heals you and allies in its radius for health over time.',
                            icon: 'assets/sponsors/abilities/muu-primary.webp'
                        },
                        secondary: {
                            name: 'DAZZLER',
                            description: 'Deploy a flying drone that follows your crosshair. After a short duration, the drone explodes and obscures the vision of any enemies in line of sight.',
                            icon: 'assets/sponsors/abilities/muu-secondary.webp'
                        },
                        tertiary: {
                            name: 'HYPER DOME',
                            description: 'Throw a grenade that creates a permanent Fast Recall Zone and a breakable health shield dome on floor impact.',
                            icon: 'assets/sponsors/abilities/muu-tertiary.webp'
                        }
                    }
                },
                umbra: {
                    name: 'UMBRA RECONNAISSANCE',
                    district: 'Shadows',
                    role: 'Recon',
                    bannerImage: 'assets/sponsors/banners/umbra-banner.webp',
                    logoImage: 'assets/sponsors/banners/umbra-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/umbra-art.webp',
                    abilities: {
                        primary: {
                            name: 'RECON WING',
                            description: 'Throw a drone that sticks to the first surface it hits. After a second the drone reveals enemies within range for a short amount of time.',
                            alt: 'TARGET MARKER: Instantly create an AoE at the marker that reveals enemies.',
                            icon: 'assets/sponsors/abilities/umbra-primary.webp'
                        },
                        secondary: {
                            name: 'PULSEFINDER',
                            description: 'Instantly equip a scanner that pulses every couple of seconds for a set amount of time. Enemies hit are detected and leave a marker at their location. Detected enemies can see the remaining pulses.',
                            icon: 'assets/sponsors/abilities/umbra-secondary.webp'
                        },
                        tertiary: {
                            name: 'GLARE BURST',
                            description: 'Deploy a drone that charges for a few seconds and then temporarily blinds all players in its AoE.',
                            alt: 'TARGET MARKER: Instantly create an AoE at the marker that temporarily blinds all players for a short amount of time.',
                            icon: 'assets/sponsors/abilities/umbra-tertiary.webp'
                        }
                    }
                },
                monark: {
                    name: 'MONARK TACTICAL',
                    district: 'Shadows',
                    role: 'Assault',
                    bannerImage: 'assets/sponsors/banners/monark-banner.webp',
                    logoImage: 'assets/sponsors/banners/monark-logo.webp',
                    abilitiesArt: 'assets/sponsors/abilities-art/monark-art.webp',
                    abilities: {
                        primary: {
                            name: 'SOVEREIGN SHELL',
                            description: 'Instantly protects you with a shield that slows you over time, and lasts 5 seconds. Reactivate it to end early.',
                            icon: 'assets/sponsors/abilities/monark-primary.webp'
                        },
                        secondary: {
                            name: 'CROSSWALL',
                            description: 'Deploy a T-shaped wall that blocks vision. Aim towards the ground to deploy closer.',
                            alt: 'ALT FIRE: If Crosswall is prepared on your Spectre, deploy the wall from your Spectre instead.',
                            icon: 'assets/sponsors/abilities/monark-secondary.webp'
                        },
                        tertiary: {
                            name: 'SIPHON',
                            description: 'Fire a wave of energy. Enemies hit are temporarily drained health. If at least one enemy is hit, you and your Spectre gain health (and can overheal).',
                            icon: 'assets/sponsors/abilities/monark-tertiary.webp'
                        }
                    }
                }
            };

            this.bindEvents();
            this.setActiveSponsor('pinnacle');
        },

        bindEvents: function () {
            const sponsorThumbs = document.querySelectorAll('.sponsor-thumb');
            const self = this;

            sponsorThumbs.forEach(thumb => {
                const sponsorId = thumb.getAttribute('data-sponsor');

                thumb.addEventListener('mouseenter', () => {
                    const sponsorData = self.sponsorData[sponsorId];
                    if (sponsorData) {
                        preloadImage(sponsorData.bannerImage);
                        preloadImage(sponsorData.logoImage);
                        preloadImage(sponsorData.abilitiesArt);

                        if (sponsorData.abilities) {
                            Object.values(sponsorData.abilities).forEach(ability => {
                                preloadImage(ability.icon);
                            });
                        }
                    }
                });

                thumb.addEventListener('click', function () {
                    if (self.sponsorData[sponsorId]) {
                        sponsorThumbs.forEach(t => t.classList.remove('active'));
                        this.classList.add('active');

                        self.updateFeaturedSponsor(sponsorId);
                    }
                });
            });
        },

        updateFeaturedSponsor: function (sponsorId) {
            const sponsorData = this.sponsorData[sponsorId];
            const featuredCard = document.getElementById('featuredSponsor');

            if (!featuredCard || !sponsorData) return;

            let sponsorColorRGB;
            switch (sponsorId) {
                case 'pinnacle':
                case 'umbra':
                    sponsorColorRGB = '255, 58, 68';
                    break;
                case 'morrgen':
                    sponsorColorRGB = '75, 249, 252';
                    break;
                case 'bloom':
                    sponsorColorRGB = '198, 234, 52';
                    break;
                case 'ryker':
                    sponsorColorRGB = '255, 138, 0';
                    break;
                case 'vector':
                    sponsorColorRGB = '155, 48, 255';
                    break;
                case 'ghostlink':
                    sponsorColorRGB = '224, 240, 255';
                    break;
                case 'muu':
                    sponsorColorRGB = '221, 51, 251';
                    break;
                case 'monark':
                    sponsorColorRGB = '36, 237, 174';
                    break;
                default:
                    sponsorColorRGB = '255, 203, 0';
            }

            featuredCard.style.setProperty('--sponsor-color-rgb', sponsorColorRGB);
            featuredCard.classList.add('updating-out');

            setTimeout(() => {
                featuredCard.querySelector('.sponsor-banner-image').src = sponsorData.bannerImage;
                featuredCard.querySelector('.sponsor-banner-image').alt = sponsorData.name;
                featuredCard.querySelector('.sponsor-logo-image').src = sponsorData.logoImage;
                featuredCard.querySelector('.sponsor-logo-image').alt = `${sponsorData.name} Logo`;

                featuredCard.querySelector('.sponsor-art-image').src = sponsorData.abilitiesArt;
                featuredCard.querySelector('.sponsor-art-image').alt = `${sponsorData.name} Abilities`;

                featuredCard.querySelector('.sponsor-name').textContent = sponsorData.name;

                const metaValues = featuredCard.querySelectorAll('.meta-value');
                if (metaValues.length >= 2) {
                    metaValues[0].textContent = sponsorData.district;
                    metaValues[1].textContent = sponsorData.role;
                }

                featuredCard.className = 'sponsor-showcase';
                featuredCard.setAttribute('data-sponsor', sponsorId);

                const abilitiesContainer = featuredCard.querySelector('.abilities-container');
                if (abilitiesContainer) {
                    const oldAbilityCards = abilitiesContainer.querySelectorAll('.ability-card');

                    const abilitiesData = [];
                    oldAbilityCards.forEach((card, index) => {
                        let abilityType;
                        switch (index) {
                            case 0: abilityType = 'PRIMARY'; break;
                            case 1: abilityType = 'SECONDARY'; break;
                            case 2: abilityType = 'TERTIARY'; break;
                        }

                        abilitiesData.push({
                            abilityInfo: sponsorData.abilities[abilityType.toLowerCase()],
                            type: abilityType
                        });
                    });

                    abilitiesContainer.innerHTML = '';
                    abilitiesData.forEach(data => {
                        if (!data.abilityInfo) return;

                        const newCard = this.createAbilityCard(data.abilityInfo, data.type);
                        abilitiesContainer.appendChild(newCard);
                    });
                }

                featuredCard.classList.add('updating-in');

                setTimeout(() => {
                    featuredCard.classList.remove('updating-out', 'updating-in');
                }, 500);

            }, 400);
        },

        createAbilityCard: function (abilityData, type) {
            if (!abilityData) return null;

            const card = document.createElement('div');
            card.className = 'ability-card';

            const iconContainer = document.createElement('div');
            iconContainer.className = 'ability-icon-container';

            const icon = document.createElement('img');
            icon.className = 'ability-icon';
            icon.src = abilityData.icon;
            icon.alt = abilityData.name;
            icon.loading = "lazy"
            iconContainer.appendChild(icon);

            const details = document.createElement('div');
            details.className = 'ability-details';

            const header = document.createElement('div');
            header.className = 'ability-header';

            const name = document.createElement('span');
            name.className = 'ability-name';
            name.textContent = abilityData.name;

            const typeSpan = document.createElement('span');
            typeSpan.className = 'ability-type';
            typeSpan.textContent = type;

            header.appendChild(name);
            header.appendChild(typeSpan);

            const description = document.createElement('p');
            description.className = 'ability-description';
            description.textContent = abilityData.description;

            details.appendChild(header);
            details.appendChild(description);

            if (abilityData.alt) {
                const alt = document.createElement('p');
                alt.className = 'ability-alt';
                alt.textContent = abilityData.alt;
                details.appendChild(alt);
            }

            card.appendChild(iconContainer);
            card.appendChild(details);

            return card;
        },

        setActiveSponsor: function (sponsorId) {
            const sponsorThumb = document.querySelector(`.sponsor-thumb[data-sponsor="${sponsorId}"]`);
            if (sponsorThumb) {
                sponsorThumb.classList.add('active');
                this.updateFeaturedSponsor(sponsorId);
            }
        }
    };

    const sponsorsTab = document.getElementById('archive-sponsors');
    if (sponsorsTab) {
        SponsorController.init();
    }
});