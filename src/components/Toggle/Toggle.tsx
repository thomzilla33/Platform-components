import { forwardRef, type InputHTMLAttributes } from "react";

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  toggleSize?: "sm" | "md";
}

const sizeStyles = {
  sm: { track: "w-8 h-[18px]", thumb: "size-[14px]", translate: "translate-x-[14px]" },
  md: { track: "w-10 h-[22px]", thumb: "size-[18px]", translate: "translate-x-[18px]" },
} as const;

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, toggleSize = "md", className = "", disabled, ...props }, ref) => {
    const s = sizeStyles[toggleSize];

    return (
      <label
        className={[
          "inline-flex items-center gap-[var(--spacing-2)] cursor-pointer",
          disabled ? "opacity-50 cursor-not-allowed" : "",
          className,
        ].join(" ")}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={[
              s.track,
              "rounded-full transition-colors",
              "bg-[var(--color-surface-neutral-emphasis)]",
              "peer-checked:bg-[var(--color-surface-primary-default)]",
              "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-border-primary-default)]",
            ].join(" ")}
          />
          <div
            className={[
              s.thumb,
              "absolute top-[2px] left-[2px] rounded-full bg-white transition-transform shadow-sm",
              "peer-checked:" + s.translate,
            ].join(" ")}
          />
        </div>
        {label && (
          <span className="text-[14px] font-medium text-[var(--color-text-title)]">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";
