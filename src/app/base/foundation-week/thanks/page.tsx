import Link from "next/link";
import { notFound } from "next/navigation";
import { BodyCopy, Container, DisplayHeading, Eyebrow, Section } from "@/components/ui/primitives";
import { foundationWeekDownloadEnabled, foundationWeekPdfPath } from "@/config/foundation-week";
import { getPublicAssetPath } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Download The Foundation Week",
  description: "Download the CAIRNOX BASE early off-season cricket training guide.",
  pathname: "/base/foundation-week/thanks/",
  index: false,
});

export default function FoundationWeekDownloadPage() {
  if (!foundationWeekDownloadEnabled) notFound();

  return (
    <main id="main-content">
      <Section aria-labelledby="foundation-download-title" spacing="large">
        <Container>
          <Eyebrow className="text-moss">CAIRNOX BASE / Free training guide</Eyebrow>
          <DisplayHeading id="foundation-download-title" className="mt-5 max-w-[14ch]">The Foundation Week.</DisplayHeading>
          <BodyCopy className="mt-6 max-w-xl text-charcoal">
            Download Mathew Skyner’s three-session early off-season cricket training guide. Start with the weekly overview before heading into your first session.
          </BodyCopy>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href={getPublicAssetPath(foundationWeekPdfPath)} download className="button-base border-ink bg-ink text-canvas hover:bg-charcoal">
              Download the free guide (PDF)
            </a>
            <Link href="/base" className="underline underline-offset-4">Back to BASE</Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
