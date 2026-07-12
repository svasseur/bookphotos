# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

This is Sébastien's personal photography portfolio site — an artistic showcase of his photos, not a generic starter. Key intent:

- **Artistic presentation**: photos should be presented with care — transitions/animations between photos, not a plain grid dump.
- **Black background**: the site's visual theme is a black background throughout (typical for photo portfolios — makes photos stand out).
- **Chapters/sections**: the site is organized into chapters (e.g. "Noir et Blanc", "Paris", ...), each holding its own set of photos. Adding a new chapter should be simple — favor an Astro content collection (one entry per chapter, with its photo list) over hand-wiring new pages/components per chapter.
- **Simple main navigation**: the top-level menu should stay minimal — just the list of chapters, no deep nesting.
- **Deployment**: the repo is on GitHub; every push builds and deploys to Cloudflare, served at https://bookphotos.sebastien-vasseur.workers.dev. As of now there's no `wrangler.toml`/Cloudflare adapter or GitHub Actions workflow in the repo — the Cloudflare↔GitHub link is presumably configured on the Cloudflare side. If asked to touch deployment, check the Cloudflare dashboard config before assuming a missing local config is broken.

## Project status

This is still close to the freshly scaffolded Astro `basics` starter — the chapters/photo-gallery architecture above is the target, not yet built:

- `src/pages/index.astro` — the only route, renders `Layout` + `Welcome`
- `src/layouts/Layout.astro` — base HTML shell (doctype, head, global margin/height reset)
- `src/components/Welcome.astro` — placeholder starter content, to be replaced
- `src/assets/` — static assets imported by components
- `public/` — static assets served as-is (e.g. `favicon.svg`)

There is no test runner, linter, or CI configured. TypeScript strict mode is enabled via `tsconfig.json` (extends `astro/tsconfigs/strict`); `astro check` is the available type-check command.

## Commands

- `npm run dev` — start the dev server at `localhost:4321`
- `npm run build` — build the production site to `./dist/`
- `npm run preview` — preview the production build locally
- `npm run astro -- check` — type-check `.astro` files
- `npm run astro -- <cmd>` — run any other Astro CLI command (e.g. `add`, `sync`)

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
