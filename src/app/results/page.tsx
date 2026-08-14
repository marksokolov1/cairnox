import { ResultsPage as ResultsPageContent } from "@/components/results/results-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Results & Athlete Proof",
  description:
    "Explore genuine athlete testimonials, high-performance experience and the evidence principles CAIRNOX uses to evaluate performance work responsibly.",
  pathname: "/results",
});

export default function ResultsPage() {
  return <ResultsPageContent />;
}
