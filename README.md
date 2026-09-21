# alexcasalboni.com

Personal website for Alex Casalboni. Built with [Astro](https://astro.build/), built statically, no server at runtime.

## Requirements

Node.js `>= 22.12.0` (required by Astro 7). CI runs Node 24.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:4321` by default. Use `npm run dev -- --host --port 4321` if you need to bind to all interfaces inside a container.

## Building for production

```bash
npm run build
```

The static output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Checks

```bash
npm run check   # Type and Astro template checks
npm run lint    # ESLint over .js, .ts, and .astro files
```

CI (`.github/workflows/ci.yml`) runs `check` and `build` on every pull request and on pushes to `master`. It does not run `lint`.

## Project structure

- `src/pages` — one file per route: homepage, writing, talks, contact.
- `src/components` — reusable UI components.
- `src/layouts/BaseLayout.astro` — HTML shell, meta tags, Open Graph, and JSON-LD structured data.
- `src/data/content.ts` — all site copy that isn't in a template: social links, highlights, writing, talks, and calls to action.
- `public` — static assets: headshot, favicon, `robots.txt`, and a hand-maintained `sitemap.xml`.

## Editing content

Most content changes are edits to `src/data/content.ts` rather than to templates. Adding a page means adding a file to `src/pages` **and** a `<url>` entry to `public/sitemap.xml`, which is not generated.
