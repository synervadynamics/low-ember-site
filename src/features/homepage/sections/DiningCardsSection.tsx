import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageData } from "@/features/homepage/homepage.data";

export function DiningCardsSection() {
  const { diningCards } = homepageData;

  return (
    <section aria-labelledby="dining-cards-heading" className="page-section pt-6 sm:pt-8">
      <Container>
        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-5">
            <SectionHeader
              eyebrow={diningCards.eyebrow}
              title={diningCards.title}
              titleId="dining-cards-heading"
              align="center"
              className="space-y-4"
            />
            <div className="mx-auto h-px w-20 bg-[color:var(--color-border-strong)]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {diningCards.cards.map((card) => (
              <article
                key={card.title}
                className="panel panel-border flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-[color:var(--color-border-strong)] active:border-[color:var(--color-border-strong)]"
              >
                <PlaceholderImage
                  label={card.image.label}
                  aspectRatio={card.image.aspectRatio}
                  decorative
                  className="min-h-52 rounded-none border-x-0 border-t-0"
                />
                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
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
