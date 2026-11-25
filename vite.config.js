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

// VibeFriends 作品数据统计。The identifier below is a browser tag bound to the
// production origin (https://lazer.naominet.dev) by VibeFriends; it belongs in
// the <head> only and must never be sent to an admin API or reused as a query
// parameter.
//
// The site is an MPA — index.html, plugin.html and docs/index.html are separate
// documents with no shared template — so the tag is declared here once and
// injected into every page's <head> by Vite (`npm run dev` and `npm run build`
// both go through it). Pages that already carry the tag are left untouched, so
// the snippet can never end up on a page twice.
const VIBEFRIENDS = {
  src: 'https://vibefriends.com/telemetry/v1.js',
  productId: 'cmtvjjfho00010agm0ts8ykmy',
  authKey: 'vc_web_aoAweQl4sxMhazeZwn379AUS0zBO2fgytsFOSJ029GY'
};

function vibefriendsTelemetry() {
  return {
    name: 'vibefriends-telemetry',
    transformIndexHtml(html) {
      if (html.includes(VIBEFRIENDS.src)) return [];
      return [
        {
          tag: 'script',
          attrs: {
            defer: true,
            src: VIBEFRIENDS.src,
            'data-vc-product-id': VIBEFRIENDS.productId,
            'data-vc-auth-key': VIBEFRIENDS.authKey
          },
          injectTo: 'head'
        }
      ];
    }
  };
}

export default defineConfig({
  // The site is a set of static pages, not a single-page app. Without this the
  // dev server answers any unknown path with index.html, which hides typos and
  // made `/docs` look like the homepage.
  appType: 'mpa',
  plugins: [cleanDocsUrl(), vibefriendsTelemetry()],
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
