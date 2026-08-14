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

const cairnPrinciples = [
  {
    number: "01",
    title: "Guidance",
    copy: "A clear direction for the work.",
  },
  {
    number: "02",
    title: "Foundation",
    copy: "The qualities everything else depends upon.",
  },
  {
    number: "03",
    title: "Accumulation",
    copy: "Repeated high-quality work over time.",
  },
  {
    number: "04",
    title: "Resilience",
    copy: "A structure capable of holding up under demand.",
  },
] as const;

const layers = [
  {
    number: "01",
    title: "Foundation",
    expression: "Build what performance depends upon.",
    copy: "Develop the physical qualities and capacity required for future work.",
  },
  {
    number: "02",
    title: "Progression",
    expression: "Accumulate deliberate development over time.",
    copy: "Training should build rather than simply repeat.",
  },
  {
    number: "03",
    title: "Performance",
    expression: "Express preparation when it matters.",
    copy: "The outcome of the work is the athlete's ability to perform within their sporting environment.",
  },
] as const;

const accumulation = ["Session", "Week", "Block", "Season", "Performance"] as const;

const pillars = [
  {
    number: "01",
    title: "Physical preparation",
    copy: "Develop strength, power, conditioning and movement qualities relevant to performance.",
  },
  {
    number: "02",
    title: "Performance planning",
    copy: "Structure training around objectives, competitive demands and the wider schedule.",
  },
  {
    number: "03",
    title: "Monitoring & adaptation",
    copy: "Use athlete response, workload and performance information to inform future training decisions.",
  },
  {
    number: "04",
    title: "Athlete development",
    copy: "Build physical capacity over time rather than focusing only on isolated short-term outputs.",
  },
] as const;

const contextFactors = [
  {
    number: "01",
    title: "Sport",
    copy: "The physical demands of competition.",
  },
  {
    number: "02",
    title: "Athlete",
    copy: "Current needs, development and training history.",
  },
  {
    number: "03",
    title: "Schedule",
    copy: "Practice, competition, travel and available training time.",
  },
  {
    number: "04",
    title: "Workload",
    copy: "The demands already being placed on the athlete.",
  },
  {
    number: "05",
    title: "Recovery",
    copy: "The athlete's ability to absorb and respond to training.",
  },
  {
    number: "06",
    title: "Objective",
    copy: "What the current phase of development needs to achieve.",
  },
] as const;

const progression = [
  "Assess the need",
  "Build the foundation",
  "Develop the quality",
  "Progress the demand",
  "Review & adapt",
] as const;

const applications = [
  {
    number: "01 / Foundation",
    title: "BASE",
    role: "The methodology productised.",
    copy: "Structured performance programmes athletes can follow independently.",
    expression: "Build the foundation.",
    cta: "Explore BASE",
    href: "/base",
  },
  {
    number: "02 / Progression",
    title: "ELEVATE",
    role: "The methodology personalised.",
    copy: "Individual coaching adapted around the athlete, sport and schedule.",
    expression: "Build around the athlete.",
    cta: "Explore ELEVATE",
    href: "/elevate",
  },
  {
    number: "03 / Peak",
    title: "APEX",
    role: "The methodology applied to the environment.",
    copy: "Consultancy supporting the systems surrounding groups of athletes.",
    expression: "Build the performance environment.",
    cta: "Explore APEX",
    href: "/apex",
  },
] as const;

const sports = [
  "Professional Rugby",
  "USA Cricket",
  "PSA Squash",
  "British Cycling",
  "Professional Soccer",
  "NCAA Programmes",
] as const;

const finalPaths = [
  { label: "BASE", descriptor: "Performance Programmes", href: "/base" },
  { label: "ELEVATE", descriptor: "1:1 Performance Coaching", href: "/elevate" },
  { label: "APEX", descriptor: "High-Performance Consultancy", href: "/apex" },
] as const;

