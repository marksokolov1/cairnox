"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation } from "@/config/site";
import { ButtonLink } from "@/components/ui/primitives";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="menu-trigger"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" className="menu-trigger-line" />
        <span aria-hidden="true" className="menu-trigger-line" />
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-line bg-canvas shadow-[0_20px_50px_rgba(20,20,18,0.08)]"
        >
          <nav aria-label="Mobile navigation" className="site-container py-5">
            <ul className="divide-y divide-line border-y border-line">
              {primaryNavigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-16 items-center justify-between gap-6 py-3 text-sm font-semibold tracking-[0.12em]"
                  >
                    <span>{item.label}</span>
                    {"descriptor" in item ? (
                      <span className="max-w-44 text-right text-[0.7rem] font-normal leading-snug tracking-normal text-mineral">
                        {item.descriptor}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/contact"
              className="mt-5 w-full"
              onClick={closeMenu}
            >
              Work with Mathew
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
