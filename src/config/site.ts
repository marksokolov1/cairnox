const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cairnox.com/";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  name: "CAIRNOX",
  title: "CAIRNOX | High-Performance Coaching & Consultancy",
  description:
    "Founder-led high-performance coaching, performance programmes and consultancy built on structure, progression and performance.",
  url: configuredSiteUrl.replace(/\/+$/, ""),
} as const;

export const siteBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

export function getAbsoluteUrl(pathname = "/") {
  if (/^https?:\/\//i.test(pathname)) {
    return pathname;
  }

  const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+/, "")}`;

  return `${siteConfig.url}${normalizedPath}`;
}

export function getPublicAssetPath(pathname: string) {
  if (/^(?:https?:)?\/\//i.test(pathname) || pathname.startsWith("data:")) {
    return pathname;
  }

  return `${siteBasePath}/${pathname.replace(/^\/+/, "")}`;
}

export const primaryNavigation = [
  { label: "BASE", href: "/base", descriptor: "Performance Programmes" },
  { label: "ELEVATE", href: "/elevate", descriptor: "1:1 Performance Coaching" },
  { label: "APEX", href: "/apex", descriptor: "High-Performance Consultancy" },
  { label: "METHOD", href: "/method" },
  { label: "ABOUT", href: "/about" },
  { label: "RESULTS", href: "/results" },
  { label: "INSIGHTS", href: "/insights" },
] as const;

export const footerNavigation = [
  {
    heading: "CAIRNOX",
    links: [
      { label: "Method", href: "/method" },
      { label: "About", href: "/about" },
      { label: "Results", href: "/results" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "BASE",
    links: [{ label: "Performance Programmes", href: "/base" }],
  },
  {
    heading: "ELEVATE",
    links: [{ label: "1:1 Performance Coaching", href: "/elevate" }],
  },
  {
    heading: "APEX",
    links: [{ label: "High-Performance Consultancy", href: "/apex" }],
  },
  {
    heading: "CONNECT",
    links: [{ label: "Contact", href: "/contact" }],
  },
] as const;

export const legalNavigation = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Training Disclaimer", href: "/training-disclaimer" },
] as const;

export const futureRoutePatterns = [
  "/base/[programme]",
  "/apex/[service]",
  "/results/[case-study]",
  "/insights/[article]",
] as const;
