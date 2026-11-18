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
        <Container className="py-12 sm:py-16 lg:py-20">
          <Eyebrow className="text-moss">CAIRNOX Insights</Eyebrow>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <DisplayHeading id="insights-hero-title" className="type-hero max-w-[10ch] lg:col-span-7">
              Thinking for better cricket performance.
            </DisplayHeading>

            <div className="lg:col-span-5 lg:pb-1">
              <BodyCopy className="text-charcoal">
                Practical thinking on cricket physical preparation, player development and the
                systems surrounding performance.
              </BodyCopy>
              <p className="mt-4 text-base leading-relaxed text-charcoal">
                Written for cricket players, coaches and performance professionals.
              </p>
              {featuredArticle && <ButtonLink href="#latest-insights" className="mt-6">Read the articles</ButtonLink>}
            </div>
          </div>

        </Container>
      </section>

      {featuredArticle ? (
        <Section id="latest-insights" aria-labelledby="latest-insights-title" spacing="compact" className="scroll-mt-24">
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

      <Section id="topics" aria-labelledby="topics-title" tone="muted" spacing="compact" className="scroll-mt-24">
        <Container>
          <Eyebrow className="text-moss">The CAIRNOX editorial approach</Eyebrow>
          <SectionHeading id="topics-title" className="mt-4">What we write about.</SectionHeading>
          <BodyCopy className="mt-4 max-w-2xl text-charcoal">
            Each article starts with a practical coaching question. We explain the cricket context,
            use evidence where it helps, and say where an idea may not apply.
          </BodyCopy>
          <ul className="mt-8 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <li key={topic.number} className="border-b border-line py-4 sm:pr-6">
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal">{topic.copy}</p>
              </li>
            ))}
          </ul>
          <ArrowLink href="/method" className="mt-7">Read the CAIRNOX Method</ArrowLink>
        </Container>
      </Section>
    </main>
  );
}
