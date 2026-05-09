import Image from "next/image";

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
        <div className="panel panel-border relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
            aria-hidden="true"
          >
            {privateDining.image.src ? (
              <Image
                src={privateDining.image.src}
                alt=""
                fill
                sizes={privateDining.image.sizes}
                className="object-cover"
                style={{ objectPosition: privateDining.image.objectPosition }}
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-bg)_98%,black)_0%,color-mix(in_srgb,var(--color-bg-soft)_95%,black)_16%,rgba(7,6,4,0.76)_28%,rgba(7,6,4,0.46)_42%,rgba(7,6,4,0.16)_56%,transparent_72%)]" />
          </div>
          <div className="grid gap-0 lg:min-h-[27rem] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="relative z-10 flex flex-col justify-center gap-6 px-5 py-7 sm:px-6 sm:py-8 lg:px-7 xl:px-8">
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

            <div className="hidden lg:block" aria-hidden="true" />

            <div className="relative border-t border-[color:var(--color-border)] lg:hidden">
              <MediaFrame
                image={privateDining.image}
                className="min-h-[18rem] rounded-none border-0 sm:min-h-[22rem]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
