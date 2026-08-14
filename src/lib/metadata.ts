import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

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
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: pathname,
    },
    robots: { index, follow: true },
  };
}
