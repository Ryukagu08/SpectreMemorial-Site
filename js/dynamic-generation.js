/**
 * dynamic-generation.js - Handles all dynamic generation stuff
 */

import artworks from './data/artworks.js';

document.addEventListener('DOMContentLoaded', async function () {

  async function loadArtworks() {

    const container = document.querySelector('.concept-promotional-grid');

    Object.keys(artworks).forEach(key => {
      const artwork = artworks[key]

      const div = document.createElement('div');
      div.className = 'artwork-item';

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = artwork.src;
      img.alt = artwork.alt;
      img.onclick = () => expandImage(img)

      div.appendChild(img);
      container.appendChild(div);
    })
  }

  async function loadFanArt() {
    // @TODO:
  }

  function expandImage(image) {
    const modal = document.getElementById("modal");
    const expandedImage = document.getElementById("expandedImage");

    expandedImage.src = image.src
    modal.style.display = "flex";

    modal.onclick = () => {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
    }
  }

  loadArtworks();
});