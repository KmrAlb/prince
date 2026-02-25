"use client";

import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  category: string;
  orientation?: "vertical" | "landscape";
}

const ImageCard = ({
  src,
  alt,
  category,
  orientation = "landscape",
}: ImageCardProps) => {
  return (
    <div
      className={`relative group overflow-hidden bg-gray-200 cursor-pointer ${
        orientation === "vertical" ? "aspect-[3/4]" : "aspect-[4/3]"
      }`}
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Flare Sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:left-full" />
      </div>

      {/* Text */}
      <div className="absolute bottom-0 w-full p-6">
        <p className="text-white text-xl font-semibold tracking-wide">
          {category}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;