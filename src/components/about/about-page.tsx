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
  "Professional Rugby",
  "USA Cricket",
  "PSA Squash",
  "British Cycling",
  "Professional Soccer",
  "NCAA Programmes",
] as const;

const lessons = [
  {
    number: "01",
    title: "Context matters",
    copy: "Training has to reflect the athlete, sport, schedule and current demands.",
  },
  {
    number: "02",
    title: "Simple does not mean basic",
    copy: "Clear systems are often more useful than unnecessary complexity.",
  },
  {
    number: "03",
    title: "Progression has to be earned",
    copy: "Physical development comes from accumulated work, not isolated sessions.",
  },
  {
    number: "04",
    title: "The plan has to adapt",
    copy: "Performance environments change. Good preparation has to respond.",
  },
  {
    number: "05",
    title: "People matter",
    copy: "The effectiveness of a programme depends on communication, trust and how well it can be applied.",
  },
] as const;

const applications = [
  {
    label: "BASE",
    role: "The expertise productised.",
    expression: "Build the foundation.",
  },
  {
    label: "ELEVATE",
    role: "The expertise personalised.",
    expression: "Build around the athlete.",
  },
  {
    label: "APEX",
    role: "The expertise systemised.",
    expression: "Build the performance environment.",
  },
] as const;

const coachingPrinciples = [
  {
    number: "01",
    title: "Individual context",
    copy: "Understand what the athlete actually needs rather than applying a fixed template.",
  },
  {
    number: "02",
    title: "Clear structure",
    copy: "Make training purposeful and understandable.",
  },
  {
    number: "03",
    title: "Direct communication",
    copy: "Explain the why, not just the what.",
  },
  {
    number: "04",
    title: "Adaptability",
    copy: "Adjust when schedules, competition and athlete response change.",
  },
  {
    number: "05",
    title: "Long-term development",
    copy: "Build qualities over time rather than chase novelty.",
  },
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
    copy: "Direct individual coaching and ongoing support.",
    href: "/elevate",
  },
  {
    label: "APEX",
    descriptor: "High-Performance Consultancy",
    copy: "Support for coaches and organisations.",
    href: "/apex",
  },
] as const;

function Attribution({ name }: { name: string }) {
  return (
    <footer className="mt-8 border-t border-current/20 pt-5">
      <p className="text-[0.78rem] font-bold tracking-[0.13em] uppercase">{name}</p>
      <p className="mt-1 text-[0.94rem] text-mineral">Professional Rugby</p>
    </footer>
  );
}

