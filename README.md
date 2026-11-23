# Lazer / Nextgen — Official Website

Static official site for Lazer, built with Vite and deployed on Vercel. No framework runtime dependency.

Writing a plugin? The reference is **[lazer.naominet.dev/docs](https://lazer.naominet.dev/docs)** — that page is built from this repository.

## Preview

```powershell
npm install
npm run dev
```

Production build:

```powershell
npm run build
npm run preview
```

## Languages

The site ships with four languages:

- 简体中文 (`zh-CN`, default)
- 繁體中文 (`zh-Hant`)
- 日本語 (`ja`)
- English (`en`)

Use the language menu in the header. The selection is saved in `localStorage`, reflected in `<html lang>` and the document title/description, and can be shared with a query parameter:

```text
/?lang=zh-Hant
/?lang=ja
/?lang=en
```

All translations live in `assets/js/i18n.js`. Chinese source strings stay in `index.html`, and the runtime layer swaps them using the dictionaries in that file.

## Community

Join the QQ group **Take lazer** (群号 `1137280545`) via [点击链接加入群聊【Take lazer】](https://qm.qq.com/q/FR8H7OzrCQ).

## Plugin market

`/plugin` is the plugin marketplace page. Lazer clients read `/plugin/plugins.json` as the market manifest; the same manifest powers the page's search, type filters, and plugin cards. Listings are PR-based — open-source plugins must include a public repository link, while closed-source plugins must submit a PR for every release. See [`plugin/README.md`](plugin/README.md) for the listing rules and field reference; the plugin contract itself is documented at [`/docs`](https://lazer.naominet.dev/docs).

## Plugin developer documentation

`/docs` — live at **[lazer.naominet.dev/docs](https://lazer.naominet.dev/docs)** — is the Lua plugin development reference: ZIP layout and manifest fields, the `call()` contract, the full music-provider operation list, the `host.*` API, the declarative UI surface, the permission model, and the marketplace release flow.

```text
docs/index.html        # /docs page (cleanUrls)
assets/css/docs.css    # docs-only layout: sticky table of contents, tables, code blocks
assets/js/docs.js      # scroll position, table-of-contents filter, copy buttons
```

`vite.config.js` lists `docs/index.html` as a build input, so the page is emitted as `dist/docs/index.html`. Vercel's `cleanUrls` then serves it at `/docs` and `/docs/` — the same rule that makes `plugin.html` the `/plugin` page. The page is Chinese-only on purpose: it documents a Chinese-first client and every identifier, field name, and payload in it is language-neutral.

`npm run dev` keeps the same URLs. Two settings in `vite.config.js` do that, and both exist because of how the dev server differs from Vercel:

- `appType: 'mpa'` — the site is a set of static pages, so an unknown path should 404 instead of silently rendering `index.html` (the default SPA fallback is what made `/docs` show the homepage).
- the `cleanDocsUrl` plugin — Vite's HTML fallback resolves `/plugin` to `plugin.html` on its own, but it cannot resolve `/docs` to a directory index, so that path is rewritten to `/docs/index.html` before the fallbacks run.

The sidebar links, the `#anchor` ids, and the section list are hand-maintained. Three details are easy to break when editing:

- Every `<section class="docs-section" id="…">` needs a matching entry in `<nav class="docs-nav">`; a link to a missing id silently does nothing.
- Copy buttons are injected from `.code-block[data-lang]` at runtime, so a new code block only needs `<div class="code-block" data-lang="lua"><pre><code>…</code></pre></div>`.
- Literal `<`, `>`, and `&` inside `<pre>` must be escaped (`&lt;`, `&gt;`, `&amp;`). Vite's HTML parser fails the build with `invalid-first-character-of-tag-name` otherwise.

## Vercel deployment

`package.json` pins Vite as a dev dependency, and `vercel.json` sets the build command to `npm run build` with `dist` as the output directory. This fixes `sh: vite: command not found` during `vercel build`: the previous setup had a Vite build command but no local Vite binary to run it.

`Previous build caches not available` is informational — it only means the build started without a restored cache. The actual failure was the missing `vite` executable.

If the Vercel project was previously configured with Framework Preset `Vite`, keep Build Command as `npm run build` and Output Directory as `dist`.

## Design constraints

- Responsive layout: a `1240px` desktop content column; tablet and phone layouts reflow at `1180px`, `900px`, and `640px`.
- Cassette-case visual language: liner-note indexing, tracklist rows, J-card labels, and A/B side naming.
- Square UI geometry by default. The only rounded forms are the brand mark and status dots.
- Long-form content is the visual subject; there is no raster hero artwork, product screenshot gallery, floating card, or scroll-triggered effect.
- Motion: UI transitions use short hover/focus states. The full-bleed hero background combines spectral drift, traveling highlights, chrome glints, and a glass-case sheen; all decorative animation stops when reduced motion is requested.
- Palette: warm paper, near-black surfaces, and Apple Music-derived signal red. No blue-purple theme.
- Typography: locally subset MiSans in WOFF2 for consistent Chinese/Latin rendering.

## Hero artwork

The hero is a full-bleed animated CD refraction background built from inline SVG/CSS: a metallic U-frame, vertical rails, segmented silver panels, spectral arcs and a translucent disc case. It extends to the viewport edges without a framed card and uses no raster base image, JavaScript, or external rendering dependency.

The artwork lives in the `<aside class="hero-art hero-art-cd" data-slot="hero-art">` block in `index.html`; its absolute background positioning, responsive composition, and animations are in `assets/css/site.css`. Traveling light pulses follow the spectrum and chrome, while a sheen crosses the glass case. SVG titles provide accessible descriptions, and all decorative animation respects `prefers-reduced-motion`.

## Structure

```text
index.html
plugin.html
docs/
  index.html
vite.config.js
package.json
vercel.json
plugin/
  README.md
public/
  plugin/
    plugins.json
assets/
  css/site.css
  css/plugin.css
  css/docs.css
  fonts/MiSans-{Regular,Semibold,Bold}.woff2
  images/favicon.png
  images/mark-ivory.png
  js/i18n.js
  js/plugin.js
  js/plugin-i18n.js
  js/docs.js
```

No raster CD artwork is shipped. All external links point to the public Lazer repository, releases, issues, license, and the community QQ group **Take lazer** (`1137280545`) — [点击链接加入群聊【Take lazer】](https://qm.qq.com/q/FR8H7OzrCQ).
