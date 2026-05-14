import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "display" | "compact";
  eyebrowTone?: "accent" | "muted" | "soft";
  className?: string;
  titleId?: string;
};

const titleVariants = {
  default:
    "display-heading font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]",
  display:
    "display-heading font-serif text-[2.25rem] sm:text-[2.9rem] lg:text-[3.75rem]",
  compact:
    "display-heading font-serif text-[1.75rem] sm:text-[2.1rem] lg:text-[2.6rem]",
} as const;

const descriptionVariants = {
  default: "max-w-2xl text-sm leading-7 sm:text-[0.97rem]",
  display: "max-w-2xl text-[0.96rem] leading-7 sm:text-[1rem]",
  compact: "max-w-xl text-sm leading-[1.65] sm:text-[0.95rem]",
} as const;

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default",
  eyebrowTone = "accent",
  className,
  titleId,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={cn(
        "space-y-3.5",
        isCentered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={eyebrowTone} className={cn(isCentered && "text-center")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        id={titleId}
        className={titleVariants[variant]}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-balance body-measure text-[var(--color-muted)]",
            descriptionVariants[variant],
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
