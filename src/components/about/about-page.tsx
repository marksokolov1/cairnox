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

const principles = [
  {
    number: "01",
    title: "Context before template",
    copy: "Athletes cannot be separated from their sport, schedule, training history or competitive environment. Preparation begins with understanding the complete context.",
  },
  {
    number: "02",
    title: "Transfer without copying",
    copy: "Strong principles can transfer between sports. Programmes cannot simply be copied. Coaching judgment determines what remains useful and what must change.",
  },
  {
    number: "03",
    title: "Coach the individual",
    copy: "Physical preparation works when it responds to the person in front of the coach—not only the position, sport or performance data.",
  },
] as const;

const applications = [
  { label: "BASE", copy: "Establish capacity, movement quality and consistency." },
  { label: "ELEVATE", copy: "Build physical qualities against the demands of the athlete and sport." },
  { label: "APEX", copy: "Integrate preparation within team and organisational environments." },
] as const;

function Attribution({ name }: { name: string }) {
  return (
    <footer className="mt-5 border-t border-current/20 pt-4">
      <p className="text-[0.78rem] font-bold tracking-[0.12em] uppercase">{name}</p>
      <p className="mt-1 text-[0.94rem] text-mineral">Professional Rugby</p>
    </footer>
  );
}

export function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section aria-labelledby="about-hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:min-h-[34rem] lg:grid-cols-12 lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center py-12 sm:py-16 lg:col-span-7 lg:py-14 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">About Mathew Skyner</Eyebrow>
            <DisplayHeading
              id="about-hero-title"
              className="mt-6 max-w-[21ch] text-[clamp(2.7rem,4.15vw,4.5rem)]! leading-[0.98]!"
            >
              A coach shaped by different performance environments.
            </DisplayHeading>
            <BodyCopy className="mt-6 max-w-[43rem] text-charcoal">
              Mathew Skyner is a multi-sport high-performance coach whose experience spans USA
              Cricket, professional rugby, PSA Squash, British Cycling, professional soccer and
              NCAA programmes.
            </BodyCopy>
            <p className="mt-4 max-w-[43rem] text-[1.05rem] leading-relaxed text-charcoal">
              That breadth has shaped a context-led approach: understand the athlete, understand the
              sport, then build the physical preparation the environment demands.
            </p>
            <p className="mt-6 border-t border-line pt-4 text-[0.76rem] font-bold tracking-[0.1em] text-moss uppercase">
              Different sports. Different demands. Principles tested in practice.
            </p>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden bg-stone-light lg:col-span-5 lg:my-6 lg:aspect-auto">
            <Image
              src={getPublicAssetPath("/media/images/mathew-skyner-professional-rugby-coach-portrait.jpg")}
              alt="Mathew Skyner carrying coaching equipment at a professional rugby ground"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[50%_38%] saturate-[0.9] contrast-[1.03]"
            />
          </figure>
        </Container>
      </section>

      <Section id="experience" aria-labelledby="experience-title" tone="muted" spacing="default">
        <Container className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-7">
            <Eyebrow className="text-moss">Experience across sport</Eyebrow>
            <SectionHeading id="experience-title" className="mt-5 max-w-[15ch]">
              Breadth that sharpens the coaching.
            </SectionHeading>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal">
              Working across different sports is not about applying one programme everywhere. It is
              about recognising which principles transfer, which demands are unique, and how
              preparation must change around the athlete and the environment.
            </p>
            <ul className="mt-8 grid border-t border-ink sm:grid-cols-2">
              {experience.map((item, index) => (
                <li
                  key={item}
                  className={`border-b border-line py-4 text-[0.82rem] font-bold tracking-[0.1em] uppercase sm:px-5 ${
                    index % 2 === 1 ? "sm:border-l sm:border-line" : "sm:pl-0"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone lg:aspect-[4/5]">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-performance-coach-equipment.jpg")}
                alt="Mathew Skyner carrying performance equipment at a USA Cricket training ground"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_38%] saturate-[0.9] contrast-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.1em] text-mineral uppercase">
              Experience across different performance environments
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section aria-labelledby="principles-title" tone="dark" spacing="compact">
        <Container>
          <Eyebrow className="text-stone">What multi-sport experience changes</Eyebrow>
          <SectionHeading id="principles-title" className="mt-5 max-w-[17ch]">
            Principles shaped across sport.
          </SectionHeading>
          <ol className="mt-9 border-t border-white/30 lg:grid lg:grid-cols-3">
            {principles.map((principle, index) => (
              <li
                key={principle.number}
                className={`border-b border-white/30 py-6 lg:border-b-0 lg:px-7 lg:py-7 ${
                  index > 0 ? "lg:border-l lg:border-white/30" : "lg:pl-0"
                }`}
              >
                <p className="type-eyebrow text-stone">{principle.number}</p>
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight tracking-[-0.025em]">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-sm text-[0.98rem] leading-relaxed text-stone-light">
                  {principle.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="system-title" spacing="compact">
        <Container>
          <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The system behind the work</Eyebrow>
              <SectionHeading id="system-title" className="mt-5 max-w-[16ch]">
                Experience became a system.
              </SectionHeading>
            </div>
            <div className="space-y-4 text-[1.05rem] leading-relaxed text-charcoal lg:col-span-5">
              <p>
                CAIRNOX was created to turn high-performance coaching principles into a clear
                development pathway. Cricket is its primary commercial application.
              </p>
              <p>
                Mathew is the coach behind the work. CAIRNOX is the system through which that work
                is understood, structured and progressed.
              </p>
            </div>
          </div>
          <div className="mt-9 border-y border-ink lg:grid lg:grid-cols-3">
            {applications.map((application, index) => (
              <div
                key={application.label}
                className={`border-b border-line py-5 last:border-b-0 lg:border-b-0 lg:px-7 lg:py-6 ${
                  index > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"
                }`}
              >
                <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em]">{application.label}</h3>
                <p className="mt-2 max-w-sm text-[0.98rem] leading-relaxed text-charcoal">
                  {application.copy}
                </p>
              </div>
            ))}
          </div>
          <ArrowLink href="/method" className="mt-7">Explore the Method</ArrowLink>
        </Container>
      </Section>

      <Section aria-labelledby="proof-title" tone="muted" spacing="compact">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <Eyebrow className="text-moss">Evidence from the environment</Eyebrow>
              <SectionHeading id="proof-title" className="mt-5 max-w-[17ch]">
                What athletes have said about the work.
              </SectionHeading>
            </div>
            <ArrowLink href="/results">View Results</ArrowLink>
          </div>
          <div className="mt-9 grid border-y border-ink lg:grid-cols-12">
            <blockquote className="border-b border-line py-7 lg:col-span-7 lg:border-b-0 lg:pr-10">
              <p className="max-w-[32ch] text-[clamp(1.45rem,2.5vw,2.6rem)] leading-[1.2] tracking-[-0.03em]">
                “Thank you for everything you&apos;ve done for me and my career since you&apos;ve been at
                OG. I absolutely would not be in the place I&apos;m in if it wasn&apos;t for your guidance and
                friendship over the last three years.”
              </p>
              <Attribution name="KoiKoi Nelligan" />
            </blockquote>
            <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-9">
              <blockquote className="border-b border-line py-7">
                <p className="text-[1.2rem] leading-relaxed">
                  “You are an expert at your job and super professional, been a pleasure to work with
                  you mate.”
                </p>
                <Attribution name="Perry Humphreys" />
              </blockquote>
              <blockquote className="py-7">
                <p className="text-[1.2rem] leading-relaxed">
                  “Went over and above for the club. Thanks so much for everything you did for me on
                  and off the field with rugby and also the injury stuff.”
                </p>
                <Attribution name="Jason Robertson" />
              </blockquote>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="final-title" spacing="compact">
        <Container className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <Eyebrow className="text-moss">The next step</Eyebrow>
            <SectionHeading id="final-title" className="mt-5 max-w-[17ch]">
              Performance coaching shaped by experience, not convention.
            </SectionHeading>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[1.05rem] leading-relaxed text-charcoal">
              Explore the CAIRNOX methodology, discover the available performance pathways, or
              discuss support for an athlete, team or organisation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <ButtonLink href="/method">Explore the Method</ButtonLink>
              <ArrowLink href="/contact">Start a conversation</ArrowLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
