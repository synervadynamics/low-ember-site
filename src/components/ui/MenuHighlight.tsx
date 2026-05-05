import { cn } from "@/lib/utils";

type MenuHighlightProps = {
  name: string;
  price?: string;
  description: string;
  className?: string;
};

export function MenuHighlight({
  name,
  price,
  description,
  className,
}: MenuHighlightProps) {
  return (
    <article
      className={cn(
        "border-b border-[color:var(--color-border)] pb-4 last:border-b-0 last:pb-0",
        className,
      )}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="font-serif text-lg leading-tight text-[var(--color-text-soft)]">
          {name}
        </h3>
        {price ? (
          <p className="shrink-0 text-sm text-[var(--color-brass-soft)] sm:pt-0.5">
            {price}
          </p>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        {description}
      </p>
    </article>
  );
}
