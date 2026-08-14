import Link from "next/link";
import { footerNavigation, legalNavigation } from "@/config/site";
import { Container } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="site-footer bg-ink text-canvas">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 border-b border-white/20 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          {footerNavigation.map((group) => (
            <div key={group.heading}>
              <p className="type-eyebrow text-stone">{group.heading}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="footer-link" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.16em]">CAIRNOX</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">
              Structure. Progression. Performance.
            </p>
          </div>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.78rem] text-stone">
              {legalNavigation.map((link) => (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
