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

const editorialPrinciples = [
  {
    number: "01",
    title: "Practical",
    copy: "Ideas should connect back to real coaching and training.",
  },
  {
    number: "02",
    title: "Contextual",
    copy: "Advice should acknowledge that sport, schedule and athlete needs change the answer.",
  },
  {
    number: "03",
    title: "Clear",
    copy: "Complexity should be explained rather than used to create authority.",
  },
] as const;

const topics = [
  {
    number: "01",
    title: "Physical Preparation",
    copy: "Strength, power, conditioning and the physical qualities supporting sport.",
  },
  {
    number: "02",
    title: "Athlete Development",
    copy: "How physical qualities are developed across time rather than isolated sessions.",
  },
  {
    number: "03",
    title: "Performance Planning",
    copy: "How training fits around objectives, practice, competition and the wider calendar.",
  },
  {
    number: "04",
    title: "Monitoring & Adaptation",
    copy: "Using relevant information to guide future decisions.",
  },
  {
    number: "05",
    title: "Load & Recovery",
    copy: "Understanding training demand, competition and the athlete's ability to adapt.",
  },
  {
    number: "06",
    title: "Performance Systems",
    copy: "How coaches and organisations structure physical-development environments.",
  },
] as const;

const editorialStandard = [
  {
    number: "01",
    title: "Start with the question",
    copy: "What practical performance problem is being examined?",
  },
  {
    number: "02",
    title: "Add context",
    copy: "Who is the advice for, and what variables change the answer?",
  },
  {
    number: "03",
    title: "Use evidence responsibly",
    copy: "Reference research or data where useful without overstating what it proves.",
  },
  {
    number: "04",
    title: "Connect to practice",
    copy: "Explain what the idea means for training, coaching or decision-making.",
  },
  {
    number: "05",
    title: "Acknowledge limits",
    copy: "Avoid presenting one solution as universally correct.",
  },
] as const;

const athleteTopics = [
  "Why training is structured the way it is",
  "How progression works",
  "How physical preparation interacts with sport",
  "When more individual support may be needed",
] as const;

const coachTopics = [
  "Physical-development systems",
  "Load management",
  "Monitoring",
  "Seasonal planning",
  "Performance environments",
] as const;

const editorialQuestions = [
  "How should training change across a competitive season?",
  "When does more training stop being better training?",
  "What makes a performance programme progressive?",
  "How should physical preparation fit around sport practice?",
  "What information is actually useful when monitoring athletes?",
  "When does an athlete need individual coaching rather than a fixed programme?",
  "What makes a performance system useful to coaches?",
  "How do you build physical qualities without losing sight of the sport?",
] as const;

