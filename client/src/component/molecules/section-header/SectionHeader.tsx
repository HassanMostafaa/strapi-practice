// SectionHeader.tsx
import { ReactNode } from "react";

interface SectionHeaderProps {
  title?: string | null;
  subtitle?: string | null;
  action?: ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
  className,
}) => {
  if (!title && !subtitle && !action) return null;

  return (
    <div
      className={`flex items-center flex-wrap justify-between gap-4 ${className ?? ""}`}
    >
      {(title || subtitle) && (
        <div className="flex flex-col gap-2">
          {title && <p className="text-xl lg:text-4xl">{title}</p>}
          {subtitle && (
            <p className="text-xs md:text-ms lg:text-lg text-foreground-secondary">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {action && <div className="shrink-0 ms-auto">{action}</div>}
    </div>
  );
};
