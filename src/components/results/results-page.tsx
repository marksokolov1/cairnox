import Image from "next/image";
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

const proofPrinciples = [
  {
    number: "01",
    title: "Define the objective",
    copy: "Know what the work is intended to improve.",
  },
  {
    number: "02",
    title: "Understand the context",
    copy: "Consider the athlete, sport, schedule and surrounding demands.",
  },
  {
    number: "03",
    title: "Track what matters",
    copy: "Use relevant information rather than collecting data for its own sake.",
  },
  {
    number: "04",
    title: "Review over time",
    copy: "Judge progress across the development process rather than from a single session.",
  },
] as const;

const experience = [
  "Professional Rugby",
  "USA Cricket",
  "PSA Squash",
  "British Cycling",
  "Professional Soccer",
  "NCAA Programmes",
] as const;

const tierEvidence = [
  {
    number: "01 / Foundation",
    title: "BASE",
    descriptor: "Performance Programmes",
    copy: "A structured programme should ultimately be evaluated against its stated physical-development objective and how effectively the athlete can progress through it.",
  },
  {
    number: "02 / Progression",
    title: "ELEVATE",
    descriptor: "1:1 Performance Coaching",
    copy: "Individual coaching should be evaluated against the athlete's specific objectives, sport, training response and competitive context.",
  },
  {
    number: "03 / Peak",
    title: "APEX",
    descriptor: "High-Performance Consultancy",
    copy: "Consultancy should be evaluated against the problem the organisation is trying to solve and whether the resulting systems improve clarity, delivery or decision-making.",
  },
] as const;

const caseStudyStandard = [
  {
    number: "01",
    title: "Context",
    copy: "Who or what environment was being supported?",
  },
  {
    number: "02",
    title: "Objective",
    copy: "What was the work intended to address?",
  },
  {
    number: "03",
    title: "Approach",
    copy: "What was implemented and why?",
  },
  {
    number: "04",
    title: "Evidence",
    copy: "What information can responsibly demonstrate change?",
  },
  {
    number: "05",
    title: "Outcome",
    copy: "What happened relative to the original objective?",
  },
  {
    number: "06",
    title: "Learning",
    copy: "What should be carried forward or adapted?",
  },
] as const;

const availableProof = [
  "Genuine athlete testimonials",
  "Real high-performance coaching experience",
  "Documentary performance media",
  "Established CAIRNOX methodology",
] as const;

const futureEvidence = [
  "BASE programme case studies",
  "ELEVATE athlete case studies",
  "APEX consultancy case studies",
  "Quantified outcomes where appropriate and responsibly documented",
] as const;

