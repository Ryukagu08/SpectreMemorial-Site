/**
 * app.js - Main application functionality
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
            this.setupGalleryNavigation();
            this.setupMobileNav();
        },
        
        /**
         * Set up animations with intersection observer
         */
        setupAnimations: function() {
            const animatedElements = document.querySelectorAll(
                '.feature-grid, .timeline-item, .quote-card, .archive-item, .gallery-item'
            );
            
            if (!('IntersectionObserver' in window)) return;
            
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            animatedElements.forEach(element => {
                element.classList.add('will-animate');
                animationObserver.observe(element);
            });
        },
        
        /**
         * Set up lazy loading for images
         */
        setupImageLoader: function() {
            const images = document.querySelectorAll('img[data-src]');
            
            if (images.length === 0) return;
            
            if (!('IntersectionObserver' in window)) {
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
            
            images.forEach(image => imageObserver.observe(image));
        },
        
        /**
         * Set up tab button rail effect with cursor following
         */
        setupButtonRailEffect: function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const navContainer = document.querySelector('.tab-navigation');
            
            // Create rail indicator element
            const railIndicator = document.createElement('span');
            railIndicator.classList.add('button-rail-indicator');
            navContainer.appendChild(railIndicator);
            
            // Hide rail initially
            railIndicator.style.opacity = '0';
            
            // Track currently hovered button
            let currentButton = null;
            
            // Handle button hover events
            tabButtons.forEach(button => {
                button.addEventListener('mouseenter', function(e) {
                    currentButton = this;
                    
                    // Position rail under current button
                    const buttonRect = this.getBoundingClientRect();
                    const navRect = navContainer.getBoundingClientRect();
                    const relativeLeft = buttonRect.left - navRect.left;
                    
                    railIndicator.style.left = `${relativeLeft}px`;
                    railIndicator.style.width = `${buttonRect.width}px`;
                    railIndicator.style.opacity = '1';
                    
                    updateRailHighlight(e);
                });
                
                button.addEventListener('mousemove', updateRailHighlight);
                
                button.addEventListener('mouseleave', function() {
                    currentButton = null;
                    railIndicator.style.opacity = '0';
                });
            });
            
            // Update highlight position based on cursor
            function updateRailHighlight(e) {
                if (!currentButton) return;
                
                const buttonRect = currentButton.getBoundingClientRect();
                const highlightWidth = Math.min(buttonRect.width * 0.3, 40);
                
                // Calculate position ratio (0 to 1)
                const xRatio = (e.clientX - buttonRect.left) / buttonRect.width;
                const clampedRatio = Math.max(0, Math.min(1, xRatio));
                
                // Calculate highlight position
                const maxLeft = buttonRect.width - highlightWidth;
                const highlightLeft = clampedRatio * maxLeft;
                
                // Update CSS variables
                railIndicator.style.setProperty('--highlight-left', `${highlightLeft}px`);
                railIndicator.style.setProperty('--highlight-width', `${highlightWidth}px`);
            }
        },
        
        /**
         * Setup header scroll effects
         */
        setupScrollEffects: function() {
            const header = document.querySelector('.site-header');
            
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        },
        
        /**
         * Check user environment preferences
         */
        checkEnvironment: function() {
            // Check for reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.body.classList.add('reduced-motion');
            }
            
            // Check for dark/light mode preference
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.classList.add(prefersDarkMode ? 'dark-theme' : 'light-theme');
        },
        
        /**
         * Setup gallery navigation buttons
         */
        setupGalleryNavigation: function() {
            const galleryNavButtons = document.querySelectorAll('.gallery-nav-btn');
            
            galleryNavButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const subtabId = this.getAttribute('data-subtab');
                    
                    // Find the corresponding subtab button in the header navigation
                    const subtabButton = document.querySelector(`.subtab-button[data-tab="${subtabId}"]`);
                    
                    // Trigger a click on the subtab button to navigate to that tab
                    if (subtabButton) {
                        subtabButton.click();
                    }
                });
            });
        },

        /**
         * Setup mobile navigation collapsible functionality
         */
        setupMobileNav: function() {
            const toggleButton = document.querySelector('.nav-toggle-button');
            const tabNavigation = document.querySelector('.tab-navigation');
            
            if (!toggleButton || !tabNavigation) return;
            
            // Always set up the click handler for the toggle button
            toggleButton.addEventListener('click', function() {
                // Toggle active classes
                this.classList.toggle('active');
                tabNavigation.classList.toggle('expanded');
                
                // Accessibility
                const isExpanded = tabNavigation.classList.contains('expanded');
                this.setAttribute('aria-expanded', isExpanded);
                console.log('Toggle button clicked, expanded:', isExpanded); // Debug log
            });
            
            // Initialize the navigation state
            if (!tabNavigation.classList.contains('collapsible-nav-initialized')) {
                tabNavigation.classList.add('collapsible-nav-initialized');
                
                // Start with navigation collapsed on mobile
                if (window.innerWidth <= 767) {
                    tabNavigation.classList.remove('expanded');
                } else {
                    tabNavigation.classList.add('expanded');
                }
            }
            
            // Set up resize handler
            window.addEventListener('resize', function() {
                // Expand navigation on larger screens
                if (window.innerWidth > 767) {
                    tabNavigation.classList.add('expanded');
                } else if (!toggleButton.classList.contains('active')) {
                    // Only collapse on small screens if toggle is not active
                    tabNavigation.classList.remove('expanded');
                }
            });
            
            // Close mobile nav when clicking on a tab
            document.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', function() {
                    if (window.innerWidth <= 767) {
                        // Close the navigation
                        toggleButton.classList.remove('active');
                        tabNavigation.classList.remove('expanded');
                        toggleButton.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }
    };
    
    // Initialize the application
    SpectreApp.init();
});