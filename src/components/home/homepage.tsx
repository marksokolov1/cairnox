import Image from "next/image";
import type { Route } from "next";
import { getPublicAssetPath } from "@/config/site";
import type { PublishedInsightArticle } from "@/types/insight-article";
import {
  ArrowLink,
  BodyCopy,
  ButtonLink,
  Container,
  DisplayHeading,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";

const experience = [
  "USA Cricket",
  "Professional Rugby",
  "PSA Squash",
  "British Cycling",
  "NCAA Programmes",
] as const;

const pathways = [
  {
    label: "BASE",
    heading: "Train independently.",
    descriptor: "Cricket Performance Programmes",
    copy: "Structured strength, power and conditioning programmes for serious cricketers.",
    href: "/base",
    cta: "Explore BASE",
  },
  {
    label: "ELEVATE",
    heading: "Work 1:1.",
    descriptor: "Individual Cricket Performance Coaching",
    copy: "Personalised physical preparation built around the player, role, schedule and season.",
    href: "/elevate",
    cta: "Explore ELEVATE",
  },
  {
    label: "APEX",
    heading: "Build a performance system.",
    descriptor: "Cricket Performance Consultancy",
    copy: "Performance-system support for cricket academies, schools, clubs, teams and organisations.",
    href: "/apex",
    cta: "Explore APEX",
  },
] as const;

const philosophySteps = [
  { number: "01", title: "Foundation", copy: "Build the physical qualities performance depends upon." },
  { number: "02", title: "Progression", copy: "Develop those qualities through deliberate work over time." },
  { number: "03", title: "Performance", copy: "Express the preparation when it matters." },
] as const;

export function Homepage({ latestInsight }: { latestInsight?: PublishedInsightArticle }) {
  return (
    <main id="main-content" className="homepage">
      <section aria-labelledby="hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:min-h-[34rem] lg:max-h-[80svh] lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-center py-11 sm:py-16 lg:col-span-7 lg:py-10 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">Cricket Performance Coaching &amp; Consultancy</Eyebrow>
            <DisplayHeading id="hero-title" className="type-hero mt-6 sm:mt-8">
              <span className="block lg:whitespace-nowrap">Cricket performance,</span>
              <span className="block lg:whitespace-nowrap">built layer by layer.</span>
            </DisplayHeading>
            <BodyCopy className="mt-6 max-w-[41rem] text-charcoal sm:mt-8">
              Physical preparation, individual coaching and performance systems for serious
              cricketers and cricket organisations. Led by high-performance coach Mathew Skyner.
            </BodyCopy>
            <div className="mt-7 flex flex-col gap-2.5 min-[440px]:flex-row sm:mt-8 sm:gap-3">
              <ButtonLink href="#pathways" className="min-h-11 py-[0.72rem]">
                Choose your pathway
              </ButtonLink>
              <ButtonLink href="/method" variant="secondary" className="min-h-11 py-[0.72rem]">
                Explore the Method
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-0 overflow-hidden bg-stone-light sm:aspect-[3/2] lg:col-span-5 lg:my-6 lg:aspect-auto">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-performance-coach-portrait.jpg")}
              alt="Mathew Skyner in a USA Cricket performance environment"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[50%_38%] saturate-[0.9] contrast-[1.04] sepia-[0.02] sm:object-[50%_42%]"
            />
          </div>
        </Container>
        <Container className="border-t border-line py-5 sm:flex sm:items-baseline sm:gap-8 sm:py-6">
          <p className="type-eyebrow shrink-0 text-moss">Experience across high-performance sport</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 sm:mt-0">
            {experience.map((item) => (
              <li key={item} className="text-[0.75rem] font-semibold tracking-[0.07em] text-charcoal uppercase">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section id="pathways" aria-labelledby="pathways-title" tone="muted" spacing="compact" className="scroll-mt-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">Ways to work with CAIRNOX</Eyebrow>
              <SectionHeading id="pathways-title" className="mt-4 max-w-[16ch]">
                Choose the support you need.
              </SectionHeading>
            </div>
            <p className="text-base leading-relaxed text-charcoal lg:col-span-4 lg:pb-1">
              Three routes through the same cricket-performance system.
            </p>
          </div>
          <div className="mt-9 border-y border-ink lg:grid lg:grid-cols-3">
            {pathways.map((pathway, index) => (
              <article
                key={pathway.label}
                className={`flex flex-col border-b border-ink py-7 last:border-b-0 lg:border-b-0 lg:px-7 lg:py-8 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-moss">{pathway.label}</p>
                <h3 className="mt-5 max-w-[17ch] text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                  {pathway.heading}
                </h3>
                <p className="mt-4 text-[0.74rem] font-bold leading-snug tracking-[0.1em] uppercase">
                  {pathway.descriptor}
                </p>
                <p className="mt-3 max-w-sm leading-relaxed text-charcoal">{pathway.copy}</p>
                <ArrowLink href={pathway.href} className="mt-7 lg:mt-auto lg:pt-7">
                  {pathway.cta}
                </ArrowLink>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="why-title" spacing="default">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Why CAIRNOX</Eyebrow>
              <SectionHeading id="why-title" className="mt-5 max-w-[15ch]">
                A system built for cricket performance.
              </SectionHeading>
              <div className="mt-6 max-w-2xl space-y-4 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-charcoal">
                <p>
                  CAIRNOX is led by Mathew Skyner, whose experience within USA Cricket and
                  high-performance sport informs a structured approach to physical preparation and
                  long-term player development.
                </p>
                <p>
                  Like a cairn, performance is built layer by layer. Training considers the player,
                  the demands of cricket and the competitive calendar—not isolated workouts or
                  short-term novelty.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-9 gap-y-4">
                <ArrowLink href="/about">Meet Mathew</ArrowLink>
                <ArrowLink href="/method">Explore the Method</ArrowLink>
              </div>
            </div>
            <figure className="relative aspect-[3/2] overflow-hidden bg-stone-light lg:col-span-5">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-individual-resistance-coaching.jpg")}
                alt="Mathew Skyner preparing a USA Cricket athlete with resisted field work"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center saturate-[0.9] contrast-[1.03]"
              />
            </figure>
          </div>
          <ol className="mt-10 grid border-t border-ink md:grid-cols-3">
            {philosophySteps.map((step, index) => (
              <li
                key={step.number}
                className={`border-b border-line py-5 md:border-b-0 md:px-6 md:py-6 ${
                  index > 0 ? "md:border-l md:border-line" : "md:pl-0"
                }`}
              >
                <p className="type-eyebrow text-moss">{step.number}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] uppercase">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-charcoal">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="proof-title" tone="dark" spacing="compact">
        <Container className="grid gap-7 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Eyebrow className="text-stone">Professional trust</Eyebrow>
            <SectionHeading id="proof-title" className="mt-4 max-w-[12ch]">
              Trust built through the work.
            </SectionHeading>
            <ArrowLink href="/results" className="mt-6 text-canvas">
              View Results
            </ArrowLink>
          </div>
          <blockquote className="border-t border-white/30 pt-6 lg:col-span-8 lg:border-t-0 lg:border-l lg:py-1 lg:pl-12">
            <p className="max-w-[37ch] text-[clamp(1.4rem,2.3vw,2.35rem)] leading-[1.23] tracking-[-0.025em]">
              “Thank you for everything you’ve done for me and my career since you’ve been at OG.
              I absolutely would not be in the place I’m in if it wasn’t for your guidance and
              friendship over the last three years.”
            </p>
            <footer className="mt-6 border-t border-white/25 pt-4">
              <p className="text-[0.78rem] font-bold tracking-[0.12em] uppercase">KoiKoi Nelligan</p>
              <p className="mt-1 text-[0.92rem] text-stone">Professional Rugby</p>
            </footer>
          </blockquote>
        </Container>
      </Section>

      <Section aria-labelledby="final-cta-title" spacing="compact">
        <Container>
          {latestInsight && (
            <article className="grid gap-5 border-b border-line pb-9 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <Eyebrow className="text-moss">Latest Insight</Eyebrow>
                <p className="mt-3 text-[0.76rem] font-bold tracking-[0.1em] uppercase">
                  {latestInsight.category}
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="max-w-[24ch] text-[clamp(1.8rem,3.3vw,3.25rem)] font-semibold leading-[1.07] tracking-[-0.045em]">
                  {latestInsight.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-charcoal">
                  {latestInsight.description}
                </p>
                <ArrowLink
                  href={`/insights/${latestInsight.slug}` as Route}
                  aria-label={`Read article: ${latestInsight.title}`}
                  className="mt-5"
                >
                  Read article
                </ArrowLink>
              </div>
            </article>
          )}
          <div className={`grid gap-7 lg:grid-cols-12 lg:items-end ${latestInsight ? "pt-9" : ""}`}>
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">The next layer</Eyebrow>
              <SectionHeading id="final-cta-title" className="mt-4 max-w-[15ch]">
                Ready to build your next layer?
              </SectionHeading>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg leading-relaxed text-charcoal">
                Choose the support that fits where you are now.
              </p>
              <ButtonLink href="/contact" className="mt-5">
                Work with CAIRNOX
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
