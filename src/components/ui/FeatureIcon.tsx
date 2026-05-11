import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type FeatureIconName =
  | "utensils"
  | "martini"
  | "users"
  | "chair"
  | "flame"
  | "map"
  | "clock"
  | "heart"
  | "briefcase"
  | "dateNights"
  | "workDinners"
  | "lateTables"
  | "regulars";

type FeatureIconProps = {
  name: FeatureIconName | string;
  className?: string;
};

const iconClassName = "h-5 w-5 stroke-[1.8] fill-none";

function FallbackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className={iconClassName}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FeatureIcon({ name, className }: FeatureIconProps) {
  const shared = cn(
    "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(21,17,13,0.92)_0%,rgba(12,10,8,0.96)_100%)] text-[var(--color-brass)]",
    className,
  );

  const icons: Record<string, ReactNode> = {
    utensils: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M6 3v7" />
        <path d="M9 3v7" />
        <path d="M6 7h3" />
        <path d="M7.5 10v11" />
        <path d="M15 3c0 3 0 5-2 7" />
        <path d="M15 3v18" />
      </svg>
    ),
    martini: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M4 5h16l-8 8-8-8Z" />
        <path d="M12 13v6" />
        <path d="M9 21h6" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M17 12a2.5 2.5 0 1 0 0-5" />
        <path d="M4 19a5 5 0 0 1 10 0" />
        <path d="M15 19a4 4 0 0 1 5-3.5" />
      </svg>
    ),
    chair: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M6 10h12v5H6z" />
        <path d="M7 15v5" />
        <path d="M17 15v5" />
        <path d="M4 20h16" />
      </svg>
    ),
    flame: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M12 3c1 3-1 4-1 6 0 1.5 1 2.5 2 3.5 1.5-1 3-2.6 3-5 2 2 4 4.4 4 8a8 8 0 1 1-16 0c0-2.7 1.2-4.8 3.5-7C8.5 10.5 11 8.5 12 3Z" />
      </svg>
    ),
    map: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2Z" />
        <path d="M9 4v14" />
        <path d="M15 6v14" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M12 20s-7-4.8-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.2-7 10-7 10Z" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M9 7V5h6v2" />
        <path d="M4 8h16v10H4z" />
        <path d="M4 12h16" />
      </svg>
    ),
    dateNights: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M12 20s-7-4.8-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.2-7 10-7 10Z" />
      </svg>
    ),
    workDinners: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M9 7V5h6v2" />
        <path d="M4 8h16v10H4z" />
        <path d="M4 12h16" />
      </svg>
    ),
    lateTables: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M4 5h16l-8 8-8-8Z" />
        <path d="M12 13v6" />
        <path d="M9 21h6" />
      </svg>
    ),
    regulars: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M17 12a2.5 2.5 0 1 0 0-5" />
        <path d="M4 19a5 5 0 0 1 10 0" />
        <path d="M15 19a4 4 0 0 1 5-3.5" />
      </svg>
    ),
  };

  return <span className={shared}>{icons[name] ?? <FallbackIcon />}</span>;
}
