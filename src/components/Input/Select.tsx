import { forwardRef, type SelectHTMLAttributes } from "react";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  placeholder?: string;
  options: readonly { value: string; label: string }[];
  selectSize?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "h-8 text-[12px]",
  md: "h-9 text-[14px]",
  lg: "h-10 text-[16px]",
} as const;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      hint,
      error,
      placeholder,
      options,
      selectSize = "md",
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
        <select
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={[
            "w-full rounded-[var(--radius-m)] border px-[var(--spacing-3)] font-medium appearance-none",
            "bg-[var(--color-surface-neutral-white)] text-[var(--color-text-title)]",
            "focus:outline-2 focus:outline-offset-0 focus:outline-[var(--color-border-primary-default)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-colors",
            "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%235C5C5C%22%20d%3d%22M2.5%204.5L6%208l3.5-3.5%22%2f%3e%3c%2fsvg%3e')]",
            "bg-no-repeat bg-[right_12px_center] pr-[var(--spacing-10)]",
            hasError
              ? "border-[var(--color-border-error-default)]"
              : "border-[var(--color-border-neutral-subtle)] hover:border-[var(--color-border-neutral-default)]",
            sizeStyles[selectSize],
          ].join(" ")}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select";
