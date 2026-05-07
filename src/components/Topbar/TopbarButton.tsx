import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface TopbarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  active?: boolean;
  children?: ReactNode;
}

export function TopbarButton({
  icon,
  active = false,
  children,
  className = "",
  ...props
}: TopbarButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center gap-[var(--spacing-1)] px-[var(--spacing-3)] h-8",
        "text-[14px] font-semibold rounded-[var(--radius-m)] transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-border-primary-default)]",
        active
          ? "bg-[var(--color-surface-primary-more-subtle)] text-[var(--color-text-link)]"
          : "text-[var(--color-text-body)] hover:bg-[var(--color-surface-neutral-subtle)] hover:text-[var(--color-text-title)]",
        className,
      ].join(" ")}
      {...props}
    >
      {icon && <span className="shrink-0 size-4">{icon}</span>}
      {children}
    </button>
  );
}
