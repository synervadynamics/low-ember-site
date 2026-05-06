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
      className="page-section pt-3 sm:pt-4 lg:pt-5"
    >
      <Container>
        <div className="panel panel-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,138,69,0.06),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.16)_0%,transparent_48%)]" />
          <div className="grid min-h-[34rem] gap-0 lg:min-h-[41rem] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="relative z-10 flex flex-col justify-center gap-6 px-5 py-8 sm:px-7 sm:py-10 lg:px-8 lg:py-9 xl:px-10">
              <Eyebrow>{hero.location}</Eyebrow>

              <div className="space-y-4 sm:space-y-5">
                <h1
                  id="hero-heading"
                  className="text-balance max-w-[11ch] font-serif text-[2.75rem] leading-[0.96] tracking-[-0.03em] text-[var(--color-text-soft)] sm:text-[3.6rem] lg:text-[4.5rem] xl:text-[5rem]"
                >
                  {hero.title}
                </h1>
                <p className="max-w-md text-base leading-7 text-[var(--color-text-soft)]/90 sm:text-[1.08rem] sm:leading-8">
                  {hero.description}
                </p>
                <p className="max-w-md text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {hero.secondaryDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                <Button href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-[color:var(--color-border)] pt-4 text-sm text-[var(--color-muted)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
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

            <div className="relative border-t border-[color:var(--color-border)] lg:border-l lg:border-t-0">
              <PlaceholderImage
                label={hero.image.label}
                aspectRatio={hero.image.aspectRatio}
                decorative
                className="min-h-[20rem] rounded-none border-0 sm:min-h-[24rem] lg:min-h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
