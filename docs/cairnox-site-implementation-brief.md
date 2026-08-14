# CAIRNOX Website Implementation Brief

Status: Phase 1 foundation reference

Authority: derived from `CAIRNOX_Brand_Identity_Description.docx` and the approved Phase 1 implementation prompt

Last updated: 13 August 2026

This document translates the master brand strategy into practical website rules. It is deliberately concise and does not replace the master DOCX.

## Brand positioning

CAIRNOX is a founder-led high-performance coaching and consultancy brand.

- Core territory: **Scottish geology × elite performance × sports science × modern industrial design**
- Core belief: **Performance is built layer by layer.**
- Core expression: **STRUCTURE. PROGRESSION. PERFORMANCE.**
- Supporting philosophy: **Strong foundations. Intelligent progression. Peak performance.**

The cairn is the organising idea, not a decorative motif. It represents guidance, accumulation, foundation, balance, resilience and deliberate progression. Scottish influence should be contemporary and understated: geology, material, weather, landscape, navigation and permanence—not tourism imagery or traditional symbols.

## Founder strategy

CAIRNOX is the brand. Mathew Skyner is the expertise and principal trust engine at launch.

The website should use Mathew's real coaching experience and approved media to establish trust while allowing the brand, methodology and service architecture to grow beyond one practitioner. It must feel credible and established without implying a large staff, multiple facilities, a research division, a global practitioner network, large client numbers or other unverified infrastructure.

Internal principle: **Brand first. Founder powered. Scalable by design.**

## Audience

The experience is athlete-first and must not resemble a general fitness or personal-training business.

Primary audience:

- professional athletes
- aspiring professional athletes
- elite and high-level competitive athletes
- highly motivated performance-focused individuals

Secondary/professional audience:

- coaches
- schools
- academies
- clubs
- sporting organisations
- performance staff

## Business architecture

BASE, ELEVATE and APEX are three applications of one CAIRNOX philosophy. They are not Bronze/Silver/Gold packages, should not be differentiated primarily by colour and must not read as linear pricing upgrades.

### BASE — Performance Programmes

- Philosophical role: **Foundation**
- Brand expression: **Build the foundation.**
- Commercial role: **Expertise productised.**
- Model: one-time purchase, scalable delivery
- Core product: a complete, structured strength, power and conditioning programme an athlete can follow independently
- Supporting material: selected ebooks and resources; never position BASE as an ebook shop
- Primary intent/action: “I want a structured programme I can follow.” → **View Programmes** → purchase

### ELEVATE — 1:1 Performance Coaching

- Philosophical role: **Progression**
- Brand expression: **Build around the athlete.**
- Commercial role: **Expertise personalised.**
- Model: limited-availability monthly coaching
- Service territory: personalised programming, direct ongoing support, nutrition support, training modification, athlete monitoring, schedule management where relevant and ongoing communication
- Key distinction: **BASE gives the athlete the system. ELEVATE adapts the system around the athlete.**
- Primary intent/action: “I want direct coaching built around me.” → **Apply for Coaching** → qualified application/consultation

Do not manufacture scarcity, imply medical dietetic services or publish a guaranteed “24/7 response” promise without later owner approval.

### APEX — High-Performance Consultancy

- Philosophical role: **Peak**
- Brand expression: **Build the performance environment.**
- Commercial role: **Expertise systemised.**
- Audience: coaches, schools, academies, clubs and sporting organisations
- Service territory: physical development systems, load management, seasonal planning, athlete monitoring, physical preparation strategy, programme review and staff/coach development
- Delivery: in person, online, hybrid, project-based or ongoing advisory
- Primary intent/action: “We want to improve our performance system/environment.” → **Discuss a Project** → qualified consultancy enquiry

Use professional language around systems, decisions, frameworks, implementation, monitoring, development and performance environments. Do not describe APEX as personal training for a team.

## Experience and proof

Approved multi-sport experience territory:

- Professional Rugby
- PSA Squash
- British Cycling
- Professional Soccer
- USA Cricket
- NCAA Programs

Do not add employers, titles, dates, certifications, partners, statistics or outcomes unless approved supporting material is supplied.

### Approved testimonials

> “You are an expert at your job and super professional, been a pleasure to work with you mate.”
>
> Perry Humphreys — Professional Rugby

> “Thank you for everything you’ve done for me and my career since you’ve been at OG. I absolutely would not be in the place I’m in if it wasn’t for your guidance and friendship over the last three years.”
>
> KoiKoi Nelligan — Professional Rugby

> “Went over and above for the club. Thanks so much for everything you did for me on and off the field with rugby and also the injury stuff.”
>
> Jason Robertson — Professional Rugby

Do not invent or polish these into generic endorsements. Public punctuation and formatting can be refined in the later page-specific work.

## Visual direction

Target character: elite, intelligent, athletic, disciplined, technical, structured, contemporary, understated, resilient, professional, international and quietly confident.

Reference territory: **sports science × elite performance institution × Scottish modernism**.

Avoid fashion/luxury-fragrance, commercial-gym, bodybuilding, supplement, CrossFit, esports/gaming, automotive, hiking/adventure, yoga/wellness and influencer-personal-training cues.

### Provisional colour tokens

These implementation values are centralized in `src/app/globals.css` and are **not final approved brand values**.

- Warm natural cream / `--cairnox-cream`: `#F2EEE4`
- Near-black / `--cairnox-black`: `#111310`
- Charcoal / `--cairnox-charcoal`: `#292C28`
- Mineral grey / `--cairnox-mineral`: `#656960`
- Weathered stone / `--cairnox-stone`: `#AAA99F`
- Light stone / `--cairnox-stone-light`: `#E3DED2`
- Deep muted moss / `--cairnox-moss`: `#4F5948`
- Restrained ochre / `--cairnox-ochre`: `#8A6F3C`
- Neutral divider / `--cairnox-line`: `#CBC5B8`

