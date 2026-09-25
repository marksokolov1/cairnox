# CAIRNOX Insights Content Guide

Status: published editorial implementation reference

Content model: typed local TypeScript

Public library: two published cricket performance articles (25 September 2026)

## Purpose

INSIGHTS is the CAIRNOX editorial home for practical, evidence-aware thinking about cricket physical preparation, player development and performance systems. It should help cricket players understand the reasoning behind training and help coaches or performance professionals think more clearly about planning, workload, monitoring and delivery.

The publication is not an SEO content engine, news feed or substitute for academic research. Articles should begin with a useful performance question, add the context needed to interpret it and connect the discussion back to practice.

## Editorial categories

Use one of the categories defined in `src/types/insight-article.ts`:

- Physical Preparation — cricket strength, power and conditioning
- Athlete Development — long-term cricket athletic development
- Performance Planning — in-season and off-season cricket planning
- Monitoring & Adaptation — player response and training decisions
- Load & Recovery — including fast-bowling workload where appropriate
- Performance Systems — academy, club, team and organisational environments

Do not create a new category for a single article. Add a category only when it represents a durable editorial territory.

## Voice and editorial standard

Articles should be practical, contextual, clear and evidence-aware.

- Start with a real question or decision.
- State who the discussion is for and which contextual variables matter.
- Explain complexity without using jargon to manufacture authority.
- Reference evidence where it helps, while being precise about its limits.
- Connect the idea to training, coaching or performance-system decisions.
- Avoid universal prescriptions when sport, schedule or athlete needs can change the answer.
- Never invent research, citations, athlete outcomes, case studies or quotations.

## Content structure

Article types live in `src/types/insight-article.ts`. Content entries live in `src/content/insights/articles.ts`.

Each article supports:

- `status`: `draft` or `published`
- `title`
- `slug`
- `description`
- `category`
- `standfirst`
- `author`
- `publicationDate`
- optional `updatedDate`
- optional `heroImage`
- typed `body` blocks
- optional `references`
- optional related CAIRNOX service
- optional related article slugs
- optional SEO title, description and Open Graph image

The body supports paragraphs, second- and third-level headings, ordered and unordered lists, genuine pull quotes, approved images and simple accessible tables.

## Adding an article

1. Add a typed entry to `allInsights` in `src/content/insights/articles.ts` with `status: "draft"`.
2. Use a lowercase hyphenated slug. The content loader rejects malformed or duplicate slugs.
3. Build the article from typed body blocks. Keep one clear `<h1>` in the template; body headings begin at level two.
4. Use only approved images under `/public`, with accurate alt text, intrinsic dimensions and an optional caption.
5. Add references only when real sources were used. Preserve the title and source information accurately; include a direct URL where appropriate.
6. Review the article for factual claims, permissions, accessibility, mobile reading and source accuracy.
7. Add approved author and publication-date information, then change the status to `published`.
8. Run `pnpm typecheck`, `pnpm lint` and `pnpm build` before release.

Do not add placeholder dates, authors, sources or quotations simply to satisfy the type model.

## Draft and published behavior

`getPublishedInsights()` is the only public content selector.

Draft entries are excluded from:

- the `/insights` listing
- generated article routes
- article metadata
- the sitemap

The dynamic route uses `dynamicParams = false`. In production, only slugs returned by `generateStaticParams()` are generated. Unknown or draft slugs do not render as public articles.

The first published articles are `speed-training-in-cricket` and `game-day-warm-ups`. The Insights index reads the published collection, features the first entry when publication dates tie, and lists every published article. Drafts remain private to the content file.

## SEO fields

The article template automatically creates:

- a canonical `/insights/[slug]` URL
- article Open Graph metadata
- publication and optional updated dates
- author metadata
- Article structured data

Use the article title and description by default. Add optional SEO overrides only when they improve clarity without changing the article's meaning. Open Graph imagery must use an approved asset; do not generate generic editorial thumbnails solely for search presentation.

## References and sources

References appear in a restrained `REFERENCES` section when supplied. A reference can include:

- title
- authors
- publication
- year
- direct URL

Check every source before publication. Do not cite research from summaries when the primary source is available, and do not overstate what a paper or dataset demonstrates.

## Image handling

- Use approved CAIRNOX documentary media or article-specific media with confirmed permission.
- Store public assets under `/public/media/` using the existing structure.
- Preserve source files and aspect ratios.
- Provide concise, meaningful alt text; use empty alt text only for genuinely decorative imagery.
- Include explicit dimensions and responsive sizes.
- Do not use stock imagery to make the library appear larger.

## Listing and sitemap behavior

`getPublishedInsights()` populates the featured article and latest-articles listing on `/insights`. Collection order resolves same-day publication ties. Category controls should be introduced only when the number of published articles makes filtering useful.

Published articles automatically enter `src/app/sitemap.ts` with their canonical URL and most recent approved date. Drafts remain excluded. Search and category archive pages are deliberately deferred until the library justifies them.

If the library is temporarily empty, the static build retains a reserved validation slug required by Next.js and removes it from `out/` after export. It is not published, listed or added to the sitemap.
