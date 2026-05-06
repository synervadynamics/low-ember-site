import { Container } from "@/components/ui/Container";
import { EventCard } from "@/components/ui/EventCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

export function HappeningsSection() {
  const { happenings } = homepageData;

  return (
    <section
      id={happenings.id}
      aria-labelledby="happenings-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container className="space-y-6 sm:space-y-8">
        <SectionHeader
          eyebrow={happenings.eyebrow}
          title={happenings.title}
          titleId="happenings-section-heading"
          align="center"
          className="space-y-4"
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {happenings.events.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
              cta={event.cta}
              image={event.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
