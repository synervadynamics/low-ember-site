import Image from "next/image";

import { cn } from "@/lib/utils";
import { PlaceholderImage } from "./PlaceholderImage";

export type MediaFrameImage = {
  src?: string;
  alt?: string;
  label: string;
  aspectRatio?: string;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
  decorative?: boolean;
};

type MediaFrameProps = {
  image: MediaFrameImage;
  className?: string;
  imageClassName?: string;
};

const baseFrameClassName =
  "relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(28,21,16,0.98)_0%,rgba(15,13,10,0.98)_48%,rgba(10,9,7,1)_100%)] shadow-[var(--shadow-soft)]";

export function MediaFrame({
  image,
  className,
  imageClassName,
}: MediaFrameProps) {
  if (!image.src) {
    return (
      <PlaceholderImage
        label={image.label}
        aspectRatio={image.aspectRatio}
        decorative={image.decorative}
        className={className}
      />
    );
  }

  const decorative = image.decorative ?? false;
  const alt = decorative ? "" : image.alt?.trim() || image.label;

  return (
    <div
      style={{ aspectRatio: image.aspectRatio ?? "4 / 3" }}
      className={cn(baseFrameClassName, "min-h-48 sm:min-h-56", className)}
    >
      <Image
        src={image.src}
        alt={alt}
        fill
        priority={image.priority}
        sizes={image.sizes ?? "100vw"}
        className={cn("object-cover", imageClassName)}
        style={{ objectPosition: image.objectPosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.26)_100%)]" />
      <div className="absolute inset-[1px] rounded-[calc(var(--radius-lg)-1px)] border border-white/4" />
    </div>
  );
}
