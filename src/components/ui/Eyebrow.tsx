import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-brass)]/88 sm:text-[11px]",
        className,
      )}
    >
      {children}
    </p>
  );
}
