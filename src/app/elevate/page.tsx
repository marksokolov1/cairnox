import { ElevatePage as ElevatePageContent } from "@/components/elevate/elevate-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ELEVATE | 1:1 Performance Coaching",
  description:
    "Personalised performance coaching built around your sport, schedule and development needs. CAIRNOX ELEVATE is delivered directly by Mathew Skyner.",
  pathname: "/elevate",
});

export default function ElevatePage() {
  return <ElevatePageContent />;
}
