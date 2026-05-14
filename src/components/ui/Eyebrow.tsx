import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  tone?: "accent" | "muted" | "soft";
  className?: string;
};

const eyebrowTones = {
  accent: "text-[var(--color-brass)]/88",
  muted: "text-[var(--color-muted)]/88",
  soft: "text-[var(--color-text-soft)]/72",
} as const;

export function Eyebrow({
  children,
  tone = "accent",
  className,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "metadata-eyebrow",
        eyebrowTones[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
