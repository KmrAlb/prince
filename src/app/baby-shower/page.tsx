'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

// ✅ 7 Vertical Baby Shower Images
const BABY_SHOWER_IMAGES: ImageData[] = [
  {
    src: '/images/babyshower/1.webp',
    alt: 'Baby Shower Moment 1',
    caption: 'A Beautiful Blessing',
    description: 'A warm celebration surrounded by love, joy, and smiles.',
  },
  {
    src: '/images/babyshower/2.webp',
    alt: 'Baby Shower Moment 2',
    caption: 'Joyful Hearts',
    description: 'Capturing the excitement and happiness of the growing family.',
  },
  {
    src: '/images/babyshower/3.webp',
    alt: 'Baby Shower Moment 3',
    caption: 'Cherished Moments',
    description: 'A moment filled with warmth and affection from loved ones.',
  },
  {
    src: '/images/babyshower/5.webp',
    alt: 'Baby Shower Moment 4',
    caption: 'Glowing with Love',
    description: 'The perfect portrait celebrating a beautiful new beginning.',
  },
  {
    src: '/images/babyshower/7.webp',
    alt: 'Baby Shower Moment 5',
    caption: 'A Celebration of Joy',
    description: 'Friends and family gather to celebrate a precious life on the way.',
  },
  {
    src: '/images/babyshower/8.webp',
    alt: 'Baby Shower Moment 6',
    caption: 'Pure Happiness',
    description: 'A candid moment full of laughter and heartfelt emotions.',
  },
  {
    src: '/images/babyshower/9.webp',
    alt: 'Baby Shower Moment 7',
    caption: 'Love All Around',
    description: 'Every glance tells a story of excitement for the little one.',
  },
];

const Sparkle = () => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-sparkle"
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
  />
);

const RainDrop = () => (
  <motion.div
    className="absolute w-1 h-6 bg-white rounded-full opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3, y: 64 }}
    transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 1.5 }}
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * -20}px` }}
  />
);

const BabyShowerPage = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ✅ Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/images/babyshower/baby.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />

        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkle key={i} />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <RainDrop key={i} />
        ))}

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center text-white px-4 space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Baby Shower
            </motion.h1>

            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl">Celebrating a beautiful new beginning</p>
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ✅ Vertical Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {BABY_SHOWER_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-10 mb-24`}
          >
            <div className="w-full md:w-1/2 cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
                className="shadow-xl overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={1000} // ✅ vertical ratio
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              className="w-full md:w-1/2 space-y-4"
              whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800">{image.caption}</h2>
              <p className="text-gray-600 text-lg">{image.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Modal for Viewing Image */}
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
        className="relative max-w-[90vw] max-h-[90vh] w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Full image without cutting */}
        <div className="flex justify-center items-center">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={900}
            height={1200} // vertical aspect
            className="object-contain max-h-[90vh]"
          />
        </div>

        {/* Close button */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
        >
          <svg
            className="w-8 h-8"
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

export default BabyShowerPage;
