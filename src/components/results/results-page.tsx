import Image from "next/image";
import { getPublicAssetPath } from "@/config/site";
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
  "Professional Soccer",
  "NCAA Programmes",
] as const;

const pathways = [
  {
    label: "BASE",
    descriptor: "Cricket Performance Programmes",
    copy: "Structured cricket programming to follow independently.",
    href: "/base",
  },
  {
    label: "ELEVATE",
    descriptor: "1:1 Cricket Performance Coaching",
    copy: "Individual coaching adapted around the player.",
    href: "/elevate",
  },
  {
    label: "APEX",
    descriptor: "Cricket Performance Consultancy",
    copy: "Support for cricket performance systems and organisations.",
    href: "/apex",
  },
] as const;

function Attribution({ name }: { name: string }) {
  return (
    <footer className="mt-7 border-t border-current/20 pt-5">
      <p className="text-[0.78rem] font-bold tracking-[0.13em] uppercase">{name}</p>
      <p className="mt-1 text-[0.94rem] text-mineral">Professional Rugby</p>
    </footer>
  );
}

export function ResultsPage() {
  return (
    <main id="main-content" className="results-page">
      <section aria-labelledby="results-hero-title" className="border-b border-line bg-canvas">
        <Container className="py-12 sm:py-16 lg:py-20">
          <Eyebrow className="text-moss">CAIRNOX Results</Eyebrow>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <DisplayHeading
              id="results-hero-title"
              className="type-hero max-w-[10ch] lg:col-span-7"
            >
              The work has to hold up.
            </DisplayHeading>

            <div className="lg:col-span-5 lg:pb-1">
              <BodyCopy className="text-charcoal">
                CAIRNOX believes performance claims should be supported by the work behind them. At
                launch, that proof comes from verified cricket-environment experience, wider
                high-performance work and genuine professional-rugby testimonials.
              </BodyCopy>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="#athlete-voices">Hear from the athletes</ButtonLink>
                <ButtonLink href="/method" variant="secondary">
                  Explore the Method
                </ButtonLink>
              </div>
            </div>
          </div>

        </Container>
      </section>

      <Section
        id="athlete-voices"
        aria-labelledby="voices-title"
        spacing="large"
        className="scroll-mt-24"
      >
        <Container>
          <Eyebrow className="text-moss">Athlete proof</Eyebrow>
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
            <SectionHeading id="voices-title" className="max-w-[15ch] lg:col-span-8">
              What the work has meant to the people in it.
            </SectionHeading>
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-charcoal lg:col-span-4 lg:pb-1">
              These verified Professional Rugby testimonials evidence professional trust, long-term
              support and the human relationship behind the technical work. They are not presented as
              cricket testimonials.
            </p>
          </div>

          <div className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-12">
            <figure className="border-b border-ink py-10 lg:col-span-4 lg:border-b-0 lg:pr-10 lg:py-12">
              <div className="relative aspect-[3/2] overflow-hidden bg-stone-light lg:aspect-[4/5]">
                <Image
                  src={getPublicAssetPath("/media/images/mathew-skyner-active-rugby-coaching.jpg")}
                  alt="Mathew Skyner actively coaching during a rugby training session"
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover object-[55%_48%] saturate-[0.9] contrast-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase">
                Coaching / communication / athlete support
              </figcaption>
            </figure>

            <blockquote className="border-b border-ink py-10 lg:col-span-8 lg:border-b-0 lg:border-l lg:pl-12 lg:py-12">
              <p className="type-eyebrow text-mineral">Featured athlete voice</p>
              <p className="mt-10 text-[clamp(2rem,4.15vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.047em]">
                “Thank you for everything you&apos;ve done for me and my career since you&apos;ve been at
                OG. I absolutely would not be in the place I&apos;m in if it wasn&apos;t for your guidance and
                friendship over the last three years.”
              </p>
              <Attribution name="KoiKoi Nelligan" />
            </blockquote>
          </div>

          <div className="grid border-b border-ink lg:grid-cols-2">
            <blockquote className="border-b border-ink py-10 lg:border-b-0 lg:pr-12 lg:py-12">
              <p className="text-[clamp(1.45rem,2.6vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.035em]">
                “You are an expert at your job and super professional, been a pleasure to work with
                you mate.”
              </p>
              <Attribution name="Perry Humphreys" />
            </blockquote>
            <blockquote className="py-10 lg:border-l lg:border-ink lg:pl-12 lg:py-12">
              <p className="text-[clamp(1.45rem,2.6vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.035em]">
                “Went over and above for the club. Thanks so much for everything you did for me on
                and off the field with rugby and also the injury stuff.”
              </p>
              <Attribution name="Jason Robertson" />
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="environments-title" tone="muted" spacing="large">
        <Container>
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-light lg:aspect-[16/7]">
              <Image
                src={getPublicAssetPath("/media/images/usa-cricket-team-performance-environment.jpg")}
                alt="USA Cricket players and performance staff at a T20 World Cup venue"
                fill
                sizes="100vw"
                className="object-cover object-[50%_57%] saturate-[0.9] contrast-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase">
              Documentary evidence / real performance environment
            </figcaption>
          </figure>

          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <Eyebrow className="text-moss">Where the work has been applied</Eyebrow>
              <SectionHeading id="environments-title" className="mt-6 max-w-[13ch]">
                Experience across performance environments.
              </SectionHeading>
              <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal">
                Mathew Skyner&apos;s experience in the USA Cricket environment is the principal cricket
                proof currently available. Experience across professional rugby, PSA Squash, British
                Cycling, professional soccer and NCAA programmes provides wider high-performance
                context. These are experience categories, not CAIRNOX client claims.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <ul className="border-t border-ink">
                {experience.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-20 items-center border-b border-ink text-[0.82rem] font-bold tracking-[0.1em] uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.82rem] leading-relaxed text-mineral">
                Experience categories—not a client list or statement of equal responsibility across
                each environment.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="evidence-library-title" tone="dark" spacing="compact">
        <Container>
          <Eyebrow className="text-stone">Current proof / future evidence</Eyebrow>
          <SectionHeading id="evidence-library-title" className="mt-4">What the evidence can tell us.</SectionHeading>
          <div className="mt-7 grid gap-6 border-t border-white/30 pt-6 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="text-xl font-semibold">Available now</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-stone-light">
                Mathew’s cricket-environment experience and professional rugby testimonials show
                where he has worked and how athletes describe his coaching. They don’t establish
                quantified cricket outcomes or results for BASE, ELEVATE or APEX.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What we’ll document</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-stone-light">
                Future case studies will explain the context, objective, approach, evidence and outcome,
                including what we learned. We’ll publish quantified results only where the evidence and
                permission support them.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="next-step-title" spacing="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The next layer</Eyebrow>
              <SectionHeading id="next-step-title" className="mt-6 max-w-[15ch]">
                Build the work that can become the proof.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                Choose the level of support that fits what you are trying to achieve now.
              </BodyCopy>
              <ButtonLink href="/contact" className="mt-8">
                Work with CAIRNOX
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="CAIRNOX service pathways" className="mt-16 border-y border-ink lg:mt-24">
            {pathways.map((pathway) => (
              <div
                key={pathway.label}
                className="grid gap-4 border-b border-ink py-8 last:border-b-0 sm:grid-cols-[0.8fr_1.2fr_1.5fr_auto] sm:items-center sm:gap-7"
              >
                <p className="text-2xl font-semibold tracking-[-0.03em]">{pathway.label}</p>
                <p className="text-[0.95rem] font-semibold text-charcoal">{pathway.descriptor}</p>
                <p className="text-[0.95rem] leading-relaxed text-mineral">{pathway.copy}</p>
                <ArrowLink href={pathway.href}>Explore {pathway.label}</ArrowLink>
              </div>
            ))}
          </nav>
        </Container>
      </Section>
    </main>
  );
}
