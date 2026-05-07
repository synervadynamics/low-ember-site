import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

const roomFeatureIcons = ["heart", "briefcase", "martini", "users"] as const;

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
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div className="flex flex-col gap-5 px-5 py-6 sm:px-6 sm:py-7 lg:px-7">
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

            <div className="border-t border-[color:var(--color-border)] lg:border-l lg:border-t-0">
              <MediaFrame
                image={room.image}
                className="min-h-[20rem] rounded-none border-0 sm:min-h-[24rem] lg:min-h-full"
              />
            </div>
          </div>

          <div className="grid border-t border-[color:var(--color-border)] sm:grid-cols-2 xl:grid-cols-4">
            {room.features.map((feature, index) => (
              <div
                key={feature}
                className="flex min-h-14 items-center gap-3 border-b border-[color:var(--color-border)] px-4 py-3 last:border-b-0 sm:px-5 xl:border-b-0 xl:border-r last:xl:border-r-0"
              >
                <FeatureIcon
                  name={roomFeatureIcons[index] ?? "flame"}
                  className="h-8 w-8 shrink-0"
                />
                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-soft)] sm:text-[11px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
