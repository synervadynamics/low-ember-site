import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BaseButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  ariaLabel?: string;
};

type AnchorButtonProps = BaseButtonProps & {
  href: string;
};

type NativeButtonProps = BaseButtonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const buttonVariants = {
  primary:
    "border border-[color:var(--color-ember)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember)_88%,white)_0%,var(--color-ember)_100%)] text-[var(--color-text)] shadow-[0_10px_28px_rgba(0,0,0,0.24)] hover:border-[color:var(--color-ember-hover)] hover:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember-hover)_90%,white)_0%,var(--color-ember-hover)_100%)] active:border-[color:var(--color-ember-hover)] active:bg-[var(--color-ember-hover)]",
  secondary:
    "border border-[color:var(--color-divider-strong)] bg-[linear-gradient(180deg,rgba(22,19,16,0.92)_0%,rgba(12,10,8,0.96)_100%)] text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:bg-[color:rgba(197,138,69,0.08)] hover:border-[color:var(--color-brass)] active:bg-[color:rgba(197,138,69,0.12)] active:border-[color:var(--color-brass)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-muted)] hover:text-[var(--color-brass-soft)] hover:bg-[color:rgba(197,138,69,0.06)] active:text-[var(--color-brass-soft)] active:bg-[color:rgba(197,138,69,0.1)]",
} as const;

const buttonSizes = {
  sm: "min-h-10 px-3.5 py-2 text-[9px] tracking-[0.2em] sm:min-h-11 sm:px-4 sm:text-[10px]",
  default:
    "min-h-11 px-4 py-2.5 text-[10px] tracking-[0.22em] sm:min-h-12 sm:px-5 sm:text-[11px]",
  lg: "min-h-12 px-5 py-3 text-[10px] tracking-[0.22em] sm:min-h-[3.25rem] sm:px-6 sm:text-[11px]",
} as const;

const baseClassName =
  "low-ember-focus-ring low-ember-transition inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] text-center font-medium uppercase motion-reduce:transform-none hover:-translate-y-px active:translate-y-0 [&_svg]:shrink-0 disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "default";
  const className = cn(
    baseClassName,
    buttonSizes[size],
    buttonVariants[variant],
    props.className,
  );

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        aria-label={props.ariaLabel}
        className={className}
      >
        {props.children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button
      type={buttonProps.type ?? "button"}
      disabled={buttonProps.disabled}
      aria-label={buttonProps.ariaLabel}
      className={className}
    >
      {buttonProps.children}
    </button>
  );
}
