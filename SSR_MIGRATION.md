# SSR Migration Guide

## Overview

This portfolio has been converted from a client-side SPA (using HashRouter) to a server-side rendered (SSR) application using Vite SSR for better SEO and Google indexing.

## Architecture Changes

### Before

- **Client-only rendering** with `HashRouter`
- Routes like `/#/projects`, `/#/work`
- No pre-rendered HTML for search engines

### After

- **Server-side rendering** with `BrowserRouter`/`StaticRouter`
- Clean URLs like `/projects`, `/work`
- Pre-rendered HTML for all routes
- Better SEO and social media sharing

## Key Files

- **`src/entry-client.jsx`** - Client-side hydration entry point
- **`src/entry-server.jsx`** - Server-side rendering entry point
- **`server.js`** - Express server for development and production
- **`prerender.js`** - Static generation script for all routes
- **`index.html`** - Updated with SSR placeholders

## Available Scripts

### Development

```bash
pnpm dev
```

Runs the development server with SSR at http://localhost:5173

### Build for Production

```bash
pnpm build
```

Creates optimized client and server bundles in `dist/`

### Static Generation (Recommended)

```bash
pnpm generate
```

Pre-renders all routes as static HTML files - **best for deployment**

### Preview Production Build

```bash
pnpm preview
```

Tests the production build locally before deployment

## Deployment Options

### Option 1: Static Site (Recommended for Vercel/Netlify)

Use `pnpm generate` to create fully static HTML files. Deploy the `dist/client` folder.

**Vercel Deployment:**

- Build Command: `pnpm generate`
- Output Directory: `dist/client`
- No server needed, fully static

### Option 2: Node.js Server (For traditional hosting)

Use `pnpm build` and deploy with the server:

- Requires Node.js runtime
- Run `node server.js` in production
- Set `NODE_ENV=production`

## SEO Improvements

✅ **Pre-rendered HTML** - All pages have full HTML content for crawlers
✅ **Clean URLs** - No hash fragments (`/projects` instead of `/#/projects`)
✅ **Fast Initial Load** - HTML rendered on server, hydrated on client
✅ **Social Media** - Proper meta tags in rendered HTML

## Routes Pre-rendered

- `/` - About, Skills, Links
- `/projects` - Projects listing
- `/work` - Work experience
- `/education` - Education history
- `/resume` - Resume viewer

## Technical Details

- **React 19** with SSR support
- **React Router 7** with StaticRouter for SSR
- **Vite 6** with native SSR capabilities
- **Express** for development and production server
- **Theme persistence** with SSR-safe localStorage checks

## Migration Notes

### Changed Files

- `src/App.jsx` - Removed HashRouter, router moved to entry points
- `src/context/ThemeContext.jsx` - Added SSR-safe window checks
- `index.html` - Added SSR placeholders for content injection
- `vite.config.js` - Added SSR build configuration
- `package.json` - Updated scripts and dependencies

### New Files

- `src/entry-client.jsx` - Client hydration
- `src/entry-server.jsx` - Server rendering
- `server.js` - Express server
- `prerender.js` - Static generation script

### Dependencies Added

- `express` - Server framework
- `compression` - Response compression
- `sirv` - Static file serving
- `cross-env` - Cross-platform environment variables

## Testing

1. **Development**: `pnpm dev` - Check all routes work
2. **Build**: `pnpm generate` - Verify builds complete
3. **Preview**: `pnpm preview` - Test production build
4. **SEO**: View page source - Confirm HTML content is present

## Next Steps

1. **Add meta tags** per route for better SEO
2. **Create sitemap.xml** with all routes
3. **Add robots.txt** for crawler guidance
4. **Test with Google Search Console**
