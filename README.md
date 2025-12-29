# alexcasalboni.com

Modern personal website for Alex Casalboni, built with [Astro](https://astro.build/) and optimized for static deployment.

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

## Additional checks

```bash
npm run check   # Type and Astro template checks
```

## Project structure

- `src/pages` — Astro pages for the homepage, writing, talks, and contact.
- `src/components` — Reusable UI components.
- `src/data` — Centralized content for social links, writing, and talks.
- `public` — Static assets such as the placeholder avatar and favicon.
