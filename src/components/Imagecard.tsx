import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  category: string;
  orientation?: 'vertical' | 'landscape';
}

const ImageCard = ({ src, alt, category, orientation = 'landscape' }: ImageCardProps) => {
  return (
    <div
      className={`relative group overflow-hidden bg-gray-200 ${
        orientation === 'vertical' ? 'aspect-[3/4]' : 'aspect-[4/3]'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-semibold">{category}</p>
      </div>
    </div>
  );
};

export default ImageCard;
