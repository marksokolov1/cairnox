import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Terms", description: "CAIRNOX website terms.", pathname: "/terms", index: false });

export default function TermsPage() {
  return <PagePlaceholder eyebrow="Legal placeholder" title="Terms" />;
}
