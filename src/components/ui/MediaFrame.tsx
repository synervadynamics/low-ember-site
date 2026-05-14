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
  variant?: "framed" | "plain" | "bleed" | "inset" | "panoramic";
  overlay?: "default" | "soft" | "hero" | "none";
  className?: string;
  imageClassName?: string;
};

const baseFrameClassName =
  "relative overflow-hidden";

const frameVariants = {
  framed:
    "rounded-[var(--radius-lg)] border border-[color:var(--color-divider)] bg-[linear-gradient(180deg,rgba(28,21,16,0.98)_0%,rgba(15,13,10,0.98)_48%,rgba(10,9,7,1)_100%)] shadow-[var(--shadow-soft-panel)]",
  plain: "rounded-[var(--radius-lg)] border border-transparent bg-transparent shadow-none",
  bleed: "rounded-none border-0 bg-transparent shadow-none",
  inset:
    "rounded-[var(--radius-lg)] border border-[color:var(--color-divider-faint)] bg-[linear-gradient(180deg,rgba(24,20,16,0.98)_0%,rgba(12,10,8,0.98)_100%)] p-2 shadow-[var(--shadow-soft-panel)]",
  panoramic:
    "rounded-[var(--radius-lg)] border border-[color:var(--color-divider-faint)] bg-[linear-gradient(180deg,rgba(24,20,16,0.98)_0%,rgba(12,10,8,0.98)_100%)] shadow-[var(--shadow-atmospheric)]",
} as const;

const overlayVariants = {
  default:
    "bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.26)_100%)]",
  soft:
    "bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_56%,rgba(0,0,0,0.18)_100%)]",
  hero:
    "bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.34)_100%)]",
  none: "",
} as const;

export function MediaFrame({
  image,
  variant = "framed",
  overlay = "default",
  className,
  imageClassName,
}: MediaFrameProps) {
  if (!image.src) {
    return (
      <PlaceholderImage
        label={image.label}
        aspectRatio={image.aspectRatio}
        decorative={image.decorative}
        className={cn(baseFrameClassName, frameVariants[variant], className)}
      />
    );
  }

  const decorative = image.decorative ?? false;
  const alt = decorative ? "" : image.alt?.trim() || image.label;
  const showInnerLine = variant !== "plain" && variant !== "bleed";

  return (
    <div
      style={{ aspectRatio: image.aspectRatio ?? "4 / 3" }}
      className={cn(
        baseFrameClassName,
        frameVariants[variant],
        "min-h-48 sm:min-h-56",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={alt}
        fill
        priority={image.priority}
        sizes={image.sizes ?? "100vw"}
        className={cn(
          "object-cover low-ember-transition motion-reduce:transform-none",
          imageClassName,
        )}
        style={{ objectPosition: image.objectPosition }}
      />
      {overlay !== "none" ? (
        <div className={cn("absolute inset-0", overlayVariants[overlay])} />
      ) : null}
      {showInnerLine ? (
        <div className="absolute inset-[1px] rounded-[calc(var(--radius-lg)-1px)] border border-[color:var(--color-image-frame-line)]" />
      ) : null}
    </div>
  );
}
