# Spectre Divide Memorial - React Version

This is the React-based version of the Spectre Divide Memorial website, migrated from the original vanilla JavaScript implementation.

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing for navigation
- **Vite** - Fast build tool and development server
- **CSS** - Original stylesheets preserved and organized

## Features

- ✅ Responsive navigation with mobile support
- ✅ Multiple pages: Home, Archive (Maps, Sponsors, Weapons), Timeline, Community, Gallery
- ✅ Interactive maps showcase
- ✅ Detailed sponsor abilities display
- ✅ Comprehensive weapons database with stats
- ✅ Community stories and testimonials
- ✅ Art and fan art galleries
- ✅ Smooth page transitions and routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the react-app directory:
   ```bash
   cd react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
react-app/
├── public/              # Static assets (images, videos, fonts)
│   ├── assets/         # Game assets, artwork, maps, etc.
│   └── fonts/          # Custom fonts
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── WeaponCard.jsx
│   ├── data/           # Data files for content
│   │   ├── artworks.js
│   │   ├── mapsData.js
│   │   ├── sponsorsData.js
│   │   └── weaponsData.js
│   ├── pages/          # Page components
│   │   ├── HomePage.jsx
│   │   ├── ArchivePage.jsx
│   │   ├── TimelinePage.jsx
│   │   ├── CommunityPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── archive/
│   │   ├── community/
│   │   └── gallery/
│   ├── styles/         # CSS files (preserved from original)
│   ├── App.jsx         # Main App component with routing
│   └── main.jsx        # Entry point
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```

## Key Improvements

### Code Quality
- Modern React patterns with hooks (useState, useEffect)
- Component-based architecture for better maintainability
- Separation of concerns (data, components, pages)
- Clean JSX instead of DOM manipulation

### Performance
- React's virtual DOM for efficient updates
- Lazy loading of images preserved
- Optimized routing with React Router
- Vite's fast HMR (Hot Module Replacement)

### Developer Experience
- TypeScript-ready structure
- Clear component hierarchy
- Easy to extend and modify
- Better debugging with React DevTools

## Migration Notes

### What was preserved:
- All original CSS styles
- All assets (images, videos, fonts)
- Visual design and layout
- User experience and interactions
- Data structures for maps, sponsors, weapons

### What was improved:
- Modern React component structure
- Client-side routing instead of tab switching
- Better state management
- Cleaner code organization
- Easier to maintain and extend

## Contributing

Contributions are welcome! Please see the main repository's [CONTRIBUTING.md](../docs/SETUP.md) for guidelines.

## License

This is a fan-made memorial site dedicated to Spectre Divide. Not affiliated with the original game developers.

## Acknowledgments

- Original Spectre Divide team at Mountaintop Studios
- The amazing Spectre Divide community
- All contributors to the memorial project
