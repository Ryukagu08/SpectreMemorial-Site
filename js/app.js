/**
 * app.js - Main application functionality
 * Handles core site features and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize application
    const SpectreApp = {
        init: function() {
            this.setupAnimations();
            this.setupImageLoader();
            this.setupButtonEffects();
            this.setupScrollEffects();
            this.checkEnvironment();
        },
        
        /**
         * Set up animations with intersection observer
         * Only animate elements when they enter the viewport
         */
        setupAnimations: function() {
            const animatedElements = document.querySelectorAll(
                '.feature-grid, .timeline-item, .quote-card, .archive-item, .gallery-item'
            );
            
            // Skip if IntersectionObserver is not supported
            if (!('IntersectionObserver' in window)) return;
            
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // Add animation class when element enters viewport
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        // Stop observing after animation is triggered
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Start observing each element
            animatedElements.forEach(element => {
                element.classList.add('will-animate');
                animationObserver.observe(element);
            });
        },
        
        /**
         * Set up lazy loading for images
         * Only load images when they approach the viewport
         */
        setupImageLoader: function() {
            const images = document.querySelectorAll('img[data-src]');
            
            // Skip if no images need lazy loading
            if (images.length === 0) return;
            
            // Skip if IntersectionObserver is not supported
            if (!('IntersectionObserver' in window)) {
                // Fallback to load all images immediately
                images.forEach(img => {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                });
                return;
            }
            
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.onload = () => img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '100px 0px'
            });
            
            images.forEach(image => {
                imageObserver.observe(image);
            });
        },
        
        /**
         * Set up tab button hover effects with directional borders
         */
        setupButtonEffects: function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            let currentButton = null;
            let previousButton = null;
            let hoverTimer = null;
            const bufferTime = 200; // ms to wait before considering non-quick movement
            
            // Handle mouse enter for each button
            tabButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    // Clear any pending timer
                    if (hoverTimer) {
                        clearTimeout(hoverTimer);
                        hoverTimer = null;
                    }
                    
                    // Update buttons references
                    previousButton = currentButton;
                    currentButton = this;
                    
                    // Skip animation if hovering the same button
                    if (previousButton === currentButton) {
                        return;
                    }
                    
                    // Set direction based on movement pattern
                    this.classList.remove('border-from-left', 'border-from-right');
                    
                    if (previousButton) {
                        const prevIndex = Array.from(tabButtons).indexOf(previousButton);
                        const currentIndex = Array.from(tabButtons).indexOf(currentButton);
                        
                        // Determine the direction and add appropriate class
                        if (prevIndex < currentIndex) {
                            // Moving right
                            this.classList.add('border-from-left');
                            
                            // Make previous button's border exit to the right
                            previousButton.classList.remove('border-from-left', 'border-from-right');
                            previousButton.classList.add('border-to-right');
                        } else {
                            // Moving left
                            this.classList.add('border-from-right');
                            
                            // Make previous button's border exit to the left
                            previousButton.classList.remove('border-from-left', 'border-from-right');
                            previousButton.classList.add('border-to-left');
                        }
                        
                        // Reset previous button's classes after animation completes
                        setTimeout(() => {
                            previousButton.classList.remove('border-to-left', 'border-to-right');
                        }, 300);
                    } else {
                        // Default to left entry for first hover
                        this.classList.add('border-from-left');
                    }
                });
                
                button.addEventListener('mouseleave', function() {
                    const buttonToRemove = this;
                    
                    // Set a timer to wait and see if we hover another button quickly
                    hoverTimer = setTimeout(() => {
                        // If timer completes and this is still the current button,
                        // then we're not doing a quick movement between buttons
                        if (currentButton === buttonToRemove) {
                            // Simple disappear for non-quick movement
                            currentButton.classList.remove('border-from-left', 'border-from-right');
                            currentButton = null;
                            previousButton = null;
                        }
                    }, bufferTime);
                });
            });
            
            // Handle mouse leaving the entire navigation
            const navArea = document.querySelector('.tab-navigation');
            if (navArea) {
                navArea.addEventListener('mouseleave', function() {
                    // Use a slightly longer buffer when leaving the nav area
                    setTimeout(() => {
                        if (currentButton) {
                            currentButton.classList.remove('border-from-left', 'border-from-right');
                            currentButton = null;
                            previousButton = null;
                        }
                    }, bufferTime + 100);
                });
            }
        },
        
        /**
         * Set up scroll effects
         * Apply visual effects based on scroll position
         */
        setupScrollEffects: function() {
            const header = document.querySelector('.site-header');
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Header transparency effect
                if (scrollTop > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Store scroll position for direction detection
                lastScrollTop = scrollTop;
            });
        },
        
        /**
         * Check environment settings and apply appropriate modifications
         * Handle dark mode, reduced motion preferences, etc.
         */
        checkEnvironment: function() {
            // Check for reduced motion preference
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
                document.body.classList.add('reduced-motion');
            }
            
            // Check for dark mode preference (for potential light mode option)
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.classList.add(prefersDarkMode ? 'dark-theme' : 'light-theme');
        }
    };
    
    // Initialize the application
    SpectreApp.init();
});