export function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section aria-labelledby="about-hero-title" className="border-b border-line bg-canvas">
        <Container className="grid lg:min-h-[48rem] lg:grid-cols-12 lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center py-14 sm:py-20 lg:col-span-7 lg:py-24 lg:pr-[clamp(2.5rem,5vw,6.5rem)]">
            <Eyebrow className="text-moss">About Mathew Skyner</Eyebrow>
            <DisplayHeading
              id="about-hero-title"
              className="mt-7 max-w-[12ch] text-[clamp(2.55rem,5.2vw,5.75rem)] leading-[0.94] sm:mt-9"
            >
              <span className="block">The experience</span>
              <span className="block">behind CAIRNOX.</span>
            </DisplayHeading>
            <BodyCopy className="mt-8 max-w-[45rem] text-charcoal sm:mt-10">
              CAIRNOX is led by Mathew Skyner, a high-performance coach whose experience spans
              professional and international sporting environments across rugby, cricket, squash,
              cycling, soccer and NCAA programmes.
            </BodyCopy>
            <p className="mt-7 max-w-[43rem] border-t border-line pt-5 text-[0.96rem] font-semibold leading-relaxed text-charcoal">
              Different environments. Different demands. The same need for clear structure and
              intelligent progression.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row sm:mt-11">
              <ButtonLink href="/contact">Work with Mathew</ButtonLink>
              <ButtonLink href="/method" variant="secondary">
                The CAIRNOX Method
              </ButtonLink>
            </div>
          </div>

          <figure className="pb-8 sm:pb-12 lg:col-span-5 lg:py-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-light lg:h-full lg:aspect-auto">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-professional-rugby-coach-portrait.jpg")}
                alt="Mathew Skyner smiling while carrying rugby training equipment"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[50%_44%] saturate-[0.9] contrast-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase lg:hidden">
              Practitioner / coach / founder
            </figcaption>
          </figure>
        </Container>
      </section>

      <Section aria-labelledby="practitioner-title" spacing="large">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Coach first</Eyebrow>
              <SectionHeading id="practitioner-title" className="mt-6 max-w-[14ch]">
                Built from the work, not around the brand.
              </SectionHeading>
            </div>
            <div className="space-y-6 lg:col-span-5 lg:pt-12">
              <BodyCopy className="text-charcoal">
                Before CAIRNOX became a brand, the work already existed: preparing athletes,
                managing physical development, adapting training around competition and helping
                people perform within demanding sporting environments.
              </BodyCopy>
              <p className="text-[1.05rem] leading-relaxed text-charcoal">
                CAIRNOX gives that experience a structure — a way to make the thinking behind the
                work accessible through programmes, individual coaching and organisational
                consultancy.
              </p>
            </div>
          </div>

          <div className="mt-16 grid border-y border-ink py-8 lg:mt-24 lg:grid-cols-12 lg:items-center lg:py-10">
            <p className="type-eyebrow text-mineral lg:col-span-3">The relationship</p>
            <p className="mt-5 text-[clamp(1.7rem,3.3vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] lg:col-span-8 lg:col-start-5 lg:mt-0">
              CAIRNOX is the system. Mathew is the practitioner behind it.
            </p>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="experience-title" tone="muted" spacing="large">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-light">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-performance-coach-equipment.jpg")}
                alt="Mathew Skyner carrying training equipment in a USA Cricket environment"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_42%] saturate-[0.9] contrast-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase">
              Working inside performance environments
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <Eyebrow className="text-moss">Experience across performance environments</Eyebrow>
            <SectionHeading id="experience-title" className="mt-6 max-w-[12ch]">
              Experience across sport.
            </SectionHeading>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal">
              Working across different sports reinforces an important principle: the demands change,
              but good performance preparation still requires structure, progression and context.
            </p>

            <ul className="mt-12 grid border-t border-ink sm:grid-cols-2">
              {experience.map((item, index) => (
                <li
                  key={item}
                  className={`flex min-h-28 items-end border-b border-ink py-6 text-[0.82rem] font-bold tracking-[0.1em] uppercase sm:px-7 ${
                    index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="lessons-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-stone">Lessons from performance environments</Eyebrow>
              <SectionHeading id="lessons-title" className="mt-6 max-w-[14ch]">
                The sport changes. The principles get tested.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-stone-light lg:col-span-4 lg:pb-1">
              Breadth matters because principles only become useful when they can be applied within
              the realities of different athletes, schedules and competitive environments.
            </p>
          </div>

          <ol className="mt-16 border-y border-white/30 lg:mt-24 lg:grid lg:grid-cols-5">
            {lessons.map((lesson, index) => (
              <li
                key={lesson.number}
                className={`flex min-h-[22rem] flex-col border-b border-white/30 py-9 last:border-b-0 lg:border-b-0 lg:px-7 lg:py-10 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-stone">{lesson.number}</p>
                <h3 className="mt-16 text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] uppercase">
                  {lesson.title}
                </h3>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-stone-light">{lesson.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="origin-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Why CAIRNOX</Eyebrow>
              <SectionHeading id="origin-title" className="mt-6 max-w-[15ch]">
                A structure for the way performance is built.
              </SectionHeading>
            </div>
            <div className="space-y-5 lg:col-span-5">
              <p className="text-[1.05rem] leading-relaxed text-charcoal">
                The cairn became a natural symbol for the philosophy behind the work: a clear
                direction, a strong foundation and progress accumulated one layer at a time.
              </p>
              <p className="text-[1.05rem] leading-relaxed text-charcoal">
                BASE, ELEVATE and APEX apply the same philosophy at different levels — from
                independent programming, to individual coaching, to the performance environment
                itself.
              </p>
            </div>
          </div>

          <div className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-3">
            {applications.map((application, index) => (
              <article
                key={application.label}
                className={`flex min-h-72 flex-col border-b border-ink py-9 last:border-b-0 lg:border-b-0 lg:px-9 lg:py-11 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <h3 className="text-[clamp(2rem,3.6vw,3.8rem)] font-semibold leading-none tracking-[-0.05em]">
                  {application.label}
                </h3>
                <p className="mt-10 text-xl font-semibold tracking-[-0.025em]">{application.role}</p>
                <p className="mt-auto pt-8 text-[0.78rem] font-bold tracking-[0.1em] text-mineral uppercase">
                  {application.expression}
                </p>
              </article>
            ))}
          </div>

          <ArrowLink href="/method" className="mt-10">
            Explore the Method
          </ArrowLink>
        </Container>
      </Section>

      <Section aria-labelledby="coaching-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <figure className="lg:col-span-6">
              <div className="relative aspect-[3/2] overflow-hidden bg-stone-light">
                <Image
                  src={getPublicAssetPath("/media/images/mathew-skyner-rugby-strength-conditioning-coach.jpg")}
                  alt="Mathew Skyner coaching from the rugby sideline with a whistle"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-[50%_48%] saturate-[0.9] contrast-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-mineral uppercase">
                Coaching in context
              </figcaption>
            </figure>

            <div className="lg:col-span-6">
              <Eyebrow className="text-moss">The coaching approach</Eyebrow>
              <SectionHeading id="coaching-title" className="mt-6 max-w-[13ch]">
                Serious about the detail. Clear about the purpose.
              </SectionHeading>
              <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-charcoal">
                The work can be technical without becoming impersonal. Good coaching makes the
                purpose clear, responds to the environment and keeps long-term development in view.
              </p>
            </div>
          </div>

          <ol className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-5">
            {coachingPrinciples.map((principle, index) => (
              <li
                key={principle.number}
                className={`flex min-h-64 flex-col border-b border-ink py-8 last:border-b-0 lg:border-b-0 lg:px-7 lg:py-9 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l"
                }`}
              >
                <p className="type-eyebrow text-mineral">{principle.number}</p>
                <h3 className="mt-12 text-lg font-semibold leading-tight tracking-[-0.02em] uppercase">
                  {principle.title}
                </h3>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-charcoal">{principle.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="testimonials-title" spacing="large">
        <Container>
          <Eyebrow className="text-moss">Athlete proof</Eyebrow>
          <SectionHeading id="testimonials-title" className="mt-6 max-w-[16ch]">
            What the work has meant to athletes.
          </SectionHeading>

          <div className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-12">
            <blockquote className="border-b border-ink py-10 lg:col-span-7 lg:border-b-0 lg:pr-14 lg:py-14">
              <p className="text-[clamp(2rem,4vw,4.3rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                “Thank you for everything you&apos;ve done for me and my career since you&apos;ve been at
                OG. I absolutely would not be in the place I&apos;m in if it wasn&apos;t for your guidance and
                friendship over the last three years.”
              </p>
              <Attribution name="KoiKoi Nelligan" />
            </blockquote>

            <div className="lg:col-span-5 lg:border-l lg:border-ink lg:pl-12">
              <blockquote className="border-b border-ink py-10 lg:py-12">
                <p className="text-[clamp(1.35rem,2.2vw,2.2rem)] font-medium leading-snug tracking-[-0.03em]">
                  “You are an expert at your job and super professional, been a pleasure to work with
                  you mate.”
                </p>
                <Attribution name="Perry Humphreys" />
              </blockquote>
              <blockquote className="py-10 lg:py-12">
                <p className="text-[clamp(1.35rem,2.2vw,2.2rem)] font-medium leading-snug tracking-[-0.03em]">
                  “Went over and above for the club. Thanks so much for everything you did for me on
                  and off the field with rugby and also the injury stuff.”
                </p>
                <Attribution name="Jason Robertson" />
              </blockquote>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="cross-sport-title" tone="dark" spacing="large">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image
                src={getPublicAssetPath("/media/images/mathew-skyner-usa-cricket-team-training.jpg")}
                alt="Mathew Skyner observing athletes during a USA Cricket training session"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_50%] saturate-[0.88] contrast-[1.04]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] font-bold tracking-[0.11em] text-stone uppercase">
              Principles applied to the environment
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <Eyebrow className="text-stone">Principles, applied to context</Eyebrow>
            <SectionHeading id="cross-sport-title" className="mt-6 max-w-[14ch]">
              No two performance environments are the same.
            </SectionHeading>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-stone-light">
              A cricketer, rugby player, squash athlete, cyclist and soccer player do not need
              identical preparation. Different sports create different competitive demands,
              schedules and physical priorities. The value is in understanding which principles
              matter and how they should be applied.
            </p>

            <p className="mt-12 border-t border-white/30 pt-7 text-[0.78rem] font-bold leading-relaxed tracking-[0.12em] text-stone uppercase">
              Professional Rugby / USA Cricket / PSA Squash / British Cycling / Professional Soccer
              / NCAA Programmes
            </p>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="work-with-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Work with Mathew</Eyebrow>
              <SectionHeading id="work-with-title" className="mt-6 max-w-[14ch]">
                Choose the level of support you need.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                CAIRNOX makes Mathew&apos;s expertise accessible through independent programmes,
                individual coaching and consultancy for performance environments.
              </BodyCopy>
              <ButtonLink href="/contact" className="mt-8">
                Start a conversation
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Ways to work with Mathew" className="mt-16 border-y border-ink lg:mt-24">
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
