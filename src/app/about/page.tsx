import { AboutPage as AboutPageContent } from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Mathew Skyner | Multi-Sport High-Performance Coach",
  description:
    "Meet Mathew Skyner, the coach behind CAIRNOX, with experience across USA Cricket, professional rugby, PSA Squash, British Cycling, professional soccer and NCAA programmes.",
  pathname: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
