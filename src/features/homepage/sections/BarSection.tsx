import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:grid-cols-[minmax(0,0.74fr)_minmax(0,0.98fr)_minmax(0,0.74fr)]">
          <div className="panel panel-border flex flex-col gap-5 p-5 sm:p-6 lg:p-6 xl:order-1">
            <SectionHeader
              eyebrow={bar.eyebrow}
              title={bar.title}
              titleId="bar-section-heading"
              className="space-y-4"
            />
            <p className="text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {bar.description}
            </p>
            <div className="mt-auto flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={bar.cta.href}>{bar.cta.label}</Button>
            </div>
          </div>

          <div className="panel panel-border overflow-hidden xl:order-2">
            <PlaceholderImage
              label={bar.image.label}
              aspectRatio={bar.image.aspectRatio}
              decorative
              className="min-h-[24rem] rounded-none border-0 sm:min-h-[30rem] xl:min-h-full"
            />
          </div>

          <div className="panel panel-border flex flex-col gap-5 p-5 sm:p-6 lg:p-6 xl:order-3">
            <div className="space-y-4">
              <h3 className="max-w-[10ch] font-serif text-[2rem] leading-[1.06] text-[var(--color-text-soft)] sm:text-[2.5rem]">
                {bar.highlightTitle}
              </h3>
              <div className="h-px w-12 bg-[color:var(--color-border-strong)]" />
            </div>
            <div className="space-y-5">
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
      </Container>
    </section>
  );
}
