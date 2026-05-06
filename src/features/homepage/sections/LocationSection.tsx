import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-brass)] sm:text-xs">
        {label}
      </p>
      <div className="space-y-1.5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
        {children}
      </div>
    </div>
  );
}

export function LocationSection() {
  const { contact } = homepageData;

  return (
    <section
      id={contact.id}
      aria-labelledby="location-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
          <div className="panel panel-border flex flex-col gap-6 p-5 sm:p-6 lg:p-7">
            <SectionHeader
              title={contact.title}
              titleId="location-section-heading"
              className="space-y-4"
            />

            <div className="grid gap-5 sm:gap-6">
              <DetailBlock label="Address">
                <address className="not-italic text-[var(--color-text-soft)]">
                  {contact.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </DetailBlock>

              <DetailBlock label="Hours">
                <ul className="space-y-1.5">
                  {contact.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </DetailBlock>

              <div className="grid gap-5 sm:grid-cols-2">
                <DetailBlock label="Phone">
                  <a
                    href={contact.phoneHref}
                    className="inline-flex min-h-11 items-center text-[var(--color-text-soft)] transition-colors duration-200 hover:text-[var(--color-brass-soft)] active:text-[var(--color-brass-soft)]"
                  >
                    {contact.phone}
                  </a>
                </DetailBlock>

                <DetailBlock label="Email">
                  <a
                    href={contact.emailHref}
                    className="inline-flex min-h-11 items-center break-all text-[var(--color-text-soft)] transition-colors duration-200 hover:text-[var(--color-brass-soft)] active:text-[var(--color-brass-soft)]"
                  >
                    {contact.email}
                  </a>
                </DetailBlock>
              </div>

              <DetailBlock label="Instagram">
                <a
                  href={contact.instagramHref}
                  className="inline-flex min-h-11 items-center text-[var(--color-text-soft)] transition-colors duration-200 hover:text-[var(--color-brass-soft)] active:text-[var(--color-brass-soft)]"
                >
                  {contact.instagram}
                </a>
              </DetailBlock>
            </div>

            <div className="pt-1">
              <Button href={contact.cta.href}>{contact.cta.label}</Button>
            </div>
          </div>

          <div className="panel panel-border overflow-hidden p-3 sm:p-4">
            <PlaceholderImage
              label={contact.map.label}
              aspectRatio={contact.map.aspectRatio}
              decorative
              className="min-h-[16rem] sm:min-h-[20rem] lg:min-h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
