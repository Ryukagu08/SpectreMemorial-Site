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
            this.setupButtonRailEffect();
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
         * Set up tab button rail effect
         * Creates a highlight that follows the cursor within each button
         */
        setupButtonRailEffect: function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const navContainer = document.querySelector('.tab-navigation');
            
            // Create rail indicator element
            const railIndicator = document.createElement('span');
            railIndicator.classList.add('button-rail-indicator');
            navContainer.appendChild(railIndicator);
            
            // Hide the rail initially
            railIndicator.style.opacity = '0';
            
            // Track which button we're currently hovering
            let currentButton = null;
            
            // Mouse enter event for each button
            tabButtons.forEach(button => {
                button.addEventListener('mouseenter', function(e) {
                    currentButton = this;
                    
                    // Position the rail indicator at the current button
                    const buttonRect = this.getBoundingClientRect();
                    const navRect = navContainer.getBoundingClientRect();
                    
                    // Calculate relative position to the navigation container
                    const relativeLeft = buttonRect.left - navRect.left;
                    
                    // Make rail visible and position it
                    railIndicator.style.left = `${relativeLeft}px`;
                    railIndicator.style.width = `${buttonRect.width}px`;
                    railIndicator.style.opacity = '1';
                    
                    // Initial position for the rail's highlight based on entry point
                    updateRailHighlight(e);
                });
                
                button.addEventListener('mousemove', updateRailHighlight);
                
                button.addEventListener('mouseleave', function() {
                    currentButton = null;
                    
                    // Fade out the rail when leaving a button
                    railIndicator.style.opacity = '0';
                });
            });
            
            // Handle rail highlight positioning based on mouse position
            function updateRailHighlight(e) {
                if (!currentButton) return;
                
                const buttonRect = currentButton.getBoundingClientRect();
                const highlightWidth = Math.min(buttonRect.width * 0.3, 40); // Rail highlight width (30% of button or max 40px)
                
                // Calculate the position within the button (0 to 1)
                const xRatio = (e.clientX - buttonRect.left) / buttonRect.width;
                
                // Clamp position within the button boundaries
                const clampedRatio = Math.max(0, Math.min(1, xRatio));
                
                // Calculate highlight position, accounting for its width
                const maxLeft = buttonRect.width - highlightWidth;
                const highlightLeft = clampedRatio * maxLeft;
                
                // Update the rail highlight position
                railIndicator.style.setProperty('--highlight-left', `${highlightLeft}px`);
                railIndicator.style.setProperty('--highlight-width', `${highlightWidth}px`);
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