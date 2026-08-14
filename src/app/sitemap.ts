import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedInsights } from "@/content/insights/articles";

const routes = [
  "",
  "/base",
  "/elevate",
  "/apex",
  "/method",
  "/about",
  "/results",
  "/insights",
  "/contact",
  "/contact/base",
  "/contact/elevate",
  "/contact/apex",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? ("monthly" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const insightRoutes = getPublishedInsights().map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: article.updatedDate ?? article.publicationDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes];
}
