import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { homepageData } from "@/features/homepage/homepage.data";

export function BarSection() {
  const { bar } = homepageData;
  const barImage = { ...bar.image, aspectRatio: "auto" };

  return (
    <section
      id={bar.id}
      aria-labelledby="bar-section-heading"
      className="page-section pt-4 sm:pt-6"
    >
      <Container>
        <div className="grid overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-bg-deep)] shadow-[var(--shadow-atmospheric)] xl:min-h-[29.75rem] xl:grid-cols-[minmax(380px,1.45fr)_minmax(240px,0.85fr)_minmax(300px,1.15fr)] xl:items-stretch">
          <div className="relative order-1 overflow-hidden max-xl:aspect-[4/3] max-xl:min-h-[20rem] sm:max-xl:aspect-[16/11] xl:min-h-full">
            <MediaFrame
              image={barImage}
              variant="bleed"
              overlay="hero"
              className="absolute inset-0 h-full w-full min-h-0 rounded-none"
              imageClassName="object-center"
            />
          </div>

          <div className="order-2 flex bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-bg-deep)_98%,black)_0%,color-mix(in_srgb,var(--color-surface-band-dense)_96%,black)_100%)] px-7 py-8 sm:px-9 sm:py-10 xl:px-5 xl:py-0">
            <div className="w-full border border-[rgba(197,138,69,0.18)] bg-[rgba(12,10,8,0.82)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-9 xl:self-center xl:justify-self-center xl:rounded-[var(--radius-lg)] xl:px-8 xl:py-8">
              <h3 className="font-serif text-[1.8rem] leading-[1.05] text-[var(--color-text-soft)] xl:max-w-[10ch] xl:text-[2rem]">
                {bar.highlightTitle}
              </h3>
              <div className="mt-7">
                {bar.cocktails.map((item) => (
                  <article
                    key={item.name}
                    className="border-b border-[rgba(197,138,69,0.16)] py-4 first:pt-0 last:border-b-0 last:pb-0 sm:py-[1.125rem]"
                  >
                    <h4 className="font-serif text-[1rem] leading-tight text-[var(--color-text-soft)] sm:text-[1.05rem]">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-[13px] leading-[1.6] text-[var(--color-muted)] sm:text-sm">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 flex h-full flex-col border-t border-[rgba(197,138,69,0.12)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-panel)_72%,black)_0%,color-mix(in_srgb,var(--color-bg-deep)_100%,black)_100%)] p-7 sm:p-9 lg:p-10 xl:border-l xl:border-t-0 xl:px-12 xl:py-12">
            <header>
              <Eyebrow>{bar.eyebrow}</Eyebrow>
              <div className="mt-5 h-px w-16 bg-[rgba(197,138,69,0.28)]" />
              <h2
                id="bar-section-heading"
                className="display-heading mt-6 font-serif text-[clamp(2.3rem,11vw,3.2rem)] leading-[1] sm:mt-7 xl:text-[clamp(2.85rem,3.25vw,3.6rem)] xl:leading-[1.02]"
              >
                {bar.title}
              </h2>
            </header>
            <p className="mt-7 max-w-none text-[15px] leading-[1.75] text-[var(--color-muted)] sm:mt-8 sm:text-base xl:max-w-[38ch]">
              {bar.description}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={bar.cta.href}>{bar.cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
