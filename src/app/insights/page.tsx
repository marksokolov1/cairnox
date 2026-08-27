import { InsightsPage as InsightsPageContent } from "@/components/insights/insights-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Insights",
  description:
    "Practical thinking on cricket physical preparation, athlete development, performance planning, workload and cricket performance systems.",
  pathname: "/insights",
});

export default function InsightsPage() {
  return <InsightsPageContent />;
}
