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
          <div className="grid min-h-[32rem] gap-0 md:min-h-[35rem] lg:min-h-[36.5rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:min-h-[38rem]">
            <div className="relative z-10 flex flex-col px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-7 xl:px-10 xl:py-8">
              <div className="flex flex-1 flex-col justify-center gap-5 lg:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <Eyebrow>{hero.location}</Eyebrow>

                  <div className="space-y-3 sm:space-y-4">
                    <h1
                      id="hero-heading"
                      className="text-balance max-w-[10.5ch] font-serif text-[2.6rem] leading-[0.97] tracking-[-0.03em] text-[var(--color-text-soft)] sm:max-w-[11ch] sm:text-[3.25rem] md:max-w-[11.5ch] lg:max-w-[10.75ch] lg:text-[4rem] xl:max-w-[11ch] xl:text-[4.35rem]"
                    >
                      {hero.title}
                    </h1>
                    <p className="max-w-[34rem] text-[0.98rem] leading-7 text-[var(--color-text-soft)]/90 sm:text-[1.04rem] sm:leading-7">
                      {hero.description}
                    </p>
                    <p className="max-w-[35rem] text-sm leading-[1.65] text-[var(--color-muted)] sm:text-[0.98rem] sm:leading-7">
                      {hero.secondaryDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                  <Button href={hero.secondaryCta.href} variant="secondary">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 border-t border-[color:var(--color-border)] pt-3 text-[0.82rem] text-[var(--color-muted)] sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <FeatureIcon name="map" className="h-8 w-8 shrink-0" />
                  <span>{hero.location}</span>
                </div>
                <div className="hidden h-4 w-px bg-[color:var(--color-border)] sm:block" />
                <div className="flex items-center gap-2.5">
                  <FeatureIcon name="flame" className="h-8 w-8 shrink-0" />
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
