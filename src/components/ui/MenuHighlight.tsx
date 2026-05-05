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
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-lg text-[var(--color-text-soft)]">
          {name}
        </h3>
        {price ? (
          <p className="shrink-0 text-sm text-[var(--color-brass-soft)]">
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
