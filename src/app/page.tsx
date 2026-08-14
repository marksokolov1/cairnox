import type { Metadata } from "next";
import { Homepage } from "@/components/home/homepage";

export const metadata: Metadata = {
  title: { absolute: "CAIRNOX | High-Performance Coaching & Consultancy" },
  description:
    "High-performance coaching, structured training programmes and consultancy for athletes and sporting organisations. Led by Mathew Skyner.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CAIRNOX | High-Performance Coaching & Consultancy",
    description:
      "High-performance coaching, structured training programmes and consultancy for athletes and sporting organisations. Led by Mathew Skyner.",
    url: "/",
  },
};

export default function HomePage() {
  return <Homepage />;
}
