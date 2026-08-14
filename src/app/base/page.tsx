import { BasePage as BasePageContent } from "@/components/base/base-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BASE | Performance Programmes",
  description:
    "Structured strength, power and conditioning programmes for athletes who want expert programming and a clear system to follow independently.",
  pathname: "/base",
});

export default function BasePage() {
  return <BasePageContent />;
}
