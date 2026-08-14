import Image from "next/image";
import { AmbientVideo } from "@/components/home/ambient-video";
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

const consultancyPrinciples = [
  {
    number: "01",
    title: "Understand the environment",
    copy: "Start with the demands, constraints, people and existing performance processes.",
  },
  {
    number: "02",
    title: "Build the structure",
    copy: "Create practical systems that support clearer planning and delivery.",
  },
  {
    number: "03",
    title: "Support the people",
    copy: "Help coaches and staff apply the system within the realities of their environment.",
  },
] as const;

const environmentAreas = [
  "Physical development",
  "Training load",
  "Competition",
  "Monitoring",
  "Recovery",
  "Staff alignment",
] as const;

const consultancyAreas = [
  {
    number: "01",
    title: "Physical development systems",
    copy: "Review and structure how physical qualities are developed across athletes or groups.",
  },
  {
    number: "02",
    title: "Load management",
    copy: "Improve how training and competition demands are considered when planning physical work.",
  },
  {
    number: "03",
    title: "Seasonal planning",
    copy: "Create clearer physical-development structure around the competitive calendar.",
  },
  {
    number: "04",
    title: "Athlete monitoring",
    copy: "Support practical approaches to collecting and using information about athlete response and workload.",
  },
  {
    number: "05",
    title: "Programme review",
    copy: "Review existing physical-preparation processes and identify areas for improvement.",
  },
  {
    number: "06",
    title: "Coach & staff development",
    copy: "Support coaches and practitioners in understanding and applying physical-development principles.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Understand",
    copy: "Establish the organisation's current environment, goals, constraints and existing performance processes.",
  },
  {
    number: "02",
    title: "Design",
    copy: "Develop practical recommendations, systems or frameworks aligned to the environment.",
  },
  {
    number: "03",
    title: "Implement",
    copy: "Support coaches and staff in translating the work into practice.",
  },
  {
    number: "04",
    title: "Review",
    copy: "Evaluate how the system is operating and refine where appropriate.",
  },
] as const;

const isolated = [
  "Individual sessions",
  "Disconnected information",
  "Reactive changes",
  "Unclear ownership",
] as const;

const connected = [
  "Clear planning",
  "Shared understanding",
  "Useful monitoring",
  "Deliberate adaptation",
] as const;

const deliveryModels = [
  {
    number: "01",
    title: "Project",
    copy: "Focused work around a defined performance challenge, system or review.",
  },
  {
    number: "02",
    title: "Advisory",
    copy: "Ongoing consultancy and support over a longer period.",
  },
  {
    number: "03",
    title: "Hybrid",
    copy: "A combination of remote work and in-person delivery where appropriate.",
  },
] as const;

const audiences = [
  {
    number: "01",
    title: "Coaches",
    copy: "Seeking stronger physical-development structure around their athletes.",
  },
  {
    number: "02",
    title: "Schools & academies",
    copy: "Building or refining long-term athlete-development processes.",
  },
  {
    number: "03",
    title: "Clubs",
    copy: "Looking to improve physical preparation, workload planning or performance systems.",
  },
  {
    number: "04",
    title: "Sporting organisations",
    copy: "Seeking practitioner-led support around wider physical-performance strategy.",
  },
] as const;

