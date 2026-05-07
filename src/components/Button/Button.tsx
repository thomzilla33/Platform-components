import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-surface-primary-default)] text-[var(--color-text-negative)]",
    "hover:bg-[var(--color-surface-primary-emphasis)]",
    "active:bg-[var(--color-surface-primary-darker)]",
  ].join(" "),
  secondary: [
    "bg-[var(--color-surface-neutral-white)] text-[var(--color-text-title)]",
    "border border-[var(--color-border-neutral-subtle)]",
    "hover:bg-[var(--color-surface-neutral-subtle)]",
    "active:bg-[var(--color-surface-neutral-default)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-title)]",
    "hover:bg-[var(--color-surface-neutral-subtle)]",
    "active:bg-[var(--color-surface-neutral-default)]",
  ].join(" "),
  destructive: [
    "bg-[var(--color-surface-error-default)] text-[var(--color-text-negative)]",
    "hover:bg-[var(--color-surface-error-lighter)]",
    "active:bg-[var(--color-surface-error-darker)]",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-[var(--spacing-3)] text-[12px] gap-[var(--spacing-1)]",
  md: "h-9 px-[var(--spacing-4)] text-[14px] gap-[var(--spacing-2)]",
  lg: "h-10 px-[var(--spacing-5)] text-[16px] gap-[var(--spacing-2)]",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center font-semibold rounded-[var(--radius-m)] transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-border-primary-default)]",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </button>
  );
}
