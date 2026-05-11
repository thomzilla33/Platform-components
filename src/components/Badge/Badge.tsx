export type BadgeState =
  | "error"
  | "alert"
  | "inProgress"
  | "success"
  | "neutral"
  | "lightBlue"
  | "limeGreen"
  | "yellow"
  | "purple";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  state?: BadgeState;
  size?: BadgeSize;
  className?: string;
}

const stateColors: Record<BadgeState, string> = {
  error: "bg-[var(--color-surface-error-default)]",
  alert: "bg-[var(--color-surface-alert-default)]",
  inProgress: "bg-[var(--color-surface-primary-default)]",
  success: "bg-[var(--color-surface-success-default)]",
  neutral: "bg-[var(--color-surface-neutral-emphasis)]",
  lightBlue: "bg-[var(--color-surface-lightblue-default)]",
  limeGreen: "bg-[var(--color-surface-lime-default)]",
  yellow: "bg-[var(--color-surface-yellow-default)]",
  purple: "bg-[var(--color-surface-purple-default)]",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-3",
};

export function Badge({
  state = "neutral",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      role="status"
      className={[
        "inline-block rounded-full shrink-0",
        stateColors[state],
        sizeStyles[size],
        className,
      ].join(" ")}
    />
  );
}
