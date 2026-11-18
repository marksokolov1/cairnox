import Image from "next/image";
import { AmbientVideo } from "@/components/home/ambient-video";
import { FoundationWeekSignup } from "@/components/base/foundation-week-signup";
import { foundationWeekAnchor, foundationWeekSignupEnabled } from "@/config/foundation-week";
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

const foundationPillars = [
  { title: "Strength", copy: "Build the force-producing qualities cricket performance depends on." },
  { title: "Power", copy: "Develop the ability to express force quickly." },
  { title: "Conditioning", copy: "Build the capacity to meet repeated training and match demands." },
] as const;

export function BasePage() {
  return (
    <main id="main-content" className="base-page">
      <section aria-labelledby="base-hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-center py-14 sm:py-20 lg:col-span-7 lg:min-h-[47rem] lg:py-24 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">CAIRNOX BASE</Eyebrow>
            <p className="mt-5 text-[0.78rem] font-bold tracking-[0.11em] text-mineral uppercase">
              Cricket Performance Programmes
            </p>
            <DisplayHeading id="base-hero-title" className="type-hero mt-7 sm:mt-9">
              <span className="block">Build the physical</span>
              <span className="block">foundation for cricket.</span>
            </DisplayHeading>
            <BodyCopy className="mt-8 max-w-[43rem] text-charcoal sm:mt-10">
              Progressive strength, power and conditioning programmes structured around the physical
              demands and calendar of cricket, for players ready to train independently.
            </BodyCopy>
            <p className="mt-5 text-[0.82rem] font-bold tracking-[0.1em] text-mineral uppercase">
              One purchase. A complete performance programme. Built to progress.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row sm:mt-11">
              <ButtonLink href="/contact/base">Register interest</ButtonLink>
              <ButtonLink href="#how-base-works" variant="secondary">
                How BASE works
              </ButtonLink>
            </div>
            {foundationWeekSignupEnabled && (
              <ArrowLink href={foundationWeekAnchor} className="mt-5 self-start">
                Get the free training guide
              </ArrowLink>
            )}
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

      <Section aria-labelledby="what-base-title" spacing="compact">
        <Container className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow className="text-moss">The CAIRNOX entry point</Eyebrow>
            <SectionHeading id="what-base-title" className="mt-4 max-w-[15ch]">
              The system, in your hands.
            </SectionHeading>
          </div>
          <div className="space-y-3 lg:col-span-6">
            <BodyCopy className="text-charcoal">
              BASE is for competitive cricketers and other serious players who want a clear plan
              they can follow independently around practice and matches.
            </BodyCopy>
            <p className="text-base leading-relaxed text-charcoal">
              One purchase gives you a complete programme without an ongoing coaching commitment.
            </p>
          </div>
        </Container>
      </Section>

      {foundationWeekSignupEnabled && <FoundationWeekSignup />}

      <Section
        id="how-base-works"
        aria-labelledby="process-title"
        className="scroll-mt-24"
      >
        <Container>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-6">
              <Eyebrow className="text-moss">What you get / How it works</Eyebrow>
              <SectionHeading id="process-title" className="mt-4 max-w-[15ch]">
                A programme built to progress.
              </SectionHeading>
            </div>
            <BodyCopy className="text-charcoal lg:col-span-6">
              Choose a programme that fits your objective and cricket calendar. Follow the sessions
              independently with exercise guidance and selected CAIRNOX training resources.
            </BodyCopy>
          </div>

          <dl className="mt-8 grid border-y border-line md:grid-cols-3">
            {foundationPillars.map((pillar, index) => (
              <div key={pillar.title} className={`border-b border-line py-5 last:border-b-0 md:border-b-0 ${index > 0 ? "md:border-l md:px-6" : "md:pr-6"}`}>
                <dt className="text-xl font-semibold tracking-tight">{pillar.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-charcoal">{pillar.copy}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal">
            Training starts by building a foundation. The demands increase as your capacity improves,
            so each stage prepares you for the next rather than repeating the same workouts.
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="experience-title" tone="muted" spacing="compact">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="relative aspect-[4/3] overflow-hidden bg-charcoal lg:col-span-5 lg:aspect-[5/4]">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-resisted-sprint-coaching.jpg")}
              alt="Mathew Skyner delivering physical preparation with a USA Cricket athlete"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[52%_center] saturate-[0.9] contrast-[1.03]"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-7">
            <Eyebrow className="text-moss">Built from high-performance experience</Eyebrow>
            <SectionHeading id="experience-title" className="mt-6 max-w-[15ch]">
              Built from work in cricket.
            </SectionHeading>
            <BodyCopy className="mt-8 text-charcoal">
              Mathew Skyner brings experience from USA Cricket and other high-performance sports to
              BASE. The programmes apply that work to the physical demands cricketers face in training
              and competition.
            </BodyCopy>
            <ArrowLink href="/about" className="mt-9">
              About Mathew
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="comparison-title" spacing="compact">
        <Container>
          <Eyebrow className="text-moss">Choose the support you need</Eyebrow>
          <SectionHeading id="comparison-title" className="mt-4">
            The system or the coaching.
          </SectionHeading>
          <div className="mt-8 grid border-y border-line md:grid-cols-2">
            <div className="border-b border-line py-6 md:border-b-0 md:pr-8">
              <h3 className="text-2xl font-semibold tracking-tight">BASE</h3>
              <p className="mt-2 max-w-md leading-relaxed text-charcoal">
                Follow a structured cricket performance programme independently.
              </p>
            </div>
            <div className="py-6 md:border-l md:border-line md:pl-8">
              <h3 className="text-2xl font-semibold tracking-tight">ELEVATE</h3>
              <p className="mt-2 max-w-md leading-relaxed text-charcoal">
                Work 1:1 with Mathew for coaching that adapts to your role, schedule and training needs.
              </p>
              <ArrowLink href="/elevate" className="mt-4">Explore ELEVATE</ArrowLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="programmes"
        aria-labelledby="programmes-title"
        tone="dark"
        spacing="default"
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
                The first CAIRNOX BASE cricket performance programmes are being prepared for release.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-stone-light">
                Register your interest if you’d like to hear when the full programmes are available.
              </p>
              <ButtonLink href="/contact/base" variant="inverse" className="mt-6">
                Register interest
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
