import { MethodPage as MethodPageContent } from "@/components/method/method-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "The CAIRNOX Method | Performance Built Layer by Layer",
  description:
    "Explore the CAIRNOX approach to physical development: strong foundations, deliberate progression and performance built through the accumulation of high-quality work.",
  pathname: "/method",
});

export default function MethodPage() {
  return <MethodPageContent />;
}
