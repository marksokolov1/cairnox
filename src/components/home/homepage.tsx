import Image from "next/image";
import Link from "next/link";
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

const experience = [
  "Professional Rugby",
  "PSA Squash",
  "British Cycling",
  "Professional Soccer",
  "USA Cricket",
  "NCAA Programmes",
] as const;

const philosophySteps = [
  {
    number: "01",
    title: "Foundation",
    copy: "Build the physical qualities performance depends upon.",
  },
  {
    number: "02",
    title: "Progression",
    copy: "Accumulate high-quality work through deliberate, intelligent training.",
  },
  {
    number: "03",
    title: "Performance",
    copy: "Express the preparation when it matters.",
  },
] as const;

const services = [
  {
    index: "01 / FOUNDATION",
    label: "BASE",
    descriptor: "Performance Programmes",
    expression: "Build the foundation.",
    copy: "Structured strength, power and conditioning programmes for athletes who want expert programming and a clear system to follow independently.",
    note: "One-time purchase",
    cta: "Explore BASE",
    href: "/base",
  },
  {
    index: "02 / PROGRESSION",
    label: "ELEVATE",
    descriptor: "1:1 Performance Coaching",
    expression: "Build around the athlete.",
    copy: "Individual programming, direct support and ongoing performance management built around your sport, schedule and development needs.",
    note: "Limited coaching availability",
    cta: "Explore ELEVATE",
    href: "/elevate",
  },
  {
    index: "03 / PEAK",
    label: "APEX",
    descriptor: "High-Performance Consultancy",
    expression: "Build the performance environment.",
    copy: "Physical-development and load-management consultancy for coaches, schools, clubs and sporting organisations.",
    note: "Online / in-person / hybrid",
    cta: "Explore APEX",
    href: "/apex",
  },
] as const;

const methodPillars = [
  {
    title: "Physical Preparation",
    copy: "Develop the strength, power, conditioning and movement qualities performance depends upon.",
  },
  {
    title: "Performance Planning",
    copy: "Structure training around objectives, competition demands and the wider sporting calendar.",
  },
  {
    title: "Monitoring & Adaptation",
    copy: "Use athlete response, workload and performance information to guide training decisions.",
  },
  {
    title: "Athlete Development",
    copy: "Build physical capacity over time rather than chasing isolated short-term outputs.",
  },
] as const;

const apexFocusAreas = [
  "Physical Development Systems",
  "Load Management",
  "Seasonal Planning",
  "Athlete Monitoring",
  "Programme Review",
  "Coach & Staff Development",
] as const;

const finalRoutes = [
  { label: "BASE", descriptor: "Performance Programmes", href: "/base" },
  { label: "ELEVATE", descriptor: "1:1 Performance Coaching", href: "/elevate" },
  { label: "APEX", descriptor: "High-Performance Consultancy", href: "/apex" },
] as const;

function Attribution({ name }: { name: string }) {
  return (
    <footer className="mt-7 border-t border-current/20 pt-4">
      <p className="text-[0.78rem] font-bold tracking-[0.13em] uppercase">{name}</p>
      <p className="mt-1 text-[0.92rem] text-mineral">Professional Rugby</p>
    </footer>
  );
}

