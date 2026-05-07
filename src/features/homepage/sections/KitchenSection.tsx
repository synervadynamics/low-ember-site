import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { MenuHighlight } from "@/components/ui/MenuHighlight";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.18fr)] xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.12fr)_minmax(0,0.72fr)]">
          <div className="panel panel-border flex flex-col gap-5 p-5 sm:p-6 lg:p-6">
            <SectionHeader
              eyebrow={kitchen.eyebrow}
              title={kitchen.title}
              titleId="kitchen-section-heading"
              className="space-y-4"
            />
            <div className="space-y-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              <p>{kitchen.description}</p>
              <p>{kitchen.secondaryDescription}</p>
            </div>
            <div className="mt-auto flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={kitchen.cta.href}>{kitchen.cta.label}</Button>
            </div>
          </div>

          <div className="panel panel-border overflow-hidden xl:order-none">
            <MediaFrame
              image={kitchen.image}
              className="min-h-[24rem] rounded-none border-0 sm:min-h-[30rem] xl:min-h-full"
            />
          </div>

          <div className="panel panel-border flex flex-col gap-5 p-5 sm:p-6 lg:p-6 xl:self-stretch">
            <div className="space-y-5">
              {kitchen.highlights.map((item) => (
                <MenuHighlight
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
            <div className="mt-auto border-t border-[color:var(--color-border)] pt-3">
              <LinkArrow href={kitchen.menuLink.href}>
                {kitchen.menuLink.label}
              </LinkArrow>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
