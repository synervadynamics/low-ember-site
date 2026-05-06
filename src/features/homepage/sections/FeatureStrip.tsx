import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { homepageData } from "@/features/homepage/homepage.data";

export function FeatureStrip() {
  return (
    <section
      aria-label="Low Ember service highlights"
      className="pb-8 sm:pb-9 lg:pb-10"
    >
      <Container>
        <div className="panel panel-border overflow-hidden">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {homepageData.featureStrip.map((item, index) => (
              <article
                key={item.title}
                className={[
                  "flex items-start gap-4 px-4 py-4 sm:px-5 sm:py-[1.125rem]",
                  "border-b border-[color:var(--color-border)]",
                  "xl:border-b-0 xl:border-r",
                  index % 2 === 0 ? "sm:border-r" : "",
                  index >= 2 ? "sm:border-b-0" : "",
                  index === homepageData.featureStrip.length - 1
                    ? "xl:border-r-0"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <FeatureIcon name={item.icon} className="mt-0.5 h-9 w-9 shrink-0" />
                <div className="min-w-0 space-y-1">
                  <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)] sm:text-[11px]">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
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