export function Homepage() {
  return (
    <main id="main-content" className="homepage">
      <section aria-labelledby="hero-title" className="border-b border-line bg-canvas">
        <Container className="grid min-h-[calc(100svh-4.75rem)] lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-center py-12 sm:py-20 lg:col-span-7 lg:min-h-[44rem] lg:-translate-y-[4.5rem] lg:py-24 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">High-Performance Coaching &amp; Consultancy</Eyebrow>
            <DisplayHeading
              id="hero-title"
              className="type-hero mt-7 sm:mt-9"
            >
              <span className="block lg:whitespace-nowrap">Performance is built</span>
              <span className="block lg:whitespace-nowrap">layer by layer.</span>
            </DisplayHeading>
            <BodyCopy className="mt-8 max-w-[42rem] text-charcoal sm:mt-10">
              Performance coaching, structured programmes and high-performance consultancy for
              athletes and organisations serious about physical development. Led by Mathew Skyner.
            </BodyCopy>
            <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row sm:mt-11">
              <ButtonLink href="/contact" className="min-h-11 py-[0.72rem] sm:min-h-[2.875rem] sm:py-[0.8rem]">
                Work with Mathew
              </ButtonLink>
              <ButtonLink
                href="#ways-to-work"
                variant="secondary"
                className="min-h-11 py-[0.72rem] sm:min-h-[2.875rem] sm:py-[0.8rem]"
              >
                Explore CAIRNOX
              </ButtonLink>
            </div>
            <p className="mt-10 border-t border-line pt-4 text-[0.7rem] font-bold tracking-[0.12em] text-mineral uppercase sm:mt-14">
              Athlete development / Physical preparation / Performance systems
            </p>
          </div>

          <div className="relative min-h-[23rem] overflow-hidden bg-stone-light sm:min-h-[32rem] lg:col-span-5 lg:my-8 lg:min-h-0">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-active-rugby-coaching.jpg")}
              alt="Mathew Skyner actively coaching athletes during a rugby training session"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[52%_center] saturate-[0.88] contrast-[1.04] sepia-[0.02]"
            />
          </div>
        </Container>
      </section>

      <section aria-labelledby="experience-title" className="bg-ink py-8 text-canvas sm:py-10">
        <Container>
          <h2 id="experience-title" className="type-eyebrow text-stone">
            Experience across high-performance sport
          </h2>
          <ul className="mt-6 grid grid-cols-2 border-t border-white/30 sm:grid-cols-3 lg:grid-cols-6">
            {experience.map((item, index) => (
              <li
                key={item}
                className={`flex min-h-20 items-end border-b border-white/30 py-4 pr-4 text-[0.72rem] font-bold leading-snug tracking-[0.09em] uppercase sm:min-h-24 lg:border-b-0 lg:pl-5 ${
                  index % 2 === 1 ? "border-l border-white/30 pl-4" : ""
                } ${index > 0 ? "lg:border-l" : "lg:pl-0"}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section aria-labelledby="founder-title" spacing="large">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <figure className="relative aspect-[4/5] overflow-hidden bg-charcoal lg:col-span-5 lg:aspect-[4/5] lg:w-[112%] lg:max-w-none">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-rugby-coaching-night-ball.jpg")}
              alt="Mathew Skyner holding a rugby ball on a floodlit field at night"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover object-center"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10 xl:pt-14">
            <Eyebrow className="text-moss">The experience behind CAIRNOX</Eyebrow>
            <SectionHeading id="founder-title" className="mt-6 max-w-[12ch]">
              Built in high-performance sport.
            </SectionHeading>
            <div className="mt-8 space-y-5 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-charcoal">
              <p>
                CAIRNOX is led by Mathew Skyner, a high-performance coach whose experience spans
                professional and international sport across rugby, cricket, squash, cycling, soccer
                and NCAA programmes.
              </p>
              <p>
                Different sports create different demands, but the principle remains consistent:
                performance is developed through intelligent preparation, clear progression and work
                accumulated over time.
              </p>
            </div>
            <ArrowLink href="/about" className="mt-9">
              About Mathew
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="philosophy-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow className="text-stone">The CAIRNOX philosophy</Eyebrow>
              <SectionHeading id="philosophy-title" className="mt-6 max-w-[12ch]">
                Performance is accumulated.
              </SectionHeading>
              <div className="mt-8 max-w-2xl space-y-5 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-stone-light">
                <p>
                  A cairn is built deliberately, one stone at a time. Every layer depends on what
                  came before it. Athletic development works the same way.
                </p>
                <p>
                  A single session changes very little. But quality work repeated across days, weeks,
                  training blocks and seasons creates something durable. Strength is developed. Power
                  is built. Capacity improves. Recovery is managed. Preparation becomes performance.
                </p>
              </div>
            </div>
            <figure className="relative aspect-[4/5] min-h-[24rem] overflow-hidden bg-charcoal lg:col-span-5 lg:min-h-[35rem]">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-rugby-field-night-profile.jpg")}
                alt="Mathew Skyner walking in profile across a floodlit rugby field at night"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </figure>
          </div>

          <ol className="mt-16 grid border-t border-white/25 md:grid-cols-3 lg:mt-24">
            {philosophySteps.map((step, index) => (
              <li
                key={step.number}
                className={`border-b border-white/25 py-7 md:border-b-0 md:px-7 md:py-9 ${
                  index > 0 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <p className="type-eyebrow text-stone">{step.number}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-[0.96rem] leading-relaxed text-stone-light">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="ways-to-work" aria-labelledby="system-title" tone="muted" spacing="large" className="scroll-mt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The CAIRNOX system</Eyebrow>
              <SectionHeading id="system-title" className="mt-6 max-w-[12ch]">
                Choose how you build.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-charcoal lg:col-span-5 lg:pb-1">
              Three ways to access the same performance philosophy, from structured independent
              programming to individual coaching and organisational consultancy.
            </p>
          </div>

          <div className="mt-14 border-y border-ink lg:mt-20 lg:grid lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.label}
                className={`flex min-h-[31rem] flex-col border-b border-ink py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:py-10 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-mineral">{service.index}</p>
                <h3 className="mt-10 text-[clamp(3rem,4.2vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                  {service.label}
                </h3>
                <p className="mt-4 text-[0.78rem] font-bold tracking-[0.11em] uppercase">
                  {service.descriptor}
                </p>
                <p className="mt-10 text-xl font-semibold tracking-[-0.02em]">
                  {service.expression}
                </p>
                <p className="mt-4 max-w-sm leading-relaxed text-charcoal">{service.copy}</p>
                <div className="mt-auto pt-10">
                  <p className="border-t border-line pt-4 text-[0.72rem] font-semibold tracking-[0.08em] text-mineral uppercase">
                    {service.note}
                  </p>
                  <ArrowLink href={service.href} className="mt-6">
                    {service.cta}
                  </ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="method-title" spacing="large">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,5.25fr)_minmax(0,6.75fr)] lg:gap-14">
          <div>
            <AmbientVideo
              className="aspect-[9/14] max-h-[46rem] w-full"
              src="/media/videos/base-rotational-power-usa-cricket.mp4"
              poster="/media/posters/base-rotational-power-usa-cricket.png"
              videoClassName="object-[52%_center] scale-[1.03] saturate-[0.9] contrast-[1.03]"
            />
            <p className="mt-3 text-[0.7rem] font-bold tracking-[0.11em] text-mineral uppercase">
              Physical preparation / rotational power
            </p>
          </div>
          <div className="lg:pt-8">
            <Eyebrow className="text-moss">The CAIRNOX method</Eyebrow>
            <SectionHeading id="method-title" className="mt-6 max-w-[14ch]">
              A system, not a collection of workouts.
            </SectionHeading>
            <BodyCopy className="mt-8 max-w-2xl text-charcoal">
              Effective physical preparation requires more than selecting exercises. Training has to
              account for the athlete, the demands of the sport, the competitive schedule and the way
              the athlete responds over time.
            </BodyCopy>

            <dl className="mt-12 grid border-t border-line sm:grid-cols-2">
              {methodPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`border-b border-line py-7 sm:min-h-52 sm:px-7 ${
                    index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                  }`}
                >
                  <dt className="text-[0.78rem] font-bold tracking-[0.11em] uppercase">{pillar.title}</dt>
                  <dd className="mt-4 text-[0.95rem] leading-relaxed text-mineral">{pillar.copy}</dd>
                </div>
              ))}
            </dl>
            <ArrowLink href="/method" className="mt-9">
              Explore the Method
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="testimonials-title" tone="muted" spacing="large">
        <Container>
          <Eyebrow className="text-moss">Professional athlete testimonials</Eyebrow>
          <SectionHeading id="testimonials-title" className="mt-6 max-w-[13ch]">
            Trust built through the work.
          </SectionHeading>

          <div className="mt-14 grid border-t border-ink lg:grid-cols-12 lg:items-stretch">
            <blockquote className="flex flex-col py-10 lg:col-span-7 lg:min-h-[37rem] lg:pr-14 lg:py-14">
              <p className="max-w-[23ch] text-[clamp(1.7rem,3.2vw,3.3rem)] font-medium leading-[1.12] tracking-[-0.04em]">
                “Thank you for everything you’ve done for me and my career since you’ve been at OG.
                I absolutely would not be in the place I’m in if it wasn’t for your guidance and
                friendship over the last three years.”
              </p>
              <Attribution name="KoiKoi Nelligan" />
            </blockquote>
            <figure className="relative min-h-[27rem] overflow-hidden bg-stone lg:col-span-5 lg:min-h-[37rem]">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-professional-rugby-coach-portrait.jpg")}
                alt="Mathew Skyner smiling while carrying rugby training equipment"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </figure>
          </div>

          <div className="grid border-b border-ink lg:grid-cols-2">
            <blockquote className="border-b border-ink py-11 lg:border-r lg:border-b-0 lg:pr-12">
              <p className="max-w-2xl text-[1.22rem] leading-relaxed">
                “You are an expert at your job and super professional, been a pleasure to work with you
                mate.”
              </p>
              <Attribution name="Perry Humphreys" />
            </blockquote>
            <blockquote className="py-11 lg:pl-12">
              <p className="max-w-2xl text-[1.22rem] leading-relaxed">
                “Went over and above for the club. Thanks so much for everything you did for me on and
                off the field with rugby and also the injury stuff.”
              </p>
              <Attribution name="Jason Robertson" />
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="apex-title" tone="dark" spacing="large">
        <Container>
          <figure className="relative aspect-[4/3] overflow-hidden bg-charcoal sm:aspect-[16/9] lg:aspect-[2/1]">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-performance-team-wide.jpg")}
              alt="Mathew Skyner working with a USA Cricket training group on the field"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </figure>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow className="text-stone">For teams &amp; organisations</Eyebrow>
              <SectionHeading id="apex-title" className="mt-6 max-w-[13ch]">
                Build the performance environment.
              </SectionHeading>
              <p className="mt-8 max-w-2xl text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-stone-light">
                APEX supports coaches, schools, clubs and sporting organisations looking to improve
                how physical performance is planned, monitored and developed.
              </p>
              <div className="mt-9 flex flex-col items-start gap-5 min-[440px]:flex-row min-[440px]:items-center">
                <ButtonLink href="/apex" variant="inverse">
                  Explore APEX
                </ButtonLink>
                <ArrowLink href="/contact/apex" className="text-canvas">
                  Discuss a project
                </ArrowLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="type-eyebrow text-stone">Potential focus areas</p>
              <ul className="mt-5 border-t border-white/30">
                {apexFocusAreas.map((area, index) => (
                  <li
                    key={area}
                    className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/30 py-4 text-[0.92rem] font-semibold tracking-[0.055em] uppercase"
                  >
                    <span className="text-stone">0{index + 1}</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="final-cta-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The next layer</Eyebrow>
              <SectionHeading id="final-cta-title" className="mt-6 max-w-[12ch]">
                Build your next layer.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-xl text-lg leading-relaxed text-charcoal">
                Whether you need the structure of a programme, individual coaching or support for a
                wider performance environment, start with the route that fits where you are now.
              </p>
              <ButtonLink href="/contact" className="mt-8">
                Work with Mathew
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Ways to work with CAIRNOX" className="mt-14 border-y border-ink lg:mt-20">
            <ul className="grid lg:grid-cols-3">
              {finalRoutes.map((route, index) => (
                <li key={route.href} className={index > 0 ? "lg:border-l lg:border-ink" : ""}>
                  <Link
                    href={route.href}
                    className={`group flex min-h-28 items-center justify-between gap-5 py-6 lg:px-8 ${
                      index < finalRoutes.length - 1 ? "border-b border-line lg:border-b-0" : ""
                    }`}
                  >
                    <span>
                      <span className="block text-sm font-bold tracking-[0.12em] uppercase">
                        {route.label}
                      </span>
                      <span className="mt-1 block text-sm text-mineral">{route.descriptor}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>
    </main>
  );
}
