import { ElevateContactPage } from "@/components/contact/contact-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Apply for ELEVATE Coaching",
  description: "Apply for CAIRNOX ELEVATE 1:1 performance coaching with Mathew Skyner.",
  pathname: "/contact/elevate",
});

export default function Page() {
  return <ElevateContactPage />;
}
