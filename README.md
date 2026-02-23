# Joyce Campaign

Campaign website for Joyce Crosswhite, built as a single-page React app with Vite and Tailwind CSS.

**Status:** Active
**Live:** Not deployed

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + Vite 7 |
| Language | JavaScript (JSX) |
| Runtime | Node 22 |
| Styling | Tailwind CSS v4 |
| Linter | ESLint 9 (flat config) |
| Test Runner | None |
| Package Manager | npm |
| Deploy | N/A |

## Getting Started

```bash
npm install
npm run dev
```

Requires Node 22+.

## Scripts

| Script | Command | What it does |
|--------|---------|--------------|
| dev | `npm run dev` | Start Vite dev server with HMR |
| build | `npm run build` | Production build to `dist/` |
| lint | `npm run lint` | Run ESLint across all JS/JSX files |
| preview | `npm run preview` | Preview production build locally |

## Project Structure

```
src/
  App.jsx          # Main single-page campaign layout
  main.jsx         # React DOM entry point
  index.css        # Tailwind CSS import
  assets/          # Static assets (SVGs, images)
public/
  vite.svg         # Favicon
index.html         # HTML shell
vite.config.js     # Vite + React + Tailwind plugin config
eslint.config.js   # ESLint flat config with React rules
```

## Deployment

No deployment pipeline configured yet. Run `npm run build` to produce a static `dist/` directory that can be hosted on any static file server (Vercel, Netlify, Cloudflare Pages, etc.).

## Contributing

- Lint: `npm run lint`
- Test: N/A (no test runner configured)
- All PRs require CI to pass
- Squash merge only
