import { ApexPage as ApexPageContent } from "@/components/apex/apex-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "APEX | High-Performance Consultancy",
  description:
    "High-performance consultancy for coaches, schools, clubs and sporting organisations focused on physical development, load management and performance systems.",
  pathname: "/apex",
});

export default function ApexPage() {
  return <ApexPageContent />;
}
