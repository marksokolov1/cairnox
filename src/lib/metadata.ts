import type { Metadata } from "next";
import { getAbsoluteUrl, siteConfig } from "@/config/site";

export function createPageMetadata({
  title,
  description,
  pathname,
  index = true,
}: {
  title: string;
  description: string;
  pathname: string;
  index?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: getAbsoluteUrl(pathname) },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: getAbsoluteUrl(pathname),
    },
    robots: { index, follow: true },
  };
}
