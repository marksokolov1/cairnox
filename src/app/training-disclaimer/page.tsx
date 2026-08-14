import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Training Disclaimer", description: "CAIRNOX training disclaimer.", pathname: "/training-disclaimer", index: false });

export default function TrainingDisclaimerPage() {
  return <PagePlaceholder eyebrow="Legal placeholder" title="Training Disclaimer" />;
}
