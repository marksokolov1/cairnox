import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Privacy", description: "CAIRNOX privacy information.", pathname: "/privacy", index: false });

export default function PrivacyPage() {
  return <PagePlaceholder eyebrow="Legal placeholder" title="Privacy" />;
}
