import Image from "next/image";

export const NextImage = ({
  alt,
  url,
  className = "object-cover",
  priority = false,
  fill = true,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  alt: string;
  url: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}) => {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_API_URL ?? ""}${url}`}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={`${className}`}
      sizes={sizes}
      priority={priority}
      unoptimized={process.env.NODE_ENV === "development"}
    />
  );
};
