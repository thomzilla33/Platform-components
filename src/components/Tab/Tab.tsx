import type { ReactNode } from "react";

/* ── Tab Group ── */
export interface TabGroupProps {
  children: ReactNode;
  className?: string;
}

export function TabGroup({ children, className = "" }: TabGroupProps) {
  return (
    <div
      role="tablist"
      className={[
        "inline-flex items-center gap-[var(--spacing-1)]",
        "bg-[var(--color-surface-neutral-default)] rounded-[var(--radius-m)] p-[var(--spacing-0-5)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* ── Tab Item ── */
export interface TabItemProps {
  active?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function TabItem({
  active = false,
  icon,
  children,
  onClick,
  className = "",
}: TabItemProps) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={[
        "inline-flex items-center gap-[var(--spacing-1)] px-[var(--spacing-3)] py-[var(--spacing-1)]",
        "text-[13px] font-semibold rounded-[var(--radius-s)] transition-all",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-border-primary-default)]",
        active
          ? "bg-[var(--color-surface-neutral-white)] text-[var(--color-text-title)] shadow-sm"
          : "bg-transparent text-[var(--color-text-body)] hover:text-[var(--color-text-subtitle)]",
        className,
      ].join(" ")}
    >
      {icon && <span className="shrink-0 size-4">{icon}</span>}
      {children}
    </button>
  );
}
