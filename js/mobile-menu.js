/**
 * mobile-menu.js - Standalone implementation for the mobile menu
 * This approach avoids potential conflicts with other scripts
 */
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu elements
    const toggleButton = document.querySelector('.nav-toggle-button');
    const tabNavigation = document.querySelector('.tab-navigation');
    const body = document.body;

    // Create fullscreen overlay for mobile menu
    const fullscreenMenu = document.createElement('div');
    fullscreenMenu.className = 'fullscreen-nav';
    document.body.appendChild(fullscreenMenu);

    // Clone navigation for mobile menu
    let mobileNav = null;

    // Function to set up the mobile menu
    function setupMobileMenu() {
        // Only set up mobile menu if we're in mobile view
        if (window.innerWidth > 767) {
            if (tabNavigation) tabNavigation.style.display = '';
            return;
        }

        // Create the mobile menu if it doesn't exist
        if (!mobileNav) {
            if (tabNavigation) {
                // Clone the navigation
                mobileNav = tabNavigation.cloneNode(true);
                fullscreenMenu.innerHTML = '';
                fullscreenMenu.appendChild(mobileNav);

                // Hide the original navigation
                tabNavigation.style.display = 'none';

                // Add dropdown toggles
                mobileNav.querySelectorAll('.has-subtabs .tab-button').forEach(button => {
                    // Create dropdown toggle
                    const dropdownToggle = document.createElement('span');
                    dropdownToggle.className = 'dropdown-toggle';
                    dropdownToggle.innerHTML = '▼';
                    button.appendChild(dropdownToggle);
                    button.classList.add('with-toggle-button');
                });

                // Attach event listeners for tab buttons
                mobileNav.querySelectorAll('.tab-button').forEach(button => {
                    button.addEventListener('click', function (e) {
                        // Skip if clicked on dropdown toggle
                        if (e.target.classList.contains('dropdown-toggle')) return;

                        // Get tab ID
                        const tabId = this.getAttribute('data-tab');

                        // Close the mobile menu
                        closeMobileMenu();

                        // Activate the tab
                        activateTab(tabId);
                    });
                });

                // Attach event listeners for dropdown toggles
                mobileNav.querySelectorAll('.dropdown-toggle').forEach(toggle => {
                    toggle.addEventListener('click', function (e) {
                        e.stopPropagation();

                        const parent = this.parentNode.parentNode;

                        // Close other open dropdowns
                        mobileNav.querySelectorAll('.has-subtabs').forEach(el => {
                            if (el !== parent) el.classList.remove('subtabs-visible');
                        });

                        // Toggle this dropdown
                        parent.classList.toggle('subtabs-visible');
                    });
                });

                // Attach event listeners for subtab buttons
                mobileNav.querySelectorAll('.subtab-button').forEach(button => {
                    button.addEventListener('click', function () {
                        const subtabId = this.getAttribute('data-tab');

                        // Close the mobile menu
                        closeMobileMenu();

                        // Activate the subtab
                        activateSubtab(subtabId);
                    });
                });
            }
        }
    }

    // Function to activate a tab
    function activateTab(tabId) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all tabs
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });

        // Activate the selected tab
        const tabContent = document.getElementById(tabId);
        if (tabContent) tabContent.classList.add('active');

        const tabButtons = document.querySelectorAll(`.tab-button[data-tab="${tabId}"]`);
        tabButtons.forEach(button => {
            button.classList.add('active');
        });

        // If tab has subtabs, activate default subtab
        const defaultSubtab = document.getElementById(`${tabId}-default`);
        if (defaultSubtab) {
            // Hide all subtab contents first
            document.querySelectorAll('.subtab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Activate the default subtab
            defaultSubtab.classList.add('active');
        }
    }

    // Function to activate a subtab
    function activateSubtab(subtabId) {
        // Get parent tab ID (everything before the first hyphen)
        const parentTabId = subtabId.split('-')[0];

        // Activate parent tab first
        activateTab(parentTabId);

        // Hide all subtab contents
        document.querySelectorAll('.subtab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Activate the selected subtab
        const subtabContent = document.getElementById(subtabId);
        if (subtabContent) subtabContent.classList.add('active');

        // Add active class to subtab button
        document.querySelectorAll('.subtab-button').forEach(button => {
            button.classList.remove('active');
        });

        const subtabButtons = document.querySelectorAll(`.subtab-button[data-tab="${subtabId}"]`);
        subtabButtons.forEach(button => {
            button.classList.add('active');
        });
    }

    // Function to open the mobile menu
    function openMobileMenu() {
        fullscreenMenu.classList.add('active');
        toggleButton.classList.add('active');
        body.classList.add('mobile-menu-active');
    }

    // Function to close the mobile menu
    function closeMobileMenu() {
        fullscreenMenu.classList.remove('active');
        toggleButton.classList.remove('active');
        body.classList.remove('mobile-menu-active');

        // Close any open dropdowns
        if (mobileNav) {
            mobileNav.querySelectorAll('.has-subtabs').forEach(el => {
                el.classList.remove('subtabs-visible');
            });
        }
    }

    // Add toggle button click handler
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            if (fullscreenMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close when clicking outside navigation
    fullscreenMenu.addEventListener('click', function (e) {
        if (e.target === fullscreenMenu) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767) {
            // On desktop, ensure original navigation is visible
            if (tabNavigation) tabNavigation.style.display = '';
            closeMobileMenu();
        } else {
            // On mobile, hide original navigation
            if (tabNavigation) tabNavigation.style.display = 'none';
            setupMobileMenu();
        }
    });

    // Initial setup
    setupMobileMenu();
});