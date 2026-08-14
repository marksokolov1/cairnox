import { ApexContactPage } from "@/components/contact/contact-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Discuss an APEX Project",
  description: "Discuss high-performance consultancy support for your team or organisation with CAIRNOX APEX.",
  pathname: "/contact/apex",
});

export default function Page() {
  return <ApexContactPage />;
}
