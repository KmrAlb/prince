'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

// Define the structure of image data
interface ImageData {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

// Sample birthday images
const BIRTHDAY_IMAGES: ImageData[] = [
  {
    src: '/images/birthday/1 (6).webp',
    alt: 'Birthday Party 2',
    caption: 'A cake to remember.',
    description:
      'The perfect cake to match the occasion—sweet, fun, and delicious, just like the day.',
  },
  {
    src: '/images/birthday/1 (1).webp',
    alt: 'Birthday Party 3',
    caption: 'Laughter and fun.',
    description:
      'Cherishing the moments of joy and togetherness shared with loved ones on this special day.',
  },
  {
    src: '/images/birthday/1 (7).webp',
    alt: 'Birthday Party 4',
    caption: 'Unwrapping the love.',
    description:
      'Opening presents with excitement, surrounded by love and happiness, making unforgettable memories.',
  },
  {
    src: '/images/birthday/1 (2).webp',
    alt: 'Birthday Party 5',
    caption: 'The perfect celebration.',
    description:
      'From decorations to games, every detail comes together to create a birthday celebration to remember.',
  },
  {
    src: '/images/birthday/47.webp',
    alt: 'Birthday Party 6',
    caption: 'Smiles that light up the room.',
    description:
      'Capturing genuine happiness and heartfelt moments shared during this special celebration.',
  },
  {
    src: '/images/birthday/89.webp',
    alt: 'Birthday Party 7',
    caption: 'A day full of surprises.',
    description:
      'From unexpected gifts to joyful reactions, every moment adds magic to the day.',
  },
  {
    src: '/images/birthday/24.webp',
    alt: 'Birthday Party 8',
    caption: 'Making memories that last.',
    description:
      'Documenting laughter, play, and precious bonds that make birthdays unforgettable.',
  },
  {
    src: '/images/birthday/98.webp',
    alt: 'Birthday Party 9',
    caption: 'A celebration of togetherness.',
    description:
      'Friends and family come together to share love, laughter, and joyful moments.',
  },
  {
    src: '/images/birthday/51.webp',
    alt: 'Birthday Party 10',
    caption: 'Joy in every detail.',
    description:
      'Colorful decorations, bright smiles, and heartfelt wishes create the perfect celebration.',
  },
  {
    src: '/images/birthday/82.webp',
    alt: 'Birthday Party 11',
    caption: 'Candles, wishes, and wonder.',
    description:
      'Capturing the magical moment when wishes are made and candles glow bright.',
  },
  {
    src: '/images/birthday/36.webp',
    alt: 'Birthday Party 12',
    caption: 'A moment worth celebrating.',
    description:
      'From warm hugs to cheerful cheers, every second reflects the joy of the occasion.',
  },
];

// Sparkle animation
const Sparkle = () => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-sparkle"
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
  />
);

// Raindrop animation
const RainDrop = () => (
  <motion.div
    className="absolute w-1 h-6 bg-white rounded-full opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3, y: 64 }}
    transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 1.5 }}
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * -20}px` }}
  />
);

const BirthdayPage = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  // ✅ Add body scroll lock (same as WeddingPage)
  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/images/birthday/1 (4).webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkle key={`sparkle-${i}`} />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <RainDrop key={`rain-${i}`} />
        ))}

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-white space-y-4 px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Birthday Celebrations
            </motion.h1>

            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl">
                A day full of love, laughter, and memories
              </p>
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {BIRTHDAY_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 mb-24 relative`}
          >
            <div className="w-full md:w-1/2 relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-none"
                />
              </motion.div>
            </div>

            <motion.div
              className="w-full md:w-1/2 space-y-4"
              whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {image.caption}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {image.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="responsive"
                width={800}
                height={600}
                className="rounded-none shadow-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayPage;
