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

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {diningCards.cards.map((card) => (
              <article
                key={card.title}
                className="group relative grid h-full min-h-[26rem] overflow-hidden rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-panel-soft)_74%,black)_0%,color-mix(in_srgb,var(--color-surface-panel)_94%,black)_100%)] shadow-[var(--shadow-soft-panel)] transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(0,0,0,0.42)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:min-h-[27.5rem] xl:grid-rows-[minmax(0,1.78fr)_minmax(0,0.82fr)]"
              >
                <MediaFrame
                  image={card.image}
                  variant="bleed"
                  overlay="soft"
                  className="aspect-[4/3] min-h-56 rounded-none sm:min-h-64 xl:h-full xl:min-h-0 xl:aspect-auto"
                />
                <div className="relative flex flex-col gap-3 bg-[radial-gradient(circle_at_22%_0%,rgba(197,138,69,0.055)_0%,transparent_34%),linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-warm)_66%,black)_0%,color-mix(in_srgb,var(--color-surface-panel-soft)_76%,black)_54%,color-mix(in_srgb,var(--color-bg-soft)_84%,black)_100%)] px-5 pb-5 pt-5 transition-[background,box-shadow] duration-500 ease-out before:absolute before:left-5 before:top-0 before:h-px before:w-16 before:bg-[color:var(--color-divider-strong)] before:transition-[background-color,width] before:duration-500 group-hover:bg-[radial-gradient(circle_at_22%_0%,rgba(197,138,69,0.105)_0%,transparent_36%),linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-warm)_88%,black)_0%,color-mix(in_srgb,var(--color-surface-panel-soft)_92%,black)_54%,color-mix(in_srgb,var(--color-bg-soft)_90%,black)_100%)] group-hover:shadow-[inset_0_1px_0_rgba(255,239,210,0.045)] group-hover:before:w-28 group-hover:before:bg-[color:var(--color-brass-soft)] sm:px-6 sm:pb-5 sm:pt-5 sm:before:left-6">
                  <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)] sm:text-[11px]">
                    {card.title}
                  </h2>
                  <p className="max-w-[24rem] text-sm leading-7 text-[var(--color-muted)]">
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
