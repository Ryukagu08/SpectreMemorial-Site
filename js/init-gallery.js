/**
 * init-gallery.js - Ensures gallery pagination is properly initialized
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing gallery features");
    
    // Make sure the script runs after a short delay to ensure all elements are ready
    setTimeout(function() {
        // Check if the gallery is present
        const gallerySection = document.getElementById('gallery-artworks');
        if (gallerySection) {
            console.log("Gallery section found");
            
            // Find the artwork grid
            const artworksGrid = gallerySection.querySelector('.artworks-grid');
            if (artworksGrid) {
                console.log("Artwork grid found with items:", artworksGrid.querySelectorAll('.artwork-item').length);
                
                // If GalleryPagination exists, manually initialize it
                if (window.GalleryPagination) {
                    console.log("Manually initializing gallery pagination");
                    window.GalleryPagination.setupAllGalleries();
                }
            } else {
                console.log("Artwork grid not found in gallery section");
            }
        } else {
            console.log("Gallery section not found");
        }
    }, 500); // 500ms delay to ensure DOM is ready
});