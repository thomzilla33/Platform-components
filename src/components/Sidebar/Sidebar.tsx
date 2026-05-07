import type { ReactNode } from "react";

export interface SidebarProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  collapsed?: boolean;
  className?: string;
}

export function Sidebar({
  header,
  children,
  footer,
  collapsed = false,
  className = "",
}: SidebarProps) {
  return (
    <aside
      className={[
        "flex flex-col h-full border-r border-[var(--color-border-neutral-subtle)]",
        "bg-[var(--color-surface-neutral-white)] transition-[width] duration-200",
        collapsed ? "w-16" : "w-60",
        className,
      ].join(" ")}
    >
      {header && (
        <div className="shrink-0 p-[var(--spacing-4)] border-b border-[var(--color-border-neutral-subtle)]">
          {header}
        </div>
      )}
      <nav className="flex-1 overflow-y-auto p-[var(--spacing-2)]">
        {children}
      </nav>
      {footer && (
        <div className="shrink-0 p-[var(--spacing-4)] border-t border-[var(--color-border-neutral-subtle)]">
          {footer}
        </div>
      )}
    </aside>
  );
}
