import type { Metadata } from "next";
import { Homepage } from "@/components/home/homepage";
import { getAbsoluteUrl } from "@/config/site";
import { getPublishedInsights } from "@/content/insights/articles";

export const metadata: Metadata = {
  title: { absolute: "CAIRNOX | Cricket Performance Coaching & Consultancy" },
  description:
    "Cricket physical preparation, structured performance programmes, individual coaching and consultancy for serious players and cricket organisations.",
  alternates: { canonical: getAbsoluteUrl() },
  openGraph: {
    title: "CAIRNOX | Cricket Performance Coaching & Consultancy",
    description:
      "Cricket physical preparation, structured performance programmes, individual coaching and consultancy for serious players and cricket organisations.",
    url: getAbsoluteUrl(),
  },
};

export default function HomePage() {
  const latestInsight = [...getPublishedInsights()].sort((a, b) =>
    b.publicationDate.localeCompare(a.publicationDate),
  )[0];

  return <Homepage latestInsight={latestInsight} />;
}
