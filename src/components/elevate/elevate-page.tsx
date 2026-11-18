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

const serviceElements = [
  {
    title: "Personalised programming",
    copy: "Training designed around the player's role, current needs, objectives and cricket context.",
  },
  {
    title: "Strength, power & conditioning",
    copy: "Development of the physical qualities required for performance.",
  },
  {
    title: "Ongoing programme adjustment",
    copy: "Training evolves as practice, matches, travel, demands and player response change.",
  },
  {
    title: "Direct coaching support",
    copy: "Ongoing communication and guidance rather than a static programme.",
  },
  {
    title: "Match & practice schedule management",
    copy: "Where relevant, physical preparation is structured around the player's cricket calendar.",
  },
  {
    title: "Nutrition support",
    copy: "Practical nutrition support within the appropriate coaching scope.",
  },
  {
    title: "Monitoring & feedback",
    copy: "Review training response and progression to guide future decisions.",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Understand",
    copy: "Establish the player's role, training history, schedule, objectives and physical demands.",
  },
  {
    number: "02",
    title: "Build",
    copy: "Create a personalised training structure around those needs.",
  },
  {
    number: "03",
    title: "Coach",
    copy: "Provide direct guidance, communication and support through the programme.",
  },
  {
    number: "04",
    title: "Monitor",
    copy: "Review training response, performance demands and changing circumstances.",
  },
  {
    number: "05",
    title: "Adapt",
    copy: "Adjust the programme as the player develops and the cricket environment changes.",
  },
] as const;

function TestimonialAttribution({ name }: { name: string }) {
  return (
    <footer className="mt-7 border-t border-current/20 pt-4">
      <p className="text-[0.78rem] font-bold tracking-[0.13em] uppercase">{name}</p>
      <p className="mt-1 text-[0.92rem] text-mineral">Professional Rugby</p>
    </footer>
  );
}