export function ApexPage() {
  return (
    <main id="main-content" className="apex-page">
      <section aria-labelledby="apex-hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-center py-14 sm:py-20 lg:col-span-7 lg:min-h-[47rem] lg:py-24 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">CAIRNOX APEX</Eyebrow>
            <DisplayHeading id="apex-hero-title" className="type-hero mt-7 max-w-[11ch] sm:mt-9">
              <span className="block">Build the{` `}</span>
              <span className="block">performance environment.</span>
            </DisplayHeading>
            <BodyCopy className="mt-8 max-w-[45rem] text-charcoal sm:mt-10">
              High-performance consultancy for coaches, schools, clubs and sporting organisations
              looking to improve how physical development is planned, monitored and delivered.
            </BodyCopy>
            <p className="mt-5 text-[0.82rem] font-bold tracking-[0.1em] text-mineral uppercase">
              Systems. Structure. Better performance decisions.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row sm:mt-11">
              <ButtonLink href="/contact/apex">Discuss a project</ButtonLink>
              <ButtonLink href="#how-apex-works" variant="secondary">
                How APEX works
              </ButtonLink>
            </div>
            <p className="mt-10 border-t border-line pt-4 text-[0.72rem] font-bold tracking-[0.12em] text-mineral uppercase sm:mt-14">
              Peak / Expertise systemised / High-performance consultancy
            </p>
          </div>

          <div className="pb-8 sm:pb-12 lg:col-span-5 lg:py-8">
            <AmbientVideo
              className="aspect-[9/14] min-h-[28rem] w-full sm:aspect-[4/3] sm:min-h-0 lg:aspect-[9/14] lg:h-full"
              src="/media/videos/mathew-team-coaching-usa-cricket.mp4"
              poster="/media/posters/mathew-team-coaching-usa-cricket.png"
              videoClassName="object-[50%_center] saturate-[0.88] contrast-[1.04]"
            />
            <p className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase lg:hidden">
              Team environment / coaching in practice
            </p>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="what-apex-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">High-performance consultancy</Eyebrow>
              <SectionHeading id="what-apex-title" className="mt-6 max-w-[14ch]">
                Expertise applied to the system.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-5">
              APEX works with the people responsible for developing athletes, helping performance
              environments create clearer structures around physical preparation, workload and
              long-term development.
            </BodyCopy>
          </div>

          <ol className="mt-14 grid border-y border-ink lg:mt-20 lg:grid-cols-3">
            {consultancyPrinciples.map((principle, index) => (
              <li
                key={principle.number}
                className={`min-h-[21rem] border-b border-ink py-9 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-11 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{principle.number}</p>
                <h3 className="mt-20 text-xl font-semibold tracking-[-0.02em] uppercase">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-charcoal">
                  {principle.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="environment-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-stone">Performance is never one variable</Eyebrow>
              <SectionHeading id="environment-title" className="mt-6 max-w-[15ch]">
                The athlete is shaped by the system around them.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-stone-light lg:col-span-4 lg:pb-1">
              Physical preparation does not sit in isolation. Training, competition, workload,
              recovery, monitoring and staff communication all influence how athletes are developed
              and supported.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-white/30 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {environmentAreas.map((area, index) => (
              <li
                key={area}
                className={`flex min-h-52 flex-col justify-between border-b border-white/30 py-8 sm:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                } ${index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-8"}`}
              >
                <p className="type-eyebrow text-stone">0{index + 1}</p>
                <h3 className="mt-16 text-[clamp(1.35rem,2vw,2rem)] font-semibold leading-tight tracking-[-0.03em] uppercase">
                  {area}
                </h3>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="consultancy-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Where APEX can support</Eyebrow>
              <SectionHeading id="consultancy-title" className="mt-6 max-w-[13ch]">
                Build better performance systems.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              Consultancy is shaped around the environment and the practical decisions its people
              need to make.
            </p>
          </div>

          <dl className="mt-14 grid border-t border-ink md:grid-cols-2 lg:mt-20">
            {consultancyAreas.map((area, index) => (
              <div
                key={area.number}
                className={`min-h-64 border-b border-ink py-9 md:px-9 ${
                  index % 2 === 1 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <dt className="grid grid-cols-[3rem_1fr] gap-3 text-[0.8rem] font-bold tracking-[0.1em] uppercase">
                  <span className="text-mineral">{area.number}</span>
                  <span>{area.title}</span>
                </dt>
                <dd className="mt-10 max-w-lg text-[1rem] leading-relaxed text-charcoal md:ml-[3.75rem]">
                  {area.copy}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section
        id="how-apex-works"
        aria-labelledby="process-title"
        tone="muted"
        spacing="large"
        className="scroll-mt-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">The consultancy process</Eyebrow>
              <SectionHeading id="process-title" className="mt-6 max-w-[15ch]">
                Understand. Design. Implement. Review.
              </SectionHeading>
            </div>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-charcoal lg:col-span-4 lg:pb-1">
              A typical approach, adapted to the scope and needs of each engagement.
            </p>
          </div>

          <ol className="mt-14 border-t border-ink lg:mt-20 lg:grid lg:grid-cols-4">
            {process.map((step, index) => (
              <li
                key={step.number}
                className={`grid min-h-64 grid-cols-[3rem_1fr] gap-3 border-b border-ink py-9 lg:block lg:min-h-[25rem] lg:px-8 lg:py-10 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{step.number}</p>
                <div className="lg:mt-28">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] uppercase">{step.title}</h3>
                  <p className="mt-5 max-w-sm text-[0.96rem] leading-relaxed text-charcoal">
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="systems-title" tone="dark" spacing="large">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <AmbientVideo
              className="aspect-[9/14] max-h-[45rem] w-full sm:aspect-[4/3] lg:aspect-[9/14]"
              src="/media/videos/apex-professional-cricket-environment.mp4"
              poster="/media/posters/apex-professional-cricket-environment.png"
              videoClassName="object-[50%_center] saturate-[0.86] contrast-[1.04]"
            />
            <p className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-stone uppercase">
              Professional environment / systems in context
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-7">
            <Eyebrow className="text-stone">From session to system</Eyebrow>
            <SectionHeading id="systems-title" className="mt-6 max-w-[14ch]">
              Good performance environments connect the work.
            </SectionHeading>
            <p className="mt-8 max-w-2xl text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-stone-light">
              A strong programme is only useful if it fits the wider environment. APEX considers how
              physical preparation interacts with schedules, coaching practice, competition
              demands, athlete monitoring and staff decision-making.
            </p>

            <div className="mt-12 border-y border-white/30 sm:grid sm:grid-cols-2">
              <div className="border-b border-white/30 py-8 sm:border-r sm:border-b-0 sm:pr-8">
                <p className="type-eyebrow text-stone">Isolated</p>
                <ul className="mt-6">
                  {isolated.map((item) => (
                    <li key={item} className="border-t border-white/20 py-3.5 text-[0.98rem] text-stone-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 sm:pl-8">
                <p className="type-eyebrow text-stone">Connected</p>
                <ul className="mt-6">
                  {connected.map((item) => (
                    <li key={item} className="border-t border-white/20 py-3.5 text-[0.98rem] text-stone-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="delivery-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Built around the engagement</Eyebrow>
              <SectionHeading id="delivery-title" className="mt-6 max-w-[13ch]">
                Support that fits the environment.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              Consultancy scope and delivery vary according to the work, the organisation and the
              people involved.
            </p>
          </div>

          <ol className="mt-14 grid border-y border-ink lg:mt-20 lg:grid-cols-3">
            {deliveryModels.map((model, index) => (
              <li
                key={model.number}
                className={`min-h-[21rem] border-b border-ink py-9 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-11 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{model.number}</p>
                <h3 className="mt-24 text-2xl font-semibold tracking-[-0.03em] uppercase">
                  {model.title}
                </h3>
                <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-charcoal">{model.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="experience-title" tone="muted" spacing="large">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="relative aspect-[4/5] overflow-hidden bg-charcoal lg:col-span-5">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-team-training.jpg")}
              alt="Mathew Skyner observing athletes during a USA Cricket training session"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center saturate-[0.9] contrast-[1.03]"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
            <Eyebrow className="text-moss">Built from experience inside performance environments</Eyebrow>
            <SectionHeading id="experience-title" className="mt-6 max-w-[15ch]">
              Practitioner experience, applied to the organisation.
            </SectionHeading>
            <BodyCopy className="mt-8 text-charcoal">
              CAIRNOX is led by Mathew Skyner, whose experience spans professional rugby, USA
              Cricket, PSA Squash, British Cycling, professional soccer and NCAA programmes. APEX
              applies that practitioner perspective to the structures surrounding athlete
              development.
            </BodyCopy>
            <ArrowLink href="/about" className="mt-9">
              About Mathew
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="audience-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">Who we work with</Eyebrow>
              <SectionHeading id="audience-title" className="mt-6 max-w-[15ch]">
                For the people responsible for developing athletes.
              </SectionHeading>
            </div>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-charcoal lg:col-span-4 lg:pb-1">
              APEX is designed for performance decision-makers working across athlete-development
              environments.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-ink md:grid-cols-2 lg:mt-20">
            {audiences.map((audience, index) => (
              <li
                key={audience.number}
                className={`min-h-56 border-b border-ink py-9 md:px-9 ${
                  index % 2 === 1 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{audience.number}</p>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.02em] uppercase">
                  {audience.title}
                </h3>
                <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-charcoal">
                  {audience.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="engagement-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Start with the environment</Eyebrow>
              <SectionHeading id="engagement-title" className="mt-6 max-w-[14ch]">
                Let&apos;s understand what you&apos;re trying to build.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-xl text-lg leading-relaxed text-charcoal">
                APEX engagements begin with the performance problem, the environment and the people
                involved. Start a conversation about where CAIRNOX may be able to support your
                organisation.
              </p>
              <div className="mt-8 flex flex-col items-start gap-5 min-[440px]:flex-row min-[440px]:items-center">
                <ButtonLink href="/contact/apex">Discuss a project</ButtonLink>
                <ArrowLink href="/about">About CAIRNOX</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
