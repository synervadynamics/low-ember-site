import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BaseButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
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
    "border border-[color:var(--color-ember)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember)_88%,white)_0%,var(--color-ember)_100%)] text-[var(--color-text)] shadow-[0_10px_28px_rgba(0,0,0,0.24)] hover:border-[color:var(--color-ember-hover)] hover:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ember-hover)_88%,white)_0%,var(--color-ember-hover)_100%)] active:border-[color:var(--color-ember-hover)] active:bg-[var(--color-ember-hover)]",
  secondary:
    "border border-[color:var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(19,17,14,0.92)_0%,rgba(13,12,10,0.94)_100%)] text-[var(--color-text)] hover:bg-[color:rgba(197,138,69,0.08)] hover:border-[color:var(--color-brass)] active:bg-[color:rgba(197,138,69,0.12)] active:border-[color:var(--color-brass)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-muted)] hover:text-[var(--color-brass-soft)] hover:bg-[color:rgba(197,138,69,0.06)] active:text-[var(--color-brass-soft)] active:bg-[color:rgba(197,138,69,0.1)]",
} as const;

const baseClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.22em] transition-[background-color,border-color,color,box-shadow] duration-200 sm:min-h-12 sm:px-5 sm:text-[11px] disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = cn(baseClassName, buttonVariants[variant], props.className);

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
