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

      div.appendChild(img);
      container.appendChild(div);
    })
  }

  loadArtworks();
});