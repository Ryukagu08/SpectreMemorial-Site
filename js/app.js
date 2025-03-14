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
         * Set up tab button hover effects
         * Creates directional bottom borders based on hover sequence
         */
        setupButtonEffects: function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            let previousButton = null;
            
            // Handle mouse enter for each button
            tabButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    // Skip animation if hovering the same button as before
                    if (previousButton === this) {
                        return;
                    }
                    
                    // Remove all directional classes from this button
                    this.classList.remove('border-from-left', 'border-from-right');
                    
                    // Determine direction based on previous button
                    if (previousButton) {
                        const prevIndex = Array.from(tabButtons).indexOf(previousButton);
                        const currentIndex = Array.from(tabButtons).indexOf(this);
                        
                        if (prevIndex < currentIndex) {
                            // Coming from left to right
                            this.classList.add('border-from-left');
                        } else {
                            // Coming from right to left
                            this.classList.add('border-from-right');
                        }
                    } else {
                        // First hover, default to from-left
                        this.classList.add('border-from-left');
                    }
                    
                    previousButton = this;
                });
            });
        },
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