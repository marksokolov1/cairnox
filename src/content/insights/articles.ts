import type {
  InsightArticle,
  PublishedInsightArticle,
} from "@/types/insight-article";

// Keep drafts here while they are being developed. The public listing, article
// routes and sitemap only read from getPublishedInsights(). No launch articles
// have been approved, so the collection is intentionally empty.
export const allInsights: readonly InsightArticle[] = [];

function validateInsightLibrary(articles: readonly InsightArticle[]) {
  const slugs = new Set<string>();

  for (const article of articles) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
      throw new Error(`Invalid Insights slug: ${article.slug}`);
    }

    if (slugs.has(article.slug)) {
      throw new Error(`Duplicate Insights slug: ${article.slug}`);
    }

    slugs.add(article.slug);

    if (article.status === "published" && !article.publicationDate) {
      throw new Error(`Published Insight is missing a publication date: ${article.slug}`);
    }
  }
}

validateInsightLibrary(allInsights);

export function getPublishedInsights(): readonly PublishedInsightArticle[] {
  return allInsights.filter(
    (article): article is PublishedInsightArticle => article.status === "published",
  );
}

export function getPublishedInsight(slug: string): PublishedInsightArticle | undefined {
  return getPublishedInsights().find((article) => article.slug === slug);
}
