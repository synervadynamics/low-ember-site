import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

export function DiningCardsSection() {
  const { diningCards } = homepageData;

  return (
    <section
      aria-labelledby="dining-cards-heading"
      className="page-section pt-5 sm:pt-6"
    >
      <Container>
        <div className="space-y-7 sm:space-y-8">
          <div className="space-y-4">
            <SectionHeader
              eyebrow={diningCards.eyebrow}
              title={diningCards.title}
              titleId="dining-cards-heading"
              align="center"
              className="space-y-4"
            />
            <div className="mx-auto h-px w-16 bg-[color:var(--color-border-strong)]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {diningCards.cards.map((card) => (
              <article
                key={card.title}
                className="panel panel-border flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-[color:var(--color-border-strong)] active:border-[color:var(--color-border-strong)]"
              >
                <MediaFrame
                  image={card.image}
                  className="min-h-56 rounded-none border-x-0 border-t-0 sm:min-h-64"
                />
                <div className="flex flex-1 flex-col gap-3 border-t border-[color:var(--color-border)] px-5 py-5 sm:px-6 sm:py-6">
                  <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)] sm:text-[11px]">
                    {card.title}
                  </h2>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
