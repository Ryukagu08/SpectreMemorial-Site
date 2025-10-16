# Deployment Guide

This guide explains how to deploy the Spectre Divide Memorial React application.

## Prerequisites

- Node.js v16 or higher
- npm or yarn package manager
- A hosting platform account (Vercel, Netlify, or GitHub Pages)

## Build for Production

Before deploying, build the application:

```bash
cd react-app
npm install
npm run build
```

This creates an optimized production build in the `dist` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is recommended for React applications due to its seamless integration and zero configuration.

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   cd react-app
   vercel
   ```

3. **Or Deploy via Git**:
   - Push your code to GitHub
   - Import the repository in [Vercel Dashboard](https://vercel.com/dashboard)
   - Set the root directory to `react-app`
   - Deploy!

Vercel will automatically detect the Vite configuration and build the app.

### Option 2: Netlify

Netlify is another excellent option with great performance.

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   cd react-app
   netlify deploy --prod
   ```

3. **Or Deploy via Git**:
   - Push your code to GitHub
   - Import the repository in [Netlify Dashboard](https://app.netlify.com/)
   - Set the base directory to `react-app`
   - Set build command to `npm run build`
   - Set publish directory to `dist`
   - Deploy!

The `netlify.toml` file in the project configures the deployment automatically.

### Option 3: GitHub Pages

For GitHub Pages deployment:

1. **Install gh-pages**:
   ```bash
   cd react-app
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add to the scripts section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**:
   Add the base URL:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository Settings > Pages
   - Select `gh-pages` branch as source
   - Save

### Option 4: Custom Server

If deploying to a custom server:

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure your web server** to:
   - Serve files from the `dist` directory
   - Redirect all routes to `index.html` (for client-side routing)

**Example Nginx configuration**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Example Apache .htaccess**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Environment Variables

If you need environment variables:

1. Create a `.env` file in `react-app`:
   ```
   VITE_API_URL=https://api.example.com
   ```

2. Access in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. Configure in your deployment platform's environment variables section.

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable Gzip/Brotli compression** on your hosting platform
2. **Configure CDN** for static assets
3. **Enable HTTP/2** for better performance
4. **Set cache headers** for static assets

## Troubleshooting

### Blank page after deployment

- Ensure the base URL in `vite.config.js` is correct
- Check browser console for errors
- Verify all assets are loading correctly

### 404 errors on routes

- Ensure your hosting platform redirects all routes to `index.html`
- Check the deployment configuration files (`netlify.toml`, `vercel.json`)

### Assets not loading

- Verify the base URL configuration
- Check that assets were included in the build
- Inspect network tab in browser DevTools

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test navigation between pages
- [ ] Check that all images and assets load
- [ ] Test on mobile devices
- [ ] Verify meta tags and SEO elements
- [ ] Test social media sharing (og:image, etc.)
- [ ] Check performance with Lighthouse
- [ ] Verify analytics (if configured)

## Monitoring

Consider setting up:

- **Analytics**: Google Analytics, Plausible, or similar
- **Error tracking**: Sentry or similar service
- **Performance monitoring**: Web Vitals tracking
- **Uptime monitoring**: UptimeRobot or similar

## Continuous Deployment

For automatic deployments:

1. Connect your repository to Vercel/Netlify
2. Configure to deploy from the `main` branch
3. Every push to `main` will trigger a new deployment

## Support

For deployment issues:
- Check the hosting platform documentation
- Review build logs for errors
- Ensure all dependencies are installed
- Test the build locally first with `npm run preview`
