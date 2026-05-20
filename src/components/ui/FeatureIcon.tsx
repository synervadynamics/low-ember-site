import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LowEmberIconName =
  | "dinner"
  | "cocktails"
  | "privateDining"
  | "walkIns"
  | "dateNights"
  | "workDinners"
  | "lateTables"
  | "regulars"
  | "location"
  | "hours"
  | "phone"
  | "email"
  | "menu";

export type FeatureIconName =
  | LowEmberIconName
  | "utensils"
  | "martini"
  | "users"
  | "chair"
  | "flame"
  | "map"
  | "clock"
  | "heart"
  | "briefcase";

type FeatureIconProps = {
  name: FeatureIconName | string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const iconSizeClassNames = {
  sm: "h-[1.45rem] w-[1.45rem]",
  md: "h-6 w-6",
  lg: "h-7 w-7",
} as const;

function IconSvg({
  children,
  size,
}: {
  children: ReactNode;
  size: NonNullable<FeatureIconProps["size"]>;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(iconSizeClassNames[size], "fill-none")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function FallbackIcon() {
  return (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M8.8 12h6.4" />
    </>
  );
}

const iconAliases: Record<string, LowEmberIconName> = {
  utensils: "dinner",
  martini: "cocktails",
  users: "privateDining",
  chair: "walkIns",
  flame: "menu",
  map: "location",
  clock: "hours",
  heart: "dateNights",
  briefcase: "workDinners",
};

const icons: Record<LowEmberIconName, ReactNode> = {
  dinner: (
    <>
      <circle cx="12" cy="12" r="4.4" />
      <path d="M6.2 4.8v14.4" />
      <path d="M4.8 4.8v5.4h2.8" />
      <path d="M17.8 4.8v14.4" />
      <path d="M16.1 4.8c1.6 2 1.6 4.1 0 6" />
    </>
  ),
  cocktails: (
    <>
      <path d="M5 5.7h14l-7 7.2-7-7.2Z" />
      <path d="M12 12.9v5.6" />
      <path d="M8.6 19.5h6.8" />
      <path d="M16.3 5.7 18.5 3.5" />
    </>
  ),
  privateDining: (
    <>
      <path d="M7 13.2h10" />
      <path d="M8.3 13.2v5.8" />
      <path d="M15.7 13.2v5.8" />
      <path d="M4.8 11.4v5.2" />
      <path d="M19.2 11.4v5.2" />
      <path d="M9.2 8.6h5.6" />
      <path d="M12 4.8v3.8" />
    </>
  ),
  walkIns: (
    <>
      <path d="M6.7 20V4.6h8.8" />
      <path d="M6.7 20h10.6" />
      <path d="M10 7.2 17.3 5v14L10 16.8V7.2Z" />
      <path d="M14.4 12h.1" />
    </>
  ),
  dateNights: (
    <>
      <path d="M8.5 5.3c.9 1 .9 2 0 3-.9-1-.9-2 0-3Z" />
      <path d="M15.5 5.3c.9 1 .9 2 0 3-.9-1-.9-2 0-3Z" />
      <path d="M7 9.5h3v8H7z" />
      <path d="M14 9.5h3v8h-3z" />
      <path d="M5.8 19h12.4" />
    </>
  ),
  workDinners: (
    <>
      <path d="M8.7 7V5.2h6.6V7" />
      <path d="M4.8 7.5h14.4v10.8H4.8z" />
      <path d="M4.8 11h14.4" />
      <path d="M10 14.6h4" />
    </>
  ),
  lateTables: (
    <>
      <path d="M16.8 4.8a5.4 5.4 0 0 0 2.6 8.8 6.5 6.5 0 1 1-2.6-8.8Z" />
      <path d="M7.2 16.2h9.6" />
      <path d="M8.5 16.2v3" />
      <path d="M15.5 16.2v3" />
    </>
  ),
  regulars: (
    <>
      <path d="M8.4 10.2V7a3.6 3.6 0 0 1 7.2 0v3.2" />
      <path d="M6.5 10.2h11v5.5h-11z" />
      <path d="M8.1 15.7v3.8" />
      <path d="M15.9 15.7v3.8" />
      <path d="M9.6 13h4.8" />
    </>
  ),
  location: (
    <>
      <path d="M12 20.4s6-5.4 6-10.2A6 6 0 0 0 6 10.2c0 4.8 6 10.2 6 10.2Z" />
      <circle cx="12" cy="10.2" r="2.2" />
    </>
  ),
  hours: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 7.8v4.5l3 1.8" />
    </>
  ),
  phone: (
    <>
      <path d="M7.2 5.1 9.6 7.5 8.2 9.3c.9 1.9 2.6 3.6 4.5 4.5l1.8-1.4 2.4 2.4-1.3 3.2c-.3.7-1 1.1-1.8.9-4.5-1.1-7.6-4.2-8.7-8.7-.2-.8.2-1.5.9-1.8l1.2-3.3Z" />
    </>
  ),
  email: (
    <>
      <path d="M4.8 7.2h14.4v9.6H4.8z" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </>
  ),
  menu: (
    <>
      <path d="M6.8 5.2h7.6l2.8 2.8v10.8H6.8z" />
      <path d="M14.4 5.2V8h2.8" />
      <path d="M9.2 11.2h5.6" />
      <path d="M9.2 14.6h5.6" />
    </>
  ),
};

export function FeatureIcon({
  name,
  size = "md",
  className,
}: FeatureIconProps) {
  const shared = cn(
    "inline-flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-brass)]/88",
    className,
  );

  const iconName = iconAliases[name] ?? name;

  return (
    <span className={shared}>
      <IconSvg size={size}>
        {icons[iconName as LowEmberIconName] ?? <FallbackIcon />}
      </IconSvg>
    </span>
  );
}
