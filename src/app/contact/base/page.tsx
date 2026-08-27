import { BaseContactPage } from "@/components/contact/contact-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Register Interest in BASE",
  description: "Register interest in upcoming CAIRNOX BASE cricket performance programmes.",
  pathname: "/contact/base",
});

export default function Page() {
  return <BaseContactPage />;
}
