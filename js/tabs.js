/**
 * tabs.js - Tab navigation functionality
 * Handles tab switching and maintains tab state
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab ID from the data-tab attribute
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Save current tab to sessionStorage for persistence
            sessionStorage.setItem('activeTab', tabId);
            
            // Update URL with hash without causing page reload
            history.replaceState(null, null, `#${tabId}`);
            
            // Scroll to top smoothly when changing tabs
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Check for hash in URL or saved tab in sessionStorage
    const initializeTab = () => {
        let activeTab;
        
        // First check URL hash
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
        
        // Activate the appropriate tab if it exists
        if (document.getElementById(activeTab)) {
            tabButtons.forEach(btn => {
                if (btn.getAttribute('data-tab') === activeTab) {
                    btn.click();
                }
            });
        }
    };
    
    // Initialize the correct tab
    initializeTab();
    
    // Handle back/forward browser navigation
    window.addEventListener('popstate', initializeTab);
});