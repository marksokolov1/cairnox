import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Cookie Policy", description: "CAIRNOX cookie policy.", pathname: "/cookie-policy", index: false });

export default function CookiePolicyPage() {
  return <PagePlaceholder eyebrow="Legal placeholder" title="Cookie Policy" />;
}
