import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={cn(
        "space-y-3",
        isCentered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={cn(isCentered && "text-center")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="text-balance font-serif text-3xl leading-tight text-[var(--color-text-soft)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-balance max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
