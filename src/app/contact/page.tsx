import { ContactHub } from "@/components/contact/contact-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact CAIRNOX about performance programmes, 1:1 coaching, high-performance consultancy or general enquiries.",
  pathname: "/contact",
});

export default function ContactPage() {
  return <ContactHub />;
}