export function MethodPage() {
  return (
    <main id="main-content" className="method-page">
      <section aria-labelledby="method-hero-title" className="border-b border-line bg-canvas">
        <Container className="flex min-h-[44rem] flex-col justify-between py-14 sm:min-h-[50rem] sm:py-20 lg:min-h-[51rem] lg:py-24">
          <Eyebrow className="text-moss">The CAIRNOX Method</Eyebrow>

          <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-end">
            <DisplayHeading id="method-hero-title" className="type-hero max-w-[11ch] lg:col-span-8">
              Performance is built layer by layer.
            </DisplayHeading>

            <div className="lg:col-span-4 lg:pb-1">
              <BodyCopy className="text-charcoal">
                Athletic development is not created in one session. It is built through the
                accumulation of deliberate work, repeated over time and structured around where the
                athlete needs to go.
              </BodyCopy>
              <p className="mt-6 border-t border-line pt-5 text-[0.84rem] font-bold leading-relaxed tracking-[0.08em] text-mineral uppercase">
                Strong foundations. Intelligent progression. Performance expressed when it matters.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="#the-cairn">Explore the Method</ButtonLink>
                <ButtonLink href="#applications" variant="secondary">
                  Choose your path
                </ButtonLink>
              </div>
            </div>
          </div>

          <p className="mt-16 border-t border-line pt-4 text-[0.72rem] font-bold tracking-[0.12em] text-mineral uppercase lg:mt-20">
            Structure / Progression / Performance
          </p>
        </Container>
      </section>

      <Section
        id="the-cairn"
        aria-labelledby="cairn-title"
        tone="muted"
        spacing="large"
        className="scroll-mt-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <Eyebrow className="text-moss">The idea behind CAIRNOX</Eyebrow>
              <SectionHeading id="cairn-title" className="mt-6 max-w-[13ch]">
                Built to guide. Built to last.
              </SectionHeading>
            </div>
            <div className="space-y-6 lg:col-span-5 lg:col-start-8 lg:pt-10">
              <BodyCopy className="text-charcoal">
                Across Scotland, cairns have long been used to mark routes and create points of
                reference through difficult terrain. They are deliberately constructed, one stone at
                a time, and only remain standing when each layer is supported by what came before it.
              </BodyCopy>
              <p className="text-[1.05rem] leading-relaxed text-charcoal">
                CAIRNOX applies that idea to performance. The athlete has a direction. Training
                provides the structure. Each session adds another layer.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid border-y border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {cairnPrinciples.map((principle, index) => (
              <li
                key={principle.number}
                className={`flex min-h-64 flex-col justify-between border-b border-ink py-8 last:border-b-0 sm:px-7 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index > 1 ? "sm:border-b-0" : ""} ${
                  index === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-7"
                } lg:border-b-0`}
              >
                <p className="type-eyebrow text-mineral">{principle.number}</p>
                <div className="mt-16">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] uppercase">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-[0.98rem] leading-relaxed text-charcoal">
                    {principle.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-3xl text-[0.78rem] font-bold leading-relaxed tracking-[0.11em] text-mineral uppercase">
            Geology / Terrain / Permanence / Navigation — a Scottish influence expressed through
            structure, not symbolism.
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="layers-title" spacing="large">
        <Container>
          <Eyebrow className="text-moss">Foundation → Progression → Performance</Eyebrow>
          <SectionHeading id="layers-title" className="mt-6 max-w-[14ch]">
            Each layer depends on the one before it.
          </SectionHeading>

          <ol className="mt-16 border-t border-ink lg:mt-24">
            {layers.map((layer) => (
              <li
                key={layer.number}
                className="grid gap-8 border-b border-ink py-10 sm:py-12 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-14"
              >
                <p className="type-eyebrow text-mineral lg:col-span-1">{layer.number}</p>
                <h3 className="text-[clamp(2rem,4.2vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] lg:col-span-4">
                  {layer.title}
                </h3>
                <p className="text-xl font-semibold tracking-[-0.02em] lg:col-span-3">
                  {layer.expression}
                </p>
                <p className="max-w-xl text-[1.02rem] leading-relaxed text-charcoal lg:col-span-4">
                  {layer.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="accumulation-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-stone">Performance is accumulated</Eyebrow>
              <SectionHeading id="accumulation-title" className="mt-6 max-w-[14ch]">
                One session is not the outcome.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.08rem] leading-relaxed text-stone-light lg:col-span-4 lg:pb-1">
              A single session rarely changes performance in isolation. Development comes from what
              is repeated across days, weeks, training blocks and seasons.
            </p>
          </div>

          <ol className="mt-16 border-y border-white/30 lg:mt-24 lg:grid lg:grid-cols-5">
            {accumulation.map((item, index) => (
              <li
                key={item}
                className={`relative flex min-h-40 items-end border-b border-white/30 py-7 last:border-b-0 lg:min-h-56 lg:border-b-0 lg:px-7 lg:py-9 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <div>
                  <p className="type-eyebrow text-stone">0{index + 1}</p>
                  <h3 className="mt-12 text-[clamp(1.5rem,2.2vw,2.4rem)] font-semibold tracking-[-0.035em] uppercase">
                    {item}
                  </h3>
                </div>
                {index < accumulation.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-1 bottom-7 text-xl text-stone lg:-right-3 lg:bottom-auto lg:top-1/2 lg:z-10 lg:-translate-y-1/2"
                  >
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="text-[clamp(1.6rem,3vw,3rem)] font-medium leading-tight tracking-[-0.04em] lg:col-span-5">
              Every session adds a layer.
            </p>
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-stone-light lg:col-span-6 lg:col-start-7">
              The quality of each layer matters. So does how each layer connects to what came before
              and what needs to happen next.
            </p>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="pillars-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">What CAIRNOX considers</Eyebrow>
              <SectionHeading id="pillars-title" className="mt-6 max-w-[16ch]">
                Physical development needs more than exercise selection.
              </SectionHeading>
            </div>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-charcoal lg:col-span-4 lg:pb-1">
              These four areas operate as one connected methodology: preparing the athlete, planning
              the work, understanding the response and developing capacity over time.
            </p>
          </div>

          <ol className="mt-16 grid border-t border-ink sm:grid-cols-2 lg:mt-24">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.number}
                className={`min-h-72 border-b border-ink py-9 sm:px-9 lg:min-h-80 lg:py-11 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{pillar.number}</p>
                <h3 className="mt-16 max-w-[20ch] text-[clamp(1.45rem,2.4vw,2.6rem)] font-semibold leading-tight tracking-[-0.035em] uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-charcoal">
                  {pillar.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="context-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The programme does not exist in isolation</Eyebrow>
              <SectionHeading id="context-title" className="mt-6 max-w-[12ch]">
                Start with the demands.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-5">
              The same training solution does not fit every athlete, sport or moment in the season.
              Physical preparation has to account for what the athlete is preparing for and what
              already exists around them.
            </BodyCopy>
          </div>

          <ol className="mt-16 grid border-t border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {contextFactors.map((factor, index) => (
              <li
                key={factor.number}
                className={`flex min-h-60 flex-col justify-between border-b border-ink py-8 sm:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-8"}`}
              >
                <p className="type-eyebrow text-mineral">{factor.number}</p>
                <div className="mt-14">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] uppercase">{factor.title}</h3>
                  <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-charcoal">
                    {factor.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="progression-title" spacing="large">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-light">
                <Image
                  src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-performance-coach-equipment.jpg")}
                  alt="Mathew Skyner carrying training equipment in a USA Cricket performance environment"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_42%] saturate-[0.9] contrast-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase">
                Preparation / delivery / review
              </figcaption>
            </figure>

            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The work has to connect</Eyebrow>
              <SectionHeading id="progression-title" className="mt-6 max-w-[13ch]">
                Train today for what needs to exist tomorrow.
              </SectionHeading>
              <BodyCopy className="mt-8 max-w-2xl text-charcoal">
                Good programming is not a collection of difficult sessions. Each stage should
                contribute to the next, creating a logical progression rather than isolated training
                stress.
              </BodyCopy>
            </div>
          </div>

          <ol className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-5">
            {progression.map((step, index) => (
              <li
                key={step}
                className={`relative flex min-h-40 flex-col justify-between border-b border-ink py-7 last:border-b-0 lg:min-h-56 lg:border-b-0 lg:px-7 lg:py-9 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-mineral">0{index + 1}</p>
                <h3 className="mt-12 max-w-[16ch] text-lg font-semibold leading-tight tracking-[-0.02em] uppercase">
                  {step}
                </h3>
                {index < progression.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-1 bottom-7 text-lg text-mineral lg:-right-3 lg:bottom-auto lg:top-1/2 lg:z-10 lg:-translate-y-1/2"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-3xl text-[0.8rem] leading-relaxed text-mineral">
            A general methodology for connecting decisions over time—not a fixed testing protocol.
          </p>
        </Container>
      </Section>

      <Section
        id="applications"
        aria-labelledby="applications-title"
        tone="dark"
        spacing="large"
        className="scroll-mt-24"
      >
        <Container>
          <Eyebrow className="text-stone">One system. Three ways to apply it.</Eyebrow>
          <SectionHeading id="applications-title" className="mt-6 max-w-[13ch]">
            The method scales with the need.
          </SectionHeading>

          <div className="mt-16 grid border-y border-white/30 lg:mt-24 lg:grid-cols-3">
            {applications.map((application, index) => (
              <article
                key={application.title}
                className={`flex min-h-[34rem] flex-col border-b border-white/30 py-10 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-12 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-stone">{application.number}</p>
                <h3 className="mt-12 text-[clamp(2.4rem,4vw,4.25rem)] font-semibold leading-none tracking-[-0.05em]">
                  {application.title}
                </h3>
                <p className="mt-8 text-xl font-semibold tracking-[-0.02em]">{application.role}</p>
                <p className="mt-4 max-w-sm text-[1rem] leading-relaxed text-stone-light">
                  {application.copy}
                </p>
                <p className="mt-8 text-[0.8rem] font-bold tracking-[0.09em] text-stone uppercase">
                  {application.expression}
                </p>
                <div className="mt-auto pt-10">
                  <ArrowLink href={application.href}>{application.cta}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="sports-title" tone="muted" spacing="large">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-rugby-coaching-night-ball.jpg")}
                alt="Mathew Skyner holding a rugby ball on a field at night"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center saturate-[0.9] contrast-[1.04]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase">
              Real environments / principles adapted to context
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <Eyebrow className="text-moss">Principles across performance environments</Eyebrow>
            <SectionHeading id="sports-title" className="mt-6 max-w-[14ch]">
              The sport changes. The need for structure doesn&apos;t.
            </SectionHeading>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal">
              Mathew Skyner&apos;s experience spans professional rugby, USA Cricket, PSA Squash, British
              Cycling, professional soccer and NCAA programmes. Each environment creates different
              physical and competitive demands, reinforcing the importance of adapting performance
              principles to context rather than relying on a single template.
            </p>

            <ul className="mt-12 grid border-t border-ink sm:grid-cols-2">
              {sports.map((sport, index) => (
                <li
                  key={sport}
                  className={`border-b border-ink py-6 text-[0.82rem] font-bold tracking-[0.1em] uppercase sm:px-6 ${
                    index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                  }`}
                >
                  {sport}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="final-method-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Choose how you build</Eyebrow>
              <SectionHeading id="final-method-title" className="mt-6 max-w-[13ch]">
                Start with the layer you need.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                The CAIRNOX philosophy stays consistent. The level of support changes depending on
                where you are and what you need from the system.
              </BodyCopy>
              <ButtonLink href="/contact" className="mt-8">
                Work with Mathew
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="CAIRNOX service pathways" className="mt-16 border-y border-ink lg:mt-24">
            {finalPaths.map((path) => (
              <div
                key={path.label}
                className="grid gap-4 border-b border-ink py-7 last:border-b-0 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center sm:gap-8"
              >
                <p className="text-2xl font-semibold tracking-[-0.03em]">{path.label}</p>
                <p className="text-[1rem] text-charcoal">{path.descriptor}</p>
                <ArrowLink href={path.href}>Explore {path.label}</ArrowLink>
              </div>
            ))}
          </nav>
        </Container>
      </Section>
    </main>
  );
}
