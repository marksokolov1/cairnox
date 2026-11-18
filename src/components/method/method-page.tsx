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
    copy: "The outcome of the work is the player's ability to perform within the cricket environment.",
  },
] as const;

const pillars = [
  {
    number: "01",
    title: "Physical preparation",
    copy: "Develop strength, power, conditioning and movement qualities relevant to cricket performance.",
  },
  {
    number: "02",
    title: "Performance planning",
    copy: "Structure training around the playing role, practice, matches, travel and the wider season.",
  },
  {
    number: "03",
    title: "Monitoring & adaptation",
    copy: "Use player response, workload and performance information to inform future training decisions.",
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
    title: "Playing role",
    copy: "The physical demands of batting, bowling, wicketkeeping or all-round performance.",
  },
  {
    number: "02",
    title: "Player",
    copy: "Current capacity, development needs and training history.",
  },
  {
    number: "03",
    title: "Schedule",
    copy: "Cricket practice, matches, travel and available training time.",
  },
  {
    number: "04",
    title: "Workload",
    copy: "The demands already being placed on the player.",
  },
  {
    number: "05",
    title: "Recovery",
    copy: "The player's ability to absorb and respond to training.",
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
    copy: "Structured cricket performance programmes players can follow independently.",
    expression: "Build the foundation.",
    cta: "Explore BASE",
    href: "/base",
  },
  {
    number: "02 / Progression",
    title: "ELEVATE",
    role: "The methodology personalised.",
    copy: "Individual cricket coaching adapted around the player, role and schedule.",
    expression: "Build around the athlete.",
    cta: "Explore ELEVATE",
    href: "/elevate",
  },
  {
    number: "03 / Peak",
    title: "APEX",
    role: "The methodology applied to the environment.",
    copy: "Consultancy supporting the systems surrounding cricket squads and player pathways.",
    expression: "Build the performance environment.",
    cta: "Explore APEX",
    href: "/apex",
  },
] as const;

const sports = [
  "USA Cricket",
  "Professional Rugby",
  "PSA Squash",
  "British Cycling",
  "Professional Soccer",
  "NCAA Programmes",
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
                Cricket performance is not created in one session. It is built through deliberate
                physical development repeated over time and structured around where the player needs
                to go.
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
                CAIRNOX applies that idea to cricket performance. The player has a direction.
                Training provides the structure. Each session adds another layer.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid border-y border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {cairnPrinciples.map((principle, index) => (
              <li
                key={principle.number}
                className={`border-b border-ink py-6 last:border-b-0 sm:px-7 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index > 1 ? "sm:border-b-0" : ""} ${
                  index === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-7"
                } lg:border-b-0`}
              >
                <p className="type-eyebrow text-mineral">{principle.number}</p>
                <div className="mt-4">
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
              These four areas operate as one connected cricket methodology: preparing the player,
              planning around the sport, understanding the response and developing capacity over time.
            </p>
          </div>

          <ol className="mt-16 grid border-t border-ink sm:grid-cols-2 lg:mt-24">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.number}
                className={`border-b border-ink py-6 sm:px-9 lg:py-8 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{pillar.number}</p>
                <h3 className="mt-4 max-w-[20ch] text-[clamp(1.45rem,2.4vw,2.6rem)] font-semibold leading-tight tracking-[-0.035em] uppercase">
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
              A fast bowler, batter, wicketkeeper and all-rounder do not require identical physical
              preparation. Decisions have to account for the player, role, current capacity, cricket
              schedule, workload, recovery, season phase and objective.
            </BodyCopy>
          </div>

          <ol className="mt-16 grid border-t border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {contextFactors.map((factor, index) => (
              <li
                key={factor.number}
                className={`border-b border-ink py-6 sm:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-8"}`}
              >
                <p className="type-eyebrow text-mineral">{factor.number}</p>
                <div className="mt-4">
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
                Performance builds across sessions, weeks, training blocks and seasons. Each stage
                develops what the next stage needs rather than adding work for its own sake.
              </BodyCopy>
            </div>
          </div>

          <ol className="mt-8 border-y border-ink lg:grid lg:grid-cols-5">
            {progression.map((step, index) => (
              <li
                key={step}
                className={`relative flex flex-col border-b border-ink py-7 last:border-b-0 lg:border-b-0 lg:px-7 lg:py-9 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-mineral">0{index + 1}</p>
                <h3 className="mt-4 max-w-[16ch] pr-7 text-lg font-semibold leading-tight tracking-[-0.02em] uppercase">
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

      <Section aria-labelledby="sports-title" tone="muted" spacing="large">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <figure className="lg:col-span-5">
              <div className="relative aspect-[3/2] overflow-hidden bg-charcoal">
                <Image
                  src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-athlete-conversation.jpg")}
                  alt="Mathew Skyner walking with a USA Cricket athlete during a training day"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_50%] saturate-[0.9] contrast-[1.04]"
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
              Cricket is the principal application of CAIRNOX. Mathew Skyner&apos;s USA Cricket
              performance-environment experience sits alongside professional rugby, PSA Squash,
              British Cycling, professional soccer and NCAA programmes. That wider background
              reinforces why cricket preparation must respond to the role, player and environment
              rather than rely on one template.
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

      <Section
        id="applications"
        aria-labelledby="applications-title"
        tone="dark"
        spacing="compact"
        className="scroll-mt-24"
      >
        <Container>
          <Eyebrow className="text-stone">One system. Three ways to apply it.</Eyebrow>
          <SectionHeading id="applications-title" className="mt-6 max-w-[13ch]">
            The method scales with the need.
          </SectionHeading>

          <div className="mt-8 grid border-y border-white/30 lg:grid-cols-3">
            {applications.map((application, index) => (
              <article
                key={application.title}
                className={`flex flex-col border-b border-white/30 py-10 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-12 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-stone">{application.number}</p>
                <h3 className="mt-6 text-[clamp(2.4rem,4vw,4.25rem)] font-semibold leading-none tracking-[-0.05em]">
                  {application.title}
                </h3>
                <p className="mt-4 text-xl font-semibold tracking-[-0.02em]">{application.role}</p>
                <p className="mt-4 max-w-sm text-[1rem] leading-relaxed text-stone-light">
                  {application.copy}
                </p>
                <p className="mt-8 text-[0.8rem] font-bold tracking-[0.09em] text-stone uppercase">
                  {application.expression}
                </p>
                <div className="mt-auto pt-6">
                  <ArrowLink href={application.href}>{application.cta}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
          <ArrowLink href="/contact" className="mt-7">Work with CAIRNOX</ArrowLink>
        </Container>
      </Section>

    </main>
  );
}
