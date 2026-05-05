import { cn } from "@/lib/utils";

export type PlaceholderImageProps = {
  label: string;
  aspectRatio?: string;
  className?: string;
  decorative?: boolean;
};

export function PlaceholderImage({
  label,
  aspectRatio = "4 / 3",
  className,
  decorative = false,
}: PlaceholderImageProps) {
  return (
    <div
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
      style={{ aspectRatio }}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(32,26,20,0.98)_0%,rgba(17,16,13,0.96)_100%)] shadow-[var(--shadow-soft)]",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(197,138,69,0.12),transparent_42%)] before:content-['']",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.52)_100%)] after:content-['']",
        "min-h-48 sm:min-h-56",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-brass)]/90">
          Placeholder
        </span>
        <div className="space-y-1">
          <p className="font-serif text-base text-[var(--color-text-soft)] sm:text-lg">
            {label}
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Replace with final image
          </p>
        </div>
      </div>
    </div>
  );
}
