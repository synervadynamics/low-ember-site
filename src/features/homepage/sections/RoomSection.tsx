import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

export function RoomSection() {
  const { room } = homepageData;

  return (
    <section
      id={room.id}
      aria-labelledby="room-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="panel panel-border overflow-hidden">
          <div className="relative overflow-hidden lg:min-h-[24rem]">
            <div
              className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
              aria-hidden="true"
            >
              {room.image.src ? (
                <Image
                  src={room.image.src}
                  alt=""
                  fill
                  sizes={room.image.sizes}
                  className="object-cover"
                  style={{ objectPosition: room.image.objectPosition }}
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-bg)_98%,black)_0%,color-mix(in_srgb,var(--color-bg-soft)_95%,black)_14%,rgba(7,6,4,0.8)_26%,rgba(7,6,4,0.5)_39%,rgba(7,6,4,0.18)_52%,transparent_68%)]" />
            </div>

            <div className="grid gap-0 lg:min-h-[24rem] lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
              <div className="relative z-10 flex flex-col gap-5 px-5 py-6 sm:px-6 sm:py-7 lg:px-7">
                <SectionHeader
                  eyebrow={room.eyebrow}
                  title={room.title}
                  titleId="room-section-heading"
                  className="space-y-4"
                />
                <p className="max-w-lg text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {room.description}
                </p>
              </div>

              <div className="hidden lg:block" aria-hidden="true" />

              <div className="border-t border-[color:var(--color-border)] lg:hidden">
                <MediaFrame
                  image={room.image}
                  className="min-h-[20rem] rounded-none border-0 sm:min-h-[24rem]"
                />
              </div>
            </div>
          </div>

          <div className="grid border-t border-[color:var(--color-border)] sm:grid-cols-2 xl:grid-cols-4">
            {room.features.map((feature) => (
              <div
                key={feature.label}
                className="flex min-h-14 items-center gap-3 border-b border-[color:var(--color-border)] px-4 py-3 last:border-b-0 sm:px-5 xl:border-b-0 xl:border-r last:xl:border-r-0"
              >
                <FeatureIcon
                  name={feature.icon}
                  className="h-8 w-8 shrink-0"
                />
                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-soft)] sm:text-[11px]">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
