import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
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
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="panel panel-border flex flex-col gap-6 p-5 sm:p-6 lg:p-7">
            <SectionHeader
              eyebrow={room.eyebrow}
              title={room.title}
              titleId="room-section-heading"
              className="space-y-4"
            />
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {room.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {room.features.map((feature, index) => (
                <div
                  key={feature}
                  className="inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] border border-[color:var(--color-border)] bg-[color:rgba(17,16,13,0.7)] px-4 py-2 text-sm text-[var(--color-text-soft)]"
                >
                  <FeatureIcon
                    name={roomFeatureIcons[index] ?? "flame"}
                    className="h-8 w-8 shrink-0"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel panel-border overflow-hidden">
            <PlaceholderImage
              label={room.image.label}
              aspectRatio={room.image.aspectRatio}
              decorative
              className="min-h-[20rem] rounded-none border-0 sm:min-h-[24rem] lg:min-h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
