import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { homepageData } from "@/features/homepage/homepage.data";

export function HeroSection() {
  const { hero } = homepageData;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="page-section pt-6 sm:pt-8 lg:pt-10"
    >
      <Container>
        <div className="panel panel-border overflow-hidden">
          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:items-stretch lg:gap-10 lg:p-8 xl:p-10">
            <div className="relative z-10 flex flex-col justify-center space-y-6 lg:space-y-7">
              <Eyebrow>{hero.location}</Eyebrow>

              <div className="space-y-4">
                <h1
                  id="hero-heading"
                  className="text-balance max-w-[12ch] font-serif text-4xl leading-[1.02] text-[var(--color-text-soft)] sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
                >
                  {hero.title}
                </h1>
                <p className="max-w-xl text-base leading-7 text-[var(--color-text-soft)]/90 sm:text-lg sm:leading-8">
                  {hero.description}
                </p>
                <p className="max-w-lg text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {hero.secondaryDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                <Button href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>

              <div className="flex flex-col gap-3 border-t border-[color:var(--color-border)] pt-4 text-sm text-[var(--color-muted)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <div className="flex items-center gap-3">
                  <FeatureIcon name="map" className="h-9 w-9 shrink-0" />
                  <span>{hero.location}</span>
                </div>
                <div className="hidden h-5 w-px bg-[color:var(--color-border)] sm:block" />
                <div className="flex items-center gap-3">
                  <FeatureIcon name="flame" className="h-9 w-9 shrink-0" />
                  <span>{hero.meta}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[radial-gradient(circle_at_top_left,rgba(197,138,69,0.12),transparent_38%)]" />
              <PlaceholderImage
                label={hero.image.label}
                aspectRatio={hero.image.aspectRatio}
                decorative
                className="min-h-[20rem] sm:min-h-[24rem] lg:min-h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
