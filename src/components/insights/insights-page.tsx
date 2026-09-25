import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { getPublicAssetPath } from "@/config/site";
import type { PublishedInsightArticle } from "@/types/insight-article";
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
    title: "Cricket Physical Preparation",
    copy: "Strength, power, conditioning and the physical qualities supporting cricket.",
  },
  {
    number: "02",
    title: "Strength & Power for Cricket",
    copy: "How strength, explosive qualities and rotational performance can be developed over time.",
  },
  {
    number: "03",
    title: "Cricket Conditioning & Development",
    copy: "Conditioning, movement and long-term athletic development for cricket players.",
  },
  {
    number: "04",
    title: "In-Season & Off-Season Planning",
    copy: "How physical preparation fits around practice, matches, travel and season phase.",
  },
  {
    number: "05",
    title: "Workload & Monitoring",
    copy: "Fast-bowling demands, training load, recovery and information that supports decisions.",
  },
  {
    number: "06",
    title: "Cricket Performance Systems",
    copy: "How academies, clubs, teams and organisations structure player-development environments.",
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
  "How physical preparation interacts with cricket practice and matches",
  "When more individual support may be needed",
] as const;

const coachTopics = [
  "Cricket physical-development systems",
  "Fast-bowler workload planning",
  "Athlete monitoring",
  "Seasonal cricket planning",
  "Academy and team performance environments",
] as const;

