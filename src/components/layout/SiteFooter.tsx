import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { homepageData } from "@/features/homepage/homepage.data";
import { footerNavItems, legalNavItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(9,8,6,0.94)_0%,rgba(6,5,4,0.98)_100%)] py-10 sm:py-12">
      <Container>
        <div className="grid gap-9 border-b border-[color:var(--color-border)] pb-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.7fr)_minmax(0,0.95fr)] md:items-start">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-[1.9rem] font-semibold uppercase tracking-[-0.03em] text-[var(--color-brass)] sm:text-[2.25rem]"
            >
              {siteConfig.name}
            </Link>
            <p className="max-w-md font-serif text-[1.35rem] leading-[1.18] text-[var(--color-text-soft)] sm:text-[1.55rem]">
              {homepageData.footer.tagline}
            </p>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-brass)]/90 sm:text-[11px]">
              Explore
            </p>
            <ul className="space-y-3">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text-soft)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-brass)]/90 sm:text-[11px]">
                Connect
              </p>
              <ul className="space-y-3">
                {siteConfig.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text-soft)]"
                    >
                      {item.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-brass)]/90 sm:text-[11px]">
                Legal
              </p>
              <ul className="space-y-3">
                {legalNavItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text-soft)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
