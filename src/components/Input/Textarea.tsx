import { forwardRef, type TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, className = "", disabled, id, ...props }, ref) => {
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
        <textarea
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={[
            "w-full rounded-[var(--radius-m)] border px-[var(--spacing-3)] py-[var(--spacing-2)]",
            "bg-[var(--color-surface-neutral-white)] text-[var(--color-text-title)] text-[14px] font-medium",
            "placeholder:text-[var(--color-text-disabled)]",
            "focus:outline-2 focus:outline-offset-0 focus:outline-[var(--color-border-primary-default)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-colors resize-y min-h-[80px]",
            hasError
              ? "border-[var(--color-border-error-default)]"
              : "border-[var(--color-border-neutral-subtle)] hover:border-[var(--color-border-neutral-default)]",
          ].join(" ")}
          {...props}
        />
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

Textarea.displayName = "Textarea";
