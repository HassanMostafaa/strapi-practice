import { FunctionComponent } from "react";

export const HeroDots: FunctionComponent<{
  total: number;
  currentIndex: number;
  onChange: (index: number) => void;
  className?: string;
}> = ({ total, currentIndex, onChange, className = "" }) => {
  if (total <= 1) return null;

  return (
    <div
      className={`absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 ${className}`}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === currentIndex;

        return (
          <button
            key={index}
            onClick={() => onChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-8 cursor-pointer rounded-full transition-all duration-300 ${
              isActive
                ? "bg-primary border-2 border-background ring-2 ring-primary"
                : "bg-background-secondary"
            }`}
          />
        );
      })}
    </div>
  );
};
