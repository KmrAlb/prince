'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

interface EngagementImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
    orientation?: 'vertical' | 'landscape';

}

const ENGAGEMENT_IMAGES: EngagementImage[] = [
  {
    src: '/images/engagement/4.webp',
    alt: 'Engagement 1',
    caption: 'A promise of love.',
    description:
      'Celebrating the beautiful moment when two hearts unite in a promise of forever.',
  },
  {
    src: '/images/engagement/1 (2).webp',
    alt: 'Engagement 2',
    caption: 'Joyful beginnings.',
    description:
      'The joy of engagement fills the air as families come together to celebrate love.',
  },
  {
    src: '/images/engagement/7.webp',
    alt: 'Engagement 3',
    caption: 'A ring of commitment.',
    description:
      'The exchange of rings symbolizes a commitment that lasts a lifetime.',
  },
  
  {
    src: '/images/engagement/1 (6).webp',
    alt: 'Engagement 5',
    caption: 'A celebration of love.',
    description:
      'An evening filled with laughter, joy, and the promise of a beautiful future together.',
  },
  {
  src: '/images/engagement/1 (3).webp',
  alt: 'Engagement 6',
  caption: 'Hand in hand, forever begins.',
  description:
    'Capturing a heartfelt moment as the couple celebrates the start of their journey together.',
},
{
  src: '/images/engagement/6.webp',
  alt: 'Engagement 7',
  caption: 'A promise beautifully made.',
  description:
    'A tender exchange of emotions as two souls commit to a lifetime of togetherness.',
        orientation: 'vertical',

},
{
  src: '/images/engagement/8.webp',
  alt: 'Engagement 8',
  caption: 'Love that lights the room.',
  description:
    'The couple glows with joy as family and friends surround them in celebration.',
        orientation: 'vertical',

},

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

const EngagementPage = () => {
  const [selectedImage, setSelectedImage] = useState<EngagementImage | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/images/prewedding/1 (6).webp')",
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
              Engagement Celebration
            </motion.h1>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            > 
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl">Honoring love and commitment</p>
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}

            <div className="max-w-6xl mx-auto px-4 py-16">
              {ENGAGEMENT_IMAGES.map((image, index) => (
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
                        width={image.orientation === 'vertical' ? 600 : 800}
                        height={image.orientation === 'vertical' ? 800 : 600}
                        className={`rounded-none ${image.orientation === 'vertical' ? 'object-contain' : 'object-cover'}`}
                      />
                    </motion.div>
                  </div>
                  <motion.div className="w-full md:w-1/2 space-y-4" whileHover={{ x: index % 2 === 0 ? 10 : -10 }}>
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
                    className="relative w-full max-w-3xl max-h-[90vh] flex justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={selectedImage.orientation === 'vertical' ? 600 : 800}
                      height={selectedImage.orientation === 'vertical' ? 800 : 600}
                      className={`rounded-none shadow-2xl ${selectedImage.orientation === 'vertical' ? 'object-contain' : 'object-cover'}`}
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      };

export default EngagementPage;
