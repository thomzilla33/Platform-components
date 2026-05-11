import type { ReactNode } from "react";

export type TagVariant =
  | "neutral"
  | "primary"
  | "success"
  | "error"
  | "alert"
  | "yellow"
  | "purple"
  | "lightBlue"
  | "limeGreen";

export type TagSize = "sm" | "md";

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<TagVariant, string> = {
  neutral:
    "bg-[var(--color-surface-neutral-default)] text-[var(--color-text-subtitle)] border-[var(--color-border-neutral-subtle)]",
  primary:
    "bg-[var(--color-surface-primary-more-subtle)] text-[var(--color-text-link)] border-[var(--color-border-primary-subtle)]",
  success:
    "bg-[var(--color-surface-success-more-subtle)] text-[var(--color-text-success)] border-[var(--color-border-success-subtle)]",
  error:
    "bg-[var(--color-surface-error-more-subtle)] text-[var(--color-text-error)] border-[var(--color-border-error-subtle)]",
  alert:
    "bg-[var(--color-surface-alert-more-subtle)] text-[var(--color-text-alert)] border-[var(--color-border-alert-subtle)]",
  yellow:
    "bg-[var(--color-surface-yellow-more-subtle)] text-[var(--color-text-yellow)] border-[var(--color-border-yellow-subtle)]",
  purple:
    "bg-[var(--color-surface-purple-more-subtle)] text-[var(--color-text-purple)] border-[var(--color-border-primary-subtle)]",
  lightBlue:
    "bg-[var(--color-surface-lightblue-more-subtle)] text-[var(--color-text-light-blue)] border-[var(--color-border-primary-subtle)]",
  limeGreen:
    "bg-[var(--color-surface-lime-more-subtle)] text-[var(--color-text-lime-green)] border-[var(--color-border-success-subtle)]",
};

const sizeStyles: Record<TagSize, string> = {
  sm: "h-5 px-1.5 text-[10px] gap-1",
  md: "h-6 px-2 text-[12px] gap-1.5",
};

export function Tag({
  variant = "neutral",
  size = "md",
  icon,
  children,
  className = "",
}: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center font-semibold rounded-[var(--radius-s)] border",
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(" ")}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
