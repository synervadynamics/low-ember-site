import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { homepageData } from "@/features/homepage/homepage.data";

export function BarSection() {
  const { bar } = homepageData;

  return (
    <section
      id={bar.id}
      aria-labelledby="bar-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="grid items-stretch gap-3 rounded-[var(--radius-lg)] bg-[radial-gradient(circle_at_18%_18%,rgba(166,75,43,0.09),transparent_24%),linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-band-dense)_92%,black)_0%,color-mix(in_srgb,var(--color-bg-deep)_98%,black)_100%)] p-3 shadow-[var(--shadow-soft-panel)] sm:p-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:min-h-[31rem] xl:grid-cols-[minmax(0,1.58fr)_minmax(0,0.86fr)]">
          <div className="grid gap-3 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,0.66fr)]">
            <div className="overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-atmospheric)]">
              <MediaFrame
                image={bar.image}
                variant="bleed"
                overlay="hero"
                className="h-full min-h-[24rem] rounded-none sm:min-h-[30rem] xl:min-h-full"
              />
            </div>

            <div className="flex h-full flex-col justify-center gap-5 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-band-dense)_92%,black)_0%,color-mix(in_srgb,var(--color-bg)_96%,black)_100%)] px-5 py-5 sm:px-6 sm:py-6 lg:p-6">
              <div>
                <h3 className="max-w-[10ch] font-serif text-[2rem] leading-[1.06] text-[var(--color-text-soft)] sm:text-[2.5rem]">
                  {bar.highlightTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {bar.cocktails.map((item) => (
                  <article
                    key={item.name}
                    className="border-b border-[color:var(--color-border)] pb-4 last:border-b-0 last:pb-0 sm:pb-5"
                  >
                    <h4 className="font-serif text-[1.12rem] leading-tight text-[var(--color-text-soft)] sm:text-[1.2rem]">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-5 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-panel)_84%,black)_0%,color-mix(in_srgb,var(--color-bg-deep)_98%,black)_100%)] p-5 sm:p-6 lg:p-6">
            <header className="space-y-3.5">
              <Eyebrow>{bar.eyebrow}</Eyebrow>
              <div className="h-px w-16 bg-[color:var(--color-divider-strong)]" />
              <h2
                id="bar-section-heading"
                className="display-heading font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]"
              >
                {bar.title}
              </h2>
            </header>
            <p className="text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {bar.description}
            </p>
            <div className="flex flex-col items-start gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={bar.cta.href}>{bar.cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
