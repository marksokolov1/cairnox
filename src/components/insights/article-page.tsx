import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowLink, Container, Eyebrow } from "@/components/ui/primitives";
import type {
  InsightBodyBlock,
  PublishedInsightArticle,
} from "@/types/insight-article";
import { getPublicAssetPath } from "@/config/site";

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function ArticleBlock({ block }: { block: InsightBodyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[1.08rem] leading-[1.85] text-charcoal sm:text-[1.16rem]">{block.text}</p>;
    case "heading": {
      const Tag = block.level === 2 ? "h2" : "h3";
      return (
        <Tag
          id={headingId(block.text)}
          className={
            block.level === 2
              ? "scroll-mt-28 pt-10 text-4xl font-semibold leading-none tracking-[-0.045em] sm:text-5xl"
              : "scroll-mt-28 pt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl"
          }
        >
          {block.text}
        </Tag>
      );
    }
    case "unordered-list":
      return (
        <ul className="space-y-3 border-y border-line py-6 text-[1.06rem] leading-relaxed text-charcoal sm:text-[1.14rem]">
          {block.items.map((item) => (
            <li key={item} className="grid grid-cols-[1rem_1fr] gap-3">
              <span aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol className="border-y border-line text-[1.06rem] leading-relaxed text-charcoal sm:text-[1.14rem]">
          {block.items.map((item, index) => (
            <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5 last:border-b-0">
              <span className="type-eyebrow pt-1 text-mineral">{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "pull-quote":
      return (
        <figure className="border-y border-ink py-9">
          <blockquote className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
            “{block.quote}”
          </blockquote>
          {block.attribution ? (
            <figcaption className="type-eyebrow mt-6 text-mineral">{block.attribution}</figcaption>
          ) : null}
        </figure>
      );
    case "image":
      return (
        <figure>
          <Image
            src={getPublicAssetPath(block.image.src)}
            alt={block.image.alt}
            width={block.image.width}
            height={block.image.height}
            sizes="(min-width: 1024px) 760px, calc(100vw - 40px)"
            className="h-auto w-full saturate-[0.9] contrast-[1.03]"
          />
          {block.image.caption ? (
            <figcaption className="type-eyebrow mt-4 text-mineral">{block.image.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "table":
      return (
        <div className="overflow-x-auto border-y border-ink py-4">
          <table className="w-full min-w-[38rem] border-collapse text-left text-[0.96rem] leading-relaxed">
            {block.caption ? <caption className="type-eyebrow mb-5 text-left text-mineral">{block.caption}</caption> : null}
            <thead>
              <tr className="border-b border-ink">
                {block.headers.map((header) => (
                  <th key={header} scope="col" className="px-4 py-4 text-[0.74rem] tracking-[0.1em] uppercase first:pl-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={row.join("-")} className="border-b border-line last:border-b-0">
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 ? (
                      <th key={`${rowIndex}-${cellIndex}`} scope="row" className="px-4 py-4 font-semibold first:pl-0">
                        {cell}
                      </th>
                    ) : (
                      <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-4 text-charcoal">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function InsightArticlePage({
  article,
  relatedArticles,
  siteUrl,
}: {
  article: PublishedInsightArticle;
  relatedArticles: readonly PublishedInsightArticle[];
  siteUrl: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author.name },
    datePublished: article.publicationDate,
    ...(article.updatedDate ? { dateModified: article.updatedDate } : {}),
    mainEntityOfPage: `${siteUrl}/insights/${article.slug}`,
    publisher: { "@type": "Organization", name: "CAIRNOX", url: siteUrl },
    ...(article.heroImage ? { image: `${siteUrl}${article.heroImage.src}` } : {}),
  };

  return (
    <main id="main-content" className="insights-page">
      <article>
        <header className="border-b border-line bg-canvas">
          <Container className="py-16 sm:py-24 lg:py-32">
            <Eyebrow className="text-moss">{article.category}</Eyebrow>
            <h1 className="mt-8 max-w-[13ch] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              {article.title}
            </h1>
            <p className="mt-10 max-w-3xl text-[1.18rem] leading-relaxed text-charcoal sm:text-[1.35rem]">
              {article.standfirst}
            </p>
            <dl className="mt-12 grid max-w-3xl border-y border-ink sm:grid-cols-3">
              <div className="border-b border-ink py-5 sm:border-b-0 sm:pr-6">
                <dt className="type-eyebrow text-mineral">Author</dt>
                <dd className="mt-2 text-[0.98rem]">{article.author.name}</dd>
              </div>
              <div className="border-b border-ink py-5 sm:border-b-0 sm:border-l sm:px-6">
                <dt className="type-eyebrow text-mineral">Published</dt>
                <dd className="mt-2 text-[0.98rem]">{formatDate(article.publicationDate)}</dd>
              </div>
              <div className="py-5 sm:border-l sm:pl-6">
                <dt className="type-eyebrow text-mineral">Reading territory</dt>
                <dd className="mt-2 text-[0.98rem]">{article.category}</dd>
              </div>
            </dl>
          </Container>
        </header>

        {article.heroImage ? (
          <Container className="pt-10 sm:pt-16">
            <figure>
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                width={article.heroImage.width}
                height={article.heroImage.height}
                priority
                sizes="(min-width: 1536px) 1408px, calc(100vw - 8vw)"
                className="max-h-[48rem] w-full object-cover saturate-[0.9] contrast-[1.03]"
              />
              {article.heroImage.caption ? (
                <figcaption className="type-eyebrow mt-4 text-mineral">{article.heroImage.caption}</figcaption>
              ) : null}
            </figure>
          </Container>
        ) : null}

        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[48rem] space-y-8">
            {article.body.map((block, index) => (
              <ArticleBlock key={`${block.type}-${index}`} block={block} />
            ))}

            {article.references?.length ? (
              <section aria-labelledby="references-title" className="mt-20 border-t border-ink pt-8">
                <h2 id="references-title" className="type-eyebrow text-mineral">References</h2>
                <ol className="mt-6 space-y-4 text-[0.94rem] leading-relaxed text-charcoal">
                  {article.references.map((reference, index) => (
                    <li key={`${reference.title}-${index}`}>
                      <span className="mr-3 font-semibold">{String(index + 1).padStart(2, "0")}</span>
                      {reference.authors ? `${reference.authors}. ` : ""}
                      {reference.url ? (
                        <a className="text-link" href={reference.url} rel="noreferrer" target="_blank">
                          {reference.title}
                        </a>
                      ) : (
                        reference.title
                      )}
                      {reference.publication ? `. ${reference.publication}` : ""}
                      {reference.year ? ` (${reference.year})` : ""}.
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </div>
        </Container>

        {article.relatedService || relatedArticles.length ? (
          <aside className="border-t border-line bg-stone-light py-16 sm:py-20" aria-label="Related reading">
            <Container className="grid gap-12 lg:grid-cols-2">
              {article.relatedService ? (
                <div>
                  <Eyebrow className="text-moss">Related CAIRNOX page</Eyebrow>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">{article.relatedService.label}</h2>
                  <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-charcoal">
                    {article.relatedService.description}
                  </p>
                  <ArrowLink className="mt-6" href={article.relatedService.href}>Explore {article.relatedService.label}</ArrowLink>
                </div>
              ) : null}
              {relatedArticles.length ? (
                <div>
                  <Eyebrow className="text-moss">Related Insights</Eyebrow>
                  <ul className="mt-6 border-t border-ink">
                    {relatedArticles.map((related) => (
                      <li key={related.slug} className="border-b border-line py-5">
                        <Link href={`/insights/${related.slug}` as Route} className="text-lg font-semibold tracking-[-0.02em] hover:underline">
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Container>
          </aside>
        ) : null}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
