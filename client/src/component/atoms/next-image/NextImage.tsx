import Image from "next/image";

export const NextImage = ({
  alt,
  url,
  className = "object-cover",
  priority = false,
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  alt: string;
  url: string;
  className: string;
  priority: boolean;
  fill: boolean;
  sizes: string;
}) => {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_API_URL ?? ""}${url}`}
      alt={alt}
      fill={fill}
      className={`${className}`}
      sizes={sizes}
      priority={priority}
      unoptimized={process.env.NODE_ENV === "development"}
    />
  );
};
