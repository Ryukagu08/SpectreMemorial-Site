/**
 * tabs.js - Tab navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab elements
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const subtabButtons = document.querySelectorAll('.subtab-button');
    const hasSubtabsElements = document.querySelectorAll('.has-subtabs');
    
    // Track active tabs
    let activeMainTab = null;
    
    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip for cloned buttons in the fullscreen navigation
            if (e.target.closest('.fullscreen-nav')) return;
            
            e.preventDefault();
            
            // Get the tab ID from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // If on mobile and button has subtabs, we'll handle the click differently
            if (window.innerWidth <= 767 && this.parentNode.classList.contains('has-subtabs')) {
                return; // Mobile behavior is managed separately
            }
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Reset all subtabs - hide all subtab content
            resetAllSubtabs();
            
            // Set new active tab
            this.classList.add('active');
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('active');
            activeMainTab = tabId;
            
            // If it has subtabs, activate the default subtab
            if (this.parentNode.classList.contains('has-subtabs')) {
                const defaultSubtab = document.getElementById(`${tabId}-default`);
                if (defaultSubtab) {
                    defaultSubtab.classList.add('active');
                }
            }
            
            // Save current tab to session storage
            sessionStorage.setItem('activeTab', tabId);
            sessionStorage.removeItem('activeSubtab'); // Clear subtab when changing tabs
            
            // Update URL without page reload
            updateURL(tabId);
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Close any open subtab menus on mobile
            hasSubtabsElements.forEach(el => {
                el.classList.remove('subtabs-visible');
            });
        });
    });
    
    // Handle subtab buttons
    subtabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip for cloned buttons in the fullscreen navigation
            if (e.target.closest('.fullscreen-nav')) return;
            
            e.preventDefault();
            
            // Get the subtab ID and parent tab ID
            const subtabId = this.getAttribute('data-tab');
            const parentTabId = subtabId.split('-')[0]; // First part before hyphen is parent tab ID
            
            // First, ensure we're on the correct main tab
            const currentActiveTab = document.querySelector('.tab-button.active');
            const parentTab = document.querySelector(`.tab-button[data-tab="${parentTabId}"]`);
            
            // If we're not on the correct parent tab, activate it first
            if (currentActiveTab.getAttribute('data-tab') !== parentTabId) {
                // Activate the parent tab programmatically
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                parentTab.classList.add('active');
                const parentContent = document.getElementById(parentTabId);
                parentContent.classList.add('active');
                activeMainTab = parentTabId;
                
                // Save as active tab
                sessionStorage.setItem('activeTab', parentTabId);
            }
            
            // Now handle the subtab - first reset all subtabs within this parent
            resetSubtabsForParent(parentTabId);
            
            // Set new active subtab
            button.classList.add('active');
            const subtabContent = document.getElementById(subtabId);
            subtabContent.classList.add('active');
            
            // Save current subtab to session storage
            sessionStorage.setItem('activeSubtab', subtabId);
            
            // Update URL - append the subtab to the URL
            updateURL(parentTabId, subtabId);
            
            // Close the subtab menu if on mobile
            hasSubtabsElements.forEach(el => {
                el.classList.remove('subtabs-visible');
            });
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Reset all subtabs across all parent tabs
    function resetAllSubtabs() {
        document.querySelectorAll('.subtab-content').forEach(subtab => {
            subtab.classList.remove('active');
        });
        
        subtabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    // Reset subtabs for a specific parent tab
    function resetSubtabsForParent(parentTabId) {
        document.querySelectorAll(`.subtab-content[id^="${parentTabId}-"]`).forEach(subtab => {
            subtab.classList.remove('active');
        });
        
        document.querySelectorAll(`.subtab-button[data-tab^="${parentTabId}-"]`).forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    // Update URL based on active tab and optionally subtab
    function updateURL(tabId, subtabId) {
        let newURL = `#${tabId}`;
        
        if (subtabId) {
            // Only add the subtab to URL if it's not the default
            if (subtabId !== `${tabId}-default`) {
                const subtabSuffix = subtabId.replace(`${tabId}-`, '');
                newURL += `-${subtabSuffix}`;
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
            if (hashParts.length > 1) {
                // Reconstruct subtab ID
                activeSubtab = `${activeTab}-${hashParts[1]}`;
            }
        } 
        // Then check sessionStorage
        else if (sessionStorage.getItem('activeTab')) {
            activeTab = sessionStorage.getItem('activeTab');
            
            if (sessionStorage.getItem('activeSubtab')) {
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
                    // We need to trigger click event for normal activation
                    btn.click();
                }
            });
            
            // If we have a subtab, activate it after a short delay 
            // to ensure the parent tab is fully activated
            if (subtabId && document.getElementById(subtabId)) {
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