/**
 * lazy-loader.js - Handles lazy loading of images throughout the site
 */

document.addEventListener('DOMContentLoaded', function() {
    const LazyLoader = {
        init: function() {
            // Convert all gallery images to lazy loading
            this.setupGalleryImages();
            this.observeImages();
        },

        /**
         * Convert gallery images to use data-src instead of src
         */
        setupGalleryImages: function() {
            // Target all image containers that should use lazy loading
            const imageContainers = document.querySelectorAll('.artwork-item, .gallery-item, .fanart-item');
            
            imageContainers.forEach((container, index) => {
                const img = container.querySelector('img');
                if (img && !img.dataset.src) {
                    // Save original src to data-src
                    img.dataset.src = img.src;
                    
                    // Replace with placeholder or lightweight blur/preview
                    img.src = 'assets/placeholder.webp';
                    
                    // Add loading class
                    container.classList.add('is-loading');
                    
                    // Stagger loading to prevent all images being processed at once
                    container.style.animationDelay = `${index * 0.05}s`;
                }
            });
        },

        /**
         * Set up Intersection Observer to load images when they become visible
         */
        observeImages: function() {
            if (!('IntersectionObserver' in window)) {
                // Fallback for browsers without Intersection Observer
                this.loadAllImages();
                return;
            }

            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const container = entry.target;
                        const img = container.querySelector('img[data-src]');
                        
                        if (img) {
                            this.loadImage(img, container);
                            imageObserver.unobserve(container);
                        }
                    }
                });
            }, {
                rootMargin: '200px 0px', // Start loading 200px before image enters viewport
                threshold: 0.01
            });

            // Observe all image containers
            const imageContainers = document.querySelectorAll('.artwork-item, .gallery-item, .fanart-item');
            imageContainers.forEach(container => {
                imageObserver.observe(container);
            });
        },

        /**
         * Load an individual image
         */
        loadImage: function(img, container) {
            // Create a new image to preload
            const newImage = new Image();
            
            // Set up load event
            newImage.onload = function() {
                // Update the actual img element
                img.src = img.dataset.src;
                
                // Remove loading class and add loaded class
                container.classList.remove('is-loading');
                container.classList.add('is-loaded');
                
                // Clean up data-src to prevent reloading
                setTimeout(() => {
                    img.removeAttribute('data-src');
                }, 100);
            };
            
            // Handle error
            newImage.onerror = function() {
                container.classList.remove('is-loading');
                container.classList.add('error-loading');
            };
            
            // Start loading the image
            newImage.src = img.dataset.src;
        },

        /**
         * Fallback: Load all images at once
         */
        loadAllImages: function() {
            const images = document.querySelectorAll('img[data-src]');
            
            images.forEach(img => {
                const container = img.closest('.artwork-item, .gallery-item, .fanart-item');
                img.src = img.dataset.src;
                
                if (container) {
                    container.classList.remove('is-loading');
                    container.classList.add('is-loaded');
                }
                
                img.onload = function() {
                    img.removeAttribute('data-src');
                };
            });
        }
    };

    // Initialize the lazy loader
    LazyLoader.init();
});