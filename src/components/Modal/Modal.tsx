import { useEffect, useRef, type ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  className?: string;
}

const sizeStyles: Record<ModalSize, string> = {
  sm: "max-w-[400px]",
  md: "max-w-[560px]",
  lg: "max-w-[720px]",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  className = "",
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className={[
        "backdrop:bg-black/50 backdrop:backdrop-blur-sm",
        "bg-transparent p-0 m-auto",
        "open:flex open:items-center open:justify-center",
      ].join(" ")}
    >
      <div
        className={[
          "w-full rounded-[var(--radius-l)] bg-[var(--color-surface-neutral-white)]",
          "border border-[var(--color-border-neutral-subtle)]",
          "shadow-lg",
          sizeStyles[size],
          className,
        ].join(" ")}
      >
        {/* Header */}
        {(title || description) && (
          <div className="px-[var(--spacing-6)] pt-[var(--spacing-6)] pb-[var(--spacing-4)]">
            {title && (
              <h2 className="text-[18px] font-bold text-[var(--color-text-title)]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-[var(--spacing-1)] text-[14px] text-[var(--color-text-body)]">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Body */}
        <div className="px-[var(--spacing-6)] py-[var(--spacing-2)]">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-[var(--spacing-3)] px-[var(--spacing-6)] py-[var(--spacing-4)] border-t border-[var(--color-border-neutral-subtle)]">
            {footer}
          </div>
        )}
      </div>
    </dialog>
  );
}
