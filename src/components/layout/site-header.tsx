import Link from "next/link";
import { primaryNavigation } from "@/config/site";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Logo } from "@/components/ui/logo";
import { ButtonLink, Container } from "@/components/ui/primitives";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-sm">
      <Container className="relative flex min-h-[4.75rem] items-center justify-between gap-6 py-3">
        <Logo priority />

        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4 2xl:gap-6">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    title={"descriptor" in item ? item.descriptor : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink
            href="/contact"
            className="min-h-[2.6rem] shrink-0 px-[1.125rem] py-[0.7rem] text-[0.7rem]"
          >
            Work with Mathew
          </ButtonLink>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
