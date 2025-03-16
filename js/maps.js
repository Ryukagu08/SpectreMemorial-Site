/**
 * maps.js - Map selection and display functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Maps interaction functionality
    const MapController = {
        init: function() {
            this.mapData = {
                canal: {
                    title: 'CANAL',
                    description: "The 'Canal' area within Breakwater's Shadows district is a disputed space claimed by Shadows but fully controlled by Port. By day, dockhands move the essential cargo and marine supplies that keep Breakwater's coastal trade moving. As dusk falls, the lines between Shadows and Port blur; whispers of smuggling, secret warehouses and shady deals are passed through hushed conversations. Santai players leverage the massive fast-recall platform and the cover of cargo-strewn docks to dominate the map.",
                    mainImage: 'assets/archive/maps/canal.webp',
                    minimapImage: 'assets/archive/maps/canal-minimap.webp',
                    tags: ['Breakwater','Shadows', 'Port']
                },
                commons: {
                    title: 'COMMONS',
                    description: "The 'Commons' fighting area is tucked into the far western edge of the vibrant Communa district along the Inner Canal. Sounds of Port's commerce usually fill the air - but everything stops to make way for a Santai match held in Communa.",
                    mainImage: 'assets/archive/maps/commons.webp',
                    minimapImage: 'assets/archive/maps/commons-minimap.webp',
                    tags: ['Communa', 'Port']
                },
                metro: {
                    title: 'METRO',
                    description: "This station was once a terminal connection between Breakwater's city center and an oasis-style resort village until the desert sands overtook both the town and its transit systems. Now, scavengers pilfer power and electronics while rival Santai crews battle within the old tunnels and trains.",
                    mainImage: 'assets/archive/maps/metro.webp',
                    minimapImage: 'assets/archive/maps/metro-minimap.webp',
                    tags: ['Breakwater', 'Scavengers']
                },
                mill: {
                    title: 'MILL',
                    description: 'This research facility was once used to produce ultrafast fertilizers and climate-adapted crops. After an accidental industrial spill, the experiment was deemed "too successful," and the overgrown site was abandoned. It has now been repurposed by Santai combatants who appreciate the catwalks and tunnels of this wild, green place.',
                    mainImage: 'assets/archive/maps/mill.webp',
                    minimapImage: 'assets/archive/maps/mill-minimap.webp',
                    tags: ['Research', 'Abandoned']
                },
                skyway: {
                    title: 'SKYWAY',
                    description: "An ambitious, long-term project to connect the south end of Breakwater to a neighboring city-state. Santai combatants quickly recognized the construction site's potential and set up custom Fast Recall Zones around the map to allow for creative movement.",
                    mainImage: 'assets/archive/maps/skyway.webp',
                    minimapImage: 'assets/archive/maps/skyway-minimap.webp',
                    tags: ['Breakwater', 'South']
                }
            };
            
            this.bindEvents();
            this.showActiveMapDetails('canal'); // Default map
        },
        
        bindEvents: function() {
            const mapCards = document.querySelectorAll('.map-card');
            const self = this;
            
            mapCards.forEach(card => {
                card.addEventListener('click', function() {
                    const mapId = this.getAttribute('data-map');
                    
                    // Update active card
                    mapCards.forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update featured map and show details
                    self.updateFeaturedMap(mapId);
                    self.showActiveMapDetails(mapId);
                    
                    // Removed: Auto-scroll to featured map
                });
            });
        },
        
        updateFeaturedMap: function(mapId) {
            const mapData = this.mapData[mapId];
            const featuredMap = document.getElementById('featuredMap');
            
            if (!featuredMap || !mapData) return;
            
            // Update images
            const mainImage = featuredMap.querySelector('.main-map-image');
            const minimapImage = featuredMap.querySelector('.minimap-image');
            
            mainImage.src = mapData.mainImage;
            mainImage.alt = mapData.title;
            minimapImage.src = mapData.minimapImage;
            minimapImage.alt = `${mapData.title} Minimap`;
            
            // Update content
            const title = featuredMap.querySelector('.map-title');
            const description = featuredMap.querySelector('.map-description');
            const tagsContainer = featuredMap.querySelector('.map-tags');
            
            title.textContent = mapData.title;
            description.textContent = mapData.description;
            
            // Clear and recreate tags
            tagsContainer.innerHTML = '';
            mapData.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.classList.add('map-tag');
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });
            
            // Add an animation to indicate change
            featuredMap.classList.add('updating');
            setTimeout(() => featuredMap.classList.remove('updating'), 300);
        },
        
        showActiveMapDetails: function(mapId) {
            // Hide all details sections
            const allDetails = document.querySelectorAll('.map-details');
            allDetails.forEach(detail => detail.classList.remove('active'));
            
            // Show the selected map's details
            const activeDetails = document.getElementById(`${mapId}-details`);
            if (activeDetails) {
                activeDetails.classList.add('active');
                
                // Removed: Auto-scroll to details section
            }
        }
    };
    
    // Check if we're on the maps tab before initializing
    const mapsTab = document.getElementById('archive-maps');
    if (mapsTab) {
        MapController.init();
    }
});