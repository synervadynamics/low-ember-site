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
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-brass-soft)] transition-colors duration-200 hover:text-[var(--color-text-soft)]",
        className,
      )}
    >
      <span>{children}</span>
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