The system should remain approximately 90% neutral. Cream is the signature surface; dark sections are selective. No neon green, bright red, electric blue, fluorescent orange or generic performance gradients.

### Provisional typography tokens

The initial stack is **not a final approved brand font**:

`"Helvetica Neue", "Inter", "Arial Nova", Arial, sans-serif`

Both body and display roles are controlled by `--font-cairnox-sans` and `--font-cairnox-display`. Replacement should require token changes, not component rewrites. Authority comes from scale, weight, spacing, proportion and hierarchy—not novelty letterforms.

## Logo rules

Use only `logo_transparent.png`, copied byte-for-byte to `/public/brand/cairnox-logo.png`. Preserve its aspect ratio, controlled irregularity and clear space. Do not redraw, regularise, recolour, distort, animate, shadow, glow, gradient-fill or place it in a badge.

The supplied logo is dark and is currently suitable for light surfaces. An approved light/inverted logo is required before a graphical logo is placed on dark surfaces; do not manufacture one.

## Site architecture

Prepared launch routes:

- `/`
- `/base`
- `/elevate`
- `/apex`
- `/method`
- `/about`
- `/results`
- `/insights`
- `/contact`

Minimal utility placeholders support the global footer: `/privacy`, `/terms`, `/cookie-policy` and `/training-disclaimer`. These contain no invented legal copy.

Future route patterns reserved in architecture, not implemented in Phase 1:

- `/base/[programme]`
- ELEVATE application flow (provisionally `/elevate/apply`)
- APEX service detail pages (provisionally `/apex/[service]`)
- `/results/[case-study]`
- `/insights/[article]`

## Navigation and conversion

Desktop navigation: BASE, ELEVATE, APEX, METHOD, ABOUT, RESULTS, INSIGHTS. Primary global CTA: **WORK WITH MATHEW**.

The accessible mobile navigation displays the offer descriptors alongside the proprietary tier names:

- BASE — Performance Programmes
- ELEVATE — 1:1 Performance Coaching
- APEX — High-Performance Consultancy

Do not collapse the three commercial paths into a generic Contact action. Their future funnel events should remain distinct.

## Design-system foundation

Reusable primitives live in `src/components/ui/`; global shell components live in `src/components/layout/`. The foundation includes:

- responsive container and spacing scales
- display, section, body and eyebrow typography
- primary, secondary, inverse and ghost button treatments
- text-link treatment
- light, muted and dark section wrappers
- card and divider primitives
- responsive image and controlled video wrappers
- approved logo component
- desktop and accessible mobile navigation
- responsive global footer

No page-specific styling or full marketing sections were introduced in Phase 1.

## Media and performance rules

Source assets remain in `/Media`; byte-identical website copies live under `/public/media`. Use only approved real media—never stock or generated replacement photography. Media is evidence, not decoration; placement is decided page by page.

- Use `next/image` with explicit dimensions or aspect ratios and responsive sizes.
- Lazy-load non-critical imagery.
- Do not preload all media globally.
- Videos use poster support, controls, `playsInline` and `preload="none"` by default.
- Do not autoplay videos during the foundation phase.
- Do not create a combined hero montage.

## Motion and accessibility

Motion must be short, subtle, controlled and purposeful. The global CSS honours `prefers-reduced-motion`. Do not add scroll-jacking, dramatic parallax, cursor effects, 3D, spinning logos, marquees, excessive reveals or cinematic transitions.

Accessibility baseline:

- semantic landmarks and headings
- skip link
- visible keyboard focus
- keyboard-operable mobile navigation with Escape-to-close
- descriptive link/button labels and appropriate semantics
- minimum 46px primary controls/touch targets
- restrained line lengths and fluid type
- useful, concise alt-text architecture; decorative imagery uses empty alt text
- contrast-aware light and dark tokens

## Copy and claims guardrails

Voice: confident, intelligent, direct, professional, evidence-aware, athlete-first, human and understated.

Avoid generic motivation, inflated repetition of “elite”, “world-class” or “premium”, and phrases such as “unlock your potential”, “become your best self”, “push your limits”, “no excuses”, “unleash greatness”, “beast mode”, “dominate” or “train insane”.

Never invent statistics, client counts, qualifications, employers, case studies, partners, testimonials, awards or athlete outcomes.

## SEO and analytics readiness

The App Router foundation includes centralized metadata, a title template, descriptions, canonical URLs, Open Graph fields, `robots.ts` and `sitemap.ts`. Set `NEXT_PUBLIC_SITE_URL` to the approved production origin before launch. No thin SEO pages or invented keywords are permitted.

No analytics provider or tracking ID is installed. Future event architecture should accommodate:

- BASE: programme viewed, checkout started, purchase
- ELEVATE: application started, application submitted
- APEX: project enquiry started, project enquiry submitted
- Brand: Method viewed, Results viewed, Insight/article viewed

## Future build order

1. Global foundation — current task
2. Homepage
3. ELEVATE
4. BASE
5. APEX
6. METHOD
7. ABOUT
8. RESULTS
9. INSIGHTS
10. Contact / forms / legal / utility
11. Full-site visual refinement, accessibility, performance and QA

Stop after Step 1 until the foundation is approved.

## Prompt-to-master consistency check

No material discrepancy was found between the Phase 1 prompt and the current master DOCX. The implementation follows the prompt where it is more specific, including the exact launch routes, CTA labels, media set and instruction not to design full pages yet.
