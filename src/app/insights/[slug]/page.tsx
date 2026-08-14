import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticlePage } from "@/components/insights/article-page";
import {
  getPublishedInsight,
  getPublishedInsights,
} from "@/content/insights/articles";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedInsights().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedInsight(slug);

  if (!article) {
    return {
      title: "Insight not found",
      robots: { index: false, follow: false },
    };
  }

  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.description;
  const pathname = `/insights/${article.slug}`;
  const openGraphImage = article.seo?.openGraphImage ?? article.heroImage?.src;

  return {
    title,
    description,
    alternates: { canonical: pathname },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      siteName: siteConfig.name,
      title,
      description,
      url: pathname,
      publishedTime: article.publicationDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      images: openGraphImage ? [{ url: openGraphImage }] : undefined,
    },
  };
}

export default async function InsightArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getPublishedInsight(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = (article.relatedArticleSlugs ?? [])
    .map((relatedSlug) => getPublishedInsight(relatedSlug))
    .filter((related) => related !== undefined);

  return (
    <InsightArticlePage
      article={article}
      relatedArticles={relatedArticles}
      siteUrl={siteConfig.url}
    />
  );
}
