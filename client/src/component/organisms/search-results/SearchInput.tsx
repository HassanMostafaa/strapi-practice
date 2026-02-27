import { InlineSvg } from "@/component/atoms/inline-svg/InlineSvg";
import { useMotionPresets } from "@/hooks/useMotionPresets";
import { IGenComponentMoleculesSearchResults } from "@/types/IGenTypes";
import { motion } from "motion/react";

export const SearchInput = ({
  value,
  onChange,
  onSubmit,
  searchInput,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  searchInput: IGenComponentMoleculesSearchResults["searchInput"] | undefined;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (value) onSubmit();
    }
  };

  const { fadeIn } = useMotionPresets();

  return (
    <motion.div
      {...fadeIn({ delay: 0.2, x: -40, duration: 0.5 })}
      whileTap={{ scale: !value ? 0.97 : 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
      className="relative w-full lg:w-3/4 mx-auto h-fit "
    >
      {searchInput?.startIcon && (
        <button
          type="button"
          onClick={() => {
            if (value) onSubmit();
          }}
          className="absolute start-3 top-1/2 cursor-pointer flex justify-center dark:hover:text-primary hover:scale-105 transition-all duration-300 active:scale-90 items-center -translate-y-1/2"
        >
          <InlineSvg
            className="size-5"
            url={`${process.env.NEXT_PUBLIC_API_URL}${searchInput.startIcon.url}`}
          />
        </button>
      )}

      <input
        type="text"
        placeholder={searchInput?.placeholderText ?? "Search here..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`rounded-2xl border-2 border-border focus:ring-2  transition-all duration-500  ring-offset-2 outline-2 ring-primary outline-background  w-full block mx-auto p-3 ${
          searchInput?.endIcon && "pe-10"
        } ${searchInput?.startIcon && "ps-10"} ${
          !searchInput?.endIcon && !searchInput?.startIcon && "px-3"
        }`}
      />

      {searchInput?.endIcon && (
        <button
          type="button"
          onClick={() => {
            if (value) onSubmit();
          }}
          className="absolute end-3 top-1/2 cursor-pointer flex justify-center dark:hover:text-primary hover:scale-105 transition-all duration-300 active:scale-90 items-center -translate-y-1/2"
        >
          <InlineSvg
            className="size-5"
            url={`${process.env.NEXT_PUBLIC_API_URL}${searchInput.endIcon.url}`}
          />
        </button>
      )}
    </motion.div>
  );
};