const editorialQuestions = [
  "How should cricket physical preparation change across a competitive season?",
  "What physical demands make fast-bowling preparation different?",
  "How can strength and power support cricket without losing sight of the sport?",
  "How should physical training fit around cricket practice and matches?",
  "What information is useful when monitoring cricket players?",
  "When does a player need individual coaching rather than a fixed programme?",
  "What makes an academy performance system useful to coaches?",
  "How should off-season development prepare a player for the cricket calendar?",
] as const;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function InsightsPage({ articles }: { articles: readonly PublishedInsightArticle[] }) {
  const featuredArticle = articles[0];

  return (
    <main id="main-content" className="insights-page">
      <section aria-labelledby="insights-hero-title" className="border-b border-line bg-canvas">
        <Container className="flex min-h-[39rem] flex-col justify-between py-14 sm:py-20 lg:min-h-[46rem] lg:py-24">
          <Eyebrow className="text-moss">CAIRNOX Insights</Eyebrow>

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:items-end">
            <DisplayHeading id="insights-hero-title" className="type-hero max-w-[10ch] lg:col-span-7">
              Thinking for better cricket performance.
            </DisplayHeading>

            <div className="lg:col-span-5 lg:pb-1">
              <BodyCopy className="text-charcoal">
                Practical thinking on cricket physical preparation, player development and the
                systems surrounding performance.
              </BodyCopy>
              <p className="mt-6 border-t border-line pt-5 text-[0.98rem] leading-relaxed text-charcoal">
                Built for cricket players, coaches and performance professionals who want to
                understand the reasoning behind the work.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="#latest-insights">Read the articles</ButtonLink>
                <ButtonLink href="/method" variant="secondary">
                  The CAIRNOX Method
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-ink sm:grid-cols-3 lg:mt-24">
            {["Cricket players", "Cricket coaches", "Performance professionals"].map((audience, index) => (
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

      {featuredArticle ? (
        <Section id="latest-insights" aria-labelledby="latest-insights-title" spacing="large">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink pb-7">
              <div>
                <Eyebrow className="text-moss">Published thinking</Eyebrow>
                <SectionHeading id="latest-insights-title" className="mt-6">
                  Latest Insights.
                </SectionHeading>
              </div>
              <p className="max-w-sm text-[1rem] leading-relaxed text-charcoal">
                Practical perspectives from Mathew Skyner on preparing cricket players to perform.
              </p>
            </div>

            <article className="grid border-b border-ink py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
              {featuredArticle.heroImage ? (
                <Link
                  href={`/insights/${featuredArticle.slug}` as Route}
                  aria-label={`Read ${featuredArticle.title}`}
                  className="block overflow-hidden lg:col-span-7"
                >
                  <Image
                    src={getPublicAssetPath(featuredArticle.heroImage.src)}
                    alt={featuredArticle.heroImage.alt}
                    width={featuredArticle.heroImage.width}
                    height={featuredArticle.heroImage.height}
                    sizes="(min-width: 1024px) 58vw, calc(100vw - 40px)"
                    className="aspect-[3/2] w-full object-cover saturate-[0.9] contrast-[1.03]"
                  />
                </Link>
              ) : null}
              <div className="flex flex-col justify-between pt-9 lg:col-span-5 lg:pt-0">
                <div>
                  <p className="type-eyebrow text-mineral">Featured article / {featuredArticle.category}</p>
                  <h3 className="mt-7 max-w-[18ch] text-[clamp(2rem,3.2vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                    <Link href={`/insights/${featuredArticle.slug}` as Route} className="hover:underline">
                      {featuredArticle.title}
                    </Link>
                  </h3>
                  <p className="mt-6 max-w-lg text-[1.04rem] leading-relaxed text-charcoal">
                    {featuredArticle.standfirst}
                  </p>
                </div>
                <div className="mt-10 border-t border-line pt-6">
                  <p className="text-[0.9rem] text-charcoal">
                    {featuredArticle.author.name} / <time dateTime={featuredArticle.publicationDate}>{formatDate(featuredArticle.publicationDate)}</time>
                  </p>
                  <ArrowLink href={`/insights/${featuredArticle.slug}` as Route} className="mt-6">
                    Read {featuredArticle.title}
                  </ArrowLink>
                </div>
              </div>
            </article>

            <div className="mt-14 flex flex-wrap items-end justify-between gap-5">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">All articles</h3>
              <p className="type-eyebrow text-mineral">{String(articles.length).padStart(2, "0")} published</p>
            </div>
            <ol className="mt-6 border-t border-ink">
              {articles.map((article, index) => (
                <li key={article.slug} className="border-b border-line py-7 sm:py-9">
                  <article className="grid gap-5 sm:grid-cols-[7rem_1fr] sm:gap-8 lg:grid-cols-[10rem_1fr_auto] lg:items-center">
                    <Link
                      href={`/insights/${article.slug}` as Route}
                      aria-label={`Read ${article.title}`}
                      className="block w-full max-w-[13rem] overflow-hidden sm:max-w-none"
                    >
                      {article.heroImage ? (
                        <Image
                          src={getPublicAssetPath(article.heroImage.src)}
                          alt={article.heroImage.alt}
                          width={article.heroImage.width}
                          height={article.heroImage.height}
                          sizes="(min-width: 640px) 160px, 208px"
                          className="aspect-[3/2] w-full object-cover saturate-[0.9] contrast-[1.03]"
                        />
                      ) : null}
                    </Link>
                    <div>
                      <p className="type-eyebrow text-mineral">{String(index + 1).padStart(2, "0")} / {article.category}</p>
                      <h4 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                        <Link href={`/insights/${article.slug}` as Route} className="hover:underline">
                          {article.title}
                        </Link>
                      </h4>
                      <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-charcoal">{article.description}</p>
                      <p className="mt-4 text-[0.88rem] text-charcoal">
                        {article.author.name} / <time dateTime={article.publicationDate}>{formatDate(article.publicationDate)}</time>
                      </p>
                    </div>
                    <ArrowLink
                      href={`/insights/${article.slug}` as Route}
                      aria-label={`Read ${article.title}`}
                      className="lg:justify-self-end"
                    >
                      Read article
                    </ArrowLink>
                  </article>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      ) : null}

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
                Cricket performance coaching is not simply a list of exercises. Decisions are shaped
                by the player, playing role, practice and match schedule, season phase and what the
                work is intended to achieve. INSIGHTS is where CAIRNOX explores those decisions.
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
              Six editorial territories connect the cricket player, physical preparation and the
              wider team or academy environment.
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
                CAIRNOX articles begin with practical questions, explain the context and connect
                the discussion back to coaching decisions.
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
              <Eyebrow className="text-moss">Future editorial questions</Eyebrow>
              <SectionHeading id="library-title" className="mt-6 max-w-[14ch]">
                Questions worth exploring next.
              </SectionHeading>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-charcoal lg:col-span-5">
              These questions set a direction for future writing on cricket preparation and
              performance systems. They are topics to explore, not published articles.
            </p>
          </div>

          <div className="mt-16 grid border-y border-ink lg:mt-24 lg:grid-cols-12">
            <div className="py-10 lg:col-span-4 lg:pr-10 lg:py-12">
              <p className="type-eyebrow text-mineral">Future editorial questions</p>
              <p className="mt-8 max-w-sm text-[1rem] leading-relaxed text-charcoal">
                A working set of questions for future CAIRNOX articles.
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
                Explore the thinking behind the articles.
              </SectionHeading>
            </div>
            <div className="lg:col-span-5">
              <BodyCopy className="text-charcoal">
                The CAIRNOX METHOD explains the philosophy that connects cricket physical
                preparation, progression and the wider performance environment. It gives the
                articles a shared foundation.
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
