import { ElevatePage as ElevatePageContent } from "@/components/elevate/elevate-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ELEVATE | 1:1 Cricket Performance Coaching",
  description:
    "Individual cricket performance coaching built around the player's role, schedule, season and development needs, delivered directly by Mathew Skyner.",
  pathname: "/elevate",
});

export default function ElevatePage() {
  return <ElevatePageContent />;
}
