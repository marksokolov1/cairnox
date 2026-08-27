import { ApexPage as ApexPageContent } from "@/components/apex/apex-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "APEX | Cricket Performance Consultancy",
  description:
    "Cricket performance consultancy for teams, clubs, academies, schools and organisations focused on physical development, workload and performance systems.",
  pathname: "/apex",
});

export default function ApexPage() {
  return <ApexPageContent />;
}
