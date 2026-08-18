# CAIRNOX

The public website for CAIRNOX, a founder-led high-performance coaching, performance-programme and consultancy brand.

## Current status

The approved public pages, responsive site shell, media, SEO foundation, Insights architecture and four contact journeys are implemented. The application exports as a static site and deploys to GitHub Pages.

**Production form delivery is intentionally not configured yet.** Forms demonstrate structure, accessibility and validation without sending or storing submissions externally.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- pnpm

No component library, animation framework, analytics SDK, CMS or form-delivery service is installed.

## Quick start

Prerequisites: Node.js 20.9 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Production verification:

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

`pnpm build` creates the deployable site in `out/`. The local production preview uses Python's built-in static server.

## Routes

Public pages:

- `/`
- `/base`
- `/elevate`
- `/apex`
- `/method`
- `/about`
- `/results`
- `/insights`

Conversion journeys:

- `/contact` — route selection and general enquiry
- `/contact/base` — BASE interest registration
- `/contact/elevate` — ELEVATE coaching application
- `/contact/apex` — APEX consultancy enquiry

Legal placeholders exist at `/privacy`, `/terms`, `/cookie-policy` and `/training-disclaimer`. They are intentionally noindex until approved legal copy is supplied.

## Project structure

```text
src/app/                 App Router pages, metadata, sitemap and robots
src/components/          Page, layout, form and design-system components
src/content/insights/    Typed local Insights content registry
src/lib/forms/           Validation and future provider architecture
public/brand/            Runtime logo asset
public/media/            Runtime images, video and poster assets
docs/                    Implementation, content, demo and publishing guides
```

## Media

Runtime assets required by the website are tracked under `public/`. Original reference media remains locally under `Media/` and is excluded from Git because it duplicates runtime assets and is not required to build the site. The master logo source and brand DOCX are also retained locally but excluded from source control; implementation references live in `docs/`.

## Forms

The GitHub Pages build uses shared browser-side validation, accessible inline errors and a honeypot. Valid submissions return a truthful unavailable notice and are not transmitted or stored.

The existing provider interfaces remain as architecture for a future server-backed integration. See [the forms and conversion guide](docs/cairnox-forms-and-conversion-guide.md).

## Insights

Insights uses a typed local content registry and future `/insights/[slug]` routes. Only articles marked `published` can appear in the listing, sitemap or production route generation. The launch library is intentionally empty; see [the Insights content guide](docs/cairnox-insights-content-guide.md).

## Environment variables

Copy `.env.example` to `.env.local` when local configuration is needed.

- `NEXT_PUBLIC_SITE_URL` — canonical public site URL; set to `https://cairnox.com/` for production.
- `NEXT_PUBLIC_BASE_PATH` — optional repository path prefix; empty for the root-domain deployment and local development.

No production form-provider credentials are defined because no provider has been approved.

## Project documentation

- [Site implementation brief](docs/cairnox-site-implementation-brief.md)
- [Media inventory](docs/cairnox-media-inventory.md)
- [Forms and conversion guide](docs/cairnox-forms-and-conversion-guide.md)
- [Insights content guide](docs/cairnox-insights-content-guide.md)
- [Demo guide](docs/cairnox-demo-guide.md)
- [GitHub publishing guide](docs/github-publish-guide.md)

## GitHub Pages deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`, build a static export and deploy the `out/` directory for `https://cairnox.com/`.

In the GitHub repository, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**, and **Custom domain** must be set to `cairnox.com`. Production form delivery, final legal copy and any optional analytics remain separate launch tasks.
