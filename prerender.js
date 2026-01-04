import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Routes to pre-render
const routesToPrerender = ['/', '/projects', '/work', '/education', '/resume'];

// Pre-render each route
(async () => {
  for (const url of routesToPrerender) {
    const rendered = render(url);
    
    // Debug: Check what we're getting from helmet
    console.log(`\nRendering ${url}:`)
    console.log('Head content length:', rendered.head?.length || 0);
    if (rendered.head) {
      console.log('First 200 chars of head:', rendered.head.substring(0, 200));
    }

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`;
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
})();
