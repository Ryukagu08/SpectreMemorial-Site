/**
 * Gallery pagination system for displaying artwork in pages
 */
document.addEventListener('DOMContentLoaded', function() {
    const GalleryPagination = {
        settings: {
            itemsPerPage: 4,       // 2 rows of 2 images
            currentPage: 1,
            totalPages: 0,
            galleryGrids: {},      // Stores references to gallery grids
            paginationControls: {} // Stores references to pagination controls
        },

        init: function() {
            this.setupAllGalleries();
            
            // Reset pagination when changing tabs
            document.querySelectorAll('.tab-button, .subtab-button').forEach(button => {
                button.addEventListener('click', () => {
                    setTimeout(() => this.refreshActiveGalleries(), 100);
                });
            });
        },
        
        setupAllGalleries: function() {
            // Find the artworks gallery section
            const artworksContent = document.getElementById('gallery-artworks');
            if (!artworksContent) return;
            
            // Find the artworks grid
            const artworksGrid = artworksContent.querySelector('.artworks-grid');
            if (!artworksGrid) return;
            
            // Add targeting class and create pagination container
            artworksGrid.classList.add('concept-promotional-grid');
            
            const afterGridContainer = document.createElement('div');
            afterGridContainer.className = 'pagination-above-comic';
            
            try {
                artworksGrid.after(afterGridContainer);
            } catch (e) {
                // Silently fail if insertion fails
            }
            
            this.initializeGallery('gallery-artworks', 'concept-promotional');
        },

        initializeGallery: function(galleryId, sectionId) {
            const gallerySection = document.getElementById(galleryId);
            if (!gallerySection) return;

            // Find gallery grid by class or fallback to basic selector
            let galleryGrid = gallerySection.querySelector(`.${sectionId}-grid`);
            if (!galleryGrid) {
                galleryGrid = gallerySection.querySelector('.artworks-grid');
            }
            
            if (!galleryGrid) return;

            // Store reference and calculate pagination
            this.settings.galleryGrids[sectionId] = galleryGrid;
            const allItems = Array.from(galleryGrid.querySelectorAll('.artwork-item'));
            const totalPages = Math.ceil(allItems.length / this.settings.itemsPerPage);
            this.settings.totalPages = totalPages;
            
            this.createPaginationControls(gallerySection, sectionId, totalPages);
            this.paginateGallery(sectionId, 1);
        },

        createPaginationControls: function(gallerySection, sectionId, totalPages) {
            // Clear existing pagination controls
            gallerySection.querySelectorAll('.gallery-pagination').forEach(el => el.remove());
            
            // Create pagination elements
            const paginationContainer = document.createElement('div');
            paginationContainer.className = 'gallery-pagination';
            paginationContainer.setAttribute('data-section', sectionId);
            
            const pageButtonsContainer = document.createElement('div');
            pageButtonsContainer.className = 'page-buttons';
            
            // Create navigation buttons
            const prevButton = document.createElement('button');
            prevButton.className = 'pagination-btn prev-btn';
            prevButton.innerHTML = 'Prev';
            prevButton.disabled = true;
            
            const nextButton = document.createElement('button');
            nextButton.className = 'pagination-btn next-btn';
            nextButton.innerHTML = 'Next';
            nextButton.disabled = totalPages <= 1;
            
            const pageIndicator = document.createElement('div');
            pageIndicator.className = 'page-indicator';
            pageIndicator.textContent = `Page 1 of ${totalPages}`;
            
            // Add event listeners
            prevButton.addEventListener('click', () => {
                if (this.settings.currentPage > 1) {
                    this.paginateGallery(sectionId, this.settings.currentPage - 1);
                }
            });
            
            nextButton.addEventListener('click', () => {
                if (this.settings.currentPage < totalPages) {
                    this.paginateGallery(sectionId, this.settings.currentPage + 1);
                }
            });
            
            // Assemble and store controls
            pageButtonsContainer.appendChild(prevButton);
            pageButtonsContainer.appendChild(pageIndicator);
            pageButtonsContainer.appendChild(nextButton);
            paginationContainer.appendChild(pageButtonsContainer);
            
            this.settings.paginationControls[sectionId] = {
                container: paginationContainer,
                prevButton: prevButton,
                nextButton: nextButton,
                pageIndicator: pageIndicator
            };
            
            // Place pagination in container
            const paginationPlacement = gallerySection.querySelector('.pagination-above-comic');
            if (paginationPlacement) {
                paginationPlacement.innerHTML = '';
                paginationPlacement.appendChild(paginationContainer);
            }
        },

        paginateGallery: function(sectionId, pageNumber) {
            const galleryGrid = this.settings.galleryGrids[sectionId];
            if (!galleryGrid) return;
            
            // Calculate visible items for current page
            const allItems = Array.from(galleryGrid.querySelectorAll('.artwork-item'));
            const totalPages = Math.ceil(allItems.length / this.settings.itemsPerPage);
            pageNumber = Math.max(1, Math.min(pageNumber, totalPages));
            this.settings.currentPage = pageNumber;
            
            const startIndex = (pageNumber - 1) * this.settings.itemsPerPage;
            const endIndex = Math.min(startIndex + this.settings.itemsPerPage, allItems.length);
            
            // Hide all items and show only current page
            allItems.forEach(item => item.style.display = 'none');
            
            for (let i = startIndex; i < endIndex; i++) {
                allItems[i].style.display = '';
                allItems[i].style.animationDelay = `${(i - startIndex) * 0.05}s`;
            }
            
            this.updatePaginationControls(sectionId, pageNumber, totalPages);

            // Trigger lazy loading for newly visible images
            if (window.LazyLoader && typeof window.LazyLoader.observeImages === 'function') {
                window.LazyLoader.observeImages();
            }
        },

        updatePaginationControls: function(sectionId, currentPage, totalPages) {
            const controls = this.settings.paginationControls[sectionId];
            if (!controls) return;
            
            controls.pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
            controls.prevButton.disabled = currentPage <= 1;
            controls.nextButton.disabled = currentPage >= totalPages;
        },

        refreshActiveGalleries: function() {
            // Reset active galleries to page 1
            document.querySelectorAll('.tab-content.active .gallery-pagination').forEach(pagination => {
                const sectionId = pagination.getAttribute('data-section');
                if (sectionId && this.settings.galleryGrids[sectionId]) {
                    this.paginateGallery(sectionId, 1);
                }
            });
        }
    };

    // Initialize and expose globally
    GalleryPagination.init();
    window.GalleryPagination = GalleryPagination;
});