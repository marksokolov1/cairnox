import Image from "next/image";
import { AmbientVideo } from "@/components/home/ambient-video";
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

const commercialModel = [
  {
    number: "01",
    title: "One-time purchase",
    copy: "No ongoing coaching commitment.",
  },
  {
    number: "02",
    title: "Structured programming",
    copy: "Training organised around clear physical-development objectives.",
  },
  {
    number: "03",
    title: "Independent delivery",
    copy: "Follow the programme around your own training environment and schedule.",
  },
] as const;

const foundationPillars = [
  {
    number: "01",
    title: "Strength",
    copy: "Build the force-producing qualities performance depends upon.",
  },
  {
    number: "02",
    title: "Power",
    copy: "Develop the ability to express force quickly and athletically.",
  },
  {
    number: "03",
    title: "Conditioning",
    copy: "Build the capacity to repeatedly meet the physical demands of training and competition.",
  },
] as const;

const progression = [
  {
    number: "01",
    title: "Foundation",
    copy: "Establish the physical base required for later work.",
  },
  {
    number: "02",
    title: "Develop",
    copy: "Progress the qualities relevant to performance.",
  },
  {
    number: "03",
    title: "Build",
    copy: "Increase training challenge as capacity improves.",
  },
  {
    number: "04",
    title: "Express",
    copy: "Bring developed qualities together into stronger athletic outputs.",
  },
] as const;

const systemElements = [
  {
    number: "01",
    title: "Structured training programme",
    copy: "A complete performance programme with progressive training structure.",
  },
  {
    number: "02",
    title: "Strength, power & conditioning",
    copy: "Integrated development rather than isolated workouts.",
  },
  {
    number: "03",
    title: "Exercise guidance",
    copy: "Clear instruction designed to make the programme practical to follow independently.",
  },
  {
    number: "04",
    title: "Performance education",
    copy: "Supporting information designed to help athletes understand the principles behind the work.",
  },
  {
    number: "05",
    title: "Supporting resources",
    copy: "Selected CAIRNOX ebooks and resources complement the programme.",
  },
  {
    number: "06",
    title: "Progression framework",
    copy: "Training is structured to develop over time rather than remain static.",
  },
] as const;

const audiences = [
  {
    number: "01",
    title: "Competitive athletes",
    copy: "Athletes who want organised physical preparation alongside sport.",
  },
  {
    number: "02",
    title: "Aspiring professionals",
    copy: "Performers looking to establish stronger training structure.",
  },
  {
    number: "03",
    title: "Independent trainers",
    copy: "Athletes capable of training independently but seeking better programming.",
  },
  {
    number: "04",
    title: "Highly motivated performers",
    copy: "Individuals who want serious performance programming rather than generic fitness plans.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Choose",
    copy: "Select the BASE programme that best matches your training objective and context.",
  },
  {
    number: "02",
    title: "Follow",
    copy: "Work through the structured programme independently.",
  },
  {
    number: "03",
    title: "Progress",
    copy: "Build physical qualities through deliberate progression over time.",
  },
] as const;

const baseComparison = [
  "Structured programme",
  "Independent training",
  "One-time purchase",
  "Expert direction without ongoing personal coaching",
] as const;

const elevateComparison = [
  "Personalised programme",
  "Ongoing direct support",
  "Adaptation around sport and schedule",
  "Coaching that responds continually to the individual",
] as const;

