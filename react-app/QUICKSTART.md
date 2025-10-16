# Quick Start Guide

Get the Spectre Divide Memorial React app running in minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** v16 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**

Check your versions:
```bash
node --version  # Should be v16 or higher
npm --version   # Should be 7 or higher
```

## Installation

1. **Navigate to the project folder**
   ```bash
   cd react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages (~152 packages).

## Running the App

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

- Changes auto-refresh in the browser
- Console shows any errors
- Fast Hot Module Replacement (HMR)

### Production Preview

Build and preview the production version:

```bash
npm run build
npm run preview
```

This creates an optimized build and serves it locally.

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |

## File Structure Overview

```
react-app/
├── public/          # Static files (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Page components
│   ├── data/        # Data files
│   ├── styles/      # CSS files
│   └── App.jsx      # Main app component
├── index.html       # HTML template
└── package.json     # Dependencies and scripts
```

## Making Changes

### Add a New Page

1. Create a new file in `src/pages/`:
   ```jsx
   // src/pages/NewPage.jsx
   const NewPage = () => {
     return <div>My New Page</div>;
   };
   export default NewPage;
   ```

2. Add the route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   
   // In the Routes section:
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link in `src/components/Header.jsx`

### Modify Data

Edit the data files in `src/data/`:
- `weaponsData.js` - Weapon information
- `sponsorsData.js` - Sponsor details
- `mapsData.js` - Map information
- `artworks.js` - Artwork metadata

### Update Styles

Modify CSS files in `src/styles/`:
- `variables.css` - Colors, fonts, etc.
- `layout.css` - Layout structure
- `components.css` - Component styles
- And more...

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
# Kill the process using port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Or use a different port:
npm run dev -- --port 3000
```

### Dependencies Issues

If you get dependency errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

If build fails:
1. Check for syntax errors in your code
2. Ensure all imports are correct
3. Run `npm run dev` first to see detailed errors

## Common Tasks

### Adding an Image

1. Place image in `public/assets/`
2. Reference in component:
   ```jsx
   <img src="/assets/my-image.jpg" alt="Description" />
   ```

### Creating a Component

```jsx
// src/components/MyComponent.jsx
const MyComponent = ({ title, content }) => {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default MyComponent;
```

### Using the Component

```jsx
import MyComponent from './components/MyComponent';

function App() {
  return <MyComponent title="Hello" content="World" />;
}
```

## Next Steps

- ✅ Run `npm run dev` to start developing
- 📖 Read [README.md](./README.md) for detailed documentation
- 🚀 Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
- 📝 See [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) for migration details

## Getting Help

- Check the browser console for errors
- Read error messages carefully
- Review React documentation: https://react.dev
- Check Vite documentation: https://vitejs.dev

## Quick Tips

1. **Save Often** - Changes auto-refresh
2. **Check Console** - Errors show in browser console
3. **Component Structure** - Keep components small and focused
4. **Use Props** - Pass data between components
5. **State Management** - Use `useState` for interactive features

## Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to:
- Vercel (Recommended)
- Netlify
- GitHub Pages
- Custom Server

---

**Happy Coding! 🚀**

For detailed information, see the [full README](./README.md).