export function InsightsPage() {
  return (
    <main id="main-content" className="insights-page">
      <section aria-labelledby="insights-hero-title" className="border-b border-line bg-canvas">
        <Container className="flex min-h-[39rem] flex-col justify-between py-14 sm:py-20 lg:min-h-[46rem] lg:py-24">
          <Eyebrow className="text-moss">CAIRNOX Insights</Eyebrow>

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:items-end">
            <DisplayHeading id="insights-hero-title" className="type-hero max-w-[10ch] lg:col-span-7">
              Thinking for better performance.
            </DisplayHeading>

            <div className="lg:col-span-5 lg:pb-1">
              <BodyCopy className="text-charcoal">
                Practical thinking on physical preparation, athlete development and the systems
                surrounding performance.
              </BodyCopy>
              <p className="mt-6 border-t border-line pt-5 text-[0.98rem] leading-relaxed text-charcoal">
                Built for athletes, coaches and performance professionals who want to understand
                the reasoning behind the work.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="#topics">Explore the topics</ButtonLink>
                <ButtonLink href="/method" variant="secondary">
                  The CAIRNOX Method
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-ink sm:grid-cols-3 lg:mt-24">
            {["Athletes", "Coaches", "Performance professionals"].map((audience, index) => (
              <p
                key={audience}
                className={`flex min-h-20 items-end border-b border-ink py-5 text-[0.76rem] font-bold tracking-[0.1em] uppercase sm:border-b-0 sm:px-6 ${
                  index === 0 ? "sm:pl-0" : "sm:border-l"
                }`}
              >
                {audience}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <Section aria-labelledby="purpose-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Why Insights exists</Eyebrow>
              <SectionHeading id="purpose-title" className="mt-6 max-w-[13ch]">
                Explain the why behind the work.
              </SectionHeading>
            </div>
            <div className="space-y-5 lg:col-span-5">
              <BodyCopy className="text-charcoal">
                Good performance coaching is not simply a list of exercises. Decisions are shaped
                by the athlete, the sport, the schedule and what the work is intended to achieve.
                INSIGHTS is where CAIRNOX explores those decisions in more depth.
              </BodyCopy>
              <p className="text-[1rem] leading-relaxed text-charcoal">
                The aim is not to publish for the sake of publishing. The aim is to make useful
                performance thinking clearer and more applicable.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid border-y border-ink md:grid-cols-3 lg:mt-24">
            {editorialPrinciples.map((principle, index) => (
              <li
                key={principle.number}
                className={`flex min-h-64 flex-col justify-between border-b border-ink py-8 md:border-b-0 md:px-8 ${
                  index === 0 ? "md:pl-0" : "md:border-l"
                }`}
              >
                <p className="type-eyebrow text-mineral">{principle.number}</p>
                <div className="mt-14">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] uppercase">
                    {principle.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-[1rem] leading-relaxed text-charcoal">
                    {principle.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="topics" aria-labelledby="topics-title" spacing="large" className="scroll-mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-moss">What CAIRNOX will explore</Eyebrow>
              <SectionHeading id="topics-title" className="mt-6 max-w-[14ch]">
                The questions behind performance.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-charcoal lg:col-span-4 lg:pb-1">
              Six editorial territories connect the athlete, the training process and the wider
              performance environment.
            </p>
          </div>

          <ol className="mt-16 grid border-t border-ink md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <li
                key={topic.number}
                className={`min-h-64 border-b border-ink py-8 md:px-8 ${
                  index % 2 === 1 ? "md:border-l" : "md:pl-0"
                } ${index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-8"}`}
              >
                <p className="type-eyebrow text-mineral">{topic.number} / Editorial topic</p>
                <h3 className="mt-16 max-w-[16ch] text-2xl font-semibold leading-[1.04] tracking-[-0.035em] uppercase">
                  {topic.title}
                </h3>
                <p className="mt-5 max-w-sm text-[1rem] leading-relaxed text-charcoal">{topic.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="launch-state-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">The library is being built</Eyebrow>
              <SectionHeading id="launch-state-title" className="mt-6 max-w-[13ch]">
                Start with the principles.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                CAIRNOX Insights will grow as articles are written and published. Until then, the
                METHOD page provides the clearest introduction to the principles that will shape
                the editorial work.
              </BodyCopy>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="/method">Explore the Method</ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  See how CAIRNOX works
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-ink lg:mt-24 lg:grid-cols-12">
            <div className="py-8 lg:col-span-4 lg:pr-8">
              <p className="type-eyebrow text-mineral">Publication status</p>
            </div>
            <div className="border-t border-ink py-8 lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-8">
              <p className="max-w-[24ch] text-3xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-4xl">
                No public articles until the thinking is ready to publish.
              </p>
              <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-charcoal">
                Planned topics are not presented as published content, and the library will not be
                padded with placeholder dates, authors or reading times.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="standard-title" tone="dark" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-stone">Editorial standard</Eyebrow>
              <SectionHeading id="standard-title" className="mt-6 max-w-[13ch]">
                Useful before impressive.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-xl text-[1.04rem] leading-relaxed text-stone-light">
                This is the intended standard for future CAIRNOX articles—not a claim about a
                publication library that does not yet exist.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid border-y border-stone/35 md:grid-cols-2 lg:mt-24 lg:grid-cols-5">
            {editorialStandard.map((item, index) => (
              <li
                key={item.number}
                className={`flex min-h-72 flex-col justify-between border-b border-stone/35 py-8 md:px-7 ${
                  index % 2 === 1 ? "md:border-l" : "md:pl-0"
                } ${index > 3 ? "md:border-b-0" : ""} ${
                  index === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:px-7"
                } lg:border-b-0`}
              >
                <p className="type-eyebrow text-stone">{item.number}</p>
                <div className="mt-14">
                  <h3 className="text-[1.02rem] font-semibold leading-tight tracking-[-0.015em] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[0.96rem] leading-relaxed text-stone-light">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="audiences-title" spacing="large">
        <Container>
          <Eyebrow className="text-moss">Built for people who want to understand the work</Eyebrow>
          <SectionHeading id="audiences-title" className="mt-6 max-w-[15ch]">
            Read it from the athlete&apos;s side or the coach&apos;s.
          </SectionHeading>

          <div className="mt-16 border-y border-ink lg:mt-24 lg:grid lg:grid-cols-2">
            <article className="border-b border-ink py-10 lg:border-b-0 lg:pr-12 lg:py-12">
              <p className="type-eyebrow text-mineral">01 / For athletes</p>
              <h3 className="mt-12 text-3xl font-semibold leading-none tracking-[-0.04em] sm:text-4xl">
                Understand the training process.
              </h3>
              <ul className="mt-10 border-t border-line">
                {athleteTopics.map((topic) => (
                  <li key={topic} className="border-b border-line py-4 text-[0.98rem] leading-relaxed text-charcoal">
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <ArrowLink href="/base">Explore BASE</ArrowLink>
                <ArrowLink href="/elevate">Explore ELEVATE</ArrowLink>
              </div>
            </article>

            <article className="py-10 lg:border-l lg:border-ink lg:pl-12 lg:py-12">
              <p className="type-eyebrow text-mineral">02 / For coaches &amp; performance professionals</p>
              <h3 className="mt-12 max-w-[18ch] text-3xl font-semibold leading-none tracking-[-0.04em] sm:text-4xl">
                Connect the work to the environment.
              </h3>
              <ul className="mt-10 border-t border-line">
                {coachTopics.map((topic) => (
                  <li key={topic} className="border-b border-line py-4 text-[0.98rem] leading-relaxed text-charcoal">
                    {topic}
                  </li>
                ))}
              </ul>
              <ArrowLink href="/apex" className="mt-8">
                Explore APEX
              </ArrowLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="library-title" tone="muted" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Future library framework</Eyebrow>
              <SectionHeading id="library-title" className="mt-6 max-w-[14ch]">
                A growing library of practical performance thinking.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-charcoal lg:col-span-5">
              When approved work exists, INSIGHTS will support a featured article, a latest-articles
              listing and simple topic browsing. Empty controls are deliberately withheld now.
            </p>
          </div>

          <div className="mt-16 grid border-y border-ink lg:mt-24 lg:grid-cols-12">
            <div className="py-10 lg:col-span-4 lg:pr-10 lg:py-12">
              <p className="type-eyebrow text-mineral">Future editorial questions</p>
              <p className="mt-8 max-w-sm text-[1rem] leading-relaxed text-charcoal">
                Questions identify the territory. They are not article titles, publication promises
                or links to content that does not exist.
              </p>
            </div>
            <ol className="border-t border-ink lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-10">
              {editorialQuestions.map((question, index) => (
                <li key={question} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-line py-5 last:border-b-0">
                  <span className="type-eyebrow pt-1 text-mineral">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[1.08rem] leading-relaxed text-charcoal">{question}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="start-method-title" spacing="large">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="text-moss">Start with the foundation</Eyebrow>
              <SectionHeading id="start-method-title" className="mt-6 max-w-[14ch]">
                Understand the system before the articles.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                The CAIRNOX METHOD explains the philosophy that connects physical preparation,
                progression and the wider performance environment. It is the best place to begin
                before the Insights library grows.
              </BodyCopy>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="/method">Read the Method</ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  About CAIRNOX
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-6">
                <ArrowLink href="/base">BASE</ArrowLink>
                <ArrowLink href="/elevate">ELEVATE</ArrowLink>
                <ArrowLink href="/apex">APEX</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
