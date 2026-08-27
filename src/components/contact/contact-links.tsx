import { contactConfig } from "@/config/site";
import { cn } from "@/lib/cn";

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function DirectContactLinks({ className }: { className?: string }) {
  return (
    <div className={cn("border-t border-line pt-6", className)}>
      <p className="text-[0.72rem] font-bold tracking-[0.12em] text-mineral uppercase">
        Direct contact
      </p>
      <a
        className="text-link mt-4 inline-block text-base"
        href={`mailto:${contactConfig.email}`}
      >
        {contactConfig.email}
      </a>
      <ul className="mt-6 grid gap-3">
        {contactConfig.instagram.map((account) => (
          <li key={account.href}>
            <a
              className="group flex min-h-11 items-center gap-3 text-sm text-charcoal transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink motion-reduce:transition-none"
              href={account.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${account.label} on Instagram (opens in a new tab)`}
            >
              <InstagramMark />
              <span>
                <span className="block font-semibold text-ink">{account.label}</span>
                <span className="block text-mineral group-hover:text-charcoal">{account.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CompactSocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-4", className)}>
      <a className="footer-link" href={`mailto:${contactConfig.email}`}>
        {contactConfig.email}
      </a>
      {contactConfig.instagram.map((account) => (
        <a
          key={account.href}
          className="footer-link flex min-h-11 items-center gap-2"
          href={account.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${account.label} on Instagram (opens in a new tab)`}
        >
          <InstagramMark className="size-[1.1rem]" />
          <span>{account.handle}</span>
        </a>
      ))}
    </div>
  );
}
