import { cn } from "@/lib/utils";
import { LinkArrow } from "./LinkArrow";
import { PlaceholderImage } from "./PlaceholderImage";

type EventCardProps = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  image?: { label: string; aspectRatio?: string };
  className?: string;
};

export function EventCard({
  title,
  description,
  cta,
  image,
  className,
}: EventCardProps) {
  return (
    <article
      className={cn(
        "panel panel-border flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-[color:var(--color-border-strong)]",
        className,
      )}
    >
      {image ? (
        <PlaceholderImage
          label={image.label}
          aspectRatio={image.aspectRatio}
          className="min-h-44 rounded-none border-x-0 border-t-0"
          decorative
        />
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <h3 className="font-serif text-2xl leading-tight text-[var(--color-text-soft)]">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
        {cta ? <LinkArrow href={cta.href}>{cta.label}</LinkArrow> : null}
      </div>
    </article>
  );
}
