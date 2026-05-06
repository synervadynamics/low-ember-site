import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
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
        <Eyebrow className={cn(isCentered && "text-center")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        id={titleId}
        className="text-balance font-serif text-[2rem] leading-[1.04] tracking-[-0.02em] text-[var(--color-text-soft)] sm:text-[2.5rem] lg:text-[3.25rem]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-balance max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-[0.97rem]",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
