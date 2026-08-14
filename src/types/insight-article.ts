export const insightCategories = [
  "Physical Preparation",
  "Athlete Development",
  "Performance Planning",
  "Monitoring & Adaptation",
  "Load & Recovery",
  "Performance Systems",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type InsightAuthor = {
  name: string;
  role?: string;
};

export type InsightImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type InsightReference = {
  title: string;
  url?: string;
  authors?: string;
  publication?: string;
  year?: string;
};

export type InsightTableBlock = {
  type: "table";
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

export type InsightBodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "unordered-list"; items: readonly string[] }
  | { type: "ordered-list"; items: readonly string[] }
  | { type: "pull-quote"; quote: string; attribution?: string }
  | { type: "image"; image: InsightImage }
  | InsightTableBlock;

type InsightArticleBase = {
  title: string;
  slug: string;
  description: string;
  category: InsightCategory;
  standfirst: string;
  body: readonly InsightBodyBlock[];
  heroImage?: InsightImage;
  references?: readonly InsightReference[];
  relatedService?: {
    label: "BASE" | "ELEVATE" | "APEX" | "METHOD";
    href: "/base" | "/elevate" | "/apex" | "/method";
    description: string;
  };
  relatedArticleSlugs?: readonly string[];
  seo?: {
    title?: string;
    description?: string;
    openGraphImage?: string;
  };
};

export type DraftInsightArticle = InsightArticleBase & {
  status: "draft";
  author?: InsightAuthor;
  publicationDate?: string;
  updatedDate?: string;
};

export type PublishedInsightArticle = InsightArticleBase & {
  status: "published";
  author: InsightAuthor;
  publicationDate: string;
  updatedDate?: string;
};

export type InsightArticle = DraftInsightArticle | PublishedInsightArticle;
