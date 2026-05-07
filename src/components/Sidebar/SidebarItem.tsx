import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface SidebarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: ReactNode;
}

export function SidebarItem({
  icon,
  label,
  active = false,
  collapsed = false,
  badge,
  className = "",
  ...props
}: SidebarItemProps) {
  return (
    <button
      className={[
        "flex items-center w-full rounded-[var(--radius-m)] transition-colors text-[14px] font-medium",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-border-primary-default)]",
        collapsed
          ? "justify-center p-[var(--spacing-2)]"
          : "gap-[var(--spacing-3)] px-[var(--spacing-3)] py-[var(--spacing-2)]",
        active
          ? "bg-[var(--color-surface-primary-more-subtle)] text-[var(--color-text-link)]"
          : "text-[var(--color-text-body)] hover:bg-[var(--color-surface-neutral-subtle)] hover:text-[var(--color-text-title)]",
        className,
      ].join(" ")}
      title={collapsed ? label : undefined}
      {...props}
    >
      {icon && <span className="shrink-0 size-5">{icon}</span>}
      {!collapsed && <span className="flex-1 text-left truncate">{label}</span>}
      {!collapsed && badge && <span className="shrink-0">{badge}</span>}
    </button>
  );
}
