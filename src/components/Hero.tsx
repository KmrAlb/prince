'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile threshold at 768px
    };

    handleResize(); // Check initially
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  useEffect(() => {
    const imagePreload = new window.Image();
    imagePreload.src = isMobile ? '/images/hero-mobile.jpg' : '/images/hero1.jpg'; // Preload appropriate image
    imagePreload.onload = () => {
      setImageLoaded(true);
    };
  }, [isMobile]);

  return (
    <div className="relative h-[90vh] md:h-[90vh] overflow-hidden bg-black">
      <Image
        src={isMobile ? '/images/wedding/0.webp' : '/images/wedding/1.webp'} // Use mobile image for small screens
        alt="Wedding Photography"
        fill
        priority
        sizes="100vw"
        className={`opacity-80 transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 opacity-0 transition-all duration-700 ease-out transform -translate-y-10 animate-slide-up"
            >
              Capturing Your Special Moments
            </h1>
            <p className="text-xl md:text-2xl opacity-0 transition-all duration-700 ease-out transform -translate-y-10 animate-slide-up delay-200">
              Professional Wedding Photography & Cinematography
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
