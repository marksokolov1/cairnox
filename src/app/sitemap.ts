import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/config/site";
import { getPublishedInsights } from "@/content/insights/articles";

export const dynamic = "force-static";

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
    url: getAbsoluteUrl(route || "/"),
    changeFrequency: route === "" ? ("monthly" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const insightRoutes = getPublishedInsights().map((article) => ({
    url: getAbsoluteUrl(`/insights/${article.slug}`),
    lastModified: article.updatedDate ?? article.publicationDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes];
}