const pathways = [
  {
    label: "BASE",
    descriptor: "Performance Programmes",
    copy: "Structured programming to follow independently.",
    href: "/base",
  },
  {
    label: "ELEVATE",
    descriptor: "1:1 Performance Coaching",
    copy: "Individual coaching adapted around the athlete.",
    href: "/elevate",
  },
  {
    label: "APEX",
    descriptor: "High-Performance Consultancy",
    copy: "Support for performance systems and organisations.",
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
        <Container className="flex min-h-[44rem] flex-col justify-between py-14 sm:py-20 lg:min-h-[48rem] lg:py-24">
          <Eyebrow className="text-moss">CAIRNOX Results</Eyebrow>

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:items-end">
            <DisplayHeading
              id="results-hero-title"
              className="type-hero max-w-[10ch] lg:col-span-7"
            >
              The work has to hold up.
            </DisplayHeading>

            <div className="lg:col-span-5 lg:pb-1">
              <BodyCopy className="text-charcoal">
                CAIRNOX believes performance claims should be supported by the work behind them. At
                launch, that proof comes from real coaching experience, athlete relationships and
                the environments in which the work has been applied.
              </BodyCopy>
              <p className="mt-6 border-t border-line pt-5 text-[0.96rem] leading-relaxed text-charcoal">
                Case studies and quantified outcomes will be added as CAIRNOX programmes and
                engagements develop and can be documented responsibly.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="#athlete-voices">Hear from the athletes</ButtonLink>
                <ButtonLink href="/method" variant="secondary">
                  Explore the Method
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {["Athlete voices", "Performance environments", "Methodology", "Future case studies"].map(
              (item, index) => (
                <p
                  key={item}
                  className={`flex min-h-24 items-end border-b border-ink py-5 text-[0.76rem] font-bold tracking-[0.1em] uppercase sm:px-6 ${
                    index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                  } ${index > 1 ? "sm:border-b-0" : ""} ${
                    index === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-6"
                  } lg:border-b-0`}
                >
                  {item}
                </p>
              ),
            )}
          </div>
        </Container>
      </section>

      <Section aria-labelledby="proof-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Evidence before claims</Eyebrow>
              <SectionHeading id="proof-title" className="mt-6 max-w-[14ch]">
                Results have to mean something in context.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-5">
              A performance result only matters relative to the objective, the athlete and the
              environment in which the work was carried out. CAIRNOX therefore avoids generic
              transformation claims or isolated numbers without context.
            </BodyCopy>
          </div>

          <ol className="mt-16 grid border-y border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {proofPrinciples.map((principle, index) => (
              <li
                key={principle.number}
                className={`flex min-h-64 flex-col justify-between border-b border-ink py-8 sm:px-7 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index > 1 ? "sm:border-b-0" : ""} ${
                  index === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-7"
                } lg:border-b-0`}
              >
                <p className="type-eyebrow text-mineral">{principle.number}</p>
                <div className="mt-16">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] uppercase">
                    {principle.title}
                  </h3>
                  <p className="mt-5 max-w-xs text-[0.98rem] leading-relaxed text-charcoal">
                    {principle.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-[0.8rem] leading-relaxed text-mineral">
            These are evidence principles, not a proprietary measurement system or fixed testing
            protocol.
          </p>
        </Container>
      </Section>

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
              Their words evidence professional trust, long-term support and the human relationship
              behind the technical work.
            </p>
          </div>

          <div className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-12">
            <figure className="border-b border-ink py-10 lg:col-span-4 lg:border-b-0 lg:pr-10 lg:py-12">
              <div className="relative aspect-[3/2] overflow-hidden bg-stone-light lg:aspect-[4/5]">
                <Image
                  src="/media/images/mathew-skyner-active-rugby-coaching.jpg"
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
                src="/media/images/mathew-skyner-usa-cricket-performance-team-wide.jpg"
                alt="Mathew Skyner addressing athletes in a USA Cricket training environment"
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
                Mathew Skyner&apos;s experience spans professional rugby, USA Cricket, PSA Squash,
                British Cycling, professional soccer and NCAA programmes. These environments differ
                in sport, schedule and performance demand, but each places a premium on preparation
                that can operate within real competitive constraints.
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

      <Section aria-labelledby="context-specific-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-stone">No generic scorecard</Eyebrow>
              <SectionHeading id="context-specific-title" className="mt-6 max-w-[14ch]">
                Different work requires different proof.
              </SectionHeading>
            </div>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-stone-light lg:col-span-4 lg:pb-1">
              The objective defines the evidence. A useful result for one athlete, programme or
              organisation cannot be assumed to prove another.
            </p>
          </div>

          <div className="mt-16 grid border-y border-white/30 lg:mt-24 lg:grid-cols-3">
            {tierEvidence.map((tier, index) => (
              <article
                key={tier.title}
                className={`flex min-h-[30rem] flex-col border-b border-white/30 py-10 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-12 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-stone">{tier.number}</p>
                <h3 className="mt-12 text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-none tracking-[-0.05em]">
                  {tier.title}
                </h3>
                <p className="mt-5 text-[0.82rem] font-bold tracking-[0.1em] text-stone uppercase">
                  {tier.descriptor}
                </p>
                <p className="mt-10 max-w-md text-[1.02rem] leading-relaxed text-stone-light">
                  {tier.copy}
                </p>
                <p className="mt-auto border-t border-white/30 pt-6 text-[0.76rem] font-bold tracking-[0.1em] text-stone uppercase">
                  Evidence assessed against purpose and context
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="case-study-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">How CAIRNOX will document the work</Eyebrow>
              <SectionHeading id="case-study-title" className="mt-6 max-w-[13ch]">
                Context before the outcome.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                Future case studies will follow a consistent editorial standard so that an outcome
                can be understood rather than simply advertised.
              </BodyCopy>
              <p className="mt-5 text-[0.84rem] leading-relaxed text-mineral">
                The framework below describes the publication standard. It is not populated with
                invented examples.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid border-t border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {caseStudyStandard.map((step, index) => (
              <li
                key={step.number}
                className={`flex min-h-64 flex-col justify-between border-b border-ink py-8 sm:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-8"}`}
              >
                <p className="type-eyebrow text-mineral">{step.number}</p>
                <div className="mt-14">
                  <h3 className="text-[clamp(1.5rem,2.5vw,2.6rem)] font-semibold leading-none tracking-[-0.04em] uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-[1rem] leading-relaxed text-charcoal">
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="evidence-library-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">Current proof / future evidence</Eyebrow>
              <SectionHeading id="evidence-library-title" className="mt-6 max-w-[16ch]">
                Build the evidence the same way you build performance.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-4">
              CAIRNOX is at the beginning of its life as an independent brand. The coaching
              experience behind it is established; the BASE, ELEVATE and APEX evidence library will
              grow as the business develops and work can be documented with appropriate context and
              permission.
            </BodyCopy>
          </div>

          <div className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-2">
            <div className="bg-ink px-7 py-10 text-canvas sm:px-10 lg:px-12 lg:py-14">
              <p className="type-eyebrow text-stone">Available now</p>
              <ul className="mt-10 border-t border-white/30">
                {availableProof.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-20 items-center border-b border-white/30 text-[1.02rem] font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-0 py-10 lg:border-l lg:border-ink lg:px-12 lg:py-14">
              <p className="type-eyebrow text-mineral">To be added</p>
              <ul className="mt-10 border-t border-ink">
                {futureEvidence.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-20 items-center border-b border-ink text-[1.02rem] font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[0.82rem] leading-relaxed text-mineral">
                Published only when the context, evidence and permission support a responsible
                account of the work.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="next-step-title" spacing="large">
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
                Work with Mathew
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
