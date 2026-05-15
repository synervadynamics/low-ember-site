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
    "border border-[color:color-mix(in_srgb,var(--color-ember)_70%,var(--color-brass)_30%)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember-hover)_66%,var(--color-rust)_34%)_0%,color-mix(in_srgb,var(--color-ember)_84%,black)_52%,color-mix(in_srgb,var(--color-rust)_90%,black)_100%)] text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(255,239,210,0.18),inset_0_-1px_0_rgba(0,0,0,0.24),0_14px_34px_rgba(0,0,0,0.34)] ring-1 ring-inset ring-[rgba(255,239,210,0.06)] hover:border-[color:var(--color-brass-soft)] hover:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember-hover)_72%,var(--color-rust)_28%)_0%,color-mix(in_srgb,var(--color-ember-hover)_78%,black)_54%,color-mix(in_srgb,var(--color-rust)_84%,black)_100%)] hover:shadow-[inset_0_1px_0_rgba(255,239,210,0.24),inset_0_-1px_0_rgba(0,0,0,0.2),0_18px_44px_rgba(0,0,0,0.42),0_0_0_1px_rgba(208,161,100,0.3),0_0_28px_rgba(208,161,100,0.14)] hover:ring-[rgba(208,161,100,0.28)] active:border-[color:var(--color-brass)] active:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember)_82%,black)_0%,color-mix(in_srgb,var(--color-rust)_92%,black)_100%)] active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),0_8px_20px_rgba(0,0,0,0.28)]",
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
  "low-ember-focus-ring low-ember-transition inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] text-center font-medium uppercase motion-reduce:transform-none hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.995] [&_svg]:shrink-0 disabled:cursor-not-allowed disabled:opacity-50";

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
