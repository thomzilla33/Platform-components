import type { ReactNode } from "react";

export interface TopbarProps {
  /** Left section — typically logo or brand */
  leading?: ReactNode;
  /** Center section — navigation tabs or breadcrumbs */
  center?: ReactNode;
  /** Right section — actions, user avatar, etc. */
  trailing?: ReactNode;
  className?: string;
}

export function Topbar({
  leading,
  center,
  trailing,
  className = "",
}: TopbarProps) {
  return (
    <header
      className={[
        "flex items-center justify-between h-14 px-[var(--spacing-4)]",
        "border-b border-[var(--color-border-neutral-subtle)]",
        "bg-[var(--color-surface-neutral-white)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-[var(--spacing-3)] shrink-0">
        {leading}
      </div>
      <div className="flex items-center gap-[var(--spacing-2)] flex-1 justify-center">
        {center}
      </div>
      <div className="flex items-center gap-[var(--spacing-2)] shrink-0">
        {trailing}
      </div>
    </header>
  );
}
