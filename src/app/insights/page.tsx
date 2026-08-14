import { InsightsPage as InsightsPageContent } from "@/components/insights/insights-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Insights",
  description:
    "Practical thinking on physical preparation, athlete development, performance planning and the systems surrounding high-performance sport.",
  pathname: "/insights",
});

export default function InsightsPage() {
  return <InsightsPageContent />;
}
