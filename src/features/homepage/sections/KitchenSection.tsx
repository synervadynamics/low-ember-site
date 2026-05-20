import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { homepageData } from "@/features/homepage/homepage.data";

export function KitchenSection() {
  const { kitchen } = homepageData;
  const kitchenImage = { ...kitchen.image, aspectRatio: "auto" };

  return (
    <section
      id={kitchen.id}
      aria-labelledby="kitchen-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="grid overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(197,138,69,0.14)] bg-[color:var(--color-bg-deep)] shadow-[var(--shadow-soft-panel)] xl:min-h-[30.75rem] xl:grid-cols-[minmax(300px,1.14fr)_minmax(250px,0.96fr)_minmax(360px,1.34fr)] xl:items-stretch">
          <div className="order-1 flex h-full flex-col bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-warm)_78%,black)_0%,color-mix(in_srgb,var(--color-surface-panel)_92%,black)_100%)] p-7 sm:p-9 lg:p-10 xl:px-11 xl:pb-10 xl:pt-12">
            <header>
              <Eyebrow>{kitchen.eyebrow}</Eyebrow>
              <div className="mt-5 h-px w-16 bg-[rgba(197,138,69,0.28)]" />
              <h2
                id="kitchen-section-heading"
                className="display-heading mt-6 font-serif text-[clamp(2.3rem,11vw,3.2rem)] leading-[1] sm:mt-7 xl:text-[clamp(2.75rem,3vw,3.25rem)] xl:leading-[1.02]"
              >
                {kitchen.title}
              </h2>
            </header>
            <div className="mt-6 max-w-none space-y-4 text-[15px] leading-[1.72] text-[var(--color-muted)] sm:mt-7 sm:text-base xl:max-w-[38ch]">
              <p>{kitchen.description}</p>
              {kitchen.secondaryDescription ? (
                <p>{kitchen.secondaryDescription}</p>
              ) : null}
            </div>
            <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={kitchen.cta.href}>{kitchen.cta.label}</Button>
            </div>
          </div>

          <div className="order-2 flex h-full flex-col border-t border-[rgba(197,138,69,0.16)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-band)_88%,black)_0%,color-mix(in_srgb,var(--color-bg-deep)_98%,black)_100%)] p-7 sm:p-9 lg:p-10 xl:border-l xl:border-t-0 xl:px-10 xl:pb-10 xl:pt-12">
            <h3 className="font-serif text-[2rem] leading-[1.05] text-[var(--color-text-soft)] xl:text-[2rem]">
              Featured dishes.
            </h3>
            <div className="mt-8">
              {kitchen.highlights.map((item) => (
                <article
                  key={item.name}
                  className="border-b border-[rgba(197,138,69,0.16)] py-4 first:pt-0 last:border-b-0 last:pb-0 sm:py-[1.125rem]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-[1rem] leading-tight text-[var(--color-text-soft)] sm:text-[1.1rem]">
                      {item.name}
                    </h4>
                    <p className="shrink-0 text-[0.9rem] leading-none text-[var(--color-brass-soft)]">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--color-muted)] sm:text-sm">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative order-3 overflow-hidden border-t border-[rgba(197,138,69,0.16)] max-xl:aspect-[4/3] max-xl:min-h-[18rem] sm:max-xl:aspect-[16/11] xl:min-h-full xl:border-l xl:border-t-0">
            <MediaFrame
              image={kitchenImage}
              variant="bleed"
              overlay="soft"
              className="absolute inset-0 h-full w-full min-h-0 rounded-none"
              imageClassName="object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