export function ElevatePage() {
  return (
    <main id="main-content" className="elevate-page">
      <section aria-labelledby="elevate-hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:min-h-[48rem] lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-center py-12 sm:py-20 lg:col-span-7 lg:py-24 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">CAIRNOX ELEVATE</Eyebrow>
            <p className="mt-5 text-[0.78rem] font-bold tracking-[0.11em] text-mineral uppercase">
              1:1 Cricket Performance Coaching
            </p>
            <DisplayHeading
              id="elevate-hero-title"
              className="mt-7 max-w-[13ch] text-[clamp(3rem,5.2vw,5.5rem)] leading-[0.94] sm:mt-9"
            >
              <span className="block">Cricket performance coaching</span>
              <span className="block">built around the player.</span>
            </DisplayHeading>
            <BodyCopy className="mt-8 max-w-[39rem] text-charcoal sm:mt-10">
              Individual physical preparation and performance management for cricketers who need
              training adapted around their role, schedule, season and development needs.
            </BodyCopy>
            <p className="mt-7 max-w-[39rem] border-t border-line pt-5 text-[0.96rem] font-semibold leading-relaxed text-charcoal sm:text-base">
              Personalised programming. Ongoing support. Physical preparation that evolves with you.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row sm:mt-11">
              <ButtonLink href="/contact/elevate">Apply for ELEVATE</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                How it works
              </ButtonLink>
            </div>
          </div>

          <div className="py-0 lg:col-span-5 lg:py-8">
            <AmbientVideo
              className="aspect-[9/14] min-h-[32rem] w-full lg:h-full lg:min-h-0"
              src="/media/videos/elevate-individual-power-training.mp4"
              poster="/media/posters/elevate-individual-power-training.png"
              videoClassName="object-[center_52%] scale-[1.02] saturate-[0.9] contrast-[1.03]"
            />
            <p className="mt-3 pb-5 text-[0.7rem] font-bold tracking-[0.11em] text-mineral uppercase lg:pb-0">
              Individual preparation / explosive power
            </p>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="comparison-title" tone="muted" spacing="compact">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">When programming needs to become personal</Eyebrow>
              <SectionHeading id="comparison-title" className="mt-6 max-w-[13ch]">
                The system adapts to you.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              ELEVATE is for competitive cricketers, including professional and aspiring players, who need
              direct coaching rather than a fixed programme they follow independently.
            </p>
          </div>

          <div className="mt-8 grid border-y border-ink lg:grid-cols-2">
            <article className="py-9 lg:pr-12 lg:py-12">
              <p className="type-eyebrow text-mineral">01 / BASE</p>
              <h3 className="mt-8 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-none tracking-[-0.05em]">
                The player follows the programme.
              </h3>
              <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-charcoal">
                Structured independent performance programming.
              </p>
            </article>
            <article className="border-t border-ink py-9 lg:border-t-0 lg:border-l lg:py-12 lg:pl-12">
              <p className="type-eyebrow text-mineral">02 / ELEVATE</p>
              <h3 className="mt-8 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-none tracking-[-0.05em]">
                The programme follows the player.
              </h3>
              <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-charcoal">
                Training is adapted around playing role, practice and match schedule, season phase,
                current physical needs, training response and development priorities.
              </p>
            </article>
          </div>

          <p className="mt-12 max-w-[30ch] text-[clamp(1.65rem,3vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] lg:mt-16">
            BASE gives the player the system. ELEVATE adapts the system around the player.
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="includes-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-stone">The coaching service</Eyebrow>
              <SectionHeading id="includes-title" className="mt-6 max-w-[13ch]">
                More than a training plan.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-stone-light lg:col-span-5 lg:pb-1">
              ELEVATE is an ongoing coaching relationship. Programming, communication and adjustment
              work together as the player and cricket demands change.
            </p>
          </div>

          <dl className="mt-14 grid border-t border-white/30 sm:grid-cols-2 lg:mt-20">
            {serviceElements.map((item, index) => (
              <div
                key={item.title}
                className={`border-b border-white/30 py-6 sm:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                }`}
              >
                <p className="type-eyebrow text-stone">{String(index + 1).padStart(2, "0")}</p>
                <dt className="mt-4 text-lg font-semibold tracking-[-0.015em] uppercase">
                  {item.title}
                </dt>
                <dd className="mt-4 max-w-md text-[0.96rem] leading-relaxed text-stone-light">
                  {item.copy}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section
        id="how-it-works"
        aria-labelledby="process-title"
        spacing="large"
        className="scroll-mt-28"
      >
        <Container>
          <Eyebrow className="text-moss">The process</Eyebrow>
          <SectionHeading id="process-title" className="mt-6 max-w-[14ch]">
            Structure that evolves with you.
          </SectionHeading>
          <BodyCopy className="mt-8 max-w-2xl text-charcoal">
              Mathew builds your physical preparation around your playing role, practice, matches and travel,
              then adjusts it as your workload and recovery change. This is physical preparation,
              not technical batting or bowling coaching.
          </BodyCopy>

          <ol className="mt-14 border-t border-ink lg:mt-20 lg:grid lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                className={`border-b border-ink py-8 lg:border-b-0 lg:px-7 lg:py-10 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-charcoal">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="founder-proof-title" spacing="large">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <figure className="relative aspect-[4/3] overflow-hidden bg-charcoal lg:col-span-5 lg:aspect-[5/4]">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-individual-resistance-coaching.jpg")}
              alt="Mathew Skyner coaching a USA Cricket athlete during individual resistance training"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[52%_center] saturate-[0.92] contrast-[1.03]"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <Eyebrow className="text-moss">Direct coaching with Mathew Skyner</Eyebrow>
            <SectionHeading id="founder-proof-title" className="mt-6 max-w-[13ch]">
              Experience applied to the individual.
            </SectionHeading>
            <p className="mt-8 max-w-2xl text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-charcoal">
              ELEVATE is delivered directly by Mathew. His USA Cricket performance-environment
              experience leads the work, supported by experience across professional rugby, PSA
              Squash, British Cycling, professional soccer and NCAA programmes. The approach is built
              around the individual cricketer rather than a fixed template.
            </p>
            <ArrowLink href="/about" className="mt-9">
              About Mathew
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="elevate-testimonials-title" tone="muted" spacing="large">
        <Container>
          <Eyebrow className="text-moss">Athlete proof</Eyebrow>
          <SectionHeading id="elevate-testimonials-title" className="mt-6 max-w-[12ch]">
            Built through the work.
          </SectionHeading>

          <div className="mt-14 grid border-y border-ink lg:grid-cols-12">
            <blockquote className="flex flex-col py-10 lg:col-span-7 lg:min-h-[31rem] lg:pr-14 lg:py-14">
              <p className="max-w-[24ch] text-[clamp(1.65rem,3vw,3rem)] font-medium leading-[1.12] tracking-[-0.04em]">
                “Thank you for everything you&apos;ve done for me and my career since you&apos;ve been at
                OG. I absolutely would not be in the place I&apos;m in if it wasn&apos;t for your guidance
                and friendship over the last three years.”
              </p>
              <TestimonialAttribution name="KoiKoi Nelligan" />
            </blockquote>
            <blockquote className="flex flex-col border-t border-ink py-10 lg:col-span-5 lg:min-h-[31rem] lg:border-t-0 lg:border-l lg:py-14 lg:pl-12">
              <p className="max-w-xl text-[clamp(1.2rem,1.7vw,1.55rem)] leading-relaxed">
                “You are an expert at your job and super professional, been a pleasure to work with
                you mate.”
              </p>
              <div className="mt-auto pt-8">
                <TestimonialAttribution name="Perry Humphreys" />
              </div>
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="application-title" spacing="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Apply for ELEVATE</Eyebrow>
              <SectionHeading id="application-title" className="mt-6 max-w-[13ch]">
                Ready to build around you?
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-xl text-lg leading-relaxed text-charcoal">
                Mathew works directly with a limited number of players through monthly coaching. Apply to
                discuss your cricket schedule, what you need from training and whether ELEVATE fits.
              </p>
              <div className="mt-8 flex flex-col items-start gap-5 min-[440px]:flex-row min-[440px]:items-center">
                <ButtonLink href="/contact/elevate">Apply for ELEVATE</ButtonLink>
                <ArrowLink href="/base">Explore BASE</ArrowLink>
              </div>
            </div>
          </div>

          <p className="mt-14 border-t border-line pt-6 text-[0.96rem] leading-relaxed text-mineral lg:mt-20">
            Not sure you need 1:1 coaching? BASE offers structured cricket performance programmes
            you can follow independently.
          </p>
        </Container>
      </Section>
    </main>
  );
}
