/**
 * tabs.js - Tab navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab elements
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab ID from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Set new active tab
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Save current tab to session storage
            sessionStorage.setItem('activeTab', tabId);
            
            // Update URL without page reload
            history.replaceState(null, null, `#${tabId}`);
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Get active tab from URL or storage
    const initializeTab = () => {
        let activeTab;
        
        // Check URL hash first
        if (window.location.hash) {
            activeTab = window.location.hash.substring(1);
        } 
        // Then check sessionStorage
        else if (sessionStorage.getItem('activeTab')) {
            activeTab = sessionStorage.getItem('activeTab');
        }
        // Default to home tab
        else {
            activeTab = 'home';
        }
        
        // Activate tab if it exists
        if (document.getElementById(activeTab)) {
            tabButtons.forEach(btn => {
                if (btn.getAttribute('data-tab') === activeTab) {
                    btn.click();
                }
            });
        }
    };
    
    // Initialize tab on page load
    initializeTab();
    
    // Handle browser navigation
    window.addEventListener('popstate', initializeTab);
});