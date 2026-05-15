import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { MenuHighlight } from "@/components/ui/MenuHighlight";
import { homepageData } from "@/features/homepage/homepage.data";

export function KitchenSection() {
  const { kitchen } = homepageData;

  return (
    <section
      id={kitchen.id}
      aria-labelledby="kitchen-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="grid items-stretch gap-3 rounded-[var(--radius-lg)] bg-[radial-gradient(circle_at_72%_24%,rgba(197,138,69,0.07),transparent_24%),linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-band)_82%,black)_0%,color-mix(in_srgb,var(--color-bg)_96%,black)_100%)] p-3 shadow-[var(--shadow-soft-panel)] sm:p-4 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.18fr)] xl:min-h-[28rem] xl:grid-cols-[minmax(0,0.72fr)_minmax(0,0.64fr)_minmax(0,1fr)]">
          <div className="order-1 flex h-full flex-col gap-5 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-soft)_88%,black)_0%,color-mix(in_srgb,var(--color-bg-soft)_96%,black)_100%)] p-5 sm:p-6 lg:p-6">
            <header className="space-y-3.5">
              <Eyebrow>{kitchen.eyebrow}</Eyebrow>
              <div className="h-px w-16 bg-[color:var(--color-divider-strong)]" />
              <h2
                id="kitchen-section-heading"
                className="display-heading font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]"
              >
                {kitchen.title}
              </h2>
            </header>
            <div className="space-y-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              <p>{kitchen.description}</p>
              {kitchen.secondaryDescription ? (
                <p>{kitchen.secondaryDescription}</p>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center lg:pt-4">
              <Button href={kitchen.cta.href}>{kitchen.cta.label}</Button>
            </div>
          </div>

          <div className="order-3 flex h-full flex-col justify-center gap-5 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-band)_76%,black)_0%,color-mix(in_srgb,var(--color-bg)_94%,black)_100%)] p-5 sm:p-6 lg:col-span-2 xl:order-2 xl:col-span-1">
            <h3 className="max-w-[10ch] font-serif text-[2rem] leading-[1.06] text-[var(--color-text-soft)] sm:text-[2.5rem]">
              Featured dishes.
            </h3>
            <div className="space-y-4">
              {kitchen.highlights.map((item) => (
                <MenuHighlight
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  className="sm:pb-4 xl:[&_h3]:whitespace-nowrap"
                />
              ))}
            </div>
          </div>

          <div className="order-2 overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-atmospheric)] xl:order-3">
            <MediaFrame
              image={kitchen.image}
              variant="bleed"
              overlay="soft"
              className="h-full min-h-[22rem] rounded-none sm:min-h-[26rem] xl:min-h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
