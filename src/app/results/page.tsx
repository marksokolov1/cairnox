import { ResultsPage as ResultsPageContent } from "@/components/results/results-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Performance Experience & Evidence",
  description:
    "Explore CAIRNOX cricket performance experience, genuine professional-rugby testimonials and the evidence principles used to evaluate work responsibly.",
  pathname: "/results",
});

export default function ResultsPage() {
  return <ResultsPageContent />;
}
