"use client";

import { useId, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { primaryNavItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:rgba(7,6,4,0.9)] backdrop-blur-md">
      <Container>
        <div className="flex min-h-[var(--header-height)] items-center gap-3 py-3">
          <Link
            href="/"
            className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-brass)] transition-colors hover:text-[var(--color-text-soft)]"
          >
            {siteConfig.name}
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden flex-1 items-center justify-center lg:flex"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text-soft)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden lg:block">
            <Button href={siteConfig.reservation.href}>
              {siteConfig.reservation.label}
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <Button
              href={siteConfig.reservation.href}
              className="px-3 py-2 text-[10px] sm:px-4"
            >
              Reserve
            </Button>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[color:var(--color-border-strong)] bg-[color:rgba(17,16,13,0.82)] text-[var(--color-text-soft)] transition-colors hover:border-[color:var(--color-brass)] hover:bg-[color:rgba(197,138,69,0.08)] active:bg-[color:rgba(197,138,69,0.12)]"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-px w-4 bg-current transition-transform duration-200",
                    isMenuOpen && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-4 bg-current transition-opacity duration-200",
                    isMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-4 bg-current transition-transform duration-200",
                    isMenuOpen && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={cn(
            "overflow-hidden transition-[grid-template-rows,opacity] duration-200 lg:hidden",
            isMenuOpen ? "grid grid-rows-[1fr] pb-4 opacity-100" : "grid grid-rows-[0fr] opacity-0",
          )}
        >
          <nav
            aria-label="Mobile navigation"
            className="min-h-0 overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--color-border)] bg-[color:rgba(17,16,13,0.92)]"
          >
            <ul className="grid divide-y divide-[color:var(--color-border)]">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-12 items-center px-4 py-3 text-sm uppercase tracking-[0.16em] text-[var(--color-text-soft)] transition-colors hover:bg-[color:rgba(197,138,69,0.08)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
