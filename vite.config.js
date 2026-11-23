import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Production runs on Vercel with `cleanUrls: true`, so `dist/docs/index.html`
// answers `/docs` and `/docs/` with no redirect. The dev server has no such
// rule: `/plugin` works because Vite's html fallback finds `plugin.html`, but
// `/docs` is a directory, so the SPA fallback answered it with the homepage.
// This rewrites the extension-less path before the fallbacks run, which keeps
// `npm run dev` and the deployed site on the same URL.
function cleanDocsUrl() {
  return {
    name: 'lazer-clean-docs-url',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [pathname, search] = req.url.split('?');
        if (pathname === '/docs' || pathname === '/docs/') {
          req.url = `/docs/index.html${search ? `?${search}` : ''}`;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  // The site is a set of static pages, not a single-page app. Without this the
  // dev server answers any unknown path with index.html, which hides typos and
  // made `/docs` look like the homepage.
  appType: 'mpa',
  plugins: [cleanDocsUrl()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        plugin: fileURLToPath(new URL('./plugin.html', import.meta.url)),
        // docs/index.html is emitted as dist/docs/index.html, which cleanUrls
        // serves at /docs and /docs/ without a redirect loop.
        docs: fileURLToPath(new URL('./docs/index.html', import.meta.url))
      }
    }
  }
});