export function BasePage() {
  return (
    <main id="main-content" className="base-page">
      <section aria-labelledby="base-hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-center py-14 sm:py-20 lg:col-span-7 lg:min-h-[47rem] lg:py-24 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">CAIRNOX BASE</Eyebrow>
            <DisplayHeading id="base-hero-title" className="type-hero mt-7 sm:mt-9">
              <span className="block">Build the{` `}</span>
              <span className="block">foundation.</span>
            </DisplayHeading>
            <BodyCopy className="mt-8 max-w-[43rem] text-charcoal sm:mt-10">
              Structured strength, power and conditioning programmes for athletes who want expert
              programming and a clear system to follow independently.
            </BodyCopy>
            <p className="mt-5 text-[0.82rem] font-bold tracking-[0.1em] text-mineral uppercase">
              One purchase. A complete performance programme. Built to progress.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row sm:mt-11">
              <ButtonLink href="#programmes">View programmes</ButtonLink>
              <ButtonLink href="#how-base-works" variant="secondary">
                How BASE works
              </ButtonLink>
            </div>
            <p className="mt-10 border-t border-line pt-4 text-[0.72rem] font-bold tracking-[0.12em] text-mineral uppercase sm:mt-14">
              Expert programming / Clear progression / Independence
            </p>
          </div>

          <div className="pb-8 sm:pb-12 lg:col-span-5 lg:py-8">
            <AmbientVideo
              className="aspect-[9/14] min-h-[28rem] w-full sm:aspect-[4/3] sm:min-h-0 lg:aspect-[9/14] lg:h-full"
              src="/media/videos/base-explosive-power-usa-cricket-gym.mp4"
              poster="/media/posters/base-explosive-power-usa-cricket-gym.png"
              videoClassName="object-[50%_center] saturate-[0.88] contrast-[1.04]"
            />
            <p className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase lg:hidden">
              Physical preparation / explosive power
            </p>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="what-base-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The CAIRNOX entry point</Eyebrow>
              <SectionHeading id="what-base-title" className="mt-6 max-w-[13ch]">
                The system, in your hands.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-5">
              BASE takes the principles behind CAIRNOX performance coaching and turns them into
              structured programmes athletes can follow independently.
            </BodyCopy>
          </div>

          <ol className="mt-14 grid border-y border-ink lg:mt-20 lg:grid-cols-3">
            {commercialModel.map((item, index) => (
              <li
                key={item.number}
                className={`min-h-56 border-b border-ink py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:py-10 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{item.number}</p>
                <h3 className="mt-9 text-xl font-semibold tracking-[-0.02em] uppercase">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-[0.96rem] leading-relaxed text-charcoal">{item.copy}</p>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-[26ch] text-[clamp(1.8rem,3vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] lg:mt-16">
            BASE gives the athlete the system.
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="foundation-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Build from what matters</Eyebrow>
              <SectionHeading id="foundation-title" className="mt-6 max-w-[13ch]">
                Performance needs a foundation.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              BASE develops physical qualities that support athletic performance through connected,
              progressive training rather than a collection of random workouts.
            </p>
          </div>

          <ol className="mt-14 grid border-y border-ink lg:mt-20 lg:grid-cols-3">
            {foundationPillars.map((pillar, index) => (
              <li
                key={pillar.number}
                className={`flex min-h-[23rem] flex-col border-b border-ink py-9 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-11 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{pillar.number}</p>
                <h3 className="mt-auto pt-20 text-[clamp(2.5rem,4vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-sm text-[1rem] leading-relaxed text-charcoal">{pillar.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="construction-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Structured progression</Eyebrow>
              <SectionHeading id="construction-title" className="mt-6 max-w-[14ch]">
                Built to progress, not just to be completed.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-5 lg:pt-1">
              A programme should do more than tell an athlete what to do today. BASE is designed
              around progression across the complete training process.
            </BodyCopy>
          </div>

          <ol className="mt-14 border-t border-ink lg:mt-20 lg:grid lg:grid-cols-4">
            {progression.map((stage, index) => (
              <li
                key={stage.number}
                className={`grid min-h-56 grid-cols-[3rem_1fr] gap-3 border-b border-ink py-8 lg:block lg:min-h-[22rem] lg:px-7 lg:py-9 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{stage.number}</p>
                <div className="lg:mt-24">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] uppercase">{stage.title}</h3>
                  <p className="mt-4 max-w-xs text-[0.96rem] leading-relaxed text-charcoal">
                    {stage.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="receive-title" tone="dark" spacing="large">
        <Container>
          <Eyebrow className="text-stone">The complete BASE system</Eyebrow>
          <SectionHeading id="receive-title" className="mt-6 max-w-[13ch]">
            More than a list of exercises.
          </SectionHeading>

          <dl className="mt-14 grid border-t border-white/30 md:grid-cols-2 lg:mt-20">
            {systemElements.map((item, index) => (
              <div
                key={item.number}
                className={`min-h-56 border-b border-white/30 py-8 md:px-8 ${
                  index % 2 === 1 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <dt className="grid grid-cols-[2.75rem_1fr] gap-3 text-[0.8rem] font-bold tracking-[0.1em] uppercase">
                  <span className="text-stone">{item.number}</span>
                  <span>{item.title}</span>
                </dt>
                <dd className="mt-8 max-w-lg text-[1rem] leading-relaxed text-stone-light md:ml-[3.5rem]">
                  {item.copy}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section aria-labelledby="who-for-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Built for independent athletes</Eyebrow>
              <SectionHeading id="who-for-title" className="mt-6 max-w-[13ch]">
                Expert structure. Your execution.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              BASE is for serious performers who want better direction and are ready to take
              responsibility for the work.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-ink md:grid-cols-2 lg:mt-20">
            {audiences.map((audience, index) => (
              <li
                key={audience.number}
                className={`min-h-56 border-b border-ink py-8 md:px-8 ${
                  index % 2 === 1 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{audience.number}</p>
                <h3 className="mt-9 text-xl font-semibold tracking-[-0.02em] uppercase">
                  {audience.title}
                </h3>
                <p className="mt-4 max-w-lg text-[0.96rem] leading-relaxed text-charcoal">
                  {audience.copy}
                </p>
              </li>
            ))}
          </ol>

          <aside className="mt-14 border-y border-ink py-9 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-12">
            <div className="lg:col-span-5">
              <Eyebrow className="text-mineral">BASE may not be right for you if...</Eyebrow>
              <p className="mt-6 max-w-[17ch] text-[clamp(1.65rem,2.6vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                Your training needs to keep adapting around you.
              </p>
            </div>
            <div className="mt-9 lg:col-span-7 lg:mt-0">
              <p className="text-[0.78rem] font-bold tracking-[0.11em] uppercase">You need</p>
              <ul className="mt-4 border-t border-line">
                {[
                  "Individual programme adaptation",
                  "Ongoing direct communication",
                  "Detailed competition-schedule management",
                  "Highly personalised coaching",
                ].map((need) => (
                  <li key={need} className="border-b border-line py-3.5 text-[0.98rem] text-charcoal">
                    {need}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-lg font-semibold">That is what ELEVATE is built for.</p>
              <ArrowLink href="/elevate" className="mt-6">
                Explore ELEVATE
              </ArrowLink>
            </div>
          </aside>
        </Container>
      </Section>

      <Section
        id="how-base-works"
        aria-labelledby="process-title"
        tone="muted"
        spacing="large"
        className="scroll-mt-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Simple to start. Structured to follow.</Eyebrow>
              <SectionHeading id="process-title" className="mt-6 max-w-[14ch]">
                Your programme. Your training. Clear direction.
              </SectionHeading>
            </div>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              A direct route from selecting the right programme to progressing through the work.
            </p>
          </div>

          <ol className="mt-14 grid border-y border-ink lg:mt-20 lg:grid-cols-3">
            {process.map((step, index) => (
              <li
                key={step.number}
                className={`min-h-[22rem] border-b border-ink py-9 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-11 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{step.number}</p>
                <h3 className="mt-24 text-2xl font-semibold tracking-[-0.03em] uppercase">{step.title}</h3>
                <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-charcoal">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="experience-title" spacing="large">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="relative aspect-[4/3] overflow-hidden bg-charcoal lg:col-span-5 lg:aspect-[5/4]">
            <Image
              src="/media/images/mathew-skyner-active-rugby-coaching.jpg"
              alt="Mathew Skyner actively coaching during an outdoor rugby training session"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[52%_center] saturate-[0.9] contrast-[1.03]"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-7">
            <Eyebrow className="text-moss">Built from high-performance experience</Eyebrow>
            <SectionHeading id="experience-title" className="mt-6 max-w-[15ch]">
              Programming shaped by the environments that demand it.
            </SectionHeading>
            <BodyCopy className="mt-8 text-charcoal">
              CAIRNOX is led by Mathew Skyner, whose experience spans professional rugby, USA
              Cricket, PSA Squash, British Cycling, professional soccer and NCAA programmes. BASE
              translates that performance experience into structured programming athletes can
              access independently.
            </BodyCopy>
            <ArrowLink href="/about" className="mt-9">
              About Mathew
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="comparison-title" tone="muted" spacing="large">
        <Container>
          <Eyebrow className="text-moss">Choose the level of support you need</Eyebrow>
          <SectionHeading id="comparison-title" className="mt-6 max-w-[13ch]">
            The system or the coaching.
          </SectionHeading>

          <div className="mt-14 border-y border-ink lg:mt-20 lg:grid lg:grid-cols-2">
            <article className="border-b border-ink py-10 lg:min-h-[34rem] lg:border-r lg:border-b-0 lg:pr-12 lg:py-12">
              <p className="type-eyebrow text-mineral">01 / Foundation</p>
              <h3 className="mt-8 text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                BASE
              </h3>
              <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">The system.</p>
              <ul className="mt-10 border-t border-line">
                {baseComparison.map((item) => (
                  <li key={item} className="border-b border-line py-3.5 text-[0.98rem] text-charcoal">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[0.75rem] font-bold tracking-[0.11em] uppercase">
                Current page / Performance Programmes
              </p>
            </article>

            <article className="py-10 lg:min-h-[34rem] lg:pl-12 lg:py-12">
              <p className="type-eyebrow text-mineral">02 / Progression</p>
              <h3 className="mt-8 text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                ELEVATE
              </h3>
              <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">The coaching.</p>
              <ul className="mt-10 border-t border-line">
                {elevateComparison.map((item) => (
                  <li key={item} className="border-b border-line py-3.5 text-[0.98rem] text-charcoal">
                    {item}
                  </li>
                ))}
              </ul>
              <ArrowLink href="/elevate" className="mt-8">
                Explore ELEVATE
              </ArrowLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section
        id="programmes"
        aria-labelledby="programmes-title"
        tone="dark"
        spacing="large"
        className="scroll-mt-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-stone">BASE programmes</Eyebrow>
              <SectionHeading id="programmes-title" className="mt-6 max-w-[13ch]">
                Structured for the work ahead.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[clamp(1.35rem,2vw,1.8rem)] font-medium leading-snug tracking-[-0.025em]">
                The first CAIRNOX BASE programmes are being prepared for release.
              </p>
              <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-stone-light">
                Programmes will focus on structured physical development across strength, power and
                conditioning, with clear guidance for athletes training independently.
              </p>
              <div className="mt-9 flex flex-col items-start gap-5 min-[440px]:flex-row min-[440px]:items-center">
                <ButtonLink href="/contact/base" variant="inverse">
                  Register interest
                </ButtonLink>
                <ArrowLink href="/elevate" className="text-canvas">
                  ELEVATE 1:1 coaching
                </ArrowLink>
              </div>
            </div>
          </div>

          <div className="mt-16 border-y border-white/30 py-6 lg:mt-24">
            <p className="type-eyebrow text-stone">Product catalogue / launch state</p>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="final-cta-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Start with the foundation</Eyebrow>
              <SectionHeading id="final-cta-title" className="mt-6 max-w-[12ch]">
                Build your first layer.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-xl text-lg leading-relaxed text-charcoal">
                BASE gives you the structure to train with purpose, progress deliberately and build
                the physical foundation performance depends upon.
              </p>
              <div className="mt-8 flex flex-col items-start gap-5 min-[440px]:flex-row min-[440px]:items-center">
                <ButtonLink href="/contact/base">Register interest</ButtonLink>
                <ArrowLink href="/elevate">Explore ELEVATE</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
