/**
 * init-gallery.js - Ensures gallery pagination is properly initialized
 */

const debugMode = false;

document.addEventListener('DOMContentLoaded', function () {
    debug("Initializing gallery features");

    // Make sure the script runs after a short delay to ensure all elements are ready
    setTimeout(function () {
        // Check if the gallery is present
        const gallerySection = document.getElementById('gallery-artworks');
        if (gallerySection) {
            debug("Gallery section found");

            // Find the artwork grid
            const artworksGrid = gallerySection.querySelector('.artworks-grid');
            if (artworksGrid) {
                debug("Artwork grid found with items:", artworksGrid.querySelectorAll('.artwork-item').length);

                // If GalleryPagination exists, manually initialize it
                if (window.GalleryPagination) {
                    debug("Manually initializing gallery pagination");
                    window.GalleryPagination.setupAllGalleries();
                }
            } else {
                debug("Artwork grid not found in gallery section");
            }
        } else {
            debug("Gallery section not found");
        }
    }, 500); // 500ms delay to ensure DOM is ready
});

function debug(message) {
    if (debugMode) console.log(message);
}