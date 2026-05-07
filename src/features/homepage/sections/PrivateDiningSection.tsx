import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
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
          <div className="grid gap-0 lg:min-h-[27rem] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="flex flex-col justify-center gap-6 px-5 py-7 sm:px-6 sm:py-8 lg:px-7 xl:px-8">
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

            <div className="relative border-t border-[color:var(--color-border)] lg:border-l lg:border-t-0">
              <MediaFrame
                image={privateDining.image}
                className="min-h-[18rem] rounded-none border-0 sm:min-h-[22rem] lg:min-h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
