import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkArrowProps = {
  href: string;
  children: ReactNode;
  tone?: "accent" | "muted";
  className?: string;
  ariaLabel?: string;
};

const toneClasses = {
  accent:
    "text-[var(--color-brass-soft)] hover:text-[var(--color-text-soft)] active:text-[var(--color-text-soft)]",
  muted:
    "text-[var(--color-muted)] hover:text-[var(--color-brass-soft)] active:text-[var(--color-brass-soft)]",
} as const;

export function LinkArrow({
  href,
  children,
  tone = "accent",
  className,
  ariaLabel,
}: LinkArrowProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "low-ember-focus-ring low-ember-transition group inline-flex min-h-11 w-fit items-center gap-2 py-2 text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs",
        toneClasses[tone],
        className,
      )}
    >
      <span className="text-left">{children}</span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="low-ember-transition h-4 w-4 fill-none stroke-current stroke-[1.8] group-hover:translate-x-0.5 motion-reduce:transform-none"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>
  );
}
