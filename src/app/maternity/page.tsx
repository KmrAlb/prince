'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

interface MaternityImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

const MATERNITY_IMAGES: MaternityImage[] = [
  {
    src: '/images/maternity/1 (2).webp',
    alt: 'Maternity Photo 1',
    caption: 'A new life begins, cradled in love.',
    description: 'Capturing the gentle moments of anticipation, where every touch tells a story of unconditional love and dreams yet to unfold.'
  },
  {
    src: '/images/maternity/1 (5).webp',
    alt: 'Maternity Photo 4',
    caption: 'A journey of love, hope, and dreams.',
    description: 'Through our lens, we celebrate the beautiful transformation of motherhood, documenting the grace and joy of this remarkable journey.'
  },
  {
    src: '/images/maternity/1 (8).webp',
    alt: 'Maternity Photo 5',
    caption: 'The glow of motherhood shines bright.',
    description: 'Each session is carefully crafted to highlight the natural beauty and strength that radiates from expectant mothers.'
  },
  {
    src: '/images/maternity/1 (4).webp',
    alt: 'Maternity Photo 6',
    caption: 'In every smile, a story unfolds.',
    description: 'We specialize in creating intimate portraits that capture both the tenderness and power of this transformative time.'
  },
  {
    src: '/images/maternity/1 (7).webp',
    alt: 'Maternity Photo 7',
    caption: 'Embracing the miracle within.',
    description: 'Our photography captures the essence of motherhood, showcasing the profound bond between mother and child even before their first embrace.'
  },
  {
    src: '/images/maternity/9.webp',
    alt: 'Maternity Photo 8',
    caption: 'The beauty of anticipation.',
    description: 'Each click of the shutter freezes a moment in time, celebrating the excitement and wonder that comes with expecting a new addition to the family.'
  }
];

const Sparkle = () => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-sparkle"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const RainDrop = () => (
  <motion.div
    className="absolute w-1 h-6 bg-white rounded-full opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3, y: 64 }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay: Math.random() * 1.5,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -20}px`,
    }}
  />
);

const MaternityPage = () => {
  const [selectedImage, setSelectedImage] = useState<MaternityImage | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/images/maternity/1 (1).webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        {/* Sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkle key={`sparkle-${i}`} />
        ))}
        {/* Rain */}
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
              Maternity Moments
            </motion.h1>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl">Creating timeless memories</p>
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {MATERNITY_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            } items-center gap-8 mb-24 relative`}
          >
            <div className="w-full md:w-1/2 relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Replace img with Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive" // Use responsive layout for better performance
                  width={800} // Specify width for optimization
                  height={600} // Specify height for optimization
                  className="rounded-none"
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full md:w-1/2 space-y-4"
              whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800">{image.caption}</h2>
              <p className="text-gray-600 leading-relaxed">{image.description}</p>
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
              {/* Replace img with Image in modal as well */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="responsive" // Use responsive layout for better performance
                width={800} // Specify width for optimization
                height={600} // Specify height for optimization
                className="rounded-none shadow-2xl"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.caption}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </motion.div>
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
    </div>
);
};

export default MaternityPage;
