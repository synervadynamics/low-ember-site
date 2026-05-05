import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkArrowProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function LinkArrow({
  href,
  children,
  className,
  ariaLabel,
}: LinkArrowProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-11 w-fit items-center gap-2 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-brass-soft)] transition-colors duration-200 hover:text-[var(--color-text-soft)] active:text-[var(--color-text-soft)] sm:text-xs",
        className,
      )}
    >
      <span className="text-left">{children}</span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 stroke-current stroke-[1.8] fill-none"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>
  );
}
