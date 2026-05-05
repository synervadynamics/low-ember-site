import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { homepageData } from "@/features/homepage/homepage.data";
import { footerNavItems, legalNavItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:rgba(9,8,6,0.92)] py-12 sm:py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-base font-semibold uppercase tracking-[0.22em] text-[var(--color-brass)]"
            >
              {siteConfig.name}
            </Link>
            <p className="max-w-md font-serif text-xl leading-snug text-[var(--color-text-soft)]">
              {homepageData.footer.tagline}
            </p>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-brass)]/90">
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
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-brass)]/90">
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
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-brass)]/90">
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

        <div className="mt-10 border-t border-[color:var(--color-border)] pt-5 text-xs text-[var(--color-muted)]">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
