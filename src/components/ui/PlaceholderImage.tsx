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
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(28,21,16,0.98)_0%,rgba(15,13,10,0.98)_48%,rgba(10,9,7,1)_100%)] shadow-[var(--shadow-soft)]",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_65%_18%,rgba(197,138,69,0.12),transparent_28%),radial-gradient(circle_at_20%_78%,rgba(166,75,43,0.1),transparent_24%),linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.28)_100%)] before:content-['']",
        "after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.1)_48%,rgba(0,0,0,0.48)_100%)] after:content-['']",
        "min-h-48 sm:min-h-56",
        className,
      )}
    >
      <div className="absolute inset-[1px] rounded-[calc(var(--radius-lg)-1px)] border border-white/4" />
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[var(--color-brass)]/72">
          Placeholder
        </span>
        <div className="max-w-[18rem] space-y-1">
          <p className="font-serif text-base leading-tight text-[var(--color-text-soft)]/92 sm:text-lg">
            {label}
          </p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]/76">
            Replace with final image
          </p>
        </div>
      </div>
    </div>
  );
}
