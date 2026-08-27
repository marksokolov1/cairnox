import { AboutPage as AboutPageContent } from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Mathew Skyner | Cricket Performance",
  description:
    "Meet Mathew Skyner, the practitioner behind CAIRNOX, with cricket performance experience in the USA Cricket environment and wider high-performance sport.",
  pathname: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
