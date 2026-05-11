import type { ReactNode } from "react";

/* ── Table Root ── */
export interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <div
      className={[
        "w-full overflow-auto rounded-[var(--radius-m)]",
        "border border-[var(--color-border-neutral-subtle)]",
        className,
      ].join(" ")}
    >
      <table className="w-full border-collapse text-[14px]">{children}</table>
    </div>
  );
}

/* ── Table Header ── */
export interface TableHeadProps {
  children: ReactNode;
}

export function TableHead({ children }: TableHeadProps) {
  return (
    <thead className="bg-[var(--color-surface-neutral-subtle)]">
      {children}
    </thead>
  );
}

/* ── Table Body ── */
export interface TableBodyProps {
  children: ReactNode;
}

export function TableBody({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>;
}

/* ── Table Row ── */
export interface TableRowProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function TableRow({
  children,
  selected = false,
  onClick,
  className = "",
}: TableRowProps) {
  return (
    <tr
      onClick={onClick}
      className={[
        "border-b border-[var(--color-border-neutral-subtle)] transition-colors",
        "last:border-b-0",
        onClick ? "cursor-pointer" : "",
        selected
          ? "bg-[var(--color-surface-primary-more-subtle)]"
          : "hover:bg-[var(--color-surface-neutral-subtle)]",
        className,
      ].join(" ")}
    >
      {children}
    </tr>
  );
}

/* ── Table Header Cell ── */
export interface TableHeaderCellProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function TableHeaderCell({
  children,
  align = "left",
  className = "",
}: TableHeaderCellProps) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left";

  return (
    <th
      className={[
        "px-[var(--spacing-4)] py-[var(--spacing-3)]",
        "text-[12px] font-bold text-[var(--color-text-caption)] uppercase tracking-wide",
        alignClass,
        className,
      ].join(" ")}
    >
      {children}
    </th>
  );
}

/* ── Table Cell ── */
export interface TableCellProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function TableCell({
  children,
  align = "left",
  className = "",
}: TableCellProps) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left";

  return (
    <td
      className={[
        "px-[var(--spacing-4)] py-[var(--spacing-3)]",
        "text-[var(--color-text-body)]",
        alignClass,
        className,
      ].join(" ")}
    >
      {children}
    </td>
  );
}
