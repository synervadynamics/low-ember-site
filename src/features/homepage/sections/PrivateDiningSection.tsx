import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

export function PrivateDiningSection() {
  const { privateDining } = homepageData;

  return (
    <section
      id={privateDining.id}
      aria-labelledby="private-dining-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="panel panel-border overflow-hidden">
          <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:p-7 xl:p-8">
            <div className="flex flex-col gap-6">
              <SectionHeader
                eyebrow={privateDining.eyebrow}
                title={privateDining.title}
                titleId="private-dining-section-heading"
                className="space-y-4"
              />
              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {privateDining.description}
              </p>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={privateDining.cta.href}>
                  {privateDining.cta.label}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[radial-gradient(circle_at_top_right,rgba(197,138,69,0.14),transparent_42%)]" />
              <PlaceholderImage
                label={privateDining.image.label}
                aspectRatio={privateDining.image.aspectRatio}
                decorative
                className="min-h-[18rem] sm:min-h-[22rem] lg:min-h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
