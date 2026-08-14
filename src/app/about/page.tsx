import { AboutPage as AboutPageContent } from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Mathew Skyner",
  description:
    "Meet Mathew Skyner, the high-performance coach behind CAIRNOX, with experience across professional rugby, USA Cricket, PSA Squash, British Cycling, professional soccer and NCAA programmes.",
  pathname: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
