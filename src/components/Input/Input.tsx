import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  inputSize?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "h-8 text-[12px]",
  md: "h-9 text-[14px]",
  lg: "h-10 text-[16px]",
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      leadingIcon,
      trailingIcon,
      inputSize = "md",
      className = "",
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(error);

    return (
      <div className={["flex flex-col gap-[var(--spacing-1)]", className].join(" ")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-[12px] font-semibold text-[var(--color-text-label)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leadingIcon && (
            <span className="absolute left-[var(--spacing-3)] top-1/2 -translate-y-1/2 text-[var(--color-icon-neutral-dark)]">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={[
              "w-full rounded-[var(--radius-m)] border px-[var(--spacing-3)] font-medium",
              "bg-[var(--color-surface-neutral-white)] text-[var(--color-text-title)]",
              "placeholder:text-[var(--color-text-disabled)]",
              "focus:outline-2 focus:outline-offset-0 focus:outline-[var(--color-border-primary-default)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors",
              hasError
                ? "border-[var(--color-border-error-default)]"
                : "border-[var(--color-border-neutral-subtle)] hover:border-[var(--color-border-neutral-default)]",
              sizeStyles[inputSize],
              leadingIcon ? "pl-[var(--spacing-10)]" : "",
              trailingIcon ? "pr-[var(--spacing-10)]" : "",
            ].join(" ")}
            {...props}
          />
          {trailingIcon && (
            <span className="absolute right-[var(--spacing-3)] top-1/2 -translate-y-1/2 text-[var(--color-icon-neutral-dark)]">
              {trailingIcon}
            </span>
          )}
        </div>
        {(error || hint) && (
          <span
            className={[
              "text-[11px]",
              hasError
                ? "text-[var(--color-text-error)]"
                : "text-[var(--color-text-caption)]",
            ].join(" ")}
          >
            {error ?? hint}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
