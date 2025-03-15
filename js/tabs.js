/**
 * tabs.js - Tab navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab elements
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const subtabButtons = document.querySelectorAll('.subtab-button');
    
    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab ID from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Reset subtabs - hide all subtab content
            resetSubtabs();
            
            // Set new active tab
            this.classList.add('active');
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('active');
            
            // If it's the archive tab, activate the default subtab
            if (tabId === 'archive') {
                const defaultSubtab = document.getElementById('archive-default');
                if (defaultSubtab) {
                    defaultSubtab.classList.add('active');
                }
            }
            
            // Save current tab to session storage
            sessionStorage.setItem('activeTab', tabId);
            
            // Update URL without page reload
            updateURL(tabId);
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Close any open subtab menus on mobile
            document.querySelectorAll('.has-subtabs').forEach(el => {
                el.classList.remove('subtabs-visible');
            });
        });
    });
    
    // Handle subtab buttons
    subtabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the subtab ID
            const subtabId = this.getAttribute('data-tab');
            
            // First, ensure we're on the archive tab
            const currentActiveTab = document.querySelector('.tab-button.active');
            const archiveTab = document.querySelector('.tab-button[data-tab="archive"]');
            
            // If we're not on the archive tab, activate it first
            if (currentActiveTab.getAttribute('data-tab') !== 'archive') {
                // Activate the archive tab programmatically
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                archiveTab.classList.add('active');
                const archiveContent = document.getElementById('archive');
                archiveContent.classList.add('active');
                
                // Save archive as active tab
                sessionStorage.setItem('activeTab', 'archive');
            }
            
            // Now handle the subtab
            resetSubtabs();
            
            // Set new active subtab
            button.classList.add('active');
            const subtabContent = document.getElementById(subtabId);
            subtabContent.classList.add('active');
            
            // Save current subtab to session storage
            sessionStorage.setItem('activeSubtab', subtabId);
            
            // Update URL - append the subtab to the URL
            updateURL('archive', subtabId);
            
            // Close the subtab menu if on mobile
            document.querySelectorAll('.has-subtabs').forEach(el => {
                el.classList.remove('subtabs-visible');
            });
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile-specific behavior for subtabs
    if (window.innerWidth <= 767) {
        const archiveTab = document.querySelector('.has-subtabs .tab-button');
        archiveTab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the subtabs menu
            const parent = this.parentNode;
            parent.classList.toggle('subtabs-visible');
            
            // If we're showing subtabs, prevent the default tab behavior
            if (parent.classList.contains('subtabs-visible')) {
                return false;
            } else {
                // Otherwise, continue with normal tab behavior by manually clicking again
                setTimeout(() => {
                    this.click();
                }, 10);
            }
        });
        
        // Close subtabs when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.has-subtabs')) {
                document.querySelectorAll('.has-subtabs').forEach(el => {
                    el.classList.remove('subtabs-visible');
                });
            }
        });
    }
    
    // Reset all subtabs
    function resetSubtabs() {
        document.querySelectorAll('.subtab-content').forEach(subtab => {
            subtab.classList.remove('active');
        });
        
        subtabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    // Update URL based on active tab and optionally subtab
    function updateURL(tabId, subtabId) {
        let newURL = `#${tabId}`;
        
        if (subtabId) {
            // Only add the subtab to URL if it's not the default
            if (subtabId !== 'archive-default') {
                newURL += `-${subtabId.replace('archive-', '')}`;
            }
        }
        
        history.replaceState(null, null, newURL);
    }
    
    // Get active tab from URL or storage
    const initializeNavigation = () => {
        let activeTab, activeSubtab;
        
        // Check URL hash first
        if (window.location.hash) {
            const hashParts = window.location.hash.substring(1).split('-');
            activeTab = hashParts[0];
            
            // Check if there's a subtab in the URL
            if (hashParts.length > 1 && activeTab === 'archive') {
                // Reconstruct subtab ID
                activeSubtab = `archive-${hashParts[1]}`;
            }
        } 
        // Then check sessionStorage
        else if (sessionStorage.getItem('activeTab')) {
            activeTab = sessionStorage.getItem('activeTab');
            
            if (activeTab === 'archive' && sessionStorage.getItem('activeSubtab')) {
                activeSubtab = sessionStorage.getItem('activeSubtab');
            }
        }
        // Default to home tab
        else {
            activeTab = 'home';
        }
        
        // Activate tab if it exists
        activateTab(activeTab, activeSubtab);
    };
    
    // Activate a specific tab and optionally subtab
    function activateTab(tabId, subtabId) {
        if (document.getElementById(tabId)) {
            // Activate main tab
            tabButtons.forEach(btn => {
                if (btn.getAttribute('data-tab') === tabId) {
                    btn.click();
                }
            });
            
            // If we have a subtab and the active tab is archive, activate subtab
            if (subtabId && tabId === 'archive') {
                setTimeout(() => {
                    subtabButtons.forEach(btn => {
                        if (btn.getAttribute('data-tab') === subtabId) {
                            btn.click();
                        }
                    });
                }, 100);
            }
        }
    }
    
    // Initialize tabs on page load
    initializeNavigation();
    
    // Handle browser navigation
    window.addEventListener('popstate', initializeNavigation);
});